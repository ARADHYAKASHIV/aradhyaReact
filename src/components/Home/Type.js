import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Web Designer',
          'MERN Developer',
          'Photographer',
          'Content Writer',
          'Student',
          'Learner',
          'Musician',
          'Programmer',
          'Coder',
          'Tech Geek',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
