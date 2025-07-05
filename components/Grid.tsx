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
    <section id="about" className="py-20 px-4 md:px-8 lg:px-12 text-white">
      {/* Skills Section */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-purple-400">My Skills</h2>
        <Tabs
          tabs={skillsData.map((category) => ({
            value: category.value,
            title: category.title,
            content: (
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-300
                                 border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ),
          }))}
          containerClassName="w-full"
        />

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
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 mt-80  text-green-400">Education</h2>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((item) => (
          // Assuming ExpandableCard takes title, institution, year, and details as props
        <HoverBorderGradient
            key={item.id}
            containerClassName="rounded-xl"
            as="div"
            className="flex flex-col items-start p-6 bg-gray-900 relative z-10 space-y-2"
          >
            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
            <p className="text-lg text-gray-300">{item.institution}</p>
            <p className="text-md text-gray-400">{item.year}</p>
            <p className="text-sm text-gray-400 mt-2">{item.details}</p>
          </HoverBorderGradient>
        ))}
      </div>
    </section>
  );
};

export default Grid;

