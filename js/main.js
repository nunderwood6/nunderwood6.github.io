

var projects= {
	"wild": "Wilder than the National Parks",
	"bitterroot": "Climbing Areas of the Bitteroot",
	"flyover": "Flyover Country Visualization Suite",
	"ageless": "The Ageless Alps: A Visual Exploration of Longevity in the Mountains"

};

d3.selectAll("a.portfolio-item")
		.on("mouseover", function(){
			console.log("trigger");
			d3.select(this).select(".popup").style("opacity", "1");

		})
		.on("mouseout", function(){
			console.log("off");
			d3.select(this).select(".popup").style("opacity", "0")
		});
