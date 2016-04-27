# olapic

## JSON
First I tested the API and ensured that the key worked with authentication.

I used the chrome tool [Postman](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiG8K_8gK_MAhWHOxQKHWrSCN4QFggcMAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fpostman%2Ffhbjgbiflinjbdggehcddcbncdddomop%3Fhl%3Den&usg=AFQjCNE_Yq59TT1ZExzJ68FTldg4ho_lGw&sig2=67wBPYALQ7c5sVvP5kjcZw&bvm=bv.120551593,d.d24) to quickly test the REST API request.

Using the 'Authentication' link in the Olapic API documentation, filling in api_key, I made the GET request on Postman.

Then using the link supplied in the response where it gets "recent media", I decided to use this as my URL in the app.

I decided to use jQuery to create the carousel as it's what I am most familiar with.

## Output Images

First I made sure that images were being pulled onto the web page so I appended each image (using the images -> thumbnail attribute) onto the div called “photoStrip”.

By using getJSON() as a simple method in sending a request, I used the URL from Postman but no images seemed to appear, however removing the "&version=v2.2" at the end seemed to work - it looks like only images from API v2.0 existed.

In the index file I added a simple structure of the carousel and the photoStrip. Each thumbnail image was 150x150 so I made the length of the strip equal to the number of images multiplied by 150 + padding.

I appended each image from the API onto this strip div by div (inline-block so they appear on one line) so that I can manipulate them individually later.

Then by using overflow:hidden (css) on the carousel to hide the remainder of the images, I added chevrons (from [Bootstrap glyphicons](http://getbootstrap.com/components/)) on either side of the 6 images.

## Scrolling

Through jQuery, when clicking on the right chevron, I basically remove the first image and add it onto the end (this way the images essentially move left as the first image disappears).

For the left chevron, I prepend the last image onto the beginning. The strip automatically moves to the right as the first image is the beginning of the strip.

## Animated Scrolling

By adding more jQuery I made the carousel animate on scroll.

For the right chevron, I made the whole process "animate" moving left (by one thumbnail), and then snapping the strip back to its original position.

For the left chevron, I moved the whole strip left (by one thumbnail) and then animated it back right into the viewing window.

Then I added more jQuery to decrease opacity when hovering over an image.

## Image Lightbox Modal - Magnific

For the popup modal, I used the [Magnific](http://dimsemenov.com/plugins/magnific-popup/) jQuery lightbox plugin and used the zoom effect (which I have used before). To make this work I made the image a hyperlink, where the endpoint ref is the "normal" image from the API.