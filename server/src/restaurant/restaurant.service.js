import Restaurant from './restaurant.model';

export default {
    create(name, type) {
        const restaurant = new Restaurant({ name, type });

        return restaurant.save();
    },
    filter() {
        return Restaurant
            .find({}, 'name logoUrl');
    },
    getDetails(restaurantName) {
        return Restaurant.findOne({ name: restaurantName });
    }
}