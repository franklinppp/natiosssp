@extends('master-frontend')
@section('title', 'Member panel')
@section('content')
<?php
if (\Session::has('User')) {
	$user = \Session::get('User');
}
?>
<div class="profile-wrapper">
	<div align="center" class="profile">
		<ul class="nav nav-tabs">
			<li class="member-menu "><a id="collections" href="#tab1default" data-toggle="tab" href="#">{{trans('home.MY_FAVORITE_VIDEOS')}}</a></li>
			<li class="member-menu"><a href="#tab3default" id="channel"  data-toggle="tab" href="#">{{trans('home.MY_CHANNEl_SUBSCRIPTION')}}</a></li>
			<li class="member-menu <?= isset($active) ? $active : '' ?>"><a href="#tab4default" data-toggle="tab" href="#">{{trans('home.MY_UPLOAD')}}</a></li>
			<li class="member-menu"><a href="#account-setting-tab" data-toggle="tab" href="#">{{trans('home.ACCOUNT_SETTINGS')}}</a></li>
			<li class="member-menu"><a href="#tab9default" data-toggle="tab" href="#">{{trans('home.CHANNEL_SETTING')}} </a></li>
		</ul>
	</div>
	<div class="main-content">
		<div class="container-fluid">
			<h2>{{trans('home.MEMBER_MANAGEMENT')}}</h2>
			<div class="row">
				<div class="col-sm-12 ">
					<div class="panel with-nav-tabs  member-navbar">
						<div class="panel-body">
							<div class="tab-content">
								<!-- Favorite -->
								<div class="tab-pane fade in " id="tab1default">
									<div class="row member-header">
										<div class="col-sm-6 col-md-6">
											<div class="favorites-title">{{trans('home.MY_FAVORITE_VIDEOS')}}</div>
										</div>
									</div>
									<div class="col-sm-12">
										<div id="result-load" class="result-load"></div>
										<div id="result" class="result"></div>
									</div>
								</div>
								<!-- subscribe -->
								<div class="tab-pane fade" id="tab3default">
									<div class="row member-header">
										<div class="col-sm-6 col-md-6">
											<div class="favorites-title">{{trans('home.MY_CHANNEl_SUBSCRIPTION')}} </div>
										</div>
									</div>
									<div class="col-sm-12">
										<div id="subscribe-load" class="subscribe-load"></div>
										<div id="subscribe" class="subscribe"></div>
									</div>
								</div>
								<!-- upload pannel -->
								<div class="tab-pane fade in <?= isset($active) ? $active : '' ?>" id="tab4default">
									<div class="col-md-3 member-content">
										<h2 class="account-setting">{{trans('home.MY_VIDEO_UPLOAD_PANEL')}}</h2>
										<h2 id="upload-video" style="font-size: 15px; text-align: center" class="<?= isset($active) ? 'active-pink' : '' ?>"><a    class="collections " title="">{{trans('home.UPLOAD')}}</a></h2>
										<h2 style="font-size: 15px; text-align: center"><a  id="all-video" class="favorites " title="">{{trans('home.MY_UPLOAD')}}</a></h2>
									</div>
									<div class="col-md-9">
										@if(isset($active))
											<script type="text/javascript">
												$('#result-upload').load(base_url + "upload-video.html&action=get_temp");
											</script>
										@endif
										<div id="loading-upload">
											@if(session('msg'))
												<div class="alert alert-success">
													<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
													<span class="glyphicon glyphicon-ok"></span><strong> {{session('msg')}}</strong>
												</div>
											@endif
										</div>
										<div id="result-upload" >
											{!! isset($upload_content) ? $upload_content : "" !!}
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="account-setting-tab">
									<div class="col-sm-3 member-content">
										<h2 class="account-setting">{{trans('home.ACCOUNT_SETTINGS')}}</h2>
										<h2 style="font-size: 15px; text-align: center"><a  id="overview"  class="collections " title="">{{trans('home.ACCOUNT_OVERVIEW')}}</a></h2>
										<h2 style="font-size: 15px; text-align: center"><a  id="changepassword" class="favorites " title="">{{trans('home.CHANGE_PASSWORD')}}</a></h2>
										<h2 style="font-size: 15px; text-align: center"><a  id="paymenthistory" class="favorites " title="">{{trans('home.PAYMENT_HISTORY')}}</a></h2>
									</div>
									<div class="col-sm-9">
										<div id="setting-load" class="setting-load"></div>
										<div id="setting" class="setting"></div>
									</div>
								</div>
								@if ($member->is_channel_member == 1)
									<div class="tab-pane fade" id="tab9default">
										<div class="col-sm-3 member-content">
											<h2 class="account-setting">{{trans('home.CHANNEL_SETTING')}}</h2>
											<h2 style="font-size: 15px; text-align: center"><a  id="channel-dashboard"  class="collections " title="">{{trans('home.OVERVIEW')}}</a></h2>
											<h2 style="font-size: 15px; text-align: center"><a  id="channel-overview"  class="collections " title="">{{trans('home.YOUR_EDIT_CHANNEL')}}</a></h2>
										</div>
										<div class="col-sm-9">
											<div id="setting-load-channel" class="setting-load"></div>
											<div id="setting-channel" class="setting"></div>
										</div>
									</div>
								@else
									<div class="tab-pane fade" id="tab9default" style="">
										<div class="col-md-12 register-video" >
											<div class="col-md-9">
												<div id="load-channel"></div>
												<div id="msg-channel"></div>
												<div class="clearfix"></div>
												<h2 class="col-md-9 col-md-offset-3" style="font-size: 15px; text-align: center">{{trans('home.REGISTER_YOUR_VIDEO_CHANNEL')}}</h2>
												<form style="padding: 5px; margin-top: 10px;" class="form-horizontal" accept-charset="utf-8" enctype="multipart/form-data" >
													<div class="form-group">
														<div class="col-md-3"><label class="lable-control">{{trans('home.NAME')}}</label></div>
														<div class="col-md-9"><input type="text" class="form-control style-input"  name="channel_name" value="" placeholder=""></div>
													</div>
													<div class="form-group">
														<div class="col-md-3"><label class="lable-control">{{trans('home.DESCRIPTION')}}</label></div>
														<div class="col-md-9"><textarea name="channel_description" class="form-control" rows="10"></textarea></div>
													</div>
													<div class="form-group">
														<input type="hidden" name="_token" value="{{csrf_token()}}">
														<div class="col-md-4 col-md-offset-6"><input type="button" id="resgist-channel" class="btn btn-signup" value="{{trans('home.REGISTER_YOUR_VIDEO_CHANNEL')}}"></div>
													</div>
												</form>
											</div>
										</div>
									</div>
								@endif
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection
