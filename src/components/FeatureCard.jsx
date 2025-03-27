
const FeatureCard = ({ icon, text}) => {
  return (
    <div className="flex flex-row border border-[#E5F4F2] items-center gap-[20px] p-[20px] bg-[#FFFFFF] rounded-[20px] max-w-[350px]">
        <div className="p-[12.2px] bg-[#E5F4F2] rounded-[12.2px]">
            <img src={icon} alt="logo" />
        </div>
        <div className='font-mulish text-[#2D2D2D] text-[21px] leading-[1.5]'>{text}</div>
    </div>
  )
}

export default FeatureCard