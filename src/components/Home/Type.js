import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
        'Photographer',
        'Video Editor',
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
