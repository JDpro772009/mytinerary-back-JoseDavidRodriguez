import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"

const cities = [
    {
      nombre: "Barranquilla",
      foto: "https://images.pexels.com/photos/12097112/pexels-photo-12097112.jpeg",
      pais: "Colombia",
      continente: "America",
      descripcion: "Barranquilla is a port city and the main industrial center of Colombia's Caribbean coast.",
      divisa: "Colombian Peso",
      iternario:"672983641dc9a012a2f1abaf"
    },
    {
      nombre: "Buenos Aires",
      foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/03201757/Ciudades-mas-caras-de-America-Latina-Buenos-Aires.jpg",
      pais: "Argentina",
      continente: "America",
      descripcion: "Buenos Aires is the capital of Argentina, known for its European architecture and rich cultural life.",
      divisa: "Argentine Peso",
      iternario:"672983641dc9a012a2f1abb0"
    },
    {
      nombre: "Madrid",
      foto: "https://images.pexels.com/photos/1563232/pexels-photo-1563232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Spain",
      continente: "Europe",
      descripcion: "Madrid, the capital of Spain, is famous for its art, history, and vibrant nightlife.",
      divisa: "Euro",
      iternario:"672983641dc9a012a2f1abb1"
    },
    {
      nombre: "Mexico City",
      foto: "https://images.pexels.com/photos/18439604/pexels-photo-18439604/free-photo-of-ciudad-puesta-de-sol-calle-edificios.jpeg",
      pais: "Mexico",
      continente: "America",
      descripcion: "Mexico City is a large metropolis and the capital of Mexico, known for its culture and gastronomy.",
      divisa: "Mexican Peso",
      iternario:"672983641dc9a012a2f1abb2"
    },
    {
      nombre: "Santiago",
      foto: "https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Chile",
      continente: "America",
      descripcion: "Santiago, the capital of Chile, is a modern city surrounded by the Andes mountains.",
      divisa: "Chilean Peso"
    },
    {
      nombre: "Lima",
      foto: "https://images.pexels.com/photos/22484277/pexels-photo-22484277/free-photo-of-mar-ciudad-trafico-playa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/22484275/pexels-photo-22484275/free-photo-of-ciudad-puesta-de-sol-oceano-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Peru",
      continente: "America",
      descripcion: "Lima is the capital of Peru, famous for its colonial history and world-renowned gastronomy.",
      divisa: "Sol",
      iternario:"672983641dc9a012a2f1abb3"
    },
    {
      nombre: "Bogotá",
      foto: "https://images.pexels.com/photos/28907376/pexels-photo-28907376/free-photo-of-vista-panoramica-del-skyline-urbano-de-bogota.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Colombia",
      continente: "America",
      descripcion: "Bogotá is the capital of Colombia, located in the Andean highlands, known for its museums and cultural life.",
      divisa: "Colombian Peso"
    },
    {
      nombre: "Montevideo",
      foto: "https://images.pexels.com/photos/9320831/pexels-photo-9320831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Uruguay",
      continente: "America",
      descripcion: "Montevideo is the capital of Uruguay, known for its coastline and relaxed atmosphere.",
      divisa: "Uruguayan Peso",
      iternario:"672983641dc9a012a2f1abb4"
    },
    {
      nombre: "Caracas",
      foto: "https://images.pexels.com/photos/4148187/pexels-photo-4148187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Venezuela",
      continente: "America",
      descripcion: "Caracas, the capital of Venezuela, is known for its mountainous geography and rich history.",
      divisa: "Bolívar"
    },
    {
      nombre: "Quito",
      foto: "https://images.pexels.com/photos/5293883/pexels-photo-5293883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Ecuador",
      continente: "America",
      descripcion: "Quito, the capital of Ecuador, is famous for its colonial historic center and location in the Andes.",
      divisa: "United States Dollar",
      iternario:"672983641dc9a012a2f1abb5"
    },
    {
      nombre: "La Paz",
      foto: "https://images.pexels.com/photos/5198849/pexels-photo-5198849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Bolivia",
      continente: "America",
      descripcion: "La Paz is one of the capitals of Bolivia, located in the Andes and known for its altitude.",
      divisa: "Boliviano"
    },
    {
      nombre: "Asunción",
      foto: "https://images.pexels.com/photos/5382674/pexels-photo-5382674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Paraguay",
      continente: "America",
      descripcion: "Asunción is the capital of Paraguay, known for its historic buildings and nature.",
      divisa: "Guaraní"
    },
    {
      nombre: "Brasilia",
      foto: "https://images.pexels.com/photos/27794163/pexels-photo-27794163/free-photo-of-ciudad-paisaje-cielo-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Brazil",
      continente: "America",
      descripcion: "Brasilia is the capital of Brazil, famous for its modernist architecture designed by Oscar Niemeyer.",
      divisa: "Brazilian Real"
    },
    {
      nombre: "San Juan",
      foto: "https://images.pexels.com/photos/10040007/pexels-photo-10040007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      pais: "Puerto Rico",
      continente: "America",
      descripcion: "San Juan is the capital of Puerto Rico, famous for its vibrant culture and beaches.",
      divisa: "United States Dollar"
    },
    {
      nombre: "Panama City",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ciudad_de_Panam%C3%A1_-_Panam%C3%A1.jpg/800px-Ciudad_de_Panam%C3%A1_-_Panam%C3%A1.jpg",
      pais: "Panama",
      continente: "America",
      descripcion: "Panama City is the capital of Panama, famous for the Panama Canal and its financial center.",
      divisa: "Balboa and United States Dollar"
    }
  ];
  

City.insertMany(cities)
