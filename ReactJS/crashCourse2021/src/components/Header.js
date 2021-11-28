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
    console.log('Click')
  }

  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "task tracker",
};

// css in js
const headingStyle = {
  color: "drakblue",
  backgroundColor: "grey"

}

Headers.propType = {
  title: PropTypes.string.isRequired,
};

export default Header;
