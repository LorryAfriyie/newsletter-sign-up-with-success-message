export const NewsletterSubCard = () => {
  const listItems = [
    { id: 1, message: "Product discovery and building what matters" },
    { id: 2, message: "Measuring to ensure updates are a success" },
    { id: 3, message: "And much more!" },
  ];

  return (
    <div className="newsletter-card">
      <div className="container">
        <form className="subscribe-form">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            {listItems.map((x) => {
              return <li key={x.id}>{x.message}</li>;
            })}
          </ul>

          <div className="form-control">
            <label htmlFor="email">
              <small>Email address</small>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email@company.com"
            />
          </div>

          <button type="submit">Subscribe to monthly newsletter</button>
        </form>

        <div className="img"></div>

        {/* <img
          src="/images/illustration-sign-up-desktop.svg"
          alt="illustration-sign-up-desktop.svg"
        /> */}
      </div>
    </div>
  );
};
