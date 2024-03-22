import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.object({
    street: Joi.string().required(),
    suite: Joi.string().required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
    geo: Joi.object({
      lat: Joi.string().required(),
      lng: Joi.string().required(),
    }),
  }).required(),
  phone: Joi.string().required(),
  website: Joi.string().required(),
  company: Joi.object({
    name: Joi.string().required(),
    catchPhrase: Joi.string().required(),
    bs: Joi.string().required(),
  }).required(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string(),
  username: Joi.string(),
  email: Joi.string(),
  address: Joi.object({
    street: Joi.string(),
    suite: Joi.string(),
    city: Joi.string(),
    zipcode: Joi.string(),
    geo: Joi.object({
      lat: Joi.string(),
      lng: Joi.string(),
    }),
  }),
  phone: Joi.string(),
  website: Joi.string(),
  company: Joi.object({
    name: Joi.string(),
    catchPhrase: Joi.string(),
    bs: Joi.string(),
  }),
});
