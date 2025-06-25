import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    Swal.fire({
      title: "Thank you!",
      text: "Redirecting to contact page...",
      icon: "success",
      confirmButtonText: "Go",
    }).then(() => {
      navigate("/contact"); // No reload, SPA style redirect
    });
  };

  return (
    <div>
      <div className="text-3xl h-[54px] bg-[#262626] z-[100] flex items-center justify-between px-5 py-2 leading-[54px] mb-px">
        <div>
          <Link
            className="font-sans inline-block text-[#ec0e90] h-[18px] font-semibold"
            to="/"
          >
            N.N.DISHA
          </Link>
        </div>

        <div className="">
          <button
            onClick={handleHireMeClick}
            className="h-full w-full border-4 border-transparent rounded-2xl group-active:border-alpha flex  transition-transform font-semibold py-1 px-6 text-lg  text-white  bg-[linear-gradient(to_right,#F43F5E,#F59E0B)] "
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
