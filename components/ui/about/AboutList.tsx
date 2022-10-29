import React from "react";
import AboutItem from "./AboutItem";

interface Props {
  developers: [
    {
      name: String;
      position: String;
      profileImg: String;
      socialMedia: [
        {
          name: String;
          path: String;
        }
      ];
    }
  ];
}

export default function AboutList({ developers }: Props) {
  return (
    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-5 md:gap-3 lg:gap-4">
      {developers.map((developer: any, index: number) => (
        <AboutItem key={index} {...developer} />
      ))}
    </div>
  );
}
