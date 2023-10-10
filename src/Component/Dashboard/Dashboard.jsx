import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import icon from '../../assets/mop.png'

const Dashboard = () => {
    return (
        <>
        <Navbar></Navbar>
           <div className="drawer lg:drawer-open  mb-7">
     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
     <div className="drawer-content flex flex-col  ">
       
       <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ml-72 w-24 mt-5  lg:hidden">Open/close drawer</label>
     
      <Outlet></Outlet>
     </div> 
     
     <div className="w-60 drawer-side my-6 ml-4  rounded-lg">
       <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
       <ul className="menu p-7 h-full bg-base-200 text-base-content">
        {

          <>
           <div className='p-4 mb-10'>
            <img className='w-16 h-16 mx-auto mb-3 rounded-full' src={icon} alt="" />
            <p className='text-center font-bold text-xl'>Irfan Ali</p>
           </div>
           
          <Link to={'/dashboard/userdashboard'}><button className="btn btn-outline btn-accent mb-5 w-36">DashBoard</button></Link>
          <Link to={'/dashboard/adminmanageuser'}><button className="btn btn-outline btn-accent mb-5 w-36">User List</button></Link>
          <Link to={'/dashboard/adminmanageuser'}><button className="btn btn-outline btn-accent mb-5 w-36">Verify User</button></Link> 
          <Link to={'/dashboard/adminmanageuser'}><button className="btn btn-outline btn-accent mb-5 w-36">User Monitor</button></Link></> 
        }
        
       </ul>
     
     </div>
   </div>
   <Footer></Footer>
   </>
    );
};

export default Dashboard;