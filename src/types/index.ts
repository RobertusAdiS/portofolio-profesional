export type ProjectCategory =
  | "Pedagogik"
  | "PSE"
  | "PPL"
  | "Kepemimpinan"
  | "Refleksi"
  | "Teknologi";
export interface Reflection4C {
  connection: string;
  challenge: string;
  concept: string;
  change: string;
}
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  context?: string;
  approach?: string[];
  outcomes?: string[];
  skills?: string[];
  hideOverview?: boolean;
  evidenceUrl?: string;
  reflection4C?: Reflection4C;
}
export interface LearningExperience {
  id: string;
  semester: 1 | 2;
  title: string;
  description: string;
  learningPoints: string[];
  competency: string[];
  reflection?: string;
}
export interface Evidence {
  id: string;
  title: string;
  category: string;
  description: string;
  type: "document" | "image" | "video" | "external";
  url: string;
  status: "placeholder" | "available";
}
export interface SkillGroup {
  title: string;
  items: string[];
}
export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
