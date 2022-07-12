export interface Project {
  title?: string;
  subtitle?: string;

  titleColor?: string;
  img: string;

  arrowsColor?: string;

  text?: string[];
  captions?: string[];

  codeIcon?: string;
  codeImg?: string;
  codeLink?: string;
}

export interface Education {
  title: string;
  dates: string;
  img: string;
  value: string;
  caption?: string;
}

export interface Experience {
  title: string;
  job: string;
  dates: string;
  img: string;
  text: string[];
  captions?: string[];
}

export interface OldExperience {
  title: string;
  text: {
    title: string;
    dates: string;
    value: string;
    img: string;
  }[];
  captions?: string[];
}

export interface Interest {
  title: string;
  img: string;
}

export interface Lang {
  img: string;
  value: string;
  lang: string;
  info: string;
}

export interface Skill {
  name?: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  score?: number;
  skills?: Skill[];
}

export interface Social {
  text: string;
  icon: string;
  url: string;
  color: string;
}
