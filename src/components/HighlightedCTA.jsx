import {CTAs} from '../constants'
import DesktopMockup from '../assets/desktop_mockup.svg'

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

    </div>
  )
}

export default HighlightedCTA