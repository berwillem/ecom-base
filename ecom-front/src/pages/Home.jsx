import axios from "axios";
import gsap from "gsap";
import { useState } from "react";
import { useRef, useLayoutEffect } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [email, setEmail] = useState("");
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      });
    }, comp);
    return () => ctx.revert();
  }, []);
  const subscribe = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/newsletter", { email })
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "You have successfully subscribed!",
          icon: "success",
        });
      });
  };
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 id="title-1" className="text-9xl font-bold">
          welcome
        </h1>
        <h1 id="title-2" className="text-9xl font-bold">
          to
        </h1>
        <h1 id="title-3" className="text-9xl font-bold">
          gomycode
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-bold text-gray-100">
          welcome
        </h1>
      </div>

      <div className="newsletter">
        <h1>newsletter</h1>
        <form onSubmit={subscribe}>
          <input
            type="email"
            placeholder="enter you email "
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-gray-100 p-2 rounded">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
