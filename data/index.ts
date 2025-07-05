export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
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
  {
    id: 1,
    title: "EduSphere - E-learning Platform",
    des:
      "An educational platform with board-wise subjects and resources, subscription access via Stripe, and a powerful admin panel for content management.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node.svg", "/mongo.svg", "/stripe.svg"],
    link: "https://edusphere.vercel.app", // or your actual link
  },
  {
    id: 2,
    title: "AI Text & Image Generator SaaS",
    des:
      "A Canva-style AI-powered SaaS app that generates images and text with OpenAI APIs, featuring a credit-based payment system.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/openai.svg", "/stripe.svg"],
    link: "https://ai-studio.vercel.app", // replace with your link
  },
  {
    id: 3,
    title: "Animated Apple iPhone 15 3D Clone",
    des:
      "A clone of the Apple iPhone 15 Pro website built with GSAP and Three.js, with smooth 3D transitions and product animations.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://apple-3d.vercel.app",
  },
  {
    id: 4,
    title: "3D Solar System Explorer",
    des:
      "Explore the planets with an interactive Three.js-powered 3D solar system, built to demonstrate spatial design and animation.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://solar-3d.vercel.app",
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
