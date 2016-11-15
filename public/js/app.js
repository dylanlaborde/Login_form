(function(){
	"use strict"
	var app = {
		
		init : function(){
			app.watcher();
		},

		watcher : function(){
			$('form').on("submit",app.recupForm);
		},

		recupForm : function(event){
			// event.preventDefault();
			var data = $("form").serialize();
/*autre methode pour recuperer data
			var data = {
				username:$("#username").val(),
				password:$("#password").val(),
			}
			*/
			$.ajax({
				type :"POST",
				url :$("form").attr("action"),
				data :data,
				success:function(){
					console.log(data)
				},
			})
			
		},
	};

	app.init()
})();