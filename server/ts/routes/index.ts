import { getNext5RacesWithCompetitors } from '../service/retrieveData'

export default function (router) {
  router.use('/heartbeat', function (req, res, next) {
    return res.send('Heartbeat')
  })

  router.use('/races', async function (req, res, next) {
    try {
      const races = await getNext5RacesWithCompetitors()
      return res.json(races)
    } catch (error) {
      return next(error)
    }
  })
  return router
}
