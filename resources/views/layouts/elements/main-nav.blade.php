<!-- Main navbar -->
<div class="navbar navbar-inverse">
    <div class="navbar-header">
        <a class="navbar-brand" href="{{ url('') }}"><img src="{{ asset('theme/assets/images/logo_light.png') }}" alt=""></a>

        <ul class="nav navbar-nav visible-xs-block">
            <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
            <li><a class="sidebar-mobile-main-toggle"><i class="icon-paragraph-justify3"></i></a></li>
        </ul>
    </div>

    <div class="navbar-collapse collapse" id="navbar-mobile">
        @if (Auth::guard('admin')->check() || Auth::guard()->check())
        <ul class="nav navbar-nav">
            <li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>
        </ul>
        <p class="navbar-text"><span class="label bg-success">Online</span></p>
        @endif

        <ul class="nav navbar-nav navbar-right">
            @if (Auth::guard('admin')->check() || Auth::guard()->check())
            <li class="dropdown dropdown-user">
                <a class="dropdown-toggle" data-toggle="dropdown">
                    <span>
                        @if (Auth::guard('admin')->check())
                            Admin
                        @else 
                            {{ Auth::user()->name }} 
                        @endif
                    </span>
                    <i class="caret"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                        <a class="" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                                      document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                        <i class="icon-switch2"></i>
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </li>
                </ul>
            </li>
            @else
            <li class="nav-item dropdown">
                    <a id="linkDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ __('Login') }}
                        <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                            <a class="dropdown-item" href="{{ route('login') }}">
                                {{ __('Author') }}
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ route('admin.login') }}">
                                {{ __('Admin') }}
                            </a>
                        </li>
                    </ul>
                </li>
                <li><a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a></li>
            @endif
        </ul>
    </div>
</div>
<!-- /main navbar -->