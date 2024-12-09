

import logo from '../assets/images/logo-inverted.png';
import LanguageSwitcher from './LanguageSwitcher';
import MenuItem from './MenuItem';

import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenuItem from './MobileMenuItem';
import heroImage from '../assets/images/hero.jpg';
import logo2 from '../assets/images/logo.png';

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(!isOpen);
  }

  const { t } = useTranslation(); 

  let onedayLabel = t('oneday');
  let weekLabel = t('week');

  return (
  
    <header className="text-zinc-200">
      <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">
          <NavLink to="/"> 
            <div className="flex items-center p-2 gap-2">
              
                  <img src={logo} alt="logo" className="w-[50px]"/>
                  <div className="font-bold text-2xl ">
                      tw:<span className="text-sky-900">mf</span>
                  </div>
              
              
            </div>
          </NavLink>
          <div className="md:flex hidden flex-1 items-center justify-end">

                <MenuItem link="/lineup" label={t('lineup')}  />
                
                <MenuItem link="/tickets" label={t('tickets')} subItems={[{link: '/tickets/oneday', label: onedayLabel}, {link: '/tickets/week', label: weekLabel}]}  />
              
                <MenuItem link="/getthere" label={t('getthere')}  />
              <MenuItem link="/support" label={t('support')}  />
              <LanguageSwitcher />
          </div>
          <div className="md:hidden block ml-auto pr-4 my-auto cursor-pointer">
               <button id="mobile-menu-button" className={isOpen ? 'group open peer' : 'group peer'} onClick={setOpen}>
                  <div className="top:0 relative group-open:top-2 transition-all group-open:rotate-45 bg-zinc-200 rounded-full w-8 h-1 "></div>
                  <div className="transition-all opacity-100 group-open:opacity-0 bg-zinc-200 rounded-full w-8 h-1 mt-1"></div>
                  <div className="top:0 relative group-open:bottom-2 transition-all group-open:-rotate-45 bg-zinc-200 rounded-full w-8 h-1 mt-1"></div>
                </button>
                <div className="hidden peer-open:block top-[62px] absolute bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0" >
                    <MobileMenuItem link="/lineup" label={t('lineup')} />
                    <MobileMenuItem link="/tickets" label={t('tickets')} subItems={[{link: '/tickets/oneday', label: onedayLabel}, {link: '/tickets/week', label: weekLabel}]} />
                    <MobileMenuItem link="/getthere" label={t('getthere')} />
                    <MobileMenuItem link="/support" label={t('support')} />
                </div>
          </div>

            

      </nav>
      <div style={{ backgroundImage: `url(${heroImage})` }}
      className="bg-cover bg-center bg-fixed flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px]">
        <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-classic">
          <div className="relative">
              <img src={logo2} alt="Logo" width="175"/>
              <div className="flex items-center justify-center mt-[-70px] mb-5">
                <div className="h-14 w-14 rounded-full bg-pink-500 flex items-center justify-center gap-1 ">
                  <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-100"></div>
                  <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-500"></div>
                  <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-200"></div>
                  <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300"></div>
                  <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-100"></div>
                
                </div>
              </div>
              <div className="text-5xl font-bold">
                  tw:<span className="text-sky-900">mf</span>
              </div>
          </div>

        </div>
        <div className="font-bold mt-3 text-sm">
          Keep me updated on news and promotions.


        </div>
        <form className="flex mt-3 gap-2">
          <input type="email" placeholder="Email" className="rounded-sm border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline"></input>
         <button type="submit" className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20">
            Subscribe
          </button>


        </form>

      </div>

    </header>
  );
}

export default MainNavigation;
