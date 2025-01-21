import { motion } from "motion/react"

const timelineData = [
  { 
    title: "Application Developer (IC2)",
    description: "Joined Oracle as Application Developer. Built and maintained the departments core platform tools including a configuration service that is used by utility companies to configure their products. Worked on database migrations, backend and frontend code for various webservices and libraries that communicate with the platform.",
    period: "2022 - Current",
    company: 'Oracle',
    skills: ['React', 'NodeJS', 'MySQL', 'Jenkins', 'Knex', 'Sequelize', 'Ruby', 'Docker'] 
  },
  {
    title: "Senior Associate Application Developer",
    description: "Began my first Job as an Associate Software Developer at Discover. Worked on a team that built and mainted a large call center application uising React and NodeJs. Got familiar with some new technology including GraphQL, Java Spring boot and microservice infastructure. Learned and implented micro front ends that could be used in multile applications as well as helped maintain a custom UI library similar to that of Material UI.",
    period: "2020 - 2022",
    company: 'Discover',
    skills: ['React', 'NodeJS', 'GraphQL', 'Java', 'Jenkins', 'Springboot', 'Microservices']
  },
  {
    title: "Discover Code Orange",
    description: "Joined a program hosted by Discover through NIU called code_orange which paired teams of computer science students together to work on various projects. Worked on muliple interesting projects using a wide variety of Web frameworks inclucidne NodeJs, Angular, and React.",
    period: "2019 - 2020",
    company: 'Discover',
    skills: ['Angular', 'React', 'NodeJS', 'WebSockets', 'Machine Learning' ] 
  },
  { 
    title: "First Internship",
    description: "Software Developer Intern at Stratus Networks. Helped work on a website that controlled orders, customer accounts, and fiber details for a small internet company. Created a standalone app to import data from a large excel spreadsheet into a database that could then be easily visualized and searched through a React UI.",
    period: "2018 - 2019",
    company: 'Stratus Networks',
    skills: ['Java', 'React', 'NodeJS', 'Python'] 
  },
  { 
    title: "Started College",
    description: "Studied Computer Science at Northern Illinois University. Coursework focused on learning C/C++ by implementign commonly used data structures like heaps and maps. Studied Assemble language using IBM System/360.",
    period: "2016 - 2019",
    company: 'Northern Illinois University',
    skills: ['C', 'C++', 'Assembly', 'Java', 'Javascript'] 
  }
];

interface TimelineItemProps {
  title: string;
  description: string;
  period: string;
  company: string;
  skills: Array<string>;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, period, company, skills, index}) => {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      {index > 0 && <div className="w-0.5 h-24 bg-gray-300 mb-14 mx-auto"></div>}
      <span className="text-sm text-gray-500 block">{period}</span>
      <h3 className="text-xl font-semibold text-gray-800">
        {title}
        <span className="text-blue-500"> · {company}</span>
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="w-full">
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-24">A Brief History</h2>
      <div className="mt-16 text-lg text-center font-semibold">Here's what I've been up to the past couple of years...</div>
      <div className="w-full h-screen">
        <div className="max-w-4xl mx-auto py-12 flex flex-col items-center">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              description={item.description}
              period={item.period}
              company={item.company}
              skills={item.skills}
              index={index}
            />
          ))}
          
        </div>
      </div>
    </div>

  );
};

export default Timeline;