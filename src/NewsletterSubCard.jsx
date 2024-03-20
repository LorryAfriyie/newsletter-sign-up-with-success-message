import { useEffect, useRef, useState } from "react";
import { SuccessCard } from "./SuccessCard";

export const NewsletterSubCard = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  // Website service list
  const listItems = [
    { id: 1, message: "Product discovery and building what matters" },
    { id: 2, message: "Measuring to ensure updates are a success" },
    { id: 3, message: "And much more!" },
  ];

  // DOM element useRef
  const emailAddress = useRef(null);
  const form = useRef(null);
  const displaySuccess = useRef(null);

  function submitEmail(e) {
    e.preventDefault();

    if (emailAddress.current.value.trim() === "") {
      emailAddress.current.classList.add("error");
      emailAddress.current.style.background = "hsl(5, 10%, 94%)";
      emailAddress.current.style.color = "hsl(4, 100%, 67%)";
    }

    if (email) {
      form.current.style.display = "none";
      setIsEmail(true);
    }
  }

  return (
    <>
      <div className="newsletter-card">
        <div className="container" ref={form}>
          <form className="subscribe-form" onSubmit={submitEmail}>
            <h1 id="header">Stay updated!</h1>

            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>
              {listItems.map((x) => {
                return <li key={x.id}>{x.message}</li>;
              })}
            </ul>

            <div className="form-control" id="form">
              <label htmlFor="email">
                <small>Email address</small>
              </label>

              <input
                type="email"
                name="email"
                id="email"
                ref={emailAddress}
                placeholder="Email@company.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <button type="submit">Subscribe to monthly newsletter</button>
            </div>
          </form>

          {/* <div className="img"></div> */}

          <img
            src="/images/illustration-sign-up-desktop.svg"
            alt="illustration-sign-up-desktop.svg"
          />
        </div>
      </div>

      <SuccessCard email={email} ref={displaySuccess} isEmail={isEmail} />
    </>
  );
};
