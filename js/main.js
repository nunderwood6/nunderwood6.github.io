//get window width
var w = window.innerWidth;


if(w<575){
//if single column use scrolltrigger
document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'visibleClass',
      hidden: 'hiddenClass'
    },
    offset: {
      x: 0,
      y: 60
    },
    addHeight: true,
  }, document.body, window);
});
}else{



d3.selectAll("a.portfolio-item")
		.on("mouseover", function(){
			d3.select(this).select(".popup").style("opacity", "1");

		})
		.on("mouseout", function(){
			d3.select(this).select(".popup").style("opacity", "0")
		});


}











