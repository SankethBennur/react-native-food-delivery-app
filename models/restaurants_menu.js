const restaurant_list = [
    {
        __id: "res001",
        name: "1522",
        menu: [
            {
                __id: "a001",
                image: "https://dinnerthendessert.com/wp-content/uploads/2019/11/BBQ-Chicken-Wings-4x3.jpg",
                title: "Barbeque Chicken Wings",
                description: "BBQ Chicken Wings are an awesome game day appetizer, baked chicken wings smothered in barbecue sauce. Crispy inside and sweet and sticky on the outside!",
                price: 10.0
            },
            {
                __id: "a002",
                image: "https://www.sargento.com/assets/Uploads/Recipe/Image/808-Chili_Cheese_Nachos__FillWzExNzAsNTgzXQ.jpg",
                title: "Cheese Nachos",
                description: "You’re sure to love this nacho recipe and so will your guests when you bring out this hot plate of tortilla chips smothered in meaty chili spiced with barbecue sauce and topped with green onions.",
                price: 12.0
            },
            {
                __id: "a003",
                image: "https://hips.hearstapps.com/hmg-prod/images/martini-recipe-1657532229.jpg?crop=1.00xw:0.669xh;0,0.170xh&resize=2048:*",
                title: "Martini",
                description: "A classic martini compromises of just TWO ingredients - gin or vodka, and vermouth. It's then often garnished with an olive, or lemon peel (or both).",
                price: 14.0
            },
            {
                __id: "a004",
                image: "https://www.moodymixologist.com/wp-content/uploads/2020/02/frozen-margarita-cocktail-recipe-02-7384996.jpg.webp",
                title: "Margareita",
                description: "The classic Frozen Margarita is one of the best ways to cool off on a hot summer day. It’s also incredibly easy to blend up any time you’re in the mood for a sweet and sour tequila slushie!",
                price: 16.0
            },
            {
                __id: "a005",
                image: "https://assets.bonappetit.com/photos/57acd021f1c801a1038bc7b7/1:1/w_2560%2Cc_limit/steamed-japanese-rice.jpg",
                title: "Steamed rice",
                description: "In Japanese, the word for food is the same as the one for rice. Without it, a meal is not a meal. The real genius of rice is revealed when you think about it in reverse: Add just about anything to a bowl of it and, voilà! you’ve got dinner.",
                price: 18.0
            },
        ],
    },
    {
        __id: "res002",
        name: "Pizza Hut",
        menu: [
            {
                __id: "b001",
                image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg",
                title: "Awesome American Cheesy",
                description: "Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce.",
                price: 10.0
            },
            {
                __id: "b002",
                image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/schezwan-margherita.119285dae4776004226ee39fa6555bf5.1.jpg",
                title: "Schezwan Margherita",
                description: "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese. ",
                price: 12.0
            },
            {
                __id: "b003",
                image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/mexican-fiesta.559a1961ca021b8fb90367c6918e50f1.1.jpg",
                title: "Mexican Fiesta",
                description: "Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce. ",
                price: 14.0
            },
            {
                __id: "b004",
                image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/cheezy-mushroom-magic.72f76a95b424b5a82661c859dff44130.1.jpg",
                title: "Cheezy Mushroom Magic",
                description: "A new combination with creamy mushroom sauce, chunky black olives, spicy jalapeno, juicy sweet corn, mushroom and 100% mozzarella cheese with garlic sprinkle for extra flavour hit.",
                price: 16.0
            },
            {
                __id: "b005",
                image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.7a835cde5ac78c1113c785067090ac1d.1.jpg",
                title: "Triple Chicken Feast",
                description: "Spicy Schezwan Chicken Meatball, flavourful Herbed Chicken, juicy Chicken Sausage, Green Capsicum & Onion, spicy Red Paprika with classic pan sauce and 100% mozzarella cheese.",
                price: 18.0
            },
        ],
    },
    {
        __id: "res003",
        name: "KFC",
        menu: [
            {
                __id: "c001",
                image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg",
                title: "Single Chicken Roll",
                description: "Street style roll with single chicken strip, onions and two spicy sauce.",
                price: 10.0,
            },
            {
                __id: "c002",
                image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002348.jpg",
                title: "Chicken Longer Burger & 2 Strips Combo",
                description: "Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips.",
                price: 12.0,
            },
            {
                __id: "c003",
                image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K136.jpg",
                title: "Regular Popcorn",
                description: "Signature bite-sized boneless chicken, with special spices.",
                price: 14.0,
            },
            {
                __id: "c004",
                image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002069.jpg",
                title: "Double Chicken Roll Meal for 1",
                description: "Deal combo of 1 Double Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml.",
                price: 16.0,
            },
            {
                __id: "c005",
                image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000892.jpg",
                title: "Bucket for Two",
                description: "Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn.",
                price: 18.0,
            },
        ],
    },
    {
        __id: "res004",
        name: "California Burrito",
        menu: [
            {
                __id: "d001",
                image: "https://b.zmtcdn.com/data/dish_photos/74a/ed3f518a44b8e847509f8f32337f474a.jpg",
                title: "PRO Salad - Grilled Barbeque Chicken",
                description: "Eat salads like a PRO with fresh lettuce, grilled barbecue chicken, black beans, corn salsa, and zesty pico - drizzled with tangy chili lime vinaigrette and finished off with a sprinkle of sunflower seeds. Calorie: 390 Kcal, Protein: 30g, Carbs: 29g, Fat: 18g, Fiber: 10g",
                price: 10.0,
            },
            {
                __id: "d002",
                image: "https://b.zmtcdn.com/data/dish_photos/ad4/a179d06c570ac75bf386e5f248e8ead4.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Grilled Barbeque Chicken Burrito",
                description: "Our soft flour tortilla stuffed with your choice of fillings, rolled and lightly toasted. Enjoy the goodness of grilled chicken, pinto beans, fajita veggies like bell peppers and onions, fresh pico de gallo and sour cream. YUM!",
                price: 12.0,
            },
            {
                __id: "d003",
                image: "https://b.zmtcdn.com/data/dish_photos/572/e984d6d7eee5d187e338bfdc9fda7572.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Grilled Barbeque Chicken Salad",
                description: "A crisp bowl of fresh greens that includes a variety of goodness such as corn salsa, pico de galla, pinto beans and grilled barbeque chicken.",
                price: 14.0,
            },
            {
                __id: "d004",
                image: "https://b.zmtcdn.com/data/dish_photos/38c/e5b98bbbc6e1c489176166c3a8c8e38c.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Cheesy Barbeque Chicken Quesadilla",
                description: "A grilled flour tortilla filled with barbeque chicken, cheddar cheese and pinto beans . Melted to perfection and served with south west sauce, salsa and nachos.",
                price: 16.0,
            },
            {
                __id: "d005",
                image: "https://b.zmtcdn.com/data/dish_photos/373/5e070da0922f3dc7ce66ab3c3db00373.png?fit=around|130:130&crop=130:130;*,*",
                title: "Chipotle Crispy Chicken Taco",
                description: "Crisp seasoned chicken tucked in hard shell tortillas, filled with pinto beans, chipotle mayo, cheese, pico and juicy lettuce.",
                price: 18.0,
            },
        ],
    },
    {
        __id: "res005",
        name: "Barbeque Nation",
        menu: [
            {
                __id: "e001",
                image: "https://b.zmtcdn.com/data/dish_photos/ab7/22592f4be247490b954da74f54d42ab7.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Celebration Combo",
                description: "Our Celebration Combo is packed with flavorful, juicy kebabs, curries and biryanis made of premium quality ingredients. An exciting combo to celebrate with friends and family.",
                price: 10.0,
            },
            {
                __id: "e002",
                image: "https://b.zmtcdn.com/data/dish_photos/f67/4eaa60b165551203f740ab090113bf67.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Barbeque In A Box (Veg) Premium",
                description: "[Six Starters] - Tandoori Paneer Tikka (6 Pcs) + Churrasco Pineapple (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) + Cheese Triangle (6 Pcs) + Assorted Grilled Corn & Veg (2 Nos) [Main Couse] - Paneer Butter Masala + Mix Veg + Dal Makhani + Veg Dum Biryani + Malabar Paratha (3 Nos) [Three Desserts] Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation buffet served at home.",
                price: 12.0,
            },
            {
                __id: "e003",
                image: "https://b.zmtcdn.com/data/dish_photos/0b9/1d45b907053d706bb70a773f3271d0b9.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Kebabs in a Box (Non Veg Overload)",
                description: "Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (6 Pcs) + Chicken Wings (6 Pcs) + Tandoori Tangadi (2Pcs) + Fish Tikka (6 Pcs) + Angoori Jamun (8 Pcs). Accompanied with Dips & Salad. Non Veg Overload in a Box.",
                price: 14.0,
            },
            {
                __id: "e004",
                image: "https://b.zmtcdn.com/data/dish_photos/e35/35884bffaba12971bd5491cddcb8be35.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Premium Non-Veg Chicken Thali",
                description: "Chicken Dum Biryani + Chicken Tikka Boneless (6 Pcs) + Butter Chicken Masala + Dal Makhani + Dry Mix Veg + Malabar Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs). A wholesome North-Indian Thali served with Raita & Salad. Earlier called as Shahi Chicken Biryani Thali.",
                price: 16.0,
            },
            {
                __id: "e005",
                image: "https://b.zmtcdn.com/data/dish_photos/83c/a88cf57a7d5dabb54e6babb8b00b283c.jpg?fit=around|130:130&crop=130:130;*,*",
                title: "Boneless Chicken Biryani",
                description: "Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita.",
                price: 18.0,
            },
        ],
    },
];

module.exports = restaurant_list;
