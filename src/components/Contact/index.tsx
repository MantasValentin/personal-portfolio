import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message successfully sent!");
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <section
      id="Contact"
      className="flex justify-center w-full bg-primary py-20"
    >
      <div className="max-w-6xl px-8 text-center">
        <h1 className="text-5xl font-semibold text-secondary">Contact Me</h1>
        <p className="text-xl max-sm:text-base py-4">
          If you have requests or questions, don&apos;t hesitate to contact me using
          the form below.
        </p>
        <div className="">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul className="flex flex-wrap mt-2">
              <li className="flex basis-full mb-2 h-12 max-sm:h-10 shadow-md">
                <input
                  className="basis-full bg-tertiary
                  text-secondary text-xl max-sm:text-base focus:outline-none pl-2 rounded-sm"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </li>
              <li className="flex basis-full mb-2 h-12 max-sm:h-10 shadow-md">
                <input
                  className="basis-full bg-tertiary text-secondary text-xl max-sm:text-base focus:outline-none pl-2 rounded-sm"
                  type="Email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
              <li className="flex basis-full mb-2 h-36 max-sm:h-32 shadow-md">
                <textarea
                  className="basis-full bg-tertiary text-secondary text-xl max-sm:text-base focus:outline-none pl-2 pt-2 rounded-sm resize-none"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li className="w-fit px-3 py-1 text-secondary text-lg max-sm:text-base bg-tertiary hover:bg-secondary hover:text-tertiary active:scale-[0.8] duration-200">
                <input type="submit" className="" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
