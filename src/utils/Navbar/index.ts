import { NavbarItem } from '../../interfaces/NavbarInterfaces'

import searchIcon from '../../assets/icons/ICON - Search.png'
import tvshowsIcon from '../../assets/icons/Group 56.png'
import moviesIcon from '../../assets/icons/Group 54.png'
import genresIcon from '../../assets/icons/Group 53.png'
import watchLaterIcon from '../../assets/icons/Group 47.png'
import homeIcon from '../../assets/icons/Group 46.png'

export const navbarListItems: NavbarItem[] = [
  {
    title: 'Search',
    icon: searchIcon,
  },
  {
    title: 'Home',
    icon: homeIcon,
  },
  {
    title: 'TV Shows',
    icon: tvshowsIcon,
  },
  {
    title: 'Movies',
    icon: moviesIcon,
  },
  {
    title: 'Genres',
    icon: genresIcon,
  },
  {
    title: 'Watch Later',
    icon: watchLaterIcon,
  },
]
