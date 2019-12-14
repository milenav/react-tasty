export const deliveryTypes = [
  { type: 'none', name: 'Без значение' },
  { type: 'paid', name: 'Платена' },
  { type: 'free', name: 'Безплатна' }
];

export const kitchenTypes = [
  { type: 'all', name: 'Всички' },
  { type: 'carbohydrate', name: 'Въглехидратна' },
  { type: 'dietary', name: 'Диетична' },
  { type: 'vegan', name: 'Веган' }
];

export const menuCarouselOptions = {
  draggable: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
};

/**
 * The name of the key which holds the value of the token into localStorage
 * @name tokenKey
 */
export const tokenKey = 'tastyToken';