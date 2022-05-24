import * as React from 'react';
import Cola from './img/Cola_tabla.png';

export default function AboutUs() {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Cola virtual</h1>
                </div>
                <div className='col-12 mt-3'>
                    <div className='img-tabla'>
                        <div><img src={Cola} /></div>
                        <div className='ps-3'>
                            <p>
                                Este sistema de cola virtual es práctico para evitar las aglomeraciones y que los clientes puedan hacer algo productivo mientras están esperando tanda. Reduce notablemente el estrés para todos los que estén en el lugar, no solamente para los trabajadores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
