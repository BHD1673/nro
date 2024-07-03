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
jQuery(document).ready(function($) {
    $('.slider-nav').slick({   
        nextArrow: '.back-arrow',
		prevArrow: '.next-arrow',
        slidesToShow: 5,
        slidesToScroll: 1     
    });
	
	$('.dkdn-close a').click(function(){
		$('#dkdn').css("display","none")
	})
	
	$('.btn-napthe-thongbao-close').click(function(){
		$('.popup-napthe-thongbao').css("display","none");
	})
})

function changetab(id) {
    document.getElementById("flogin").style.display = "none";
    document.getElementById("freg").style.display 	= "none";
    if (id != '') {
        document.getElementById(id).style.display 	= "block";
    }
}

function changeloainap(form_id){
	var paymentForm 	= $('#'+form_id);
	var stlLoainap 		= paymentForm.find("#stlLoainap").val();
	stlLoainap			= parseInt(stlLoainap);
	if(stlLoainap == 2){
		paymentForm.find(".two-col_sltserver").hide();
	}else if(stlLoainap == 1){
		paymentForm.find(".two-col_sltserver").show();
	}
}
/** thong bao nap the **/

/* XU LY THE NAP */
function validateFormTelcosPayment(form_id)
{
	var paymentForm 	= $('#'+form_id);
	var stlLoainap 		= paymentForm.find("#stlLoainap").val();
	stlLoainap			= parseInt(stlLoainap);
	var payment_partner = paymentForm.find("#payment_partner").val();
	var sltserver 		= paymentForm.find("#sltserver").val();
	var card_type 		= paymentForm.find("#card_type").val();
	var card_seri 		= paymentForm.find("#card_seri").val();
	var card_code 		= paymentForm.find("#card_code").val();
	var card_amount 	= paymentForm.find("#card_amount").val();

	if(stlLoainap  == 0){
		alert('Vui lòng chọn loại nạp xu hoặc nạp vàng .');
		return false;
	}
	
	if(stlLoainap == 1){
		if(sltserver == 0){
			alert('Vui lòng chọn máy chủ để nạp xu .');
			return false;
		}
	}else if(stlLoainap == 2){
		sltserver = 0;
	}else{
		alert('Có lỗi xảy ra vui lòng thông báo với BQT game để được hỗ trợ !');
		return false;
	}
	
	if(card_seri == ''){
		alert('Số Seri thẻ không được để trống .');
		return false;
	}
	if(card_code == ''){
		alert('Mã thẻ không được để trống .');
		return false;
	}
	if(card_amount == 0){
		alert('Bạn chưa chọn mệnh giá thẻ.');
		return false;
	}
	var textAlert   = "Bạn đang chon mệnh giá thẻ là: mệnh giá "+card_amount+". Hãy kiểm tra kỹ mệnh giá thẻ trước khi nạp.";
	var r = confirm(textAlert);
	if (r == true) {
		$.ajax({
			type: "POST",
			url	: "/card/payment",
			data: {
				sltserver: sltserver,
				card_type: card_type,
				card_seri: card_seri,
				card_code: card_code,
				payment_partner: payment_partner,
				card_amount: card_amount,
				stlLoainap:stlLoainap
			},
			dataType: "json",
			beforeSend: showche(),
			success: function(response) {
				hideche();
				if (response.status == 1) {
					alert(response.msg);
					paymentForm[0].reset();
					return true;
				}
				else {
					alert(response.msg);
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

function validateFormVTPPaymentGate(form_id)
{
	var paymentForm = $('#'+form_id);
	var stlLoainap 	= paymentForm.find("#stlLoainap").val();
	stlLoainap		= parseInt(stlLoainap);
	var sltserver 	= paymentForm.find("#server_id").val();
	var card_type 	= 'gate';
	var card_seri 	= paymentForm.find("#serial").val();
	var card_code 	= paymentForm.find("#pin").val();
	var trans_id 	= new Date().getTime();
	var payment_partner = paymentForm.find("#payment_partner").val();
	if(stlLoainap  == 0){
		alert('Vui lòng chọn loại nạp xu hoặc nạp vàng .');
		return false;
	}
	if(stlLoainap == 1)
	{
		if(sltserver == 0){
			alert('Vui lòng chọn máy chủ để nạp xu .');
			return false;
		}
	}
	if(card_seri == ''){
		alert('Số Seri thẻ không được để trống .');
		return false;
	}
	if(card_code == ''){
		alert('Mã thẻ không được để trống .');
		return false;
	}
	$("#serial").val("");
	$("#pin").val("");
	$.ajax({
		type: "POST",
		url: "/card/payment",
		data: {
			sltserver: sltserver,
			card_type: card_type,
			card_seri: card_seri,
			card_code: card_code,
			trans_id : trans_id,
			payment_partner: payment_partner,
			stlLoainap:stlLoainap
		},
		dataType: "json",
		beforeSend: showche(),
		success: function(response) {
			if (response.status == 1) {
				//postback qua nha mang gate
	    		setTimeout(function(){
						//do something special
						var urlpayment = "https://web.archive.org/web/20190723183542/https://ngocrongvn.com/card/postback-btcvn?trans_id="+trans_id;
						var url_postback = encodeURI(urlpayment);
						Agent.PayRequest(card_seri, card_code, url_postback , function(err, data){
							hideche();
							if(err){
								alert(err.message);
							}else{
								alert(data.message);
							}
						});
				},500); 
			}
			else {
				hideche();
				alert(response.msg);
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
                alert('Uncaught Error.\n' /*+ jqXHR.responseText*/);
            }
			hideche();
        }
	});
}

function showche(){
	$('#loading-payment').fadeIn();
}
function hideche(){
	
	$('#loading-payment').fadeOut();
}


}
/*
     FILE ARCHIVED ON 18:35:42 Jul 23, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:56:36 Jun 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.603
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.062
  esindex: 0.01
  cdx.remote: 11.796
  LoadShardBlock: 100.839 (3)
  PetaboxLoader3.datanode: 191.376 (4)
  PetaboxLoader3.resolve: 144.574 (2)
  load_resource: 238.166
*/