import Link from "next/link";
import { Link as Liink } from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-2 bg-[#010001]  text-white">
        <div className="m-5 xl:flex xl:justify-around xl:px-16 md:px-12">
          <h1 className="text-lg md:text-2xl">BreakingBad</h1>
          <h1 className="flex text-xs md:text-sm items-center text-gray-600">
            © Breaking Bad App, All rights reserved.
          </h1>
        </div>

        <div className="xl:flex xl:justify-around my-5 md:m-5 px-12">
          <div className="flex justify-center">
            <Liink to="home" spy={true} smooth={true} duration={500}>
              ↑ To top
            </Liink>
          </div>
          <div className="flex space-x-4 justify-center m-1 md:m-0">
            <Link href="mailto:hemanthnvd@gmail.com">
              <a target="_blank">
                <i className="bi bi-envelope"></i>
              </a>
            </Link>
            <Link href="https://github.com/hemanthnvd">
              <a target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </Link>
            <Link href="https://www.instagram.com/hemanthnvd/">
              <a target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/hemanthnvd/">
              <a target="_blank">
                <i className="bi bi-linkedin"></i>
              </a>
            </Link>
            <Link href="https://twitter.com/hemanthnvd">
              <a target="_blank">
                <i className="bi bi-twitter"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
