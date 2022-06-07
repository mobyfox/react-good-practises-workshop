import { render, screen } from '@testing-library/react'
import Cart from './simple-ts-app/src/components/cart'

describe('<Cart />', () => {
  it('render happy case', () => {
    const items = [{ name: 'item 1', price: 0.01 }, { name: 'item 2', price: 0.01 }, { name: 'item 3', price: 1.00 }]
    render(<Cart items={items} />)
    const el = screen.getByRole('banner')
    expect(el).toBeInTheDocument()
  })
})
