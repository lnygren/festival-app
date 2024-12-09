

import logo from '../assets/images/logo-inverted.png';
import LanguageSwitcher from './LanguageSwitcher';
import MenuItem from './MenuItem';

function MainNavigation() {
  return (
  
    <header className="text-zinc-200">
      <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="flex items-center p-2 gap-2">
              <img src={logo} alt="logo" className="w-[50px]"/>
              <div className="font-bold text-2xl ">
                  tw:<span className="text-sky-900">mf</span>
              </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
                <MenuItem link="/" label="Home"  />

                <MenuItem link="/" label="Program"  />

                <MenuItem link="/lineup" label="Lineup"  />
                
                <MenuItem link="/tickets" label="Tickets" subItems={[{link: '/tickets/oneday', label: 'One day tickets'}, {link: '/tickets/week', label: 'Week pass'}]}  />
              
                <MenuItem link="/" label="How to get there"  />
              <MenuItem link="/support" label="Support"  />
          </div>

          <LanguageSwitcher />  

      </nav>
    </header>
  );
}

export default MainNavigation;
