"use client";

import useGetAllUsers from "@/common/hooks/useGetAllUser";
import React from "react";

const ModuleHome = () => {
  const { data } = useGetAllUsers();
  return <div></div>;
};

export default ModuleHome;
