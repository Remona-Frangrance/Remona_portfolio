import React from 'react';
// Assuming these components will be available from your Aceternity UI setup
// You might need to adjust the import paths based on your project structure.
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'; // For Skills
import { Timeline } from './ui/timeline'; // For Work Experience
import  ExpandableCard  from './ui/ExpandableCard'; // For Education (placeholder name, adjust as per actual component)
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Tabs } from './ui/tabs';

// Placeholder data structures - you will replace these with your actual data
const skillsData = [
  {
    value: "frontend",
    title: "Frontend Technologies",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Next.js"],
  },
  {
    value: "styling",
    title: "Styling Frameworks",
    skills: ["Bootstrap", "TailwindCSS", "MaterialUI"],
  },
  {
    value: "backend_db",
    title: "Backend & Databases",
    skills: ["NodeJS", "ExpressJS", "MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    value: "dev_tools",
    title: "Development Tools",
    skills: ["VS Code", "Git", "GitHub", "Postman", "Thunder Client", "MongoDB Compass", "Swagger"],
  },
  {
    value: "soft_biz",
    title: "Business & Soft Skills",
    skills: ["Team Work", "Time Management", "Attention to detail", "Zoho Sign", "Stripe"],
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

const Grid = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-12 text-white scroll-mt-40">
      {/* Skills Section */}
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <div
            key={category.value}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0E1220] to-[#0B0E19] p-6 shadow-lg"
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(60% 40% at 50% 0%, rgba(108,71,255,0.15) 0%, rgba(108,71,255,0) 100%)" }} />
            <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

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
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((item) => (
          // Assuming ExpandableCard takes title, institution, year, and details as props
        <HoverBorderGradient
            key={item.id}
            containerClassName="rounded-2xl"
            as="div"
            className="flex flex-col items-start p-6 relative z-10 space-y-2 bg-gradient-to-b from-[#0E1220] to-[#0B0E19] border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
            <p className="text-base text-gray-300">{item.institution}</p>
            <p className="text-sm text-gray-400">{item.year}</p>
            <p className="text-sm text-gray-300 mt-2">{item.details}</p>
          </HoverBorderGradient>
        ))}
      </div>
    </section>
  );
};

export default Grid;

