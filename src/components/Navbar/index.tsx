import { navbarListItems } from "../../utils/Navbar";
import NavbarList from "./NavbarList";
import NavbarUser from "./NavbarUser";
import './style.scss'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-block">
        <div className="navbar-head">
          <NavbarUser />
          <NavbarList list={navbarListItems} />
        </div>
        <div className="navbar-footer">
          <span>Language</span>
          <span>Get Help</span>
          <span>Exit</span>
        </div>
      </div>
    </div>
  )
}