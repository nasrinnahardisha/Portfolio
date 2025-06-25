import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: "M946.5 505.1L560.5 193c-18.7-15.2-45.3-15.2-64 0L77.5 505.1c-10.6 8.6-12.2 24.2-3.7 34.8l21.3 26.1c8.6 10.6 24.2 12.2 34.8 3.7L512 262.6l382.1 306.9c10.6 8.6 26.2 6.9 34.8-3.7l21.3-26.1c8.5-10.6 6.9-26.2-3.7-34.8zM512 354.3 192 620v280c0 17.7 14.3 32 32 32h192V704h192v228h192c17.7 0 32-14.3 32-32V620L512 354.3z",
  },
  {
    to: "/about",
    label: "About",
    icon: "M511.728 64c108.672 0 223.92 91.534 223.92 159.854v159.92c0 61.552-25.6 179.312-94.256 233.376a63.99 63.99 0 0 0-23.968 57.809c2.624 22.16 16.592 41.312 36.848 50.625l278.496 132.064c2.176.992 26.688 5.104 26.688 39.344l.032 62.464L64 959.504V894.56c0-25.44 19.088-33.425 26.72-36.945l281.023-132.624c20.16-9.248 34.065-28.32 36.769-50.32 2.72-22-6.16-43.84-23.456-57.712-66.48-53.376-97.456-170.704-97.456-233.185v-159.92C287.615 157.007 404.016 64 511.728 64zm0-64.002c-141.312 0-288.127 117.938-288.127 223.857v159.92c0 69.872 31.888 211.248 121.392 283.088l-281.04 132.64S.001 827.999.001 863.471v96.032c0 35.344 28.64 63.968 63.951 63.968h895.552c35.344 0 63.968-28.624 63.968-63.968v-96.032c0-37.6-63.968-63.968-63.968-63.968L681.008 667.439c88.656-69.776 118.656-206.849 118.656-283.665v-159.92c0-105.92-146.64-223.855-287.936-223.855z",
  },
  {
    to: "/services",
    label: "Services",
    icon: "M960.016 191.472H704.415v-62c0-52.944-43.056-96-96-96H415.983c-52.944 0-96 43.056-96 96v62H64.015c-35.184 0-64 28.816-64 64v224.256h-.032v64h.032v382.816c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V255.472c0-35.184-28.816-64-64-64h.001zm-576.033-62c0-17.664 14.336-32 32-32h192.432c17.664 0 32 14.336 32 32v62H383.983zm-319.967 126h896v224.256H607.648v-32.752c0-35.28-28.72-64-64-64h-63.745c-35.28 0-64 28.72-64 64v32.752H64.017V255.472zm479.679 352.656h-63.809V446.976h63.745zm-479.68 318.4V543.712h351.872v64.4c0 35.281 28.72 64 64 64h63.744c35.28 0 64-28.719 64-64v-64.4h352.368v382.816H64.015z",
  },
  {
    to: "/portfolio",
    label: "Portfolio",
    icon: "M735.808 927.872H285.872c-17.68 0-32 14.32-32 32s14.32 32 32 32h449.936c17.68 0 32-14.32 32-32s-14.304-32-32-32zm281.502-806.24c-3.024-14.88-16.16-25.568-31.343-25.568H829.343V64.128c0-17.68-14.32-32-32-32H221.807c-17.68 0-32 14.32-32 32v31.936H38.031c-15.183 0-28.32 10.688-31.344 25.568-.944 4.624-22.4 116.752 39.904 193.152 35.84 43.92 90.607 66.928 162.495 68.976C250.078 504.912 353.15 594.624 477.278 608v222.912H381.5c-17.68 0-32 14.32-32 32s14.32 32 32 32H640.19c17.68 0 32-14.32 32-32s-14.32-32-32-32h-98.912v-222.88c124.336-13.12 227.632-102.8 268.736-224.08 74.336-1.088 130.736-24.24 167.393-69.168 62.304-76.416 40.848-188.528 39.904-193.152zM96.401 274.56c-28.336-34.496-31.184-85.41-29.744-114.497H189.81v108.032c0 17.296 1.6 34.16 3.936 50.769-43.68-4.08-76.447-18.832-97.344-44.304zm668.944-6.465c0 153.088-114.721 277.663-255.713 277.663-141.056 0-255.808-124.56-255.808-277.663V96.127H765.36v171.968h-.015zm162.255 6.463c-21.68 26.432-56.032 41.488-102.272 44.864 2.384-16.784 4.016-33.84 4.016-51.328V160.062h128c1.44 29.12-1.408 80-29.744 114.496z",
  },
  {
    to: "/contact",
    label: "Contact",
    icon: "M1023.46 232a31.629 31.629 0 0 0-2.48-18.271C1012.917 178.288 987.3 160 944.005 160h-832c-38.08 0-79.105 14-99.28 41.472-1.745 1.328-3.409 2.832-4.912 4.576-6.449 7.44-8.705 17.009-7.264 26.033-.288 2.592-.544 5.2-.544 7.92v512c0 53.024 58.992 112 112 112h832c53.024 0 80-58.976 80-112v-512c0-2.832-.368-5.313-.544-8.001zm-911.459-8l832.001-.001h.432L512.002 568.655 81.314 225.407C91.106 223.599 103.154 224 112 224zm832.001 575.999H112.003c-17.648 0-48-30.336-48-48V293.551l427.04 341.648c6.016 5.2 13.487 7.792 20.959 7.792a32.046 32.046 0 0 0 20.976-7.792l427.024-341.632v458.432c0 17.664 1.664 48-16 48z",
  },
];

const socialLinks = [
{
  to: "https://www.facebook.com/",
  title: "Facebook",
  icon: "M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 34.98v42.01h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z",
},
{
  to: "https://wa.me/8801722823551",
  title: "WhatsApp",
  icon: "M256.064 0C114.615 0 0 114.496 0 256c0 56.518 17.64 109.009 47.897 152.389L32 480l74.355-15.531C151.029 488.354 201.904 512 256 512c141.385 0 256-114.615 256-256S397.385 0 256.064 0zm0 472.727c-47.216 0-91.139-14.487-127.521-39.312l-8.808-5.991-44.704 9.372 9.297-43.55-6.04-9.008C56.614 345.2 40.727 302.011 40.727 256c0-118.73 96.608-215.273 215.337-215.273S471.273 137.27 471.273 256c0 118.729-96.608 216.727-215.209 216.727zm119.982-159.755c-6.52-3.262-38.52-19.02-44.498-21.152-5.978-2.13-10.347-3.196-14.715 3.263-4.367 6.457-16.89 21.151-20.7 25.518-3.811 4.367-7.627 4.912-14.146 1.631-38.52-19.26-63.963-34.301-89.084-77.744-6.729-11.632 6.728-10.777 19.262-35.695 2.125-4.381 1.071-8.182-.53-11.444-1.602-3.263-14.713-35.377-20.155-48.427-5.441-13.05-11.055-11.247-14.714-11.429-3.812-.179-8.186-.215-12.561-.215-4.37 0-11.443 1.631-17.459 8.182-6.016 6.548-23.042 22.72-23.042 55.429 0 32.709 23.583 64.363 26.871 68.841 3.263 4.478 46.379 70.759 112.703 99.091 66.328 28.331 66.328 18.887 78.422 17.759 12.093-1.131 38.52-15.629 43.993-30.734 5.478-15.105 5.478-28.066 3.812-30.732-1.674-2.669-6.064-4.378-12.587-7.641z"
}
,


  // {
  //   to: "https://www.linkedin.com/",
  //   title: "LinkedIn",
  //   icon: "M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z",
  // },

  {
  to: "https://github.com/nasrinnahardisha",
  title: "GitHub",
  icon: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-32.4-3.2c-.7 2.1 1.5 4.3 4.9 4.9 3.4.6 6.8-.5 7.5-2.6.7-2.1-1.5-4.3-4.9-4.9-3.4-.6-6.8.5-7.5 2.6zm44.2-1.7c-2.9.8-4.8 3.1-4.3 5.2.5 2.1 3.1 3.1 6 .9 2.9-.8 4.8-3.1 4.3-5.2-.5-2.1-3.1-3.1-6-.9zm23.7 1.1c-2.9.8-4.8 3.1-4.3 5.2.5 2.1 3.1 3.1 6 .9 2.9-.8 4.8-3.1 4.3-5.2-.5-2.1-3.1-3.1-6-.9zm30.1-5.5c-1.6 2.7.4 6.2 4.3 7.8 3.9 1.6 8.2.6 9.8-2.1 1.6-2.7-.4-6.2-4.3-7.8-3.9-1.6-8.2-.6-9.8 2.1zM256 32C132.3 32 32 132.3 32 256c0 99.1 64.2 183.1 153.3 212.7 11.2 2.1 15.3-4.9 15.3-10.8 0-5.3-.2-19.3-.3-37.9-62.4 13.6-75.6-30.1-75.6-30.1-10.2-25.9-24.9-32.8-24.9-32.8-20.4-14 .2-13.7 1.4-13.7 22.6 1.6 34.5 23.3 34.5 23.3 20.1 34.4 52.6 24.5 65.4 18.7 2-14.6 7.9-24.5 14.3-30.1-49.8-5.7-102.3-24.9-102.3-110.9 0-24.5 8.8-44.6 23.3-60.3-2.3-5.7-10.1-28.6 2.2-59.6 0 0 19-6.1 62.3 23.1 18-5 37.3-7.5 56.5-7.6 19.1.1 38.5 2.6 56.5 7.6 43.3-29.2 62.2-23.1 62.2-23.1 12.4 31 4.6 53.9 2.2 59.6 14.5 15.7 23.3 35.8 23.3 60.3 0 86.2-52.6 105.1-102.6 110.7 8.1 7 15.3 20.9 15.3 42.1 0 30.4-.3 54.9-.3 62.4 0 6 4 13 15.4 10.8C415.8 439.1 480 355.1 480 256 480 132.3 379.7 32 256 32z"
}

];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
      <div className="fixed top-0 left-0 z-10 block w-full animate-fade-in bg-black/90 md:hidden h-0" />

      <nav className="bg-gradient-omega-900 shrink-0 flex-col items-center justify-between md:flex fixed left-0 top-full z-40 w-full md:w-16 md:sticky md:top-26 md:h-[calc(100vh-theme(space.40))] transition-transform md:translate-y-0 -translate-y-16">
        <div className="grid w-full grid-cols-4 bg-gradient-to-b from-transparent to-omega-800 md:block">
          {navLinks.map(({ to, label, icon }, index) => (
            <Link
              key={to}
              to={to}
              className={`h-16 md:h-auto relative z-20 flex flex-col items-center justify-center md:py-4 transition-all duration-300 group ${
                location.pathname === to
                  ? "bg-gradient-to-tr from-beta to-alpha text-black"
                  : "bg-gradient-to-tr from-omega-900 text-white md:hover:from-accent-700 md:hover:to-accent"
              }`}
              aria-label={label}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="absolute left-full top-0 h-full min-w-max px-4 hidden items-center bg-accent text-sm font-medium text-white md:flex invisible translate-x-10 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                {label}
              </div>

              {location.pathname === to && (
                <div className="absolute bottom-2 right-2 hidden h-4 w-4 text-center font-mono text-xs font-bold md:block">
                  {index + 1}
                </div>
              )}

              <span className="absolute top-0 left-0 hidden h-full w-1 bg-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:block" />

              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="relative z-20 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={icon}></path>
              </svg>

              <span className="mt-1 text-center text-xs md:hidden">
                {label}
              </span>
            </Link>
          ))}

          {/* ছোট ডিভাইসে ৩ ডট বাটন */}
          <div className="row-start-1 flex h-16 items-center md:hidden bg-omega-900 col-start-4">
            <button
              className="mx-auto block text-7xl text-omega-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="animate-grow-in"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="flex w-full flex-wrap md:block md:bg-zinc-800">
          {socialLinks.map(({ to, title, icon }) => (
            <Link
              key={to}
              to={to}
              className="group block flex-1 text-center"
              rel="noopener noreferrer"
              target="_blank"
              title={title}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="mx-auto h-12 w-6 text-white md:group-hover:text-alpha"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={icon}></path>
              </svg>
            </Link>
          ))}
        </div>
      </nav>

      {/* ছোট স্ক্রিনে overlay মেনু */}
      {isMenuOpen && (

        <div className="fixed  inset-0  bg-black/90 flex flex-col justify-end text-white md:hidden z-40">
          {/* Close button */}
          <div className="flex justify-center py-2">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          
          {/* Menu items in two rows */}
          <div className="grid grid-cols-5 gap-1 px-2 pb-2">
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                className={`h-16 flex flex-col items-center justify-center transition-all duration-300 ${
                  location.pathname === to
                    ? "bg-gradient-to-tr from-beta to-alpha text-black"
                    : "bg-omega-900 text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-6 h-6" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d={icon} />
                </svg>
                <span className="text-xs mt-1">{label}</span>
              </Link>
            ))}
          </div>
          
          {/* Social icons in second row */}
          <div className="grid grid-cols-4 gap-1 px-2 pb-2">
            {socialLinks.slice(0, 4).map(({ to, title, icon }) => (
              <Link
                key={to}
                to={to}
                className="h-16 bg-omega-900 flex flex-col items-center justify-center"
                rel="noopener noreferrer"
                target="_blank"
                title={title}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d={icon} />
                </svg>
                <span className="text-xs mt-1">{title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;