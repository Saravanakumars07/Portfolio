import { Project, EducationItem, Skill, ExperienceItem } from './types';

export const PERSONAL_DETAILS = {
  name: "SARAVANAKUMAR S",
  role: "Full Stack Developer | DevOps Engineer",
  phone: "+91 9787665899",
  location: "Chennai, India",
  email: "ssaravanakumarsk07@gmail.com",
  about: "Full Stack Developer with 4+ years IT experience in DevOps, AWS, building platforms with 99.9% uptime.",
  linkedin: "https://www.linkedin.com/in/saravanakumar-sk-s/",
  github: "https://github.com/Saravanakumars07"
};

export const SKILLS: Skill[] = [
  { name: "JavaScript (ES6+)", percentage: 95 },
  { name: "React.js / Next.js", percentage: 92 },
  { name: "Node.js / Express.js", percentage: 88 },
  { name: "MongoDB / MySQL", percentage: 85 },
  { name: "AWS (EC2, ELB, IAM, VPC)", percentage: 80 },
  { name: "Docker / Kubernetes / Jenkins", percentage: 82 },
  { name: "Git / GitHub", percentage: 90 }
];

export const CATEGORIES = ["All", "Frontend", "Backend", "Full Stack", "MERN", "JavaScript", "React"];

export const PROJECTS: Project[] = [
  { id: 'qtify', title: "QTIFY - Music Streaming App", category: "Frontend", description: "Spotify-like UI built with ReactJS, Swiper, CSS Modules & API integration.", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800", githubLink: "https://github.com/Saravanakumars07/L-square-QTify", liveLink: "https://l-square-q-tify-edb1.vercel.app/" },
  { id: 'qkart-frontend', title: "QKart - E-Commerce Frontend", category: "Full Stack", description: "Scalable E-Commerce frontend with React Hooks, JWT auth, cart & checkout.", image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800", githubLink: "https://github.com/Saravanakumars07", liveLink: "" },
  { id: 'qkart-backend', title: "QKart Backend", category: "Backend", description: "Node.js/Express backend with Mongoose ODM, JOI validation & REST APIs.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800", githubLink: "https://github.com/Saravanakumars07", liveLink: "" },
  { id: 'xcruise', title: "XCruise - Travel Landing Page", category: "Frontend", description: "Responsive cruise booking landing page with HTML5, CSS3 Grid/Flexbox.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", githubLink: "https://github.com/Saravanakumars07", liveLink: "" },
  { id: 'xboard', title: "XBoard - News Feed App", category: "Frontend", description: "Dynamic news board fetching live RSS feeds, Bootstrap Accordion, ES6+.", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800", githubLink: "https://github.com/Saravanakumars07", liveLink: "" },
  { id: 'qtripdynamic', title: "QTripDynamic - Travel Booking", category: "Full Stack", description: "Travel booking platform with filtering, booking flow & localStorage.", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800", githubLink: "https://github.com/Saravanakumars07", liveLink: "" },
  { id: 'qtripstatic', title: "QTripStatic", category: "Frontend", description: "Static responsive travel website with HTML, CSS Flexbox, Bootstrap.", image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800", githubLink: "https://github.com/Saravanakumars07", liveLink: "" }
];

export const EDUCATION: EducationItem[] = [
  { id: '1', institution: "University of Madras", degree: "Bachelor of Science", stream: "Electronics and Communication Science ", years: "2021 - 2023" },
   { id: '2', institution: "Polytechnic College", degree: "Diploma", stream: "Electrical and Electronics Engineering", years: "2014 - 2017" },
];

export const EXPERIENCES: ExperienceItem[] = [
  { id: 'exp-1', company: "Azbil India Pvt Ltd", role: "Associate Software Engineer – Full Stack Development & DevOps", location: "Chennai, India", duration: "Apr 2024 – Present", description: ["Architected DevOps workflows for enterprise service reliability platform maintaining 99.9% uptime and SLA compliance.", "Designed CI/CD pipelines using Jenkins/Git reducing deployment times by 40%.", "Orchestrated containerized microservices on Kubernetes with pod troubleshooting.", "Provisioned AWS infrastructure EC2, ELB, IAM, VPC, Security Groups.", "Engineered RESTful APIs using Node.js, Express.js, MongoDB.", "Built monitoring with Prometheus/CloudWatch and Shell scripts automating 60% manual tasks."] },
  { id: 'exp-2', company: "ISS India Pvt. Ltd.", role: "DevOps Engineer — Infrastructure Support Associate", location: "Chennai, India", duration: "May 2023 – Mar 2024", description: ["Delivered L2 infrastructure support for automation systems.", "Managed DEV/UAT/PROD eliminating drift.", "Triaged incidents via Jira/ServiceNow reducing MTTR.", "Administered Linux servers, patching and network diagnosis."] },
  { id: 'exp-3', company: "Shabari Facility Services Pvt. Ltd", role: "Project Engineer", location: "Chennai, India", duration: "Aug 2018 – Jan 2020", description: ["Supervised BMS infrastructure using Honeywell HVAC, Fire Safety.", "Commanded incident response ensuring availability.", "Automated health checks and KPI reporting."] }
];