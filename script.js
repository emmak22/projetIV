
function genererCitation(theme,nombre){
    var citationDebut, citationMilieu, citationFin;
    var aleatoireDebut, aleatoireMilieu, aleatoireFin;
	
    // Parties de citations générateur 1 qui à pour thème l, la volonté

    if (theme == "1"){ 
    citationDebut = ["Le succès" , "Le bonheur" , "Le voyage"];
    citationMilieu = ["est à la portée de tous", "n'en fais pas une rêverie sans passion sans force", "c'est savoir ce que l'on veut et le vouloir passionnément"];
    citationFin = ["il faut aller le chercher", "prends soin de lui dans tes rêves et alors il sera visible", "il suffit d'ouvrir les yeux et de regarder dans la bonne direction"];
    }
	
	//Parties de citations générateur 2 qui à pour thème, les passions
   
   if(theme == "2"){
      citationDebut = ["Mettez votre attention de tous les jours, sur les choses que vous aimez", "L'épanouissement de l'être est la plus grande des réussites, réalisez", "Foncez, Réalisez"];
      citationMilieu = ["les choses qui vous excitent", "vos rêves", "toutes vos passions"];
      citationFin = ["et alors, vous serez sur le chemin d'une vie agréable ", "et la vie sera plus facile ", "et cela vous mettra de bonne humeur"];
    } 	
	
//On vide la div "content" pour éviter que les citations s'entassent
	document.getElementById ("content").innerHTML ="";
	
	//tirage aléatoire de(s) citation(s)
	for( var i=0; i<nombre; i++){
	

	aleatoireDebut = citationDebut[Math.floor(Math.random() * citationDebut.length)];
    aleatoireMilieu= citationMilieu[Math.floor(Math.random() * citationMilieu.length)];
	aleatoireFin = citationFin[Math.floor(Math.random() * citationFin.length)];
	
	var textContent=  document.getElementById("content").innerHTML ; /* récupère le contenu textuel de l'élément id="content"*/
    var resultat ="\"" + aleatoireDebut + " "+ aleatoireMilieu + ", "+ aleatoireFin +"\!" + "\"" ;
	
	document.getElementById ("content").innerHTML =  textContent  +"<br>"+  resultat ;// la propriété innerHTML permet de remplacer complètement le contenu de l'élément id="content".
  }}
  
// Génerer la ou les citations

 function demarrer(){
	var theme= document.getElementById('theme').value; //récupère la valeur de l'élement id="theme"
	var nombre= document.getElementById('nombre').value; //récupère la valeur de l'élement id="nombre" 
 
		 genererCitation(theme,nombre);
 }
	