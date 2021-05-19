function afficherImage( id)
				{
					var divImage = document.getElementById('affichageImage');
					
					if (divImage.hasChildNodes()){
						divImage.removeChild(node);
					}
					
					var hrefImg = "img/" + id +".jpg";
					node = document.createElement('img');
					node.id = id + "Image";
					node.src = hrefImg;
					node.alt = id;
                    node.style = "width: 600px; min-width:470px; margin-left: -300px; height: 650px; position:absolute; bottom: 140px; left: 50%; z-index:1000;"

					divImage.appendChild(node);
				}

/*

const toggleBtn = document.getElementById("toggleBtn")
const content = document.getElementById("content")

toggleBtn.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})

*/

const toggleBtn = document.getElementById("toggleBtn")
const content = document.getElementById("affichageImage")

const imageA = document.getElementById("imageA")
const imageB = document.getElementById("imageB")
const imageC = document.getElementById("imageC")
const imageD = document.getElementById("imageD")
const imageE = document.getElementById("imageE")
const imageF = document.getElementById("imageF")
const imageG = document.getElementById("imageG")
const imageH = document.getElementById("imageH")
const imageI = document.getElementById("imageI")
const imageJ = document.getElementById("imageJ")
const imageK = document.getElementById("imageK")
const imageL = document.getElementById("imageL")
const imageM = document.getElementById("imageM")
const imageN = document.getElementById("imageN")

toggleBtn.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})


imageA.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageB.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageC.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageD.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageE.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageF.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageG.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageH.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageI.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageJ.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageK.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageL.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageM.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageN.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})

