import Drawers from "../images/drawers.jpg";
import Avatar from "../images/avatar-michelle.jpg";
import { ReactComponent as ShareIcon } from "../images/icon-share.svg";
import { ReactComponent as FacebookIcon } from "../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../images/icon-pinterest.svg";

const Article = () => {
  return (
    <article>
      <div>
        <img src={Drawers} alt="drawers" />
      </div>
      <div>
        <div>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <footer>
          <div>
            <img src={Avatar} alt="" />
            <span>Michelle Appleton</span>
            <date>28 Jun 2020</date>
          </div>
          <div>
            <span> Share</span>
            <a href="https://facebook.com" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://pinterest.com" rel="noopener noreferrer">
              <PinterestIcon />
            </a>
          </div>
          <div>
            <button aria-label="click to open sharing links">
              <ShareIcon />
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Article;
