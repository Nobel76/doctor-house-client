import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Doctor.css'
import { useState } from 'react';
import { useEffect } from 'react';
const OurDoctors = () => {
    const [doctorData, setDoctorData] = useState([]);

    useEffect(() =>{
        fetch('docInfo.json')
        .then(res => res.json())
        .then(data =>{
            setDoctorData(data)
        })
    }, [])
    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          const starClass = i <= rating ? 'star-filled' : 'star-empty';
          stars.push(<FontAwesomeIcon key={i} icon={faStar} className={starClass} />);
        }
        return stars;
      };
    return (<>
<div className='mt-12 text-center'>
    <h2 className='text-orange-300 text-3xl font-bold'>Our Expert Doctors</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quae modi sint facere dolorum repudiandae eveniet, inventore similique!</p>
</div>

        <div className='grid grid-cols-3 items-center mt-6 ml-8 p-12'>
      {doctorData.map((doctor, index) => (
        <div key={index}>
          <img className='rounded-lg' src={doctor.imageURL} alt={`Dr. ${doctor.doctorName}`} />
          <h2 className='text-white text-xl'>{doctor.doctorName}</h2>
          <p>{doctor.location}</p>
          <div className="rating">
            {renderRatingStars(doctor.rating)}
          </div>
          <p>Category: {doctor.doctorCategory}</p>
          <p>Time: {doctor.time}</p>
          <button className='btn btn-outline btn-error'>View Profile</button>
        </div>
      ))}
    </div>

    </>
    );
};

export default OurDoctors;