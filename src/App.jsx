import { NewsletterSubCard } from "./NewsletterSubCard";
import { SuccessCard } from "./SuccessCard";
import "./style/main.scss";

function App() {
  return (
    <>
      {/* <NewsletterSubCard /> */}
      <SuccessCard />

      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Lawrence Afriyie</a>.
      </div>
    </>
  );
}

export default App;
