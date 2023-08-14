import React from "react";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className=" mx-auto min-h-full w-5/6 bg-gray-20 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <HText>More than just a gym</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            help you achieve your fitness goals.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
