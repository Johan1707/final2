import { useState, useEffect } from 'react'

import { useCollections } from '../hooks'
import { Card } from '../components'

export const HomePage = () => {
    const [products, setProducts] = useState([])
    const { onGetDocuments, mapDocs } = useCollections()

    useEffect(() => {
        return onGetDocuments('products', (querySnapshot) => {
          const data = mapDocs(querySnapshot)
          setProducts(data)
        })
      }, [])

    return (
        <div className='row'>
            {products.map(product =>
                <div className='col-sm-10 col-md-4 col-lg-3' key={product.id}>
                    <Card id={product.id} img={product.url} name={product.name} price={product.price} />
                </div>
            )}
        </div>
    )
}