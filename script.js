$(document).ready(function() {

	var olapicAPI = 'https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18';

	$.getJSON(olapicAPI, {
		format: "json"
	}).done(function (jsondata) {

		//alert(jsondata.data._embedded.length);
		$('.photoStrip').width(155 * (jsondata.data._embedded.length)); // width of carousel (155 = square+padding * length of [data = higher level // . = next level // _embedded = image])

		$.each(jsondata.data._embedded, function (i, value) { // for each image from the result put into photoStrip - i = index in array // value = current selection in array
			if (value.source_id) { // only append image if valid source_id
				$('.photoStrip').append( // link where the endpoint is the normal (big) image, and the interactable is the thumbnail image
					'<div class="photo"><a href="' + value.images.normal + '" class="magnific"><img class="images" src="' + value.images.thumbnail + '"></a></div>'
					);
			}
		});

		var photos = $('div', $('.photoStrip'));

		// width of viewable window	- all visible thumbnails
		var windowWidth = 155 * 6;
		var offset = -155; // value to shift carousel by when scrolling

		$('#right').on('click', function () {
				// refresh photos
				photos = $('div', $('.photoStrip'));

				// add first image onto end of photo strip
				$('.photoStrip div:last').after($(photos[0]));
		});

		$('#left').on('click', function () {
			// refresh photos
			photos = $('div', $('.photoStrip'));

			// end image prepends to beginning of set
			var photonum = photos.length-1;
			$('.photoStrip').prepend($(photos[photonum]));
		});

	})

});