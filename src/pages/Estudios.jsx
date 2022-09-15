import { useSpring, animated } from "react-spring";
import { BiMoviePlay } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import English from "../assets/united-states.png";
import Spanish from "../assets/spain.png";

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
        className="banner "
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
        <div className="text-container container mx-auto">
          <div className="flex items-center justify-center py-6">
            <div className="titulo">Education</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-6">
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 border-[1px] border-indigo-100 border-opacity-50 w-10/12 md:w-full rounded-lg p-4 place-items-center mb-6 shadow-md bg-topettefondo bg-opacity-60 backdrop-blur-md">
                <div className="grid grid-row mb-4 text-white">
                  <div className="py-4 px-2 border-b border-topettegreen">
                    <div className="grid grid-flow-col gap-4">
                      <div className="ml-16 mb-5">
                        <h4 className="text-3xl">University and courses</h4>
                      </div>
                    </div>
                    <div className="flex flex-flow-col auto-cols-auto gap-4">
                      <div>
                        <BiMoviePlay className="text-5xl text-topettegreen" />
                      </div>
                      <div className="text-lg">
                        <p>
                          Profesional en Dirección y producción de Radio y Tv
                        </p>
                        <p>10 semesters 2007 - 2019</p>
                        <p>Fundación Universitaria Latina - Unilatina</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 px-2 border-b border-topettegreen">
                    <div className="flex flex-flow-col auto-cols-auto gap-4">
                      <div className="">
                        <BsPencilSquare className="text-5xl text-topettegreen" />
                      </div>
                      <div className="text-lg">
                        <p>Tecnólogo en Diseño Visual</p>
                        <p>8 semesters 2002 - 2006</p>
                        <p>Fundación Universitaria Panamericana</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 px-2 border-b border-topettegreen">
                    <div className="flex flex-flow-col auto-cols-auto gap-4">
                      <div>
                        <IoMegaphoneOutline className="text-5xl text-topettegreen" />
                      </div>
                      <div className="text-lg">
                        <p>Diplomado en Marketing Digital</p>
                        <p>2019</p>
                        <p>Fundación Universitaria Latina - Unilatina</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 px-2 border-b border-topettegreen">
                    <div className="flex flex-flow-col auto-cols-auto gap-4">
                      <div>
                        <IoMegaphoneOutline className="text-5xl text-topettegreen" />
                      </div>
                      <div className="text-lg">
                        <p>Diplomado en Desarrollo Frontend con React JS</p>
                        <p>2022</p>
                        <p>Fundación Internacional María Luisa de Moreno</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-row mb-4 text-white">
                  <div className="py-4 border-b border-topettegreen">
                    <div className="grid grid-flow-col auto-cols-max gap-4">
                      <div className="ml-11 mb-5">
                        <h4 className="text-3xl">Workshops</h4>
                      </div>
                    </div>
                    <div className="flex flex-flow-col auto-cols-auto gap-4">
                      <div>
                        <BiMoviePlay className="text-3xl text-topettegreen" />
                      </div>
                      <div className="text-lg">
                        <p>Curso HTML5 Cymetria Training</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div className="flex flex-flow-col auto-cols-auto gap-4">
                      <div>
                        <IoMegaphoneOutline className="text-3xl text-topettegreen" />
                      </div>
                      <div className="text-lg">
                        <p>Curso de Programación Básica Platzi</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div className="flex flex-flow-col auto-cols-auto gap-4">
                      <div>
                        <FaReact className="text-3xl text-topettegreen" />
                      </div>
                      <div className="text-lg">
                        <p>Javascript Moderno - Udemy</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-11 mb-5 mt-5">
                    <h4 className="text-3xl">Languages</h4>
                  </div>
                  <div className="py-4 border-b border-topettegreen">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex gap-2">
                      <img className="w-6 h-6" src={English} />
                        <p className="text-lg ml-4">English</p>
                      </div>
                      <div className="flex gap-2">
                      <img className="w-6 h-6" src={Spanish} />
                        <p className="text-lg ml-4">Spanish</p>
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
