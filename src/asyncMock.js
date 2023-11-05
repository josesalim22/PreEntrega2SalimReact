const products = [
    {
        id: '1',
        name: 'Iphone 15 pro',
        price: 156500,
        category: 'celular',
        img: 'https://i.ibb.co/M6j2Mvz/Apple-i-Phone-15-Pro-lineup-natural-titanium653-653.jpg',
        stock: 12,
        description: 'Descripcion de Iphone 15'
    },
    {
        id: '2',
        name: 'Samsung S22 Ultra',
        price: 110000,
        category: 'celular',
        img: 'https://i.ibb.co/DQfMfCf/750-750-galaxys22ultra.png',
        stock: 15,
        description: 'Descripcion de samsung s22 Ultra'
    },
    {
        id: '3',
        name: 'Ipad 8va generacion',
        price: 125000,
        category: 'tablet',
        img: 'https://i.ibb.co/NK6XfRs/555-555-ipad10-964-GB.jpg',
        stock: 9,
        description: 'Descripcion de Ipad 8va generacion'
    },
    {
        id: '4',
        name: 'Lenovo Thinkpad i5',
        price: 450000,
        category: 'notebook',
        img: 'https://i.ibb.co/hMpW2DF/1076-907lenovo-thinkpad-l15.jpg',
        stock: 4,
        description: 'Descripcion de Lenovo Thinkpad i5'
    },
    {
        id: '5',
        name: 'Samsung Galaxy S23',
        price: 150000,
        category: 'celular',
        img: 'https://i.ibb.co/NKWNBZx/1024-1024-Samsung-Galaxy-S23-Ultra.jpg',
        stock: 12,
        description: 'Descripcion de Samsung Galaxy S23'
    },
    {
        id: '6',
        name: 'Motorola Edge 40 pro',
        price: 110000,
        category: 'celular',
        img: 'https://i.ibb.co/8D76Bp2/1000-1000-motorolaedge40pro.jpg',
        stock: 9,
        description: 'Descripcion de Motorola Edge 40 pro'
    },
    {
        id: '7',
        name: 'Dell Latitude i7',
        price: 480000,
        category: 'notebook',
        img: 'https://i.ibb.co/F5hWnMw/800-800-dell-latitude-i5-11va-8gb-512gb-ssd.jpg',
        stock: 10,
        description: 'Descripcion de Dell Latitude i7'
    },
    {
        id: '8',
        name: 'Asus Rog i7',
        price: 125000,
        category: 'notebook',
        img: 'https://i.ibb.co/7rLYsXM/1500-1027-Asus-Rog-i5.jpg',
        stock: 9,
        description: 'Descripcion de Asus Rog i7'
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

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}
