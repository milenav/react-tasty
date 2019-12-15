import { dbSchema, dbModel } from '../db';

const restaurantSchemaOptions = {
    timestamps: true
};

const restaurantSchema = new dbSchema({
    /**
     * @name deliveryPrice
     * @type {Number}
     */
    deliveryPrice: {
        type: Number,
        default: 0
    },
    /**
     * @name name
     * @type {String}
     */
    name: {
        type: String,
        required: true,
        unique: true
    },
    /***
     * @name owner
     * @type {String}
     */
    owner: {
        type: dbSchema.Types.ObjectId,
        required: true
    },
    /**
     * @name kitchens
     * @type {Array}
     */
    kitchens: {
        type: Array,
        default: []
    },
    /**
     * @name logo
     * @type {Buffer}
     */
    logoUrl: {
        type: String,
        default: null
    },
    /**
     * @name categories
     * @type {Object}
     */
    categories: [],
    /**
     * @name menu
     * @type Array
     */
    menu: {
        type: Array,
        default: []
    },
    /**
     * @name minOrder
     * @type {Number}
     */
    minOrder: {
        type: Number,
        default: 0
    }
}, restaurantSchemaOptions);

const Restaurant = new dbModel('Restaurant', restaurantSchema);

export default Restaurant;
