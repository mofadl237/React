import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';

interface IProps{
    isAllowed:boolean;
    redirection:string;
    children:ReactNode;
}

const ProtectRoute = ({isAllowed , redirection , children}:IProps) => {
 
    if(!isAllowed) return <Navigate to ={redirection}/>;
    return children;
}

export default ProtectRoute;