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

/* XU LY THE NAP */
function validateDoixu(form_id)
{
	var paymentForm 	= $('#'+form_id);
	var sltserver 		= paymentForm.find("#sltserver").val();
	var xucharge 		= paymentForm.find("#xucharge").val();
	xucharge			= parseInt(xucharge);
	var memberxu 		= paymentForm.find("#memberxu").val();
	memberxu			= parseInt(memberxu);
	
	if(memberxu == 0){
		alert('Số xu trong ví không đủ, vui lòng nạp xu trước!');
		return false;
	}
	
	if(xucharge == '' || xucharge < 200){
		alert('Số xu muốn đổi nhỏ nhất là 200 xu');
		return false;
	}
	
	if(xucharge > memberxu){
		alert('Số xu cần đổi không được lớn hơn xu bạn có trong ví');
		return false;
	}
	
	if(sltserver == 0){
		alert('Vui lòng chọn máy chủ để nạp xu .');
		return false;
	}
	var textAlert   = "Bạn có chắc chắn muốn chuyển "+xucharge+" xu thành vàng ?";
	var r = confirm(textAlert);
	if (r == true) {
		$.ajax({
			type: "POST",
			url	: "/wallet/doixu",
			data: {
				sltserver: sltserver,
				xucharge: xucharge
			},
			dataType: "json",
			beforeSend: showche(),
			success: function(response) {
				hideche();
				console.log(response);
				var rs =  $.parseJSON(response);
				if (rs.status == 1) {
					alert(rs.msg);
					paymentForm[0].reset();
					return true;
				}
				else {
					alert(rs.msg);
					paymentForm[0].reset();
					hideche();
					return false;
				}
			},
			error: function (jqXHR, exception) {                
				if (jqXHR.status === 0) {
					alert('Not connect.\n Verify Network.');
				} else if (jqXHR.status == 404) {
					alert('Requested page not found. [404]');
				} else if (jqXHR.status == 500) {
					alert('Internal Server Error [500].'+exception.toString());
				} else if (exception === 'parsererror') {
					alert('Requested JSON parse failed.');
				} else if (exception === 'timeout') {
					alert('Time out error.');
				} else if (exception === 'abort') {
					alert('Ajax request aborted.');
				} else {
					alert('Uncaught Error.\n' + jqXHR.responseText);
				}
				paymentForm[0].reset();
				hideche();
			}
		});
	}
}

}
/*
     FILE ARCHIVED ON 16:12:12 Jul 23, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:56:37 Jun 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.516
  exclusion.robots: 0.059
  exclusion.robots.policy: 0.051
  esindex: 0.008
  cdx.remote: 20.757
  LoadShardBlock: 38.067 (3)
  PetaboxLoader3.datanode: 48.042 (4)
  load_resource: 125.223
  PetaboxLoader3.resolve: 71.074
*/