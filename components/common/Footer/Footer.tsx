import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  WhiteLogo,
} from "@components/icons";

import { Container } from "@components/ui";

const Footer = () => {
  return (
    <section className="bg-black py-12">
      <Container className="footer">
        <div className="md:flex flex-wrap md:justify-between text-grey text-center md:text-left">
          <span className="md:w-2/6 w-fit block mx-auto md:mr-auto">
            <WhiteLogo />
          </span>
          <div className="md:flex md:justify-between w-fit mx-auto md:w-4/6 flex-wrap">
            <div>
              <ul>
                <li className="font-extrabold mb-5 mt-11 md:mt-0 text-white green-point ">
                  Features
                </li>
              </ul>
              <ul>
                <li className="green-point">Link Shortening</li>
              </ul>
              <ul>
                <li className="green-point mt-2">Branded Links</li>
              </ul>
              <ul>
                <li className="green-point mt-2">Analytics</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-extrabold mb-5 mt-8 md:mt-0 text-white green-point">
                  Resources
                </li>
              </ul>
              <ul>
                <li className="green-point">Blog</li>
              </ul>
              <ul>
                <li className="green-point mt-2">Developers</li>
              </ul>
              <ul>
                <li className="green-point mt-2">Support</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-extrabold green-point mb-5 mt-10 md:mt-0 text-white">
                  Company
                </li>
              </ul>
              <ul>
                <li className="green-point">About</li>
              </ul>
              <ul>
                <li className="green-point mt-2">Our Teams</li>
              </ul>
              <ul>
                <li className="green-point mt-2">Career</li>
              </ul>
              <ul>
                <li className="green-point mt-2">Contact</li>
              </ul>
            </div>
            <div className="text-white flex w-fit mt-5 md:mt-0">
              <span className="w-6 h-5 mr-4 green-point block">
                <Facebook />
              </span>
              <span className="w-6 h-5 mr-4 green-point block">
                <Twitter />
              </span>
              <span className="w-6 h-5 mr-4 green-point block">
                <Pinterest />
              </span>
              <span className="w-6 h-5 green-point block">
                <Instagram />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
