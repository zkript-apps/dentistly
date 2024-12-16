"use client";
import { Button } from "@/common/components/shadcn/ui/button";

import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/shadcn/ui/select";
import { Switch } from "@/common/components/shadcn/ui/switch";
import { AlertCircle, Copy } from "lucide-react";
import GeneralCard from "@/common/components/ui/general-card";
import { title } from "process";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/common/components/shadcn/ui/card";

const Clinics = () => {
  const [previewDeployments, setPreviewDeployments] = React.useState("off");
  const [productionDeployments, setProductionDeployments] =
    React.useState("off");
  const [isOverrideEnabled, setIsOverrideEnabled] = React.useState(true);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Clinics;
