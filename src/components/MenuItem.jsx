import { NavLink } from "react-router-dom";

export default function MenuItem({ label, link, classes = "", subItems }) {
  let classNames =
    classes +
    " relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out";

    console.log("Sub items: " + subItems);

    if(subItems) {
        classNames += ' group';

        return (<div className={classNames}>
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
  </div>);
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
