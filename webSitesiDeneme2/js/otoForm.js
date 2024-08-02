
function formSonuc(){
    let toplamDestek = 0;
    if (document.getElementById("cErkek").checked == true && document.getElementById("cKadin").checked == false)
        toplamDestek += 100;
    else if (document.getElementById("cErkek").checked == false && document.getElementById("cKadin").checked == true)
        toplamDestek += 200;
    
    switch (document.getElementById("meslek").value) {
        case "s1":
            toplamDestek += 10;
            break;
        case "s2":
            toplamDestek += 20;
            break;
        case "s3":
            toplamDestek += 30;
            break;
        case "s4":
            toplamDestek += 40;
            break;
        case "s5":
            toplamDestek += 50;
            break;
    }
    switch (document.getElementById("calisan").value) {
        case "s1":
            toplamDestek += 10;
            break;
        case "s2":
            toplamDestek += 20;
            break;
        case "s3":
            toplamDestek += 30;
            break;
        case "s4":
            toplamDestek += 40;
            break;
        case "s5":
            toplamDestek += 50;
            break;
    }
    document.getElementById("sonuc").innerHTML = toplamDestek.toString();
    document.getElementById("sonuc").style.display = "block";
    console.log(toplamDestek);
}