import { Container } from "@components/ui";
import Image from "next/image";
import styles from "./home.module.css";

const Hero = () => {
  return (
    <Container>
      <div
        className={`a-center flex-col md:flex-row-reverse md:justify-between py-14 lg:mb-28 ${styles.hero}`}
      >
        <div>
          <div className={`mx-auto mb-8 lg:hidden ${styles.hero_s_img}`}>
            <Image
              src="https://ik.imagekit.io/4woq8zlkh/url-landing-page/ss_wwc_dbUAMxCir.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656579998713"
              width={351}
              height={337}
              layout="responsive"
              alt="working with computer"
            />
          </div>
          <div className={`hidden lg:block ${styles.hero_l_img}`}>
            <Image
              src="https://ik.imagekit.io/4woq8zlkh/url-landing-page/working_with_computer_isrUkc9qh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656580000393"
              width={510}
              height={482}
              layout="responsive"
              alt="working with computer"
            />
          </div>
        </div>
        <div
          className={`text-center mx-auto lg:mx-0 lg:w-1/2 md:text-left md:ml-0 ${styles.hero_txt}`}
        >
          <h1>More than just shorter links</h1>
          <p className="f-20-32 text-dark-grey my-6">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn-green rounded-full mx-auto">
            Get Started
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
