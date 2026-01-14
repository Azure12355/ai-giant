import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  tags?: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  value: string;
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  category: string;
}
