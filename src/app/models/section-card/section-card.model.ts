import { Certification } from "../cert-and-education/cert.model";
import { GitHubChart } from "../github-chart/github-chart.model";
import { Project } from "../project/project.model";
import { Skill } from "../skill/skill.model";
import { Work } from "../work/work.model";

export interface SectionCard {
  id: number;
  title: string;
  description: string;

  extraData?: {
    fullName?: string;
    jobTitle?: string;
    avatarUrl?: string;
    bio?: string;


    skills?: {
      languages: string;
      frameworks: string;
      softSkills: string;
      tools: string;
    };
    education?: {
      university: string;
      degree: string;
      languages: string;
    };


    projects?: Project[];
    technicalSkills?: Skill[];
    workExperience?: Work[];
    certifications?: Certification[];
    githubChart?: GitHubChart;
  };
}