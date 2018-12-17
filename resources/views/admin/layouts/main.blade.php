<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> @yield('title')</title>

	<!-- HEAD -->
	<!-- Global stylesheets -->
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
	<!-- /global stylesheets -->
	@yield('head-css')

</head>

<body class = @yield('class')>
	<!-- MAIN-NAV -->
    @include("admin.layouts.main-nav")
	
	<!-- Page container -->
	<div class="page-container">

		<!-- Page content -->
		<div class="page-content">

			<!-- MAIN-SIDEBAR -->
			@if (Auth::guard('admin')->check() || Auth::guard()->check())
				@include("admin.layouts.main-sidebar")
			@endif

			<!-- Main content -->
			<div class="content-wrapper">
				@if (Auth::guard('admin')->check() || Auth::guard()->check())
					<!-- PAGE-HEADER -->
					@include("admin.layouts.page-header")
				@endif
				
				<!-- Content area -->
				<div class="content">
                    
                    @yield('content')

					<!-- Footer -->
					<div class="footer text-muted">
						&copy; 2018. <a href="#">Timesheetmanagement</a> by <a href="#" target="_blank">Dimageshare</a>
					</div>
					<!-- /footer -->

				</div>
				<!-- /content area -->

			</div>
			<!-- /main content -->

		</div>
		<!-- /page content -->

	</div>
	<!-- /page container -->

	<script src="{{ asset('js/app.js') }}"></script>
	@yield('footer-js')
</body>
</html>