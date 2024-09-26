import emailjs from "@emailjs/browser";
import { useRef } from "react";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bcj2f4m", "template_1m1t9zu", form.current, {
        publicKey: "PuHO7WA2vkEzQpL6k",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea placeholder="Message" name="message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
