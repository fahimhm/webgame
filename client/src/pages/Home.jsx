// import { FoxHeadIcon, QuestionMarkIcon } from "../assets/Icons"
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import propTypes from "prop-types";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Dock />
    </div>
  );
}

function Dock() {
  let mouseX = useMotionValue(Infinity);
  
  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mx-auto flex h-16 items-end gap-4 rounded-xl px-4 pb-3 bg-gray-700">
      {[...Array(6).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </div>
  );
};

function AppIcon({ mouseX }) {
  let ref = useRef(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x:0, width:0 };
    return val - bounds.x - bounds.width / 2;
  })
  let widthSync = useTransform(distance, [-200, 0, 200], [40, 70, 40]);
  let width = useSpring(widthSync, { damping: 15, stiffness: 200, mass: 0.1 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-500"
    />
  );
};

AppIcon.propTypes = {
  mouseX: propTypes.instanceOf(MotionValue).isRequired,
}