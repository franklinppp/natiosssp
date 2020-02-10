@extends('admincp.master')
@section('title',"Categories")
@section('content')
@if(session('msg'))<h4 class="alert alert-success">{{ session('msg') }}</h4>@endif
@if(session('msgerro'))<div class="alert alert-error">{{session('msgerro')}}</div>@endif

<article class="module width_full panel-primary">
	<div class="panel-heading">Category Management
		<span class="pull-right"> <a class="btn-organ" href="{{URL('admincp/add-categories')}}"><i class="fa fa-plus-circle"></i> Add A New Category </a></span>
		<span class="pull-right"> <a class="btn-organ" id="deleteAll" href="javascript:void(0)"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete Categories </a></span>
	</div>
	<div class="panel-body">
		<table id="list-categories" class="display" cellspacing="0" cellpadding="0" searchable="false" style="border-bottom: 2px solid #ddd"> 
		<thead>
			<tr>
				<th class="line_table" style="border-bottom: 2px solid #ddd"><input name="select_all" value="1" id="example-select-all" type="checkbox" /></th>
				<th class="line_table" style="border-bottom: 2px solid #ddd"><input class="form-control search_input" type="text" onclick="stopPropagation(event);" placeholder="Search" />Name</th>
				<th class="line_table" style="border-bottom: 2px solid #ddd">Status</th>
				<th class="line_table" style="border-bottom: 2px solid #ddd">Featured</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
		</table>
	</div>
</article><!-- end of content manager article -->
	
<div class="spacer"></div>

<script type="text/javascript">
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	$(document).ready(function() {

		// Apply the filter
		var searching = false;

		$("#list-categories thead input").on('keyup change', function () {
			if(!searching && this.name != "select_all"){
				searching = true;
				table.column(2).search('');
				table
				.column( $(this).parent().index())
				.search( this.value )
				.draw();
			}
		});

		// DataTable
		var table = $('#list-categories').DataTable( {
			"pagingType": "full_numbers",
			"serverSide": true,
			"ajax": {
				url: "{{URL('admincp/category-manage')}}",
				type: 'POST',
				data: {
					'_token':$('meta[name=csrf-token]').attr("content")
				}
			},
			"columnDefs": [
				{
					"data": "id",
					"targets": 0,
					"searchable":false,
					"orderable":false,
					"className": "dt-body-center",
					"render": function ( data, type, row ) {
						return '<input type="checkbox" name="id[]" value="' 
							+ $('<div/>').text(data).html() + '">';
					}
				},
				{
					"targets": 1,
					"data": "title_name"
				},
				{
					"targets": 2,
					"render": function (data,type,row) {
						var _status = "";
						if( row.status == '1'){
							_status ='<span class="label label-success">Active</span>';
						} else if( row.status == '0'){
							_status ='<span class="label label-danger">Hidden</span>';
						}
						return _status;
					},
					"orderable":false
				},
				{
					"targets": 3,
					"render":function(data,type,row){
						var _html = "";
						var url = "{{URL('admincp/')}}";
						_html = "<a href='"+url+"/edit-categories/"+row.id+"' data-title='"+row.title_name+"'> <i style='font-size: 20px ; margin: 5px' class='fa fa-pencil-square-o'></i></a>";

						_html += "<a href='"+url+"/delete-categories/"+row.id+"' onclick=\"return confirm('Are you sure remove Category :" + row.title_name +"?')\"> <i style='font-size: 20px ; margin: 5px' class='fa fa-trash-o'></i></a>";

						return _html;
					},
					"className": "clickable",
					"orderable":false
				}
			],
			'order': [1, 'asc'],
			"drawCallback": function( settings ) {
				searching = false;
			}
		
		});
		$(".dataTables_filter").hide();

		// cellclick even
		table.on('click', 'tbody td', function(e) {
			if(this.cellIndex==1||this.cellIndex==2){
				if($(e.target).hasClass('fa')){
					return;
				}
				$('.search_input').val('');
				var title = table.column( this.cellIndex ).header();
				if(this.cellIndex==1)
					$(title).find('input').val($(this).find('a').data('title'));
				else{
					$(title).find('input').val(this.textContent);
				}
				$(title).find('input').trigger('keyup');
			}
		});

		// Handle click on "Select all" control
		$('#example-select-all').on('click', function(){
			// Check/uncheck all checkboxes in the table
			var rows = table.rows({ 'search': 'applied' }).nodes();
			$('input[type="checkbox"]', rows).prop('checked', this.checked);
		});

		// Handle click on checkbox to set state of "Select all" control
		$('#list-categories tbody').on('change', 'input[type="checkbox"]', function(){
			// If checkbox is not checked
			if(!this.checked){
			   var el = $('#example-select-all').get(0);
			   // If "Select all" control is checked and has 'indeterminate' property
			   if(el && el.checked && ('indeterminate' in el)){
				  // Set visual state of "Select all" control 
				  // as 'indeterminate'
				  el.indeterminate = true;
			   }
			}
		});

		$("#deleteAll").click(function () {
			var listid = "";
			$("input[name='id[]']").each(function () {
				if (this.checked)
				listid = listid + "," + this.value;
			})
			listid = listid.substr(1);   //alert(listid);
			if (listid == "") {
				alert("Please check item on list !");
				return false;
			}
			getaction = confirm("Are you sure you want to delete all checks?");
			if (getaction == true)
				document.location = "{{URL('admincp/delete-all-categories-check')}}/" + listid;
		});
	});
	function stopPropagation(evt) {
		if (evt.stopPropagation !== undefined) {
			evt.stopPropagation();
		} else {
			evt.cancelBubble = true;
		}
		$(this).keydown(function(e){
			if (e.keyCode == 65 && e.ctrlKey) {
				e.target.select()
			}

		})
	}

</script>
@endsection
