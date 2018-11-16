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
    @include("layouts.elements.head")

	<!-- Theme JS files -->
	
	@yield('head-js')
	<script type="text/javascript" src="{{ asset('theme/assets/js/core/app.js') }}"></script>

	<!-- /theme JS files -->

</head>

<body class = @yield('class')>
	<!-- MAIN-NAV -->
    @include("layouts.elements.main-nav")
	
	<!-- Page container -->
	<div class="page-container">

		<!-- Page content -->
		<div class="page-content">

			<!-- MAIN-SIDEBAR -->
			@if (!Route::has('login'))
				@include("layouts.elements.main-sidebar")
			@endif

			<!-- Main content -->
			<div class="content-wrapper">
				@if (!Route::has('login'))
					<!-- PAGE-HEADER -->
					@include("layouts.elements.page-header")
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
</body>
</html>