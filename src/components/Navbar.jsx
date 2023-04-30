import { useState } from "react"

import { close, logo, menu } from '../assets'
import { navLinks } from "../constants"

const Navbar = () => {
  const [active, setActive] = useState("Home")
  const [togle, setTgle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="" className="w-[124px] h-[24px]" />

      <ul className="list-none sm:flex hidden justify-end flex-1 items-center">
        {navLinks.map((items, index) => (
          <li
            key={items.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === items.title ? "text-white" : "text-dimWhite"} ${index === navLinks - 1 ? "mr-0" : "mr-10"} text-white mr-10`}
            onClick={() => setActive(navLinks.title)}
          >
            <a href={`#${items.id}`}>
              {items.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={togle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setTgle(!togle)}
          alt=""
        />

        <div className={`${togle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className="list-none sm:flex justify-end flex flex-col items-center">
            {navLinks.map((items, index) => (
              <li
                key={items.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === items.title ? "text-white" : "text-dimWhite"} ${index === navLinks - 1 ? "mr-0" : "mb-4"} text-white`}
                onClick={() => setActive(navLinks.title)}
              >
                <a href={`#${items.id}`}>
                  {items.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar