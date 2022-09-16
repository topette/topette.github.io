import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { useState, useEffect } from "react";
import React from "react";
import proyectosApi from "../api/proyectosApi";
import { IoIosArrowDown } from "react-icons/io";
import { Loader } from "../components/Loader";

export const Proyectos = () => {
  const [getProyectos, setGetProyectos] = useState([]);

  useEffect(() => {
    llamarApi();
  }, []);

  const llamarApi = async () => {
    try {
      const respuesta = await proyectosApi.get("/proyectos");
      setGetProyectos(respuesta.data);

    } catch (error) {
      console.log(error);
    }
  };

  if(!getProyectos.length){
    return (<div className="flex justify-center items-center mt-72"><Loader /></div>)
  }

  return (
    <>
    <div className="bg-menuheader2">
    <div className="container mx-auto">
      <div id="proyectos">
        <div className=" flex items-center justify-center p-4 pt-16">
          <div className="titulo">Projects</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4 place-items-center">
        {getProyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="md:flex md:items-center md:justify-center px-2 md:m-8 m-4 md:w-[85%]"
          >
            <div className="absolute hidden md:flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-white rounded-full left-1/2 sm:translate-y-0">
              <span className="text-white">
                <IoIosArrowDown />
              </span>
            </div>
            <div className="absolute hidden w-px h-[40%] transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
            <div className="md:flex font-sans bg-white rounded-md grid grid-flow-row">
              <div className="md:flex-none md:w-56 relative grid">
                <img
                  src={proyecto.imagen}
                  className="md:absolute md:inset-0 w-full md:w-full h-full md:object-cover rounded-md border-2"
                  loading="lazy"
                />
              </div>
              <div className="flex-auto py-6 md:px-12 px-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto font-medium text-slate-500">
                    {proyecto.pretitulo}
                  </h1>
                  <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-topettehover">
                    {proyecto.titulo}
                  </div>
                  <div className="text-sm font-medium text-slate-400">
                    {proyecto.desarrollo}
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-3 ">
                  {proyecto.descripcion}
                </p>
                <div className="flex-start items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex text-sm font-bold">
                    <div className="inline-block h-6 rounded-full items-center justify-center text-white mr-4 bg-gray-400 px-2">
                      {proyecto.etiquetas[0].tag1}
                    </div>

                    <div className="inline-block h-6 rounded-full items-center justify-center text-white mr-4 bg-gray-400 px-2">
                      {proyecto.etiquetas[0].tag2}
                    </div>

                    <div className="inline-block h-6 rounded-full items-center justify-center text-white mr-4 bg-gray-400 px-2">
                      {proyecto.etiquetas[0].tag3}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center space-x-4">
                  <a
                    href={`${proyecto.UrlGithub}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className="h-10 flex items-center px-4 font-semibold rounded-full bg-topettegreen hover:bg-topettegreenhover text-black cursor-pointer"
                      type="submit"
                    >
                      <AiFillGithub className="text-1xl mr-2" /> Github
                    </div>
                  </a>
                  <a
                    href={`${proyecto.UrlNetlify}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className="h-10 flex items-center px-2 font-semibold rounded-full border border-slate-200 hover:bg-slate-200 text-slate-900 cursor-pointer"
                      type="button"
                    >
                      <BiLinkExternal className="text-1xl mr-2" /> Live
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};
