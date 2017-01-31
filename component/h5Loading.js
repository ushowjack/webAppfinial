var H5Loading = function (image) {
	var count = 0;
	// console.log(image);
	this.elem.fullpage({

		onLeave:function (index,nextIndex,direction) {
			$(this).find(".h5_component").trigger('onLeave');
		},
		afterLoad:function (anchorLink,index) {
			$(this).find(".h5_component").trigger('onLoad');
		}
	});	
	for(var i = 0; i < image.length; i++){
		var img = new Image();
		// debugger;
		img.onload = function () {
			count ++;
			$(".loading-per").html(parseInt(count/image.length *100)+"%");
			// console.log(parseInt(count/image.length *100)+"%");
			// debugger;
			if (count === image.length) {
				$(".h5").show();			
			}

		};
		img.src = image[i];
	}
}