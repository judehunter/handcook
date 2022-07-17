import {Icon} from '@iconify/react';
import tw, {css} from 'twin.macro';
import {Link} from './utils/Link';
import Color from 'color';
import {RGBLogShade} from './utils/color';

const navBarItems = [
  {
    icon: 'material-symbols:auto-awesome-outline-rounded',
    // icon: 'heroicons-outline:light-bulb',
    name: 'discover',
    link: '/discover',
    color: '#a12dd6',
  },
  {
    icon: 'carbon:grid',
    name: 'recipes',
    link: '/recipes',
    color: '#f57242',
  },
  {
    icon: 'uil:schedule',
    name: 'schedule',
    link: '/schedule',
    color: '#3f90f2',
  },
  {
    icon: 'tabler:chef-hat',
    name: 'cook',
    link: '/cookmode',
    color: '#2db566',
  },
  {
    icon: 'heroicons-outline:cog',
    name: 'settings',
    link: '/settings',
    color: '#687a9c',
  },
] as const;

const NavBarItem = ({item}: {item: typeof navBarItems[number]}) => {
  const rgbColor = Color(item.color).rgb().string();
  const lightColor = RGBLogShade(0.93, rgbColor);
  return (
    <Link href={item.link}>
      <a
        tw="flex flex-col items-center space-y-1 cursor-pointer rounded-lg py-1.5 w-full transition-colors"
        css={[
          css`
            &:hover {
              color: ${item.color};
            }
            &.active {
              color: ${item.color};
              background-color: ${lightColor};
            }
          `,
        ]}
      >
        <Icon icon={item.icon} height={24} />
        <div tw="text-center font-size[0.65rem] tracking-wide font-weight[500]">
          {item.name}
        </div>
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div tw="w-full flex flex-col justify-center items-center space-y-6 px-3">
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
