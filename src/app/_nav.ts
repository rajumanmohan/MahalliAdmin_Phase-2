interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',

  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'USERS',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  {
    name: 'Main Categories',
    url: '/Category',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Categories',
        url: '/Category/categories',
        icon: 'icon-puzzle'
      },
      {
        name: 'Sub Categories',
        url: '/Category/subcategories',
        icon: 'icon-puzzle'
      },
      {
        name: 'Sub Sub Categories',
        url: '/Category/subsubcategories',
        icon: 'icon-puzzle'
      },
      // {
      //   name: 'Cards',
      //   url: '/base/cards',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Carousels',
      //   url: '/base/carousels',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Collapses',
      //   url: '/base/collapses',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Forms',
      //   url: '/Category/forms',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/paginations',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Switches',
      //   url: '/base/switches',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips',
      //   icon: 'icon-puzzle'
      // }
    ]
  },
  {
    name: 'Coupon Management',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Products',
    url: '/widgets',
    icon: 'icon-calculator',
  },
  {
    name: 'Banner Management',
    url: '/buttons',
    icon: 'icon-picture',
    children: [
      {
        name: 'Main Banner',
        url: '/buttons/buttons',
        icon: 'icon-picture '
      },
      {
        name: 'Feature Brands ',
        url: '/buttons/dropdowns',
        icon: 'icon-picture '
      },
      {
        name: 'Ecommerce Single ',
        url: '/buttons/brand-buttons',
        icon: 'icon-picture '
      },
      {
        name: 'Brand Categories',
        url: '/buttons/brandbanner',
        icon: 'icon-picture '
      },
      {
        name: 'Grocery Single Banner',
        url: '/buttons/singlebanner',
        icon: 'icon-picture '
      }
    ]
  },

  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  {
    name: 'User Management',
    url: '/userslist',
    icon: 'icon-user',
    children: [
      {
        name: 'Users',
        url: '/userslist',
        icon: 'icon-user',
      },
      {
        name: 'Users Orders',
        url: '/userslist/userorders',
        icon: 'fa fa-cart-plus ',
      }
    ]
  },

  {
    name: 'Wholeseller ',
    url: '/wholeseller',
    icon: 'icon-user'
  },
  {
    name: 'Vendors',
    url: '',
    icon: 'icon-user',
    children: [
      {
        name: 'Vendors List',
        url: ' ',
        icon: 'icon-user',
      },
      {
        name: 'Products for Approval',
        url: '',
        icon: 'fa fa-cart-plus ',
      },
      {
        name: 'Vendor Orders',
        url: '',
        icon: 'fa fa-cart-plus ',
      },
    ]
  },

  {
    name: 'Suggested Products',
    url: ' ',
    icon: 'fa fa-cart-plus ',
  },
  {
    name: 'Content ',
    url: '',
    icon: 'fa fa-file-text-o',
    children: [
      {
        name: 'About Mahali',
        url: ' ',
        icon: 'fa fa-file-text-o',
      },
      {
        name: 'Terms & Conditions',
        url: '',
        icon: 'fa fa-file-text-o',
      },
      {
        name: 'Privacy Policy',
        url: '',
        icon: 'fa fa-file-text-o',
      },
      {
        name: 'Top Sellers',
        url: '',
        icon: 'fa fa-file-text-o',
      },
      {
        name: 'Our Blogs',
        url: '',
        icon: 'fa fa-file-text-o',
      },
      {
        name: 'News Teller',
        url: '',
        icon: 'fa fa-file-text-o',
      },
    ]
  },
  {
    name: 'Commision ',
    url: '',
    icon: 'fa fa-money',
    children: [
      {
        name: 'Vendor',
        url: ' ',
        icon: 'fa fa-money',
      },
      {
        name: 'Whole Seller',
        url: '',
        icon: 'fa fa-money',
      }
    ]
  },
  {
    name: 'Staff',
    url: '',
    icon: 'icon-user',
  }
];
