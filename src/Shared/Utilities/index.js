import { REGEX } from "../Constants";

export const isValidObj = {
  email: new RegExp(REGEX?.email),
  name: new RegExp(REGEX?.name),
  password: new RegExp(REGEX?.password),
  number: new RegExp(REGEX?.number),
  numberAndText: new RegExp(REGEX?.numberAndText),
};

export const isValidEmail = new RegExp(REGEX?.email);
export const isValidName = new RegExp(REGEX?.name);
export const isValidPassword = new RegExp(REGEX?.password);
export const isValidNumber = new RegExp(REGEX?.number);
export const isValidNumberAndText = new RegExp(REGEX?.numberAndText);
