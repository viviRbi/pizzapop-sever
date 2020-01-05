var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.json([
    {
      price: {
        listing: 35000000,
        current: 34999000
      },
      county: "Travis County",
      foreclosure: "no",
      bath: {
        full: 1,
        half: 0
      },
      sqft: 1000,
      status: "For Sale",
      adr: "7400 Coldwater Canyon RD",
      city: "Austin",
      zipcode: 78730,
      type: "Single Family",
      bed: 3,
      garage: 2,
      img: ["https://pics.harstatic.com/hr/ABORTX/5625677/1.jpg", "https://pics.harstatic.com/hr/ABORTX/5625677/4.jpg", "https://pics.harstatic.com/hr/ABORTX/5625677/19.jpg", "https://pics.harstatic.com/hr/ABORTX/5625677/15.jpg", "https://pics.harstatic.com/hr/ABORTX/5625677/20.jpg", "https://pics.harstatic.com/hr/ABORTX/5625677/25.jpg", "https://pics.harstatic.com/hr/ABORTX/5625677/30.jpg"],
      desc: "The Lake Austin Ranch is a rare 65.68 acre waterfront property located along the shores of Lake Austin near the 360 bridge. This iconic property features 2600 +/- ft of water frontage, an 8 slip marina and is only 6.5 miles NW of downtown Austin representing one of the last opportunities to own a large tract this close in. The property features gently sloping terrain covered in juniper, pecan, oaks and cypress with diverse plant and wildlife. incredible home site for 25,000 SF main house and more."
    },
    {
      price: {
        listing: 1000,
        current: 1000
      },
      county: "Haris County",
      foreclosure: "no",
      bath: {
        full: 2,
        half: 0
      },
      sqft: 192,
      status: "For Lease",
      adr: "1900 BAY AREA BOULEVARD",
      city: "Houston",
      zipcode: 77058,
      type: "Condo",
      bed: 2,
      garage: 1,
      img: ["https://photos.harstatic.com/181190333/hr/img-7.jpeg?ts=2020-01-05T14:36:30.950", "https://photos.harstatic.com/181190333/hr/img-10.jpeg?ts=2020-01-05T14:36:32.063", "https://photos.harstatic.com/181190333/hr/img-21.jpeg?ts=2020-01-05T14:36:34.767", "https://photos.harstatic.com/181190333/hr/img-12.jpeg?ts=2020-01-05T14:36:32.523"],
      desc: "Great condo in the heart of Clear Lake. Perfect location close to U of H, Johnson Space Center , Baybrook Mall , Kemah, dining and all of the activities you can imagine. Easy access to 45 and Beltway 8. If you are looking for a location that grants you access to all our area has to offer this is the location for you. Private little Patio loads of light and a fireplace. Split floor plan make this a great unit for roommates. Washer , Dryer and Fridge included along with 2 covered parking spaces. Large Master closet and additional storage on patio."
    },
    {
      group: "Houston",
      price: {
        listing: 79900,
        current: 72000
      },
      county: "Harris County",
      foreclosure: "yes",
      bath: {
        full: 2,
        half: 1
      },
      sqft: 3108,
      status: "For Sale",
      adr: "611 W Thompson Road",
      city: "Houston",
      zipcode: 76458,
      type: "Single Family",
      bed: 3,
      garage: 2,
      img: ["https://pics.harstatic.com/hr/WFARTX/154624/1.jpg", "https://pics.harstatic.com/hr/WFARTX/154624/2.jpg", "https://pics.harstatic.com/hr/WFARTX/154624/3.jpg"],
      desc: "Large, unique property. Split-level home with over 3000 sq ft. Downstairs features large living room with stained concrete floors, one bedroom with private entrance, one bathroom and laundry room. Upstairs features large kitchen, formal dining, office/loft space, 2 bedrooms with gorgeous hardwood floors and 2 bathrooms. Large backyard with man cave/she-shed possibilities. Great price for the space."
    },
    {
      group: "Houston",
      price: {
        listing: 209995,
        current: 209000
      },
      county: "Harris County",
      foreclosure: "no",
      bath: {
        full: 2,
        half: 5
      },
      sqft: 6715,
      status: "For Sale",
      adr: "22010 WESTERPINE LANE",
      city: "Katy",
      zipcode: 77449,
      type: "Single Family",
      bed: 4,
      garage: 2,
      img: ["https://photos.harstatic.com/181321392/hr/img-2.jpeg?ts=2020-01-04T00:05:05.573", "https://photos.harstatic.com/181321392/hr/img-1.jpeg?ts=2020-01-04T00:05:05.273", "https://photos.harstatic.com/181321392/hr/img-3.jpeg?ts=2020-01-04T00:05:05.787", "https://photos.harstatic.com/181321392/hr/img-4.jpeg?ts=2020-01-04T00:05:06.063", "https://photos.harstatic.com/181321392/hr/img-11.jpeg?ts=2020-01-04T00:05:07.877", "https://photos.harstatic.com/181321392/hr/img-15.jpeg?ts=2020-01-04T00:05:08.937"],
      desc: "This beautiful 4 bedroom, 2.5 bath is located in Westfield Village Subdivision. It has high vaulted ceilings and a massive backyard with no backyard neighbors. The master bedroom is located on the first floor with a jacuzzi tub and stand up shower. This plan has high vaulted ceilings, a large game room and an open concept that overlooks the family room. This very clean and well maintained home is loaded with lots of upgrades. This large kitchen has granite countertops and wood laminate floor through out living areas. Come see this home quickly before it goes off the market!!"
    },
    {
      group: "Houston",
      price: {
        listing: 155000,
        current: 155000
      },
      county: "Harris County",
      foreclosure: "no",
      bath: {
        full: 2,
        half: 0
      },
      sqft: 6715,
      status: "For Sale",
      adr: "6039 Willow Glen Drive",
      city: "Houston",
      zipcode: 77033,
      type: "Single Family",
      bed: 3,
      garage: 1,
      img: ["https://photos.harstatic.com/181345977/hr/img-1.jpeg?ts=2020-01-05T14:16:04.770", "https://photos.harstatic.com/181345977/hr/img-3.jpeg?ts=2020-01-05T14:16:05.287", "https://photos.harstatic.com/181345977/hr/img-7.jpeg?ts=2020-01-05T14:16:34.390"],
      desc: "Honey stop the car!!! Beautifully updated home, great for a first time home buyer. This home has been updated with engineered hardwood floors, carpet, tile, cabinets throughout, doors, windows, light fixtures, plumbing fixtures, brand new range/oven and the list goes on! House has had previous foundation work with a transferable warranty and underground plumbing has been updated, a breaker box and all mechanical systems. Nothing left to be done! Don't miss out! No Flooding! Even the washer/dryer and yard equipment are included!"
    },
    {
      group: "Houston",
      price: {
        listing: 500000,
        current: 500000
      },
      county: "Fort Bend County",
      foreclosure: "no",
      bath: {
        full: 3,
        half: 2
      },
      sqft: 9716,
      status: "For Sale",
      adr: "3215 Wimberly Place Lane",
      city: "Katy",
      zipcode: 77494,
      type: "Single Family",
      bed: 5,
      garage: 3,
      img: ["https://photos.harstatic.com/181320142/hr/img-8.jpeg?ts=2020-01-03T21:09:59.763", "https://photos.harstatic.com/181320142/hr/img-5.jpeg?ts=2020-01-03T21:09:58.990", "https://photos.harstatic.com/181320142/hr/img-2.jpeg?ts=2020-01-03T21:09:58.217", "https://photos.harstatic.com/181320142/hr/img-3.jpeg?ts=2020-01-03T21:09:58.490", "https://photos.harstatic.com/181320142/hr/img-9.jpeg?ts=2020-01-03T21:10:00"],
      desc: "Honey stop the car!!! Beautifully updated home, great for a first time home buyer. This home has been updated with engineered hardwood floors, carpet, tile, cabinets throughout, doors, windows, light fixtures, plumbing fixtures, brand new range/oven and the list goes on! House has had previous foundation work with a transferable warranty and underground plumbing has been updated, a breaker box and all mechanical systems. Nothing left to be done! Don't miss out! No Flooding! Even the washer/dryer and yard equipment are included!"
    }
  ])
});

// app.get('/person', function (req, res) {
//   res.send('<html><head></head><body><h1>Hey <img scr="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chrysanthemum_February_2008-1.jpg/249px-Chrysanthemum_February_2008-1.jpg" alt="flower"/></h1></body></html>')
// });

app.listen(port);




// app.use('/assets', express.static(__dirname + '/public'));

// app.use('/', function (req, res, next) {
//   console.log('Request Url:' + req.url);
// })

// app.get('/', function (req, res) {
//   res.send('<html><head> <link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hey</h1></body></html>')
// });

// app.get('/person/:id', function (req, res) {
//   res.send('<html><head></head><body><h1>Hey:' + req.params.id + '</h1></body></html>')
// });
