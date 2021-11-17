export interface Card {
  id?: any;
  url: string;
  name: string;
  author: { name: string };
  dateCreated?: string;
  type: {
    name: string;
  };
  usl: string;
  preview: string;
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
  type?: string;
};
export type typesOptions = {
  [key: string]: string;
};
export interface cardItemProps {
  card: Card;
  setCardID: any;
}
export interface PlayerProps {
  card: Card;
  setContentDuration: any;
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
  onClick?: any;
  autoFocus?: boolean;
  props?: any;
}
export interface CardListProps {
  formValues: formValues;
  props?: any;
}
export interface task {
  id?: number;
  name: string;
  type: { name: string };
  status?: { name: string };
  dateExpired?: string;
  executor?: { name: string };
}
export interface User {
  id: number;
  name: string;
  role: { name: string };
}
