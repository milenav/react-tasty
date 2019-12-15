import restaurantService from './restaurant.service';

export default {
    create(req, res, next) {
        const { name, type, logoUrl } = req.body;

        return restaurantService.create(name, type, logoUrl, req.account)
            .then((createdRestaurant) => {
                req.account.restaurants.push(createdRestaurant);
                req.account.save();
                
                return createdRestaurant;
            })
            .then((createdRestaurant) => {
                return res.json({
                    data: createdRestaurant
                });
            })
            .catch((err) => next({ message: err }));
    },
    list(req, res, next) {
        return restaurantService.filter()
            .then((restaurants) => {
                return res.json({
                    data: restaurants
                })
            })
            .catch((err) => next({ message: err }));
    },
    details(req, res, next) {
        const { name } = req.params;
        
        return restaurantService.getDetails(name)
            .then((restaurant) => {
                return res.json({
                    data: restaurant
                })
            })
            .catch((err) => next({ message: err }));
    },
    getMyRestaurants(req, res, next) {
        console.log(req.account.id)
        // return restaurantService.getMyRestaurants(req.account.id);
    }
}