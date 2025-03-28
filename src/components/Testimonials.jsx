import TestimonialCard from './TestimonialCard'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className="flex flex-col bg-[#F8D57E] px-[32px] py-[100px] lg:px-[55px] lg:py-[120px] gap-[60px] justify-center">
        {/* Headline & Subhead */}
        <div className="flex flex-col gap-[20px] text-center">
            <h1 className="font-bold text-[38px] leading-[1.3] tracking-[-0.02em] text-[#000000]">Real Stories from Satisfied Customers</h1>
            <p className="text-[#2D2D2D] font-mulish ">See how our landing page ui kit is making an impact.</p>
        </div>
        {/* Cards Row */}
        <div className="flex flex-wrap md:flex-row gap-[60px] lg:gap-[30px] items-center justify-center ">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    </div>
  )
}

export default Testimonials