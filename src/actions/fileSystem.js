import { ADD_ENTRY, DELETE_ENTRY } from '@Utils/constants';

export const addEntry = entry => {
  return {
    type: ADD_ENTRY,
    payload: entry
  };
};

export const deleteEntry = entryPath => {
  return {
    type: DELETE_ENTRY,
    payload: entryPath
  };
};
