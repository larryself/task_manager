import { LegacyRef } from 'react';

export interface Card {
  id?: string;
  url?: string;
  name: string;
  author?: { name: string };
  dateCreated?: string;
  type: {
    name: string;
  };
  preview?: string;
}

export interface userState {
  user: {};
  notifications: number;
  modal: {};
}

export type formValues = {
  email?: string;
  password?: string;
  authorName?: string;
  date?: Date;
  role?: string;
  type?: { audio: boolean; photo: boolean; video: boolean };
  status?: string;
  name?: string;
};

export type typesOptions = {
  [key: string]: string;
};

export interface cardItemProps {
  card: Card;
  setCardID(id: any): void;
}

export interface PlayerProps {
  card: Card;
  setContentDuration(value: string): any;
}

export interface MediaContentProps {
  card: Card;
}

export interface btnIconProps {
  size: string;
  className: string;
  typeIcon: string;
  color: string;
  onClick?: any;
  props?: any;
}

export interface btnResetProps {
  className: string;
  type?: any;
  onClick?: any;
  props?: any;
}

export interface buttonProps {
  value: string;
  color: string;
  size: string;
  typeIcon: string;
  type: any;
  btnType: string;
  className?: string;
  onClick?: any;
  autoFocus?: boolean;
  props?: any;
}

export interface CardListProps {
  formValues: formValues;
  props?: any;
}

export interface task {
  id?: string;
  name: string;
  type: { name: string };
  status?: { name: string };
  dateExpired?: string;
  executor?: { name: string };
  description?: string;
  author?: { name: string };
}

export interface IconProps {
  type?: string;
  typeIcon: string;
}

export interface AvatarProps {
  uploadFiles?: { 0: any; length: number };
  onChange?: any;
  user?: any;
  props?: any;
}
export interface CardTaskProps {
  formValues: formValues;
}

export interface CardTaskItemProps {
  task: task;
  setTaskID: any;
}
export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: { name: string };
}

export interface UserItemProps {
  setUserID: any;
  user: User;
}

export interface ContentProps {
  setContentDuration: any;
  card: Card;
}
export interface DateBoxProps {
  className: string;
  placeholder: string;
  onChange: (date: any) => void;
  selected: any;
}
export interface TaskIdResultProps {
  className: string;
  setLoadFiles(value: boolean): void;
}
export interface FieldsetItemProps {
  value: string;
  name: string;
  checkboxType: string;
  iconType: string;
  ref: LegacyRef<HTMLInputElement>;
}
export interface FieldsetProps {
  className: string;
  label: string;
  children: any;
}
export interface UserRadioBtnProps {
  value: string;
  defaultChecked?: boolean;
  ref: LegacyRef<HTMLInputElement>;
}
export interface TextareaBoxProps {
  className: string;
  ref: LegacyRef<HTMLTextAreaElement>;
}
export interface TaskFormProps {
  task?: task;
}
