var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

﻿var DomainStatic = 'https://web.archive.org/web/20170607055226/http://db.choi.vn/';
var chienluc = 1;

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.iOS() || isMobile.BlackBerry() || isMobile.Android() || isMobile.iOS()) {
    //window.location.href = 'https://web.archive.org/web/20170607055226/https://www.facebook.com/WebSite';
}

function go_call_fancy_popup(elm, w, h) {
    if (typeof $.fn.fancybox != "undefined") {
        go_fancy_popup_iframe(elm, w, h);
    }
    else {
        $.getScript("Scripts/jquery.fancybox-1.3.4.html", function () {
            go_fancy_popup_iframe(elm, w, h);
        });
    }
}
function go_fancy_popup_iframe(elm, w, h) {
    if (typeof w == "undefined" || typeof h == "undefined")
        w = 900, h = 700;
    try {
        $(elm).fancybox({
            'padding': 0,
            beforeShow: function () {
                this.skin.css({
                    // border: "8px solid #0B8FD3",
                    background: "none repeat scroll 0 0 #EDEDED"
                });
            },
            afterLoad: function () {
                $.fancybox.update();
            },
            'type': 'iframe',
            autoSize: true,
            wrapCSS: 'choiid_fancybox_skin_account',

            width: w,
            height: h
        });


    } catch (e) { if (console) console.log("jquery fancybox has exception " + e); }
}

function choiid_fancybox_opennowith(elm, href) {
    $.fancybox({
        afterLoad: function () {
            $.fancybox.update();
        },
        href: href,

        type: 'iframe',
        autoSize: false,
        overlayOpacity: 0.7,
        padding: 0,
        width: '400'
    });
    $.fancybox.toggle();

}

function choiid_fancybox_open(elm, href, w, h) { 
    $.fancybox({
        href: href,
        beforeShow: function () {
            this.skin.css({
                background: "none repeat scroll 0 0 #EDEDED"
            });
        },
        type: 'ajax',
        wrapCSS: 'choiid_fancybox_skin_account',
        padding: 0,
        width: w,
        height: h
    });

}

function getParameter(url, name) {
    var urlparts = url.split('?');
    if (urlparts.length > 1) {
        var parameters = urlparts[1].split('&');
        for (var i = 0; i < parameters.length; i++) {
            var paramparts = parameters[i].split('=');
            if (paramparts.length > 1 && unescape(paramparts[0]) == name) {
                return unescape(paramparts[1]);
            }
        }
    }
    return null;
}





function choiid_openurl(url) {
    var widthIfrRegister = 640;
    var heightIfrRegister = 360;
    choiid_fancybox_open("#fancybox-tmp", 'https://web.archive.org/web/20170607055226/https://www.facebook.com/sharer/sharer.php?sdk=joey&amp;u=http://WebSite/teaser/&amp;display=popup', widthIfrRegister, heightIfrRegister);
    return;
}



function choiid_clip_open(url) {
    var widthIfrRegister = 853;
    var heightIfrRegister = 480;
    choiid_fancybox_open("#fancybox-tmp", "https://web.archive.org/web/20170607055226/http://www.youtube.com/embed/" + getParameter(url, 'v') + '?autoplay=1&vq=hd720&rel=0', widthIfrRegister, heightIfrRegister);
    return;
}

function choiid_images_open(url) {
    choiid_fancybox_opennowith("#fancybox-tmp", url);
    return;
}

function choiid_login_open() {
    var widthIfrRegister = 600;
    var heightIfrRegister = 400;
    var source = $.cookie('utm_source');
    if (source != null) {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/login.aspx' + "&utm_source=" + source, widthIfrRegister, heightIfrRegister);
    } else {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/login.aspx', widthIfrRegister, heightIfrRegister);
    }

    return;
}
function choiid_login_openTeaser() {
    var widthIfrRegister = 600;
    var heightIfrRegister = 400;
    var source = $.cookie('utm_source');
    if (source != null) {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/register.aspx?ur=' + DomainStatic + 'close/loginTeaser.aspx' + "&utm_source=" + source, widthIfrRegister, heightIfrRegister);
    } else {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/register.aspx?ur=' + DomainStatic + 'close/loginTeaser.aspx', widthIfrRegister, heightIfrRegister);
    }

    return;
}
function choiid_register_open() {
    var widthIfrRegister = 600;
    var heightIfrRegister = 550;
    var source = $.cookie('utm_source');
    if (source != null) {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/register.aspx?ur=' + DomainStatic + 'close/reg.aspx' + "&utm_source=" + source, widthIfrRegister, heightIfrRegister);
    } else {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/register.aspx?ur=' + DomainStatic + 'close/reg.aspx', widthIfrRegister, heightIfrRegister);
    }

    return;
}
function choiid_register_openTeaser() {
    var widthIfrRegister = 600;
    var heightIfrRegister = 550;
    var source = $.cookie('utm_source');
    if (source != null) {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/regTeaser.aspx' + "&utm_source=" + source, widthIfrRegister, heightIfrRegister);
    } else {
        choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/regTeaser.aspx', widthIfrRegister, heightIfrRegister);
    }

    return;
}
function logingiftcode() {

    var widthIfrRegister = 480;
    var heightIfrRegister = 550;
    choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/giftcode.aspx', widthIfrRegister, heightIfrRegister);
    return;

}

function logingiftcode10m() {

    var widthIfrRegister = 480;
    var heightIfrRegister = 550;
    choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/giftcode10m.aspx', widthIfrRegister, heightIfrRegister);
    return;

}
function loginrefund() {

    var widthIfrRegister = 480;
    var heightIfrRegister = 550;
    choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/refund.aspx', widthIfrRegister, heightIfrRegister);
    return;

}


function choiid_playgame(srvid) {
    $.post("/sso/CheckLogin", {}, function (data) {
        if (data.islogin == 1) {
            window.location.href = '/play/?sid=' + srvid;   
        }
        else {

            var widthIfrRegister = 600;
            var heightIfrRegister = 550;
            var source = $.cookie('utm_source');
            if (source != null) {
                choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/play.aspx' + "&utm_source=" + source, widthIfrRegister, heightIfrRegister);
            } else {
                choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?ur=' + DomainStatic + 'close/play.aspx', widthIfrRegister, heightIfrRegister);
            }

            return;
        }
    });
}


//chonmaychu


function playgame() {
    var serverid = $("#chonmaychu option:selected").val();
    if (serverid != 0) {
        window.location.href = '/play/?sid=' + serverid;
    }
}


 
function choiid_playgamenow(url, login) {
    var UrlClose = DomainStatic + 'sso/close';
    if (url == undefined || url == 'undefined') {
        url = 'https://web.archive.org/play/';
    }	
    if (login == undefined || login == 'undefined') {
        IsLogin = true;
    }
    $.post("/sso/CheckLogin", {}, function (data) {
        if (data.islogin == 1) {
            window.location.href = url;
        }
        else { 
            var widthIfrRegister = 390;
            var heightIfrRegister = 400;
            var source = $.cookie('utm_source');
            if (source != null) {
                choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?login=' + login + '&ur=' + UrlClose + url + '&utm_source=' + source, widthIfrRegister, heightIfrRegister);
            } else {
                choiid_fancybox_open("#fancybox-tmp", DomainStatic + 'sso/form?login=' + login + '&ur=' + UrlClose + url, widthIfrRegister, heightIfrRegister);
            } 
            return;
        }
    });
}
$('.register').click(function () {
    choiid_register_open();
    return false;
});
$('#logingiftcode10m').click(function () {
    logingiftcode10m();
    return false;
});
$('#logingiftcode').click(function () {
    choiid_playgamenow();
    return false;
});
$('#loginrefund').click(function () {
    loginrefund();
    return false;
});


$('.btn_play').click(function () {
    choiid_playgamenow();
    return false;
});



$('.serv_non').click(function () {
    var id = $(this).attr("rel");
    id = id.replace("srv_", "");
    $.cookie('currentplay', id, { expires: 1, path: '/' });
    choiid_playgame(id);
    return false;
});


$('ul li a.serv_n').click(function () {
    var id = $(this).attr("rel");
    id = id.replace("srv_", "");

    $.cookie('currentplay', id, { expires: 1, path: '/' });
    choiid_playgame(id);
    return false;
});

function PlayNow(id) {
    $.cookie('currentplay', id, { expires: 1, path: '/' });
    choiid_playgame(id);
    return false;
}


function playlandingpage() {
    choiid_register_open();
}

function OpenLoginPopup() {
    choiid_login_open();
}

function OpenRegisterPopup() {
    choiid_register_open();
    return;
}

$('#linklogin').click(function () {
    choiid_login_open(); return false;
});


$('.reg').click(function () {
    choiid_register_open(); return false;
});
$('#linkregister').click(function () {
    choiid_register_open(); return false;
});
$('.btn_dkn').click(function () {
    choiid_register_open(); return false;
});

$('#btn_dkn').click(function () {
    choiid_register_open(); return false;
});

$(function () {
    $("#menutintuchome ul li").hover(function (event) {
        $('#menutintuchome ul').find('li').removeClass('mtin_chon');
        $('#menutintuchome ul li').find('a').removeClass('first_tit');
        $("#tabtintuc1").hide();
        $("#tabtintuc2").hide();
        $("#tabtintuc3").hide();
        $("#tabtintuc4").hide();
        $("#tab" + $(this).attr('id')).show();

        $(this).addClass('mtin_chon');
        $(this).find('a').addClass('first_tit');
    });

    $('#menutintuchome ul li').click(function () {
        $('#menutintuchome ul').find('li').removeClass('mtin_chon');
        $('#menutintuchome ul li').find('a').removeClass('first_tit');
        $("#tabtintuc1").hide();
        $("#tabtintuc2").hide();
        $("#tabtintuc3").hide();
        $("#tabtintuc4").hide();
        $("#tab" + $(this).attr('id')).show();

        $(this).addClass('mtin_chon');
        $(this).find('a').addClass('first_tit');
    });

    $("#menutintuchome ul li").hover(function (event) {
        try {
            $('#colormenu_tin ul').find('li').removeClass('mtin_chon');
            $('#colormenu_tin ul li').find('a').removeClass('first_tit');
            $("#tabtintuc1").hide();
            $("#tabtintuc2").hide();
            $("#tabtintuc3").hide();
            $("#tabtintuc4").hide();
            $("#tab" + $(this).attr('id')).show();
            $(this).addClass('mtin_chon');
            $(this).find('a').addClass('first_tit');
        } catch (err) { }
    });

    $("#tabhuongdan2").hide();
    $("#tabhuongdan3").hide();
    $("#tabhuongdan4").hide();

    $('#colormenu_tin ul li').hover(function () {
        try {
            $('#colormenu_tin ul').find('li').removeClass('mtin_chon');
            $('#colormenu_tin ul li').find('a').removeClass('first_tit');
            $("#tabhuongdan1").hide();
            $("#tabhuongdan2").hide();
            $("#tabhuongdan3").hide();
            $("#tabhuongdan4").hide();
            $("#tab" + $(this).attr('id')).show();
            $(this).addClass('mtin_chon');
            $(this).find('a').addClass('first_tit');
        } catch (err) { }
    });
});

try {

    $(".gallery").fancybox();
    $(".downloads").fancybox();
} catch (err) { }
var currentlistid = '';

$('.listtdiemover').hover(function () {
    try {
        var id = $(this).attr('id');
        if (currentlistid != id) {
            if (id.length > 0) {
                for (var i = 1; i <= 5; i++) {
                    $("#tieudiem_" + i).hide();
                    $("#tin_tdiem_" + i).hide();
                }
                var y = id.replace('listtdiem_', '');
                $("#tieudiem_" + y).fadeIn('slow');
                $("#tin_tdiem_" + y).fadeIn('slow');

                currentlistid = id;
            }
        }
    } catch (err) { }
});

$(document).ready(function () {
    try {
        setTimeout(function () {
            var nav = $(".nd_tinbai");
            if (nav.length) {
                $('body, html').animate({ scrollTop: ($(".nd_tinbai").offset().top - 80) }, "slow");
            }
        }, 0);
    } catch (err) { }
});




$('.homemonphai li').hover(function () {
    try {
        var id = $(this).attr('id');

        if (currentlistid != id) {
            if (id.length > 0) {
                for (var i = 1; i <= 5; i++) {
                    $("#tieudiem_" + i).hide();
                    $("#tin_tdiem_" + i).hide();
                }
                var y = id.replace('listtdiem_', '');
                $("#tieudiem_" + y).fadeIn('slow');
                $("#tin_tdiem_" + y).fadeIn('slow');

                currentlistid = id;
            }
        }
    } catch (err) { }
});

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').show();
    } else {
        $('#toTop').hide();
    }
});

$("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});

$("#btn_tkiem").click(function () {
    var keywords = $("#keywords").val();
    window.location.href = '/search/?q=' + keywords;
});


$("#linkcamnang").click(function () {

    window.location.href = 'https://web.archive.org/cam-nang/';
});



function reset() {
    $("#toggleCSS").attr("href", "../themes/alertify.default.html");
    alertify.set({
        labels: {
            ok: "OK",
            cancel: "Cancel"
        },
        delay: 5000,
        buttonReverse: false,
        buttonFocus: "ok"
    });
}

function downloadreg() {

    reset();
    alertify.alert("Tính năng này sẽ được mở trong thời gian tới", function (str) {
        choiid_register_open();
        return false;
    });
    return false;
}
function OpenRegForm() {
    var DomainStatic1 = DomainStatic + "Pages/close.aspx";
    var widthIfrRegister = 380;
    var heightIfrRegister = '100%';
    choiid_fancybox_open("#fancybox-tmp", DomainStatic + '/sso/register.aspx?ur=' + DomainStatic1, widthIfrRegister, heightIfrRegister);
}
function OpenLogForm() {
    var DomainStatic1 = DomainStatic + "Pages/close.aspx";
    var widthIfrRegister = 380;
    var heightIfrRegister = '100%';
    choiid_fancybox_open("#fancybox-tmp", DomainStatic + '/sso/form?ur=' + DomainStatic1, widthIfrRegister, heightIfrRegister);
}
function confirmDownload(id, text) {
    text = "<div style='padding:15px;padding-top:20px;font-family:Tahoma;font-size:14px;'>" + text + "</div>";
    alertify.confirm(text, function (e) {
        if (e) {
            window.open("/Pages/dl.aspx?id=" + id);

        } else {

        }
    });

}

function confirmDownloadAll(id, text) {
    text = "<div style='padding:15px;padding-top:20px;font-family:Tahoma;font-size:14px;'>" + text + "</div>";
    alertify.confirm(text, function (e) {
        if (e) {
            var arrid = id.split(",");

            for (i = 0; i < arrid.length; i++) {
                window.open("/Pages/dl.aspx?id=" + arrid[i]);
                setInterval(function () { }, 3000000);
            }

        } else {

        }
    });

}


var fb_fanpage = 'https://web.archive.org/web/20170607055226/https://www.facebook.com/WebSite';
var fb_uid = '';
var fb_accessToken = ''


$('#btnbxh').click(function () {
    var data = $(this).attr("rel");
    /* chien luong*/
    if (data == 'bxh1') {
        $(this).attr("rel", 'bxh2');
        $(this).text("Cấp độ");
        chienluc = 1;
        rankgame();

    }
    else {
        $(this).attr("rel", 'bxh1');
        $(this).text("Chiến lực");
        chienluc = 0;
        rankgame();
    }



});


$('#linkShare').click(function () {
    console.log('click');
    if (fb_uid.length > 0) {
        shareFace();
    } else {
        FB.getLoginStatus(function (response) {

            if (response.authResponse) {
                fb_uid = response.authResponse.userID;
                fb_accessToken = response.authResponse.accessToken;
                shareFace();
            } else {
                FB.login(function (response) {

                    if (response.authResponse) {
                        fb_uid = response.authResponse.userID;
                        fb_accessToken = response.authResponse.accessToken;
                        shareFace();
                    }
                });
            }
        });
    }
});

function shareFace() {
    FB.ui(
          {
              method: 'feed',
              name: 'Trinh Đế - Tặng GIFTCODE cho game thủ',
              link: 'https://web.archive.org/web/20170607055226/http://website/teaser/?utm_source=facebook&utm_medium=share_giftcode&utm_campaign=launching_t12015',
              picture: 'https://web.archive.org/web/20170607055226/http://website/teaser/share/thumb_share.jpg',
              description: 'Trinh Đế - Game chiến thuật thế hệ thứ 5. Xưng đế và dựng cơ đồ cùng Ngọc Trinh tại http://WebSite. Nhận giftcode ngay tổng giá trị lên tới 10 triệu đồng.',
              caption: 'WebSite'
          },
          function (response) {

              if (response && response.post_id) {
                  $.post("handler/Data.ashx", { fb_uid: fb_uid, access_token: fb_accessToken, stype: 'share' }, function (data) {
                      if (data.giftcode != '') {
                          $("#giftshare").html("<span  >Cảm ơn bạn đã Share Fanpage Trinh Đế. Hãy trở lại vào ngày 15/01 để sử dụng ngay Giftcode dưới đây.<br/> Mã Giftcode: <span style='color:#ff0000; font-weight:bold;'>" + data.giftcode + "</span></span>");
                          window.location.href = "#section4";
                          alert('Chia sẻ thành công');

                      } else {
                          alert('Hết Giftcode, vui lòng thử lại sau');
                      }
                  });
              } else {
                  alert('Bạn đã hủy chia sẻ.');
              }
          }
        );
}


function LikeFace() {

    FB.getLoginStatus(function (response) {
        if (response.authResponse) {
            fb_uid = response.authResponse.userID;
            fb_accessToken = response.authResponse.accessToken;


            $.post("handler/Data.ashx", { fb_uid: fb_uid, access_token: fb_accessToken, stype: 'like' }, function (data) {
                if (data.giftcode != '') {
                    $("#giftlike").html("<span  >Cảm ơn bạn đã Like Fanpage Trinh Đế. Hãy trở lại vào ngày 15/01 để sử dụng ngay Giftcode dưới đây.<br/> Mã Giftcode: <span style='color:#ff0000; font-weight:bold;'>" + data.giftcode + "</span></span>");
                    window.location.href = "#section4";
                    alert('Cảm ơn bạn đã Like Fanpage Trinh Đế');
                } else {
                    alert('Hết Giftcode, vui lòng thử lại sau');
                }
            });

        }

    });



}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




function BindRank(obj) {
    var temptd = '';
    if (chienluc == 0) {
        $("#btnbxh").text("Chiến lực");
        temptd = '<tr> <td class="thead">STT</td> <td class="thead">Tên nhân vật</td> <td class="thead">Cấp độ</td> </tr>';
    }
    else {
        $("#btnbxh").text("Cấp độ");

        temptd = '<tr> <td class="thead">STT</td> <td class="thead">Tên nhân vật</td> <td class="thead">Chiến lực</td> </tr>';
    }
    if (obj) {
        var i = 0;
        $.each(obj, function (i, item) {
            if (i <= 3)
                temptd += '<tr> <td><strong>' + item.Rank + '</strong></td> <td><strong>' + item.Name + '</strong></td> <td><strong>' + item.Level + '</strong></td> </tr>';
            else {
                temptd += '<tr> <td>' + item.Rank + '</td> <td>' + item.Name + '</td> <td>' + item.Level + '</td> </tr>';

            }
            i++;

        });
    }

    $("#content_ranking").html(temptd);
}

function rankgame() {
    var serverid = $("#chonmc option:selected").val();
    if (serverid != 0) {

        ajaxObj = $.ajax({
            type: "GET",
            url: "/rank." + serverid + ".html?opt=" + chienluc,
            success: function (b) {

                BindRank(b);
            }
        })


    }
}


!window.jQuery.cookies && document.write(unescape('%3Cscript src="/js/jquery.cookie.js"%3E%3C/script%3E'));
getSource();

function getSource() {
    var source = grgup('utm_source');
    if (source != "") {
        var date = new Date();
        var minutes = 1440;
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        $.cookie("utm_source", source, { expires: date });
    } 
}
function getAgency() {

    var source = $.cookie('utm_source');
   
    if (source != null) {
        if (source.indexOf("facebook") > -1) {
            return 1;
        }
        if (source.indexOf("google") > -1) {
            return 2;
        }
        if (source.indexOf("pfct") > -1) {
            return 3;
        }
        if (source.indexOf("coccoc") > -1) {
            return 4;
        }
        if (source.indexOf("nega") > -1) {
            return 5;
        }
        if (source.indexOf("playpark") > -1) {
            return 6;
        }
        if (source.indexOf("gamek") > -1) {
            return 7;
        }
        if (source.indexOf("xemgame") > -1) {
            return 8;
        }
        if (source.indexOf("game4v") > -1) {
            return 9;
        }
        if (source.indexOf("gamethu") > -1) {
            return 10;
        }
        if (source.indexOf("gamen") > -1) {
            return 11;
        }
        if (source.indexOf("hdviet") > -1) {
            return 12;
        }
        if (source.indexOf("truyen368") > -1) {
            return 13;
        }
        if (source.indexOf("voz") > -1) {
            return 14;
        }
        if (source.indexOf("blogtruyen") > -1) {
            return 15;
        }
        if (source.indexOf("goccay") > -1) {
            return 16;
        }
        if (source.indexOf("kenhgamez") > -1) {
            return 17;
        }
        if (source.indexOf("lol24h") > -1) {
            return 18;
        }
    }
    return 0;
}

function grgup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}
﻿

}
/*
     FILE ARCHIVED ON ﻿05:52:26 Jun 07, 2017﻿ AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON ﻿11:00:05 Nov 26, 2024﻿.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
﻿playback timings (ms):
﻿  ﻿captures_list﻿: ﻿1.241﻿
﻿  ﻿exclusion.robots﻿: ﻿0.017﻿
﻿  ﻿exclusion.robots.policy﻿: ﻿0.007﻿
﻿  ﻿esindex﻿: ﻿0.01﻿
﻿  ﻿cdx.remote﻿: ﻿2265.897﻿
﻿  ﻿LoadShardBlock﻿: ﻿1178.374﻿ (﻿3﻿)
﻿  ﻿PetaboxLoader3.datanode﻿: ﻿547.468﻿ (﻿4﻿)
﻿  ﻿PetaboxLoader3.resolve﻿: ﻿452.461﻿ (﻿2﻿)
﻿  ﻿load_resource﻿: ﻿307.513﻿
﻿*/