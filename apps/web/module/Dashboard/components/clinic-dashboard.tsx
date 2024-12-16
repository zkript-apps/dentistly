"use client";
import { Card } from "@/common/components/shadcn/ui/card";
import { Button } from "@/common/components/ui/Button";
import { CloudLightning, Dot, Link, RotateCcw } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const ClinicDetails = () => {
  const searchParam = useSearchParams();
  const name = searchParam.get("name");
  return (
    <div className="flex justify-center max-h-[85vh]  overflow-y-scroll">
      <div className="flex flex-col gap-10 max-w-[70vw] ">
        <div className="flex justify-between py-10 min-w-[60vw] border-b">
          <div className="font-bold text-2xl">{name}</div>
          <div className="flex gap-2">
            <Button className="border solid">Repository</Button>
            <Button className="border solid">Usage</Button>
            <Button className="border solid">Domains</Button>
            <Button className="border solid">Visit</Button>
          </div>
        </div>

        <div className="flex justify-between py-10 min-w-[60vw]">
          <div className="font-bold text-xl">
            <h1>Production Deployment </h1>
            <div className="text-sm font-normal pt-2">
              The deployment that is available to your visitors.
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="border solid">Build Logs</Button>
            <Button className="border solid">Runtime Logs</Button>
            <Button className="border solid flex gap-1.5">
              <RotateCcw size={17} />
              Instant Rollback
            </Button>
          </div>
        </div>

        <div>
          <div className="border-2 p-5">
            <Card className="flex justify-center flex-col items-center py-10 px-0 border-dotted ">
              <div className="flex border w-fit h-fit p-6 rounded-full ">
                <CloudLightning />
              </div>
              <div className="text-center pt-6 text-muted-foreground font-bold text-2xl">
                No Production domain
              </div>
              <div className="text-center text-muted-foreground font-bold text-sm font-normal">
                Create a production domain in this project's settings.
              </div>
              <div className="flex place-content-around pt-4">
                <Button className="border">Add Domain</Button>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex justify-between border p-8 ">
          <div className="flex ">
            <Dot className="items-center" color="red" size={25} />
            <p className=" text-sm font-semibold">
              Error .{" "}
              <a href="#" className="text-muted-foreground font-light">
                Merge pull request #4 from zkript-apps/ramil Ramil
              </a>{" "}
            </p>
          </div>
          <div>
            <p className="text-sm ">4h ago by ramil 25</p>
          </div>
        </div>

        <div className="font-bold text-xl border-t py-10 ">Active Branches</div>
        <div className="border-2 p-5">
          <Card className="flex justify-center flex-col items-center py-10 px-0 border-dotted ">
            <div className="text-center pt-6 text-muted-foreground font-bold text-2xl">
              No Preview Deployments
            </div>
            <div className="text-center text-muted-foreground  text-sm font-normal pt-5">
              Commit using our Git connections.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
