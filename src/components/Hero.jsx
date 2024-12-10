import heroImage from '../assets/images/hero.jpg';
import logo2 from '../assets/images/logo.png';

export default function Hero() {

    return (
        <div style={{ backgroundImage: `url(${heroImage})` }}
        className=" text-zinc-200 bg-cover bg-center bg-fixed flex flex-col items-center justify-center h-[calc(100vh-400px)] min-h-[400px]">
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


    );


}


