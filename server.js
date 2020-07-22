const express = require('express');
const server = express();
const cors = require('cors');
const port = 3000;
server.use(cors());

const dogSearch = ["https://en.wikipedia.org/wiki/Dog", "https://www.petfinder.com/dog-breeds/", "https://dogtime.com/dog-breeds/profiles", "https://twitter.com/dog_feelings?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", "https://www.dogstrust.org.uk/", "http://www.vetstreet.com/dogs/", "https://www.rspca.org.uk/adviceandwelfare/pets/dogs", "https://www.nationalgeographic.com/animals/mammals/d/domestic-dog/", "https://www.battersea.org.uk/dogs/dog-rehoming-gallery", "https://www.aspca.org/pet-care/dog-care"]
const dogSearchInfo = ["Wikipedia - Dog", "Petfinder - Dog Breeds", "Dogtime - Dog Breed Profiles", "Twitter - Dog feelings", "Dogstrust.org", "Vetstreet - Dogs", "RSPCA - Dogs", "National Geographic - Domestic Dogs", "Battersea - Dog Adoption", "ASPCA - Dog Care"]
const carSearch = ["https://www.carmagazine.co.uk/", "https://www.autotrader.co.uk/", "https://www.motors.co.uk/", "https://en.wikipedia.org/wiki/Car", "https://www.whatcar.com/", "https://www.autocar.co.uk/", "https://www.buyacar.co.uk/", "https://www.carstore.com/used-cars/", "https://www.ford.co.uk/cars", "https://www.topgear.com/car-news/electric/these-are-the-top-ten-everyday-electric-cars-you-need-to-know-about"]
const carSearchInfo = ["CAR Magazine", "AutoTrader UK", "Motors.co.uk", "Wikipedia - Car", "What Car? Reviews", "Autocar Reviews", "BuyACar Dealers", "Carstore Used Cars", "Brand New Ford Cars", "Top Gear Best Electric Cars 2020"]
server.get(`/`, (req, res) => res.send('hello world'));

server.get(`/dogsearch`, (req, res) => res.send(JSON.stringify(dogSearch )))
server.get(`/doginfo`, (req, res) => res.send(JSON.stringify(dogSearchInfo)))
server.get(`/carsearch`, (req, res) => res.send(JSON.stringify(carSearch )))
server.get(`/carinfo`, (req, res) => res.send(JSON.stringify(carSearchInfo)))

server.get(`/lucky`, (req, res) => res.send(JSON.stringify(`${dogSearch[(Math.floor(Math.random()* 10))]}`)))

server.listen(port, () => console.log(`server location at http://localhost:${port}/`))
