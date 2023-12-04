import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div
          className="
        mb-24 font-serif italic text-sm text-stone-400 text-center
        "
        >
          With care and gusto, from San Francisco and Toronto. Find us on{" "}
          <a href="https://github.com/voteagora" target="_blank" className="hover:text-stone-700 transition">Github</a> and{" "}
          <a href="https://twitter.com/nounsagora" target="_blank" className="hover:text-stone-700 transition">Twitter</a>.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
