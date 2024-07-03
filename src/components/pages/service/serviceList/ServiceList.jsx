import React, { useState } from 'react'
import ServiceItem from '../serviceItem/ServiceItem';
import serviceDB from "../../../../db/servicesDb.json";

const ServiceList = () => {
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-between">
                {serviceDB.map((servicio) => (
                    <ServiceItem
                        key={servicio.id}
                        terapia={servicio.terapia}
                        tiempo={servicio.tiempo}
                        descripcion={servicio.descripcion}
                        precioLista={servicio.precioLista}
                        precioEfectivo={servicio.precioEfectivo}
                        combo={servicio.Combo}
                    />
                ))}
            </div>
        </div>
    );
}

export default ServiceList