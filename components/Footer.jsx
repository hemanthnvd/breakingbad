import Link from "next/link";
import { Link as Liink} from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-2 bg-[#000101]  text-white">
        <div className="m-5 flex justify-around px-16">
          <h1 className="text-2xl">BreakingBad</h1>
          <h1 className="flex text-sm items-center text-gray-600">
            © Breaking Bad App, All rights reserved.
          </h1>
        </div>
        <div className="m-5 px-12">
          <div className="flex justify-around">
            <div className="flex space-x-4 justify-center">
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
            <Link href="/login">Login</Link>
            <Liink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              ↑ Back to Top
            </Liink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
