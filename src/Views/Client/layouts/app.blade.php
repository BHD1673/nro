<!DOCTYPE html>
<html lang="en">

@include('layouts.partials.head')

<body>
    <span class="bg_shadow" style="display:none;"></span>
    <div class="show_trailer" style="display:none;"></div>

    <div class="wrapper">
        <!-- Header -->
        @include('layouts.partials.header')

        <!-- Content -->
        <div class="content">
            @yield('content')
        </div>

        <!-- Footer (Optional) -->
        @include('layouts.partials.footer')
    </div>
</body>
</html>
