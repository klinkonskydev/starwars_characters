import { screen, waitFor } from '@testing-library/react'
import { render } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import { CharactersResponse } from 'types'

import HomeTemplate from '.'

import charactersMock from 'components/CardList/mock'
const getPeopleListMock = jest.fn()

jest.mock('services/getPeopleList', () => ({
  __esModule: true,
  default: ({ page }: { page: number }) => getPeopleListMock(page)
}))

jest.mock('components/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="mock Header" />
}))

jest.mock('components/CardList', () => ({
  __esModule: true,
  default: () => <div data-testid="mock CardList" />
}))

jest.mock('components/CardList/skeleton', () => ({
  __esModule: true,
  default: () => <div data-testid="mock CardListSkeleton" />
}))

const pushMock = jest.fn()

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    push: () => pushMock(),
    query: () => ({
      page: 1
    })
  })
}))

const items: CharactersResponse = {
  count: 0,
  results: [],
  previous: '',
  next: ''
}

describe('<HomeTemplate />', () => {
  it('should render the heading', () => {
    render(<HomeTemplate characters={items} />)

    expect(screen.getByTestId(/mock header/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock CardList/i)).toBeInTheDocument()
  })

  it('should render the itens correctly', async () => {
    render(<HomeTemplate characters={charactersMock} />)

    const nextButton = screen.getByRole('button', { name: /go to page 4/i })

    expect(nextButton).toBeInTheDocument()
    userEvent.click(nextButton)

    await waitFor(() => {
      expect(getPeopleListMock).toBeCalled()
    })
  })
})
