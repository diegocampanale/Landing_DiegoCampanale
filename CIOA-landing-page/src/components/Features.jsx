import visuals from '../assets/visuals.svg'
import FlyingSaucer from '../assets/icons/FlyingSaucer.svg'
import MagicWand from '../assets/icons/MagicWand.svg'
import BoundingBox from '../assets/icons/BoundingBox.svg'
import Package from '../assets/icons/Package.svg'

const Features = () => {
  return (
    <div className="bg-[#F8F9FF] flex flex-col-reverse lg:flex-row justify-center items-center px-[30px] py-[60px] lg:px-[55px] lg:py-[120px] gap-[60px]">
        {/* Visuals */}
        <div className="flex w-full lg:w-auto">
            <img className="lg:max-w-[540px]" src={visuals} alt="logo" />
        </div>

        {/* Header */}
        <div className="flex flex-col gap-[50px]">
            {/* Header */}
            <div className="flex flex-col gap-[20px] text-center lg:text-left">
                <h1 className="font-bold text-[38px] leading-[1.3] -tracking-[0.02] text-[#2D2D2D]">Our features</h1>
                <p className='font-mulish  text-[21px] leading-[1.3] leading-[1.5] font-normal text-[#2D2D2D]'>Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.</p>
            </div>
            {/* Card */}
            <div className="grid lg:grid-cols-2 gap-[20px] bg-transparent drop-shadow-[0_35px_30px_rgba(51,102,255,0.05)]">
                <div className="flex flex-row border border-[#E5F4F2] items-center gap-[20px] p-[20px] bg-[#FFFFFF] rounded-[20px]">
                    <div className="p-[12.2px] bg-[#E5F4F2] rounded-[12.2px]">
                        <img src={FlyingSaucer} alt="logo" />
                    </div>
                    <div className='font-mulish text-[#2D2D2D] text-[21px] leading-[1.5]'>Fast building</div>
                </div>
                <div className="flex flex-row border border-[#E5F4F2] items-center gap-[20px] p-[20px] bg-[#FFFFFF] rounded-[20px]">
                    <div className="p-[12.2px] bg-[#E5F4F2] rounded-[12.2px]">
                        <img src={MagicWand} alt="logo" />
                    </div>
                    <div className='font-mulish text-[#2D2D2D] text-[21px] leading-[1.5]'>Easy to edit</div>
                </div>
                <div className="flex flex-row border border-[#E5F4F2] items-center gap-[20px] p-[20px] bg-[#FFFFFF] rounded-[20px]">
                    <div className="p-[12.2px] bg-[#E5F4F2] rounded-[12.2px]">
                        <img src={BoundingBox} alt="logo" />
                    </div>
                    <div className='font-mulish text-[#2D2D2D] text-[21px] leading-[1.5]'>Responsiveness</div>
                </div>
                <div className="flex flex-row border border-[#E5F4F2] items-center gap-[20px] p-[20px] bg-[#FFFFFF] rounded-[20px]">
                    <div className="p-[12.2px] bg-[#E5F4F2] rounded-[12.2px]">
                        <img src={Package} alt="logo" />
                    </div>
                    <div className='font-mulish text-[#2D2D2D] text-[21px] leading-[1.5]'>No code needed</div>
                </div>
        
            </div>
        </div>


    </div>
  )
}

export default Features