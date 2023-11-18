import { NavbarItem } from "../../../interfaces/NavbarInterfaces"
import NavbarListItem from "./NavbarListItem"

interface props {
  list: NavbarItem[]
}

export default function NavbarList({
  list
}: props) {
  return (
    <div className="navbar-list">
      {
        list.map((item, index) => (
          <NavbarListItem
            item={item}
            key={index}
          />
        ))
      }
    </div>
  )
}