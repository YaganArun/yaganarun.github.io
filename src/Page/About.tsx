import programer from "../assets/coderbro.svg";
import getData from "../utils/data";
export default function About() {
  return (
    <div className="m-4 grid gap-14 gap-y-4 md:mt-24 md:grid-cols-7 ">
      <div className="md:col-span-1"></div>
      <div className="l-content  md:col-span-3 md:row-span-12">
        <div className="h-[100%] flex flex-col justify-center items-center md:items-start">
          <p
            className={`font-googlesans mb-10 text-4xl text-indigo-900 md:text-7xl`}
          >
            Yagan Arun
          </p>
          <p className=" font-goolesans text-justify text-lg font-googlesansregular text-indigo-950 md:text-3xl">
            {getData(2)}
          </p>
        </div>
      </div>
      <div className="r-content  sm:col-span-3 sm:row-span-12">
        <div className="h-[100%] flex flex-col justify-center items-center">
          <img className="w-96" src={programer} alt="programmer"></img>
        </div>
      </div>
    </div>
  );
}
