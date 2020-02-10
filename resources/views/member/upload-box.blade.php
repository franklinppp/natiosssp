<form class="form-horizontal result-upload" action="{{URL(getLang() . 'upload-video.html&action=upload')}}" name="share_video_form" enctype="multipart/form-data" method="post"  style="padding:10px;" >
    <div class="form-group">
        <label style="margin:0px !important;padding-top:10 !important" for="share_from" class="col-lg-3 control-label">{{trans('home.VIDEO_TITLE')}}</label>
        <div class="col-lg-9 right-box">
            <input name="title_name" type="text" class="form-control" value="" id="title_name" placeholder="{{trans('home.VIDEO_TITLE')}}">
            <div id="title_from_error" class="text-danger m-t-5" style="display: none;"></div>
        </div>
    </div>
    <div class="form-group">
        <label style="margin:0px !important;padding-top:10 !important" for="share_from" class="col-lg-3 control-label">{{trans('home.TAGS')}}</label>
        <div class="col-lg-9 right-box">
            <input name="tag" type="text" class="form-control" value="" id="tag" placeholder="video tags">
            <div id="title_from_error" class="text-danger m-t-5" style="display: none;"></div>
        </div>
    </div>
    <div class="form-group">
        <label style="margin:0px !important;padding-top:10 !important" for="share_from" class="col-lg-3 control-label">{{trans('home.CATEGORY')}}</label>
        <div class="col-lg-9 right-box">
            <select id="categories_Id" 1 multiple="multiple" name="post_result_cat[]" class="form-control">
                @foreach ($categories as $result)
                    <option data-name="{{$result->title_name}}" value="{{$result->id . '_' . $result->title_name}}" >{{$result->title_name}}</option>
                @endforeach
            </select>
            <div id="title_from_error" class="text-danger m-t-5" style="display: none;"></div>
        </div>
    </div>
    <div class="form-group">
        <label style="margin:0px !important;padding-top:10 !important" for="share_message" class="col-lg-3 control-label">{{trans('home.SELECT_VIDEO_TO_UPLOAD')}}</label>
        <div class="col-lg-9 right-box">
            <div id="fileuploader"></div>
        </div>
    </div>

    @if ($user->is_channel_member == 1)
        <div class="form-group">
            <label style="margin:0px !important;padding-top:10 !important" for="share_from" class="col-lg-3 control-label">{{trans('home.ONLY_SUBSCRIPTION')}}</label>
            <div class="col-lg-9 right-box">
                <input name="is_subscription" type="checkbox" >
            </div>
        </div>
    @endif
    <div class="form-group">
        <div class="col-md-3"></div>
        <div class="col-md-9">
            <input type="hidden" name="fileupload" id="fileupload">
            <input type="hidden" name="string" id="string" value="{{mt_rand()}}">
            <input type="hidden" name="_token" value="{{csrf_token()}}">
            <center><input name="submit_share" type="submit" value="{{trans('home.UPLOAD')}}" id="member-upload" class="btn btn-primary"></center>
        </div>
    </div>
</form>
<script type = "text/javascript" >
    $(document).ready(function () {
        $("#categories_Id").select2();
        $("#fileuploader").uploadFile({
            url: "{{URL(getLang() . 'member-auto-upload-video')}}",
            fileName: "myfile",
            allowedTypes: "mp4,mov,avi,flv",
            formData: [{
                name: "_token",
                value: $("meta[name=csrf-token]").attr("content")
            }, {
                name: "string_id",
                value: $("input[name=string]").attr("value")
            }],
            multiple: false,
            autoSubmit: true,
            onSuccess: function (files, data, xhr) {
                if (data.status === 403) {
                    alert("Something wrong. Please try again later!")
                } else {
                    $("#fileupload").val(files);
                }
            }
        });
    });
</script>