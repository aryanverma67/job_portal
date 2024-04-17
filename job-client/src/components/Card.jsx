import React from 'react';
import { Link } from 'react-router-dom';
import "../app.css"
import { MdCurrencyRupee } from "react-icons/md";

import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from "react-icons/fi"
import { GiProgression } from "react-icons/gi";


const Card = ({ data }) => {
    const {_id,companyName,companyLogo,jobTitle,minPrice,maxPrice,salaryType,jobLocation,employmentType,postingDate,description,experienceLevel} = data;

    return (
 <section className='card '>
    <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt="" />
        
        <div>
            <h4 className='text-primary mb-1'>{companyName}</h4>
            <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
          <div className='text-primary/70 text-base flex gap-3 flex-wrap mb-2'>
           
          <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
          <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
          <span className='flex items-center gap-2'><MdCurrencyRupee/>{minPrice}-{maxPrice}</span>
          <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
          <span className='flex items-center gap-2'><GiProgression/>{experienceLevel}</span>

          </div>
          {/* <p className='text-base text-primary/70'>{description}</p> */}

        </div>
    </Link>

 </section>
  );
};

export default Card;
