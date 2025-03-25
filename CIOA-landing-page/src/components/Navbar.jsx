import logo from "../assets/logo.svg"
import { Rocket } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="top-0 bg-[#F8D57E] w-full z-50">
        <div className="flex max-w-full h-[100px] mx-auto flex justify-between items-center p-[20px] lg:px-[50px]">
            {/* LOGO */}
            <div className="flex items-center w-[179px] h-[32px] gap-[6px]">
                <a href="#">
                <img className="w-[32px] h-[32px]" src={logo} alt="logo" />
                <span className="text-[#2D2D2D]-700 font-bold invisible"></span>   
                </a>
            </div>

            {/* NAVIGATION MENU */}
            <div className="flex items-center gap-[50px] ">
                <ul className="hidden lg:flex items-center justify-center h-[30px]">
                    <li><a href="#" className="font-semibold text-[#009379]">Contact</a></li>
                </ul>
                <div className="flex gap-[20px]">
                    <a href="#" className="hidden lg:flex py-[16px] px-[50px] h-[60px] rounded-[20px] font-semibold text-base bg-[#E5F4F2] text-[#009379] items-center justify-center">How it works</a>
                    <a href="#" className="flex py-[16px] px-[50px] h-[60px] rounded-[20px] font-semibold text-base bg-[#009379] text-[#FFFFFF] items-center justify-center min-w-[221px]">
                        <span className="hidden lg:inline-block mr-[8px]"><Rocket size={20}/></span>
                        Get Started
                        <span className="inline-block lg:hidden ml-[8px]"><ArrowRight size={20}/></span>
                    </a>
                </div>
            </div>
      </div>
    </nav>
  )
}

export default Navbar
