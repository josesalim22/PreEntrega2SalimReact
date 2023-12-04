import './ItemDetailContainer.css';
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    const docRef = doc(db, 'products', itemId)
    getDoc(docRef)
      .then(response => {
        if (response.exists()) {

          const data = response.data()
          const productAdapted = { id: response.id, ...data }
          setProduct(productAdapted)
        } else {
          console.error(`El producto con ID ${itemId} no existe.`)
        }

      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <h2 className='error-message'>El producto no existe</h2>;
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer