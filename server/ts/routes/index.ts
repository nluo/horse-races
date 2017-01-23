export default function (router) {
  router.use('/heartbeat', function (req, res, next) {
    return res.send('Heartbeat')
  })
  return router
}
