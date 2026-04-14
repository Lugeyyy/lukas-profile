import { useState, useEffect, useCallback } from "react";

export interface PortfolioData {
  meta: { schemaVersion: string; lastUpdated: string; visibility: string };
  personal: {
    fullName: string;
    preferredName?: string;
    age: number;
    tagline?: string;
    location: { city?: string; country?: string };
  };
  bio: { short?: string; medium?: string; long?: string; official?: string };
  skills: {
    programming?: { name: string; level: string; yearsExperience?: number; projectsUsedIn?: string[] }[];
    languages?: { name: string; level: string; certifications?: string[] }[];
    music?: { instrument: string; yearsExperience: number; styles: string[]; notablePieces?: string[] }[];
    martialArts?: { discipline: string; beltOrLevel?: string; yearsTraining: number; competitions?: unknown[] }[];
    softSkills?: string[];
  };
  projects: {
    id: string;
    name: string;
    status: string;
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
    team?: { name: string; role: string }[] | string;
  }[];
  experience: {
    title: string;
    organization: string;
    type: string;
    startDate: string;
    endDate?: string;
    description?: string;
    responsibilities?: string[];
    skillsGained?: string[];
  }[];
  education: {
    currentSchool?: string;
    gradeLevel?: string;
    academicInterests?: string[];
    favoriteSubjects?: string[];
    gpaOrAverage?: string;
    awards?: string[];
  };
  achievements: { title: string; year: number; description?: string; category: string }[];
  extracurriculars: { name: string; role?: string; description?: string; yearsInvolved?: number }[];
  goals: {
    shortTerm?: string[];
    longTerm?: string[];
    dreamCareer?: string[];
    whyThisSchool?: string;
  };
  contact: { email: string; phone?: string; availableForSummerJobs?: boolean };
  links: {
    github?: string;
    portfolioWebsite?: string;
    linkedin?: string;
    other?: { label: string; url: string }[];
  };
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/data.json");
      if (!response.ok) throw new Error("Failed to fetch data");
      const json = await response.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
