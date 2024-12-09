import { Button } from "@/common/components/shadcn/ui/button";
import { Card } from "@/common/components/shadcn/ui/card";
import { Checkbox } from "@/common/components/shadcn/ui/checkbox";
import { Input } from "@/common/components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/shadcn/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/components/shadcn/ui/tabs";
import Search from "@/common/components/ui/Search";
import { Link, MoreVertical, PlusCircleIcon } from "lucide-react";

const Members = () => {
  return (
    <div className="m-9">
      <h1 className="text-xl font-semibold">Members</h1>
      <p className="text-sm m-5 ml-0">Manage team members and invitations</p>
      <Card className="py-5 px-6">
        <div className="flex justify-between mt-3 pb-6 border-b">
          <p>Invite new members by email address</p>
          <Button className="text-xs flex gap-3">
            <Link size={15} />
            Invite Link
          </Button>
        </div>
        <div className="flex w-full gap-2 mt-6">
          <div className="w-full">
            <p className="">Email Address</p>
            <Input />
          </div>
          <div className="w-full">
            <p className="">Role</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="text-xs flex gap-3 mt-2.5">
          <PlusCircleIcon size={20} />
          Add More
        </Button>
      </Card>

      <Tabs defaultValue="team-member" className="mt-6">
        <div className="pb-3 border-b">
          <TabsList>
            <TabsTrigger value="team-member">Team Members</TabsTrigger>
            <TabsTrigger value="pending-invitations">
              Pending Invitations
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="team-member">
          <div className="mb-2">
            <Search />
          </div>
          <Card>
            <div className="p-4">
              <div className="flex items-center justify-between py-4 border-b">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-muted-foreground">
                    Select all (1)
                  </span>
                </label>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-500" />
                  <div>
                    <div className="font-medium">macdapula15</div>
                    <div className="text-sm text-muted-foreground">
                      macdapula15@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">Owner</span>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="pending-invitations">
          <div>
            <Search />
          </div>
          <Card className="p-4">
            <div className="text-center py-6 text-muted-foreground">
              No pending invitations
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      
    </div>
  );
};

export default Members;
