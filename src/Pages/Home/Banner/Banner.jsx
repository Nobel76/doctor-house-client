import doctor1 from '../../../assets/doctor1.jpeg'
import doctor2 from '../../../assets/doctor2.jpeg'
import doctor3 from '../../../assets/doctor3.jpeg'

const Banner = () => {
    return (
        <div className="p-12  max-w-screen-xl bg-green-950">
        <div className="hero-content flex text-center text-neutral-content">
          <div className="w-1/2 p-2 mr-11">
            <h1 className=" text-3xl font-serif">Your Best Medical <br></br> Help Center</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-outline btn-error">All Service</button>
          </div>
          <div className=" flex gap-2 mr-10">
          <img className='rounded-3xl' src={doctor1} alt="" />
          <img className='rounded-3xl' src={doctor3} alt="" />
          <img className='rounded-3xl' src={doctor2} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;