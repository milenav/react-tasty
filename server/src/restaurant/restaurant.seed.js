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
            
                const restaurants = [
                    { name: 'Happy', minOrder: 10, deliveryPrice: 0, categories, menu, logoUrl: 'https://webandevents.com/wp-content/uploads/2018/02/20180108-bf2cd9077f486d3dd7ea052b-or.png' },
                    { name: 'Mr. Pizza', minOrder: 10, deliveryPrice: 10, categories, menu, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mr.Pizza_logo.JPG' },
                    { name: 'Пицария Don Vito', minOrder: 10, deliveryPrice: 0, categories, menu, logoUrl: 'https://ir0.mobify.com/jpg/195/195/http://europe-public.foodpanda.com/assets/production/bg/images/vendors/v9mo.jpg?v=20171101121807' },
                    { name: 'Дивака', minOrder: 0, deliveryPrice: 5, categories, menu, logoUrl: 'http://divaka.bg/wp-content/uploads/2015/12/logo-en.png' },
                    { name: 'Raffy', minOrder: 15, deliveryPrice: 2, categories, menu, logoUrl: 'https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-1/57336171_396690377726870_5234490700510265344_n.jpg?_nc_cat=105&_nc_oc=AQk_RAt2Hak8hhAgDi-YIC-sBETC67PW9MHsDFIZLFKBsyAis2McdG3RP5fdGMVyK863fzUN4l0apeyELJ5XtIPn&_nc_ht=scontent-sof1-1.xx&oh=80765b2c57cd6892f50e46c995096e49&oe=5E3D37C6'  }
                ];
            
                return Restaurant.create(restaurants);
            }
        });
}

export default () => {
    seedRestaurants();
}