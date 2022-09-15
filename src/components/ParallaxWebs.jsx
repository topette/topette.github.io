import web1 from "../assets/parallax2/web1.png";
import web2 from "../assets/parallax2/web2.png";
import web3 from "../assets/parallax2/web3.png";
import web4 from "../assets/parallax2/web4.png";
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10 + 140}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 160}px,${y / 8 - 200}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 + 50}px,${y / 6 - 180}px,0)`
const trans4 = (x, y) => `translate3d(${x / 5}px,${y / 2}px,0)`

export const ParallaxWebs = () => {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 250, friction: 50 } }))

  return (
    <>
    <div className=" h-96" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div style={{ transform: props.xy.to(trans1) }} ><img className="image2" src={web4} /></animated.div>
      <animated.div style={{ transform: props.xy.to(trans2) }} ><img className="image2" src={web3} /></animated.div>
      <animated.div style={{ transform: props.xy.to(trans3) }} ><img className="image2" src={web2} /></animated.div>
      <animated.div style={{ transform: props.xy.to(trans4) }} ><img className="image2" src={web1} /></animated.div>
    </div>
    </>
  );
};