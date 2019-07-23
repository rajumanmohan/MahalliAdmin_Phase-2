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
if (sessionStorage.role == 'Admin') {
  var newArr = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },

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

      ]
    },
    {
      name: 'Coupon Management',
      url: '/coupons',
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
      url: '/vendorslist',
      icon: 'icon-user',
      children: [
        {
          name: 'Vendors List',
          url: '/vendorslist',
          icon: 'icon-user',
        },
        {
          name: 'Products for Approval',
          url: '/vendorslist/vendorproducts',
          icon: 'fa fa-cart-plus ',
        },
        {
          name: 'Vendor Orders',
          url: '/vendorslist/vendororders',
          icon: 'fa fa-cart-plus ',
        },
      ]
    },

    {
      name: 'Requested Products',
      url: '/suggestedproducts',
      icon: 'fa fa-cart-plus ',
    },
    {
      name: 'Content ',
      url: '/content',
      icon: 'fa fa-file-text-o',
      children: [
        {
          name: 'About Mahali',
          url: '/content',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Terms & Conditions',
          url: '/content/termsandconditions',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Privacy Policy',
          url: '/content/privacypolicy',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Top Sellers',
          url: '/content/topseller',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Our Blogs',
          url: '/content/ourblogs',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'News Teller',
          url: '/content/newsteller',
          icon: 'fa fa-file-text-o',
        },
      ]
    },
    {
      name: 'Commision ',
      url: '/commission',
      icon: 'fa fa-money',
      children: [
        {
          name: 'Vendor',
          url: '/commission/vendor',
          icon: 'fa fa-money',
        },
        {
          name: 'Whole Seller',
          url: '/commission/wholeseller',
          icon: 'fa fa-money',
        }
      ]
    },
    {
      name: 'Staff',
      url: '/staff',
      icon: 'icon-user',
    }
    ,

  ];
} else if (sessionStorage.role == 'wholesaler') {
  var newArr = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },
    {
      name: 'Vendor Orders',
      url: '/vendorslist/vendororders',
      icon: 'fa fa-cart-plus ',
    },

    {
      name: 'Wholeseller Products',
      url: '/wholesellerproducts',
      icon: 'icon-user',
      children: [
        {
          name: 'Add Product',
          url: '/wholesellerproducts/addwholesellerproducts',
          icon: 'icon-calculator '
        },
        {
          name: 'My Products ',
          url: '/wholesellerproducts',
          icon: 'icon-calculator '
        },

      ]
    },


  ];
} else {
  newArr = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },
    {
      name: 'Vendor Orders',
      url: '/vendorslist/vendororders',
      icon: 'fa fa-cart-plus ',
    },

    {
      name: 'Vendor Products',
      url: '/vendorproducts',
      icon: 'icon-user',
      children: [
        {
          name: 'Add Product',
          url: '/vendorproducts/addvendorproducts',
          icon: 'icon-calculator '
        },
        {
          name: 'My Products ',
          url: '/vendorproducts',
          icon: 'icon-calculator '
        },

      ]
    }
  ]
}



// var ShowArr = sessionStorage.role == 'wholesaler' ? newArr1 : newArr;



export const navItems: NavData[] = newArr;