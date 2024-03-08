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
        "name":" LD05 LOUNGE CHAIR",
        "price": 300,
        "image": "images/5.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 6,
        "name":" LD06 LOUNGE CHAIR",
        "price": 200,
        "image": "images/6.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 7,
        "name":" LD07 LOUNGE CHAIR",
        "price": 200,
        "image": "images/7.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 8,
        "name":" LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "images/8.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 9,
        "name":" RM08 Richard Mille McLaren Automotive",
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
        "name":" LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "images/13.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 14,
        "name":" LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "images/14.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 15,
        "name":" LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "images/15.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
    ,
    {
        "id": 16,
        "name":" LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "images/16.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    }
     

];
export default products;