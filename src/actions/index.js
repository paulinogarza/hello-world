import { ADD_REMINDER, ADD_DATETIME } from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text: text
  }
  console.log('action in addReminder', action);
  return action;
}
