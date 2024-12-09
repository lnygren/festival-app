import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function MobileMenuItem({ label, link, classes = "", subItems }) {
  
  const [isOpen, setIsOpen] = useState(true);

  function setOpen() {
    setIsOpen(!isOpen);
  }

  let classNames =
    classes +
    " relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text zinc-200 transition-colors hover:bg-white/10";

    if(subItems) {
        let classesSub = "group relative h-full cursor-pointer  p-4 hover:text zinc-200 transition-colors hover:bg-white/10";

        if(isOpen) {
          classesSub += " open";
        } 
        /*return (<div className={classNames}>
            <NavLink
              to={link}
            >
              {label}
            </NavLink>
      <div className="group-hover:block hidden absolute top-full bg-pink-500 right-0 whitespace-nowrap rounded-b-md text-right">
          {subItems.map((subItem) => (
                <div key={subItem.label}  className=" p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200">
                <NavLink
                  to={subItem.link}
                >
                  {subItem.label}
                </NavLink>
              </div>
            )

          )}
      </div>
  </div>);*/
        return (
            <div id="ticket-menu-item" className={classesSub} onClick={setOpen}>
                <div className="p-4 text-center font-bold">Tickets</div>
                <div className="hidden group-open:block">
                    <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">Single day ticket</div>
                    <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">4-day pass</div>
                </div>

            </div>


        );

    }


  return (
    <NavLink
      className={classNames}
      end
      to={link}
    >
      {label}
    </NavLink>
  );
}
