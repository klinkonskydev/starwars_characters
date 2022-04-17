import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'utils/test-utils'

import NavigateBar from '.'

const onButtonClick = jest.fn()

describe('<NavigateBar />', () => {
  beforeEach(() => {
    render(<NavigateBar array={[1, 2]} loading={false} initialValue={1} onButtonClick={onButtonClick} />)
  })

  it('should render correctly', () => {
    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /2/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('should switch the current page', async () => {
    expect(screen.getByText(/current page: 1/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /2/ }))

    await waitFor(() => {
      expect(screen.queryByText(/current page: 1/i)).not.toBeInTheDocument()
    })
    expect(screen.getByText(/current page: 2/i)).toBeInTheDocument()
  })

  it('should return the value when the button has been clicked', async () => {

    expect(screen.getByText(/current page: 1/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /2/ }))

    await waitFor(() => {
      expect(onButtonClick).toBeCalled()
    })

    expect(onButtonClick).toBeCalledWith(2)
  })
})
