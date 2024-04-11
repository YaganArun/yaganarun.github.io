import SkillIcon from "../components/SkillIcon";
import skills from "../assets/skills-1.svg";
import { getSkills } from "../utils/data";

const frontendSkill: Array<string> = [
  "I specialize in constructing highly adaptable single-page applications utilizing React",
  "With expertise in mordern CSS frameworks (TailwindCSS & Bootsrap), I create dynamic and visually appealing user interfaces that adapt seamlessly across various devices, ensuring an optimal user experience and efficient functionality throughout the application.",
  "I employ Redux to manage state within React applications, facilitating efficient data flow and centralized state management.",
  "I utilize JEST and RTL extensively to rigorously test the functionality of all components, ensuring comprehensive coverage and reliability in the software development process.",
];

export default function AboutFrontend() {
  return (
    <div className="grid sm:grid-cols-1">
      <div className="flex flex-row justify-center">
        <div className="text-6xl font-googlesans text-indigo-900 ">
          What I do ?
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:mt-10">
        <div className="skills-l-content hidden  md:col-span-2 md:block">
          <div className="h-[100%] flex flex-col justify-center">
            <div className="flex justify-center items-center">
              {/* this parent div is to center the child */}
              <img className=" w-[70%]" src={skills} alt="skills"></img>
            </div>
          </div>
        </div>
        <div className="skills-r-content  md:col-span-2 md:p-14">
          <div className="skills-r-content-head flex justify-center">
            <h1 className=" text-4xl font-googlesans">Frontend Development</h1>
          </div>
          <div className="skill-frontend flex flex-wrap justify-around mt-10">
            {getSkills(1).map((skill) => (
              <SkillIcon
                icon_path={skill.icon_path}
                icon_name={skill.icon_name}
              />
            ))}
          </div>
          <div className="skills-r-content-body flex flex-col justify-center items-start mt-16">
            {frontendSkill.map((content) => (
              <p className="text-lg font-googlesansregular mb-4 text-justify ">
                ⚡️ {content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
