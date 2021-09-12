import {styled} from '../stitches.config'

const _HelloWorld = styled('div', {
  color: '$gray500',
})

export const Root = () => {
  return <div><_HelloWorld>HelloWorld</_HelloWorld></div>
}