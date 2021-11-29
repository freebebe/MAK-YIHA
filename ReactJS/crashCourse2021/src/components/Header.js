import PropTypes from "prop-types";
import {useLocation} from 'react-router-dom'
import Button from "./Button";

// ___________________________ES5 version
// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// };

const Header = ({ title, onAdd, showAdd }) => {
  // ({title}) = (props)
  const location = useLocation()

  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      {location.pathname === '/' && (
        <Button color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />
      )}
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
