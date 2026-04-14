import data from "./data.json";

export type PortfolioData = typeof data;

export interface Personal {
  fullName: string;
  preferredName?: string;
  age: number;
  tagline?: string;
  location: {
    city?: string;
    country?: string;
  };
}

export interface Bio {
  short?: string;
  medium?: string;
  long?: string;
}

export interface ProgrammingSkill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  yearsExperience?: number;
  projectsUsedIn?: string[];
}

export interface LanguageSkill {
  name: string;
  level: "basic" | "conversational" | "fluent" | "native";
  certifications?: string[];
}

export interface MusicSkill {
  instrument: string;
  yearsExperience: number;
  styles: string[];
  notablePieces?: string[];
}

export interface MartialArt {
  discipline: string;
  beltOrLevel?: string;
  yearsTraining: number;
  competitions?: {
    name: string;
    year: number;
    placement?: string;
  }[];
}

export interface Skills {
  programming?: ProgrammingSkill[];
  languages?: LanguageSkill[];
  music?: MusicSkill[];
  martialArts?: MartialArt[];
  softSkills?: string[];
}

export interface Project {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "prototype";
  descriptionShort: string;
  descriptionLong?: string;
  purpose?: string;
  technologies: string[];
  features?: string[];
  challengesSolved?: string[];
  screenshots?: string[];
  repoUrl?: string;
  liveUrl?: string;
  link?: string;
  startDate?: string;
  endDate?: string;
  team?: { name: string; role: string }[];
}

export interface Experience {
  title: string;
  organization: string;
  type: "job" | "freelance" | "teaching" | "volunteer";
  startDate: string;
  endDate?: string;
  description?: string;
  responsibilities?: string[];
  skillsGained?: string[];
}

export interface Education {
  currentSchool?: string;
  gradeLevel?: string;
  academicInterests?: string[];
  favoriteSubjects?: string[];
  gpaOrAverage?: string;
  awards?: string[];
}

export interface Achievement {
  title: string;
  year: number;
  description?: string;
  category: "academic" | "music" | "sports" | "coding" | "leadership";
}

export interface Extracurricular {
  name: string;
  role?: string;
  description?: string;
  yearsInvolved?: number;
}

export interface Goals {
  shortTerm?: string[];
  longTerm?: string[];
  dreamCareer?: string[];
  whyThisSchool?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  availableForSummerJobs?: boolean;
}

export interface Link {
  label: string;
  url: string;
}

export interface Links {
  github?: string;
  portfolioWebsite?: string;
  linkedin?: string;
  other?: Link[];
}

export const portfolioData: PortfolioData = data;
export const personal = data.personal as Personal;
export const bio = data.bio as Bio;
export const skills = data.skills as Skills;
export const projects = data.projects as Project[];
export const experience = data.experience as Experience[];
export const education = data.education as Education;
export const achievements = data.achievements as Achievement[];
export const extracurriculars = data.extracurriculars as Extracurricular[];
export const goals = data.goals as Goals;
export const contact = data.contact as Contact;
export const links = data.links as Links;