import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.background.dark};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${Colors.text.white};
`

export { HeaderContainer }
