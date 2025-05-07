import { Route, Routes } from 'react-router-dom';

import DoctorDashboard from '../Pages/Doctor/DoctorDashboard';
import { DoctorLayout } from '../layout/DoctorLayout';
import Homepage from '../Pages/Common/Homepage';
import { Layout } from '../layout/Layout';
import NotFound from '../Pages/Common/NotFound';
import PatientDashboard from '../Pages/Patient/PatientDashboard';
import { PatientLayout } from '../layout/PatientLayout';
import React from 'react';

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path= "/" element={<Layout />}>

               <Route index element={<Homepage />} />
               <Route path = "*" element = {<NotFound/>}/>
      </Route>


      <Route element={<DoctorLayout/>}>
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Route>

      
      <Route element={<PatientLayout/>}>

            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            
      </Route>
       
    </Routes>
  );
};

export default AppRoutes;
