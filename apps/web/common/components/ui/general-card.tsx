import React from "react";
import { Button } from "@/common/components/shadcn/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/common/components/shadcn/ui/card";
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
import { title } from "process";

type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
  title: string;
};
const GeneralCard = ({ title, children, footer }: Props) => {
  return (
    <Card className=" ">
      <form>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="">{children}</CardContent>
        <CardFooter className="flex justify-between bg-gray-50 border-t items-center py-3 px-6 ">
          {footer}
        </CardFooter>
      </form>
    </Card>
  );
};

export default GeneralCard;
