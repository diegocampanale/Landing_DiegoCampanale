import MemberCard from "./MemberCard"
import { teamMembers } from "../constants"

const Team = () => {
  return (
    <div className="flex flex-col bg-[#F8F9FF] px-[30px] py-[60px] lg:px[55px] lg:py-[120px] gap-[60px]">
        {/* Headline & Subhead */}
        <div className="flex flex-col text-center ">
            <h1 className="font-semibold text-[38px] lg:font-bold">Meet our team</h1>
            <p className="font-normal font-mulish text-[#2D2D2D] leading-[1.5]">Get to know the faces behind the scenes and learn about the values that drive us.</p>
        </div>
        {/* Cards Row */}
        <div className="flex flex-wrap justify-center gap-[30px]">
          {teamMembers.map((member, index) => (
              <MemberCard key={index} {...member} />
          ))}
        </div>
    </div>
  )
}

export default Team