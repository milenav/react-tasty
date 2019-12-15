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
    delete(req, res, next) {
        const { account, params } = req;

        if (params.id) {
            const ownRestaurantIdIndex = account.restaurants.indexOf(params.id);

            if (ownRestaurantIdIndex > -1) {
                return restaurantService.delete(params.id)
                    .then(() => {
                        const restaurantsUpdate = account.restaurants.slice();

                        restaurantsUpdate.splice(ownRestaurantIdIndex, 1);
                        account.restaurants = restaurantsUpdate;

                        return account.save();
                    })
                    .then(() => res.json({}))
                    .catch((err) => next({ message: err }));
            }

            return res.status(401);
        }

        return res.stauts(400);
    }
}