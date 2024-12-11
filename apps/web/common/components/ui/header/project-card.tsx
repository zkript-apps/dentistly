import { Clock3, Github } from "lucide-react";
import Link from "next/link";
import { Card } from "../../shadcn/ui/card";

interface DayOff {
  day: string;
  timeRanges: string;
}
interface ProjectCardProps {
  organizationName: string;
  Address: string;
  dayOff: DayOff[];
  createdAt: Date;
  updatedAt: Date;
}

export function ProjectCard({
  organizationName,
  Address,
  dayOff,
  createdAt,
  updatedAt,
}: ProjectCardProps) {
  function formatDate(date: Date) {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    const year = d.getFullYear();
    return `${month} - ${day} - ${year}`;
  }
  return (
    <Card className="p-4 hover:border-gray-400 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">
            {organizationName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-medium text-sm">{organizationName}</h3>
            <p className="text-sm text-muted-foreground">{Address}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-accent rounded-md">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <button className="p-2 hover:bg-accent rounded-md">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 12h.01M8 12h.01M16 12h.01" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4">
        <span className="flex flex-col items-start gap-2 text-sm text-muted-foreground hover:text-foreground">
          {dayOff.map((off, index) => (
            <div className="flex gap-3" key={index}>
              <span className="text-gray-600 font-semibold">{off.day}</span>
              <span>{off.timeRanges}</span>
            </div>
          ))}
        </span>
      </div>
      <div className="mt-3 flex flex-col items-start gap-2 text-sm text-muted-foreground">
        <div className="flex gap-2 items-center">
          <Clock3 className="w-4 h-4" />
          <span className="text-gray-600"> CreatedAt</span> <span>·</span>
          <span>{formatDate(createdAt)}</span>
        </div>
        <div className="flex gap-2 items-center">
          <Clock3 className="w-4 h-4" />
          <span className="text-gray-600"> UpdatedAt</span> <span>·</span>
          <span>{formatDate(updatedAt)}</span>
        </div>
      </div>
    </Card>
  );
}
