import type { Service } from "./model";

export const expertiseServices: Service[] = [
  {
    number: "01",
    title: "Nutrition Coaching",
    description:
      "Build a more thoughtful approach to eating with guidance shaped around your goals and everyday routine.",
    icon: "leaf",
    details: [
      "Guidance tailored to your personal goals",
      "Practical habits for everyday life",
      "A sustainable approach to nutrition",
    ],
    audience:
      "For people looking to improve their eating habits and overall wellbeing.",
  },
  {
    number: "02",
    title: "Workout Programming",
    description:
      "Follow a structured training plan designed around your fitness goals, experience, and available schedule.",
    icon: "dumbbell",
    details: [
      "Training structure built around your goals",
      "Exercises organized into a clear routine",
      "A plan designed around your schedule",
    ],
    audience:
      "For people who want more structure and direction in their training.",
  },
  {
    number: "03",
    title: "Private Training",
    description:
      "Get more focused guidance during your training sessions, with attention to your technique and progress.",
    icon: "user-round",
    details: [
      "Individual attention during sessions",
      "Guidance on exercise technique",
      "Training support aligned with your goals",
    ],
    audience:
      "For people who prefer direct coaching and a more personal training experience.",
  },
];
