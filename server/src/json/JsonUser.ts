import * as JsonAnimal from "./JsonAnimal"

export interface JsonUserCreation {
  username: string,
  password: string,
  email: string,
  firstName: string,
  lastName: string
}

export interface JsonUser {
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
  animals: JsonAnimal.JsonAnimal[],
  address: JsonAddress
}

export interface JsonAddress {
  country: string,
  city: string,
  street: string,
  cap: number
}

export interface JsonLogin {
  username: string
  password: string
}
