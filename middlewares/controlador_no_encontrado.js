const controlador_no_encontrado = (req, res, next) => {
    console.log(res);
    res.status(404).json({
        success: false,
        message: `Con el metodo ${req.method} no se encontro la url ${req.url} `
    });
};


export default controlador_no_encontrado