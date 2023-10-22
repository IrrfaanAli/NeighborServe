import icon from '../../assets/icon.png'

const Navbar = () => {
    return (
        <div className='border border-primary'>
        <div className="navbar bg-base-100">
<div className="navbar-start">
 <div className="dropdown">
   <label tabIndex={0} className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
   <li className='text-xl font-mono'><a>Services</a></li>
     <li className='text-xl font-mono'><a>Sign up</a></li>
   <li className='text-xl font-mono'><a>Log in</a></li>
   </ul>
 </div>

     <div>
     <img className='w-42 h-12' src={icon} alt="" />
     </div>
 
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal px-1">
   <li className='text-xl font-mono'><a>Services</a></li>
   <li className='text-xl font-mono'><a>Sign Up</a></li>
   <li className='text-xl font-mono'><a>Log In</a></li>
 </ul>
</div>
<div className="navbar-end">
 <a className="bg-primary font-mono text-white p-1 lg:p-2 lg:text-xl rounded-md">Become a Provider</a>
</div>
</div> 
     </div>
    );
};

export default Navbar;