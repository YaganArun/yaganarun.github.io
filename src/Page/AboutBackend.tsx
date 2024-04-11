import api from "../assets/api-3.svg";
import SkillIcon from "../components/SkillIcon";
import { getSkills } from "../utils/data";
const frontendSkill: Array<string> = [
  "Develop backend APIs using Node.js / Express.js and Flask, leveraging their respective strengths to create efficient and scalable solutions for web applications.",
  "Utilize MongoDB for NoSQL and MySQL for SQL as data storage solutions as part of my solutions.",
  "Hosting and maintaining websites on cloud based virtual machine instances, along with integrating databases",
  "Developing serverless applications using AWS Lambda functions.",
];

export default function AboutBackend() {
  return (
    <div>
      <div className="grid md:grid-cols-4">
        <div className="about-backend-lcontent md:col-span-2">
          <div className="h-[100%] flex flex-col justify-center">
            <div className="flex justify-center items-center">
              {/* this parent div is to center the child */}
              <img
                className="w-[70%] hidden sm:block"
                src={api}
                alt="skills"
              ></img>
            </div>
          </div>
        </div>
        <div className="about-backend-lcontent md:col-span-2 md:p-14">
          <div className="skills-r-content-head flex justify-center">
            <h1 className=" text-4xl font-googlesans">Backend Development</h1>
          </div>
          <div className="skill-frontend flex flex-wrap justify-around mt-10">
            {getSkills(2).map((skill) => (
              <SkillIcon
                icon_path={skill.icon_path}
                icon_name={skill.icon_name}
              />
            ))}
          </div>
          <div className="skills-r-content-body flex flex-col justify-center items-start mt-16">
            {frontendSkill.map((content) => (
              <p className="text-sm font-googlesansregular mb-4 text-justify md:text-lg ">
                ⚡️ {content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
