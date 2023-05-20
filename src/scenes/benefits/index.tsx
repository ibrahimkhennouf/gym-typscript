import HText from "@/shared/HText";
import { IBenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (val: SelectedPage) => void;
};

const benefits: Array<IBenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit praesentium deleniti fugit doloremque debitis nemo officia tenetur",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit praesentium deleniti fugit doloremque debitis nemo officia tenetur",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit praesentium deleniti fugit doloremque debitis nemo officia tenetur",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function Benefits({ setSelectedPage }: Props) {
  const handleClick = () => {
    setSelectedPage(SelectedPage.Benefits);
  };

  const handleGetBackToBenenits = () => {
    setSelectedPage(SelectedPage.Benefits);
  };

  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={handleGetBackToBenenits}>
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit
            praesentium deleniti fugit doloremque debitis nemo officia tenetur
            cum illum? Quasi dolores asperiores iusto vel consequuntur
            exercitationem officia quis amet.
          </p>
        </div>

        {/* BENEFITES */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit, idx: number) => {
            return (
              <Benefit
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
