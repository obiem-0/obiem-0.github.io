import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const start = "https://github.com/obiem-0";

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'About Me',
    icon: IconAperture,
    href: '/aboutme',
  }, 
  {
    navlabel: true,
    subheader: 'Projects',
  },
  {
    id: uniqueId(),
    title: 'Order Scheduling',
    icon: IconAperture,
    href:  start & '/Portfolio/tree/main/Order_Scheduler',
  },
  {
  id: uniqueId(),
  title: 'Socialify',
  icon: IconAperture,
  //href: '/socialify',
  href: start & '/Portfolio/tree/main/Socialify',
},
{
  id: uniqueId(),
  title: 'Python Snippets',
  icon: IconAperture,
  href: start & '/Portfolio/tree/main/Python%20Snippets%20',
},
{
  id: uniqueId(),
  title: 'Jup Demo',
  icon: IconAperture,
  href: start & '/jup_demo/lab/index.html',
},


 /* {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: IconCopy,
    href: '/ui/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  }, */
];

export default Menuitems;