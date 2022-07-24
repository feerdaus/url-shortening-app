import { Container } from "@components/ui";
import { Field, Form } from "react-final-form";
import styles from "./home.module.css";
import { API } from "api";
import { useState } from "react";
import copy from "copy-to-clipboard";

// interface LinkProps {
//   url: any;
// }

const UrlInput = () => {
  const [links, setLinks] = useState<string[]>([]);
  const [olinks, setOLinks] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-Infinity);
  const onSubmit = async (values: { url: string }) => {
    try {
      const { data } = await API.get(`/shorten?url=${values.url}`);
      setOLinks(
        olinks && olinks.length
          ? olinks.concat([data.result.original_link])
          : [data.result.original_link]
      );
      setLinks(
        links && links.length
          ? links.concat([data.result.short_link])
          : [data.result.short_link]
      );
    } catch (error) {
      console.log(error);
    }
  };

  const copyToClipboard = (index: number) => {
    copy(links[index]);
    setCurrentIndex(index);
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={`relative ${styles.form}`}>
            <Field name="url">
              {({ input, meta }) => (
                <div
                  className={`md:flex p-8 w-full rounded-xl absolute left-0 -top-20 md:-top-12 ${styles.input_bg}`}
                >
                  <div className="w-full md:w-5/6 mr-4">
                    <input
                      className={` rounded px-4 py-3 text-black ${
                        meta.error && meta.touched
                          ? "form-control-error"
                          : "form-control"
                      }`}
                      {...input}
                      id="url"
                      type="url"
                      placeholder="Shorten a link here.."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn bg-green btn-green rounded font-bold w-full md:w-52 mt-3 md:mt-0 "
                  >
                    Shorten it!
                  </button>
                </div>
              )}
              {/* {meta.error && meta.touched && (
                    <span className={meta.error ? "text-red" : "hidden"}>
                      {meta.error}
                    </span>
                  )} */}
            </Field>
          </form>
        )}
      />
      {Boolean(links && links.length) &&
        links.map((link, index) => {
          return (
            <div className="md:flex md:items-center md:justify-between bg-white p-4 mb-6 rounded-lg">
              <p className="f-22-36 border-b w-2/3 border-b-light-grey md:border-0 pb-2">
                {olinks[index]}
              </p>
              <div className="md:flex md:items-center">
                <p className="md:mr-4 f-22-36 my-4 text-green">{link}</p>
                <button
                  onClick={() => copyToClipboard(index)}
                  className={`rounded text-white font-bold btn w-full sm:w-28 ${
                    currentIndex >= 0 && currentIndex === index
                      ? "btn-blue"
                      : "btn-green"
                  }`}
                >
                  {currentIndex >= 0 && currentIndex === index
                    ? "Copied!"
                    : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
    </Container>
  );
};

export default UrlInput;
