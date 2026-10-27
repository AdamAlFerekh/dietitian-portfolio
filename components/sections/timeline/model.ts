import type { LucideIcon } from "lucide-react";

export type TimelineEntry = {
  number: string;
  category: string;
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
};
