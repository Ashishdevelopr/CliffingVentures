import React from 'react';
import './Team.css';
import { useNavigate } from 'react-router-dom';

const Team = () => {
    const navigate = useNavigate()
    return (
        <div className='team-back p-5'>
            <div className='row'>
                    <div className='col-md-12 py-2 mb-4'>
                        <h5 className='page-title'>Our Experts</h5>
                        <h2 className="lh-1 page-subtitle display-5 fw-bold d-flex justify-content-center text-white">Building Dreams Together</h2>
                        <p className='page-title-desc d-flex justify-content-center text-white'>Meet the dedicated individuals who bring passion, expertise, and innovation.</p>
                    </div>
                </div>
            <div className='static-image mb-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='team-text'>
                                <h1 className='display-2 fw-bold text-white'>OUR TEAM</h1>
                                <button type='button' className='button-primary px-4 me-md-2' onClick={()=>{navigate('/team-members')}}>
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
