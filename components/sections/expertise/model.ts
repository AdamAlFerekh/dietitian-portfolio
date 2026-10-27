export type ServiceIcon = "leaf" | "dumbbell" | "user-round";

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  details: string[];
  audience: string;
};
