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

window.onload = (function () {

    Properties();
    
    function Properties() 
    {
    
        var MouseHoverButton = document.getElementsByClassName("btnMouseHover");
    
        for (var i = 0; i < MouseHoverButton.length; i++) 
        {

            MouseHoverButton[i].addEventListener("mousehover", function () 
            {
    
            document.body.style.backgroundColor = "red";
    
            })
    
        MouseHoverButton[i].addEventListener("mouseleaves", function ()
        {
            document.body.style.backgroundColor = "white";
        })
    
        MouseHoverButton[i].addEventListener("click", function ()
         {
            var buttonCLone = this.cloneNode(true);
            document.body.appendChild(buttonCLone);
    
    Properties();
    })
    }
    }
    
});
    