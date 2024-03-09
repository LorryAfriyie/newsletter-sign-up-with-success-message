export const NewsletterSubCard = () => {
  const listItems = [
    { id: 1, message: "Product discovery and building what matters" },
    { id: 2, message: "Measuring to ensure updates are a success" },
    { id: 3, message: "And much more!" },
  ];

  return (
    <div className="newsletter-card">
      <div className="card">
        <div className="col-info">
          <h1>Stay Updated!</h1>

          <div className="sub-text">
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              {listItems.map((x) => {
                return <li key={x.id}>{x.message}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="col-img"></div>
      </div>
    </div>
  );
};
