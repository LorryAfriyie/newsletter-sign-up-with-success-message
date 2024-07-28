import { useRef, useState } from "react";
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
  const errorLabelMessage = useRef(null);

  // Email validation using Regex
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  // Setting error styles when error conditions has been met
  function errorStyle() {
    emailAddress.current.classList.add("error");
    emailAddress.current.style.background = "rgb(255, 232, 230)";
    emailAddress.current.style.color = "hsl(4, 100%, 67%)";
    errorLabelMessage.current.style.display = "block";
  }

  // Submit email
  function submitEmail(e) {
    e.preventDefault();

    if (!validateEmail(emailAddress.current.value.trim())) {
      errorStyle();
    } else if (emailAddress.current.value.trim() === "") {
      errorStyle();
    } else {
      form.current.style.display = "none";
      setIsEmail(true);
    }
  }

  return (
    <>
      <div className="newsletter-card" ref={form}>
        <form className="subscribe-form" onSubmit={submitEmail} noValidate>
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
              <small className="error-label" ref={errorLabelMessage}>
                Valid email required
              </small>
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

        <div className="img"></div>
      </div>

      <SuccessCard email={email} ref={displaySuccess} isEmail={isEmail} />
    </>
  );
};
