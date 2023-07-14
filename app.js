function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("On"))
    {
        img.src="Off bulb.jpg";

    }
    else{
        img.src="On bulb.jpg";
    
}
}
