const resList = [
    {
      id: "220706",
      name: "Burger Farm",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_220706.JPG",
      locality: "Pratap Nagar",
      areaName: "Pratap Nagar",
      costForTwo: "₹200 FOR TWO",
      cuisines: [
        "American",
        "Barbecue",
        "Italian-American",
        "Snacks",
        "Combo",
        "Grill",
        "Beverages",
      ],
      avgRating: 4.6,
      deliveryTime: 29,
    },
    {
      id: "58384",
      name: "Harishankar Veg Restro",
      cloudinaryImageId: "pod0moq8m9nlon8oyrb1",
      locality: "Sanganer",
      areaName: "Sanganer",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["North Indian", "Thalis", "Indian", "Rajasthani"],
      avgRating: 4.3,
      deliveryTime: 31,
    },
    {
      id: "491141",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/94e0e1ad-f03e-4840-8a4b-51afabf1b4fa_491141.JPG",
      locality: "Jaipur WTP Mall",
      areaName: "Malviya Nagar",
      costForTwo: "₹400 FOR TWO",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      deliveryTime: 54,
    },
    {
      id: "45219",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/6b30cf65-f8d8-4402-b202-6f4ded170029_45219.JPG",
      locality: "Malviya Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹450 FOR TWO",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      deliveryTime: 47,
    },
    {
      id: "857566",
      name: "Roll Stick",
      cloudinaryImageId: "bf27f73c5780cfc2b24b877fac1ccc81",
      locality: "Sheopur Rd",
      areaName: "Pratap Nagar",
      costForTwo: "₹300 FOR TWO",
      cuisines: ["Beverages", "Snacks", "Burgers"],
      avgRating: 4.4,
  
      deliveryTime: 49,
    },
    {
      id: "511052",
      name: "Pizza squard",
      cloudinaryImageId: "srtz5q0xuy0dsjaensje",
      locality: "Rampura Road",
      areaName: "Sanganer",
      costForTwo: "₹400 FOR TWO",
      cuisines: ["Pizzas"],
      avgRating: 3.3,
      veg: true,
      parentId: "305721",
      avgRatingString: "3.3",
      totalRatingsString: "51",
      deliveryTime: 52,
    },
    {
      id: "958708",
      name: "Nomad Pizza - Traveller Series",
      cloudinaryImageId: "j4lr4ci9feewxcq3hglt",
      locality: "Ramjipura",
      areaName: "Malvia Nagar",
      costForTwo: "₹850 FOR TWO",
      cuisines: ["Pizzas", "Fast Food", "Desserts", "Beverages"],
      avgRating: 4.3,
      deliveryTime: 30,
    },
    {
      id: "558588",
      name: "Rominus Pizza And Burger",
      cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
      locality: "Tonk Road",
      areaName: "Pratap Nagar",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Pizzas", "Italian-American", "Italian", "American"],
      avgRating: 4.3,
      deliveryTime: 40,
    },
    {
      id: "822923",
      name: "Crusto's - Cheese Burst Pizza By Olio",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/3/12/06c727f9-eecc-48dd-8c6b-e0747d9cfb59_5be9ae4c-f59e-4943-a562-fbec9de95dbe.jpg_compressed",
      locality: "SECTOR-7",
      areaName: "MALVIYA NAGAR",
      costForTwo: "₹300 FOR TWO",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.5,
      parentId: "268955",
      avgRatingString: "4.5",
      totalRatingsString: "144",
      promoted: true,
      adTrackingId:
        "cid=23233069~p=2~adgrpid=23233069#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=822923~eid=18242d8c-1fd8-4e6b-9b03-7f78d1664723~srvts=1735475149380~collid=83631",
  
      deliveryTime: 45,
    },
    {
      id: "236697",
      name: "Oven Story Pizza - Standout Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/7e0eae16-1762-4d02-8442-817e73563f19_236697.jpg",
      locality: "Hans Vihar",
      areaName: "Sanganer",
      costForTwo: "₹400 FOR TWO",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      deliveryTime: 32,
    },
    {
      id: "958709",
      name: "ENSO - Sourdough Pizza by Nomad",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/3/6/34db3255-9d88-4f57-a0cb-4bc9c77055df_7e0c35d5-f90e-4416-bd23-93090f62c7bb_compressed",
      locality: "Ramjipura",
      areaName: "Malvia Nagar",
      costForTwo: "₹700 FOR TWO",
      cuisines: ["Pizzas", "Fast Food", "Desserts", "Salads", "Beverages"],
      avgRating: 4.1,
      parentId: "77344",
      avgRatingString: "4.1",
      deliveryTime: 42,
    },
    {
      id: "236695",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/5d9fec5b-3a62-4c35-8b83-4dadb9126622_236695.JPG",
      locality: "Hans Vihar",
      areaName: "Sanganer",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Kebabs", "Fast Food", "Snacks", "American"],
      avgRating: 4.3,
      deliveryTime: 32,
    },
    {
      id: "236699",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/bbd212b0-421d-430c-a181-e7ba1b752ba6_236699.jpg",
      locality: "Hans Vihar",
      areaName: "Sanganer",
      costForTwo: "₹450 FOR TWO",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
      deliveryTime: 27,
    },
    {
      id: "565291",
      name: "Wendy's Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/8db680d8-050a-4bc3-9aaa-fc916c9f6ee5_565291.jpg",
      locality: "RIICO Industrial Area",
      areaName: "Sanganer",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
      avgRating: 4.2,
      deliveryTime: 35,
    },
    {
      id: "236700",
      name: "The Good Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/f4c2713d-2e15-48d8-bf2b-346e828667d7_236700.jpg",
      locality: "Hans Vihar",
      areaName: "Sanganer",
      costForTwo: "₹400 FOR TWO",
      cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      avgRating: 4.4,
      deliveryTime: 27,
    },
    {
      "id": "45913",
                        "name": "Subway",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/796a416e-636e-4cc6-aa64-3864ab1f544e_45913.JPG",
                        "locality": "Crystal Court Mall",
                        "areaName": "Malviya Nagar",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "sandwich",
                          "Salads",
                          "wrap",
                          "Healthy Food"
                        ],
                        "avgRating": 4.2,
                        "parentId": "2",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "17K+",
                        "deliveryTime": 51,
    },
    {
      id: "236702",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/9d4be503-6932-4141-8f89-e5d5b54f9d61_236702.jpg",
      locality: "Hans Vihar",
      areaName: "Sanganer",
      costForTwo: "₹200 FOR TWO",
      cuisines: ["Biryani", "North Indian", "Punjabi", "Healthy Food"],
      avgRating: 4.4,
      deliveryTime: 33,
    },
    {
      id: "236696",
      name: "Behrouz Biryani",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      locality: "Hans Vihar",
      areaName: "Sanganer",
      costForTwo: "₹500 FOR TWO",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.4,
      parentId: "1803",
      deliveryTime: 33,
    },
    {
      id: "752841",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c0d4b1de-d5fa-41ec-a6fa-03632ba71e7a_752841.jpg",
      locality: "Pratap Nagar",
      areaName: "RHB",
      costForTwo: "₹120 FOR TWO",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      deliveryTime: 29,
    },
    {
      id: "545009",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Vijay path",
      areaName: "Mansarovar",
      costForTwo: "₹250 FOR TWO",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.7,
      veg: true,
      parentId: "5588",
      deliveryTime: 26,
    },{
      "id": "402636",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/0926d60d-e362-4e9b-bd28-6fb81a07b328_402636.JPG",
      "locality": "Sector 4",
      "areaName": "Malviya Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.5,
      "deliveryTime": 33
    }
  ];
export default resList;