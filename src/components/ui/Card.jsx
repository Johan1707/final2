import { Link } from 'react-router-dom'

export const Card = ({ id, img, name, price }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={name} style={{ objectFit: 'cover', width: '280px', height: '160px' }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <Link to={`/product/${id}`} className="btn btn-primary">Ver más...</Link>
            </div>
        </div>
    )
}