import { Router, Request, Response } from 'express'
import * as animalRoutes from '../routes/animal-routes'
import * as middlewares from '../routes/middlewares'
import * as userRoutes from '../routes/user-routes'
import * as communityRoutes from '../routes/community-routes'
import * as marketRoutes from '../routes/market-routes'
import * as adminRoutes from '../routes/admin-routes'
import * as reservationRoutes from "../routes/reservation-routes"
import * as locationRoutes from "../routes/location-routes"

import * as Const from '../const'

export const appRouter = Router()
const version = Const.CURR_API_VERSION

// User
appRouter.post(version + '/users/register', middlewares.log, userRoutes.registerPost)
appRouter.post(version + '/users/login', middlewares.log, userRoutes.loginPost)
appRouter.get(version + '/users', middlewares.log, userRoutes.getAllUsers)
appRouter.get(version + '/users/current', middlewares.log, middlewares.verifyToken, userRoutes.getCurrentUser)
appRouter.get(version + '/users/:id', middlewares.log, userRoutes.getUser)
appRouter.patch(
  version + '/users/:id',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.patchUser
)
appRouter.put(
  version + '/users/:id/scores',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.putScore
)
appRouter.get(
  version + '/users/:id/score/',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.getScore
)
appRouter.get(
  version + '/users/:id/cart',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.getCart
)
appRouter.put(
  version + '/users/:id/cart',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.putInCart
)
appRouter.delete(
  version + '/users/:id/cart',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.deleteCart
)
appRouter.put(
  version + '/users/:id/animals',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.putAnimal
)
appRouter.put(
  version + '/users/:id/description',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.updateUserDescription
)
appRouter.put(
  version + '/users/:id/picture',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  middlewares.multerMiddleware('profile'),
  userRoutes.putPicture
)
appRouter.put(
  version + '/users/:id/animals',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.putAnimal
)
appRouter.delete(
  version + '/users/:uid/animals/:aid',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.deleteAnimal
)
appRouter.put(
  version + '/users/:uid/animals/:aid',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.updateAnimal
)
appRouter.put(
  version + '/users/:uid/animals/:id/picture',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  middlewares.multerMiddleware('profileAnimal'),
  userRoutes.putAnimalPicture
)
appRouter.get(
  version + '/users/:id/orders',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.getUserOrders
)

appRouter.post(
  version + '/users/:id/orders',
  middlewares.log,
  middlewares.verifyToken,
  middlewares.verifyUser,
  userRoutes.postUserOrders
)

// Admins
appRouter.post(version + '/admins/login', middlewares.log, adminRoutes.postLogin)

// Animals
appRouter.get(version + '/animals/codes', middlewares.log, animalRoutes.getAnimalCodes)
appRouter.get(version + '/animals/:id', middlewares.log, middlewares.verifyToken, animalRoutes.getAnimalCodes)
appRouter.patch(version + '/animal/:id', middlewares.log, middlewares.verifyToken, animalRoutes.patchAnimal)

// Community
appRouter.get(version + '/community/game/', middlewares.log, communityRoutes.getGames)
appRouter.get(version + '/community/game/scoreboard', middlewares.log, communityRoutes.getScoreboard)

// Products
appRouter.get(version + '/products/', middlewares.log, marketRoutes.getProducts) //retrieve all products
appRouter.get(version + '/products/:id', middlewares.log, marketRoutes.getProduct) //search
appRouter.delete(version + '/products/:id', middlewares.log, marketRoutes.deleteProduct) //remove
appRouter.patch(version + '/products/:id', middlewares.log, middlewares.verifyToken, marketRoutes.patchProduct)
appRouter.post(version + '/products', middlewares.log, marketRoutes.postProduct) //insert TODO add ADMIN middleware
appRouter.get(version + '/products/:id/reviews', middlewares.log, marketRoutes.getReviews)
appRouter.post(version + '/products/:id/reviews', middlewares.log, marketRoutes.postReview)
appRouter.get(version + '/products/:id/reviews/sum-up', middlewares.log, marketRoutes.getProductSumUp)

// Reservations
appRouter.get(version + '/users/:id/reservations', middlewares.log, middlewares.verifyToken, middlewares.verifyUser, reservationRoutes.getReservations)
appRouter.post(version + '/users/:id/reservations', middlewares.log, middlewares.verifyToken, middlewares.verifyUser, reservationRoutes.postReservation)
appRouter.delete(version + '/reservations/:id', middlewares.log, middlewares.verifyToken, middlewares.verifyUser, reservationRoutes.deleteReservation)

// Location
appRouter.get(version + '/locations', middlewares.log, locationRoutes.getLocation) 