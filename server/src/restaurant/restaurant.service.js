import Restaurant from './restaurant.model';

const defaultImageUrl = 'https://www.ramw.org/sites/default/files/styles/news_item/public/default_images/default-news.jpg?itok=U5pXc525';

export default {
    create(name, type, logoUrl = defaultImageUrl, owner) {
        const restaurant = new Restaurant({ name, type, logoUrl, owner });

        return restaurant.save();
    },
    filter() {
        return Restaurant
            .find({}, 'name logoUrl');
    },
    getDetails(restaurantName) {
        return Restaurant.findOne({ name: restaurantName });
    },
    delete(restaurantId) {
        return Restaurant.findByIdAndRemove(restaurantId);
    }
}