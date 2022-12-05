import React from 'react'
import { SvgIcon } from "@mui/material";
interface IconProps{
    fontSize? : 	'inherit'| 'large'| 'medium'| 'small';
    icon?:React.ReactNode;
    style?:string;
}
const Icons = (p:IconProps) => {
    return (
        <>
            <SvgIcon>
                {p.icon}
            </SvgIcon>
        </>  
    )
}
export default Icons