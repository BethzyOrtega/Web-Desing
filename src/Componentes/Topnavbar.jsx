import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

import '../styles/Navigation.css';


export const Topnavbar = () => {

  const ulRef = useRef(null);

  const btnNYC = () => {
    const etiqueta =  document.querySelector('#list-NYC');  
    const iconFlecha =  document.querySelector('#iconFlecha');

    if(etiqueta.className === 'list-NYC-none'){
      etiqueta.classList.remove('list-NYC-none');
      etiqueta.classList.add('list-NYC'); 

      iconFlecha.classList.remove('iconFlecha');
      iconFlecha.classList.add('iconFlecha-up');

    } else {
      etiqueta.classList.remove('list-NYC');
      etiqueta.classList.add('list-NYC-none'); 

      iconFlecha.classList.remove('iconFlecha-up');
      iconFlecha.classList.add('iconFlecha');
    }
  }

  const btnListBookABike = () => {
    const listBookABike =  document.querySelector('#list-book-a-bike');  

    if(listBookABike.className === 'dv-list-book-a-bike-none'){
      listBookABike.classList.remove('dv-list-book-a-bike-none');
      listBookABike.classList.add('dv-list-book-a-bike'); 

    } else {
      listBookABike.classList.remove('dv-list-book-a-bike');
      listBookABike.classList.add('dv-list-book-a-bike-none'); 


    }


  }
    return (
        <header className='Nav-Top'>
           <div className='container-nav'>
               <div className='title-nav'>
                 <a href="https://www.soul-cycle.com/new-to-soul/">New to Sould?</a>                
               </div>
               <div className='dvNy'>
                   <div className='combobox'>
                     <button onClick={btnNYC} className='btn-NYC'><FontAwesomeIcon icon ={faMapMarkerAlt} className='iconMap'/>NYC<FontAwesomeIcon id='iconFlecha' icon ={faChevronDown} className='iconFlecha'/></button>
                     <ul id='list-NYC' ref={ulRef} className='list-NYC-none'>
                       <h4>United States</h4>
                       <li><button>Palm Beach</button></li>
                       <li><button>NYC</button></li>
                       <li><button>Southern California</button></li>
                       <li><button>Las Vegas</button></li>
                       <li><button>San Diego</button></li>
                       <li><button>Denver</button></li>
                       <li><button>Bay Area</button></li>
                       <li><button>Hamptons</button></li>
                       <li><button>Connecticut</button></li>
                       <li><button>New Jersey</button></li>
                       <li><button>Long Island</button></li>
                       <li><button>Westchester</button></li>
                       <li><button>Massachusetts</button></li>
                       <li><button>DC</button></li>
                       <li><button>Miami</button></li>
                       <li><button>Chicago</button></li>
                       <li><button>Maryland</button></li>
                       <li><button>Pennsylvania</button></li>
                       <li><button>Texas</button></li>
                       <li><button>Pacific Northwest</button></li>
                       <li><button>Atlanta</button></li>
                       <li><button>San Francisco</button></li>
                       <li><button>Virginia</button></li>
                       <li><button>Tampa</button></li>
                       <li><button>Ann Arbor</button></li>
                       <h4>United States</h4>
                       <li><button>Toronto</button></li>
                       <li><button>Vancouver</button></li>
                       <h4>United States</h4>
                       <li><button>London</button></li>
                     </ul>
                   </div>
                </div>
                <div className='signIn'>
                     <a href="https://www.soul-cycle.com/signin/">Sign in</a>   
                </div>
                <div className='dv-bookabike'>
                    <div className='prueba'>
                    <button onClick={btnListBookABike} className='btn-listBox'>Book A Bike</button> 
                    <div id='list-book-a-bike' className='dv-list-book-a-bike-none'>
                      <h4>NYC</h4>
                      <ul>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">19th Street - Vaccine Required</a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">Brooklyn Heights - Vaccine Required </a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">Bryant Park - Reopening 2022</a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">Chelsea - Studio Stream - Vaccine Required</a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">East 54th Street - Reopening 2022</a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">East 83rd Street - Vaccine Required</a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">Financial District - Vaccine Required </a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">Grand Central - Reopening 2022</a></li>
                        <li><a href="https://www.soul-cycle.com/find-a-class/studio/30/">Hudson Yards - Vaccine Required</a></li>
                        
                      </ul>
                      <div className='dv-by-classes'>
                        <a href="https://www.soul-cycle.com/series/">By Classes</a>
                      </div>
                    </div>  
                    </div>                     
                </div>  
           </div>
        </header>
    )
}
