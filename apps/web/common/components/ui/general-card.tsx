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
const GeneralCard = ({title, children, footer }: Props) => {
  return (
    <Card className="w-full ">
      <form>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className="space-y-4 ">{children}</CardContent>
        <CardFooter className="flex justify-between bg-gray-200 items-center pt-2">
=======
        <CardContent className="">{children}</CardContent>
        <CardFooter className="flex justify-between bg-gray-50 border-t items-center py-3 px-6 max-h-fit">
>>>>>>> 74bd52a92343da5ced9165f0c2da363eeac7fc18
          {footer}
        </CardFooter>
      </form>
    </Card>
  );
};

<<<<<<< HEAD
export default GeneralCard;
=======
export default GeneralCard;
>>>>>>> 74bd52a92343da5ced9165f0c2da363eeac7fc18
