import { getNextRacesWithCompetitors } from '../service/retrieveData'

export default function (router) {
  router.use('/heartbeat', function (req, res, next) {
    return res.send('Heartbeat')
  })

  router.use('/races', async function (req, res, next) {
    try {
      // Get next 5 races
      const races = await getNextRacesWithCompetitors(5)
      return res.json(races)
    } catch (error) {
      return next(error)
    }
  })
  return router
}
