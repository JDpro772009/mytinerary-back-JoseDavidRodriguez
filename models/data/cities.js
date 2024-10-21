import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"

const cities = [
    {
      nombre: "Barranquilla",
      foto: "https://example.com/barranquilla.jpg",
      pais: "Colombia",
      continente: "America",
      descripcion: "Barranquilla is a port city and the main industrial center of Colombia's Caribbean coast.",
      divisa: "Colombian Peso"
    },
    {
      nombre: "Buenos Aires",
      foto: "https://example.com/buenosaires.jpg",
      pais: "Argentina",
      continente: "America",
      descripcion: "Buenos Aires is the capital of Argentina, known for its European architecture and rich cultural life.",
      divisa: "Argentine Peso"
    },
    {
      nombre: "Madrid",
      foto: "https://example.com/madrid.jpg",
      pais: "Spain",
      continente: "Europe",
      descripcion: "Madrid, the capital of Spain, is famous for its art, history, and vibrant nightlife.",
      divisa: "Euro"
    },
    {
      nombre: "Mexico City",
      foto: "https://example.com/cdmx.jpg",
      pais: "Mexico",
      continente: "America",
      descripcion: "Mexico City is a large metropolis and the capital of Mexico, known for its culture and gastronomy.",
      divisa: "Mexican Peso"
    },
    {
      nombre: "Santiago",
      foto: "https://example.com/santiago.jpg",
      pais: "Chile",
      continente: "America",
      descripcion: "Santiago, the capital of Chile, is a modern city surrounded by the Andes mountains.",
      divisa: "Chilean Peso"
    },
    {
      nombre: "Lima",
      foto: "https://example.com/lima.jpg",
      pais: "Peru",
      continente: "America",
      descripcion: "Lima is the capital of Peru, famous for its colonial history and world-renowned gastronomy.",
      divisa: "Sol"
    },
    {
      nombre: "Bogotá",
      foto: "https://example.com/bogota.jpg",
      pais: "Colombia",
      continente: "America",
      descripcion: "Bogotá is the capital of Colombia, located in the Andean highlands, known for its museums and cultural life.",
      divisa: "Colombian Peso"
    },
    {
      nombre: "Montevideo",
      foto: "https://example.com/montevideo.jpg",
      pais: "Uruguay",
      continente: "America",
      descripcion: "Montevideo is the capital of Uruguay, known for its coastline and relaxed atmosphere.",
      divisa: "Uruguayan Peso"
    },
    {
      nombre: "Caracas",
      foto: "https://example.com/caracas.jpg",
      pais: "Venezuela",
      continente: "America",
      descripcion: "Caracas, the capital of Venezuela, is known for its mountainous geography and rich history.",
      divisa: "Bolívar"
    },
    {
      nombre: "Quito",
      foto: "https://example.com/quito.jpg",
      pais: "Ecuador",
      continente: "America",
      descripcion: "Quito, the capital of Ecuador, is famous for its colonial historic center and location in the Andes.",
      divisa: "United States Dollar"
    },
    {
      nombre: "La Paz",
      foto: "https://example.com/lapaz.jpg",
      pais: "Bolivia",
      continente: "America",
      descripcion: "La Paz is one of the capitals of Bolivia, located in the Andes and known for its altitude.",
      divisa: "Boliviano"
    },
    {
      nombre: "Asunción",
      foto: "https://example.com/asuncion.jpg",
      pais: "Paraguay",
      continente: "America",
      descripcion: "Asunción is the capital of Paraguay, known for its historic buildings and nature.",
      divisa: "Guaraní"
    },
    {
      nombre: "Brasilia",
      foto: "https://example.com/brasilia.jpg",
      pais: "Brazil",
      continente: "America",
      descripcion: "Brasilia is the capital of Brazil, famous for its modernist architecture designed by Oscar Niemeyer.",
      divisa: "Brazilian Real"
    },
    {
      nombre: "San Juan",
      foto: "https://example.com/sanjuan.jpg",
      pais: "Puerto Rico",
      continente: "America",
      descripcion: "San Juan is the capital of Puerto Rico, famous for its vibrant culture and beaches.",
      divisa: "United States Dollar"
    },
    {
      nombre: "Panama City",
      foto: "https://example.com/panama.jpg",
      pais: "Panama",
      continente: "America",
      descripcion: "Panama City is the capital of Panama, famous for the Panama Canal and its financial center.",
      divisa: "Balboa and United States Dollar"
    }
  ];
  

City.insertMany(cities)
