# olapic

## JSON
First I tested the API and ensured that the key worked with authentication.

I used the chrome tool 'Postman' to quickly test the REST API request.

Using the 'Authentication' link in the Olapic API documentation, filling in api_key, I made the GET request on Postman.

Then using the link supplied in the response where it gets "recent media", I decided to use this as my URL in the app.

I decided to use jQuery to create the carousel as it's what I am most familiar with.

## Output Images

First I made sure that images were being pulled onto the web page so I appended each image (using the images -> thumbnail attribute) onto the div called “photoStrip”.

By using getJSON() as a simple method in sending a request, I used the URL from Postman but no images seemed to appear, however removing the "&version=v2.2" at the end seemed to work - it looks like only images from API v2.0 existed.

In the index file I added a simple structure of the carousel and the photoStrip. Each thumbnail image was 150x150 so I made the length of the strip equal to the number of images multiplied by 150 + padding.

I appended each image from the API onto this strip div by div (inline-block so they appear on one line) so that I can manipulate them individually later.

Then by using overflow:hidden (css) on the carousel to hide the remainder of the images, I added chevrons (from Bootstrap glyphicons) on either side of the 6 images.

## Scrolling

Through jQuery, when clicking on the right chevron, I basically remove the first image and add it onto the end (this way the images essentially move left as the first image disappears).

For the left chevron, I prepend the last image onto the beginning. The strip automatically moves to the right as the first image is the beginning of the strip.