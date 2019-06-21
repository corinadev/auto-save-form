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

const delayedResponse = (url, returnValue) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`API | ${url} =>> ${JSON.stringify(returnValue)}`);
      resolve(returnValue);
    }, 500);
  });
};

export const getTasks = () => delayedResponse("GET /api/tasks", tasks);
export const getCases = () => delayedResponse("GET /api/cases", cases);
export const getDrafts = () => delayedResponse("GET /api/drafts", drafts);

export const getTask = id =>
  delayedResponse(`GET /api/tasks/${id}`, tasks.find(item => item.id === id));
export const getCase = id =>
  delayedResponse(`GET /api/cases/${id}`, cases.find(item => item.id === id));

const findUserDraftByEntityTypeAndId = (entityId, entityType, userId) => {
  return drafts.find(
    item =>
      item.entityId === entityId &&
      item.entityType === entityType &&
      item.userId === userId
  );
};
export const getDraft = (entityId, entityType, userId) =>
  delayedResponse(
    `GET /api/drafts/user/${userId}/${entityType}/${entityId || ""}`,
    findUserDraftByEntityTypeAndId(entityId, entityType, userId)
  );

const saveItem = (itemType, items, item, getLatestId) => {
  if (!item.id) {
    // Means we have a new item => add it
    item.id = getLatestId();
    return delayedResponse(
      `POST /api/${itemType} ${JSON.stringify(item)}`,
      items.push(item)
    );
  }

  // Otherwise, we do an update
  const toUpdate = items.find(i => i.id === item.id);
  if (!toUpdate) {
    // TODO Throw error here to simulate backend error
    console.error("Trying to update item with unkown ID", item);
    return delayedResponse("ERROR TODO", null);
  }

  const index = items.indexOf(toUpdate);
  items[index] = item;
  return delayedResponse(
    `PUT /api/${itemType}/${item.id} ${JSON.stringify(item)}`,
    item
  );
};

export const saveTask = task => saveItem("tasks", tasks, task, getLatestTaskId);
export const saveCase = caseInfo =>
  saveItem("cases", cases, caseInfo, getLatestCaseId);
export const saveDraft = draft => {
  const existingDraft = findUserDraftByEntityTypeAndId(
    draft.entityId,
    draft.entityType,
    draft.userId
  );

  if (existingDraft) {
    draft.id = existingDraft.id;
  }
  return saveItem("drafts", drafts, draft, getLatestDraftId);
};
