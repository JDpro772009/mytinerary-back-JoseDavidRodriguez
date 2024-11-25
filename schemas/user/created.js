import joi from "joi-oid"

const schema_user = joi.object({
    nombre:joi.string().required().messages({"string.empty": "El nombre es obligatorio.",}),
    apellido:joi.string().required().messages({"string.empty": "El apellido es obligatorio.",}),
    correo:joi.string().required().messages({"string.empty": "El correo es obligatorio.",}),
    foto:joi.string().required().messages({"string.empty": "La foto es obligatoria.",}),
    pais:joi.string().required().messages({"string.empty": "El pais es obligatorio.",}),
    contraseña:joi.string().required().pattern(/^[^<>"#%&/()=?¡!¨*]*$/).messages({
        "string.pattern.base": "La contraseña no puede contener los caracteres '<', '>', '/', '\"' o '&'.",
        "string.empty": "La contraseña es obligatoria.",
      }),
    online:joi.boolean()
})

export default schema_user