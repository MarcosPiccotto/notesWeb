import React from "react";
import { UserAuth } from "@context/AuthContext";

const Protected = ({ children }) =>{
    const {router} = UserAuth();
    
}

export default Protected;