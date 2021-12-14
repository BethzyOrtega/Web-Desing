import { useState } from 'react';
import '../styles/Footer.css';
import logo from '../imagenes/captura.jpg';
import logo2 from '../imagenes/icon-circle.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,  faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';



export const Footer = () => {

    const [email, setEmail] = useState({
        email:'',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setEmail({
            ...email,
            [e.target.name]: e.target.value,
        })
    }

    const btnSend = () => {    
        const spanMsgError = document.querySelector('#span-msg-error');
        if(email.email === ''){
            spanMsgError.classList.remove('span-error-none');
            spanMsgError.classList.add('span-error-block')
        }

    };

    return (
        <section className='container-footer'>
            <div className='container-text-images'>
                <div className='container-sub-text-images'>
                    <div className='dv-txt-imgs'>
                        <div className='dv-sub-txt-imgs'>
                            <div className='colum-dv-text'>
                                <div className='first-column'>
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href="https://www.soul-cycle.com/our-story/">Our story</a></li>
                                        <li><a href="https://www.soul-cycle.com/careers/">Careers</a></li>
                                        <li><a href="https://www.soul-cycle.com/philanthropy/">Philanthropy</a></li>
                                    </ul>
                                </div>
                                <div className='first-column'>
                                    <h4>HELP</h4>
                                    <ul>
                                        <li><a href="https://www.soul-cycle.com/faq">FAQ</a></li>
                                        <li><a href="https://www.soul-cycle.com/legal/terms-and-conditions/">Terms & Conditions</a></li>
                                        <li><a href="https://www.soul-cycle.com/legal/privacy-policy/">Privacy Policy</a></li>
                                        <li><a href="https://www.soul-cycle.com/legal/privacy-policy/#shine-the-light">California Privacy</a></li>
                                        <li><a href="https://www.soul-cycle.com/legal/privacy-policy/#shine-the-light">California Notice of Collection</a></li>
                                        <li><a href="https://www.soul-cycle.com/legal/privacy-policy/#notice-of-collection">California Privacy</a></li>
                                        <li><a href="https://www.soul-cycle.com/legal/privacy-policy/#right-to-opt-out">Do Not Sell My Personal Information</a></li>
                                        <li><a href="https://www.soul-cycle.com/legal/childrens-privacy/">Children’s Privacy</a></li>
                                        <li><a href="mailto:yoursoulmatters@soul-cycle.com">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className='first-column'>
                                    <h4>ACCOUNT / SHOP</h4>
                                    <ul>
                                        <li><a href="https://www.soul-cycle.com/signin/">Sign In</a></li>
                                        <li><a href="https://www.buyatab.com/custom/soulcycle/?page=landing">Purchase Gift Card</a></li>
                                        <li><a href="https://shop.soul-cycle.com/us/en/gift-card-balance">Gift Card Balance</a></li>
                                        <li><a href="https://www.soul-cycle.com/signin/?login_redirect=%2Fprofile%2Fhistory%2Fpurchases%2F">Purchase History</a></li>
                                        <li><a href="https://www.soul-cycle.com/faq#returns">Returns</a></li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>
                        <div className='dv-colum2-txt-logo'>
                            <div className='dv-container-logo-soulcycle'>
                                <div className='logo'>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                           <div className='logo-form'>
                               <div className='dv-title-icons'>
                                   <div className='dv-sub-title-icons'>
                                       <p>TAP IT BACK</p>
                                       <div className='icons'>
                                           <a href="https://www.instagram.com/soulcycle/"><FontAwesomeIcon icon ={faInstagram} className='iconInstagram'></FontAwesomeIcon></a>
                                           <a href="https://www.facebook.com/SoulCycleInc/"><FontAwesomeIcon icon ={faFacebook} className='iconFB'></FontAwesomeIcon></a>
                                           <a href="https://twitter.com/soulcycle"><FontAwesomeIcon icon ={faTwitter} className='iconTwitter'></FontAwesomeIcon></a>
                                       </div>
                                   </div>
                               </div>
                               <div className='title-form'>
                                   <p>BE THE FIRST TO KNOW</p>
                                   <div className='dv-btn-inpt'>                                  
                                     <div className='dv-input'>
                                       <input onChange={handleChange} name='email' type="email" placeholder='Your email address' />
                                     </div>
                                     <button onClick={btnSend} id='btnSend'><FontAwesomeIcon className='icon-faChevronRight' icon ={faChevronRight} /></button>
                                    </div>
                                    <span id='span-msg-error' className='span-error-none'>Error: Invalid email address</span>
                               </div>
                           </div> 
                           <div className='container-copyrigth'>
                               <div className='sub-container-copyrigth'>
                                   <div className='dv-copyrigth'>
                                       <p className='p-firts'>Copyright © 2021 SoulCycle</p>
                                       <p className='p-second'>SoulCycle Inc. is a corporation registered in Delaware, USA with its headquarters at 609 Greenwich Street, New York, NY 10014</p>
                                   </div>
                                   <img className='icon-circle' src={logo2} alt="" />
                               </div>

                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
