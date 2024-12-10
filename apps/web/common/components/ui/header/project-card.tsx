
import { Clock3, Github } from "lucide-react";
import Link from "next/link";
import { Card } from "../../shadcn/ui/card";


interface ProjectCardProps {
  name: string;
  url: string;
  repository: string;
  repoOwner: string;
  lastCommit: {
    message: string;
    timestamp: string;
    branch: string;
  };
}

export function ProjectCard({
  name,
  url,
  repository,
  repoOwner,
  lastCommit,
}: ProjectCardProps) {
  return (
    <Card className="p-4 hover:border-gray-400 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-medium text-sm">{name}</h3>
            <p className="text-sm text-muted-foreground">{url}</p>
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
        <Link
          href={`https://github.com/${repoOwner}/${repository}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <Github className="w-4 h-4" />
          {repoOwner}/{repository}
        </Link>
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <Clock3 className="w-4 h-4" />
        <span>{lastCommit.message}</span>
        <span>·</span>
        <span>{lastCommit.timestamp} ago on</span>
        <span className="px-1.5 py-0.5 bg-accent rounded text-xs">
          {lastCommit.branch}
        </span>
      </div>
    </Card>
  );
}
