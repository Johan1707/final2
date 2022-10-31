import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useCollections } from '../hooks'

const useProductQuantity = () => {
    const [amount, setAmount] = useState(1)

    const increase = (totalQuantity) => {
        if(amount >= totalQuantity) return
        setAmount(amount + 1)
    }

    const decrease = () => {
        if(amount <= 1) return
        setAmount(amount - 1)
    }

    return {
        amount,
        increase,
        decrease
    }
}

export const DetailPage = () => {
    const { idProduct } = useParams()
    const [product, setProduct] = useState(null)
    const { one } = useCollections()
    const { amount, increase, decrease } = useProductQuantity()

    useEffect(() => {
        const getOne = async () => {
            const data = await one('products', idProduct)
            if(!data) return
            setProduct(data)
        }

        getOne()
    }, [idProduct, amount])

    return (
        <div className='container'>
            { 
                product ? 
                    <div className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={product.url} className="img-fluid rounded-start" alt={product.name} />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <div>
                                    <button onClick={decrease}>-</button>
                                    <span>{amount}</span>
                                    <button onClick={() => {increase(product.amount)}}>+</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                : 
                    <h1>No hay datos</h1> 
            }
        </div>
    )
}