import rocket from "../assets/rocket.gif";

export default function Header() {
  return (
    <div className="grid">
      <div className="app-header">
        <div className="grid grid-cols-3 p-6 sm:grid-cols-12 ">
          <div className="header-rocket flex justify-center items-center text-black rounded-lg col-span-6  sm:col-span-3">
            <img
              className="w-[10%] absolute  -z-10  m-6 p-6"
              src={rocket}
              alt="rocket"
            />
            <h1 className=" font-thin text-2xl  sm:text-4xl">{`<Yagan Arun/>`}</h1>
          </div>
          <div className="m-6 p-6 hidden sm:col-span-9 sm:block">
            {/* <ul className="link-items grid sm:grid-cols-4">
              {getData(1)?.map((section: string) => (
                <li className=" sm:col-span-1 font-thin text-2xl cursor-pointer">
                  <div className=" sm:col-span-1 font-thin text-2xl cursor-pointer">
                    {capitalize(section)}
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
