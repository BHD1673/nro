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

$(document).ready(function() {
            var bFLeft = $("#divBannerFloatLeft");

            var bFRight = $("#divBannerFloatRight");

            var left_Positiion = 0;

            var right_Positiion = 0;

            var window_Width = $(window).width();
            var document_Width = 1020;

            if (window_Width < document_Width && jQuery(window).width() < 1280) {
                bFLeft.hide();
                bFRight.hide();
            } else {

                //Calculate right position for left banner

                right_Positiion = (window_Width - document_Width) / 2 + document_Width;

                left_Positiion = (window_Width - document_Width) / 2 + document_Width;
                bFLeft.attr("style", "float: left; position: fixed; top: 165px; right: " + right_Positiion + "px;");
                bFRight.attr("style", "float: right; position: fixed; top: 165px; left: " + left_Positiion + "px;");
                bFLeft.append("<br style='clear:both;'>");
                bFRight.append("<br style='clear:both;'>");
           }
});

}
/*
     FILE ARCHIVED ON 15:50:49 Jul 23, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:56:37 Jun 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.616
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.059
  esindex: 0.013
  cdx.remote: 5.494
  LoadShardBlock: 94.373 (3)
  PetaboxLoader3.datanode: 64.211 (4)
  PetaboxLoader3.resolve: 83.296 (2)
  load_resource: 99.449
*/