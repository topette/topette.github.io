import React from "react";
import { Footer, BotonVolver, Header, Menu } from "./components";
import { Contacto } from "./pages/Contacto";
import { Estudios } from "./pages/Estudios";
import { Experiencia } from "./pages/Experiencia";
import { Proyectos } from "./pages/Proyectos";
import { Parallax } from "react-parallax";
import experienceImage from "./assets/bg/background3_02.jpg";


const insideStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const image1 =
  "https://firebasestorage.googleapis.com/v0/b/miportafolio-cd3e1.appspot.com/o/background_01.png?alt=media&token=325ee924-0c32-4031-ae2b-1cbb7a0df99d";
const image2 = "https://firebasestorage.googleapis.com/v0/b/miportafolio-cd3e1.appspot.com/o/background3_02.jpg?alt=media&token=c5165028-5582-42f7-826c-fb014a45739d"
const image3 =
  "https://firebasestorage.googleapis.com/v0/b/miportafolio-cd3e1.appspot.com/o/background_05.jpg?alt=media&token=d7a9a469-216a-4bfa-b703-e6f93660d126";
const image4 =
  "https://firebasestorage.googleapis.com/v0/b/miportafolio-cd3e1.appspot.com/o/background_04.jpg?alt=media&token=9b6f43f0-5d82-406d-bc7c-6fbf4183cf65";

export const LandingPage = () => {
  return (
    <>
      <Menu />
      
      <Parallax bgImage={image1} strength={200}>
        <Header />
      </Parallax>

        <Proyectos />

        <Parallax>
        <Estudios />
      </Parallax>

      <Parallax strength={200}>
        <Experiencia />
      </Parallax>

      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(60, 78, 121, ${percentage * 0.9})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <Contacto />
      </Parallax>

      <Footer />
      <BotonVolver />
    </>
  );
};
