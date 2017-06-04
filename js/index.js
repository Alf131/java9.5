var withButtonItemsClass = document.getElementsByClassName('button'), innerText = [];
for (var i = 0; i < withButtonItemsClass.length; i++) {
	innerText.push( withButtonItemsClass[i].innerText );
 console.log(innerText);
}