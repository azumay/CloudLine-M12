import * as React from 'react';
import Banner from './Queue.jpeg';

export default function Contacte() {
    const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
return (
    <div className="container">
        <div className='row'>
            <div className='col-12 mb-4'>
                <img src={Banner} alt='bannerCloudLine' className='w-100'></img>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <form method="post">
                    <div class="mb-3">
                      <label for="" className="form-label">Nombre y apellidos</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="nombre" />
                      <small id="helpId" className="text-muted">Nombre y apellidos</small>
                    </div>
                    <div class="mb-3">
                      <label for="" className="form-label">Teléfono</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="telefono" />
                      <small id="helpId" className="text-muted">Número de teléfono</small>
                    </div>
                    <div class="mb-3">
                      <label for="" className="form-label">Correo electrónico</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="mail" />
                      <small id="helpId" className="text-muted">Correo electrónico</small>
                    </div>
                    <div class="mb-3">
                      <textarea name="" id="" className="form-control" placeholder="" aria-describedby="motivo contacto" />
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    </div>
)};