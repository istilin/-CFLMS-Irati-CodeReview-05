$(document).ready(function () {
	var mov = JSON.parse(movies)
	for (let i = 0; i < mov.length; i++){

		$("#film_box").append(`<div class = "film" id = movie_${i}>`)

		let likes = Math.floor(Math.random()*10)+1

		$(`#movie_${i}`).append(`<div class = image_box><img></div><div class = info_box><h2>${mov[i].title}</h2><p>Director: ${mov[i].director}</p><p>Main Cast: ${mov[i].cast}</p><p>Genre: ${mov[i].genre}</p><p class = year>Year: ${mov[i].year}</p><h6>Synopsis: ${mov[i].description}</h6> <div class = like_box><button class = "like_button" id = button_${i}> Like   <i class="fa fa-thumbs-up"></i></button> <h3 class = likey id = likes_${i}> ${likes} </h3></div></div>`)

		$(`#movie_${i} .image_box img`).attr("src", `${mov[i].imgsrc}`)
		
	}
	
	$("#numerical").on("click", function(){
		let num_order = $(".film").sort(function (a, b){
		return $(b).find("h3").text() - $(a).find("h3").text()
		})
		$("#film_box").html(num_order)
	})

	$("#alphabetical").on("click", function(){
		let alph_order = $(".film").sort(function (a, b){
			return $(a).find("h2").text() < $(b).find("h2").text() ? -1:1
		})
		console.log(alph_order.find("h2").text())
		$("#film_box").html(alph_order)
	})

	$("#newest").on("click", function(){
		let new_order = $(".film").sort(function (a, b){
			return $(a).find(".year").text() > $(b).find(".year").text() ? -1:1
		})
		console.log(new_order.find(".year").text())
		$("#film_box").html(new_order)
	})

	$("#oldest").on("click", function(){
		let old_order = $(".film").sort(function (a, b){
			return $(a).find(".year").text() < $(b).find(".year").text() ? -1:1
		})
		console.log(old_order.find(".year").text())
		$("#film_box").html(old_order)
	})

	for (let i = 0; i < mov.length; i++){
		$(`#button_${i}`).on("click", function(){
				console.log("hello")
				likes = parseInt($(`#likes_${i}`).text())
				
				likes += 1
				$(`#likes_${i}`).text(likes)
			})
	}























	})