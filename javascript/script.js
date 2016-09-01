
(function($) {
	$(document).ready(function() {
		$('.animated-form-control').each(function() {
          var group = this;
          $(this).find('.form-control').each(function(){
            $(this).focus(function(){
              $(group).addClass('focus');
            });
            $(this).focusout(function(){
              $(group).removeClass('focus');
            });
          });
        });

        $(".dropdown-menu > li > a.trigger").on("click",function(e){
            if($('#navbar').hasClass('in')) {
                $(this).next().toggle();
		        e.preventDefault();
                e.stopPropagation();
            }
		});

	});

}(jQuery));
