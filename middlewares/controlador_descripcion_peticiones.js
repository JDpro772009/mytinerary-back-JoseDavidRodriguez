import chalk from "chalk";
const controlador_descripcion_peticiones = (respuesta,req, res, next) => {
 
    
    
    
    if(respuesta.method == "GET"){

        let url = respuesta.originalUrl.split("/")

        if(url.includes("all")){

        console.log(chalk.hex("33ffd1")(`Acabas de recibir tod@s l@s ${url[url.indexOf("all")-1]}`));
        
        }else{

        console.log(chalk.hex("33ffd1")(`Se recibieron l@s ${url[url.indexOf("api")+1]} l@s cuales cumplan con que la/el ${url[url.indexOf("api")+2]} sea igual a ${decodeURIComponent(url[url.indexOf("api")+3])}`))
    }
    }
    
     
};

export default controlador_descripcion_peticiones