import { useState } from "react";

interface IconProps {
  icon_path: string;
  icon_name: string;
}

export default function SkillIcon({ icon_path, icon_name }: IconProps) {
  const [showName, setShowName] = useState(false);

  return (
    <div className="cursor-pointer">
      <img
        className=" w-11 rounded-xl p-3 shadow-xl border border-black md:w-16 md:mb-2 hover:animate-pulse"
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
        src={icon_path}
        alt="skill"
      />
      {showName && (
        <div className=" flex justify-center">
          <h1 className="font-googlesansregular text-xs absolute text-white bg-indigo-950 p-2 rounded-lg ">
            {icon_name}
          </h1>
        </div>
      )}
    </div>
  );
}
