import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar navbar-info bg-info'>


            <ul className='d-flex w-25 fw-bold  justify-content-around list-unstyled'>

                <li> <NavLink className={({ isActive }) => isActive ? 'activ' : ''} to="/"> Home </NavLink> </li>
                <li> <NavLink className={({ isActive }) => isActive ? 'activ' : ''} to="/about"> About </NavLink> </li>
                <li> <NavLink className={({ isActive }) => isActive ? 'activ' : ''} to="/contact"> Contact </NavLink> </li>

            </ul>

        </div>
    );
};

export default Navbar;