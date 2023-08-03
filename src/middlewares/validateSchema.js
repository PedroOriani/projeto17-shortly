export async function validateSchema(schema){
    return (req, res, next) => {
        const validation = schema.validate(req.body, { aboryEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(422).send(errors)
        }

        next()
    }
}