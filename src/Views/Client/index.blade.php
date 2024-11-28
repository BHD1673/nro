@extends('layouts.app')

@section('title', 'Trang Chủ')

@section('content')
<div class="content_inner">
    <div class="container">
        <div class="content_left">
            @include('layouts.partials.play_now')
            @include('layouts.partials.block_links')
            @include('layouts.partials.box_video')
            @include('layouts.partials.box_cskh')
        </div>

        <div class="content_right">
            @include('layouts.partials.main_slide')
            @include('layouts.partials.list_links')
            @include('layouts.partials.block_new')
        </div>
    </div>
</div>
@endsection
