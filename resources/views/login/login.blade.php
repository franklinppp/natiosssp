<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="panel panel-primary">
            <div class="panel-heading" style="font-weight: bold; text-align: center">{{trans('home.LOGIN')}}</div>
            <div class="panel-body">
                <form action="{{URL(getLang().'login.html')}}" method="post">
                    <div class="input-group">
                        <span class="input-group-addon" id="basic-addon1">
                            <span class="glyphicon glyphicon-user"></span>
                        </span>
                        <input type="text" name="email" value="" class="form-control" style="width:100%" placeholder="{{trans('home.USER_NAME')}}({{trans('home.EMAIL')}})" onclick="if(this.value==''){this.value=''}" onblur="if(this.value==''){this.value=''}">
                    </div>
                    <br />
                    <div class="input-group">
                        <span class="input-group-addon" id="basic-addon1">
                            <span class="glyphicon glyphicon-eye-open"></span>
                        </span>
                        <input type="password" name="password" class="form-control" style="width:100%"  placeholder="***************">
                    </div>
                    <div class="clearfix"></div>
                    <div align="center" style="margin:20px auto;">
                        <input type="hidden" name="current_url" value="<?=URL(\Request::url() );?>">
                        <input type="hidden" name="_token" value="<?=csrf_token()?>">
                        <input class="btn btn-signup" type="submit" value="{{trans('home.LOGIN')}}" style="padding-left:30px ; padding-right:30px; margin:auto " Name="login" />
                    </div>
                </form>
                <div class="login-footer">
                    <span >{{trans('home.FORGOT_PASSWORD')}} ?</span>
                    <a id="forgot-password" href="javascript:void(0)" >{{trans('home.CLICK_HERE')}}</a>
                </div>
            </div>
            {{-- <div class="panel-footer" style="text-align: center; text-transform: capitalize">
                <span style="color:#e39000">{{trans('home.FORGOT_PASSWORD')}} ?</span>
                <a id="forgot-password" href="javascript:void(0)" style="color:#e39000">{{trans('home.CLICK_HERE')}}</a> <!-- <a id="signup-new" href="javascript:void(0)">Sign up</a> -->
            </div> --}}
        </div>
    </div>
</div>
<div id="msg-popup" style="position:absolute; bottom: 0; right:0" class="modal fade" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="panel panel-primary">
            <div class="panel-body">
                <div class="msg-modal">{{trans('home.REGISTER_SUCCESSFULL_MESSAGE_VERIFY_EMAIL')}}.</div>
                <center>
                    <input type="button" onclick="javascript: location.reload()" data-dismiss="modal" id="cancel" class="btn btn-signup" style="margin-right: 5px; margin-top: 15px" value="{{trans('home.CLOSE')}}">
                </center>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).on('click','#forgot-password',function(){
        $('#myModal').modal('hide');
        $('#forgot').modal('show')
    });
    $(document).on('click','#signup-new',function(){
        $('#myModal').modal('hide');
        $('#signup').modal('show')
    });
</script>