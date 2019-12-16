import Restaurant from './restaurant.model';
import { dbTypes } from '../db';

export const seedRestaurants = () => {
    Restaurant.find({})
        .then((foundRestaurants) => {
            if (!foundRestaurants.length) {
                const categories = [
                    'salads',
                    'soups',
                    'main',
                    'appetizers',
                    'deserts',
                    'fish',
                    'pizza',
                    'grill'
                ];

                const menu = [
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'salads',
                        name: 'Cesar',
                        price: 4.50,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'salads',
                        name: 'Green',
                        price: 4.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'pizza',
                        name: 'Margarita',
                        price: 8.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'fish',
                        name: 'Salmon',
                        price: 12.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'deserts',
                        name: 'Cake',
                        price: 5.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'soups',
                        name: 'Chicken',
                        price: 3.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'grill',
                        name: 'Steak',
                        price: 10.00,
                        ingredients: []
                    }
                ];
                
                const fakeOwner = new dbTypes.ObjectId();
                const restaurants = [
                    { owner: fakeOwner, name: "Pizza XL", minOrder: 10, deliveryPrice: 0, categories, menu, logoUrl: 'https://static.takeaway.com/images/restaurants/bg/NR0NQQ7/logo_465x320.png' },
                    { owner: fakeOwner, name: 'Mr. Pizza', minOrder: 10, deliveryPrice: 10, categories, menu, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mr.Pizza_logo.JPG' },
                    { owner: fakeOwner, name: 'SofiStar', minOrder: 10, deliveryPrice: 0, categories, menu, logoUrl: 'https://static.takeaway.com/images/restaurants/bg/N3PQQQ7/logo_465x320.png' },
                    { owner: fakeOwner, name: 'Kayo Sushi', minOrder: 0, deliveryPrice: 5, categories, menu, logoUrl: 'https://static.takeaway.com/images/restaurants/bg/N755QQ7/logo_465x320.png' },
                    { owner: fakeOwner, name: 'Carambola Restaurant', minOrder: 15, deliveryPrice: 2, categories, menu, logoUrl: 'https://static.takeaway.com/images/restaurants/bg/0P155511/logo_465x320.png'  }
                ];
            
                return Restaurant.create(restaurants);
            }
        });
}

export default () => {
    seedRestaurants();
}