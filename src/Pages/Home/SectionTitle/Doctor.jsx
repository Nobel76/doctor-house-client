import img from '../../../assets/doctor1.jpeg'
const Doctor = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
 <div className='flex gap-5 mx-auto'>
<div className='border-2 p-4 w-[520px]'>
<div className='gap-4 mb-2 rounded-3xl flex'>
 <div>
   <img src={img} className="w-10 rounded-full" />
   </div>
<div>
    <h2>Awlad Hossain</h2>
    <h6>Product Designer</h6>
</div>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut adipisci repellat nisi saepe at quisquam nobis a, illum dolore.`</p>
</div>
        <div className='border-2 p-4 w-[520px]'>
 <div className='gap-4 mb-2 rounded-3xl flex'>
 <div>
   <img src={img} className="w-10 rounded-full" />
   </div>
<div>
    <h2>Awlad Hossain</h2>
    <h6>Product Designer</h6>
</div>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut adipisci repellat nisi saepe at quisquam nobis a, illum dolore.`</p>
 </div>
 </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
 <div className='flex gap-5 mx-auto'>
<div className='border-2 p-4 w-[520px]'>
<div className='gap-4 mb-2 rounded-3xl flex'>
 <div>
   <img src={img} className="w-10 rounded-full" />
   </div>
<div>
    <h2>Awlad Hossain</h2>
    <h6>Product Designer</h6>
</div>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut adipisci repellat nisi saepe at quisquam nobis a, illum dolore.`</p>
</div>
<div className='border-2 p-4 w-[520px]'>
 <div className='gap-4 mb-2 rounded-3xl flex'>
 <div>
   <img src={img} className="w-10 rounded-full" />
   </div>
<div>
    <h2>Awlad Hossain</h2>
    <h6>Product Designer</h6>
</div>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut adipisci repellat nisi saepe at quisquam nobis a, illum dolore.`</p>
 </div>
 </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
 <div className='flex gap-5 mx-auto'>
<div className='border-2 p-4 w-[520px]'>
<div className='gap-4 mb-2 rounded-3xl flex'>
 <div>
   <img src={img} className="w-10 rounded-full" />
   </div>
<div>
    <h2>Awlad Hossain</h2>
    <h6>Product Designer</h6>
</div>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut adipisci repellat nisi saepe at quisquam nobis a, illum dolore.`</p>
</div>
<div className='border-2 p-4 w-[520px]'>
 <div className='gap-4 mb-2 rounded-3xl flex'>
 <div>
   <img src={img} className="w-10 rounded-full" />
   </div>
<div>
    <h2>Awlad Hossain</h2>
    <h6>Product Designer</h6>
</div>
 </div>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut adipisci repellat nisi saepe at quisquam nobis a, illum dolore.`</p>
 </div>
 </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Doctor;