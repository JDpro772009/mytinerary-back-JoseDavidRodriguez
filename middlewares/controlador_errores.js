const error_handler = (error, req, res, next) => {
    console.log(error);
 
    
    res.status(500).json({
        success: false,
        Error:error.message,
        message: "A ocurrido un Error"
    });
};

export default error_handler