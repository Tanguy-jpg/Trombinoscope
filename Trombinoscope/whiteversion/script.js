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
                    node.style = "width: 40%; min-width:470px; margin-left: -20%; height: 98%; margin-top: 10px; position:absolute; top: 0px; left: 50%; z-index:1000;"

					divImage.appendChild(node);
				}