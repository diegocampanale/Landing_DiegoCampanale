import mockup from "../assets/mockup.svg";
import {CTAs} from "../constants";

const HeroSection = () => {
  return (
    <div className=" flex bg-[#F8D57E] justify-center px-[30px] pt-[60px] lg:px-[55px] lg:pt-[120px] overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full max-w-[1170px] justify-between">
            {/* Header*/}
            <div className="flex flex-wrap lg:pb-[90px] justify-center lg:justify-start">
                {/* Testi */}
                <div className="flex flex-wrap w-auto lg:w-[620px] text-center lg:text-left justify-center">
                    <h1 className="text-[38px] lg:text-[67px] font-bold -tracking-[0.02] lg:tracking-tight leading-[1.3] text-[#2D2D2D]">Create Engaging Landing Pages</h1>
                    <p className="text-[#2D2D2D] lg:text-[21px] font-[400] leading-[1.5] font-mulish mt-[20px]">
                        Build beautiful landing pages in record time with <a href="#" className="text-blue-500">Anima</a>’s Landing Page UI kit for Figma. No code required!</p>
                </div>
                {/* CTAs */}
                <div className="flex flex-col md:flex-row gap-[18px] mt-[40px]">
                    <a href={CTAs[0].link} className="flex items-center justify-center w-full md:w-auto py-[16px] px-[50px] h-[60px] rounded-[20px] font-semibold text-base bg-[#009379] text-[#FFFFFF]">
                        <span className="inline-block mr-[8px]">{CTAs[0].icons[0]}</span>
                        {CTAs[0].text}
                    </a>
                    <a href={CTAs[1].link} className="flex items-center justify-center w-full md:w-auto py-[16px] px-[50px] h-[60px] rounded-[20px] font-semibold text-base bg-[#FFFFFF] text-[#009379] border border-[#009379]">{CTAs[1].text}</a>
                </div>
            </div>
            {/* Mockup*/}
            <div className="flex mt-[60px] lg:mt-auto justify-center items-center ">
                {/* Mockup */}
                <img className="flex lg:max-w-[450px]" src={mockup} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
