"use client"

import useAddUser from "@/common/hooks/useAddUser";
import React from "react";

const ModuleHome = () => {

  const {mutate} = useAddUser()

  return <div>
    <button type ="button" onClick={() => {
      console.log("Test");
      mutate({clinicId: "65af24fc72a40fa28bad5a52", username: "Arjay123", email: "email123@gmail.com", password: "password", role:"admin"})}}>
        Button
    </button>
  </div>;
};

export default ModuleHome;
