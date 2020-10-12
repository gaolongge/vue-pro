var ipconfi = {
    huang: '/afm'
}

var cfg = {
    dev: '/manage-middle',
    pro: '/afm',
    dev_download: ipconfi.huang, //dev_download登录图形验证码地址
    pro_download: '/afm',
    dev_baseurlVerifyImg: ipconfi.huang,
    pro_baseurlVerifyImg: '/afm',
};

var base_url = '';
var base_url_download = '';
var baseurlVerifyImg = '';
switch (process.env.NODE_ENV) {
    case "development":
        base_url = cfg.dev;
        base_url_download = cfg.dev_download;
        baseurlVerifyImg = cfg.dev_baseurlVerifyImg
        break;
    case "testing":
        base_url = cfg.dev;
        base_url_download = cfg.dev_download;
        baseurlVerifyImg = cfg.dev_baseurlVerifyImg
        break;
    case "production":
        base_url = cfg.pro;
        base_url_download = cfg.pro_download;
        baseurlVerifyImg = cfg.pro_baseurlVerifyImg
        break;
}

export const baseURL = base_url
export const baseURLDownload = base_url_download
export const baseURLVerifyImg = baseurlVerifyImg