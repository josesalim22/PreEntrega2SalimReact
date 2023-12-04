import './ItemDetailContainer.css';
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => { 
    const docRef = doc(db, 'products', itemId)
    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProduct(productAdapted)
      })
      .catch(error => {
        console.error(error)
      })
  }, [itemId])


  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer