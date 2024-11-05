import "dotenv/config.js"
import "../../config/database.js"
import Itinerary from "../Itinerary.js";

const itineraries = [
    {
        foto:[ "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        nombre: "John Doe",
        precio: ["💵","💵","💵","💵"],
        duracion: 60,
        likes: 250,
        hashtags: ["#travel", "#beach", "#adventure"]
    },
    {
        foto: ["https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        nombre: "Jane Smith",
        precio: ["💵","💵"],
        duracion: 90,
        likes: 150,
        hashtags: ["#mountain", "#nature", "#hiking"]
    },
    {
        foto: ["https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        nombre: "Mike Johnson",
        precio: ["💵","💵","💵","💵","💵"],
        duracion: 120,
        likes: 300,
        hashtags: ["#city", "#tourism", "#history"]
    },
    {
        foto: ["https://images.pexels.com/photos/3214690/pexels-photo-3214690.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        nombre: "Emily Brown",
        precio: ["💵","💵","💵","💵","💵"],
        duracion: 180,
        likes: 450,
        hashtags: ["#photography", "#art", "#architecture"]
    },
    {
        foto: ["https://images.pexels.com/photos/29177086/pexels-photo-29177086/free-photo-of-hombre-feliz-disfrutando-de-la-naturaleza-junto-a-un-lago-en-buenos-aires.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        nombre: "Chris Wilson",
        precio: ["💵","💵"],
        duracion: 30,
        likes: 80,
        hashtags: ["#food", "#culture", "#travel"]
    },
    {
        foto: ["https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        nombre: "Sophia Taylor",
        precio: ["💵","💵","💵"],
        duracion: 45,
        likes: 120,
        hashtags: ["#adventure", "#nature", "#exploration"]
    },
    {
        foto: ["https://images.pexels.com/photos/18865570/pexels-photo-18865570/free-photo-of-hombre-cara-enfrentarse-retrato.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        nombre: "David Lee",
        precio: ["💵","💵","💵","💵"],
        duracion: 60,
        likes: 200,
        hashtags: ["#beach", "#relax", "#vacation"]
    }

];
  

Itinerary.insertMany(itineraries)
