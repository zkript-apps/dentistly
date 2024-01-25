"use client";

import useGetOneUser from "@/common/hooks/useGetOneUser";
import React from "react";

const ModuleHome = () => {
  const { data } = useGetOneUser("65b0b8ffe165a66116a3c16d");
  return <div></div>;
};

export default ModuleHome;
