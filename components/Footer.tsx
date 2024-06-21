import { FaLocationArrow } from "react-icons/fa6";

import { myEmailAddress, socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] mt-20 md:mb-5" id="contact">
      {/* background grid */}
      {/*<div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 lg:max-h-[85vh]"
        />
      </div>
      */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Want to <span className="text-purple">connect</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-2 text-center max-w-lg">
          Feel free to reach out via email or connect with me on LinkedIn. I
          look forward to hearing from you!
        </p>
        <a href={`mailto:${myEmailAddress}`} className="mb-7">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-5 md:mb-0 text-gray-500">
          Copyright © 2024 Daniel Chan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.href}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
