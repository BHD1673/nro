// var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
// if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
// {
//   let window = _____WB$wombat$assign$function_____("window");
//   let self = _____WB$wombat$assign$function_____("self");
//   let document = _____WB$wombat$assign$function_____("document");
//   let location = _____WB$wombat$assign$function_____("location");
//   let top = _____WB$wombat$assign$function_____("top");
//   let parent = _____WB$wombat$assign$function_____("parent");
//   let frames = _____WB$wombat$assign$function_____("frames");
//   let opener = _____WB$wombat$assign$function_____("opener");

// jQuery(document).ready(function($) {
// 	var fb_fanpage 	= 'https://web.archive.org/web/20190723174303/https://www.facebook.com/webgame7vienngocrong/';
// 	var fb_uid 		= '';
// 	var fb_accessToken = '';
	
	
// 	$('.dkdn-close a').click(function(){
// 		$('#dkdn').css("display","none")
// 	});
	
// 	/* Home Click Nap Xu */
// 	$('.mainsite-napxu').click(function(){
// 		var loginFlag 	= $('#loginFlag').val();
// 		if(loginFlag == 0){
// 			dkdn();
// 		}else{
// 			window.location.replace("/nap-xu");
// 		}
// 	});
	
// 	/* Open Trailer Home */
// 	$('.play_trailer').click(function(e){
// 		a = 0;
// 		e.preventDefault();
		
// 		var urlVideo = '';
// 		urlVideo = 'https://web.archive.org/web/20190723174303/https://www.youtube.com/embed/8PrK7ZPjE6U?autoplay=1&controls=0&loop=1&playlist=8PrK7ZPjE6U&amp;showinfo=0';
		
// 		$('.clip-'+a + ' iframe').attr('src', urlVideo);	
		
// 		$('.popup-clip').css("display","block");
// 		$('.clip-'+a).css("display","block");
			
// 	})
	
// 	$('.btn-close-clip').click(function(){
// 		$('.popup-clip').css("display","none");
// 		$('.popup-clip .clip').css("display","none");
// 		$('.clip iframe').attr('src', $('.clip-'+a + ' iframe').attr('src').replace('?autoplay=1',""));
// 	})

	
// 	/* Top Server Left */
// 	$('.topsv').click(function(){
// 		var loginFlag 	= $('#loginFlag').val();
// 		server_status 	= $(this).attr('server_status');
// 		server_slug 	= $(this).attr('server_slug');
// 		server_name 	= $(this).attr('server_name');
// 		server_is_timer = $(this).attr('server_is_timer');
// 		server_timer 	= $(this).attr('server_timer');
		
// 		var timestamp_now		= $.now();
// 		var time_now_timestamp 	= (new Date(server_timer).getTime());
		
// 		if(loginFlag == 0){
// 			dkdn();
// 		}else{
// 			handleCheckServerActive(function(res){
// 				var rs =  $.parseJSON(res);
// 				console.log(rs);
// 				if(rs.status==1){
// 					if(server_status == 1){
// 						if(server_is_timer == 1) // server dang hen gio
// 						{
// 							if(time_now_timestamp <= timestamp_now){
// 								window.location.href = '/choi-ngay/'+server_slug;
// 							}
// 							else{
// 								alert('Máy chủ ra mắt vào lúc : '+server_timer);
// 							}
// 						}
// 						else{
// 							window.location.href = '/choi-ngay/'+server_slug;
// 						}
// 					}
// 				}
// 				else if(rs.status==2)
// 				{
// 					$('.popup-ramatmaychu').show();
// 				}
// 			})
// 		}
// 	})
	
// 	/* Home Playnow */
// 	$('.choingay-home').click(function(){
// 		var loginFlag = $('#loginFlag').val();
// 		if(loginFlag == 0){
// 			dkdn();
// 		}else{
// 			handleCheckServerActive(function(res){
// 				var rs =  $.parseJSON(res);
// 				if(rs.status==1){
// 					window.location.replace("/may-chu");
// 				}
// 				else if(rs.status==2)
// 				{
// 					$('.popup-ramatmaychu').show();
// 				}
// 			})
// 		}
// 	});
	
// 	$('.btn-show-codevip').click(function(){
// 		dkdn();
// 	})
	
// 	/** TEASER SHARE **/
// 	$('body').delegate('.linkshare','click',function(e){
// 		var loginFlag = $('#loginFlag').val();
// 		if(loginFlag == 1){
// 			shareFb();
// 		}else{
// 			$('#actionShareFlag').val(1);
// 			dkdn();
// 		}
// 	});
	
// 	/** FAST LOGIN TEASER **/
// 	$('body').delegate('#btnRegisterTeaser','click',function(e){
// 		var username 	= $("#txtUsernameReg").val();
// 		var password 	= $("#txtPasswordReg").val();
// 		var password2 	= $("#txtPasswordReg2").val();
// 		var email 		= $.now()+'@gmail.com';
// 		if(username == '' || password == '' || password2 == ''){
// 			alert('Vui lòng điền đầy đủ thông tin khi đăng ký !');
// 			return false;
// 		}
// 		if(password != password2){
// 			alert('Mật khẩu không giống nhau vui lòng nhập lại !');
// 			return false;
// 		}
// 		var actionShareFlag = $("#actionShareFlag").val();	
// 		var params = {
// 				username	: username,
// 				password	: password,
// 				password2	: password2,
// 				email		: email
// 			};
// 		handleRegisterFast(params,function(response){
// 			var result =  $.parseJSON(response);
// 			if (result.status == 1) {
// 				$('#dkdn').css("display","none");
// 				$('.text_username').html(result.data.member_username);
// 				$('.welcome_user').css("display","block");
// 				$('#loginFlag').val(1);
// 				handleGetNewServerActive(function(res){
// 					var rs =  $.parseJSON(res);
// 					console.log(rs);
// 					if(rs.status==1){
// 						var url = 'https://web.archive.org/web/20190723174303/https://ngocrongvn.com/choi-ngay/' + rs.data;
// 						window.location.replace(url);
// 					}
// 					else if(rs.status==2)
// 					{
// 						$('.popup-ramatmaychu').show();
// 					}
// 				})
// 				return true;
// 			}
// 			else {
//                 alert(result.msg);
// 				return false;
// 			}
// 		});
// 	});
	
// 	/** FAST LOGIN TEASER **/
// 	$('body').delegate('#btnLoginTeaser','click',function(e){
// 		var username = $("#txtUserName").val();
// 		var password = $("#txtPassword").val();
// 		if(username == '' || password == ''){
// 			alert('Vui lòng điền đầy đủ thông tin khi đăng nhập !');
// 			return false;
// 		}
// 		var actionShareFlag = $("#actionShareFlag").val();
// 		var params = {
// 				username	: username,
// 				password	: password
// 			};
// 		handleLoginFast(params,function(response){
// 			var result =  $.parseJSON(response);
// 			hideLoading();
// 			if (result.status == 1) {
// 				$('#dkdn').css("display","none");
// 				$('.text_username').html(result.data.member_username);
// 				$('.welcome_user').css("display","block");
// 				$('#loginFlag').val(1);
// 				handleGetNewServerActive(function(res){
// 					var rs =  $.parseJSON(res);
// 					console.log(rs);
// 					if(rs.status==1){
// 						var url = 'https://web.archive.org/web/20190723174303/https://ngocrongvn.com/choi-ngay/' + rs.data;
// 						window.location.replace(url);
// 					}
// 					else if(rs.status==2)
// 					{
// 						$('.popup-ramatmaychu').show();
// 					}
// 				})
// 			}
// 			else {
// 				alert(result.msg);
// 				return false;
// 			}
// 		});
// 	});
	
	
// 	/** FAST REGISTER HOME **/
// 	$('body').delegate('#btnRegisterHome','click',function(e){
// 		var username 	= $("#txtUsernameReg").val();
// 		var password 	= $("#txtPasswordReg").val();
// 		var password2 	= $("#txtPasswordReg2").val();
// 		var email 		= $.now()+'@gmail.com';
// 		if(username == '' || password == '' || password2 == ''){
// 			alert('Vui lòng điền đầy đủ thông tin khi đăng ký !');
// 			return false;
// 		}
// 		if(password != password2){
// 			alert('Mật khẩu không giống nhau vui lòng nhập lại !');
// 			return false;
// 		}
// 		var openServerFlag = $("#openServerFlag").val();	
// 		var params = {
// 				username	: username,
// 				password	: password,
// 				password2	: password2,
// 				email		: email
// 			};
// 		handleRegisterFast(params,function(response){
// 			var result =  $.parseJSON(response);
// 			if (result.status == 1) {
// 				$('.info-user .w-user').html(result.data.member_username);
// 				$('.info-user').show();
// 				$('#dkdn').css("display","none");
// 				$('#loginFlag').val(1);
// 				handleGetNewServerActive(function(res){
// 					var rs =  $.parseJSON(res);
// 					console.log(rs);
// 					if(rs.status==1){
// 						var url = 'https://web.archive.org/web/20190723174303/https://ngocrongvn.com/choi-ngay/' + rs.data;
// 						window.location.replace(url);
// 					}
// 					else if(rs.status==2)
// 					{
// 						window.location.replace("/may-chu");
// 					}
// 				})
// 				return true;
// 			}
// 			else {
//                 alert(result.msg);
// 				return false;
// 			}
// 		});
// 	});
	
// 	/** FAST LOGIN HOME **/
// 	$('body').delegate('#btnLoginHome','click',function(e){
// 		var username = $("#txtUserName").val();
// 		var password = $("#txtPassword").val();
// 		if(username == '' || password == ''){
// 			alert('Vui lòng điền đầy đủ thông tin khi đăng nhập !');
// 			return false;
// 		}
// 		var actionShareFlag = $("#actionShareFlag").val();
// 		var params = {
// 			username: username,
// 			password: password
// 		};
	
// 		$.ajax({
// 			url: 'xu-ly-login',  // URL to send the data
// 			type: 'POST',
// 			data: params,
// 			success: function(response) {
// 				var result = $.parseJSON(response);
// 				hideLoading();
// 				if (result.status == 1) {
// 					$('.info-user .w-user').html(result.data.member_username);
// 					$('.info-user').show();
// 					$('#dkdn').css("display","none");
// 					$('#loginFlag').val(1);
// 					handleCheckServerActive(function(res){
// 						var rs = $.parseJSON(res);
// 						if(rs.status == 1 || rs.status == 2){
// 							window.location.replace("/may-chu");
// 						}
// 					});
// 				} else {
// 					alert(result.msg);
// 					return false;
// 				}
// 			},
// 			error: function(xhr, status, error) {
// 				console.error("AJAX Error: " + status + error);
// 			}
// 		});
// 	});
	
	
// 	// Button Login Home
// 	$('body').delegate('#btn-login','click',function(e){
// 		var username = $("#txtUserNameHome").val();
// 		var password = $("#txtPasswordHome").val();
// 		if(username == '' || password == ''){
// 			alert('Vui lòng điền đầy đủ thông tin khi đăng nhập !');
// 			return false;
// 		}
// 		var actionShareFlag = $("#actionShareFlag").val();
// 		var params = {
// 				username	: username,
// 				password	: password
// 			};
// 		handleLoginFast(params,function(response){
// 			var result =  $.parseJSON(response);
// 			hideLoading();
// 			if (result.status == 1) {
// 				$('.info-user .w-user').html(result.data.member_username);
// 				$('.info-user').show();
// 				$('#dkdn').css("display","none");
// 				$('#loginFlag').val(1);
// 				handleCheckServerActive(function(res){
// 					var rs =  $.parseJSON(res);
// 					if(rs.status==1){
// 						window.location.replace("/may-chu");
// 					}
// 					else if(rs.status==2)
// 					{
// 						window.location.replace("/may-chu");
// 					}
// 				});
				
// 			}
// 			else {
// 				alert(result.msg);
// 				return false;
// 			}
// 		});
// 	});
// });
// function isEmpty(str) {
//     return (!str || 0 === str.length);
// }
// function appAjax(url, method, data, dataType, callback) {
	
// 	var request = $.ajax({
// 	  url		: url,
// 	  method	: method,
// 	  data		: data,
// 	  dataType	: dataType
// 	});
// 	request.done(function( msg ) {
// 	  // $( "#log" ).html( msg );
// 	  callback(msg);
// 	});
	 
// 	request.fail(function( jqXHR, textStatus ) {
// 	  // alert( "Request failed: " + textStatus );
// 	  callback(jqXHR, textStatus);
// 	});
// }
// function closeDkn(){
// 	$('#dkdn').css("display","none")
// }
// function dkdn()
// {
// 	$('#dkdn').css("display","block")
// }

// function changetab(id) {
//     document.getElementById("flogin").style.display = "none";
//     document.getElementById("freg").style.display = "none";
//     if (id != '') {
//         document.getElementById(id).style.display = "block";
//     }
// }

// function showLoading() {
// 	$("#loading").css("display","block");
// }

// function hideLoading() {
// 	$("#loading").css("display","none");
// }

// /** Fast Login Register **/
// function validateFastFormLogin()
// {
// 	var username = $("#txtUserName").val();
// 	var password = $("#txtPassword").val();
// 	$.ajax({
// 		type: "POST",
// 		url	: "/ajax/ajax-login",
// 		data: {
// 			username: username,
// 			password: password,
// 		},
// 		dataType: "json",
// 		beforeSend: showLoading(),
// 		success: function(response) {
// 			var result =  $.parseJSON(response);
// 			hideLoading();
// 			if (result.status == 1) {
// 				window.location.href = result.link;
// 				return true;
// 			}
// 			else {
// 				alert(result.msg);
// 				return false;
// 			}
// 		},
// 		error: function(response) {
// 			hideLoading();
// 			alert("Đăng nhập thất bại! Lỗi: "+response.status);
// 		}
// 	});
// }
// function validateFastFormRegister()
// {
// 	var username 	= $("#txtUsernameReg").val();
// 	var password 	= $("#txtPasswordReg").val();
//     var password2 	= $("#txtPasswordReg2").val();
// 	var email 		= $.now()+'@gmail.com';
// 	$.ajax({
// 		type: "POST",
// 		url	: "ajax/ajax-register",
// 		data: {
// 			username: username,
// 			password: password,
// 			password2: password2,
// 			email: email,
// 		},
// 		dataType: "json",
// 		beforeSend: showLoading(),
// 		success: function(response) {
// 			var result =  $.parseJSON(response);
// 			hideLoading();
// 			if (result.status == 1) {
// 				//window.location.href = response.link;
// 				return true;
// 			}
// 			else {
//                 alert(result.message);
// 				return false;
// 			}
// 		},
// 		error: function(result) {
// 			hideLoading();
// 			alert("Đăng ký thất bại! Lỗi: "+result.status);
// 		}
// 	});
// }

// function validateFastTeaserFormLogin()
// {
// 	var username = $("#txtUserName").val();
// 	var password = $("#txtPassword").val();
// 	$.ajax({
// 		type: "POST",
// 		url	: "/ajax/ajax-login",
// 		data: {
// 			username: username,
// 			password: password,
// 		},
// 		dataType: "json",
// 		beforeSend: showLoading(),
// 		success: function(response) {
// 			var result =  $.parseJSON(response);
// 			hideLoading();
// 			if (result.status == 1) {
// 				$('#dkdn').css("display","none");
// 				$('#loginFlag').val(1);
// 				if(result.data.member_phone !=''){
// 					$("#txtMemberPhone").val(result.data.member_phone);
// 					$('.popup-thongbao').fadeIn(500);
// 				}
// 				else{
// 					$('.popup-giftcode').fadeIn(500);
// 				}	
// 			}
// 			else {
// 				alert(result.msg);
// 				return false;
// 			}
// 		},
// 		error: function(response) {
// 			hideLoading();
// 			alert("Đăng nhập thất bại! Lỗi: "+response.status);
// 		}
// 	});
// }
// function validateFastTeaserFormRegister()
// {
// 	var username 	= $("#txtUsernameReg").val();
// 	var password 	= $("#txtPasswordReg").val();
//     var password2 	= $("#txtPasswordReg2").val();
// 	var email 		= $.now()+'@gmail.com';
// 	$.ajax({
// 		type: "POST",
// 		url	: "ajax/ajax-register",
// 		data: {
// 			username: username,
// 			password: password,
// 			password2: password2,
// 			email: email,
// 		},
// 		dataType: "json",
// 		beforeSend: showLoading(),
// 		success: function(response) {
// 			var result =  $.parseJSON(response);
// 			hideLoading();
// 			if (result.status == 1) {
// 				$('#dkdn').css("display","none");
// 				$('#loginFlag').val(1);
// 				if(result.data.member_phone ==''){
// 					$("#txtMemberPhone").val(result.data.member_phone);
// 					$('.popup-thongbao').fadeIn(500);
// 				}
// 				else{
// 					$('.popup-giftcode').fadeIn(500);
// 				}	
// 				return true;
// 			}
// 			else {
//                 alert(result.message);
// 				return false;
// 			}
// 		},
// 		error: function(result) {
// 			hideLoading();
// 			alert("Đăng ký thất bại! Lỗi: "+result.status);
// 		}
// 	});
// }
// function closepopup(){
// 	$('.popup-giftcode').fadeOut(500);
// }
// function closethongbao(){
// 	$('.popup-thongbao').fadeOut(500);
// }
// function closecodeshare(){
// 	$('.popup-codeshare').fadeOut(500);
// }
// function closeramatmaychu(){
// 	$('.popup-ramatmaychu').fadeOut(500);
// }
// /** End Fast Login Register **/

// /** teaser only **/
// function dkdnTeaser()
// {
// 	var loginFlag = $('#loginFlag').val();
// 	if(loginFlag == 0){
// 		$('#dkdn').css("display","block");
// 	}else{
// 		handleGetNewServerActive(function(res){
// 			var rs =  $.parseJSON(res);
// 			console.log(rs);
// 			if(rs.status==1){
// 				var url = 'https://web.archive.org/web/20190723174303/https://ngocrongvn.com/choi-ngay/' + rs.data;
// 				window.location.replace(url);
// 			}
// 			else if(rs.status==2)
// 			{
// 				$('.popup-ramatmaychu').show();
// 			}
// 		})
		
// 	}
// }
// function teaserUpdateMemberPhone()
// {
// 	var phonenumber = $("#txtMemberPhone").val();
// 	if(phonenumber == ''){
// 		alert(' Số điện thoại không được để trống .');
// 		return false;
// 	}
// 	$.ajax({
// 		type: "POST",
// 		url	: "/ajax/ajax-update-member-phone",
// 		data: {
// 			phonenumber: phonenumber,
// 		},
// 		dataType: "json",
// 		beforeSend: showLoading(),
// 		success: function(response) {
// 			var result =  $.parseJSON(response);
// 			hideLoading();
// 			if (result.status == 1) {
// 				$('.popup-giftcode').fadeOut(500);
// 				$('.popup-thongbao').fadeIn(500);
// 			}
// 			else {
//                 alert(result.msg);
// 				return false;
// 			}
// 		},
// 		error: function(result) {
// 			hideLoading();
// 			alert("Cập nhật thất bại! Lỗi: "+result.status);
// 		}
// 	});
// }
// function shareFb()
// {
// 	var paramsShareLink 	= '';
// 	if(typeof(isViral) != "undefined" && isViral !== null){
// 		if(isViral == 1){
// 			paramsShareLink = 'source='+paramsMkt;
// 		}
// 	}
// 	var username = $('.text_username').text();
// 	FB.ui(
//           {
//               method: 'feed',
//               name: 'Game 7 Viên Ngọc Rồng Online | Open Beta 10H - Sáng Nay',
// 			  hashtag: '#game7vienngocrong',
//               link: 'https://web.archive.org/web/20190723174303/https://ngocrongvn.com/teaser'+paramsShareLink,
//               picture: 'https://web.archive.org/web/20190723174303/https://ngocrongvn.com/frontend/extends/images/sharefb.png',
//               description: 'Webgame chính chủ 7 viên ngọc rồng hay nhất 2019. Độc quyền phát hành tại Việt Nam. Chơi game miễn phí. Quy tụ đầy đủ tất cả nhân vật trong Dragon Ball Z',
//               caption: 'Webgame chính chủ 7 viên ngọc rồng hay nhất 2019. Độc quyền phát hành tại Việt Nam. Chơi game miễn phí. Quy tụ đầy đủ tất cả nhân vật trong Dragon Ball Z'
//           },
//           function (response) {
//               if (response) {
// 				 handleShareFB(username,1);
// 				 window.location.href = "#section4";
//               } else {
//                   alert('Bạn đã hủy chia sẻ.');
//               }
//           }
//      );
// }
// function handleShareFB(username,type_code)
// {
// 	var username 	= username;
// 	var type_code 	= type_code;
// 	$.ajax({
// 		type: "POST",
// 		url: rootUrl+"members/sharefb",
// 		data: {
// 			username: username,
// 			type	: 1
// 		},
// 		dataType: "json",
// 		beforeSend: showLoading(),
// 		success: function(response) {
// 			hideLoading();
// 			if (response.status == 1) {
// 				/* Count num share*/
// 				var numShare = parseInt(response.data);
// 				handleGetGiftcodeShare(function(res){
// 					var result =  $.parseJSON(res);
// 					$('.popup-codeshare #txtCodeshare').val(result.data);
// 					$('.popup-codeshare').fadeIn(500);
// 				});
// 				return true;
// 			}
// 			else {
// 				alert(response.msg);
// 				return false;
// 			}
// 		},
// 		error: function(response) {
// 			hideLoading();
// 			alert(" Lỗi: "+response.status);
// 		}
// 	});
// }
// function handleRegisterFast(params, callback) {
// 	appAjax(
// 		'/ajax/ajax-register',
// 		'post',
// 		params,
// 		'json',
// 		function(response) {
// 			callback(response);
// 			if (!response.error) {
// 				console.log('success');
// 			} else {
// 				console.log('error');
// 			}
// 		}
// 	);
// }

// function handleLoginFast(params, callback) {
// 	appAjax(
// 		'/ajax/ajax-login',
// 		'post',
// 		params,
// 		'json',
// 		function(response) {
// 			callback(response);
// 			if (!response.error) {
// 				console.log('success');
// 			} else {
// 				console.log('error');
// 			}
// 		}
// 	);
// }

// function handleCheckServerActive(callback) {
// 	var params = {};	
// 	appAjax(
// 		'/ajax/ajax-check-server-active',
// 		'post',
// 		params,
// 		'json',
// 		function(response) {
// 			callback(response);
// 			if (!response.error) {
// 				console.log('success');
// 			} else {
// 				console.log('error');
// 			}
// 		}
// 	);
// }

// function handleGetGiftcodeShare(callback) {
// 	var params = {};	
// 	appAjax(
// 		'/ajax/ajaxgetgiftcode',
// 		'post',
// 		params,
// 		'json',
// 		function(response) {
// 			callback(response);
// 			if (!response.error) {
// 				console.log('success');
// 			} else {
// 				console.log('error');
// 			}
// 		}
// 	);
// }
// function handleGetNewServerActive(callback) {
// 	var params = {};	
// 	appAjax(
// 		'/ajax/get-new-server',
// 		'post',
// 		params,
// 		'json',
// 		function(response) {
// 			callback(response);
// 			if (!response.error) {
// 				console.log('success');
// 			} else {
// 				console.log('error');
// 			}
// 		}
// 	);
// }


// }
// /*
//      FILE ARCHIVED ON 17:43:03 Jul 23, 2019 AND RETRIEVED FROM THE
//      INTERNET ARCHIVE ON 01:56:35 Jun 23, 2024.
//      JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

//      ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
//      SECTION 108(a)(3)).
// */
// /*
// playback timings (ms):
//   captures_list: 0.553
//   exclusion.robots: 0.067
//   exclusion.robots.policy: 0.059
//   esindex: 0.009
//   cdx.remote: 14.069
//   LoadShardBlock: 118.002 (3)
//   PetaboxLoader3.datanode: 79.374 (4)
//   PetaboxLoader3.resolve: 138.218 (2)
//   load_resource: 121.515
// */

function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('txtUserNameHome').value;
    const password = document.getElementById('txtPasswordHome').value;

    // Check if both fields are not blank
    if (!username || !password) {
        alert('Both fields must be filled out.');
        return;
    }

    // Check if the password contains at least one uppercase letter
    const uppercasePattern = /[A-Z]/;
    if (!uppercasePattern.test(password)) {
        alert('Password must contain at least one uppercase letter.');
        return;
    }

    // If all checks pass, submit the form
    document.getElementById('form-lg').submit();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-lg').addEventListener('submit', validateForm);
});