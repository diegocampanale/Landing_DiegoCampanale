import {CTAs} from '../constants'
import DesktopMockup from '../assets/desktop_mockup_mobile.svg'

const HighlightedCTA = () => {
  return (
    <div className="flex flex-col gap-[40px] bg-[#F8D57E]">
        {/* Header */}
        <div className="flex flex-col pt-[60px] px-[30px] lg:px-[100px] gap-[20px] text-center">
            <h1 className="font-semibold lg:font-bold text-[28px]/[1.3] lg:text-[50px]/[1.3] tracking-[-0.01em] lg:tracking-[-0.02em] text-[#2D2D2D]">Get Landing Page UI Kit Today!</h1>
            <p className="font-mulish text-[16px]/[1.5] lg:text-[21px]/[1.5] text-[#2D2D2D] font-normal">Break Figma limits and explore the endless possibilities with Anima.</p>
        </div>
        {/* CTAs */}
        <div className="flex gap-[18px] justify-center items-center">
            <a href={CTAs[0].link} className="flex items-center justify-center lg:w-auto py-[16px] px-[50px] h-[60px] rounded-[20px] font-semibold text-base bg-[#009379] text-[#FFFFFF]">
                <span className="inline-block mr-[8px]">{CTAs[0].icons[0]}</span>
                {CTAs[0].text}
            </a>
        </div>

        {/* Mockup */}
        <div className="flex justify-center relative overflow-hidden 565justify-center lg:px-[55px]">
            <img className='w-full max-w-[1170px] mb-[-1px]' src={DesktopMockup} alt="Desktop Mockup" />
        </div>

        {/* Desktop
        box-shadow: 10.59px 14.3px 20.06px 0px #00000026;       drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
        box-shadow: -2.26px -5.08px 3.95px 0px #0000001A inset;

        Mobile 
        box-shadow: 2.9px 3.91px 5.49px 0px #00000026;
        box-shadow: -0.62px -1.39px 1.08px 0px #0000001A inset;
        */}

    </div>
  )
}

export default HighlightedCTA