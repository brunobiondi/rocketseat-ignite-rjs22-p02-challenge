import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  padding: 2rem 2.5rem 0;

  display: flex;
  flex-direction: row;
  gap: 2rem;
`

const ColumnBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const ColumnUserInfo = styled(ColumnBase)`
  min-width: 40rem;
`
export const ColumnResumeOrder = styled(ColumnBase)`
  min-width: 28rem;
`
