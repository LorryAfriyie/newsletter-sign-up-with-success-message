export const SuccessCard = () => {
  return (
    <div className="success-card">
      <div className="container">
        <img src="/images/icon-success.svg" alt="icon-success.svg" />

        <h1>Thanks for subscribing!</h1>

        <p>
          <small>
            A confirmation email has been sent to{" "}
            <strong>lawrenceafriyie@gmail.com</strong>. Please open it and click
            the button inside to confirm your subscription.
          </small>
        </p>

        <button>Dismiss message</button>
      </div>
    </div>
  );
};
