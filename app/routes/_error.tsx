import type { ErrorHandler } from 'hono'

const handler: ErrorHandler = (e, c) => {
  if ('getResponse' in e) {
    // Preserve the status and headers carried by Hono's HTTPException response.
    return e.getResponse()
  }
  console.error(e.message)
  c.status(500)
  return c.render('Internal Server Error')
}

export default handler
