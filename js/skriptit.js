document.body.style = "margin: 1rem 0 0 5rem";
var first = document.getElementById('eka');
var childUl = first.getElementsByTagName("ul")[0];
childUl.classList.add('rivit-vierekkain');


childUl.style = "display: inline-flex;", "flex-flow: row;", "flex-wrap: wrap;";

var childList = first.getElementsByTagName("li")[0];
childList.classList.add("noDisc");


var childList1 = first.getElementsByTagName("li")[5];
childList1.classList.add("noDisc");


/*
var envelopeIcon = first.getElementsByTagName("a")[2];
var icon1 = document.createElement("span");
icon1.setAttribute("class", "fas fa-envelope");

envelopeIcon.appendChild(icon1);
icon1.style.color = "#EE784F";

*/

var childList2 = first.getElementsByTagName("li")[9];
childList2.classList.add("noDisc");

var a = document.querySelectorAll(".noDisc");
for (var i = 0; i < a.length; i++){
    a[i].style = "list-style: none;";
}


var grey = first.getElementsByTagName("ul")[1];
grey.classList.add("greyColor");
var grey1 = first.getElementsByTagName("ul")[2];
grey1.classList.add("greyColor");
var grey2 = first.getElementsByTagName("ul")[3];
grey2.classList.add("greyColor");

var b = document.querySelectorAll(".greyColor");
for (var j = 0; j < b.length; j++){
    b[j].style = "background-color: lightgrey; margin: 1rem 1rem 0 0;";
}


var links = document.links;
for (i=0; i<links.length; ++i) {
    links[i].classList.add("dotted");
    links[i].style = "text-decoration-style: dotted; color: #7F170E; font-weight: bold; font-style: italic; font-weight: bold;"
   
    
}


var pdf = document.getElementsByTagName("a")[1];

pdf.insertAdjacentHTML("afterend", '<span class="pdf fas fa-file-pdf"></span>');


document.getElementsByTagName("a")[2].insertAdjacentHTML("beforebegin", ' <span class="envelope fas fa-envelope"></>');

document.getElementsByTagName("a")[2].insertAdjacentHTML("beforebegin", '<span class="link fas fa-external-link-alt"></span>');

document.getElementsByTagName("a")[3].insertAdjacentHTML("beforebegin", '<span class="link fas fa-external-link-alt"></span>');
/*
var pdfIcon = first.getElementsByTagName("a")[1];

var icon = document.createElement("span");
icon.setAttribute("class","fas fa-file-pdf");
pdfIcon.appendChild(icon);
icon.style.color = "#CC392B";
*/



/*
var dotted = first.getElementsByTagName("a")[0];

dotted.style = "text-decoration-style: dotted; color: #7F170E;     font-weight: bold; font-style: italic;"





var dotted3 = first.getElementsByTagName("a")[3];
dotted3.style = "text-decoration-style: dotted; color: #7F170E;     font-weight: bold; font-style: italic;"
*/


var tr = document.getElementsByTagName('tr');
for(i=0;i<tr.length;i++){
    if(i%2!=0) tr[i].style= "background-color: lightgrey; margin: 1rem 1rem 0 0";
}


var data1 = document.getElementsByTagName("td");
for(i=0;i<data1.length;i++){
    data1[i].style= "padding-right: 17rem";
    

}

var data2 = document.getElementsByTagName("td");
for(i=0;i < data2.length - 6 ;i++){
    data2[i].style= "padding-right: 10rem";
    
}



 