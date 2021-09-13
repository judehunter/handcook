import { Button } from './Button';
import {globalCss, styled} from './stitches.config'

const globalStyles = globalCss({
  'body': { margin: 0, padding: 0 },
});

export const Root = () => {
  globalStyles();
  return <div>
    <Button>Test</Button>
  </div>
}