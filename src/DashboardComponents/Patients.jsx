import React from 'react';
import PatientHeader from './PatientHeader';
import PatientDashboardBody from './PatientDashboardBody';

const Patients = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full mx-auto mb-8'>  <PatientHeader></PatientHeader></div>
        <PatientDashboardBody></PatientDashboardBody>

       
    </div>
  );
};

export default Patients;