import { motion } from "motion/react";

const timelineData = [
  {
    title: "Application Developer (IC2)",
    description:
      "Joined Oracle as an Application Developer. Built and maintained the department's core platform tools, including a configuration service used by utility companies to configure their products.  Worked on database migrations, backend and frontend code for various web services and libraries that communicate with the platform.",
    period: "2022 - Current",
    company: 'Oracle',
    skills: ['React', 'NodeJS', 'MySQL', 'Jenkins', 'Knex', 'Sequelize', 'Ruby', 'Docker']
  },
  {
    title: "Senior Associate Application Developer",
    description:
      "Started my career as an Associate Software Developer at Discover. Worked on a team that built and maintained a large call center application using React and NodeJs. Gained experience with new technologies such as GraphQL, Java Spring Boot, and microservice infrastructure. Learned and implemented micro frontends for use across multiple applications, and assisted in maintaining a custom UI library similar to Material UI.",
    period: "2020 - 2022",
    company: 'Discover',
    skills: ['React', 'NodeJS', 'GraphQL', 'Java', 'Jenkins', 'Springboot', 'Microservices']
  },
  {
    title: "Discover Code Orange",
    description:
      "Joined a program hosted by Discover in partnership with NIU called code_orange, which paired teams of computer science students to collaborate on various projects. Contributed to multiple exciting projects, utilizing a diverse range of web frameworks, including NodeJs, Angular, and React. ",
    period: "2019 - 2020",
    company: 'Discover',
    skills: ['Angular', 'React', 'NodeJS', 'WebSockets', 'Machine Learning']
  },
  {
    title: "First Internship",
    description:
      "Software Developer Intern at Stratus Networks. Contributed to the development of a website that managed orders, customer accounts, and fiber details for a small internet service provider. Created a standalone application to import data from a large Excel spreadsheet into a database, enabling efficient data visualization and search through a React UI.",
    period: "2018 - 2019",
    company: 'Stratus Networks',
    skills: ['Java', 'React', 'NodeJS', 'Python']
  },
  {
    title: "Started College",
    description:
      "Studied Computer Science at Northern Illinois University, with coursework focused on learning C/C++ by implementing commonly used data structures such as heaps and maps. Also studied assembly language using the IBM System/360. ",
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

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  period,
  company,
  skills,
  index
}) => {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      {index > 0 && <div className="w-0.5 h-24 bg-gray-300 mb-14 mx-auto dark:bg-gray-600"></div>}
      <span className="text-sm text-gray-500 block dark:text-gray-400">{period}</span>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {title}
        <span className="text-blue-500 dark:text-blue-400"> · {company}</span>
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="w-full">
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full shadow-sm dark:bg-gray-700 dark:text-gray-200"
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
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mt-24">A Brief History</h2>
      <div className="mt-16 text-lg text-center font-semibold text-gray-600 dark:text-gray-300">
        Here's what I've been up to the past couple of years...
      </div>
      <div className="w-full h-auto">
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