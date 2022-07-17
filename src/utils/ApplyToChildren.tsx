import React, {forwardRef} from 'react';

export const ApplyToChildren = forwardRef(({children, ...rest}: any, ref) => {
  const firstChild = React.Children.toArray(children)[0];

  if (!React.isValidElement(firstChild)) {
    throw new Error('ApplyToChildren must be used with a valid child element.');
  }
  return <>{React.cloneElement(firstChild, {...rest, ref})}</>;
});
