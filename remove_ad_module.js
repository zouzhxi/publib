// ==UserScript==
// @name         过滤无用元素  自用
// @namespace    cn.zzxmall.adhelper
// @version      0.1.5
// @description  天猫，淘宝，京东 芒果TV 爱奇艺 腾讯视频 baidu csdn youku 中的无用元素过滤
// @author       zzxmall.cn
// @grant        none
// @charset		 UTF-8
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js
// @connect      cdn.jsdelivr.net
// @include      *://*.jd.com/*
// @include      *://*.tmall.com/*
// @include      *://*.mgtv.com/*
// @include      *://*.iqiyi.com/*
// @include      *://v.qq.com/*
// @include      *://*.csdn.net/*
// @include      *://*.baidu.com/*
// @include      *://*.youku.com/*
// ==/UserScript==

(function () {
    'use strict';
    var $ = $ || window.$; //获得jquery的$标识符
    const AdHelper = {
        config: {
            window_url: window.location.href,
            window_host: window.location.host,
            SiteIsOpenModule: {
                jd: function () { return (AdHelper.config.window_host.indexOf(".jd.com") != -1); },
                tmall: function () { return (AdHelper.config.window_host.indexOf(".tmall.com") != -1); },
                mgtv: function () { return (AdHelper.config.window_host.indexOf(".mgtv.com") != -1); },
                vqq: function () { return (AdHelper.config.window_host.indexOf("v.qq.com") != -1); },
                iqiyi: function () { return (AdHelper.config.window_host.indexOf(".iqiyi.com") != -1); },
                csdn: function () { return (AdHelper.config.window_host.indexOf(".csdn.net") != -1); },
                baidu: function () { return (AdHelper.config.window_host.indexOf(".baidu.com") != -1); },
                youku: function () { return (AdHelper.config.window_host.indexOf(".youku.com") != -1); }
            }
        }
        , Site: {
            Site_JD: {
                __removeAD: function () {
                    setInterval(function () {
                        $("#J_promotional-top").remove();//京东首页，页头
                        $(".fs_act_wp").remove();
                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.jd) {
                        this.__removeAD();
                    }
                }
            }
            , Site_Tmall: {
                __removeAD: function () {
                    setInterval(function () {

                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.tmall) {
                        this.__removeAD();
                    }
                }
            }
            , Site_Mgtv: {
                __removeAD: function () {
                    setInterval(function () {
                        $(".showbtn-1").remove();//MGTV首页
                        $(".appdown").remove();//MGTV首页 APP下载按键
                        $(".pclient").remove();//MGTV首页 PC下载按键
                        $(".user").remove();//MGTV首页
                        $(".openvip").remove();//MGTV首页
                        $(".fantuan").remove();//MGTV首页
                        $(".news").remove();//MGTV首页
                        $(".add-box").remove();//MGTV首页
                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.mgtv) {
                        this.__removeAD();
                    }
                }
            }
            , Site_iqiyi: {
                __removeAD: function () {
                    setInterval(function () {
                        $(".header-vip").remove();//开通VIP元素//导航
                        $(".qy-header__game").remove();//游戏频道元素//导航
                        $(".J-app-download").remove();//PC端下载元素//导航
                        $(".header-userSmall").remove();//会员登陆元素//导航
                        $(".anchor-integral").remove();//右边浮件的开通VIP送礼品元素
                        $(".detail-sd").remove();//播放页中的开通VIP享1080字样元素
                        $(".qy-player-side-op").remove();//播放列表中的开通VIP字样元素
                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.iqiyi) {
                        this.__removeAD();
                    }
                }
            }
            , Site_vqq: {
                __removeAD: function () {
                    setInterval(function () {
                        $(".quick_user").remove();//导航/用户登陆
                        $(".quick_client").remove();//导航/播放器下载
                        $(".mf_item_0").remove();//应用中心
                        $(".ft_cell_vcoin").remove();//右边漂浮礼物
                        $(".ft_cell_download").remove();//右边漂浮下载
                        $(".mod_vip_sidebar").remove();//播放页,列表上方开通VIP元素
                        $(".mod_player_side .btn_collect").remove();//播放页,列表上方收藏元素
                        $(".fixed_box").remove();//会员页,开通VIP元素
                        $(".user_open_btn").remove();//会员页,开通VIP元素
                        $(".vip_act").remove();//会员页,开通VIP元素
                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.valueOf) {
                        this.__removeAD();
                    }
                }
            }
            , Site_Csdn: {
                __removeAD: function () {
                    setInterval(function () {
                        $(".toolbar-btn-vip").remove();//页头导航/会员链接
                        $("#floor-vip_65").remove();//首页/会员精选模块
                        $("#floor-ad_69").remove();//首页/广告模块
                        $("#asideCustom").remove();//公众号扫码模块
                        $(".csdn_footer .r").remove();//公众号扫码模块
                        $(".no—h").remove();//公众号扫码模块
                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.csdn) {
                        this.__removeAD();
                    }
                }
            }
            , Site_Baidu: {
                __removeAD: function () {
                    setInterval(function () {
                        $("#s-hotsearch-wrapper").remove();//首页热榜
                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.baidu) {
                        this.__removeAD();
                    }
                }
            }
            , Site_Youku: {
                __removeAD: function () {
                    setInterval(function () {
                        $(".u-vip_3-BwE").remove();//导航/开通会员
                        $(".u-app_Ubbmj ").remove();//导航/PC下载
                        $(".u-login_PEt-Q").remove();//导航/会员登陆
                        $(".aplus_exp").remove();//
                        $(".info-bottom_3C0mQ").remove();//上滑登陆提示
                        $(".u-panel_3C81k").remove();//上滑登陆提示
                    }, 300);
                }
                , start: function () {
                    if (AdHelper.config.SiteIsOpenModule.youku) {
                        this.__removeAD();
                    }
                }
            }
        }
        , Run: function () {
            this.Site.Site_JD.start();
            this.Site.Site_Tmall.start();
            this.Site.Site_iqiyi.start();
            this.Site.Site_Mgtv.start();
            this.Site.Site_vqq.start();
            this.Site.Site_Csdn.start();
            this.Site.Site_Baidu.start();
            this.Site.Site_Youku.start();
        }
    }
    AdHelper.Run();
})();
