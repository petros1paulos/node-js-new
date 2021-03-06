const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const adminRoutes = express.Router();
const food = [
    {title:'Grilled Beef with potatoes',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-3.jpg',
    category:'main'},
    {title:'Fruit Vanilla Ice Cream',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-4.jpg',
    category:'main'},
    {title:'Asian Hoisin Pork',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-5.jpg',
    category:'main'},
    {title:'Spicy Fried Rice & Bacon',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-6.jpg',
    category:'main'},
    {title:'Mango Chili Chutney',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-7.jpg',
    category:'main'},
    {title:'Savory Watercress Chinese Pancakes',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-8.jpg',
    category:'main'},
    {title:'Soup With Vegetables And Meat',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-9.jpg',
    category:'main'},
    {title:'Udon Noodles With Vegetables',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-10.jpg',
    category:'main'},
    {title:'Baked Lobster With A Garnish',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-11.jpg',
    category:'main'},
    {title:'Octopus with Vegetables',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dish-12.jpg',
    category:'main'},
    {title:'FBW with Vegetables',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$0',
    imgurl:'/images/dish-12.jpg',
    category:'main'},
    {title:'Grilled Beef with potatoes',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-1.jpg',
    category:'dessert'},
    {title:'Grilled Beef with potatoes',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-2.jpg',
    category:'dessert'},
    {title:'Grilled Beef with potatoes',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-3.jpg',
    category:'dessert'},
    {title:'Grilled Beef with potatoes',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-4.jpg',
    category:'dessert'},
    {title:'Grilled Beef with potatoes',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-5.jpg',
    category:'dessert'},
    {title:'Tiramisu',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-6.jpg',
    category:'dessert'},
    {title:'Chocolate Cream',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-7.jpg',
    category:'dessert'},
    {title:'Pizza Pie',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-8.jpg',
    category:'dessert'},
    {title:'Sicilian Ricotta',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-9.jpg',
    category:'dessert'},
    {title:'Mango FLoat',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/dessert-10.jpg',
    category:'dessert'},
    {title:'Lemon Juice',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-1.jpg',
    category:'drinks'},
    {title:'Guava Juice',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-2.jpg',
    category:'drinks'},
    {title:'Sprite',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-3.jpg',
    category:'drinks'},
    {title:'Cola',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-4.jpg',
    category:'drinks'},
    {title:'Wine',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-5.jpg',
    category:'drinks'},
    {title:'Beer',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-6.jpg',
    category:'drinks'},
    {title:'Mango Juice',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-7.jpg',
    category:'drinks'},
    {title:'Apple Juice',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-8.jpg',
    category:'drinks'},
    {title:'Strawberry Juice',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-9.jpg',
    category:'drinks'},
    {title:'Orange Juice',
    description:'Meat, Potatoes, Rice, Tomatoe',
    price:'$29',
    imgurl:'/images/drink-10.jpg',
    category:'drinks'}
];

adminRoutes.route('/').get((req, res)=>{
    const url = 'mongodb://localhost:27017';
    const dbName = 'tastyApp';
(async function mongo(){
let client;
try {
    client = await MongoClient.connect(url,{useNewUrlParser: true})
    const db = client.db(dbName);
    const response = await db.collection('dishes').insert(food);
    res.send(response);
} catch (error) {
    res.send(error.message);
}
client.close();
}());

//res.send('Hello Admin');
});
module.exports = adminRoutes;