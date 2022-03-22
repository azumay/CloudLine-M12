
import * as React from 'react';
import CodiBloc from '../components/CodiBloc/CodiBloc';
import Banner from './Queue.png';
import Qr from './QR.png';


export default function Inici(props) {
    const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-4'>
                    <img src={Banner} alt='bannerCloudLine'></img>
                </div>
            </div>   
            <div className='row'>
                <div className='col-12'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <h3>Ventajas de las colas virtuales</h3>
                            </div>
                            <div className='col-6'>
                                <div className='card mb-3'>
                                    <div className='card-body'>
                                        <img width='200px' src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                        <h5 className='card-title'>
                                            Evitar aglomeraciones
                                        </h5>
                                        <p className='card-text'>
                                            Las colas virtuales evitan aglomeraciones en los locales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='card mb-3'>
                                    <div className='card-body'>
                                    <img width='200px' src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                        <h5 className='card-title'>
                                            Mejor gestión
                                        </h5>
                                        <p className='card-text'>
                                            Es más fácil gestionar a los clientes y sus tiempos de espera si se tiene el control sobre cuánto tiempo se va a dar a cada uno.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <img width='200px' src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                        <h5 className='card-title'>
                                            Menos estrés
                                        </h5>
                                        <p className='card-text'>
                                            El hecho de que se evite la acumulación de gente causa menos estrés en los empleados y los clientes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                                <div className='col-6'>
                                    <div className='card'>
                                        <div className='card-body'>
                                        <img width='200px' src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                            <h5 className='card-title'>
                                                Reducción del tiempo de espera
                                            </h5>
                                            <p className='card-text'>
                                                El hecho de que no haya mucha gente en el local ayuda a que todo vaya más rápido, así que los clientes tienen que esperar menos a su turno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}