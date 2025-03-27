import visuals from '../assets/visuals.svg'
import FlyingSaucer from '../assets/icons/FlyingSaucer.svg'
import MagicWand from '../assets/icons/MagicWand.svg'
import BoundingBox from '../assets/icons/BoundingBox.svg'
import Package from '../assets/icons/Package.svg'

import { features } from '../constants'
import FeatureCard from './FeatureCard'

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
                <p className='font-mulish  text-[21px] leading-[1.5] font-normal text-[#2D2D2D]'>Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.</p>
            </div>
            {/* Card */}
            <div className="grid lg:grid-cols-2 gap-[20px] bg-transparent drop-shadow-[0_35px_30px_rgba(51,102,255,0.05)] justify-center">
                {features.map((features, index) => (
                    <FeatureCard key={index}{...features} />
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Features