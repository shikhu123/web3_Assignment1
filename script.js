function clickme()
{
    NewParagraphAdded();

    removeElementID("9");

var inputText = document.getElementsByClassName("text");

for (var i = 0; i < inputText.length; i++) {
inputText[i].value = "";
}
}

