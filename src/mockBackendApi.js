// Each array corresponds to a database table in a real production situation

let latestTaskId = 0;
const getLatestTaskId = () => ++latestTaskId;

const tasks = [
  {
    id: ++latestTaskId,
    description: "Send patch",
    assignee: "Bob",
    dueDate: new Date()
  }
];

let latestCaseId = 0;
const getLatestCaseId = () => ++latestCaseId;

const cases = [];

let latestDraftId = 0;
const getLatestDraftId = () => ++latestDraftId;
const drafts = [];

export const ENTITY_TYPE = {
  TASK: "TASK",
  CASE: "CASE"
};

const delay = returnValue => {
  return new Promise(resolve => {
    console.log("REQUESTING ...", returnValue);
    setTimeout(() => {
      resolve(returnValue);
    }, 500);
  });
};

export const getTasks = () => delay(tasks);
export const getCases = () => delay(cases);
export const getDrafts = () => delay(drafts);

export const getTask = id => delay(tasks.find(item => item.id === id));
export const getCase = id => delay(cases.find(item => item.id === id));
export const getDraft = (entityId, entityType, userId) =>
  delay(
    drafts.find(
      item =>
        item.entityId === entityId &&
        item.entityType === entityType &&
        item.useId === userId
    )
  );

const saveItem = (items, item, getLatestId) => {
  if (!item.id) {
    // Means we have a new item => add it
    item.id = getLatestId();
    return delay(items.push(item));
  }

  // Otherwise, we do an update
  const toUpdate = items.find(i => i.id === item.id);
  if (!toUpdate) {
    // TODO Throw error here to simulate backend error
    console.error("Trying to update item with unkown ID", item);
    return delay(null);
  }

  const index = items.indexOf(toUpdate);
  items[index] = item;
  return delay(item);
};

export const saveTask = task => saveItem(tasks, task, getLatestTaskId);
export const saveCase = caseInfo => saveCase(cases, caseInfo, getLatestCaseId);
export const saveDraft = draft => saveDraft(drafts, draft, getLatestDraftId);
