import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, image, text, rating = 5 }) => {

  return (
    <div className="flex gap-[30px] p-[40px] bg-[#FFFFFF] rounded-[20px] border border-[#E5F4F2] max-w-[570px] drop-shadow-[0_35px_30px_rgba(51,102,255,0.05)]">
        <div className="flex flex-col lg:flex-row gap-[30px] items-center">
            <div className="flex flex-col gap-[16px] min-w-[180px] items-center">
                <img src={image} alt="photo1" className='w-[120px]'/>
                <div className="flex flex-col gap-[6px] text-center">
                    <h2 className='font-[#111827] text-[21px] font-semibold leading-[1.3]'>{name}</h2>
                    <p className='font-mulish text-[14px] font-[#374151] leading-[1.6] font-normal'>Lead Designer @Creative</p>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] items-center text-center lg:items-start lg:text-left">
                <div className="flex flex-row gap-[5px] order-last">
                    {[...Array(rating)].map((_, index) => (
                        <span key={index}><Star fill="#F8D57E" stroke="#F8D57E" strokeWidth={2} size={24} /></span>
                    ))}
                </div>
                <p className='font-mulish order-first lg:order-last font-normal md:order-last leading-[1.5] font-[#2D2D2D] text-[14px]'>{text}</p>
            </div>
        </div>
    </div>
  );
};

export default TestimonialCard;