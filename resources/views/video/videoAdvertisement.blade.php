@if(!empty($loadAds))
<div class="vda-iv hidden-xs hidden-sm" id="playvideo642">
  <div id="playvideot">
    <div class="heading heading--dark">
      <h4 class="heading__title">Advertisement <span id="closePlayerAds" class="pull-right">X</span></h4>
    </div>
    <div class="player-desk__body">
      <div class="player-desk__item">

        @if($loadAds->type == 'script_code')
        {!!$loadAds->script_code!!}
        @endif
        @if($loadAds->type == 'upload')
          <a href="{{$loadAds->return_url}}" target="_blank">
            <img width="308" src="{{$loadAds->ads_content}}">
          </a>
        @endif
    </div>
    <!-- <div class="player-desk__close-btn">
       <button id="closePlayerAds" class="btn btn-signup" type="">Close & Play</button>
    </div> -->
</div>
</div>
</div>
@endif