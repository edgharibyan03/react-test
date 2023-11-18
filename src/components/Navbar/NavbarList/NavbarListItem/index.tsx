import { NavbarItem } from "../../../../interfaces/NavbarInterfaces"

interface props {
  item: NavbarItem
}

export default function NavbarListItem({
  item
}: props) {
  return (
    <div className="navbar-list-item">
      <img src={item.icon} alt="navbar-list-item-img" />
      <span>{item.title}</span>
    </div>
  )
}