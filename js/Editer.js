
const loadFile = function(event) {

    const image = document.getElementById('output');

    image.src = URL.createObjectURL(event.target.files[0]);

}

function handleUpdate(event){

    const suffix = 'px';

    const value = event.target.value;
    
    const element = event.target.name;

    document.documentElement.style.setProperty(`--${element}`, value + suffix);

    if(element == 'color'){

        document.documentElement.style.setProperty(`--${element}`, value);

    };

};