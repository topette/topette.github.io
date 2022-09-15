import { HeaderImage2 } from "./HeaderImage2";
import { ParticlesBackground } from "./ParticlesBackground";

export const Header = () => {
  return (
    <>
      <ParticlesBackground />
      <div
        id="header"
        className="md:mx-20 mx-8 grid grid-cols-1 md:grid-cols-2 md:pt-10 pt-4 pb-8 lg:mb-8"
      >
        <div className="basis-1/2">
          <div className="menuheader">Visual Design</div>
          <div className="menuheader2">Frontend development</div>
          <div className="menuheader">Audio & video</div>
          <div className="menuheader2">Social media</div>
        </div>
        <div className="basis-1/2 h-96">
          <HeaderImage2 />
        </div>
      </div>
    </>
  );
};
