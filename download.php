<?php
if(isset($_POST['download'])){
    $zip = new ZipArchive();
    $filename = "code.zip";
    if ($zip->open($filename, ZipArchive::CREATE)!==TRUE) {
        exit("cannot open <$filename>\n");
    }
    $zip->addFromString("html.html", $_POST['textarea1']);
    $zip->addFromString("css.css", $_POST['textarea2']);
    $zip->addFromString("js.js", $_POST['textarea3']);
    $zip->close();
    header('Content-Type: application/zip');
    header('Content-disposition: attachment; filename='.$filename);
    header('Content-Length: ' . filesize($filename));
    readfile($filename);
}
?>