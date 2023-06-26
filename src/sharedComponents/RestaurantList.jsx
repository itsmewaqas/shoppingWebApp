const RestaurantList = [
    { 
        id: 0,
        category: 'Cafe',
        name: "Gloria-Jeans",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Gloria-Jeans.png'),
        rating: 4.5
    },
    {
        id: 1,
        category: 'Cafe',
        name: "Butlers-Chocolate-Cafe",
        branches: ['Branch1', 'Branch2'],
        picture: require('../assets/img/restaurantIcon/Butlers-Chocolate-Cafe.png'),
        rating: 4.8
    },
    {
        id: 2,
        category: 'Cafe',
        name: "Filli-Cafe",
        branches: ['Branch1', 'Branch2', 'Branch3', 'Branch4'],
        picture: require('../assets/img/restaurantIcon/Filli-Cafe.png'),
        rating: 3.5
    },
    {
        id: 3,
        category: 'Cafe',
        name: "Xanders",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Xanders.png'),
        rating: 3.5
    },
    {
        id: 4,
        category: 'Cafe',
        name: "Subway",
        branches: ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5'],
        picture: require('../assets/img/restaurantIcon/Subway.png'),
        rating: 2.5
    },
    {
        id: 5,
        category: 'Cafe',
        name: "Del-Frio",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Del-Frio.png'),
        rating: 5.5
    },
    {
        id: 6,
        category: 'Cafe',
        name: "Dunkin-Donuts",
        branches: ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5', 'Branch6'],
        picture: require('../assets/img/restaurantIcon/Dunkin-Donuts.png'),
        rating: 4.5
    },
    {
        id: 7,
        category: 'Pizza',
        name: "Pizza-Max",
        branches: ['Branch1', 'Branch2'],
        picture: require('../assets/img/restaurantIcon/Pizza-Max.png'),
        rating: 3.5
    },
    {
        id: 8,
        category: 'Pizza',
        name: "Pizza-Point",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Pizza-Point.png'),
        rating: 1.5
    },
    {
        id: 9,
        category: 'Pizza',
        name: "California-Pizza",
        branches: ['Branch1', 'Branch2', 'Branch3', 'Branch4'],
        picture: require('../assets/img/restaurantIcon/California-Pizza.png'),
        rating: 3.5
    },
    {
        id: 10,
        category: 'Pizza',
        name: "Dominos-Pizza",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Dominos-Pizza.png'),
        rating: 2.5
    },
    {
        id: 11,
        category: 'Pizza',
        name: "The-New-York-Pizza",
        branches: ['Branch1', 'Branch2'],
        picture: require('../assets/img/restaurantIcon/The-New-York-Pizza.png'),
        rating: 1.5
    },
    {
        id: 12,
        category: 'FastFood',
        name: "Karachi-Broast",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Karachi-Broast.png'),
        rating: 3.5
    },
    {
        id: 13,
        category: 'FastFood',
        name: "Kbc-Restaurant",
        branches: ['Branch1', 'Branch2'],
        picture: require('../assets/img/restaurantIcon/Kbc-Restaurant.png'),
        rating: 1.5
    },
    {
        id: 14,
        category: 'FastFood',
        name: "Kaybees-Restaurant",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Kaybees-Restaurant.png'),
        rating: 2.5
    },
    {
        id: 15,
        category: 'FastFood',
        name: "Foods-Inn",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Foods-Inn.png'),
        rating: 4.5
    },
    {
        id: 16,
        category: 'FastFood',
        name: "Khan-Broast",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Khan-Broast.png'),
        rating: 3.5
    },
    {
        id: 17,
        category: 'Buffet',
        name: "Lal-Qila-Restaurant",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Lal-Qila-Restaurant.png'),
        rating: 2.5
    },
    {
        id: 18,
        category: 'Buffet',
        name: "Rangoli-Restaurant",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Rangoli-Restaurant.png'),
        rating: 3.5
    },
    {
        id: 19,
        category: 'Buffet',
        name: "Clock-Tower-Restaurant",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Clock-Tower-Restaurant.png'),
        rating: 4.5
    },
    {
        id: 20,
        category: 'Buffet',
        name: "Chopal-Restaurant",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Chopal-Restaurant.png'),
        rating: 3.5
    },
    {
        id: 21,
        category: 'BarBq',
        name: "Red-Apple",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Red-Apple.png'),
        rating: 4.5
    },
    {
        id: 22,
        category: 'BarBq',
        name: "Hot-n-Spicy",
        branches: ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5', 'Branch6'],
        picture: require('../assets/img/restaurantIcon/Hot-n-Spicy.png'),
        rating: 3.5
    },
    {
        id: 23,
        category: 'BarBq',
        name: "Hot-n-Roll",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Hot-n-Roll.png'),
        rating: 2.5
    },
    {
        id: 24,
        category: 'BarBq',
        name: "Zameer-Ansari",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Zameer-Ansari.png'),
        rating: 4.5
    },
    {
        id: 25,
        category: 'BarBq',
        name: "Barbq-Tonight",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Barbq-Tonight.png'),
        rating: 3.5
    },
    {
        id: 26,
        category: 'Chinese',
        name: "Meikong-Restaurant",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Meikong-Restaurant.png'),
        rating: 4.9
    },
    {
        id: 27,
        category: 'Chinese',
        name: "China-Grill-Restaurant",
        branches: ['Branch1', 'Branch2'],
        picture: require('../assets/img/restaurantIcon/China-Grill-Restaurant.png'),
        rating: 3.9
    },
    {
        id: 28,
        category: 'Chinese',
        name: "Ginsoy-Restaurant",
        branches: ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5'],
        picture: require('../assets/img/restaurantIcon/Ginsoy-Restaurant.png'),
        rating: 4.9
    },
    {
        id: 29,
        category: 'Chinese',
        name: "Bambou-Restaurant",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Bambou-Restaurant.png'),
        rating: 3.9
    },
    {
        id: 30,
        category: 'Chinese',
        name: "Chowmein-Restaurant",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Chowmein-Restaurant.png'),
        rating: 2.9
    },
    {
        id: 31,
        category: 'DesiFood',
        name: "Rehman-Biryani",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Rehman-Biryani.png'),
        rating: 4.5
    },
    {
        id: 32,
        category: 'DesiFood',
        name: "Allah-Wala-Biryani",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Allah-Wala-Biryani.png'),
        rating: 3.5
    },
    {
        id: 33,
        category: 'DesiFood',
        name: "Qadri-Nalli-Biryani",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Qadri-Nalli-Biryani.png'),
        rating: 4.9
    },
    {
        id: 34,
        category: 'DesiFood',
        name: "Ghousia-Nalli-Biryani",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Ghousia-Nalli-Biryani.png'),
        rating: 3.5
    },
    {
        id: 35,
        category: 'DesiFood',
        name: "Naseeb-Biryani",
        branches: ['Branch1','Branch2','Branch3','Branch4','Branch5'],
        picture: require('../assets/img/restaurantIcon/Naseeb-Biryani.png'),
        rating: 4.5
    },
    {
        id: 36,
        category: 'DesiFood',
        name: "Zahid-Nihari",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/Zahid-Nihari.png'),
        rating: 4.2
    },
    {
        id: 37,
        category: 'DesiFood',
        name: "Javed-Nihari",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/Javed-Nihari.png'),
        rating: 4.3
    },
    {
        id: 38,
        category: 'Burgers',
        name: "Burger-Lab",
        branches: ['Branch1','Branch2','Branch3','Branch4','Branch5','Branch6'],
        picture: require('../assets/img/restaurantIcon/Burger-Lab.png'),
        rating: 3.3
    },
    {
        id: 39,
        category: 'Burgers',
        name: "Burger-King",
        branches: ['Branch1','Branch2','Branch3','Branch4'],
        picture: require('../assets/img/restaurantIcon/Burger-King.png'),
        rating: 4.3
    },
    {
        id: 40,
        category: 'Burgers',
        name: "Burger-o-Clock",
        branches: ['Branch1','Branch2','Branch3'],
        picture: require('../assets/img/restaurantIcon/Burger-o-Clock.png'),
        rating: 4.9
    },
    {
        id: 41,
        category: 'Burgers',
        name: "The-Sauce-Burger-Cafe",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/The-Sauce-Burger-Cafe.png'),
        rating: 3.7
    },
    {
        id: 42,
        category: 'Burgers',
        name: "KFC",
        branches: ['Branch1','Branch2','Branch3','Branch4','Branch5','Branch6','Branch7'],
        picture: require('../assets/img/restaurantIcon/KFC.png'),
        rating: 4.7
    },
    {
        id: 43,
        category: 'Burgers',
        name: "The-Burger-Shack",
        branches: ['Branch1','Branch2','Branch3'],
        picture: require('../assets/img/restaurantIcon/The-Burger-Shack.png'),
        rating: 2.7
    },
    {
        id: 44,
        category: 'Burgers',
        name: "Mcdonalds",
        branches: ['Branch1','Branch2','Branch3','Branch4'],
        picture: require('../assets/img/restaurantIcon/Mcdonalds.png'),
        rating: 4.7
    },
    {
        id: 45,
        category: 'Burgers',
        name: "Optp",
        branches: ['Branch1','Branch2','Branch3'],
        picture: require('../assets/img/restaurantIcon/Optp.png'),
        rating: 4.8
    },
    {
        id: 46,
        category: 'Steakhouses',
        name: "Meat-The-Cheese",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Meat-The-Cheese.png'),
        rating: 3.8
    },
    {
        id: 47,
        category: 'Steakhouses',
        name: "Arizona-Grill",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/Arizona-Grill.png'),
        rating: 2.8
    },
    {
        id: 48,
        category: 'Steakhouses',
        name: "Gunsmoke",
        branches: ['Branch1','Branch2','Branch3'],
        picture: require('../assets/img/restaurantIcon/Gunsmoke.png'),
        rating: 4.8
    },
    {
        id: 49,
        category: 'Steakhouses',
        name: "Grill-House",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/Grill-House.png'),
        rating: 2.8
    },
    {
        id: 50,
        category: 'Steakhouses',
        name: "Jardin",
        branches: ['Branch1'],
        picture: require('../assets/img/restaurantIcon/Jardin.png'),
        rating: 4.3
    },
    {
        id: 51,
        category: 'Steakhouses',
        name: "Sizzlerz",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/Sizzlerz.png'),
        rating: 3.3
    },
    {
        id: 52,
        category: 'Icecream',
        name: "Creamello",
        branches: ['Branch1','Branch2','Branch3'],
        picture: require('../assets/img/restaurantIcon/Creamello.png'),
        rating: 4.3
    },
    {
        id: 53,
        category: 'Icecream',
        name: "Baskin-Robbins",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/Baskin-Robbins.png'),
        rating: 4.5
    },
    {
        id: 54,
        category: 'Icecream',
        name: "lush-Crush",
        branches: ['Branch1','Branch2'],
        picture: require('../assets/img/restaurantIcon/lush-Crush.png'),
        rating: 2.5
    },
];


export default RestaurantList;