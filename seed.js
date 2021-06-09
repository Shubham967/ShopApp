const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name:"Iphone 12",
        img:"https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:100000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {

        name:"Rolex",
        img:"https://images.unsplash.com/photo-1526045431048-f857369baa09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9sZXh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:50000,
        desc:"Rolex SA and its subsidiary Montres TUDOR SA design, manufacture, distribute, and service wristwatches sold under the Rolex and Tudor brands. In 2018, Forbes ranked Rolex as the world's 71st most valuable brand.[1] As of June 2019, of the top ten most expensive watches ever sold at auctions, three were Rolex watches."

    },

    {

        name:"Macbook Pro",
        img:"https://images.unsplash.com/photo-1613502971768-d0b2138cc2db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:150000,
        desc:"The MacBook Pro is a line of Macintosh portable computers introduced in January 2006 by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is sold with 13- and 16-inch screens. 17-inch and 15-inch version were sold from April 2006 to June 2012 and January 2006 to January 2020, respectively."

    },

    {

        name:"Earpods",
        img:"https://images.unsplash.com/photo-1588940086836-36c7d89611a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWlycG9kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:20000,
        desc:"Apple Inc. has produced and sold headphones since 2001, available for standalone purchase and bundled with iPhone (until 2020) and iPod products. Apple's current product line consists of EarPods, wired earbuds available with a 3.5mm headphone or Lightning connector, AirPods and AirPods Pro, wireless Bluetooth earbuds, and AirPods Max, wireless Bluetooth over-ear headphones."

    },

    {

        name:"Drone",
        img:"https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:100000,
        desc:"An unmanned aerial vehicle (UAV) or uncrewed aerial vehicle,[2] commonly known as a drone, is an aircraft without a human pilot on board. UAVs are a component of an unmanned aircraft system (UAS), which include additionally a ground-based controller and a system of communications with the UAV."

    },
]


const seedDB = async () => {
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;