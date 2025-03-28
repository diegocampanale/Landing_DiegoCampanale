import {logos} from "../constants"

const LogoBar = () => {
  return (
    <div className="flex flex-col bg-[#F8F9FF] px-[30px] py-[60px] lg:px-[55px] lg:py-[120px] gap-[40px]">
        {  /* Headline & Subhead */}
        <div className="flex text-center flex-col gap-[20px]">
            <h1 className="font-bold text-[38px]/[1.3] tracking-[-0.02em] text-[#000000]">More than 50 Integrations</h1>
            <p className="font-mulish font-normal text-[16px]/[1.5] text-#2D2D2D]">We integrate with more than 50 apps you use daily</p>
        </div>
        {  /* Logo Grid */}
        <div className="flex py-[32px] lg:py-[40px] justify-between ovewflow-x-auto">
            {logos.map((logo, index) => (
                <div key={index} className="flex flex-row items-center w-[40px] sm:w-auto max-w-[64px] drop-shadow-[0_0px_10px_rgba(41,41,42,0.07)]">
                    <a className="" href={logo.link}><img src={logo.image} alt={logo.name} className=""/></a>
                </div>
            ))}
        </div>

        {  /* Button */}
        <div className="flex justify-center gap-[8px] text-center ">
            <a className="flex items-center bg-[#009379] py-[16px] px-[50px] rounded-[20px] h-[60px] text-[#FFFFFF] font-semibold text-base" href="#">View All Integrations</a>
        </div>

    </div>
  )
}

export default LogoBar