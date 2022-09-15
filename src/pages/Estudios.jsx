import { useSpring, animated } from "react-spring";
import { BiMoviePlay } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10 + 40}px,0)`;

export const Estudios = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <>
      <div
        id="estudios"
        className="banner"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <div className="parallax">
          <animated.div
            className="layer layer1"
            style={{ transform: props.xy.to(trans1) }}
          ></animated.div>
          <animated.div
            className="layer layer2"
            style={{ transform: props.xy.to(trans2) }}
          ></animated.div>
        </div>
        <div className="text-container">
          <div className=" flex items-center justify-center">
            <div className="titulo">Education</div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-1 gap-4 pt-6">
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 border-2 w-4/5 rounded-lg p-4 place-items-center mb-6 shadow-md bg-topettefondo bg-opacity-60 backdrop-blur-md">
                <div className="grid grid-row -mx-3 mb-4 text-white">
                  <div className="py-4 border-b border-topettegreen">
                  <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div className="ml-16 mb-5">
                        <h4 className="text-2xl">
                          University and courses
                        </h4>
                      </div>
                    </div>
                    <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div>
                        <BiMoviePlay className="text-5xl text-topettegreen" />
                      </div>
                      <div>
                        <p>
                          Profesional en Dirección y producción de Radio y Tv
                        </p>
                        <p>10 semesters 2007 - 2019</p>
                        <p>Fundación Universitaria Latina - Unilatina</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div>
                        <BsPencilSquare className="text-5xl text-topettegreen" />
                      </div>
                      <div>
                        <p>Tecnólogo en Diseño Visual</p>
                        <p>8 semesters 2002 - 2006</p>
                        <p>Fundación Universitaria Panamericana</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div>
                        <IoMegaphoneOutline className="text-5xl text-topettegreen" />
                      </div>
                      <div>
                        <p>Diplomado en Marketing Digital</p>
                        <p>2019</p>
                        <p>Fundación Universitaria Latina - Unilatina</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div>
                        <IoMegaphoneOutline className="text-5xl text-topettegreen" />
                      </div>
                      <div>
                        <p>Diplomado en Desarrollo Frontend con React JS</p>
                        <p>2022</p>
                        <p>Fundación Internacional María Luisa de Moreno</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-row -mx-3 mb-4 text-white">
                  <div className="py-4 border-b border-topettegreen">
                  <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div className="ml-11 mb-5">
                        <h4 className="text-2xl">
                        Workshops
                        </h4>
                      </div>
                    </div>
                    <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div>
                        <BiMoviePlay className="text-3xl text-topettegreen" />
                      </div>
                      <div>
                        <p>
                        Curso HTML5 Cymetria Training
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div>
                        <IoMegaphoneOutline className="text-3xl text-topettegreen" />
                      </div>
                      <div>
                        <p>Curso de Programación Básica Platzi</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div class="grid grid-flow-col auto-cols-max gap-4">
                      <div>
                        <FaReact className="text-3xl text-topettegreen" />
                      </div>
                      <div>
                        <p>Javascript Moderno - Udemy</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-11 mb-5 mt-5">
                        <h4 className="text-2xl">
                        Languages
                        </h4>
                      </div>
                      <div className="py-4 border-b border-topettegreen">
                    <div class="grid grid-cols-2 auto-cols-max gap-4">
                      <div className="flex gap-2">
                        
                        <p className="">English</p>
                      </div>
                      <div className="flex gap-2">
                        <FaReact className="text-3xl text-topettegreen" />
                        <p className="">日本語</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
