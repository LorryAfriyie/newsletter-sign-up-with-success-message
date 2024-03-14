import { useEffect, useRef } from "react";

export const NewsletterSubCard = () => {
  const listItems = [
    { id: 1, message: "Product discovery and building what matters" },
    { id: 2, message: "Measuring to ensure updates are a success" },
    { id: 3, message: "And much more!" },
  ];

  const emailAddress = useRef(null);

  function test(e) {
    e.preventDefault();
    emailAddress.current.classList.add("error");
    emailAddress.current.style.background = "hsl(5, 10%, 94%)";
    emailAddress.current.style.color = "hsl(4, 100%, 67%)";
  }

  useEffect(() => {
    //document.getElementById("email").style.background = "blue";
  }, []);

  return (
    <div className="newsletter-card">
      <div className="container">
        <form className="subscribe-form" onSubmit={test}>
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
  );
};
