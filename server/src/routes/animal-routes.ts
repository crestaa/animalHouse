import * as Const from '../const'
import { Request, Response } from 'express'
import JsonError from '../json/JsonError'
import * as AnimalService from '../services/animal-service'

export const getAnimalCodes = async (_: Request, res: Response) =>
  res.status(Const.STATUS_OK).json(await AnimalService.getAnimalCodes())

export const getAnimal = async (req: Request, res: Response) => {
  const animal = await AnimalService.findById(req.params.id)

  if (!animal)
    return res.status(Const.STATUS_BAD_REQUEST).json(new JsonError(`Can\'t find animal with id ${req.params.id} `))

  // Check user
  if (animal.userId !== req.authData.id)
    return res
      .status(Const.STATUS_UNAUTHORIZED)
      .json(new JsonError("Can't access animal with id " + animal._id + ' with this user'))
  else {
    return res.status(Const.STATUS_OK).json(animal)
  }
}