import { AiFillTwitterCircle, AiFillGithub, AiFillBehanceCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaDeviantart } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6 text-white">
        <div className="container mx-auto md:px-10">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-8">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find me on any of these platforms.
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-8/12 px-4 ml-auto">

                    <div className="inline-grid grid-cols-6 gap-4 ">
                      <AiFillGithub className="text-6xl hover:text-topettegreen cursor-pointer duration-200 items-center justify-center align-center" />
                      <AiFillTwitterCircle className="text-6xl hover:text-topettegreen cursor-pointer duration-200 items-center justify-center align-center" />
                      <AiFillBehanceCircle className="text-6xl hover:text-topettegreen cursor-pointer duration-200 items-center justify-center align-center" />
                      <AiFillLinkedin className="text-6xl hover:text-topettegreen cursor-pointer duration-200 items-center justify-center align-center" />
                      <FaDeviantart className="text-6xl hover:text-topettegreen cursor-pointer duration-200 items-center justify-center align-center" />
                      <AiFillYoutube className="text-6xl hover:text-topettegreen cursor-pointer duration-200 items-center justify-center align-center" />

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6 border-blueGray-300"></div>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2022</span> @topette
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
