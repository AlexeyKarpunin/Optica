/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import {FORM_STATUS_SEND_ACTION} from './types'


const INIT_FORM_STATE = {
   formStatus: 'not send',
}

function form (state=INIT_FORM_STATE, action) {
  switch (action.type) {
    case FORM_STATUS_SEND_ACTION:
      state.formStatus = 'send';
      setTimeout( () => {state.formStatus = 'not send'}, 100)
    return state;
    default :
      return state;
  }
}

const rootReducer = combineReducers({
  form,
});

export default rootReducer;