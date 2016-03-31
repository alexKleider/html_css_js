/*jshint multistr:true*/
var image = document.getElementById('dog');
var dogName = document.getElementById('dogName');
var dogDescription = document.getElementById('dogDescription');

function changeDogs(){
    if (image.src.match('gabriel')){
        image.src = "Images/rugie.jpg";
        dogName.innerHTML = 'This is Rugie';
        dogDescription.textContent =
        'Rugie is an 18 month old male Bouvier de Flanders; ' +
        'still very much a puppy.';
    } else {
        image.src = "Images/gabriel.jpg";
        dogName.textContent = 'This is Gabriel';
        // dogName.innerHTML = 'This is Gabriel';
            // '.innerHTML' is potentially a security risk.
        dogDescription.textContent = 
        "Gabriel is very much the 'Grand Dame' at 8 years of age.";
    }
}
