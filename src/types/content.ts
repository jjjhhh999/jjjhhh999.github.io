export interface Picture {
  img: string;
  title?: string;
}

export interface PortfolioItem {
  name: string;
  title?: string;
  pictures: Picture[];
  technologies?: string[];
  category?: string;
  date: string;
  github?: string;
  visit?: string;
  description: string;
}

export interface TimelineEntry {
  name: string;
  place?: string;
  date: string;
  degree?: string;
  position?: string;
  gpa?: string;
  description?: string;
  skills?: string[];
}

export interface TimelineGroup {
  title: string;
  data: TimelineEntry[];
}

export interface RecommendationItem {
  title: string;
  author: string;
  position: string;
  company: string;
  location: string;
}
