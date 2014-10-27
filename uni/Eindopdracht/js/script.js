window.onload = function(){
	$("submit").observe('click', saveAankoop);
	$("searchArt").observe('keyup', updateListArtikel);
	$("searchBeschrijving").observe('keyup', updateListArtikel);	
	$("searchKlant").observe('keyup', updateListKlant);
	$("searchNaam").observe('keyup', updateListKlant);	
	$("searchWoonplaats").observe('keyup', updateListKlant);
	$("hoeveelheid").observe('keyup', updateBedrag);
    $("artikelen").observe('click' , artSelect);
    $("klanten").observe('click', klantSelect);
    var ul = $("artikelen").firstElementChild.getElementsByTagName("li");
    for (i=0;i<ul.length;i++){
        ul[i].observe("click", artSelect);
    }
}

/*This function is called when an artikel is selected in the list*/
function artSelect(art){	
	//highlight the selected list element
    var li = $("artikelen").firstElementChild.getElementsByTagName("li");

    for (i=0;i<li.length;i++){
        li[i].setStyle({color: 'black'});
    }
    
	var x = Event.element(art);
    x.setStyle({color: 'blue'});

	//perform an Ajax request
	new Ajax.Request(
    "server.php",
    {
        method:'get',
        onSuccess:updateFieldsArtikel,
        parameters: {mode: 'getArtikel', artikel: (x.innerHTML.strip().split(" "))[0]},
        onSuccess: function(response){
            var row =  transformIntoArray(response.responseText);
            $("art").innerHTML = row[0]
            $("beschrijving").value = row[1];
            $("kleur").value = row[2];
            $("voorraad").value = row[3]
            $("prijs").value = row[4];
            $("srtc").value = row[5];
            var option = document.createElement("option")
            option.text = row[7]
            $("afd").add(option, $("afd")[0]);
        }
    }
    ); 
    
    
}

/*This  function is called when a 'klant' is selected in the list*/
function klantSelect(klant){
	//highlight the selected list element
    var li = $("klanten").firstElementChild.getElementsByTagName("li");

    for (i=0;i<li.length;i++){
        li[i].setStyle({color: 'black'});
    }

	var x = Event.element(klant);
    x.setStyle({color: 'blue'});

	//perform an Ajax request
	new Ajax.Request(
        "server.php",
        {
            method:'get',
            parameters: {mode: 'getKlant', klant: (x.innerHTML.strip().split(" "))[0]},
            onSuccess: function(response){
            var row =  transformIntoArray(response.responseText);
            $("klant").innerHTML = row[0]
            $("naam").value = row[1];
            $("voorl").value = row[2];
            $("adres").value = row[3]
            $("postc").value = row[4];
            $("woonplaats").value = row[5];
            $("schuld").value = row[6];
            }
        }
    ); 
}

/*This functie should be called to update the artikel fields*/
function updateFieldsArtikel(ajax) {
	//call transformIntoArray and update all information fields on the right to display all artikel information
    
	//var ul = $("artikelen").firstElementChild.childElements
    
    
	//Create new options for every afdeling	 
	
	//updateBedrag();
	 
}

/*Deze functie vult daadwerkelijk de klant velden in*/
function updateFieldsKlant(ajax) {
	//call transformIntoArray and update all information fields on the right to display all klant information
}

/*The bedrag (=hoeveelheid * artikel.prijs) is calculated and displayed in this function*/
function updateBedrag(event){
    var x = Event.element(event);
    $("bedrag").innerHTML = parseFloat(parseInt(x.value)) * parseFloat($("prijs").value); 
    
}

/*This function is called when an artikel is searched using the search fields */
function updateListArtikel(event){
    var x = Event.element(event);
    var ul = $("artikelen").firstElementChild.getElementsByTagName("li");
    for (i=0;i<ul.length;i++){
        ul[i].observe("click", artSelect);
        if (ul[i].innerHTML.toLowerCase().indexOf(x.value.toLowerCase()) == -1){
            ul[i].setStyle({
                display: "none",
            });
        }
        else{
            ul[i].setStyle({
                display: "inline",
            });
        }
    }
}

/*This function is called when a klant is searched using the search fields*/
function updateListKlant(event){
    var x = Event.element(event);
    var ul = $("klanten").firstElementChild.getElementsByTagName("li");
    for (i=0;i<ul.length;i++){
        ul[i].observe("click", artSelect);
        if (ul[i].innerHTML.toLowerCase().indexOf(x.value.toLowerCase()) == -1){
            ul[i].setStyle({
                display: "none",
            });
        }
        else{
            ul[i].setStyle({
                display: "list-item",
            });
        }
    }
}


/*
This function performs a Ajax request that connects with server.php where a sale is added
*/
function saveAankoop(){
    var bool = true;
    if (parseInt($("hoeveelheid").value) > parseInt($("voorraad").value)){
        $("hoeveelheid").value = $("voorraad").value;
        alert("Er zijn niet zo veel meer verkrijgbaar");
        bool = false;
    }
    
    if (bool){
        new Ajax.Request(
            "server.php",
            {
                method:'get',
                parameters: {   mode:       'saveAankoop',
                                klant:      $("klant").value,
                                naam:       $("naam").value,
                                schuld:     $("schuld").value,
                                art:        $("art").innerHTML,
                                voorraad:   $("voorraad").value,
                                prijs:      $("prijs").value,
                                hoeveelheid:$("hoeveelheid").value,
                                afd:        $("afd").value,
                                bedrag:     $("bedrag").innerHTML,
                                aanbet:     $("aanbet").value,
                } ,
                onSuccess: function(response){
                    //alert(response.responsetext);
                    var newli = document.createElement('li');
                    newli.setAttribute('id', "fadein");
                    newli.innerHTML = $("art").innerHTML + " - " + $("beschrijving").value + " - " + $("naam").value;
                    $("verkooplist").appendChild(newli);
                    Effect.Highlight('fadein');
                    $('fadein').removeAttribute('id','fadein');
                },
            }
    
        );
    }
}

/*When a sale is done, update the list of 'verkopen', using Scriptaculous!!!*/
function updateVerkopen(ajax){

}

function transformIntoArray(accessoriesString) {
    return accessoriesString.strip().split(";");
}

function ajaxFailure(ajax, exception) {
	alert("Error making Ajax request:" + 
		"\n\nServer status:\n" + ajax.status + " " + ajax.statusText + 
		"\n\nServer response text:\n" + ajax.responseText);
	if (exception) {
		throw exception;
	}
}
