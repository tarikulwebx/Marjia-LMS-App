<script src="{{ asset('js/tinymce/tinymce.min.js') }}" referrerpolicy="origin"></script>
<script>
	var editor_config = {
		path_absolute: "/",
		selector: 'textarea#tinymceEditor',
		body_class: 'tinymce-editor-body',
		relative_urls: false,
		extended_valid_elements: [
			'table[class=table table-bordered]',
			'ul[class=list]',
			'ol[class=list]',
		],
		content_style: 'body { font-family:Heebo, sans-serif; font-size:16px; line-height: 1.5; color: #495057;  }',
		height: 500,
		plugins: [
			"advlist autolink lists link image charmap print preview hr anchor pagebreak",
			"searchreplace wordcount visualblocks visualchars code fullscreen",
			"insertdatetime media nonbreaking save table directionality",
			"emoticons template paste textpattern codesample"
		],
		toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media codesample",
		file_picker_callback: function (callback, value, meta) {
			var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
			var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

			var cmsURL = editor_config.path_absolute + 'laravel-filemanager?editor=' + meta.fieldname;
			if (meta.filetype == 'image') {
				cmsURL = cmsURL + "&type=Images";
			} else {
				cmsURL = cmsURL + "&type=Files";
			}

			tinyMCE.activeEditor.windowManager.openUrl({
				url: cmsURL,
				title: 'Filemanager',
				width: x * 0.8,
				height: y * 0.8,
				resizable: "yes",
				close_previous: "no",
				onMessage: (api, message) => {
					callback(message.content);
				}
			});
		}
	};

  tinymce.init(editor_config);
</script>
