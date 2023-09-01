

const Section = () => {
    return (
        <div className=" mt-12 grid grid-cols-3">
            <div className="card w-96 bg-green-950 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Opening Hours</h2>
    <h6>Open 9.00 am to 5.00pm Everyday</h6>
   
  </div>
</div>
<div className="card w-96 bg-orange-400 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Our Location</h2>
    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
  </div>
</div>
<div className="card w-96 bg-green-950 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Contact Us</h2>
    <p>+88 01750 00 00 00</p>
  </div>
</div>
        </div>
    );
};

export default Section;