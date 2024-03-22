import { forwardRef, useEffect } from "react";

// eslint-disable-next-line react/display-name
export const SuccessCard = forwardRef(({ email, isEmail }, ref) => {
  useEffect(() => {
    if (!email) ref.current.style.display = "none";

    if (isEmail && email) ref.current.style.display = "block";
  }, [email, ref, isEmail]);

  function redirect() {
    window.location.href = "/";
  }

  return (
    <div className="success-card" ref={ref}>
      <div className="container">
        <img src="/images/icon-success.svg" alt="icon-success.svg" />

        <h1>Thanks for subscribing!</h1>

        <p>
          <small>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </small>
        </p>

        <button onClick={redirect}>Dismiss message</button>
      </div>
    </div>
  );
});
