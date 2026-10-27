import { Award, BriefcaseBusiness, GraduationCap, Trophy } from "lucide-react";
import type { TimelineEntry } from "./model";

export const timelineEntries: TimelineEntry[] = [
  {
    number: "01",
    category: "Education",
    title: "Sample nutrition foundation",
    description:
      "A fictional education pathway focused on nutrition science, behavior change, and client-centered coaching.",
    date: "Demo timeline",
    icon: GraduationCap,
  },
  {
    number: "02",
    category: "Certifications",
    title: "Sample professional training",
    description:
      "Illustrative coursework and continuing education highlights used to present a balanced wellness practice in this demo.",
    date: "Demo timeline",
    icon: Award,
  },
  {
    number: "03",
    category: "Experience",
    title: "Sample coaching experience",
    description:
      "A fictional client journey illustrating program design, habit coaching, and individualized wellness support.",
    date: "Demo timeline",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    category: "Achievements",
    title: "Sample milestones",
    description:
      "Portfolio-style highlights designed to showcase growth, education, and a practical approach to sustainable health.",
    date: "Demo timeline",
    icon: Trophy,
  },
];
