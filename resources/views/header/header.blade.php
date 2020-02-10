<?php
use App\Helper\AppHelper;
use App\Helper\PageHelper;
use App\Helper\LanguageHelper;

$checkActiveLanguages = getLang();
$activeLanguages = LanguageHelper::getActiveLanguges();
$categories = AppHelper::getCategoryList();
$langSetting = LanguageHelper::checkActiveMultiLanguage();
?>
<style type="text/css" media="screen">
	.ticker-container{ display: none; }
</style>
<header>
	<div class="container-fluid">
		<div class="row box-header">
			<div class="header-contain-wrapper">
				<div class="col-xs-12 col-sm-12 col-md-4 left-header pull-left padding-t10">
					<div class="row">
						<div class="col-md-4 col-sm-6 logo">
							<?php if (isset($config->site_logo)) { ?> <a href="{{URL(getLang())}}"><img src="/images/logo/{{$config->site_logo}}" alt="{{$config->site_name}}" /></a>
							<?php } else { ?>
								<a href="{{URL(getLang())}}"><img src="{{asset('logo.png')}}" alt="logo" /></a>
							<?php } ?>
						</div>
						<div class="col-md-8 col-sm-6 search">
							<form class="form-horizontal" action="{{URL(getLang().'search.html')}}" method="get">
								<div class="col-sm-12 form-search">
									<div class="input-group">
										<input type="text" class="form-control search-box" name="keyword" class="form-control search_placeholder" id="inputEmail3" >
										<span class="input-group-btn "><button class="btn btn-signup search-box search-btn" type="submit "><i class="fa fa-search"></i></button> </span>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-xs-12 col-md-3 right-header pull-right padd-10-0">
					<ul class="nav navbar-nav">
						@if(\Session::has('User'))
							<?php $user = \Session::get('User'); ?>
							<li class="login-li us-name">
								<a href="{{URL(getLang().'member-proflie.html')}}">{{ str_limit($user->firstname." ".$user->lastname,10)}}</a>
							</li>
							<li class="signup-li">
								<a href="{{URL(getLang().'logout.html')}}">{{trans('home.LOGOUT')}}</a>
							</li>
						@else
							<li class="login-li"><a data-toggle="modal" data-target="#myModal" href="#">{{trans('home.LOGIN')}}</a></li>
							<li class="signup-li"><a data-toggle="modal" data-target="#signup" href="#">{{trans('home.SIGN_UP')}}</a></li>
						@endif

						<li>
							<a href="{{URL(getLang().'member-proflie.html?action=upload')}}">
								<i class="fa fa-cloud-upload" aria-hidden="true"></i> {{trans('home.UP')}}
							</a>
						</li>
						@if($langSetting)
							<li class="dropdown">
								<a href="#" class="dropdown-toggle"
									 data-toggle="dropdown" role="button"
									 aria-haspopup="true" aria-expanded="false">
									<span class="text-uppercase">{{isset($lang)? $lang : 'EN'}}</span>
									<span class="caret"></span>
								</a>
								<ul class="dropdown-menu lang-box">
									<li class="">
										@foreach($activeLanguages as $result)
										<a lang="{{$result->languageCode}}"
											data-toggle="tooltip" data-placement="right"
											title="{{$result->languageName}}"
											href="{{url($result->languageCode)}}">
											<span class="text-uppercase">{{$result->languageName}}</span>
										</a>
										@endforeach
									</li>
								</ul>
							</li>
						@endif
					</ul>
				</div>
				<div class="col-sm-12 col-xs-12 col-md-5 padding-t10 center-header">
					<nav class="navbar navbar-default">
						<div class="container-fluid">
							<!-- Brand and toggle get grouped for better mobile display -->
							<div class="navbar-header">
								<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							<!-- Collect the nav links, forms, and other content for toggling -->
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul id="site-menu-top" class="nav navbar-nav ">
									<li>
										<a href="{{URL()}}">
											{{trans('home.HOME')}}
										</a>
									</li>
									<li class="active page-sub-menu ">
										<a href="{{URL(getLang(). 'video.html&action=new')}} ">
											{{trans('home.VIDEOS')}} <span class="caret_icon "></span>
										</a>
										<ul class="sub-menu ">
											<li>
												<a href="{{URL(getLang(). 'video.html&action=new')}}">{{trans('home.NEWEST_VIDEOS')}}</a>
											</li>
											<li>
												<a href="{{URL(getLang(). 'top-rate.html')}}">{{trans('home.TOP_RATE_VIDEOS')}}</a>
											</li>
											<li>
												<a href="{{URL(getLang(). 'most-view.html')}}">{{trans('home.MOST_VIEWED_VIDEO')}}</a>
											</li>
											<li>
												<a href="{{URL(getLang(). 'video.html&action=most-favorited')}}">{{trans('home.MOST_FAVORITED_VIDEO')}}</a>
											</li>
											<li>
												<a href="{{URL(getLang(). 'video.html&action=most-commented')}}">{{trans('home.MOST_COMMENTED_VIDEO')}} </a>
											</li>
										</ul>
										<span class="glyphicon glyphicon-plus display "></span>
									</li>
									<li class="page-sub-menu">
										<a class="hidden-xs hidden-sm" href="{{URL(getLang(). 'categories.html')}}">
											{{trans('home.CATEGORY')}}
											<span class="caret_icon "></span>
										</a>
										<a class="visible-xs visible-sm" href="# ">
											{{trans('home.CATEGORY')}}
											<span class="caret_icon "></span>
										</a>
										<ul class="sub-menu ">
											<li>
												@foreach($categories as $result)
												<div class="sub-menu-content hidden-xs ">
													<a title="{{$result->title_name}}"
														 href="{{URL(getLang().'categories/')}}/{{$result->id}}.{{$result->post_name}}.html">{{str_limit($result->title_name,11)}}</a>
												</div>
												<div class="sub-menu-content visible-xs" style="width: 100%">
													<a title="{{$result->title_name}}"
														href="{{URL(getLang().'categories/')}}/{{$result->id}}.{{$result->post_name}}.html">{{str_limit($result->title_name,11)}}</a>
												</div>
												@endforeach
											</li>
										</ul>
										<span class="glyphicon  glyphicon-plus display "></span>
									</li>
									<li class="visible-xs" style="clear: both"><a href="{{URL(getLang().'premium-hd.html')}}">{{trans('home.PREMIUM_HD')}}</a>
									</li>
									<li class="hidden-xs"><a href="{{URL(getLang().'premium-hd.html')}}">{{trans('home.PREMIUM_HD')}}</a>
									</li>
									<li><a href="{{URL(getLang().'channel.html')}}">{{trans('home.CHANNEL')}}</a>
									</li>
									<li><a href="{{URL(getLang().'porn-stars.html')}}">{{trans('home.PORNSTAR')}}</a>
									</li>
									<!-- <?= PageHelper::loadDynamicStaticPages(); ?> -->
								</ul>
							</div><!-- /.navbar-collapse -->
						</div><!-- /.container-fluid -->
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>
@include('login.login')
@include('login.signup')
@include('login.forgotpassword')
