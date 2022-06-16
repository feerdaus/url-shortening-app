import { Container } from "@components/ui";
import Image from "next/image";
import styles from "./home.module.css";

const Hero = () => {
  return (
    <Container>
      <div className="relative md:flex md:items-center py-14">
        <div className={`mx-auto mb-8 md:hidden ${styles.hero_s_img}`}>
          <Image
            src="https://ik.imagekit.io/4woq8zlkh/ss_wwc_dbUAMxCir.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655240371300"
            width={351}
            height={337}
            layout="responsive"
            alt="working with computer"
          />
        </div>
        <div
          className={`hidden md:block absolute -right-10 ${styles.hero_l_img}`}
        >
          <Image
            src="https://ik.imagekit.io/4woq8zlkh/working_with_computer_isrUkc9qh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655237534871"
            width={510}
            height={482}
            layout="responsive"
            alt="working with computer"
          />
        </div>
        <div
          className={`text-center mx-auto md:mx-0 md:w-1/2 md:text-left ${styles.hero_txt}`}
        >
          <h1>More than just shorter links</h1>
          <p className="f-22-36 text-dark-grey my-6">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn-green btn-full-round mx-auto">
            Get Started
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
