import {Icon} from '@iconify/react';
import tw, {css} from 'twin.macro';
import {Link} from './utils/Link';

const navBarItems = [
  {
    icon: 'bx:food-tag',
    name: 'recipes',
    link: '/',
    color: '',
  },
  {
    icon: 'uil:schedule',
    name: 'schedule',
    link: 'calendar',
    color: '',
  },
  {
    icon: 'tabler:chef-hat',
    name: 'cook',
    link: '/cookmode',
    color: '',
  },
] as const;

const NavBarItem = ({item}: {item: typeof navBarItems[number]}) => {
  return (
    <Link href={item.link}>
      <a tw="flex flex-col items-center space-y-1">
        <Icon icon={item.icon} height={24} />
        <div tw="text-center font-size[0.65rem] tracking-wide font-weight[500]">{item.name}</div>
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div tw="w-full flex flex-col justify-center items-center space-y-8">
      {navBarItems.map((x) => (
        <NavBarItem key={x.link} item={x} />
      ))}
    </div>
  );
};

export const AppLayout = ({children}) => {
  return (
    <div tw="grid grid-template-columns[90px auto] h-[100vh]">
      <NavBar />
      <div>{children}</div>
    </div>
  );
};
