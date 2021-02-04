/* eslint-disable import/prefer-default-export */
import {FORM_STATUS_SEND_ACTION} from './types';

export function sendForm() {
  return {
    type: FORM_STATUS_SEND_ACTION,
  }
}