var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if(element.tagName != "STYLE" && element.tagName != "SCRIPT"){
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var replacedText = node.nodeValue.replace(/;/g, '\u037E');
            element.replaceChild(document.createTextNode(replacedText), node);
        }
    }
    }
}
