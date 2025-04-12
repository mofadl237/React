import { IInput, IUser } from "./../Interface/index";

export const DataUsers: IUser[] = [
  {
    Name: "admin",
    Email: "admin1@gmail.com",
    Password: "123456789",
  },
];
export const defaultUser = {
  Name: "",
  Email: "",
  Password: "",
};
export const FormInputList: IInput[] = [
  {
    name: "Name",
    type: "text",
    id: "name",
    htmlFor: "name",
    label: "Enter Name",
  },
  {
    name: "Email",
    type: "email",
    id: "email",
    htmlFor: "email",
    label: "Enter Email",
  },
  {
    name: "Password",
    type: "password",
    id: "password",
    htmlFor: "password",
    label: "Enter PassWord",
  },
];
