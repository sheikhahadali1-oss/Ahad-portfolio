import dealoraImage from "@/assets/project-dealora.jpg";
import drsaadImage from "@/assets/project-drsaad.jpg";

/**
 * Single source of truth for all portfolio content.
 * Shapes here mirror the future database tables, so a secure admin
 * dashboard can later replace these constants with fetched rows.
 */

export const profile = {
  name: "Sheikh Ahad Ali",
  shortName: "Ahad Ali",
  headline: "Web Designer & Developer | SEO & Digital Marketing Specialist",
  positioning:
    "I design and build modern websites that look professional, perform fast, and help businesses grow online.",
  eyebrow: "WEB DESIGN • DEVELOPMENT • SEO • DIGITAL MARKETING",
  heroHeading: "I Build Digital Experiences That Help Businesses Grow.",
  heroSupport:
    "I'm Sheikh Ahad Ali, a Web Designer & Developer and SEO & Digital Marketing Specialist. I create modern websites, e-commerce experiences, and digital strategies that help businesses build a stronger online presence.",
  availability: "Available for freelance projects",
  basedIn: "Pakistan",
  focus: "Web & Digital Solutions",
  availabilityType: "Freelance / Project Based",
  linkedin: "https://www.linkedin.com/in/shaikh-ahad-ali-b52a57a4/",
  /** Add a professional profile photo later: drop the file in src/assets and import it here. */
  profileImage: null as string | null,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const disciplines = ["Web Design", "Development", "SEO", "Digital Marketing"];

export const aboutCapabilities = [
  "Designing modern business websites",
  "Developing responsive websites",
  "Building e-commerce solutions",
  "WordPress development",
  "Search engine optimization",
  "Local SEO",
  "Digital marketing",
  "Social media strategy",
  "Website performance and conversion improvements",
];

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string | null;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "dealora",
    name: "Dealora",
    category: "E-commerce / Affiliate Website",
    description:
      "A modern e-commerce and product discovery website designed to showcase trending products and online deals with a clean, conversion-focused shopping experience.",
    tags: [
      "Web Design",
      "Frontend Development",
      "E-commerce UI",
      "Product Presentation",
      "Responsive Design",
    ],
    image: dealoraImage,
    imageAlt:
      "Homepage of Dealora, an e-commerce and product discovery website showing trending product deals",
    liveUrl: "https://dealoras.netlify.app/",
    featured: true,
  },
  {
    id: "dr-saad",
    name: "Dr. Saad — Medical Oncology Website",
    category: "Healthcare Website / Personal Brand",
    description:
      "A professional healthcare website designed to establish a strong online presence for a medical professional, clearly presenting professional information, services, expertise, and patient appointment-related information.",
    tags: [
      "Healthcare Web Design",
      "Responsive Development",
      "UX/UI",
      "Professional Branding",
      "Appointment-focused design",
    ],
    image: drsaadImage,
    imageAlt:
      "Homepage of the Dr. Saad medical oncology website presenting services and appointment information",
    liveUrl: "https://drsaadweb.netlify.app/",
    featured: true,
  },
];

/** Additional projects appear here as they are added — no placeholder work. */
export const moreProjects: Project[] = [];

export const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern, responsive and user-friendly website designs for businesses and professionals.",
    icon: "palette",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Fast, responsive and functional websites built around the client's goals.",
    icon: "code",
  },
  {
    number: "03",
    title: "WordPress Development",
    description:
      "Professional WordPress websites, customization, optimization and ongoing improvements.",
    icon: "layout",
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Technical, on-page and local SEO strategies designed to improve search visibility.",
    icon: "search",
  },
  {
    number: "05",
    title: "E-commerce",
    description:
      "Modern online stores designed to present products clearly and create a smooth shopping experience.",
    icon: "cart",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "SEO, social media and digital marketing strategies that help businesses strengthen their online presence.",
    icon: "megaphone",
  },
] as const;

export const skillGroups = [
  {
    id: "web-development",
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Responsive Web Design",
      "WordPress",
      "Webflow",
    ],
  },
  {
    id: "seo-marketing",
    title: "SEO & Marketing",
    skills: [
      "SEO",
      "Local SEO",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Google Business Profile",
      "Content Strategy",
      "Social Media Marketing",
      "PPC",
    ],
  },
  {
    id: "business-ecommerce",
    title: "Business & E-commerce",
    skills: [
      "E-commerce",
      "Product Research",
      "Website Optimization",
      "Digital Strategy",
      "Import/Procurement Knowledge",
    ],
  },
];

export const experience = [
  {
    area: "Commercial / Procurement",
    description:
      "Experience with import procurement, documentation, logistics coordination, shipping documentation and commercial operations.",
  },
  {
    area: "Digital Marketing & SEO",
    description:
      "Experience working with SEO, local SEO, website optimization and digital marketing.",
  },
  {
    area: "Web Design & Development",
    description:
      "Experience creating professional websites for businesses, professionals and e-commerce projects.",
  },
];

export type Certification = { title: string; verifyUrl?: string };

export const certifications: Certification[] = [
  { title: "Google Digital Marketing & E-commerce" },
  { title: "SEO training" },
  { title: "Content-led SEO" },
  { title: "Webflow" },
  { title: "WordPress" },
  { title: "Procurement Management" },
  { title: "Logistics Management" },
  { title: "Digital Transformation" },
  { title: "AI-powered marketing" },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, audience, goals and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Develop the structure, user experience and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    description: "Design and develop the website with responsive performance in mind.",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Improve SEO, usability, performance and conversion opportunities.",
  },
];

export const whyWorkWithMe = [
  {
    title: "Business-focused approach",
    description: "I focus on creating websites that serve a real business purpose.",
    icon: "target",
  },
  {
    title: "Design + Development",
    description: "I can work across both visual design and technical implementation.",
    icon: "layers",
  },
  {
    title: "SEO-minded websites",
    description: "I consider search visibility and website structure during development.",
    icon: "search",
  },
  {
    title: "Responsive by default",
    description: "Websites should work smoothly across desktop, tablet and mobile.",
    icon: "devices",
  },
  {
    title: "Clear communication",
    description: "Keep the project process straightforward and easy to understand.",
    icon: "chat",
  },
] as const;

export const serviceOptions = [
  "Web Design",
  "Web Development",
  "WordPress",
  "E-commerce",
  "SEO",
  "Local SEO",
  "Digital Marketing",
  "Other",
];

export const budgetOptions = [
  "Under $250",
  "$250–$500",
  "$500–$1,000",
  "$1,000+",
  "Not sure yet",
];

export const seo = {
  title: "Sheikh Ahad Ali | Web Designer, Developer & SEO Specialist",
  description:
    "Sheikh Ahad Ali is a Web Designer, Developer, SEO Specialist and Digital Marketing Professional creating modern websites and digital solutions for businesses and professionals.",
};
