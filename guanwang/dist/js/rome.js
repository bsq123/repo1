function fixSizes() {
    var t = $(window).height(), a = $(window).width();
    if ($(".fullscreen").css("height", t), a > 960) {
        $(".home, .home .background, .home .container").css("height", 770);
        var e = 650 - $(".home .info").height();
        $(".home .info").css("bottom", e / 2), $(".home .info").css("right", 0)
    } else $(".home .info").css("margin-top", ($(".home .info").parent().height() - $(".home .info").height()) / 2);
    $(".vertical-center").each(function () {
        $(this).css("margin-top", ($(this).parent().height() - $(this).height()) / 2)
    })
}

jQuery(document).ready(function (t) {
    "use strict";
    var a = t(window).height(), e = t(window).width();
    t(document).scroll(function () {
        t(this).scrollTop();
        t(this).scrollTop() > 100 ? t("header").stop().animate({backgroundColor: "rgba(0,0,0,1)"}, "fast") : t("body").hasClass("no-cover") || t("header").stop().animate({backgroundColor: "rgba(0,0,0,0)"}, "fast")
    }), t(".navigation li").click(function (a) {
        var e = t(this).attr("data-type");
        if ("in" === e) {
            var i = t(this).attr("data-url");
            t('.navigation li[data-url="' + i + '"]').addClass("active", {duration: 300}), t('.navigation li[data-url="' + i + '"]').siblings().removeClass("active", {duration: 300}), t("header .navigation").is(":hidden") || (t("header .logo").stop().animate({top: 15}, "fast"), t("header .menu").stop().animate({top: 25}, "fast"), t("header .menu").is(":hidden") || t("header .navigation").slideUp("fast", "easeOutQuart"), t("header").stop().animate({height: "70px"}, "fast", function () {
                t("html,body").stop().animate({scrollTop: t("section." + i).position().top - 60}, 1e3)
            }))
        } else {
            var o = t(this).attr("data-url");
            window.location = o
        }
    }), t(".subscribe .arrow, footer .arrow").click(function (a) {
        return t("html,body").animate({scrollTop: 0}, "slow"), !1
    }), t("header .logo, .about .download").click(function (a) {
        return t("html,body").animate({scrollTop: 0}, "slow"), !1
    }), t(".home .learn").click(function (a) {
        var e = t("section.about").position().top - 60;
        return t("html,body").animate({scrollTop: e}, "slow"), !1
    });
    var i = "15%";
    t("section").waypoint({
        handler: function (a, e) {
            var o = t(this).attr("id");
            "up" === e && (o = t(this).prev().attr("id")), "up" === e && (i = "30%"), t('.navigation li[data-url="' + o + '"]').addClass("active", {duration: 300}), t('.navigation li[data-url="' + o + '"]').siblings().removeClass("active", {duration: 300})
        }, offset: i
    }), t("header .menu").click(function (e) {
        if (t("header .navigation").is(":hidden")) {
            var i = a - 34 * t("header .navigation li").length;
            t("header").stop().animate({height: a}, "slow"), t("header .logo").stop().animate({top: a - 55}, "fast"), t("header .menu").stop().animate({top: a - 45}, "fast"), t("header .navigation").slideDown("fast", "easeInQuart"), t("header .navigation ul").stop().animate({marginTop: i / 2}, "fast")
        } else t("header .logo").stop().animate({top: 15}, "fast"), t("header .menu").stop().animate({top: 25}, "fast"), t("header .navigation").slideUp("fast", "easeOutQuart"), t("header").stop().animate({height: 70}, "slow")
    }), t(".home .download li").click(function () {
        //var a = t(this).attr("data-url");
        //window.open(a, "_blank")
    }), t(".home .watch").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), t(".home .more").click(function () {
        var a = t("section.about").position().top - 60;
        return t("html,body").animate({scrollTop: a}, 1e3), !1
    }), t(".about .screen").flexslider({
        animation: "slide",
        animationLoop: !0,
        animationSpeed: 400,
        easing: "easeOutBack",
        slideshow: !1,
        pauseOnHover: !1,
        controlNav: !1,
        directionNav: !1
    }), t(".about .text").flexslider({
        animation: "slide",
        animationLoop: !0,
        animationSpeed: 400,
        easing: "easeOutBack",
        slideshow: !0,
        slideshowSpeed: 3e3,
        controlNav: !0,
        directionNav: !1,
        before: function () {
            var a = t(".about .text li").index(t(".flex-active-slide"));
            t(".about .screen").flexslider(a)
        }
    }), t(".home .arrow, notfound .back").css("left", (e - 50) / 2), t(".about .text .slides li").each(function () {
        t(this).css("margin-top", (387 - t(this).height()) / 2)
    }), t(".features .feature").hover(function () {
        t(".features .feature").stop().animate({opacity: .3}, "fast"), t(this).stop().animate({opacity: 1}, "fast")
    }, function () {
        t(".features .feature").stop().animate({opacity: 1}, "fast")
    }), t(".featured .logos .item div").click(function () {
        var a = t(this).attr("data-url");
        window.open(a, "_blank")
    }), t(".reviews .quotes").flexslider({
        animation: "slide",
        animationLoop: !0,
        animationSpeed: 3e3,
        controlNav: !0,
        directionNav: !1,
        easing: "easeInOutCirc",
        pauseOnHover: !1,
        reverse: !0,
        slideshow: !0,
        slideshowSpeed: 3e3
    }), t(".screenshots").flexslider({
        animation: "slide",
        animationLoop: !1,
        slideshow: !1,
        itemWidth: 940,
        itemMargin: 40,
        controlNav: !1,
        directionNav: !0
    }), t(".screenshots .slides").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {enabled: !0, navigateByImgClick: !0, preload: [0, 1]},
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function (t) {
                return t.el.attr("title")
            }
        }
    }), t(".gallery li a").hover(function (a) {
        t(this).children(".view").stop().animate({opacity: .75}, "fast")
    }, function () {
        t(this).children(".view").stop().animate({opacity: 0}, "fast")
    }), t(".blog .entry-title").click(function (a) {
        t.magnificPopup.open({
            items: {src: t(this).attr("data-url"), type: "ajax"},
            closeOnContentClick: !1,
            closeOnBgClick: !1,
            callbacks: {
                ajaxContentAdded: function () {
                    t(".article .cover").css("background-image", "url(" + t(".article .cover").attr("data-url") + ")")
                }
            }
        })
    }), t(".blog .entry-title").hover(function (a) {
        t(this).stop().animate({opacity: .3}, "fast"), t(this).siblings().stop().animate({opacity: .3}, "fast")
    }, function () {
        t(this).stop().animate({opacity: 1}, "fast"), t(this).siblings().stop().animate({opacity: 1}, "fast")
    }), t(".contact .submit").click(function () {
        t("input#name").removeClass("input-error"), t("input#subject").removeClass("input-error"), t("textarea#message").removeClass("input-error"), t("input#email").removeClass("input-error");
        var a = !1, e = t("input#name").val();
        ("" == e || " " == e) && (a = !0, t("input#name").addClass("input-error"));
        var i = t("input#subject").val();
        ("" == i || " " == i) && (a = !0, t("input#subject").addClass("input-error"));
        var o = t("textarea#message").val();
        ("" == o || " " == o) && (a = !0, t("textarea#message").addClass("input-error"));
        var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i, s = t("input#email").val();
        if ("" == s || " " == s ? (t("input#email").addClass("input-error"), a = !0) : n.test(s) || (t("input#email").addClass("input-error"), a = !0), 1 == a) return !1;
        /*var r = t(".contact form").serialize();
        return t.ajax({
            type: "POST", url: t(".contact form").attr("action"), data: r, success: function (a) {
                "ok" === a ? (t(".contact .message-success").fadeIn("slow"), t("input#name").val(""), t("input#email").val(""), t("input#subject").val(""), t("textarea#message").val("")) : t(".contact .message-error").fadeIn("slow")
            }
        }), !1*/
    }), t("footer .social li").click(function () {
        var a = t(this).attr("data-url");
        window.open(a, "_blank")
    }), t(".notfound button").click(function () {
        var a = t(this).attr("data-url");
        // window.open(a, "_self")
    })
}), $(window).load(function () {
    fixSizes();
    $(this).scrollTop();
    $(this).scrollTop() > 100 ? $("header").stop().animate({backgroundColor: "rgba(0,0,0,1)"}, "fast") : $("body").hasClass("no-cover") || $("header").stop().animate({backgroundColor: "rgba(0,0,0,0)"}, "fast"), $(".loader").delay(1e3).fadeOut("slow"), $("body").css("overflow", "auto"), setTimeout(function () {
        $("header").addClass("animated fadeInDown")
    }, 1300), setTimeout(function () {
        $("#home .phone").addClass("animated fadeInLeft")
    }, 1600), setTimeout(function () {
        $("#home .info").addClass("animated fadeInRight")
    }, 1600), $("#about .story").waypoint(function () {
        setTimeout(function () {
            $("#about .story .sixteen").addClass("animated fadeInDown")
        }, 0)
    }, {offset: "50"}), $("#about .video").waypoint(function () {
        setTimeout(function () {
            $("#about .media").addClass("animated fadeInLeft")
        }, 0), setTimeout(function () {
            $("#about .info").addClass("animated fadeInRight")
        }, 0)
    }, {offset: "50"}), $("#features .main").waypoint(function () {
        setTimeout(function () {
            $("#features .main .feature").addClass("animated fadeInDown")
        }, 0)
    }, {offset: "50"}), $("#features .more").waypoint(function () {
        setTimeout(function () {
            $("#features .more .feature").addClass("animated fadeInDown")
        }, 0)
    }, {offset: "50"}), $("#gallery").waypoint(function () {
        setTimeout(function () {
            $("#gallery .screenshots").addClass("animated fadeInDown")
        }, 0)
    }, {offset: "50"}), $("#reviews").waypoint(function () {
        setTimeout(function () {
            $("#reviews .quotes").addClass("animated fadeInLeft")
        }, 0)
    }, {offset: "50"}), $("#featured").waypoint(function () {
        setTimeout(function () {
            $("#featured .item").addClass("animated fadeInDown")
        }, 0)
    }, {offset: "50"}), $("#contact").waypoint(function () {
        setTimeout(function () {
            $("#contact .phone").addClass("animated fadeInLeft")
        }, 0), setTimeout(function () {
            $("#contact .form").addClass("animated fadeInRight")
        }, 0)
    }, {offset: "50"})
}), $(window).resize(function () {
    fixSizes()
});