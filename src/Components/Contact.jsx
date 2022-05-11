import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <>


            <div className='card bg-warning p-3 m-2 mx-auto w-100'>

                <h3 className="btn bg-success text-white"> Contact page</h3>

                <div className="col-12 d-flex mx-auto w-50 justify-content-center">

                    <NavLink to="/contact/menu" className="btn-danger w-25 d-flex justify-content-center  m-2">
                        MENU
                    </NavLink>

                    <NavLink to="/contact/menutop" className="btn-danger w-25 m-2 d-flex justify-content-center">
                        MENU TOP
                    </NavLink>

                </div>

                <div className="col-12 d-flex justify-content-center ">
                    <Outlet />
                </div>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, necessitatibus pariatur maiores quo atque labore,
                    illo repellendus voluptatem iure ratione assumenda aliquid
                    placeat magnam similique maxime, alias laboriosam vero sequi
                    natus omnis dignissimos aliquam blanditiis! Eveniet consequuntur
                    necessitatibus, doloremque, dolor aut fugit perferendis voluptas
                    animi culpa cupiditate, nam eaque deleniti?
                </p>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, necessitatibus pariatur maiores quo atque labore,
                    illo repellendus voluptatem iure ratione assumenda aliquid
                    placeat magnam similique maxime, alias laboriosam vero sequi
                    natus omnis dignissimos aliquam blanditiis! Eveniet consequuntur
                    necessitatibus, doloremque, dolor aut fugit perferendis voluptas
                    animi culpa cupiditate, nam eaque deleniti?
                </p>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, necessitatibus pariatur maiores quo atque labore,
                    illo repellendus voluptatem iure ratione assumenda aliquid
                    placeat magnam similique maxime, alias laboriosam vero sequi
                    natus omnis dignissimos aliquam blanditiis! Eveniet consequuntur
                    necessitatibus, doloremque, dolor aut fugit perferendis voluptas
                    animi culpa cupiditate, nam eaque deleniti?
                </p>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, necessitatibus pariatur maiores quo atque labore,
                    illo repellendus voluptatem iure ratione assumenda aliquid
                    placeat magnam similique maxime, alias laboriosam vero sequi
                    natus omnis dignissimos aliquam blanditiis! Eveniet consequuntur
                    necessitatibus, doloremque, dolor aut fugit perferendis voluptas
                    animi culpa cupiditate, nam eaque deleniti?
                </p>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, necessitatibus pariatur maiores quo atque labore,
                    illo repellendus voluptatem iure ratione assumenda aliquid
                    placeat magnam similique maxime, alias laboriosam vero sequi
                    natus omnis dignissimos aliquam blanditiis! Eveniet consequuntur
                    necessitatibus, doloremque, dolor aut fugit perferendis voluptas
                    animi culpa cupiditate, nam eaque deleniti?
                </p>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, necessitatibus pariatur maiores quo atque labore,
                    illo repellendus voluptatem iure ratione assumenda aliquid
                    placeat magnam similique maxime, alias laboriosam vero sequi
                    natus omnis dignissimos aliquam blanditiis! Eveniet consequuntur
                    necessitatibus, doloremque, dolor aut fugit perferendis voluptas
                    animi culpa cupiditate, nam eaque deleniti?
                </p>

            </div>

        </>
    );
};

export default Contact;