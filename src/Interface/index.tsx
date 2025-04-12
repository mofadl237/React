type TInputName='Name'|'Email'|'Password';
export interface IInput{
    name:TInputName;
    id:undefined|string;
    type:string;
    htmlFor:string;
    label:string;
}
export interface IUser{
    Name:string;
    Email:string;
    Password:string;
}