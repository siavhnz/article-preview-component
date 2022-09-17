import Avatar from "../images/avatar-michelle.jpg";
import { ReactComponent as ShareIcon } from "../images/icon-share.svg";
import { ReactComponent as FacebookIcon } from "../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../images/icon-pinterest.svg";
import styleUtils from "./Article.module.css";

const Article = () => {
  return (
    <article className={styleUtils.container}>
      <div className={styleUtils["header-img"]}></div>
      <div className={styleUtils["right-section"]}>
        <div className={styleUtils.body}>
          <h1 className={styleUtils.body__title}>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className={styleUtils.body__desc}>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <footer className={`${styleUtils.footer}`}>
          <div className={styleUtils.author}>
            <img
              className={styleUtils.author__avatar}
              src={Avatar}
              alt="Michelle Appleton"
            />
            <div className={styleUtils.author__info}>
              <span className={styleUtils.author__name}>Michelle Appleton</span>
              <time className={styleUtils.author__date}>28 Jun 2020</time>
            </div>
          </div>
          <div
            className={`${styleUtils["sharing-icons"]} ${styleUtils.active}`}
          >
            <span className={styleUtils["sharing-icons__title"]}> Share</span>
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
          <div className={styleUtils.footer__action}>
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
