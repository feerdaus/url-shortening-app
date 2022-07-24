import { Container } from "@components/ui";
import UrlInput from "./UrlInput";
import {
  BrandRecog,
  Customize,
  Divider,
  Records,
  VerticalDivide,
} from "@components/icons";

const AdvancedStatistics = () => {
  return (
    <section className="bg-light-grey">
      <UrlInput />

      <Container>
        <div className="pb-14 pt-40">
          <div className="mx-auto text-center max-w-lg px-4 pb-14">
            <h2 className="text-black">Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="md:flex relative space-y-20 md:space-x-6">
            <span className="md:hidden absolute w-1 left-1/2">
              <VerticalDivide />
            </span>
            <span className="hidden md:block md:absolute w-2/3 h-1 md:top-36 md:left-16">
              <Divider />
            </span>
            <div className="md:w-1/3 mx-auto">
              <div className={`relative statistics mx-auto`}>
                <span className="absolute -top-10 right-32 md:left-4">
                  <BrandRecog />
                </span>
                <h4 className="mb-2 f-22-36 text-black font-bold">
                  Brand Recognition
                </h4>
                <p className="text-grey">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 mx-auto">
              <div className={`relative statistics mx-auto md:mt-8`}>
                <span className="absolute -top-10 right-32 md:left-4">
                  <Records />
                </span>
                <h4 className="mb-3 f-22-36 text-black font-bold">
                  Detailed Records
                </h4>
                <p className="text-grey">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 mx-auto">
              <div className={`relative mx-auto statistics md:mt-16`}>
                <span className="absolute -top-10 right-32 md:left-4">
                  <Customize />
                </span>
                <h4 className="mb-3 f-22-36 text-black font-bold">
                  Fully Customizable
                </h4>
                <p className="text-grey">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdvancedStatistics;
