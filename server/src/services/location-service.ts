import JsonError from '../json/JsonError'
import type { ILocation } from '../entities/Location';
import Location from '../entities/Location';

export const getAllLocation = async (): Promise<ILocation[]> => {
  try {
    const location = (await Location.find({})) 
    return location
  } catch (err) {
    throw new JsonError(`Cannot find location (${err.message})`)
  }
}