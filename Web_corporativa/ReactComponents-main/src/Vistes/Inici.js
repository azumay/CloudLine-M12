
import * as React from 'react';
import CodiBloc from '../components/CodiBloc/CodiBloc';
import Banner from './img/Queue.jpeg';
import Qr from './img/QR.png';



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
                    <img src={Banner} alt='bannerCloudLine' className='w-100'></img>
                </div>
            </div>   
            <div className='row'>
                <div className='col-12'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <h3>Ventajas de las colas virtuales</h3>
                            </div>
                            <div className='col-12 col-xl-6 mb-3'>
                                <div className='card h-100'>
                                    <div className='card-body'>
                                        <img src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                        <h5 className='card-title'>
                                            Evitar aglomeraciones
                                        </h5>
                                        <p className='card-text'>
                                            Las colas virtuales evitan aglomeraciones en los locales. Eso conlleva una serie de ventajas sobre cuando la espera para el servicio es en el propio local.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-xl-6 mb-3'>
                                <div className='card h-100'>
                                    <div className='card-body'>
                                    <img src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                        <h5 className='card-title'>
                                            Mejor gestión
                                        </h5>
                                        <p className='card-text'>
                                            Es más fácil gestionar los tiempos de espera y cuánto rato se estará con cada cliente si no están todos en un mismo sitio. Poder hacer otras cosas mientras no llega el turno ayuda a que no haya demasiada gente en un solo lugar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-xl-6 mb-3'>
                                <div className='card h-100'>
                                    <div className='card-body'>
                                    <img src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                        <h5 className='card-title'>
                                            Menos estrés
                                        </h5>
                                        <p className='card-text'>
                                            Que alguien esté esperando sin poder hacer nada más y sin que llegue su turno suele ser una experiencia estresante. Lo es para el propio cliente, que pierde mucho tiempo esperando, uno que podría emplear en otras actividades. También lo es para los empleados del lugar, ya que ese cliente estresado suele exteriorizarlo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-xl-6 mb-3'>
                                <div className='card h-100'>
                                    <div className='card-body'>
                                    <img src={Qr} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                                        <h5 className='card-title'>
                                            Reducción del tiempo de espera
                                        </h5>
                                        <p className='card-text'>
                                            Se puede llegar a todos sitios mucho más rápido, sin que haya mucha gente que interrumpa al empleado para preguntar cuándo llegará su turno o dudas que pueden ser resueltas en otro momento.
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