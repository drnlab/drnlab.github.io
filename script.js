function initSection(content) 
{
	var carousels = content.getElementsByClassName("carousel");
	for (var i = 0; i < carousels.length; i++) 
	{
		var lazyLoadCells = carousels[i].getElementsByClassName("carousel-cell").length - 1;
		new Flickity( carousels[i], {
			cellAlign: "center",
			contain: true,
			wrapAround: false,
			prevNextButtons: true,
			pageDots: false,
			lazyLoad: lazyLoadCells
		});
	}	
	var dropdowns = content.getElementsByClassName("dropdown");
	for (var i = 0; i < dropdowns.length; i++) 
	{
		dropdowns[i].addEventListener("click", function() 
		{
			toggleDropdown(this);
		});
	}		
	content.classList.add("ready");
}

function toggleDropdown(dropdown) {
	dropdown.classList.toggle("dropdownActive");
	var content = dropdown.parentNode.nextElementSibling;   
	if (content.style.display === "block") 
	{
		dropdown.innerHTML = dropdown.innerHTML.replace("[-]", "[+]");
		content.style.display = "none";
	}
	else 
	{
		dropdown.innerHTML = dropdown.innerHTML.replace("[+]", "[-]");
		content.style.display = "block";
		var flkty = Flickity.data(content);
		if (flkty != null) {
			flkty.resize();
		}
	}
}