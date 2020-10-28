import { Logger } from '@nestjs/common'

export const LoggerMiddleware = (req, res, next) => {
  Logger.debug(
    `💬  ${
      req.headers['user-agent']
        ? req.headers['user-agent'].split(') ')[0]
        : req.headers
    })`,
    'Bootstrap',
    false,
  )
  next()
}
