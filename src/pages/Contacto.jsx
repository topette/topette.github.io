import { useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export const Contacto = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xxipspj', 'template_uc2c3aw', form.current, 'PT_OjDyk-9kZssZGk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      mostrarAlerta()
  };

  const mostrarAlerta = () => {
    Swal.fire(
      'He recibido tu mensaje',
      'Estaremos en contacto',
      'success',
    )
  }
  
  return (
    <>
      <div
        id="contacto"
        className=" flex items-center justify-center pt-16"
      >
        <div className="titulo">Contact</div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className=" grid grid-cols-1 md:grid-cols-1 gap-4 pt-6 container mx-auto">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 border-[1px] border-indigo-100 border-opacity-50 w-4/5 rounded-lg p-6 place-items-center mb-6 shadow-md bg-topettefondo bg-opacity-80">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3 mb-4 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2 "
                    htmlFor="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow-md appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    className="shadow-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mx-4 mb-6 w-full">
                <div className="w-full md:px-6">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow-md no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-36 resize-none"
                    name="message"
                    placeholder="Write your message"
                    required
                  ></textarea>
                  <div className="md:flex md:items-center grid-flow-row">
                    <button
                      className="shadow w-full text-black bg-topettegreen hover:bg-topettegreenhover focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
