import React from "react";
export default function AuthLayout({children}:{
    children: React.ReactNode;
}){
    return(
        <div>
            <h2>This is the Inner layout for register and login</h2>
            {children}
        </div>
    );
}