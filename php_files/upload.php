<?php
$result='';
if(isset($_FILES['file']['name'][0])){
    foreach($_FILES['file']['name'] as $key => $file){
        $file_name = '../uploads/'.$_FILES['file']['name'][$key];
        if(move_uploaded_file($_FILES['file']['tmp_name'][$key], 
            $file_name)){
                $result.="<div class=\"div-file\"><p class=\"p-file overline\"> \"${file_name}\"</p></div>";
        }
    }
    echo $result;
}