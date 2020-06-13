$(document).ready(function () {
	// Stores JSON file in variable
	var mov = JSON.parse(movies)

	for (let i = 0; i < mov.length; i++){

		// For each iteration, creates a new film div inside of the film box (main container)
		$("#film_box").append(`<div class = "film" id = movie_${i}>`)

		// Creates random number of likes from 1-10
		let likes = Math.floor(Math.random()*10)+1

		// For each iteration, adds information of the film (from the JSON variable) to each film div (I know it's not really pretty, but it does the job in one go)
		$(`#movie_${i}`).append(`<div class = image_box><img></div><div class = info_box><h2>${mov[i].title}</h2><p>Director: ${mov[i].director}</p><p>Main Cast: ${mov[i].cast}</p><p>Genre: ${mov[i].genre}</p><p class = year>Year: ${mov[i].year}</p><h6>Synopsis: ${mov[i].description}</h6> <div class = like_box><button class = "like_button" id = button_${i}> Like  <i class="fa fa-thumbs-up"></i></button> <h3 class = likey> ${likes} </h3></div></div>`)

		// Adds the attribute src to each image from JSON variable 
		$(`#movie_${i} .image_box img`).attr("src", `${mov[i].imgsrc}`)
	}

	// Creates click event for all buttons
	$("button").on("click", function(event){
		event.preventDefault()

		// Gets ID and Class of the button
		let button_class = $(this).attr("class")
		let button_id = $(this).attr("id")

		// If the button is a like button, it increases it's sibling's value by one (in this case the sibling is likey)
		if (button_class == "like_button"){
			let likes = parseInt($(this).siblings().text())
			likes += 1
			$(this).siblings().text(likes)

		// If the button is a sorting button from the sub-button menu, it will sort the film divs accordingly
		} else if (button_class == "sub_button"){

			// by number of likes
			if (button_id == "numerical"){
				var order = $(".film").sort(function (a, b){
					return $(b).find("h3").text() - $(a).find("h3").text()
				})

			// alphabetically
			} else if (button_id == "alphabetical"){
				var order = $(".film").sort(function (a, b){
					return $(a).find("h2").text() < $(b).find("h2").text() ? -1:1
				})

			// by newest film
			} else if (button_id == "newest"){
				var order = $(".film").sort(function (a, b){
					return $(a).find(".year").text() > $(b).find(".year").text() ? -1:1
				})

			// by oldest film
			} else if (button_id == "oldest"){
				var order = $(".film").sort(function (a, b){
					return $(a).find(".year").text() < $(b).find(".year").text() ? -1:1
				})
			}

			//sorts the film divs according to the order we picked
			$("#film_box").html(order)

			//We add another like button event because when we sort the divs, the like events dissapear.
			$(".like_button").on("click", function(){
				let likes = parseInt($(this).siblings().text())
				likes += 1
				$(this).siblings().text(likes)
			})
		}
	})
})