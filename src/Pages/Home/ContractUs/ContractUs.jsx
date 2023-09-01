

const ContractUs = () => {
    return (
        <div className="hero w-[1140px] bg-green-950 ml-8 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-orange-300">Contact With Us</h1>
      <p className="py-6">Sed ut perspiciatis unde omnis iste natus error sit <br></br>voluptatem accusantium doloremque laudantium, totam <br></br> rem aperiam, eaque<br></br> ipsa quae ab illo inve ntore veritatis et quasi.</p>
      <h6>contact: 01781857649</h6>
      <p>kalachadpur-dhaka-1212</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-950">
      <div className="card-body grid grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile</span>
          </label>
          <input type="number" placeholder="mobile number" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Doctor Name</span>
          </label>
          <input type="text" placeholder="doctorName" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Time</span>
          </label>
          <input type="time" placeholder="time" className="input input-bordered" />
        </div>
        <div className="form-control p-2 w-[340px] mr-8 mt-6">
          <button className="btn btn-outline btn-error">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default ContractUs;