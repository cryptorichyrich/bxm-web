(function(a){'use strict';var b=function(a,b){var c=a.find(".tp-loader-wrapper"),d=c.data("plec"),e=c.data("post_load_opt"),f=d.post_load_exclude_class;if(b("#tp-img-loader").length){var g=b("#tp-img-loader .tp-preloader-logo-img").height(),h=b("#tp-img-loader .tp-preloader-logo-img").width();b(".tp-img-loader-wrap .tp-img-loader-wrap-in").css("width",h).css("height",g)}b(document).ready(function(){"disablepostload"===e&&b("body").removeClass("theplus-preloader"),setTimeout(function(){},20),b("body").hasClass("theplus-preloader")&&(f!=null&&""!=f?b(document).on("click",f,function(a){if(!(a.shiftKey||a.ctrlKey||a.metaKey||"_blank"==b.trim(b(this).attr("target")))&&(b("body").removeClass("tp-loaded").addClass("tp-out-loaded"),b("body.tp-out-loaded").find(".tp-loader-wrapper").hasClass("tp-preload-transion4"))){b("body").find(".tp-loader-wrapper.tp-preload-transion4 .tp-preload-reveal-layer-box").css("transform","");var c,d="";if(b(".tp-out-loaded .tp-4-postload-topleft").length||b(".tp-out-loaded .tp-4-postload-topright").length||b(".tp-out-loaded .tp-4-postload-bottomleft").length||b(".tp-out-loaded .tp-4-postload-bottomright").length){var e={width:window.innerWidth,height:window.innerHeight},f=Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));b(".tp-out-loaded .tp-4-postload-topleft").length?c="translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0,"+f+"px,0)":b(".tp-out-loaded .tp-4-postload-topright").length?c="translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0,"+f+"px,0)":b(".tp-out-loaded .tp-4-postload-bottomleft").length?c="translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,"+f+"px,0)":b(".tp-out-loaded .tp-4-postload-bottomright").length&&(c="translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) translate3d(0,"+f+"px,0)")}else b(".tp-out-loaded .tp-4-postload-left").length||b(".tp-4-postload-right").length?(d="right",b(".tp-out-loaded .tp-4-postload-left").length&&(d="left"),c="translate3d(-50%,-50%,0) rotate3d(0,0,1,"+("left"===d?90:-90)+"deg) translate3d(0,100%,0)"):(b(".tp-out-loaded .tp-4-postload-top").length||b(".tp-out-loaded .tp-4-postload-bottom").length)&&(d="bottom",b(".tp-out-loaded .tp-4-postload-top").length&&(d="top"),c="top"===d?"rotate3d(0,0,1,180deg)":"none");(b(".tp-out-loaded .tp-4-postload-topleft").length||b(".tp-out-loaded .tp-4-postload-topright").length||b(".tp-out-loaded .tp-4-postload-bottomleft").length||b(".tp-out-loaded .tp-4-postload-bottomright").length||b(".tp-out-loaded .tp-4-postload-left").length||b(".tp-out-loaded .tp-4-postload-right").length||b(".tp-out-loaded .tp-4-postload-top").length||b(".tp-out-loaded .tp-4-postload-bottom").length)&&b(".tp-out-loaded .tp-loader-wrapper .tp-preload-reveal-layer-box").css("transform",c).css("-webkit-transform",c)}}):b(document).on("click","a:not(.ajax_add_to_cart,.button-toggle-link,.noajax,.post-load-more,.slick-slide, .woocommerce a, .btn, .button,[data-slick-index],[data-month], .popup-gallery, .popup-video, [href$=\".png\"], [href$=\".jpg\"], [href$=\".jpeg\"], [href$=\".svg\"], [href$=\".mp4\"], [href$=\".webm\"], [href$=\".ogg\"], [href$=\".mp3\"], [href^=\"#\"],[href*=\"#\"], [href^=\"mailto:\"],[data-lity=\"\"], [href=\"\"], [href*=\"wp-login\"], [href*=\"wp-admin\"], .dot-nav-noajax, .pix-dropdown-arrow,[data-toggle=\"dropdown\"],[role=\"tab\"]),button:not(.elementor-button,.lity-close,[type=\"button\"],.single_add_to_cart_button,.pswp__button.pswp__button--close,.pswp__button--fs,.pswp__button--zoom,.pswp__button--arrow--left,.pswp__button--arrow--right)",function(a){if(!(a.shiftKey||a.ctrlKey||a.metaKey||"_blank"==b.trim(b(this).attr("target")))&&(b("body").removeClass("tp-loaded").addClass("tp-out-loaded"),b("body.tp-out-loaded").find(".tp-loader-wrapper").hasClass("tp-preload-transion4"))){b("body").find(".tp-loader-wrapper.tp-preload-transion4 .tp-preload-reveal-layer-box").css("transform","");var c,d="";if(b(".tp-out-loaded .tp-4-postload-topleft").length||b(".tp-out-loaded .tp-4-postload-topright").length||b(".tp-out-loaded .tp-4-postload-bottomleft").length||b(".tp-out-loaded .tp-4-postload-bottomright").length){var e={width:window.innerWidth,height:window.innerHeight},f=Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));b(".tp-out-loaded .tp-4-postload-topleft").length?c="translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0,"+f+"px,0)":b(".tp-out-loaded .tp-4-postload-topright").length?c="translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0,"+f+"px,0)":b(".tp-out-loaded .tp-4-postload-bottomleft").length?c="translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,"+f+"px,0)":b(".tp-out-loaded .tp-4-postload-bottomright").length&&(c="translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) translate3d(0,"+f+"px,0)")}else b(".tp-out-loaded .tp-4-postload-left").length||b(".tp-4-postload-right").length?(d="right",b(".tp-out-loaded .tp-4-postload-left").length&&(d="left"),c="translate3d(-50%,-50%,0) rotate3d(0,0,1,"+("left"===d?90:-90)+"deg) translate3d(0,100%,0)"):(b(".tp-out-loaded .tp-4-postload-top").length||b(".tp-out-loaded .tp-4-postload-bottom").length)&&(d="bottom",b(".tp-out-loaded .tp-4-postload-top").length&&(d="top"),c="top"===d?"rotate3d(0,0,1,180deg)":"none");(b(".tp-out-loaded .tp-4-postload-topleft").length||b(".tp-out-loaded .tp-4-postload-topright").length||b(".tp-out-loaded .tp-4-postload-bottomleft").length||b(".tp-out-loaded .tp-4-postload-bottomright").length||b(".tp-out-loaded .tp-4-postload-left").length||b(".tp-out-loaded .tp-4-postload-right").length||b(".tp-out-loaded .tp-4-postload-top").length||b(".tp-out-loaded .tp-4-postload-bottom").length)&&b(".tp-out-loaded .tp-loader-wrapper .tp-preload-reveal-layer-box").css("transform",c).css("-webkit-transform",c)}}))})};a(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/tp-pre-loader.default",b)})})(jQuery),jQuery(window).on("load",function(){function a(a){if(n){n.style.strokeDashoffset=p-a/100*p}}var b=window.performance.timing,c=-(b.loadEventEnd-b.navigationStart),d=100*parseInt(c/1e3%60),e=jQuery(".tp-loader-wrapper");if("undefined"!=typeof elementorFrontend&&!elementorFrontend.isEditMode()&&e.length){var f=e.data("plec"),g=f.loadtime,h=f.loadmaxtime,i=f.loadmintime,j=1e3*h,k=1e3*i;j!=null&&j<d&&g!=null&&"loadtimemax"==g&&(d=j),k!=null&&k>d&&g!=null&&"loadtimemin"==g&&(d=k)}jQuery(".tp-percentage").addClass("tp-percentage-load");(jQuery(".tp-loadbar").length||jQuery(".percentagelayout").length||jQuery(".tp-preloader-wrap4-in").length||jQuery(".tp-preloader-wrap5.plcper5 .tp-pre-5-in3").length||jQuery(".tp-preloader-wrap5.plcper5 .tp-pre-5-in4").length||jQuery(".tp-loader-wrapper .tp-img-loader-wrap").length||jQuery(".tp-loader-wrapper .tp-text-loader .tp-text-loader-inner").length)&&jQuery(".tp-loadbar,.percentagelayout,.tp-preloader-wrap4-in,.tp-preloader-wrap5.plcper5 .tp-pre-5-in3, .tp-preloader-wrap5.plcper5 .tp-pre-5-in4,.tp-loader-wrapper .tp-img-loader-wrap,.tp-loader-wrapper .tp-text-loader .tp-text-loader-inner").animate({width:"100%"},d),(jQuery(".tp-preloader-wrap5.plcper5 .tp-pre-5-in1").length||jQuery(".tp-preloader-wrap5.plcper5 .tp-pre-5-in2").length)&&jQuery(".tp-preloader-wrap5.plcper5 .tp-pre-5-in1, .tp-preloader-wrap5.plcper5 .tp-pre-5-in2").animate({height:"100%"},d);var l=jQuery("#tp-precent,#tp-precent3,#tp-precent4"),m=d;l&&function(b,c,d,e){var f=c,g=d>c?1:-1,h=Math.abs(Math.floor(e/(d-c))),i=jQuery(b),j=setInterval(function(){f+=g,jQuery(i).text(f+"%"),a(f),f==d&&clearInterval(j)},h)}(l,0,100,m);var n=document.querySelector(".progress-ring1");if(n){var o=n.r.baseVal.value,p=2*o*Math.PI;n.style.strokeDasharray=`${p} ${p}`,n.style.strokeDashoffset=`${p}`}setTimeout(function(){jQuery("body").addClass("tp-loaded"),jQuery("body").find(".tp-loader-wrapper").hasClass("tp-preload-transion4")&&setTimeout(function(){jQuery("body").find(".tp-loader-wrapper.tp-preload-transion4").addClass("tpprein"),jQuery("body").find(".tp-loader-wrapper.tp-preload-transion4").addClass("tppreinout"),setTimeout(function(){jQuery("body").find(".tp-loader-wrapper.tp-preload-transion4").removeClass("tpprein"),jQuery("body").find(".tp-loader-wrapper.tp-preload-transion4").addClass("tppreout")},1500)},20),jQuery(".tp-preloader-wrap,.percentagelayout,.tp-preloader-wrap4.plcper4,.tp-preloader-wrap6").fadeOut(300)},d+1e3)})
;