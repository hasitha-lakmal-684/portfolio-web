export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
}
