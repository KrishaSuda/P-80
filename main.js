var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }

function hide()
{
	document.getElementById("display_name").style.display = "none"
	document.getElementById("hide").style.display = "none";
	document.getElementById("show").style.display = "inline";
	}
   

function show()
{
	document.getElementById("display_name").style.display = "block";
	document.getElementById("hide").style.display = "inline";
	document.getElementById("show").style.display = "none";
	}


function sorting(){
		names_of_people.sort();
		var i= names_of_people;
		console.log(names_of_people);		
		document.getElementById("display_name").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
	var without_commas = names_of_people.join(" ");
	for (var d=0; d<names_of_people.length; d++)
	{
		var names_of_people123 = "<h4>"+without_commas+"</h4>";
	}
	
	document.getElementById("123").innerHTML = names_of_people123;
}
