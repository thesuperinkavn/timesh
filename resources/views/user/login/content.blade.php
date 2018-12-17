<!-- Advanced login -->
<form action="" method ="POST">

    {{ csrf_field() }}

    <div class="panel panel-body login-form">
        <div class="text-center">
            <div class="icon-object border-slate-300 text-slate-300"><i class="icon-reading"></i></div>
            <h5 class="content-group">Đăng Nhập<small class="display-block">{{ $title }}</small></h5>
        </div>

        <div class="form-group has-feedback has-feedback-left">
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="{{ old('email') }}" required autofocus>
            <div class="form-control-feedback">
                <i class="icon-user text-muted"></i>
            </div>
            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group has-feedback has-feedback-left">
                <input id="password" type="password" placeholder="Password" class="form-control" name="password" required>
            <div class="form-control-feedback">
                <i class="icon-lock2 text-muted"></i>
            </div>
            
            @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group login-options">
            <div class="row">
                <div class="col-sm-6">
                    <label class="checkbox-inline">
                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                        Ghi nhớ
                    </label>
                </div>

                <div class="col-sm-6 text-right">
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        Quên Mật Khẩu?
                    </a>
                </div>
            </div>
        </div>

        <div class="form-group">
            <button type="submit" class="btn bg-blue btn-block">Đăng Nhập <i class="icon-arrow-right14 position-right"></i></button>
        </div>

    </div>
</form>
<!-- /advanced login -->