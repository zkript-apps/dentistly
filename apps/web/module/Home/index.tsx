import { Button } from "@/common/components/ui/Button";
import React from "react";

const ModuleHome = () => {
  return <div>
    {/* <button className="bg-primary-500">Click me </button> */}
    <Button>
      Default
    </Button>
    <Button variant={"primary"}>
      Primary
    </Button>
    <Button variant={"danger"}>
      Danger
    </Button>
    <Button variant={"warning"}>
      Warning
    </Button>
    <Button variant={"success"}>
      Success
    </Button>
    <Button variant={"outline"}>
      Outline
    </Button>
    <Button variant={"secondary"}>
      Secondary
    </Button>
    <Button variant={"ghost"}>
      Ghost
    </Button>
    <Button variant={"link"}>
      Link
    </Button>
    <Button variant={"shaded"}>
      Shaded
    </Button>
  </div>;
};

export default ModuleHome;
