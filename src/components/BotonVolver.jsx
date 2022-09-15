import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link } from 'react-scroll'

export const BotonVolver = () => {
  return (
    <>
    <footer>
    <Link spy={true} smooth={true} offset={-110} duration={500} to={"header"}>
    <BsFillArrowUpSquareFill className="cursor-pointer fixed bottom-8 right-8 text-4xl text-topettegreen bg-topettefondo rounded-md hover:text-lime-400 hover:bottom-10 duration-300"/>
    </Link>
    </footer>
    </>
  )
}
