function File_Attachment(){
    // if(document.getElementById('footer-file-attachment-options').style.display="block"){
    //     document.getElementById('footer-file-attachment-options').style.display="none";
    //   }
    if(document.getElementById('footer-file-attachment-options').style.display === "block"){
    document.getElementById('footer-file-attachment-options').style.display="none";
} else{ 
   document.getElementById('footer-file-attachment-options').style.display="block";
}
}

function DOTS_Button(){
    if(document.getElementById('header-menu-options-list').style.display === "block"){
        document.getElementById('header-menu-options-list').style.display="none";
    }
    else{
        document.getElementById('header-menu-options-list').style.display="block";
    }
}

