const RestaurantListMenu = [
    { 
        id: 0,
        category: 'Cafe',
        name: "Gloria-Jeans",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Gloria-Jeans.png'),
        rating: 4.5,
        menuList:[
            {
                id:1,
                itemImg: require('../assets/img/coffee.jpg'),
                itemName:'coffee',
                itemPrice:6,
            },
            {
                id:2,
                itemImg: require('../assets/img/tea.jpg'),
                itemName:'tea',
                itemPrice:5,
            }
        ]
    },
    {
        id: 1,
        category: 'Pizza',
        name: "Pizza-Max",
        branches: ['Branch1', 'Branch2'],
        picture: require('../assets/img/restaurantIcon/Pizza-Max.png'),
        rating: 3.5,
        menuList:[
            {
                id:1,
                itemImg: require('../assets/img/pizza.jpg'),
                itemName:'pizza',
                itemPrice:7,
            },
            {
                id:2,
                itemImg: require('../assets/img/pasta.jpg'),
                itemName:'pasta',
                itemPrice:9,
            }
        ]
    },
    {
        id: 2,
        category: 'FastFood',
        name: "Karachi-Broast",
        branches: ['Branch1', 'Branch2', 'Branch3'],
        picture: require('../assets/img/restaurantIcon/Karachi-Broast.png'),
        rating: 3.5,
        menuList:[
            {
                id:1,
                itemImg: require('../assets/img/friedChicken.jpg'),
                itemName:'friedChicken',
                itemPrice:10,
            },
            {
                id:2,
                itemImg: require('../assets/img/burger.jpg'),
                itemName:'burger',
                itemPrice:6,
            }
        ]
    },
];


export default RestaurantListMenu;