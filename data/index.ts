export const navItems = [
  { name: "Skills", link: "#skills", icon: "skills" },
  { name: "Education", link: "#education", icon: "education" },
  { name: "Projects", link: "#projects", icon: "projects" },
  { name: "Experience", link: "#experience", icon: "experience" },
  { name: "Contact", link: "#contact", icon: "contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I value clear communication and strong client relationships.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I adapt to global time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack I work with",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "MERN developer with a love for clean UI and smart UX.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring AI and scalable ed-tech solutions.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s collaborate on your next big idea!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // Professional Projects
  {
    id: 1,
    title: "Inventive Byte",
    des:
      "Led the frontend and admin panel development. Designed dashboards, content tools, and optimized UI/UX; collaborated closely with backend for smooth data integration.",
    img: "/invbyte.png",
    iconLists: ["react", "typescript", "tailwindcss", "redux"],
    link: "https://stg.inventivebyte.com/",
    type: "professional",
  },
  {
    id: 2,
    title: "University of Bay Area",
    des:
      "Built and maintained frontend, backend, and admin features. Integrated Stripe payments, developed secure REST APIs, and streamlined admin workflows.",
    img: "/uba.png",
    iconLists: ["react", "nodejs", "express", "mongodb", "stripe"],
    link: "https://ubayarea.org/",
    type: "professional",
  },
  {
    id: 3,
    title: "Video Streaming Platform",
    des:
      "Backend for secure video upload, storage, and streaming with RBAC and optimized APIs for performance and scalability.",
    img: "/p3.svg",
    iconLists: ["nodejs", "express", "mongodb", "jwt"],
    link: "#",
    type: "professional",
  },
  {
    id: 4,
    title: "Audio Streaming Platform",
    des:
      "Backend for audio upload, playlist management, real-time streaming, search, categorization, and personalized preferences with JWT security.",
    img: "/p4.svg",
    iconLists: ["nodejs", "express", "mongodb", "jwt"],
    link: "#",
    type: "professional",
  },

  // Personal Projects
  {
    id: 5,
    title: "EduSphere",
    des:
      "Full‑stack platform with responsive React frontend and Node.js + Express backend, admin panel, and CI/CD on Vercel.",
    img: "/edusphere.png",
    iconLists: ["react", "tailwindcss", "typescript", "framer", "mui", "emotion", "vite"],
    link: "https://edusphere-frontent.vercel.app/",
    type: "personal",
  },
  {
    id: 6,
    title: "HF Interiors",
    des:
      "MERN website and admin panel with custom CMS features and real-time content updates via backend APIs.",
    img: "/hfinteriorss.png",
    iconLists: ["react", "tailwindcss", "mongodb", "express", "nodejs"],
    link: "http://hfinteriorss.com/",
    type: "personal",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit sit amet lorem interdum elementum. Curabitur nec erat sit amet velit fermentum tempus ut et libero.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit sit amet lorem interdum elementum. Curabitur nec erat sit amet velit fermentum tempus ut et libero.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit sit amet lorem interdum elementum. Curabitur nec erat sit amet velit fermentum tempus ut et libero.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit sit amet lorem interdum elementum. Curabitur nec erat sit amet velit fermentum tempus ut et libero.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
   {
    id: 1,
    title: "Full Stack Developer (MERN Stack)",
    desc: "Currently developing and maintaining robust web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Responsible for end-to-end feature implementation and performance optimization.",
    className: "md:col-span-2", // This will make it span two columns on medium screens and up
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React & Node.js Intern",
    desc: "Gained hands-on experience in front-end development with React.js and back-end services with Node.js. Contributed to interactive UI components and API integrations.",
    className: "md:col-span-2", // This will make it span two columns on medium screens and up
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/KuldeepMahto07",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
