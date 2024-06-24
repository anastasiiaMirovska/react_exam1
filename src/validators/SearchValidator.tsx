import Joi from "joi";


const SearchValidator = Joi.object({
    filmName:Joi.string().min(2).allow("").messages({
        "string.min":"Statement is too short"
    })
})

export default SearchValidator
