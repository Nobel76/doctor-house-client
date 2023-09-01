import img from '../../../assets/doctor2.jpeg'
import img2 from '../../../assets/gestrology.jpeg'

const OurService = () => {
    return (
        <div className=" bg-base-200">
       <div className=' flex-col lg:flex-row'>
       <div className="hero-content">
          <img src={img} className="w-[558px] h-[800px] rounded-lg shadow-2xl" />
          <div>
           <div>
           <h1 className="text-5xl text-orange-300 font-bold mt-8">Our Services</h1>
            <p className="py-6 font-sans text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="tabs gap-4 border-2 justify-center rounded-2xl p-2  mb-8 ">
  <a className="tab  text-white  btn btn-outline btn-error rounded-xl">Cavity Protection</a> 
  <a className="tab  text-white  tab-active  btn btn-outline btn-error rounded-xl">Cosmetic Dentisty</a> 
  <a className="tab  text-white btn btn-outline btn-error  rounded-xl">Oral Surgery</a>
</div>
            <img src={img2} className='w-[558px] h-[350px] rounded-lg ' alt="" />
            <h2 className='text-3xl text-orange-300 mt-6 font-bold '>Electro  Gastrology Therapy</h2>
            <p className='font-sans text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
 <p className='font-sans text-lg mb-8'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
 <button className="btn btn-outline btn-error">More details</button>
           </div>
          </div>
        </div>
       </div>
      </div>
    );
};

export default OurService;