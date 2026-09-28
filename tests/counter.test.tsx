// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { render } from 'hono/jsx/dom'
import Counter from '../app/islands/counter'

describe('Counter island', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.append(container)
    render(<Counter />, container)
  })

  afterEach(() => {
    container.remove()
  })

  it('starts at zero', () => {
    expect(container.querySelector('p')?.textContent).toBe('0')
  })

  it('increments when clicked', async () => {
    container.querySelector('button')?.click()
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(container.querySelector('p')?.textContent).toBe('1')
  })
})
