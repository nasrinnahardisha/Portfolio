import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="relative w-full max-w-screen-xl lg:py-4">
          <main className="relative h-full bg-gradient-to-tr from-omega-900 via-omega-900 to-omega-800">
            <div className="flex h-full w-full flex-col content-center items-center pb-20 lg:py-4 xl:py-8">
              <div className="my-auto p-3 md:p-6 lg:p-12">
                <div className="prose prose-invert items-start lg:flex">
                  <div className="md:transition-all md:duration-1000 prose prose-invert basis-1/3 lg:mr-14">
                    <div className="-mx-3 -mt-3 md:m-0">
                      <div className="bg-gradient-to-b from-omega-800 to-omega-800 px-3 pt-3 pb-0 md:bg-none md:p-0">
                        <h3>Get in touch</h3>
                        <h3>
                          <em>Let's talk about your project</em>
                        </h3>
                      </div>
                      <div className="h-px w-full bg-gradient-to-r from-accent via-beta to-alpha md:bg-none"></div>
                    </div>
                    <p>
                      Thinking about a new project, a problem to solve, or just
                      want to connect? Let's do it!
                    </p>
                    <p>
                      Use the form on this page or get in touch by other means.
                    </p>
                    <div className="my-6 md:my-12"></div>
                    <small>
                      <p>
                        <svg
                          class="mr-2 inline align-middle fill-current text-omega-500"
                          viewBox="0 0 24 24"
                          width="28"
                          fill="#25D366"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsUp:
                        <a
                          href="https://wa.me/8801722823551"
                          class="border-b border-alpha hover:border-b-2"
                          rel="nofollow"
                          target="_blank"
                        >
                          (+8801722823551)
                        </a>
                      </p>
                      <p>
                        <svg
                          class="mr-2 inline align-middle fill-current text-omega-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="28"
                        >
                          <title>Mail</title>
                          <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"></path>
                        </svg>
                        Email:
                        <a
                          href="mailto:hello@carl.io"
                          class="border-b border-alpha hover:border-b-2"
                          rel="nofollow"
                          target="_blank"
                        >
                          nasrinnahardisha@gmail.com
                        </a>
                      </p>
                      <p>
                        <svg
                          class="mr-2 inline align-middle fill-current text-omega-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="28"
                        >
                          <title>Logo Linkedin</title>
                          <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                        </svg>
                        Linkedin:
                        <a
                          href="http://linkedin.com/vercel"
                          class="border-b border-alpha hover:border-b-2"
                          rel="nofollow"
                          target="_blank"
                        >
                          NasrinNahar
                        </a>
                      </p>
                      <p>
                        <svg
                          class="mr-2 inline align-middle fill-current text-omega-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="28"
                        >
                          <title>Logo Twitter</title>
                          <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                        </svg>
                        Twitter:
                        <a
                          href="http://twitter.com/vercel"
                          class="border-b border-alpha hover:border-b-2"
                          rel="nofollow"
                          target="_blank"
                        >
                          @NasrinNahar
                        </a>
                      </p>
                    </small>
                  </div>

                  <div className="md:transition-all md:duration-1000 md:with-back-plate max-w-3xl border border-omega-700 md:before:bg-omega-700">
                    <form onSubmit={handleSubmit}>
                      <div className="relative overflow-hidden shadow">
                        <div className="bg-gradient-omega-900">
                          <fieldset className="border-b border-dashed border-omega-700">
                            <div className="bg-omega-800 p-5">
                              <legend className="m-0 p-0">
                                Your contact information
                              </legend>
                            </div>
                            <div className="grid gap-2 p-5 md:grid-cols-3">
                              <div className="flex items-center">
                                <input
                                  type="text"
                                  name="first-name"
                                  autocomplete="given-name"
                                  className="block w-full border-0 py-3 px-4 border-b bg-omega-700/20  placeholder-omega-400 border-accent focus:ring-accent-500"
                                  placeholder="First name"
                                  required
                                />
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="text"
                                  name="last-name"
                                  autocomplete="family-name"
                                  className="block w-full border-0 py-3 px-4 border-b bg-omega-700/20  placeholder-omega-400 border-accent focus:ring-accent-500"
                                  placeholder="Last name"
                                  required
                                />
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="email"
                                  name="email"
                                  autocomplete="email"
                                  className="block w-full border-0 py-3 px-4 border-b bg-omega-700/20  placeholder-omega-400 border-accent focus:ring-accent-500"
                                  placeholder="Email address"
                                  required
                                />
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="text"
                                  name="company"
                                  autocomplete="company"
                                  className="block w-full border-0 py-3 px-4 border-b bg-omega-700/20  placeholder-omega-400 border-accent focus:ring-accent-500"
                                  placeholder="Company Name"
                                />
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="text"
                                  name="phone"
                                  autocomplete="phone"
                                  className="block w-full border-0 py-3 px-4 border-b bg-omega-700/20  placeholder-omega-400 border-accent focus:ring-accent-500"
                                  placeholder="Phone Number"
                                />
                              </div>
                              <div className="flex items-center">
                                <select
                                  id="country"
                                  name="country"
                                  autocomplete="country-name"
                                  className="block w-full border-0 py-3 px-4 border-b bg-omega-700/20  placeholder-omega-400 border-accent focus:ring-accent-500"
                                  type="select"
                                  options="[object Object],[object Object],[object Object],[object Object],[object Object]"
                                >
                                  <option
                                    className="text-black"
                                    value=""
                                    disabled=""
                                  >
                                    Select Country
                                  </option>
                                  <option
                                    className="text-black"
                                    value="United States"
                                  >
                                    United States
                                  </option>
                                  <option className="text-black" value="Canada">
                                    Canada
                                  </option>
                                  <option
                                    className="text-black"
                                    value="Germany"
                                  >
                                    Germany
                                  </option>
                                  <option className="text-black" value="France">
                                    France
                                  </option>
                                </select>
                              </div>
                            </div>
                          </fieldset>
                          <fieldset className="border-b border-dashed border-omega-700">
                            <div class="bg-omega-800 p-5">
                              <legend class="m-0 p-0">
                                What services do you need for your project?
                              </legend>
                            </div>
                            <div class="grid gap-2 p-5 md:grid-cols-3">
                              <div class="flex items-center">
                                <input
                                  name="project-type[Website Development]"
                                  type="checkbox"
                                  class="h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500"
                                  value=""
                                />
                                <label class="ml-3 block">
                                  Website Development
                                </label>
                              </div>
                              <div class="flex items-center">
                                <input
                                  name="project-type[App Development]"
                                  type="checkbox"
                                  class="h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500"
                                  value=""
                                />
                                <label class="ml-3 block">
                                  E-commerce Site
                                </label>
                              </div>
                              <div class="flex items-center">
                                <input
                                  name="project-type[App Development]"
                                  type="checkbox"
                                  class="h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500"
                                  value=""
                                />
                                <label class="ml-3 block">
                                  Landing Page Design
                                </label>
                              </div>
                              <div class="flex items-center">
                                <input
                                  name="project-type[App Development]"
                                  type="checkbox"
                                  class="h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500"
                                  value=""
                                />
                                <label class="ml-3 block">
                                  Responsive Design
                                </label>
                              </div>
                              <div class="flex items-center">
                                <input
                                  name="project-type[App Development]"
                                  type="checkbox"
                                  class="h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500"
                                  value=""
                                />
                                <label class="ml-3 block">
                                  React Development
                                </label>
                              </div>
                              <div class="flex items-center">
                                <input
                                  name="project-type[App Development]"
                                  type="checkbox"
                                  class="h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500"
                                  value=""
                                />
                                <label class="ml-3 block">Others</label>
                              </div>
                            </div>
                          </fieldset>
                          <fieldset className="border-b border-dashed border-omega-700">
                            <div class="bg-omega-800 p-5">
                              <legend class="m-0 p-0">
                                Tell me about your project
                              </legend>
                            </div>
                            <div class="grid gap-2 p-5">
                              <div class="flex items-center">
                                <textarea
                                  type="textarea"
                                  name="message"
                                  class="block w-full border-0 py-3 px-4 border-b bg-omega-700/20  placeholder-omega-400 border-accent focus:ring-accent-500"
                                  placeholder="Project description"
                                  rows="3"
                                ></textarea>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div className="bg-omega-900 px-4 pt-6 pb-8 text-left md:px-8">
                          <button
                            className="relative inline-flex items-center justify-center leading-normal no-underline group cursor-pointer select-none focus:outline-none peer md:peer-even:ml-6 w-full sm:w-1/3"
                            type="submit"
                          >
                            <div className="z-10 h-full w-full border-4 border-transparent group-active:border-alpha flex transform-gpu transition-transform not-prose font-mono py-3 px-6 text-sm hover:translate-x-2 hover:translate-y-2 bg-white text-black">
                              <span className="mx-auto">Submit</span>
                            </div>
                            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#F43F5E,#F59E0B)] top-2 left-2"></div>
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Contact;
