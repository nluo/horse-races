import { getRaces, getRacesWithCompetitors } from '../service/retrieveData'

export default function (router) {
  router.use('/heartbeat', function (req, res, next) {
    return res.send('Heartbeat')
  })

  router.use('/races', function (req, res, next) {
    return getRacesWithCompetitors().then((races) => {
      res.json(races)
    }).catch((error) => {
      return next(new Error(error))
    })
  })
  return router
}
