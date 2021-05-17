function clickme()
{
   NewParagraphAdded();

   removeElementID("9");

   var inputText = document.getElementsByClassName("text");

   for (var i = 0; i < inputText.length; i++) 
   {
       inputText[i].value = "";
   }
}

function NewParagraphAdded() 
{
  
    var p = document.createElement("P"); 
    
    var a = document.createTextNode("New Paragraph Added."); 
    
    p.style.fontSize = 12;
    
    p.style.color = "green";
    
    p.appendChild(a); 
	
    document.body.appendChild(p); 
}

function removeElementID(elementId) {

    var element = document.getElementById(elementId);
    if (element) {
       
        element.parentNode.removeChild(element);
    } else {
       
        alert("Element wit ID - " + elementId +" does not exists.");
    }
    
}


window.onload = (function () {

            
    Properties();

    
    function Properties() {

        var MouseHoverButton = document.getElementsByClassName("btnMouseHover");

        for (var i = 0; i < MouseHoverButton.length; i++) {
            MouseHoverButton[i].addEventListener("mouseover", function () {
                document.body.style.backgroundColor = "red";
            })

            MouseHoverButton[i].addEventListener("mouseout", function () {
                document.body.style.backgroundColor = "white";
            })

            MouseHoverButton[i].addEventListener("click", function () {
                var buttonCLone = this.cloneNode(true);
                document.body.appendChild(buttonCLone);

                Properties();
            })
        }
    }

    
});