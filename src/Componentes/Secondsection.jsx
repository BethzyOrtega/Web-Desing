import React from 'react';
import '../styles/Secondsection.css';

export const Secondsection = () => {
    return (
        <section className='container-text-cards'>
            <h2>More Ways To Find Your Soul</h2>
            <section className='container-cards'>
                <div className='container-cards-images'>
                    <div className='first-image'>
                        <div className='dv-title-first-image'>
                            <h3>SEE YOU ON A BIKE</h3>
                            <div className='dv-scndTitle-first-image'>
                                <p>Come ride</p>
                            </div>
                        </div>

                    </div>
                    <div className='second-image'>
                        <div className='dv-title-first-image'>
                            <h3>GIVE THE GIFT OF SOUL</h3>
                            <div className='dv-scndTitle-first-image'>
                                <p>Get a gift card</p>
                            </div>
                        </div>
                    </div>
                    <div className='third-image'>
                        <div className='dv-title-first-image'>
                            <h3>THE SOULCYCLE AT-HOME BIKE</h3>
                            <div className='dv-scndTitle-first-image'>
                                <p>Take $600 off.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </section>
    )
}
