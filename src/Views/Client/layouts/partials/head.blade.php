<head>
    <link href="{{ url('/') }}" rel="canonical"/>
    <meta content="{{ url('/') }}" itemprop="url" property="og:url"/>
    
    <!-- Page Title -->
    <title>@yield('title', 'NROWiko - Game ngọc rồng tuổi thơ')</title>

    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="NROWiko - Game ngọc rồng tuổi thơ" itemprop="headline" property="og:title"/>
    <meta content="NROWiko - Game ngọc rồng tuổi thơ" itemprop="sourceOrganization" name="source"/>
    <meta content="NROWiko - Game ngọc rồng tuổi thơ" property="og:site_name"/>
    <meta content="NROWiko - Game ngọc rồng tuổi thơ" name="author"/>
    <meta content="https://www.facebook.com/ngocrongwiko" property="article:publisher"/>
    <meta content="https://www.facebook.com/ngocrongwiko" property="article:author"/>

    <meta content="Đại Chiến xuyên Ngân Hà cùng Son Goku và những người bạn. Đăng ký ngay để nhận Giftcode sớm nhất ◄" property="og:description"/>
    <meta content="Đại Chiến xuyên Ngân Hà cùng Son Goku và những người bạn. Đăng ký ngay để nhận Giftcode sớm nhất ◄" name="description"/>
    <meta content="dragonball, dragon ball, dragon ball z, bay vien ngoc rong, 7 vien ngoc rong, bẩy viên ngọc rồng, webgame, game moi, nro, nro lau, nro blue game nhap vai, son goku" name="keywords"/>

    <meta content="{{ asset('assets/client/images/h0.png') }}" property="og:image"/>
    <link href="{{ asset('assets/client/images/h0.png') }}" rel="image_src"/>

    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>
    <meta name="google-site-verification" content="1vDH177_e3rMNDAuWqcAMgxD3QtJg0uQX0yfb_ZZAsw"/> 
    <link href="{{ asset('assets/client/images/favicon.png') }}" rel="shortcut icon" type="image/x-icon"/>
    <link rel="icon" href="{{ asset('assets/client/images/favicon.ico') }}" type="image/x-icon"/>
    <link rel="shortcut icon" href="{{ asset('assets/client/images/favicon.ico') }}" type="image/x-icon"/>

    <!-- Facebook SDK -->
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v21.0"></script>

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/client/css/screen.css') }}"/>

    <!-- Scripts -->
    <script type="text/javascript" src="{{ asset('assets/client/js/jquery-10.0.2.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/client/js/functions.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/client/js/bxSlider.js') }}"></script>

    <!-- Custom Styles -->
    <style type="text/css">
        .content_detail .detail_new img {
            max-width: 100%;
            height: auto !important;
        }
    </style>

    <!-- Yield for custom head content (Optional) -->
    @stack('head')
</head>
