import * as React from 'react';
import Cola from './img/cola.svg';
import Agenda from './img/agenda.svg';
import Empleado from './img/empleado.svg'
import { urlsApp } from './../constants/Rutas';
import { Route, Routes } from 'react-router-dom';

export default function Serveis() {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Serveis</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='card'>
                        <img height='250px' src={Cola} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Cola virtual
                            </h5>
                            <p className='card-text'>
                               Perfecta para evitar aglomeraciones y tener el control sobre los tiempos de espera en tu local. Contribuye a reducir el número de presonas presentes a la vez. <a href={urlsApp.AboutUs}>Más información.</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='card'>
                        <img height='250px' src={Agenda} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Agenda
                            </h5>
                            <p className='card-text'>
                               Planificación de turnos, eventos y más. Para tenerlo todo organizado en una misma aplicación, y con acceso fácil. Personalizable según las necesidades de cada empresa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='card'>
                        <img height='250px' src={Empleado} className='img-card-top rounded' alt='imagen identificativa ventaja' />
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Gestión de empleados
                            </h5>
                            <p className='card-text'>
                               Planificación de los turnos de la empresa, gestión de los sueldos y extras, contabilización de horas trabajadas. Fácilmente hecho a medida según las necesidades de cada empresa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

