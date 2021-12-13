const blocks = {
	section: function(id){
		var item =	'<div id="' + id + '" class="gallery_section">'
				 +		'<div class="gallery_section_title">'
				 +			'<img src="data:image/svg+xml;utf8,' + "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='31' height='" + (id.length * 29) + "'><text x='0' y='30' display='block' fill='grey' font-size='40px' font-weight='600' text-anchor='end' transform='rotate(-90)' opacity='1' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>" + id + "</text></svg>" + '" draggable="false" style="/*background-color:var(--primary_color);*/">'
				 +		'</div>'
				 +		'<div class="gallery_section_inner"><div></div></div>'
				 +	'</div>';
		return item;
	},
	image: function(info){
		var item =	'<div class="gallery_item">'
				 +		'<div class="gallery_item_buttons">'
				 +			'<div class="gallery_item_zoom_button" title="View in fullscreen" onclick="openModal(event, ' + "'#gallery_modal'" + ')"></div>'
				 +			'<div class="gallery_item_info_button" title="Information" onclick="openModal(event, ' + "'#info_modal'" + ')"><p>i</p></div>'
				 +			'<div class="gallery_item_dload_button" title="Download" onclick="downloadImage(event)"></div>'
				 +		'</div>'
				 +		'<div class="gallery_item_inner">'
				 +			'<img src="' + info.url + '" draggable="false" loading="lazy" style="object-fit:' + info.fit + ';">'
				 +			'<div class="gallery_item_info">'
				 +				'<p>' + info.name + '</p>'
				 +				'<p>' + info.author + '</p>'
				 +				'<p>' + info.year + '</p>'
				 +				'<p>' + info.size + '</p>'
				 +				'<p>' + info.alternate + '</p>'
				 +			'</div>'
				 +		'</div>'
				 +	'</div>';
		return item;
	}
}


function populateGallery(){
	Object.keys(gallery_db["images"]).forEach(function(k){
		if($("#" + k.toUpperCase())[0] == null){
			$("#gallery").append(blocks.section(k.toUpperCase()));
		}
		
		var i = 0;
		while(i < gallery_db["images"][k].length){
			var info = {
				url: gallery_db["images"][k][i]["url"],
				name: gallery_db["images"][k][i]["url"].split("/")[gallery_db["images"][k][i]["url"].split("/").length - 1].split(".")[0],
				extension: gallery_db["images"][k][i]["url"].split("/")[gallery_db["images"][k][i]["url"].split("/").length - 1].split(".")[1],
				alternate: gallery_db["images"][k][i]["type"],
				size: (gallery_db["images"][k][i]["size"] == "" ? '' : gallery_db["images"][k][i]["size"].split("x").join("&times;")),
				fit: (gallery_db["images"][k][i]["size"].split("x")[0] == gallery_db["images"][k][i]["size"].split("x")[1] ? "contain" : "cover"),
				author: gallery_db["images"][k][i][4],
				year: gallery_db["images"][k][i][5]
			}
			$("#" + k.toUpperCase()).children(":nth-child(2)").children().first().append(blocks.image(info));
			i++;
		}
	});
}

    
function spaceToNBSP(str = ""){
	return str.toString().split(" ").join("&nbsp;");
}


function openModal(event, modal){
	if(modal == "#gallery_modal"){
		var image_url = $(event.target).parent().parent().children(":nth-child(2)").css("background-image");
		image_url = image_url.toString().substring(5, image_url.length - 2);
		$("#gallery_modal").children(":nth-child(2)").attr("src", image_url);
	}
	var image_name = $(event.target).parent().parent().children(":nth-child(2)").children(":nth-child(1)").children(":nth-child(1)").html(); //name
	$(".gallery_modal_info").children(":nth-child(1)").html('<b>' + spaceToNBSP(image_name) + '</b>');
	var image_author = $(event.target).parent().parent().children(":nth-child(2)").children(":nth-child(1)").children(":nth-child(2)").html(); //author
	$(".gallery_modal_info").children(":nth-child(2)").html((image_author == "" ? "" : spaceToNBSP("by " + image_author)));
	var image_year = $(event.target).parent().parent().children(":nth-child(2)").children(":nth-child(1)").children(":nth-child(3)").html(); //year
	$(".gallery_modal_info").children(":nth-child(3)").html((image_year == "" ? "" : spaceToNBSP("&middot; " + image_year)));
	var image_size = $(event.target).parent().parent().children(":nth-child(2)").children(":nth-child(1)").children(":nth-child(4)").html(); //size
	$(".gallery_modal_info").children(":nth-child(4)").html((image_size == "" ? "" : spaceToNBSP("&middot; " + image_size)));
	var image_alternate = $(event.target).parent().parent().children(":nth-child(2)").children(":nth-child(1)").children(":nth-child(5)").html(); //alternate
	$(".gallery_modal_info").children(":nth-child(5)").html(spaceToNBSP("&middot; " + image_alternate));
	
	$("body").css({"overflow-y":"hidden"});
	$(modal).removeClass("invisible");
	$(modal).removeClass("noclick");
	}
	function closeModal(modal){
	$(modal).addClass("invisible");
	$(modal).addClass("noclick");
	$("body").css({"overflow-y":"auto"});
	}
	
	window.addEventListener("keydown", function(event){
	if(event.key == "Escape"){
		event.preventDefault();
		closeModal("#gallery_modal");
		closeModal("#info_modal");
	}
});