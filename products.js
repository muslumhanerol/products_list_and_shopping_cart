const products = [
    {
        "id": 1,
        "name":" RL01 ROLEX Submariner",
        "price": 500000,
        "image": "images/1.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 2,
        "name":" RL02 ROLEX Superlative",
        "price": 250000,
        "image": "images/2.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 3,
        "name":"RL03 ROLEX DateJust",
        "price": 400000,
        "image": "images/3.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 4,
        "name":" RL04 ROLEX Daytona",
        "price": 425000,
        "image": "images/4.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 5,
        "name":" PT05 Patek Philippe Grand Complications",
        "price": 873000,
        "image": "images/5.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 6,
        "name":" PT06 Patek Philippe Grande Complication",
        "price": 850000,
        "image": "images/6.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 7,
        "name":" PT07 Patek Philippe",
        "price": 760000,
        "image": "images/7.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 8,
        "name":" PT08 Patek Philippe Nautilus",
        "price": 680000,
        "image": "images/8.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 9,
        "name":" RM08 Richard Mille McLaren ",
        "price": 790000,
        "image": "images/9.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 10,
        "name":" RM10 Richard Mille Tourbillon  ",
        "price": 680000,
        "image": "images/10.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 11,
        "name":" RM11 Richard Mille Formula 1",
        "price": 900000,
        "image": "images/11.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 12,
        "name":" RM11 Richard Mille ATP",
        "price": 640000,
        "image": "images/12.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 13,
        "name":" BR13 Breitling Bentley",
        "price": 560000,
        "image": "images/13.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 14,
        "name":" BR14 Breitling Transocean",
        "price": 420000,
        "image": "images/14.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 15,
        "name":" BR15 Breitling Chronomat 44 GMT",
        "price": 320000,
        "image": "images/15.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 16,
        "name":" BR16 Breitling 1884 Chronometre",
        "price": 360000,
        "image": "images/16.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
     

];
export default products;