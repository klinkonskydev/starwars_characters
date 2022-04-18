import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'utils/test-utils'

import NavigateBar from '.'

describe('<NavigateBar />', () => {
  it('should render correctly', async () => {
    const onChangeMock = jest.fn()
    render(<NavigateBar disabled={false} count={10} onChange={onChangeMock} />)

    const nextPage = screen.getByRole('button', { name: /go to next page/i });

    expect(nextPage).toBeInTheDocument()

    userEvent.click(nextPage)

    await waitFor(() => {
      expect(onChangeMock).toBeCalled()
    })

    expect(onChangeMock).toBeCalledWith(2)

  })
})
