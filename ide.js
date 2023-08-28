function run() {
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "<style>";
    output.contentWindow.eval(jscode);
}
function saveTextAsFile() {
    var ids = ["html-code", "css-code", "js-code"];
    var elements = [];
    for (var i = 0; i < ids.length; i++) {
        var textToWrite = document.getElementById(ids[i]).value;
        var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
        var fileNameToSaveAs = "myNewFile.txt";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();
    }
}

function copyToClipboard1() {
    var copyText = document.getElementById("html-code");
    copyText.select();
    document.execCommand("copy");
}
function copyToClipboard2() {
    var copyText = document.getElementById("css-code");
    copyText.select();
    document.execCommand("copy");
}
function copyToClipboard3() {
    var copyText = document.getElementById("js-code");
    copyText.select();
    document.execCommand("copy");
}
function clearTextArea1() {
    document.getElementById("html-code").value = "";
}
function clearTextArea2() {
    document.getElementById("css-code").value = "";
}
function clearTextArea3() {
    document.getElementById("js-code").value = "";
}
// /dxrfcgvhbjnkml,;./