( () => {
	document.addEventListener("DOMContentLoaded", function(){
		console.log(`Loaded Carousel`);
		var images = document.getElementsByTagName("img");
		for(var i = 0; i < images.length; i++){
			var item = images[i]
			if(item.dataset && item.dataset.carousel){
				var options = item.dataset.carousel.split(',');
				var index = (Date.now() / (1000 * 60 * 60 * 18) + i ) % options.length | 0;
				console.log(`Found ${item} with options, using ${index}`);
				item.src = options[index];
			}
		}
	});
})();