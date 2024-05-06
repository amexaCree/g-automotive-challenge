import classNames from "classnames/bind";

// Styles
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = (props) => {
  const rootClasses = cx("Header");
  return (
    <header className={rootClasses}>
      <div className={cx("content-wrapper")}>
        <h1>Welcome to G Automotive</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
