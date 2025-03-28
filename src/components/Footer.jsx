import { footerSocialLinks } from "../constants"


const Footer = () => {
  return (
    <div className="flex flex-wrap-reverse lg:flex-row justify-between bg-[#2D2D2D] px-[20px] py-[24px] lg:px-[60px] lg:py-[24px] gap-[20px]">
        <p className="font-mulish text-[14px]/[1.6] font-normal text-[#FFFFFF]">© 2023 Anima’s Landing Page Ui Kit. </p>

        {/* Social Links */}
        <div className="flex flex-row items-center justify-center gap-[16px]">
            {footerSocialLinks.map((social, index) => (
                <a key={index} href={social.link} className="flex justify-center items-center bg-[#4E4D4D] w-[32px] h-[32px] rounded-[100%]"><img src={social.icon} alt={social.name} /></a>
            ))}
        </div>

    </div>
  )
}

export default Footer