import Pagination from '@mui/material/Pagination'
import { useRouter } from 'next/router'
import * as S from './styles'

export type NavigateBarProps = {
  disabled: boolean
  count: number
  onChange: (currentPage: number) => void
}

const NavigateBar = ({ disabled, count, onChange }: NavigateBarProps) => {
  const { query } = useRouter()
  const handleChange = (page: number) => {
    onChange(page)
  }

  return (
    <S.Wrapper>
      <Pagination
        defaultPage={Number(query.page || 1)}
        count={Math.ceil(count / 10)}
        disabled={disabled}
        onChange={(_, pageSelect) => handleChange(pageSelect)}
        color="primary"
      />
    </S.Wrapper>
  )
}
export default NavigateBar
