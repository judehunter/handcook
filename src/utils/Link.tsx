import Link_ from 'next/link';
import {useRouter} from 'next/router';
import tw from 'twin.macro';
import {ApplyToChildren} from './ApplyToChildren';

export const Link = ({
  children,
  href,
  ...rest
}: {
  children;
  href;
  className?;
}) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link_ {...{href}} {...rest}>
      <ApplyToChildren
        className={`${rest.className ?? ''} ${isActive ? 'active' : ''}`}
      >
        {children}
      </ApplyToChildren>
    </Link_>
  );
};
