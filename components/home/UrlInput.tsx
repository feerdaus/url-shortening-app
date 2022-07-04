import { Container } from "@components/ui";
import { Field, Form } from "react-final-form";
import styles from "./home.module.css";

const UrlInput = () => {
  const onSubmit = () => {};
  return (
    <Container className="">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="url">
              {({ input, meta }) => (
                <div className={`md:flex p-8 ${styles.input_bg} `}>
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
                    className="btn bg-green btn-green rounded font-bold w-full md:w-1/6 mt-3 md:mt-0 "
                  >
                    Shorten it!
                  </button>
                </div>
              )}
            </Field>
          </form>
        )}
      />
    </Container>
  );
};

export default UrlInput;
