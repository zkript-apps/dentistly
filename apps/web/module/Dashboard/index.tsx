import { Button } from "@/common/components/shadcn/ui/button";
import { Card } from "@/common/components/shadcn/ui/card";
import { Input } from "@/common/components/shadcn/ui/input";
import GeneralCard from "@/common/components/ui/general-card";
import { Circle, Copy } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      
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
            This is your team's visible name within Vercel. For example, the
            name of your company or department.
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
            This is your team’s URL namespace on Vercel. Within it, your team
            can inspect their projects, check out any recent activity, or
            configure settings to their liking.
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
                This feature is available on the <a href="#" className="underline underline-offset-1 text-sky-400">Pro plan</a> for an additional  <span className="font-semibold">$100 per month.</span>
              </p>
              <Button type="submit" variant="default">
                Upgrade
              </Button>
            </>
          }
        >
          <p className="text-sm">
            By default, the URL of every new Preview Deployment ends with .vercel.app. This setting allows you to choose your own custom domain in place of this suffix.
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
          <p className="text-sm">
          This is your team's ID within Vercel.
          </p>
          <div className="flex items-center border w-fit p-1">
            <Input className="max-w-[200px] " placeholder="team_NHA8de1h3c5Sq89utoQVAnQQ"></Input>
            <span className="m-1.5"><Copy></Copy></span>
          </div>
        </GeneralCard>
      
    </div>
  );
};

export default Dashboard;
