import { describe, expect, it } from 'vitest'
import { createApp } from 'honox/server'

const app = createApp()

describe('HonoX routes', () => {
  it('renders the home page with the default name and counter island', async () => {
    const response = await app.request('/')
    const html = await response.text()

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toMatch(/text\/html/)
    expect(html).toContain('Hello, Hono!')
    expect(html).toContain('Increment')
  })

  it('renders the name from the query string', async () => {
    const response = await app.request('/?name=Codex')
    const html = await response.text()

    expect(response.status).toBe(200)
    expect(html).toContain('Hello, Codex!')
  })

  it('returns a 404 for an unknown route', async () => {
    const response = await app.request('/does-not-exist')

    expect(response.status).toBe(404)
    expect(await response.text()).toContain('404 Not Found')
  })
})
