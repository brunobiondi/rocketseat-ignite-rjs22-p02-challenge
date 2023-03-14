import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding-bottom: 10rem;
`

export const Template = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
