import React from 'react';
import '../styles/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes, faChevronDown, faSignOutAlt, faMapMarkerAlt, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import '../styles/NavigationMobile.css';


export const Navbar = () => {
    const btnOpen = () => {
        const panelMobile = document.querySelector('#section-panel-mobile');
        panelMobile.classList.remove('section-panel-mobile-none');
        panelMobile.classList.add('section-panel-mobile-block');
    }

    const btnClose = () => {
        const panelMobile = document.querySelector('#section-panel-mobile');
        panelMobile.classList.remove('section-panel-mobile-block');
        panelMobile.classList.add('section-panel-mobile-none');
    }

    const btnDespliegue = () => {

        const containerOptions = document.querySelector('#containerOptions');

        if(containerOptions.className === 'container-options-none'){

            containerOptions.classList.remove('container-options-none');
            containerOptions.classList.add('container-options'); 

        }else{

            containerOptions.classList.remove('container-options');
            containerOptions.classList.add('container-options-none'); 

        }

    }

    const btnDespliegue2 = () => {

        const containerOptions = document.querySelector('#containerOptions2');

        if(containerOptions.className === 'container-options-none2'){

            containerOptions.classList.remove('container-options-none2');
            containerOptions.classList.add('container-options2'); 

        }else{

            containerOptions.classList.remove('container-options2');
            containerOptions.classList.add('container-options-none2'); 

        }

    }
    return (
        <section className='container-soulcycle-option'>
            <section className='sec-Logo-Soulcycle'>
                <div className='dv-icon-soulcycle'>
                  <button onClick={btnOpen} className='btn-burger'><FontAwesomeIcon id='iconBurguer' icon ={faBars} className='iconBurguer'/></button> 
                  <div>
                    <a href='/'>SOULCYCLE</a>
                  </div>                  
                </div>                
                <button className='btn-book-a-bike-mobile'>Book A Bike</button> 
            </section>


            <section id='section-panel-mobile' className='section-panel-mobile-none'>
        <div className='dv-header-mobile'>
            <div className='dv-icon-title'>
                <button onClick={btnClose}><FontAwesomeIcon  icon ={faTimes}/></button>
                <div className='contsainer-title'>
                    <a href='/'>SOULCYCLE</a>
                </div>
            </div>
        </div><hr />
        <div className='container-option-mobile'>
            <div className='sub-container-option-mobile'>
                <div className='column-container-option-mobile'>
                    <div className='all-options-mobile'>
                        <a href="https://www.soul-cycle.com/new-to-soul/">The Experience</a>
                        <div className='dv-container-acordeon'>
                            <button onClick={btnDespliegue} id='btnDespliegue'><span>Studios</span><FontAwesomeIcon  icon ={faChevronDown}/></button>
                            <div id='containerOptions' className='container-options-none'>
                                <div className='sub-container-options'>
                                    <div className='list-options'>
                                        <ul>
                                            <li><a href="https://www.soul-cycle.com/studios/">Find your Studio</a></li>
                                            <li><a href="https://www.soul-cycle.com/about/#welcome">Learn</a></li>
                                            <li><a href="https://www.soul-cycle.com/supersoul/">SuperSoul</a></li>
                                            <li><a href="https://www.soul-cycle.com/series/">Buy Series</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://www.soul-cycle.com/new-to-soul/">Instructor</a>
                        <div className='dv-container-acordeon'>
                            <button onClick={btnDespliegue2} id='btnDespliegue2'><span>Soul Connected</span><FontAwesomeIcon  icon ={faChevronDown}/></button>
                            <div id='containerOptions2' className='container-options-none2'>
                                <div className='sub-container-options'>
                                    <div className='list-options'>
                                        <ul>
                                            <li><a href="https://www.soul-cycle.com/soulconnected/articles/">What’s New</a></li>
                                            <li><a href="https://www.soul-cycle.com/soulconnected/theme-rides/">Upcoming Theme Rides</a></li>
                                            <li><a href="https://www.soul-cycle.com/soulconnected/refer-a-friend/">Refer a Friend</a></li>
                                            <li><a href="https://www.soul-cycle.com/soulconnected/sustainability/">Sustainability</a></li>
                                            <li><a href="https://www.soul-cycle.com/soulconnected/soulstandard/">Your Safety</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://www.soul-cycle.com/new-to-soul/">At Home Bike</a>
                        <a href="https://www.soul-cycle.com/new-to-soul/">Shop Collections</a>
                        <a href="https://www.soul-cycle.com/new-to-soul/">Log In | Sign Up <FontAwesomeIcon icon ={faSignOutAlt} /> </a>
                    </div>
                </div>
            </div>
        </div >
        <div className='container-footer-mobile'>
            <div className='sub-container-footer-mobile'>
                <div className='dv-container-button'>
                <button><FontAwesomeIcon icon ={faMapMarkerAlt} />NYC<FontAwesomeIcon icon ={faChevronUp}/></button>
                </div>
                <div className='dv-container-title'>
                    <div className='dv-container-btn-title'>
                        <button>book a bike</button>
                    </div>

                </div>

            </div>

        </div>

    </section>
           



            <section className='sec-nav-options'>
                <nav>
                    <ul className='ul-all-options'>
                        <li> <a href="https://www.soul-cycle.com/new-to-soul/">The Experiencie</a></li>
                        <li><a href="https://www.soul-cycle.com/studios/">Studios</a>
                            <ul className='ul-sub-studio'>
                                <li><a href="https://www.soul-cycle.com/studios/">Find your Studio</a></li>
                                <li><a href="https://www.soul-cycle.com/studios/">Find your Studio</a></li>
                                <li><a href="https://www.soul-cycle.com/studios/">Find your Studio</a></li>
                                <li><a href="https://www.soul-cycle.com/studios/">Find your Studio</a></li>
                            </ul>
                        </li>
                        <li><a href="https://www.soul-cycle.com/instructors/">Instructors</a></li>
                        <li><a href="https://www.soul-cycle.com/soulconnected/">Soul Connected</a></li>
                        <li><a href="https://www.equinoxplus.com/bike?utm_medium=web&utm_source=soulcycle&utm_campaign=BIKE_PM_WWW_SC_ACQUI_MOFU_PRT_BK_SC-LP-Visit-All_PRS_USxx_XXXX_XWBC_SC_Nav-AtHome-X_DIS">At Home Bike</a></li>
                        <li><a href="https://shop.soul-cycle.com/us/en/home">Shop Collection</a></li>
                    </ul>
                </nav>

            </section>
        </section>
    )
}
