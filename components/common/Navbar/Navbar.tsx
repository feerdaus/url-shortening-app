import { CloseIcon, Logo, MenuIcon } from "@components/icons";
import Link from "next/link";
import { useState } from "react";
import { Container } from "../../ui";

const Drawer = ({ setIsOpen }) => {
  return (
    <aside className="absolute w-full j-btw z-50 md:hidden px-4 bg-white">
      <div className="w-full ">
        <div className="w-full a-center-j-btw py-14">
          <Link href="/">
            <a className="pr-4">
              <Logo />
            </a>
          </Link>
          <div
            onClick={() => setIsOpen(false)}
            arial-label="Close mobile menu"
            className="md:hidden cursor-pointer text-grey p-2"
          >
            <CloseIcon />
          </div>
        </div>
        <div className="mx-auto text-center rounded-2xl text-white font-semibold bg-dark-blue py-14 px-4">
          <Link href="/">
            <a className="mb-6 block hover:text-grey">Features</a>
          </Link>
          <Link href="/">
            <a className="mb-6 block hover:text-grey">Pricing</a>
          </Link>
          <Link href="/">
            <a className="mb-6 block hover:text-grey">Resources</a>
          </Link>
          <hr />
          <div className="mt-6 ">
            <button className="btn mx-auto block mb-4 text-white font-semibold btn-full-round">
              Login
            </button>
            <button className="px-8 py-2 btn-full-round btn-green">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div className="relative">
          <Drawer setIsOpen={setIsOpen} />
        </div>
      ) : null}
      <Container>
        <nav className="j-btw  py-14">
          <div className="a-center-j-btw w-full">
            <div className="w-full md:w-1/3 a-center-j-btw">
              <Link href="/">
                <a className="pr-4">
                  <Logo />
                </a>
              </Link>

              <div
                onClick={() => setIsOpen(true)}
                arial-label="Open mobile menu"
                className="md:hidden cursor-pointer text-grey"
              >
                <MenuIcon />
              </div>
              <div className="hidden md:block">
                <Link href="/">
                  <a className="px-6 text-grey hover:text-black">Features</a>
                </Link>
                <Link href="/">
                  <a className="px-6 text-grey hover:text-black">Pricing</a>
                </Link>
                <Link href="/">
                  <a className="px-6 text-grey hover:text-black">Resources</a>
                </Link>
              </div>
            </div>

            <div className="hidden md:flex">
              <button className="btn btn-outlined mr-4 text-grey btn-full-round">
                Login
              </button>
              <button className="btn btn-full-round btn-green">Sign Up</button>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
