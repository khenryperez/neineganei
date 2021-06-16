function btnClicked(){
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function (){
        //window.scrollTo(0,0);
        window.scrollTo({
            top:0,
            left: 0,
            behavior: "smooth"
        })
    })
}

function findStudent() {
	console.log('I got called!');
	var xmlRequest = null;

	if (window.XMLHttpRequest)
	{
		xmlRequest = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlRequest.open('GET', 'studentrecord.xml', true);

	xmlRequest.onreadystatechange = function() {
		if (xmlRequest.readyState == 4 && xmlRequest.status == 200)
		{
			var xmlDoc = xmlRequest.responseXML;
			console.log(xmlDoc);
			proceedSearch(xmlDoc);
		}
	}
	xmlRequest.send();
}

function proceedSearch(doc) {
	console.log("I'm also getting called!");
	var listStudents = doc.getElementsByTagName('student');
	var listID = doc.getElementsByTagName('studID');

	var searchedID = document.getElementById('searchBar').value;

	for (var i = 0; i < listStudents.length; i++)
	{
		if (listID[i].innerHTML == searchedID)
		{
			console.log('Student Found!');
			document.getElementById('studImg').src = "img/samp/" + (i+1) + ".png";

			document.getElementById('studID').innerHTML = listStudents[i].getElementsByTagName('studID')[0].innerHTML;

			document.getElementById('studL').innerHTML = listStudents[i].getElementsByTagName('lastName')[0].innerHTML;
			document.getElementById('studF').innerHTML = listStudents[i].getElementsByTagName('firstName')[0].innerHTML;
			document.getElementById('studM').innerHTML = listStudents[i].getElementsByTagName('middleName')[0].innerHTML;

			document.getElementById('studAge').innerHTML = listStudents[i].getElementsByTagName('studAge')[0].innerHTML;
			document.getElementById('studBirthday').innerHTML = listStudents[i].getElementsByTagName('studBday')[0].innerHTML;
			document.getElementById('studCourse').innerHTML = listStudents[i].getElementsByTagName('studCourse')[0].innerHTML;

			document.getElementById('studAdd').innerHTML = listStudents[i].getElementsByTagName('studAddress')[0].innerHTML;
			document.getElementById('studEmail').innerHTML = listStudents[i].getElementsByTagName('studEmail')[0].innerHTML;

			i = listStudents.length;

		}
		else if (i+1 >= listStudents.length)
		{
			console.log("Can't Find Student");
			alert("Error 404: Can't Find the Student");
		}
	}
}