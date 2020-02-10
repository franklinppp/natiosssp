@extends('admincp.master')
@section('title',"META Tag, Analytics and Site Map Information")
@section ('subtitle',"Settings")
@section('content')
<div class="row ">
	<div class="modal-dialog col-md-12" style="width:100% !important">
		@if(session('msg'))<h4 class="alert alert-success">{{ session('msg') }}</h4>@endif
		@if(session('msgerror'))<div class="alert alert-danger">{{session('msgerror')}}</div>@endif
		<div class="panel panel-primary">
			<div class="panel-heading">META Tag, Analytics and Site Map Information</div>
			<div class="panel-body">
				<form action="{{URL('admincp/option')}}" class="form-horizontal" enctype="multipart/form-data" method="post" accept-charset="utf-8">
					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Site Title </label></div>
						<div class="col-md-10"><input class="form-control"   type="text" name="site_name" value="{{$option->site_name}}"></div>
					</div>
					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Site Logo </label></div>
						<div class="col-md-10">
							<input type="file" name="site_logo" value="">
							<?php
							if($option->site_logo!=NULL){?>
							<div style="background: #ddd; padding: 5px;">
								<img src="/images/logo/{{$option->site_logo}}" style="height: 50px">
							</div>

							<?php }?>
						</div>
					</div>
					<div class="form-group">
						<div class="col-md-2"><label class="control-label">META Description</label></div>
						<div class="col-md-10"><input class="form-control"   type="text" name="site_description" value="{{$option->site_description}}"></div>
					</div>
					<div class="form-group">
						<div class="col-md-2"><label class="control-label">META KeyWord</label></div>
						<div class="col-md-10"><input class="form-control"  type="text" name="site_keyword" value="{{$option->site_keyword}}"></div>
					</div>
					<div class="form-group">
						<div class="col-md-2"><label class="control-label" style="text-align: left;">Google Verification Code</label><br><span>(Added into header)</span></div>
						<div class="col-md-10"><input class="form-control"  type="text" name="site_google_verification_code" value="{{$option->site_google_verification_code}}"></div>
					</div>
					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Perpage </label></div>
						<div class="col-md-10"><input class="form-control"   type="number" min="10" name="perPage" value="{{$option->perPage}}"></div>
					</div>
					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Site Copyright</label></div>
						<div class="col-md-10"><input class="form-control"  type="text" name="site_copyright" value="{{$option->site_copyright}}"></div>
					</div>
					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Custom Script</label><br><span>(Added into body)</span></div>
						<div class="col-md-10">
							<textarea name="site_ga"  class="form-control" rows="5">{{$option->site_ga}}</textarea>
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Upload SiteMap</label></div>
						<div class="col-md-10">
							<input type="file" name="site_map" value="">
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Banner 1</label></div>
						<div class="col-md-10">
							<input type="file" name="banner1" value="">
							@if(!empty($option->banner1))
								<div style="padding-top: 5px;">
									<img src="{{url('public/upload/banner/'.$option->banner1)}}" style="max-width: 200px; height: auto; ">
								</div>
							@endif
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Link Banner 1</label></div>
						<div class="col-md-10">
							<input type="text" name="link1" value="{{$option->link1}}" class="form-control">
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Banner 2</label></div>
						<div class="col-md-10">
							<input type="file" name="banner2" value="">
							@if(!empty($option->banner2))
								<div style="padding-top: 5px;">
									<img src="{{url('public/upload/banner/'.$option->banner2)}}" style="max-width: 200px; height: auto; ">
								</div>
							@endif
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-2"><label class="control-label">Link Banner 2</label></div>
						<div class="col-md-10">
							<input type="text" name="link2" value="{{$option->link2}}" class="form-control">
						</div>
					</div>

					<div class="form-group">
							<input type="hidden" name="id" value="{{$option->id}}">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
							<center><button type="submit" value="Publish" class="btn btn-info">Save</button></center>
					</div>
				</form>
			</div>
		</div>
		<div class="spacer"></div>
	</div>
</div>
@endsection
