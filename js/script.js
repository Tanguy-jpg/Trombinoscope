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
                    node.style = "width: 600px; min-width:470px; margin-left: -300px; height: 650px; position:absolute; top: 150px; bottom: 140px; left: 50%; z-index:1000;"

					divImage.appendChild(node);
				}

/* donne la classe "caché" au container de l'image qui pop*/
var element = document.getElementById("affichageImage");
element.classList.add("affichageImage");

/* constantes */
const toggleBtn = document.getElementById("toggleBtn")
const content = document.getElementById("affichageImage")

const imageA = document.getElementById("image-a")
const imageB = document.getElementById("image-b")
const imageC = document.getElementById("image-c")
const imageD = document.getElementById("image-d")
const imageE = document.getElementById("image-e")
const imageF = document.getElementById("image-f")
const imageG = document.getElementById("image-g")
const imageH = document.getElementById("image-h")
const imageI = document.getElementById("image-i")
const imageJ = document.getElementById("image-j")
const imageK = document.getElementById("image-k")
const imageL = document.getElementById("image-l")
const imageM = document.getElementById("image-m")
const imageN = document.getElementById("image-n")
const imageO = document.getElementById("image-o")
const imageP = document.getElementById("image-p")
const imageQ = document.getElementById("image-q")
const imageR = document.getElementById("image-r")
const imageS = document.getElementById("image-s")
const imageT = document.getElementById("image-t")


/* execution de la fonction quand click*/

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
imageO.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageP.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageQ.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageR.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageS.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})
imageT.addEventListener("click", function(){
	content.classList.toggle("affichageImage")
})


