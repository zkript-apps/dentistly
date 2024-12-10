"use client";
import { Button } from "@/common/components/shadcn/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/common/components/shadcn/ui/card";
import GeneralCard from "@/common/components/ui/general-card";
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

const Settings = () => {
  const [previewDeployments, setPreviewDeployments] = React.useState("off");
  const [productionDeployments, setProductionDeployments] =
    React.useState("off");
  const [isOverrideEnabled, setIsOverrideEnabled] = React.useState(true);
  return (
    <div className="max-h-[85vh] overflow-y-auto flex flex-col gap-5 px-9 py-5">
      <GeneralCard
        title="Team Name"
        footer={
          <>
            {" "}
            <p className="text-sm text-muted-foreground">
              Please use 32 characters at maximum.
            </p>
            <Button type="submit" variant="default">
              Save
            </Button>
          </>
        }
      >
        <p className="text-sm">
          This is your team's visible name within Vercel. For example, the name
          of your company or department.
        </p>
        <Input className="max-w-[300px]" placeholder="Mark's Project"></Input>
      </GeneralCard>

      <GeneralCard
        title="Team URL"
        footer={
          <>
            {" "}
            <p className="text-sm text-muted-foreground">
              Please use 48 characters at maximum.
            </p>
            <Button type="submit" variant="default">
              Save
            </Button>
          </>
        }
      >
        <p className="text-sm">
          This is your team’s URL namespace on Vercel. Within it, your team can
          inspect their projects, check out any recent activity, or configure
          settings to their liking.
        </p>
        <div className="flex items-center border w-fit p-1">
          <span className="border-r text-sm">vercel.com/</span>
          <Input className="max-w-[200px] "></Input>
        </div>
      </GeneralCard>

      <GeneralCard
        title="Team Avatar"
        footer={
          <>
            {" "}
            <p className="text-sm text-muted-foreground mt-4">
              An avatar is optional but strongly recommended.
            </p>
          </>
        }
      >
        <p className="text-sm">This is your team's avatar.</p>
        <p className="text-sm">
          Click on the avatar to upload a custom one from your files.
        </p>
        <div className="rounded-full"></div>
      </GeneralCard>

      <GeneralCard
        title="Preview Deployment Suffix"
        footer={
          <>
            {" "}
            <p className="text-sm text-muted-foreground">
              This feature is available on the{" "}
              <a href="#" className="underline underline-offset-1 text-sky-400">
                Pro plan
              </a>{" "}
              for an additional{" "}
              <span className="font-semibold">$100 per month.</span>
            </p>
            <Button type="submit" variant="default">
              Upgrade
            </Button>
          </>
        }
      >
        <p className="text-sm">
          By default, the URL of every new Preview Deployment ends with
          .vercel.app. This setting allows you to choose your own custom domain
          in place of this suffix.
        </p>
        <div className="flex items-center border w-fit p-1">
          <span className="border-r text-sm">my-deployment.</span>
          <Input className="max-w-[200px] " placeholder="vercel.app"></Input>
        </div>
      </GeneralCard>

      <GeneralCard
        title="Team ID"
        footer={
          <>
            {" "}
            <p className="text-sm text-muted-foreground mt-4">
              Used when interacting with the Vercel API.
            </p>
          </>
        }
      >
        <p className="text-sm">This is your team's ID within Vercel.</p>
        <div className="flex items-center border w-fit p-1">
          <Input
            className="max-w-[200px] "
            placeholder="team_NHA8de1h3c5Sq89utoQVAnQQ"
          ></Input>
          <span className="m-1.5">
            <Copy />
          </span>
        </div>
      </GeneralCard>

      {/* <GeneralCard
        title="Vercel Toolbar"
        footer={
          <>
            <p className="text-sm text-muted-foreground">
              Learn more about the{" "}
              <span className="text-blue-400 cursor-pointer">
                Vercel Toolbar
              </span>
            </p>
            <Button type="submit" variant="default">
              Save
            </Button>
          </>
        }
      >
        <div className="">
          <p>Enable the Vercel Toolbar on your Deployments.</p>

          <div className="grid gap-4 md:grid-cols-2 pb-5 border-b">
            <div className="">
              <Label htmlFor="preview">Preview Deployments</Label>
              <Select
                value={previewDeployments}
                onValueChange={setPreviewDeployments}
              >
                <SelectTrigger id="preview" className="w-full">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="off">Off</SelectItem>
                  <SelectItem value="on">On</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="">
              <Label htmlFor="production">Production Deployments</Label>
              <Select
                value={productionDeployments}
                onValueChange={setProductionDeployments}
              >
                <SelectTrigger id="production" className="w-full">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="off">Off</SelectItem>
                  <SelectItem value="on">On</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="block">
              Allow this setting to be overridden on the project level.
            </Label>
            <div className="flex items-center space-x-2">
              <Switch
                id="override"
                checked={isOverrideEnabled}
                onCheckedChange={setIsOverrideEnabled}
              />
              <Label htmlFor="override">Enabled</Label>
            </div>
          </div>
        </div>
      </GeneralCard> */}

      <GeneralCard
        title="Transfer"
        footer={
          <>
            <p className="text-sm text-muted-foreground">
              Learn more about
              <span className="text-blue-400 cursor-pointer">
                {" "}
                Transferring Projects
              </span>
            </p>
            <Button type="submit" variant="default">
              Transfer
            </Button>
          </>
        }
      >
        <p>
          Transfer your projects to another team without downtime or workflow
          interruptions.
        </p>
      </GeneralCard>

      <GeneralCard
        title="Leave Team"
        footer={
          <>
            <p className="text-sm text-muted-foreground">
              To leave this Team, ensure at least one more Member has the Owner
              role.
            </p>
          </>
        }
      >
        <p>
          Revoke your access to this Team. Any resources you've added to the
          Team will remain.
        </p>
      </GeneralCard>

      <GeneralCard
        title="Delete Team"
        footer={
          <>
            <p className="text-sm text-muted-foreground">
              To delete your account, visit{" "}
              <span className="text-blue-400 cursor-pointer">
                Account Settings.
              </span>
            </p>
            <Button type="submit" variant="outline" disabled>
              Delete
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-2">
          <p>
            Permanently remove your team and all of its contents from the Vercel
            platform. This action is not reversible - please continue with
            caution.
          </p>
          <div className="bg-gray-300 p-2 flex gap-2  rounded-md">
            <AlertCircle /> You cannot delete your last Hobby team.
          </div>
        </div>
      </GeneralCard>
    </div>
  );
};

export default Settings;
