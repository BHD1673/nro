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

function popup(option, url) {
    if (!user_login) {
        $.fancybox({
            href: '#account',
            padding: 0,
            width: "485px",
            beforeShow: function() {
                $('.fancybox-skin').css({ 'background': 'none', 'box-shadow': 'none' });
                $('.fancybox-close').css({ 'top': "112px", "right": "83px", 'background' : 'transparent' }); 
            },
            afterShow: function() {
                $('.fancybox-type-inline').css('top', '20px');
                $('.fancybox-close').css({ 'top': "112px", "right": "83px", 'background' : 'transparent' });
            }
        });
        return false;
    } else {
        if (option != '' && option != 'account' && option != undefined) {
            $.fancybox({
                href: '#' + option,
                padding: 0,
                beforeShow: function() {
                    $('.fancybox-skin').css({ 'background': 'none', 'box-shadow': 'none' });
                },
                afterShow: function() {
                    $('.fancybox-type-inline').css('top', '20px');
                }
            });
        } else {
            alert("Xin chào " + user_login + ". Bạn đã đăng ký thành công.\n Vui lòng trở lại vào lúc 14h ngày 22/11 để trải nghiệm game");
        }
    }
}
function click_groupsv(a){
    $('.block-server .tab').removeClass('active');
    $('.block-server .tab'+a).addClass('active');
    $('.group_s').removeClass('active');
    $('.group_s'+a).addClass('active');
}
function cumsv(a){
    $('.nav_groupsv li').removeClass('active');
    $('.li_cum'+a).addClass('active');
    $('.tabsv').addClass('d-none');
    $('.cumsv'+a).removeClass('d-none');

}
function openCharge(evt, cityName) {
    var i, tabcontent,tablinks;
    tabcontent = document.getElementsByClassName("nc-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


}
/*
     FILE ARCHIVED ON 17:42:29 Jul 23, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:56:33 Jun 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.571
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  esindex: 0.008
  cdx.remote: 103.986
  LoadShardBlock: 75.001 (3)
  PetaboxLoader3.datanode: 138.308 (4)
  load_resource: 123.122
  PetaboxLoader3.resolve: 38.012
*/