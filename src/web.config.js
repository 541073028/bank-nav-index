const webConfig = Object.freeze({

    /*图片服务器*/
    apiResourceHost: process.env.VUE_APP_API_RESOURCE_HOST,
    apiResourceUpload: "/upload",
    apiResourceG: "/g",
    apiHost: process.env.VUE_APP_API_HOST,
    apiHosts: 'http://files.pay.dianjishenghuo.cn/',

    authTokenName: "industryListauth",
    authTokenPrefix: "",
    httpSuccessStatus: "200",
    loginExpire: "200302",
    permissionDenied: "30002",
    auditStatus: "audit_status",
    aliStatus: "ali_status",
    wxStatus: "wx_status",
    pay_channel_type: "pay_channel_type",
    lkl_status: "lkl_status"

});
export default webConfig;