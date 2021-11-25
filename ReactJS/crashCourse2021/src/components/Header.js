import PropTypes from "prop-types";
import Button from "./Button";

// ___________________________ES5 version
// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// };

const Header = ({ title }) => {
  // ({title}) = (props)
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1 style={{ color: "drakblue", backgroundColor: "grey" }}>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

// Header.defaultProps = {
//   title: "task tracker",
// };

Headers.propType = {
  title: PropTypes.string.isRequired,
};

export default Header;
