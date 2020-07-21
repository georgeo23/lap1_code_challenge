const express = require('express');
const server = express();
const cors = require('cors');
const port = 3000;
server.use(cors());

const dogSearch = ["https://en.wikipedia.org/wiki/Dog", "https://www.petfinder.com/dog-breeds/", "https://dogtime.com/dog-breeds/profiles", "https://twitter.com/dog_feelings?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", "https://www.dogstrust.org.uk/", "http://www.vetstreet.com/dogs/", "https://www.rspca.org.uk/adviceandwelfare/pets/dogs", "https://www.nationalgeographic.com/animals/mammals/d/domestic-dog/", "https://www.battersea.org.uk/dogs/dog-rehoming-gallery", "https://www.aspca.org/pet-care/dog-care"]
server.get(`/`, (req, res) => res.send('hello world'));

server.get(`/search`, (req, res) => res.send({dogSearch}))

server.get(`/lucky`, (req, res) => res.send(JSON.stringify(`${dogSearch[(Math.floor(Math.random()* 10))]}`)))

server.listen(port, () => console.log(`server location at http://localhost:${port}/`))
