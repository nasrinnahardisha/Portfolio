import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Services.css";

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="relative w-full max-w-screen-xl lg:py-4">
          <main className="relative h-full bg-gradient-to-tr from-omega-900 via-omega-900 to-omega-800">
            <div className="flex h-full w-full flex-col content-center items-center pb-20 lg:py-4 xl:py-8">
              <div className="mx-auto my-auto p-6 lg:p-12">
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="col-span-full lg:col-span-1 row-span-2">
                      <div
                        className="md:transition-all services-card md:duration-1000 prose prose-invert"
                        style={{ transitionDelay: "200ms" }}
                      >
                        <div className="-mx-3 -mt-3 md:m-0">
                          <div className="bg-gradient-to-b from-omega-800 to-omega-800 px-3 pt-3 pb-0  md:bg-none md:p-0">
                            <h3>Services</h3>
                            <h3>
                              <em>My Expertise</em>
                            </h3>
                          </div>
                          <div className="h-px w-full bg-gradient-to-r from-accent via-beta to-alpha md:bg-none"></div>
                        </div>
                        <h6>Frontend Skills</h6>
                        <p>
                          I specialize in building modern, responsive web
                          interfaces using React.js and Tailwind CSS. I focus on
                          clean, scalable code and pixel-perfect design.
                        </p>
                        <h6> React.js</h6>
                        <ul>
                          <li>Reusable and Modular Components</li>
                          <li>Single Page Application (SPA) Development</li>
                          <li>State Management and API Integration</li>
                        </ul>
                        <h6> Tailwind CSS</h6>
                        <ul>
                          <li>Utility-First Responsive Styling</li>
                          <li>Custom Component Design</li>
                          <li>Mobile-Optimized Layouts</li>
                        </ul>
                        <div className="my-6 md:my-12"></div>
                      </div>
                    </div>
                  
                      <div className="md:transition-all services-card md:duration-1000 prose bg-white">
                        <div className="align-center flex flex-col bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8 ">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="28"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 mb-6 h-12 w-12 fill-accent"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path>
                          </svg>
                          <h4 className="relative z-10 m-0">
                            Modern UI & Frontend Solutions
                          </h4>
                        </div>
                        <div className="p-8 pt-3 services-text">
                          <small>
                            <p>
                              I craft clean, responsive, and accessible user
                              interfaces using modern tools like React.js and
                              Tailwind CSS.
                            </p>
                            <ul>
                              <li>
                                <strong>Responsive Interface Design</strong>
                              </li>
                              <li>
                                <strong>Reusable React Components</strong>
                              </li>
                              <li>
                                <strong>Optimized Frontend Development</strong>
                              </li>
                            </ul>
                          </small>
                        </div>
                      </div>
                      <div
                        className="md:transition-all md:duration-1000 services-card prose bg-white"
                        style={{ transitionDelay: "100ms" }}
                      >
                        <div className="align-center flex flex-col bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 mb-6 h-12 w-12 fill-accent"
                            width="28"
                          >
                            <title>Prisma</title>
                            <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"></path>
                          </svg>
                          <h4 className="relative z-10 m-0">
                            Project Strategy &amp; Development
                          </h4>
                        </div>
                        <div className="p-8 pt-3  services-text">
                          <small>
                            <p>
                              I plan and develop projects with a clear focus on
                              goals, user experience, and technical efficiency.
                            </p>
                            <ul>
                              <li>
                                <strong>Requirement Analysis & Planning</strong>
                              </li>
                              <li>
                                <strong>UI/UX Workflow Design</strong>
                              </li>
                              <li>
                                <strong>
                                  Frontend Architecture & Development
                                </strong>
                              </li>
                            </ul>
                          </small>
                        </div>
                      </div>
                      <div className="md:transition-all services-card md:duration-1000 prose bg-white">
                        <div className="align-center flex flex-col bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="28"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 mb-6 h-12 w-12 fill-accent"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"></path>
                          </svg>
                          <h4 className="relative z-10 m-0">
                            Figma to Code Implementation
                          </h4>
                        </div>
                        <div className="p-8 pt-3  services-text">
                          <small>
                            <p>
                              I convert Figma designs into pixel-perfect, fully
                              responsive websites using modern tools like
                              React.js and Tailwind CSS.
                            </p>
                            <ul>
                              <li>
                                <strong>Pixel-Perfect Figma to Code</strong>
                              </li>
                              <li>
                                <strong>Responsive & Clean Layouts</strong>
                              </li>
                              <li>
                                <strong>Tailwind + React Integration</strong>
                              </li>
                            </ul>
                          </small>
                        </div>
                      </div>
                      <div
                        className="md:transition-all md:duration-1000 prose bg-white"
                        style={{ transitionDelay: "100ms" }}
                      >
                        <div className="align-center flex flex-col bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="28"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 mb-6 h-12 w-12 fill-accent"
                          >
                            <path d="M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z"></path>
                          </svg>
                          <h4 className="relative z-10 m-0">
                            Application Audit &amp; Debugging
                          </h4>
                        </div>
                        <div className="p-8 pt-3  services-text">
                          <small>
                            <p>
                              I specialize in identifying issues within frontend
                              applications—ranging from performance lags to UI
                              bugs.
                            </p>
                            <ul>
                              <li>
                                <strong>Performance </strong>
                              </li>
                              <li>
                                <strong>React Component Debugging</strong>
                              </li>
                              <li>
                                <strong>Code Cleanup & Optimization</strong>
                              </li>
                            </ul>
                          </small>
                        </div>
                      </div>
                  
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

export default Services;
