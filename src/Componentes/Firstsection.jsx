import React from 'react';
import { Topnavbar } from './Topnavbar';
import { Navbar } from './Navbar';
import { Subsection } from './Subsection';
import '../styles/Navigation.css';


export const Firstsection = () => {
    window.addEventListener('scroll', () => {
        const allNavbar = document.querySelector('#allNavbar');        
        allNavbar.classList.toggle('abajo', window.scrollY>1.5);
    })
    return (
        <>
        <section className='section-bg-first-section'>
            <section id='allNavbar'>
            <Topnavbar></Topnavbar>
            <Navbar></Navbar>
            </section>
           
           <Subsection></Subsection>
        </section>        
        </>
    )
}
