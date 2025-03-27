

const MemberCard = ({image, name, role, description, social}) => {
  return (
    <div className="flex flex-col w-full max-w-[370px] rounded-[20px] justify-center bg-[#FFFFFF] px-[30px] py-[40px] gap-[30px] border border-[#E5F4F2] drop-shadow-[0_35px_30px_rgba(51,102,255,0.05)]">
        <div className="flex flex-col gap-[16px] w-full items-center">
            <img src={image} alt={name} className="w-[100px]" />
            <div className="flex flex-col text-center gap-[6px] w-fill">
                <h1 className="font-semibold text-[21px]/[1.5] text-[#111827]">{name}</h1>
                <p className="font-mulish text-[16px]/[20px] font-normal text-[#374151]">{role}</p>
            </div>
        </div>
        <div className="flex text-center w-full gap-[24px]">
            <p className="font-mulish text-[16px]/[1.6] fotn-normal text-[#2D2D2D]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-[20px] w-full text-center justify-around">
            {social.map((item, index) => (
                <a className="text-[#009379] font-bold text-[14px]/[20px]" href={item.link}>{item.name}</a>
            ))}
        </div>
    </div>
  )
}

export default MemberCard