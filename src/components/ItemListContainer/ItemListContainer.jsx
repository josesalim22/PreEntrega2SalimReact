import './ItemListContainer.css';
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return <p>Cargando...</p>;
      }

    if (products.length === 0) {
        return <h2 className='error-message'>No hay productos en la categoría especificada.</h2>;
      }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>


    )
}

export default ItemListContainer