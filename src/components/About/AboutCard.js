import React from "react";
import { Card, CardContent } from "../ui/card";
import { ImPointRight } from "react-icons/im";
import FadeContent from "../Animations/FadeContent";
import AnimatedContent from "../Animations/AnimatedContent";

function AboutCard() {
  return (
    <FadeContent blur duration={1.2} delay={200}>
      <Card className="quote-card-view tw-bg-transparent tw-border-none tw-shadow-none">
        <CardContent className="tw-p-0">
          <blockquote className="blockquote tw-mb-0">
            <p style={{ textAlign: "justify" }} className="tw-text-white/90 tw-text-lg tw-leading-relaxed">
              Hi Everyone, I am <span className="purple tw-font-bold">Aradhya Kashiv </span>
              from <span className="purple tw-font-bold"> Jabalpur, India.</span>
              <br />
              <br />
              I am currently persuing bachelor's degree in Computer Science And Engineering.
              <br />
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="tw-mt-6 tw-space-y-3">
              <AnimatedContent delay={100} direction="horizontal" distance={30}>
                <li className="about-activity tw-flex tw-items-center tw-text-white/80">
                  <ImPointRight className="tw-text-[#c770f0] tw-mr-3" /> Photography
                </li>
              </AnimatedContent>
              <AnimatedContent delay={200} direction="horizontal" distance={30}>
                <li className="about-activity tw-flex tw-items-center tw-text-white/80">
                  <ImPointRight className="tw-text-[#c770f0] tw-mr-3" /> Playing Music
                </li>
              </AnimatedContent>
              <AnimatedContent delay={300} direction="horizontal" distance={30}>
                <li className="about-activity tw-flex tw-items-center tw-text-white/80">
                  <ImPointRight className="tw-text-[#c770f0] tw-mr-3" /> Content Writing
                </li>
              </AnimatedContent>
            </ul>
          </blockquote>
        </CardContent>
      </Card>
    </FadeContent>
  );
}

export default AboutCard;
