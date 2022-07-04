import styles from "./home.module.css";

const BoostLink = () => {
  return (
    <section className={`${styles.boost_bg}`}>
      <div className={` py-8 `}>
        <h3 className="text-white font-extrabold mx-auto text-center max-w-lg f-40-48">
          Boost your links today
        </h3>
        <div className="mx-auto w-fit ">
          <button className="btn btn-green mt-8">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default BoostLink;
