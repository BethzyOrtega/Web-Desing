import React from 'react';
import '../styles/Thirdsection.css';
import appStore from '../imagenes/app_store.jpg';
import playStore from '../imagenes/google_play.jpg';
import imageDestok from '../imagenes/image-destok.png';

export const Thirdsection = () => {
    return (
        <section className='container-third-section'>
            <div className='dv-text-image'>
                <div className='dv-sub-text-image'>
                    <div className='container-text'>
                        <h3>SoulCycle on the go</h3>
                        <div className='dv-second-text-promo'>
                            <span className='span-first'>Download the SoulCycle app for</span><br/>
                            <span className='span-first'>iPhone and Android</span>
                            <span className='span-second'>NEW</span>
                        </div>
                        <div className='section-button'>
                            <a href="https://apps.apple.com/us/app/soulcycle-indoor-cycling/id966733747"><img className='img-appStore' src={appStore} alt="" /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.soul_cycle"><img className='img-playStore' src={playStore} alt="" /></a>
                        </div>                        
                    </div>
                    <div className='container-image'>
                        <img className='img-Destok-telefono' src={imageDestok} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
