import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const InfoCard = ({ id = 0, name = 'Untitled', species = 'Unknown', image = 'https://placehold.co/400x600', status = 'Unknown' }) => {
    return (
        <div className="card mb-3 position-relative" id='cardInfo'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Species: {species}</p>
                        <p className="card-text"><small className="text-body-secondary">Status: {status}</small></p>
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={"#characterModal"+id}>
                            Ver Detalle
                        </button>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-0 end-0">
                <Link className="badge bg-primary mx-1" to={`/${id}/detail`} title="ver mas"><i className="bi bi-eye"></i></Link>
            </div>
        </div>
    )
}

InfoCard.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.number
}

export default InfoCard