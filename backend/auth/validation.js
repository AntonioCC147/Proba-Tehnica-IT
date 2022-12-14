const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(8)
        .max(32)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    email: Joi.string()
        .email({ minDomainSegments: 1, tlds: { allow: ['@stud.acs.upb.ro'] } })
})

const valid_pass = schema.validate({
    password: 'the field is not between 8 and 32 characters'
})

const valid_email = schema.validate({
    email: 'the field must be a valid email / the field must end in @stud.acs.upb.ro'
})

    .with('username')
    .xor('password', 'access_token')

schema.validate({ username: 'abc' });

try {
    const value = await schema.validateAsync({ username: 'abc' });
}
catch (err) { }