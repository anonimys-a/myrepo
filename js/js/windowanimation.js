            var $animation_elem = $('section .naScroll');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elem, function () {
                    var $elem = $(this);
                    var element_height = $elem.outerHeight();
                    var element_top_position = $elem.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) &&
                        (element_top_position <= window_bottom_position)) {
                        $elem.addClass('animated fadeInUp');
                    }
                    
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');