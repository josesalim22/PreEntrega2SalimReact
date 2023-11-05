const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 800,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 18,
        description: 'Descripcion de samsung s21'
    },
    {
        id: '3',
        name: 'Ipad 8va generacion',
        price: 1200,
        category: 'tablet',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 20,
        description: 'Descripcion de Ipad 8va generacion'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productId))
            }, 500)
        })
}
