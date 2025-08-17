import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import dishaImg from "../../assets/nasrin.jpg";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.style.clipPath = "inset(0% 100% 0% 0%)";
      }
    }, 50);

    const sr = ScrollReveal();

    sr.reveal(".right-reveal", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 300,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="container">
        <div className="relative w-full max-w-screen-xl  pb-4">
          <div className="relative h-full">
            <div className="flex h-full w-full flex-col content-center items-center md:py-4">
              <div className="mx-auto my-auto p-6 md:p-10 lg:p-20 md:bg-[#262626]">
                <div className=" text-center md:flex md:text-left">
                  <div className="left-reveal relative inline-block shrink-0 md:order-2 md:-ml-40  overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={dishaImg}
                        alt="Disha"
                        className="w-full h-[300px]  md:w-[430px] lg:[500px] md:h-[718px] object-cover rounded-[10px]"
                      />
                      <div
                        ref={overlayRef}
                        className="absolute inset-0 bg-black/80 rounded-[10px]"
                        style={{
                          transition: "clip-path 1s ease-in-out",
                          clipPath: "inset(0% 0% 0% 0%)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="z-20 right-reveal mt-6 w-full md:m-0">
                    <div className="max-w-full md:max-w-[490px] md:transition-all md:duration-1000 lg:px-0">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl">
                        <em className="bg-gradient-to-r from-[#F47A2A] to-[#F5524E] bg-clip-text text-transparent not-italic">
                          Hello, I Am
                        </em>
                        <br />
                        <em className="em bg-gradient-to-r from-[#F47A2A] to-[#F5524E] bg-clip-text text-transparent not-italic">
                          Nasrin Nahar
                        </em>
                      </h1>

                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        <div className="m-0 inline-flex items-baseline relative">
                          <span className="typewriter overflow-hidden whitespace-nowrap pr-2">
                            Web developer
                          </span>
                          <div className="-translate-y-2 animate-blink select-none">
                            _
                          </div>
                        </div>
                      </h1>

                      <div className="my-6 md:my-12 "></div>
                      <div className="px-3 md:px-0 pb-3 md:pb-0">
                        <p className="text-base lg:text-lg">
                          I’m Nasrin Nahar — a frontend web developer skilled in
                          React.js and Tailwind CSS. I build clean, responsive,
                          and accessible user interfaces that offer seamless
                          user experiences. I’m passionate about creating
                          impactful digital solutions and always eager to learn
                          new things and take on exciting challenges.
                        </p>
                      </div>
                    </div>

                    <div className="md:bg-[#262629] md:transition-all md:duration-1000 prose prose-invert relative z-10 flex flex-wrap mt-3 md:mt-12 md:bg-gradient-omega-900 md:shadow-2xl gradient-top-border mx-4 sm:mx-6 md:mx-0">
                      <div className="h-px w-full bg-gradient-to-r from-accent via-beta to-alpha hidden md:block"></div>
                      <div className="flex flex-1 flex-col items-center justify-center px-1 py-4 md:flex-row md:justify-start md:px-3 md:py-6">
                        <h2 className="m-0 md:pr-4 text-[#3A7FF0] text-2xl md:text-3xl">
                          2+
                        </h2>
                        <div className="text-white text-sm md:text-base">
                          Years of experience
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center px-1 py-4 md:flex-row md:justify-start md:px-3 md:py-6">
                        <h2 className="m-0 md:pr-4 text-[#F43F5E] text-2xl md:text-3xl">
                          10+
                        </h2>
                        <div className="text-white text-sm md:text-base">
                          Projects Completed
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center px-1 py-4 md:flex-row md:justify-start md:px-3 md:py-6">
                        <h2 className="m-0 md:pr-4 text-[#F59E0B] text-2xl md:text-3xl">
                          3
                        </h2>
                        <div className="text-white text-sm md:text-base">
                          OpenSource Libraries
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-12 mb-6 px-4  md:px-0">
                      <a
                        className="relative inline-flex items-center justify-center leading-normal no-underline group cursor-pointer select-none focus:outline-none peer md:peer-even:ml-6"
                        href="/nasrin-nahar-cv.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="z-10 h-full w-full border-4 border-transparent group-active:border-alpha flex transform-gpu transition-transform not-prose font-mono py-4 px-8 sm:py-5 sm:px-10 text-base sm:text-lg hover:translate-x-2 hover:translate-y-2 bg-white text-black">
                          <span className="mx-auto">
                            <p>Download Resume</p>
                          </span>
                        </div>
                        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#F43F5E,#F59E0B)] top-2 left-2"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
