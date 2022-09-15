import { AiFillFilePdf } from "react-icons/ai";
import { ParallaxWebs } from "../components/ParallaxWebs";
import { Skills } from "../components/Skills";

export const Experiencia = () => {
  return (
    <>
      <div
        id="experiencia"
        className=" flex items-center justify-center pt-16 bg-menuheader2"
      >
        <div className="titulo">Experience</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 bg-menuheader2">
        <div className="flex-row px-8 md:block hidden h-full"><ParallaxWebs /></div>
        <div className="flex-row justify-center px-8">
          <p className="text-white text-xl">
            Visual designer, frontend developer in progress, passionate for
            designing, 20 years of experience making corporative websites and
            making solutions on digital, content generator and social media
            manager.
          </p>
          <div className="">
          <a href="" target="_blank" rel="noreferrer">
            <div className="mt-10 h-10 flex items-center justify-center px-4 font-semibold rounded-full bg-topettegreen hover:bg-topettegreenhover text-black cursor-pointer"
              type="submit">
              <AiFillFilePdf className="text-1xl mr-2" /> Download CV</div>
          </a>
          </div>
        </div>
        <div className="flex-row px-8 block h-full">
          <Skills />
        </div>
      </div>
    </>
  );
};
