import html_icon from "../assets/icons/html-icon.svg";
import css_icon from "../assets/icons/css-icon.svg";
import tailwindcss_icon from "../assets/icons/tailwindcss-icon.svg";
import react_icon from "../assets/icons/react-icon.svg";
import redux_icon from "../assets/icons/redux-icon.svg";
import typescript_icon from "../assets/icons/typescript-icon.svg";
import react_router_icon from "../assets/icons/react-router-icon.svg";
import jest_icon from "../assets/icons/jest-icon.svg";
import react_testing_lib_icon from "../assets/icons/react-testing-lib-icon.svg";
import nodejs_icon from "../assets/icons/nodejs-icon.svg";
import express_icon from "../assets/icons/expressjs-icon.svg";
import flask_icon from "../assets/icons/flask.svg";
import mongodb_icon from "../assets/icons/mongodb-icon.svg";
import mysql_icon from "../assets/icons/mysql-icon.svg";
import aws_ec2_icon from "../assets/icons/aws-ec2-icon.svg";
import aws_lambda_icon from "../assets/icons/aws-lambda-icon.svg";
import aws_cloudwatch_icon from "../assets/icons/aws-cloud-watch-icon.svg";

interface skill {
  icon_path: string;
  icon_name: string;
}

interface data {
  developer: string;
  sections: Array<string>;
  about: string;
  skills: {
    frontend: Array<skill>;
    backend: Array<skill>;
  };
}

let appData: data = {
  developer: "Yagan Arun",
  sections: ["home", "skills", "education", "experience"],
  about:
    "Driven by passion for computer science and software engineering, I'm an enthusiastic individual dedicated to innovation. Eager to explore new tech, solve complex problems, and excel through continuous learning and collaboration.",
  skills: {
    frontend: [
      { icon_path: html_icon, icon_name: "HTML" },
      { icon_path: css_icon, icon_name: "CSS" },
      { icon_path: tailwindcss_icon, icon_name: "TailwindCSS" },
      { icon_path: react_icon, icon_name: "React" },
      { icon_path: redux_icon, icon_name: "Redux" },
      { icon_path: react_router_icon, icon_name: "React Router" },
      { icon_path: typescript_icon, icon_name: "Typescript" },
      { icon_path: jest_icon, icon_name: "Jest" },
      { icon_path: react_testing_lib_icon, icon_name: "RTL" },
    ],
    backend: [
      { icon_path: nodejs_icon, icon_name: "NodeJS" },
      { icon_path: express_icon, icon_name: "ExpressJS" },
      { icon_path: flask_icon, icon_name: "Flask" },
      { icon_path: mongodb_icon, icon_name: "MongoDB" },
      { icon_path: mysql_icon, icon_name: "MySQL" },
      { icon_path: aws_ec2_icon, icon_name: "AWS EC2" },
      { icon_path: aws_lambda_icon, icon_name: "AWS Lambda" },
      { icon_path: aws_cloudwatch_icon, icon_name: "AWS  Cloudwatch" },
    ],
  },
};

// type theme = {
//   bgColor: string;
//   bgStrength: string;
//   textColor: string;
//   textColorStrength: string;
// };

// let appTheme: theme = {
//   bgColor: "blue",
//   bgStrength: "100",
//   textColor: "teal",
//   textColorStrength: "600",
// };

export default function getData(dataId: number): string[] {
  switch (dataId) {
    case 0: {
      if (typeof appData.developer == "string") {
        return [appData.developer];
      }
      break;
    }
    case 1: {
      return appData.sections;
    }
    case 2: {
      // about
      return [appData.about];
    }
    default: {
      break;
    }
  }
  return ["na"];
}

export function getSkills(skillId: number): skill[] {
  switch (skillId) {
    case 1: {
      return appData.skills.frontend;
    }
    case 2: {
      return appData.skills.backend;
    }
  }
  return [];
}
