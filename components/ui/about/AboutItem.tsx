import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const AboutItem = ({ developer }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${developer.profileImg})`,
      }}
      className={
        "h-96 rounded-md bg-cover bg-center flex items-end md:h-80 lg:h-96"
      }
    >
      <div className="p-4 w-full">
        <div className="text-white backdrop-blur-md px-4 py-5 border-2 rounded-md backdrop-brightness-75">
          <h2 className="text-2xl font-bold font-sans mb-2 md:text-lg lg:text-2xl">
            {developer.name}
          </h2>
          <p className="mb-3 text-lg md:text-base lg:text-lg">
            {developer.position}
          </p>
          <div className="flex gap-4 text-2xl text-white md:text-lg md:gap-3 lg:text-2xl">
            {developer.socialMedia.map((social: any, index: number) => (
              <a
                href={social.path}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                {social.name.toLowerCase() === "linkedin" && (
                  <FaLinkedin
                    className="hover:text-[#0A67C3] hover:bg-white rounded-sm"
                    title={`${developer.name}'s LinkedIn Profile`}
                  />
                )}
                {social.name.toLowerCase() === "instagram" && (
                  <FaInstagram
                    className="hover:text-[#EB4B51]"
                    title={`${developer.name}'s Instagram Profile`}
                  />
                )}
                {social.name.toLowerCase() === "github" && (
                  <FaGithub
                    className="hover:text-black hover:bg-white rounded-full"
                    title={`${developer.name}'s Github Profile`}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
