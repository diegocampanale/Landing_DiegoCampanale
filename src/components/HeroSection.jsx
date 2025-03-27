import mockup from "../assets/mockup.svg";
import {CTAs} from "../constants";

const HeroSection = () => {
  return (
    <div className=" flex bg-[#F8D57E] justify-center px-[30px] pt-[60px] lg:px-[55px] lg:pt-[120px]">
        <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-[1170px] justify-between">
            {/* Header*/}
            <div className="flex flex-wrap lg:block lg:pb-[90px] justify-center">
                {/* Testi */}
                <div className="flex flex-wrap w-auto lg:w-[620px] text-center lg:text-left">
                    <h1 className="text-[38px] lg:text-[67px] font-bold -tracking-[0.02] lg:tracking-tight leading-[1.3] text-[#2D2D2D]">Create Engaging Landing Pages</h1>
                    <p className="text-[#2D2D2D] lg:text-[21px] font-[400] leading-[1.5] font-mulish mt-[20px]">
                        Build beautiful landing pages in record time with <a href="#" className="text-blue-500">Anima</a>’s Landing Page UI kit for Figma. No code required!</p>
                </div>
                {/* CTAs */}
                <div className="grid grid-cols-1 lg:flex gap-[18px] mt-[40px] justify-items-center">
                    <a href={CTAs[0].link} className="flex items-center justify-center w-full lg:w-auto py-[16px] px-[50px] h-[60px] rounded-[20px] font-semibold text-base bg-[#009379] text-[#FFFFFF]">
                        <span className="inline-block mr-[8px]">{CTAs[0].icons[0]}</span>
                        {CTAs[0].text}
                    </a>
                    <a href={CTAs[1].link} className="flex items-center justify-center w-full lg:w-auto py-[16px] px-[50px] h-[60px] rounded-[20px] font-semibold text-base bg-[#FFFFFF] text-[#009379] border border-[#009379]">{CTAs[1].text}</a>
                </div>
            </div>
            {/* Mockup*/}
            <div className="flex w-full lg:w-auto justify-center lg:justify-end mt-[60px] lg:mt-auto">
                <img className="lg:max-w-[450px]" src={mockup} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
