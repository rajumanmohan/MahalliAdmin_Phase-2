// const base_url = 'http://192.169.243.70:3000/v1/';//(local)
const base_url = 'https://www.mahalli.com/v1/';//(https)

// const base_url1 = 'http://192.169.243.70:3000/v1/'

// const base_url = 'http://192.169.243.70:8000/v1/';
// const base_url = 'http://192.169.243.70:8200/';
// const base_url1 = 'http://192.168.0.116:9000/';
export const AppSettings = {
    adminloginUrl: base_url + 'vendors/Admin_wholesellerlogin',
    getCatUrl: base_url + 'categories/',
    getGroceryCats: base_url + 'categories/grocery/cat',
    getEcomCats: base_url + "categories/ecommers",
    addCatUrl: base_url + 'categories/addcatagories',
    updateCat: base_url + 'categories/updatecatagires',
    deleteCat: base_url + 'categories/deletecatagories',
    insertSubCat: base_url + 'sub_categories/addsubcatagories',
    getSubCategory: base_url + 'sub_categories/alldata/get',
    getEcomSubCats: base_url + "sub_categories/alldataecommers/get",
    deleteSubCat: base_url + 'sub_categories/deletesubcatagories',
    updateSubCat: base_url + 'sub_categories/updatesubcatagires',
    insertProduct: base_url + 'products/wholesalleraddproduct',
    deleteProdUrl: base_url + 'products/deletewholesalerproduct',
    deleteAdminProdUrl: base_url + 'products/deleteadminproduct',
    getProductUrl: base_url + 'products/getproducts',
    getProductUrlbyIdGror: base_url + 'products/getgrocerywholesalerproducts',
    getProductUrlbyIdEcom: base_url + 'products/getecomwholesalerproducts',
    addWholeSellerUrl: base_url + 'vendors/registration',
    getWholeSellerUrl: base_url + 'wholesalers',
    updateWholeSellerUrl: base_url + 'wholesalers/updatewholeseller',
    deleteWholeSellerUrl: base_url + 'wholesalers/deletewholeseller',
    getUsersUrl: base_url + 'users',
    getVendorsUrl: base_url + 'vendors/',
    getBannerUrl: base_url + 'banners/getbanners',
    addbannerUrl: base_url + 'banners/new_banner',
    deletebannerUrl: base_url + 'banners/delteindivisuval_banner',
    changeSatusOfProd: base_url + 'products/changestatusofproduct',
    saveFooter: base_url + "footer_table/savefooter",
    getFooter: base_url + "footer_table/getfooter/",
    updateFooter: base_url + "footer_table/updatefooter",
    getVouchers: base_url + "vouchers",
    addVoucher: base_url + "vouchers",
    getVoucherById: base_url + "vouchers",
    delVoucher: base_url + "vouchers",
    updateVoucher: base_url + "vouchers",
    getAllVendorOrders: base_url + "place_order/getallvenderorders",
    addStaff: base_url + "vendors/addstaff",
    staffLogin: base_url + "vendors/stafflogin",
    getStaff: base_url + "vendors/getstaff/alldata",
    getVendorProds: base_url + "vendor/products/getvendorproducts",
    getVendorProdsEcom: base_url + "vendor/products/getvendorproducts",
    getWholesellerProds: base_url + "products/getwholesalerproducts",
    AcceptProduct: base_url + "vendor/products",
    updateWholesellerPrords: base_url + "products/updatewholesalerproductstatus",
    getUserOrders: base_url + "place_order/getuserorders",
    getsuggestedProds: base_url + "products/getrequestedproducts",
    getsugProdForCat: base_url + "products/getrequestedproductbasedoncat",
    getCategories: base_url + "categories/grocery/cat",
    // getEcomcats: base_url + 'categories/ecommers',
    changeSatusOfsuggest: base_url + "products/changestatusofrequestedproduct",
    getGroceryProds: base_url + "products/getalladminproducts",
    getEcomProds: base_url + "products/getallecommersproducts",
    getAdminCount: base_url + "vendors/getcount/all",
    // getWholesellerProductUrl: base_url + 'products/getwholesalerproducts/',
    // deleteSkuUrl: base_url + 'products/deletesku',
    updateProdUrl: base_url + 'products/updateproduct',
    getProdById: base_url + "products/getwholesalerproductsbyid",
    approvalProds: base_url + "vendor_products/allvendorproducts",
    ordById: base_url + "place_order/order_products",
    updateVendorOrd: base_url + "place_order/updateorderstatus",
    showinWebEcom: base_url + "categories/updateshowinuser",
    getCatEcomcount: base_url + "categories/getcategoriescount/showinvenderecommers",
    getWholeProdsGro: base_url + 'products/getallwholesalerproducts',
    getWholeProdEcom: base_url + 'products/getallwholesalerproducts',
    getVendorOrdInWhole: base_url + "place_order/getwholesalervenderorders",
    orderDetailsByOrdId: base_url + "place_order/order_products",
    orderChangeByProdId: base_url + "vendor/cart_details/updatecart",
    getWholeCommision: base_url + "vendor/cart_details/getcommission/wholesaler",
    getVendorCommision: base_url + "vendor/cart_details/getcommission/vendor",
    // uploadProductimg: base_url + 'products/uploadimage',
    // importExcel: base_url + 'products/readExcel',
    // multiproductimgUrl: base_url + 'products/getproductbyid',
    // getSubCatUrl: base_url + 'products/getsubdata',
    // deleteProImgUrl: base_url + 'products/deleteproductimage',
    // getVendorUrl: 'http://192.168.0.116:9000/vendors',
    // getVendorById: base_url + 'vendors/',
    updateVendorById: base_url + 'vendors/update_profile',
    getUserOrdByVenId: base_url + "place_order/getvendoruserorders",
    orderDetByVenId: base_url + "place_order/userorder_products",
    getbannerById: base_url + "banners/getbanner",
    updateBanner: base_url + "banners/updatebanners",
    insertAdminProd: base_url + "products/adminaddproduct",
    getAdminProds: base_url + "products/getadminproducts",
    forgotPw: base_url + 'vendors/forgot_password',
    otpUrl: base_url + "vendors/request_otp",
    changeForgot: base_url + "vendors/changepassword",
    delproduct: base_url + "products/deletesku_image",
    getWholeProddsCunt: base_url + "vendors/getcount/wholesaler",
    // new
    getAdminProdData: base_url + "products/getadminproductsbasedoncatsubcat",
    getAdminProdById: base_url + "products/getvendorproductbyid",
    wholesalerProdById: base_url + "products/getwholesalerproductsbyid",
    ImgApproval: base_url + "products/updatewholesalerimageapproval",
    addSubsub: base_url + "sub_categories/addsubsubcatagories",
    getSubsub: base_url + "sub_categories/subsubdata/alldata",
    getSubsubEcom: base_url + "sub_categories/subsubdata/alldata",
    delSubsub: base_url + "sub_categories/deletesubsubcatagories",
    updateSubsub: base_url + "sub_categories/updatesubsubcatagires",
    prodCat: base_url + "products/getadminproductsbycat",
    prodSub: base_url + "products/getadminproductsbysubcat",
    prodSubsub: base_url + "products/getadminproductsbysubsubcat",
    requestAdmin: base_url + "products/requestnewproduct",
    getAdminSub: base_url + "products/getadminproductsbysubcat",
    getAdminSubSub: base_url + "products/getadminproductsbysubsubcat",
    vendorImgagesAppr: base_url + "vendor/products/updatevendorproductimagestatus",
    getAllVendorData: base_url + "vendor/products/getvendorproducts",
    getPlaceOrd: base_url + "vendors/getorders/vendororders",
getGraph:base_url+"place_order/getvendorordersforgraph",
getvendorCount:base_url+"vendor/products/getvendorcount/vendordata",
wholeOrders:base_url+"vendors/getorders/wholeorders",
vendorOrders:base_url+"vendors/getorders/vendororders",
filterUserOrders:base_url+"place_order/filter_orders/date",
filterVendorOrders:base_url+"place_order/filter_orders/date"
    // deleteVendorById: 'http://192.168.0.116:9000/vendors/',
    // getOrdersUrl: base_url + 'oders',
    // getOffersUrl: base_url + 'voucher',
    // postOffersUrl: base_url + 'voucher',
    // getOfferbyId: base_url + 'voucher/',
    // updateOfferById: base_url + 'voucher/',
    // deleteOfferById: base_url + 'voucher/',
    // addDeliveryUrl: base_url + 'oders/delvory',
    // getDeliveryUrl: base_url + 'oders/getdelvory',
    // getDeliveryById: base_url + 'oders/getbyid',
    // updateDeliveryUrl: base_url + 'oders/updatedelvory',
    // deleteDeliveryById: base_url + 'oders/deletedelvory',
    // getCountriesUrl: base_url + 'users/location_management/countries',
    // getStatesUrl: base_url + 'users/location_management/countries',
    // getCityUrl: base_url + 'users/location_management/countries',
    // getAreaUrl: base_url + 'users/location_management/countries',
    // addLocation: base_url + 'users/add_location',
    // getLocation: base_url + 'users/get_locations',
    // deleteLocation: base_url + 'users/delete_location',
    // termConditionsUrl: 'http://localhost:9000/terms_conditions',
    // postbannersUrl: base_url + 'banners/new_banner',
    // getBannerUrl: base_url + 'banners/getbanners',
    // deleteBannerUrl: base_url + 'banners/delteindivisuval_banner',
    // editBannerUrl: base_url + 'banners/getiddetailes',
    // updatebannerUrl: base_url + 'banners/updateBanner',
    // bannerPositionUrl: base_url + 'banners/getbannerpostion',
    // addCityUrl: base_url + 'delivery/warehouse_coutry',
    // getCitiesUrl: base_url + 'delivery/getwarehouse_country',
    // getCityByID: base_url + 'delivery/getbycountryid',
    // updateCityUrl: base_url + 'delivery/updatecity',
    // deleteCitiesUrl: base_url + 'delivery/deletecity',
    // addAreaUrl: base_url + 'delivery/warehouse_area',
    // getAreasUrl: base_url + 'delivery/getallwerehousearea',

    // getAreaById: base_url + 'delivery/getareabyid',

    // updateAreaUrl: base_url + 'delivery/updatearea',
    // deleteAreaUrl: base_url + 'delivery/deletearea',
    // addwarehouseUrl: base_url + 'delivery/addarea',
    // getwarehouseurl: base_url + 'delivery/getwerehousedata',

    // getWarehouseById: base_url + 'delivery/getwerehousebyid',
    // updatewarehouseUrl: base_url + 'delivery/updatewerehouse',
    // deleteWarehouse: base_url + 'delivery/deletewerehouse',
    // addslotUrl: base_url + 'delivery/insertdelivery',
    // getSlotUrl: base_url + 'delivery/getdelvoryslots',
    // deleteslotUrl: base_url + 'delivery/deltedate',
    // termsFooterUrl: base_url + 'footer/savefooter',
    // getTermsUrl: base_url + 'footer/gettermes',
    // getAboutusUrl: base_url + 'footer/aboutus',
    // getDeliveryInfoUrl: base_url + 'footer/DeliveryInfo',
    // getPrivacyUrl: base_url + 'footer/prevent',
    // updateTermsUrl: base_url + 'footer/updatefooter',
    // updateAboutUsUrl: base_url + '',
    // updateDeliveryInfoUrl: base_url + '',
    // updatePrivacyUrl: base_url + ''
}
