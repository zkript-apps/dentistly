import { CheckBox } from "@/common/components/ui/Checkbox";
import React from "react";

const ModuleHome = () => {
  return (
    <div>
      <CheckBox isChecked={true} checkBoxValue={"hello"} />
      Home Module
    </div>
  );
};

export default ModuleHome;
