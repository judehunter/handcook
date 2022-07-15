import React from 'react';

export const ApplyToChildren = ({children, ...rest}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && (rest as any).className) {
      return React.cloneElement(child, rest);
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};
