<!-- Main sidebar -->
<div class="sidebar sidebar-main">
    <div class="sidebar-content">

        <!-- User menu -->
        <div class="sidebar-user">
            <div class="category-content">
                <div class="media">
                    <a href="#" class="media-left"></a>
                    <div class="media-body">
                        <span class="media-heading text-semibold">{{Auth::user()->email}}</span>
                        
                        <div class="text-size-mini text-muted">
                            <i class="icon-pin text-size-small"></i> &nbsp;{{Auth::user()->name}}
                        </div>
          
                    </div>

                    <div class="media-right media-middle">
                        <ul class="icons-list">
                            <li>
                                <a href="#"><i class="icon-cog3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- /user menu -->

        <!-- Main navigation -->
        <div class="sidebar-category sidebar-category-visible">
            <div class="category-content no-padding">
                <ul class="navigation navigation-main navigation-accordion">

                    <!-- Main -->
                    <li class="navigation-header"><span>Main</span> <i class="icon-menu" title="Main pages"></i></li>
                    @if (Auth::guard('admin')->check())
                    <li class="active"><a href="index.html"><i class="icon-home4"></i> <span>Tổng quan</span></a></li>
                    <li>
                        <a href="#"><i class="icon-user"></i> <span>Nhân viên</span></a>
                        <ul>
                            <li><a href="layout_navbar_fixed.html">Thêm mới</a></li>
                            <li><a href="{{ url('admin/usermanagement') }}">Quản lý</a></li>
                        </ul>
                    </li>
                    @endif
                    @if (Auth::guard()->check())
                    <li>
                        <a href="{{ url('task') }}"><i class="icon-task"></i> <span>Quản lí task</span></a>
                    </li>
                    @endif
                    <li>
                        <a href="{{ url('timesheet') }}"><i class="icon-copy"></i> <span>Timesheet</span></a>
                    </li>
                    @if (Auth::guard('admin')->check())
                    <li>
                        <a href="#"><i class="icon-cog3"></i> <span>Hệ thống</span></a>
                        <ul>
                            <li><a href="colors_primary.html">Email</a></li>
                            <li><a href="colors_danger.html">Cấu hình thời gian</a></li>
                        </ul>
                    </li>
                    @endif
                    <!-- /Main -->
                </ul>
            </div>
        </div>
        <!-- /main navigation -->

    </div>
</div>
<!-- /main sidebar -->