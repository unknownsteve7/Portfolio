import type { NavLink, TimelineItem, Service, Skill, Project, Testimonial, EventItem, SocialLink } from './types';
import { AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, ChartBarIcon, CpuChipIcon, PaintBrushIcon } from './components/icons/Icons';
import { UserGroupIcon, RocketLaunchIcon, MegaphoneIcon, ChatBubbleBottomCenterTextIcon } from './components/icons/Icons';
import { LinkedInIcon, GithubIcon, TwitterIcon, MailIcon } from './components/icons/Icons';
import {
    FaReact, FaPython,  FaHtml5, FaCss3,
    FaNodeJs, FaGithub, FaBootstrap, FaGitAlt, FaNpm,
    FaAngular,FaChartPie
} from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux, SiVite, SiAngular,
    SiVuedotjs, SiWebpack, SiBabel, SiJest, SiTestinglibrary,
    SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras, SiTableau,
    SiMysql, SiPostgresql, SiMongodb,
    SiJupyter, SiAnaconda, SiR, SiApachehadoop, SiApacheairflow,
    SiApachekafka, SiDocker, SiKubernetes,
    SiGraphql, SiAmazon, SiGooglecloud, SiFirebase,
    SiJavascript, SiPostman, SiPowers
} from "react-icons/si";

export const navLinks: NavLink[] = [
    { name: 'Experience', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const educationData: TimelineItem[] = [
    {
        date: '2023-2027',
        title: 'B.Tech',
        subtitle: 'Rajiv Gandhi University of Knowledge Technologies',
        details: 'Computer Science and Engineering'
    },
    {
        date: '2021-2023',
        title: 'Pre-University Course',
        subtitle: 'Rajiv Gandhi University of Knowledge Technologies',
        details: ''
    }
];

export const experienceData: TimelineItem[] = [
    {
        date: '2023 - 2024',
        title: 'Self Paced Frontend Developer and Data Analyst',
        subtitle: 'Personal Projects',
        details: 'Worked on several personal projects to hone my skills in frontend development and data analysis.'
    },
    {
        date: 'July 2025 - Present',
        title: 'Frontend Developer',
        subtitle: 'Shraddha Foundation',
        details: [
            'Collaborate with designers and backend developers to create seamless user experiences.',
            'Developed a Police Dashboard using React, TypeScript, and Tailwind CSS to streamline case management and reporting.',
            'Developed Hostel Management System using React, TypeScript, and Tailwind CSS to efficiently manage student accommodations and resources.'
        ]
    }

];

export const servicesData: Service[] = [
    { icon: CodeBracketIcon, title: 'Web Development', description: 'Creating responsive, high-performance websites and applications using modern frameworks like React and Next.js.' },
    { icon: ChartBarIcon, title: 'Data Analysis', description: 'Transforming raw data into meaningful insights with Python, SQL, and data visualization tools to drive business decisions.' },
    { icon: CpuChipIcon, title: 'Data Visualization', description: 'Building interactive dashboards and visualizations to represent data insights effectively.' },
    { icon: PaintBrushIcon, title: 'Dashboard Design', description: 'Designing user-friendly dashboards that provide clear insights and facilitate data-driven decision-making.' },
];

export const skillsData: Skill[] = [
  // 🌐 Frontend
  { name: 'React', icon: FaReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#FFFFFF' }, // White logo on dark bg
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
  { name: 'HTML5', icon: FaHtml5, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3, category: 'Frontend', color: '#1572B6' },
  { name :'GitHub', icon : FaGithub, category: 'Frontend', color: '#ffffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, category: 'Frontend', color: '#38BDF8' },
  { name: 'Bootstrap', icon: FaBootstrap, category: 'Frontend', color: '#7952B3' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Frontend', color: '#339933' },
  { name: 'Redux', icon: SiRedux, category: 'Frontend', color: '#764ABC' },
  { name: 'Angular', icon: SiAngular, category: 'Frontend', color: '#DD0031' },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'Frontend', color: '#42B883' },
  { name: 'Postman', icon: SiPostman, category: 'Frontend', color: '#FF6C37' },
  { name: 'Git', icon: FaGitAlt, category: 'Frontend', color: '#F05032' },
  { name: 'NPM', icon: FaNpm, category: 'Frontend', color: '#CB3837' },

  // 📊 Data / Analytics
  { name: 'Python', icon: FaPython, category: 'Data', color: '#3776AB' },
  { name: 'Pandas', icon: SiPandas, category: 'Data', color: '#3607eeff' },
  { name: 'NumPy', icon: SiNumpy, category: 'Data', color: '#1199c7ff' },
  { name: 'SQL (MySQL)', icon: SiMysql, category: 'Data', color: '#3b8ccaff' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Data', color: '#17aaeaff' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Data', color: '#47A248' },
  { name: 'Tableau', icon: SiTableau, category: 'Data', color: '#E97627' },
  { name: 'Power BI', icon: FaChartPie, category: 'Data', color: '#F2C811' },
  { name: 'Scikit-learn', icon: SiScikitlearn, category: 'Data', color: '#F7931E' },
  { name: 'TensorFlow', icon: SiTensorflow, category: 'Data', color: '#FF6F00' },
  { name: 'Keras', icon: SiKeras, category: 'Data', color: '#D00000' },
  { name: 'Jupyter', icon: SiJupyter, category: 'Data', color: '#F37626' },
];



export const projectsData: Project[] = [
    {
    title: "Hostel Management System",
    category: "Development",
    image: "/SSE.png",
    description: "Sanskriti School of Engineering",
    tags: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    liveLink: "https://sanskritischoolofengineeringhostel.vercel.app/",
    repoLink: "https://github.com/unknownsteve7/HMS",
  },
  {
    title: "Fuo Chairs",
    category: "Development",
    image: "/fuo-chairs.png",
    description: "A sleek and modern chair design for the Fuo brand.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Netlify"],
    liveLink: "https://fuorio.netlify.app/",
    repoLink: "https://github.com/unknownsteve7/Fuo",
  },
    {
    title: "AI Resume Relevance Checker",
    category: "Development",
    image: "/Innomatics.png",
    description: "Stramlit Dashboard for Innomatics Hackathon",
    tags: ["Streamlit", "CSS", "Dashboard", "Hackathon"],
    liveLink: "https://resume-analyzer-blast.streamlit.app/",
    repoLink: "https://github.com/unknownsteve7/Innomatics_Frontend",
  },
  {
    title: "Earth",
    category: "Development",
    image: "/earth.png",
    description: "An Animated Earth Component created with React and Three.js.",
    tags: ["JavaScript", "React"],
    liveLink: "https://serene-earth.netlify.app/",
    repoLink: "https://github.com/unknownsteve7/Earth-React-Component",
  },
  {
    title: "VisionixAI",
    category: "Analysis",
    image: "/VisionixAI.png",
    description: "A zone-based computer vision platform that uses CCTV feeds to detect presence in configurable room zones and trigger automation.",
    tags: ["JavaScript", "Python", "YOLO/MediaPipe", "CCTV integration"],
  },
  {
    title: "Sanchara Admin Dashboard",
    category: "Analysis",
    image: "/sanchara.png",
    description: "A privacy-first travel data app powering NATPAC with rich analytics and real-time KPIs.",
    tags: ["Power BI", "Data Visualization", "Dashboard", "Analytics"],
    repoLink: "https://github.com/unknownsteve7/Sanchara-Admin-Dashboard",
  },
  {
    title: "Foreign Nationals Grievance System",
    category: "Development",
    image: "/Foreign.png",
    description: "A web portal for the police department of Satya Sai district to manage data and grievances of foreign nationals.",
    tags: ["React JS", "FastAPI", "MySQL", "Tailwind CSS"],
    liveLink: "https://satya-sai-district-police.vercel.app",
      repoLink: "https://github.com/unknownsteve7/Satya-Sai-District-Police",
  },
  {
    title: "Retail Sales Dashboard",
    category: "Analysis",
    image: "/xlx.png",
    description: "An interactive Excel dashboard analyzing retail sales trends, revenue distribution, and product performance.",
    tags: ["Excel", "Data Visualization", "Dashboard"],
    repoLink: "https://github.com/unknownsteve7/Retail_Dashboard",
  },
  {
    title: "Netflix Recommendation System",
    category: "Analysis",
    image: "/Recommend.png",
    description: "A Python-based recommendation system that suggests movies and shows to users using collaborative filtering techniques.",
    tags: ["Python", "Pandas", "Cosine Similarity", "Machine Learning"],
    repoLink: "https://github.com/unknownsteve7/Netflix_Recommendation",
    liveLink: "https://mohan-data-netflix-recommender.streamlit.app/",
  },
  {
    title: "Netflix Analytics Dashboard",
    category: "Analysis",
    image: "/Dashboard.png",
    description: "A Python-based dashboard that provides insights into Netflix viewing patterns and trends.",
    tags: ["Python", "Pandas", "Data Visualization", "Machine Learning"],
    repoLink: "https://github.com/unknownsteve7/Netflix-dashboard",
    liveLink: "https://mohan-data-netflix-dashboard.streamlit.app/",
  },
  {
    title: "Indian Startup Analysis",
    category: "Analysis",
    image: "/Indian_Startup.jpeg",
    description: "A Power BI dashboard analyzing Indian startup funding data, uncovering patterns in investments, sectors, and growth trends.",
    tags: ["Power BI", "Dashboard", "Data Visualization"],
    repoLink: "https://github.com/unknownsteve7/Indian-Startup-Dashboard",
  },
  {
    title: "Foreign Visitor Portal",
    category: "Development",
    image: "/Visitor.png",
    description: "A web portal designed for foreign visitors to register their stay and provide necessary details to the police department of Satya Sai district.",
    tags: ["React JS", "FastAPI", "MySQL", "Tailwind CSS"],
    liveLink: "https://satyasaiforeignvisitor.vercel.app",
  },
];


export const testimonialsData: Testimonial[] = [
    {
        quote: 'Working with Mohan was a game-changer. His expertise in frontend development and eye for design elevated our project beyond our expectations.',
        name: 'Leeladhar',
        role: 'UI/UX Designer, Freelance',
        avatar: 'https://picsum.photos/seed/avatar1/100/100'
    },
     {
        quote: 'As an AI engineer, I deal with logic and data — Mohan brought the design and interactivity that turned it into a product users actually love.',
        name: 'Anand',
        role: 'AI Engineer,Backend Developer @ Shraddha',
        avatar: 'https://picsum.photos/seed/avatar3/100/100'
    },
    
    {
        quote: 'The insights Mohan provided from our data were invaluable. He has a unique talent for making complex information understandable and actionable.',
        name: 'Vardhan',
        role: 'Ml Engineer, Rgukt Ongole',
        avatar: 'https://picsum.photos/seed/avatar2/100/100'
    }
    
];

export const eventsData: EventItem[] = [
    { date: 'Sep 2025', title: 'Amaravati Quantum Valley Internal Hackathon 2025', description: 'Participated with a team of 6 for developing an Quantum Ml-powered Fraud Detection Prototype.', icon: RocketLaunchIcon },
    { date: 'Ongoing', title: 'Smart India Hackathon 2025', description: 'Participated with a team to develop an innovative solution Cattle Breed Classification Based in ML', icon: MegaphoneIcon },
        { date : 'Sep 25 2025', title: 'Innomatics 24 Hour Hackathon', description: 'Secured 2nd place in a 24-hour hackathon organized by Innomatics Research Labs, focusing on rapid prototyping and innovative solutions.', icon: ChatBubbleBottomCenterTextIcon }

    ];

export const socialLinksData: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nagamohan765', icon: LinkedInIcon, color: '#0A66C2' },
    { name: 'GitHub', url: 'https://github.com/unknownsteve7', icon: GithubIcon, color: '#ffffffff' },
    { name: 'Twitter', url: 'https://twitter.com/nagamohan765', icon: TwitterIcon, color: '#ffffffff' },
    { name: 'Email', url: 'mailto:nagamohan765@gmail.com', icon: MailIcon, color: '#EA4335' },
];
