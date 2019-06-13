import { tsTypeAliasDeclaration } from "@babel/types";

// Each array corresponds to a database table in a real production situation

const tasks = [];
const cases = [];
const drafts = [];

const delay = returnValue => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(returnValue);
    }, 500);
  });
};

export const getTasks = () => delay(tasks);
export const getCases = () => delay(cases);
export const getDrafts = () => delay(drafts);

export const getTask = id => delay(tasks.filter(item => item.id === id));
export const getCase = id => delay(cases.filter(item => item.id === id));
export const getDraft = (entityId, entityType, userId) =>
  delay(
    drafts.filter(
      item =>
        item.entityId === entityId &&
        item.entityType === entityType &&
        item.useId === userId
    )
  );

export const addTask = task => delay(tasks.push(task));
export const addCase = caseInfo => delay(cases.push(caseInfo));
export const addDraft = draft => delay(drafts.push(draft));

const updateItem = (items, item) => {
  const toUpdate = items.filter(i => i.id === item.id);
  const index = items.indexOf(toUpdate);
  items[index] = item;
  return item;
};
export const updateTask = task => updateItem(tasks, task);
export const updateCase = caseInfo => updateCase(cases, caseInfo);
export const updateDraft = draft => updateDraft(drafts, draft);
