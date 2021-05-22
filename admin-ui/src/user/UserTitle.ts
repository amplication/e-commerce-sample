import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "firstName";

export const UserTitle = (record: TUser) => {
  return record.firstName;
};
