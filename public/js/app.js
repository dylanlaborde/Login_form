(function(){
	
	var app = {
		
		init : function(){
			app.watcher();
		},

		watcher : function(){
			$('form').on("submit",app.recupForm);
		},

		recupForm : function(event){
			event.preventDefault();
			var data = {
				username:$("#username").val(),
				password:$("#password").val(),

			},
			$.ajax({

				type :"POST",
				url :$("form").attr("action"),
				data : data,
				success:console.log(data)
				
			});

		},

	};

	app.init()
})();