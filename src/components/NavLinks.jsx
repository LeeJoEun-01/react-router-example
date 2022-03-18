import { NavLink } from "react-router-dom"

const activeStyle = { color: "green" };

export default function Links() {
  return (
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/profile" activeStyle={activeStyle}>Profile</NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>Profile/1</NavLink>
      </li>
      <li>
        <NavLink
        to="/about" 
        activeStyle={activeStyle}
        isActive={(match, location) => {
          console.log(match, location);
          return match !== null && location.search === "";
        }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
         to="/about?name=mark" 
         activeStyle={activeStyle}
         isActive={(match, location) => {
          console.log(location);
          return match !== null && location.search === "?name=mark";
        }}
        >
           About?name=Mark
        </NavLink>
      </li>
    </ul>
  )
}