import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';
// Assuming these components will be available from your Aceternity UI setup
// You might need to adjust the import paths based on your project structure.
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'; // For Skills
import { Timeline } from './ui/timeline'; // For Work Experience
import  ExpandableCard  from './ui/ExpandableCard'; // For Education (placeholder name, adjust as per actual component)
import { HoverBorderGradient } from './ui/hover-border-gradient';
 

// Placeholder data structures - you will replace these with your actual data
const skillsData = [
  {
    value: "languages",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "MongoDB", "MySQL", "HTML", "(S)CSS"],
  },
  {
    value: "libs_frameworks",
    title: "Libraries & Frameworks",
    skills: [
      "Node.js",
      "Express",
      "React",
      "NextJS 14",
      "TailwindCSS",
      "NestJS",
      "TanStack Query",
    ],
  },
  {
    value: "tools_platforms",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Fork",
      "GitHub Desktop",
      "Railway",
      "Render",
      "Vercel",
      "Firebase",
      "AWS (EC2, Lambda, S3 – theoretical knowledge)",
    ],
  },
  {
    value: "payments_media",
    title: "Payments & Media Services",
    skills: ["Stripe", "Cloudinary"],
  },
  {
    value: "api_tools",
    title: "API Tools",
    skills: ["Postman", "Thunder Client"],
  },
  {
    value: "design_prototyping",
    title: "Design & Prototyping",
    skills: ["Canva"],
  },
  {
    value: "concepts",
    title: "Concepts",
    skills: [
      "Clean Architecture",
      "MVC Architecture",
      "SOLID Principles",
      "Agile Methodologies",
    ],
  },
];

const workExperienceData = [
  {
    id: 1,
    title: "Full Stack Developer (MERN Stack)",
    company: "Adite Technologies",
    duration: "July 2024- Present (1 Year Experience)", // Reflecting 1 year experience
    description: "Currently working as a Full Stack Developer, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Responsible for developing and maintaining robust web applications, implementing new features, and optimizing performance across both frontend and backend.",
  },
  {
    id: 2,
    title: "React & Node.js Intern",
    company: "Azzip Tech",
    duration: "July - August 2023",
    description: "Completed an internship focusing on React.js for front-end development and Node.js for back-end services. Gained hands-on experience in building interactive user interfaces and API integrations.",
  },
];

const educationData = [
   {  
    id: 1,
    degree: "10th Grade",
    institution: "St. Xaviers CMIPublic School",
    year: "2019",
    details: "Achieved 87% in the 10th-grade examinations.",
  },
  {
    id: 2,
    degree: "12th Grade (Science Stream)",
    institution: "Fathima Convent High School",
    year: "2021",
    details: "Secured 71.09% in the 12th-grade examinations.",
  },
   {
    id: 3,
    degree: "Bachelor of Engineering",
    institution: "Gujarat Technological University",
    year: "2025",
    details: "Achieved a CGPA of 9.33. Focused on software engineering principles and modern web development practices.",
  },
];

const FeaturedStrip = () => {
  const featured = useMemo(() => ([
    { title: 'React + Next.js', note: 'Building fast, accessible UI with SSR/ISR.' },
    { title: 'Node.js + Express', note: 'Robust APIs, auth, and integrations.' },
    { title: 'MongoDB', note: 'Schema design and performant queries.' },
    { title: 'Stripe', note: 'Secure payments with webhooks.' },
  ]), []);
  const [activeFeature, setActiveFeature] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveFeature((p) => (p + 1) % featured.length), 3500);
    return () => clearInterval(id);
  }, [featured.length]);
  return (
    <div className="mt-6">
      <motion.div
        key={activeFeature}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#221a3a] via-[#141728] to-[#0B0E19] p-4 md:p-6"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-wider text-white/60">Featured now</div>
            <div className="text-xl md:text-2xl font-semibold">{featured[activeFeature].title}</div>
            <div className="text-white/70 text-sm md:text-base mt-1">{featured[activeFeature].note}</div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {featured.map((_, i) => (
              <span key={i} className={`h-1.5 w-6 rounded-full ${i === activeFeature ? 'bg-purple' : 'bg-white/15'}`} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CoreSkills = () => {
  const coreSkills = useMemo(() => ([
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 82 },
    { name: 'TypeScript', level: 80 },
    { name: 'MongoDB', level: 78 },
    { name: 'TailwindCSS', level: 82 },
    { name: 'Stripe', level: 70 },
  ]), []);
  return (
    <div className="mt-10">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Core skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {coreSkills.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.03 }}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm md:text-base text-gray-100">{s.name}</span>
              <span className="text-xs text-white/60">{s.level}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-purple rounded-full" style={{ width: `${s.level}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ExpandedCategories = () => {
  const getProficiency = (skill: string) => {
    const defaultMap: Record<string, number> = {
      React: 90, 'NextJS 14': 88, 'Next.js': 88, 'Node.js': 85, Express: 82,
      TypeScript: 80, MongoDB: 78, TailwindCSS: 82, Stripe: 70, Cloudinary: 72,
      Git: 75, Vercel: 78, Firebase: 74, 'AWS (EC2, Lambda, S3 – theoretical knowledge)': 55,
      JavaScript: 85, HTML: 88, '(S)CSS': 80, MySQL: 65, 'TanStack Query': 70,
      Postman: 80, 'Thunder Client': 70, Canva: 65, 'Clean Architecture': 70,
      'MVC Architecture': 75, 'SOLID Principles': 70, 'Agile Methodologies': 72,
      Fork: 60, 'GitHub Desktop': 60, Railway: 60, Render: 60,
    };
    return defaultMap[skill] ?? 68;
  };
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((category, cIdx) => (
        <motion.div
          key={category.value}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: cIdx * 0.05 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0E1220] to-[#0B0E19] p-6 shadow-lg"
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 40% at 50% 0%, rgba(108,71,255,0.15) 0%, rgba(108,71,255,0) 100%)' }} />
          <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
          <div className="flex flex-col gap-3">
            {category.skills.map((skill, idx) => (
              <div key={skill}>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-200">{skill}</span>
                  <span className="text-xs text-white/50">{getProficiency(skill)}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${getProficiency(skill)}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.02 }}
                    className="h-full bg-purple rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Grid = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-12 text-white scroll-mt-40">
      {/* Skills Section */}
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      {
        // New: Hands-free, no-click layout
      }
      <FeaturedStrip />
      <CoreSkills />
      <ExpandedCategories />

      {/* Work Experience Section - Using Timeline */}
      {/* <h2 className="text-4xl lg:text-5xl font-bold text-center mt-80   mb-12   text-blue-400">Work Experience</h2> */}
      {/* <div className="w-full max-w-4xl mx-auto mb-20"> */}
        {/* The Timeline component from Aceternity UI would go here.
            It likely takes an array of items similar to workExperienceData. */}
        {/* <Timeline
          data={workExperienceData.map((item) => ({
            title: item.title,
            content: (
              <div>
                <div className="font-semibold">{item.company}</div>
                <div className="text-sm text-gray-400 mb-1">{item.duration}</div>
                <div>{item.description}</div>
              </div>
            ),
          }))}
        />
      </div> */}

      {/* Education Section - Using Expandable Cards */}

      <h1 id="education" className="heading mb-12 mt-80 scroll-mt-40">
        My <span className="text-purple">Education</span>
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <Timeline
          data={educationData.map((item) => ({
            title: `${item.degree} — ${item.institution}`,
            content: (
              <div>
                <div className="text-sm text-white/60 mb-1">{item.year}</div>
                <div className="text-sm text-gray-200">{item.details}</div>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
};

export default Grid;

