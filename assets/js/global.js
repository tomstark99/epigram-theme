(function($){
	/* All Images Loaded */
	$(window).load(function(){		
		
	});
	/* Dom Loaded */
	$(document).ready(function($){
		
		deBouncer(jQuery,'smartresize', 'resize', 50);
		
		/* Global */
		
		if($(document).width() > 767){
			$('#header div.menu-wrapper').sticky();
		}
		
		$('#header div.menu-mobile').click(function(){
			$('#header').toggleClass('menu-open');
		});

		$('#header form').submit(function(){
			var search_text = $(this).find('.search-field').val();
			$('#header form .search-field').val(search_text);
			$('html, body').animate({scrollTop: 0}, 500);
		})
		$("form .search-field").ghostHunter({
			results   : "#search-results",
			info_template   : "<h2 class='title'>{{amount}} results for your search</h2><div class='close title'>Close <i class='fa fa-close'></i><div>",
			result_template : '<div class="box grid-50 tablet-grid-50"><article class="item"><h4 class="title"><a href="{{link}}">{{title}}</a></h4><p><time><i class="fa fa-clock-o"></i> {{pubDate}}</time></p></article></div>',
			 before : function(){
				if($('div.main-image.cover').length > 0){
					$('#search-results').addClass('with-cover');
				}
				$('#search-results').fadeIn();
			},
			onComplete: function(){
				$('#search-results .box').each(function(index) {
					if(index%2){
					   $(this).after('<div class="clear"></div>');
					}
				});	
			}
		});
		
		$(document).on('click', '#search-results .close', function(){
			$('#search-results').fadeOut();
		});
		
		$('#back-to-top').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, 500);
			return false;
		});
		
		/* Hides Sports Table */

		/* function HideElementsInSports() {
			var x = document.getElementById("La_Liga");
			if (x.style.display === "none") {
				x.style.display = "block";
			} else {
				x.style.display = "none";
			}
		}

		function callLaLigue() { 
		Document.write(test)
		}
		*/
		/* Home */
		
		var wrapper = $('section.breaking-news .slick');
		wrapper.slick({
			cssEase: 'ease',
			arrows: true,
			dots: false,
			infinite: false,
			variableWidth: false,
			swipe: true,
			vertical: true,
			slidesToShow: 1
		});
		
		$('.tooltip').tooltipster({ theme: 'tooltipster-small', contentAsHTML: true, animation: 'grow' });
		$('.share-button').tooltipster({
			theme: 'tooltipster-small',
			contentAsHTML: true,
			animation: 'grow',
			interactive: true,
			functionInit: function(origin, continueTooltip) {
				return this.next().html();	
			}
		});
		
		/* Home scripts */
		
		if($('#home').length > 0 && $('#home section.carousel').length > 0){
			$('#home section.carousel #featured-posts').slick({
				cssEase: 'ease',
				arrows: true,
				dots: false,
				infinite: false,
				variableWidth: false,
				swipe: true,
				vertical: false,
				slidesToShow: 5,
				slidesToScroll: 5,
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
			$('#home section.carousel #featured-posts .slick-item').fadeIn();
		}
		
		
		/* Code Prettify */
		
		prettyPrint();
		
		/* Sidebar */
		
		if($('.widget_ep_flickr').length > 0 && theme_config.flickr_id != ''){
			$('.widget_ep_flickr ul').jflickrfeed({
				limit: theme_config.flickr_photos_limit,
				qstrings: {
					id: theme_config.flickr_id
				},
				useTemplate: false,
				
				itemCallback: function(item){
					$(this).append('<li class="grid-50 tablet-grid-33 mobile-grid-33"><a href="'+item.image_b+'" title="'+item.title+'" class="hover-effect"><span class="cover" style="background-image: url('+item.image_n+');"></span></a></li>');
				}
			}, function(data) {
				//$('section#<?php echo $this->id; ?> ul li:nth-child(3n)').addClass('ep-last');
				$('.widget_ep_flickr ul, .widget_ep_flickr ul div.loading').addClass('loaded');
				$('.widget_ep_flickr ul ').magnificPopup({
					type: 'image',
					gallery:{
						enabled: true,
						arrowMarkup: '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>'
					},
					delegate: 'a',
					mainClass: 'my-mfp-zoom-in',
					removalDelay: 300,
					closeMarkup: '<i title="%title%" class="mfp-close fa fa-times"></i>'
				});
			});
		}
		
		/* Gallery */
		
		$('div#gallery').addClass('gallery');
		
		$('div.gallery').each(function(){
			$(this).find('img').wrap(function() {
				return '<div class="grid-33 tablet-grid-33"><a href="'+$(this).attr('src')+'" class="hover-effect" rel="gallery"></a></div>';
			});
			$(this).append('<div class="clear"></div');
			$(this).magnificPopup({
				type: 'image',
				gallery:{
					enabled: true,
					arrowMarkup: '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>'
				},
				delegate: 'a',
				mainClass: 'my-mfp-zoom-in',
				removalDelay: 300,
				closeMarkup: '<i title="%title%" class="mfp-close fa fa-times"></i>'
			});
			$(this).fadeIn();
		});
		
		
		/* Global Lightbox */
		
		$('.lightbox').magnificPopup({
			mainClass: 'my-mfp-zoom-in',
			removalDelay: 300,
			closeMarkup: '<i title="%title%" class="mfp-close fa fa-times"></i>',
			fixedContentPos: true
		});	
		
		/* Google Map Integration */
		
		if($('#map_canvas').length > 0){
			var map_canvas = $('#map_canvas');
			var lat = map_canvas.attr('latitude');
			var lng = map_canvas.attr('longitude');
			var zoom = map_canvas.attr('zoom');
			var location = map_canvas.attr('location');
			if(!zoom) zoom = 16;
			if(lat && lng && zoom){
				map_canvas.wrap('<div class="map"></div>');
				//if(location) $('div.map').append('<h3 class="location"><i class="fa fa-map-marker"></i>'+location+'</h3>');
				initialize(lat, lng, zoom, location);
			}
		}
		
		$(window).smartresize(function(e){
			wrapper.slick('setPosition');
		});

	});
	
	function initialize(lat, lng, zoom, location) {
		var latlng = new google.maps.LatLng(lat, lng);
		var myOptions = {
		  zoom: parseInt(zoom),
		  center: latlng,
		  scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
		//map.setMapTypeId('roadmap');
		var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
		if(location){
			var infowindow = new google.maps.InfoWindow({
				content: '<div class="infowindow">'+location+'</div>',
				maxWidth: 370
			});
			infowindow.open(map, marker);	
		}
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
		google.maps.event.addDomListener(window, 'resize', function(){
			map.setCenter(latlng);
		});	
	}
})(jQuery);
