function immg() {
    document.getElementById('pul').src="cirgarou2.png"
}
function immmg() {
    document.getElementById('pul').src="cigarou1.png"
}
function model(ch){
    document.getElementById('pul').src="1.png"
}


function information () {
    nom="mahdi "
    prenom="hammami"
    age="18"
    adreese="moranguia "
    ch=nom +" "+ prenom+" "+age+" "+adresse 
    f=open("information.txt","a")
    f.write(ch+"\n")
    f.close()
}

