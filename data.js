import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'Tarik',
            email: 'tariq@gmail.com',
            password: bcrypt.hashSync('1+2+3+4',10),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 10),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/img5.jpg',
            countInStock: 18,
            price: '120',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Being Human Fit Pant',
            category: 'Pants',
            image: '/images/img1.jpg',
            countInStock: 3,
            price: '149',
            brand: 'Adidas',
            rating: 4.2,
            numReviews: 109,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/img5.jpg',
            countInStock: 200,
            price: '999',
            brand: 'Nike',
            rating: 4.9,
            numReviews: 1499,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Fit Shirt',
            category: 'Shirts',
            image: '/images/img14.jpg',
            countInStock: 0,
            price: '249',
            brand: 'Nike',
            rating: 3.0,
            numReviews: 105,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Orange Slim T Shirt',
            category: 'T-Shirts',
            image: '/images/img4.png',
            countInStock: 0,
            price: '99',
            brand: 'Nike',
            rating: 5.0,
            numReviews: 103,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Red Fit Shirt',
            category: 'Shirts',
            image: '/images/img9.jpg',
            countInStock: 6,
            price: '169',
            brand: 'Nike',
            rating: 4.,
            numReviews: 130,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Curren Smart Watch',
            category: 'Watch',
            image: '/images/img6.jpg',
            countInStock: 55,
            price: '169',
            brand: 'Curren',
            rating: 4.5,
            numReviews: 140,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: '4G Android Watch ',
            category: 'Watch',
            image: '/images/img7.jpg',
            price: '169',
            countInStock: 11,
            brand: 'iphone',
            rating: 2.5,
            numReviews: 10,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Iphone 11 4-64GB',
            category: 'Mobile',
            image: '/images/img2.jpg',
            countInStock: 11,
            price: '169',
            brand: 'Iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Iphone 11 Pro Max 4-64GB',
            category: 'Mobile',
            image: '/images/img3.jpg',
            countInStock: 11,
            price: '169',
            brand: 'Iphone',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
        {
            name: 'Black Casuel Skirt',
            category: 'Shirts',
            image: '/images/img11.jpg',
            countInStock: 11,
            price: '169',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus sed facere facilis non.'
        },
    ],
}

export default data;