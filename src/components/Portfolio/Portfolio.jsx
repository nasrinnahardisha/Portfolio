import Navbar from "../Navbar/Navbar";
import portImg1 from "../../assets/project-1.jpg";
import portImg2 from "../../assets/project-2.jpg";
import portImg3 from "../../assets/project-3.jpg";
import portImg4 from "../../assets/project-4.jpg";
import portImg5 from "../../assets/project-5.jpg";
import portImg6 from "../../assets/project-6.jpg";
import portImg7 from "../../assets/project-7.jpg";
import portImg8 from "../../assets/project-7.jpg";
import portImg9 from "../../assets/project-9.jpg";
import { useEffect } from "react";

const projects = [
  {
    img: portImg1,
    link: "https://nasrinnahardisha.github.io/rrf-template-11/?fbclid=IwY2xjawKr5BlleHRuA2FlbQIxMABicmlkETFIMkZuSTJQOGZlcnQ2TkdCAR59-z7wcM_2iQHr3Cyip-2lWhdQmd_uCBXSdzcUQ72qOthuj4wf6YCUPO3w7w_aem_uzZ_nTmuEIMpvTRDSPdybA",
    title: "Lesson",
    description:
      "Designed with HTML & CSS. Built fully responsive and pixel-perfect layout for all screen sizes.",
  },
  {
    img: portImg2,
    link: "https://nasrinnahardisha.github.io/portfolio-Website-7/#",
    title: "Portfolio",
    description:
      "Designed with HTML & CSS. Built fully responsive and pixel-perfect layout for all screen sizes.",
  },
  {
    img: portImg3,
    link: "https://nasrinnahardisha.github.io/rrf-template-1/src/index.html?fbclid=IwY2xjawK7tVBleHRuA2FlbQIxMABicmlkETEwN1dIUnk1Z0hVaVpReEpnAR6hRbf9l7p3PZXcp9D_ixEA40dDadyIgQQpn3GVyOL04HSs_SooMQvS7LV55w_aem_vGV_HyaAOeh4ZLdAEe4Hog",
    title: "My_Tutor",
    description:
      "Designed with Tailwind CSS. Built fully responsive and pixel-perfect layout for all screen sizes.",
  },
  {
    img: portImg4,
    link: "https://nasrinnahardisha.github.io/rrf-exam-1/src/",
    title: "Portfolio",
    description:
      "Designed with Tailwind CSS. Built fully responsive and pixel-perfect layout for all screen sizes.",
  },
  {
    img: portImg5,
    link: "https://nasrinnahardisha.github.io/Landing_Page/",
    title: "landing Page",
    description:
        "Designed with HTML & CSS. Built fully responsive and pixel-perfect layout for all screen sizes.",
  },
  {
    img: portImg6,
    link: "https://nasrinnahardisha.github.io/techure/src/",
    title: "Techure",
    description:
        "Designed with Tailwind CSS. Built fully responsive and pixel-perfect layout for all screen sizes.",
  },
  {
    img: portImg7,
    link: "https://nasrinnahardisha.github.io/techure__2/src/",
    title: "Techure_2",
    description:
        "Designed with Tailwind CSS. Built fully responsive and pixel-perfect layout for all screen sizes.",
  },
  {
    img: portImg8,
    link: "https://techure2.free.nf/",
    title: "Techure_2",
    description:
        "Custom WordPress theme developed with Tailwind CSS, fully responsive and optimized for all screen sizes.",
  },
  {
    img: portImg9,
    link: "https://dev-smoke-n-wings-dev.pantheonsite.io/",
    title: "Smoke-N-Wings",
    description:
        "Custom WordPress theme developed with Tailwind CSS, fully responsive and optimized for all screen sizes.",
  },
];

const Portfolio = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="relative w-full max-w-screen-xl md:py-4">
          <main className="relative h-full bg-gradient-to-tr from-omega-900 via-omega-900 to-omega-800">
            <div className="flex h-full w-full flex-col content-center items-center pb-20 lg:py-4 xl:py-8">
              <div className="mx-auto p-6 md:p-6 lg:p-12">
                <div className="prose prose-headings:mb-4 dark:prose-invert">
                  <div className="-mx-3 -mt-3 md:m-0">
                    <div className="bg-gradient-to-b from-omega-800 to-omega-800 px-3 pt-3 pb-0 md:bg-none md:mb-[.6rem] mb-0 md:p-0">
                      <h3>My Open-Source Projects</h3>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-accent via-beta to-alpha md:bg-none"></div>
                  </div>
                  <p>
                    Discover my most popular open-source projects on Github.
                  </p>
                  <div className="mt-4 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-12 gap-4">
                    {projects.map((project, i) => (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={i}
                        className="relative overflow-hidden rounded-[10px]  w-full group block"
                      >
                        <img
                          src={project.img}
                          alt={`Project ${i + 1}`}
                          className="w-full h-[400px] rounded-[10px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-[#ff004f] via-black/60 to-transparent rounded-[10px] flex flex-col items-center justify-center text-center px-6 transition-all duration-500 overflow-hidden">
                          <h3 className="text-white font-medium text-xl mb-4">
                            {project.title}
                          </h3>
                          <p className="text-white text-sm">
                            {project.description}
                          </p>
                          <span className="w-10 h-10 mt-5 flex items-center justify-center rounded-full border-2 border-white text-[#f43f5e] bg-white hover:scale-110 transition-transform">
                            <i className="bx bx-edit-alt text-[18px]"></i>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
