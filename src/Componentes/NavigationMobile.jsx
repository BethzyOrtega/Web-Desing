// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimes, faChevronDown, faSignOutAlt, faMapMarkerAlt, faChevronUp} from '@fortawesome/free-solid-svg-icons';
// import '../styles/NavigationMobile.css';

// export const NavigationMobile = () => {
//     const btnClose = () => {
//         const panelMobile = document.querySelector('#section-panel-mobile');
//         panelMobile.classList.remove('section-panel-mobile-block');
//         panelMobile.classList.add('section-panel-mobile-none');
//     }
//     return (
        
//         <section id='section-panel-mobile' className='section-panel-mobile-none'>
//         <div className='dv-header-mobile'>
//             <div className='dv-icon-title'>
//                 <button onClick={btnClose}><FontAwesomeIcon  icon ={faTimes}/></button>
//                 <div className='contsainer-title'>
//                     <a href="">SOULCYCLE</a>
//                 </div>
//             </div>
//         </div><hr />
//         <div className='container-option-mobile'>
//             <div className='sub-container-option-mobile'>
//                 <div className='column-container-option-mobile'>
//                     <div className='all-options-mobile'>
//                         <a href="https://www.soul-cycle.com/new-to-soul/">The Experience</a>
//                         <div className='dv-container-acordeon'>
//                             <button><span>Studios</span><FontAwesomeIcon  icon ={faChevronDown}/></button>
//                         </div>
//                         <a href="https://www.soul-cycle.com/new-to-soul/">Instructor</a>
//                         <div className='dv-container-acordeon'>
//                             <button><span>Soul Connected</span><FontAwesomeIcon  icon ={faChevronDown}/></button>
//                         </div>
//                         <a href="https://www.soul-cycle.com/new-to-soul/">At Home Bike</a>
//                         <a href="https://www.soul-cycle.com/new-to-soul/">Shop Collections</a>
//                         <a href="https://www.soul-cycle.com/new-to-soul/">Log In | Sign Up <FontAwesomeIcon icon ={faSignOutAlt} /> </a>
//                     </div>
//                 </div>
//             </div>
//         </div >
//         <div className='container-footer-mobile'>
//             <div className='sub-container-footer-mobile'>
//                 <div className='dv-container-button'>
//                 <button><FontAwesomeIcon icon ={faMapMarkerAlt} />NYC<FontAwesomeIcon icon ={faChevronUp}/></button>
//                 </div>
//                 <div className='dv-container-title'>
//                     <div className='dv-container-btn-title'>
//                         <button>book a bike</button>
//                     </div>

//                 </div>

//             </div>

//         </div>

//     </section>
//     )
// }
