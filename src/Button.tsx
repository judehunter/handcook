import { styled } from "./stitches.config"

export const Button = ({children}) => {
  return <Button.Button>{children}</Button.Button>
}

Button.Button = styled('div', {
  padding: '1em 2em',
  backgroundColor: '$gray400',
  color: '$white',
  display: 'flex-inline',
  test
})