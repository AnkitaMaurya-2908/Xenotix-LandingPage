import { SiReact, SiNextdotjs, SiFirebase } from 'react-icons/si';
import { FaFigma,FaAws } from "react-icons/fa";
import { SiOpenai } from 'react-icons/si';


import LogoCard from '../util/LogoCard';


const LogoRow = () => {
  return (
    <div className="flex gap-4 justify-center mt-6 flex-wrap">
      <LogoCard className="-rotate-6"><SiNextdotjs /></LogoCard>
      <LogoCard className="-rotate-6"><FaFigma /></LogoCard>
      <LogoCard className="-rotate-6">< SiFirebase/></LogoCard>
      <LogoCard className="rotate-6">< SiReact/></LogoCard>
      <LogoCard className="rotate-6"><SiOpenai /></LogoCard>
      <LogoCard className="rotate-6"><FaAws /></LogoCard>
    </div>
  );

};

export default LogoRow;

