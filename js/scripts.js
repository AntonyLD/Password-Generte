// seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

//Novas funcionalidades
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePassowrdContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lattersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const CopyPasswordButton = document.querySelector("#copy-password")

//Funções
const getLetterLowerCase = () =>{
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}

const getLetterUpperCase = () =>{
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
}

const getNumber = () =>{
    return Math.floor(Math.random() * 10).toString();
}

const  getSymbol = () => {
    const symbols = "(){}[]=<>/?;:.,!@#$%¨&*'+ºª§°-_";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassowrd =(getLetterLowerCase, getLetterUpperCase,getNumber,getSymbol) =>{
    
    let password =""

    const passwordLength = +lengthInput.value;
// segunda versão
    const generators = [];

    if(lattersInput.checked){
        generators.push(getLetterLowerCase,getLetterUpperCase)
    }

    if(numbersInput.checked){
        generators.push(getNumber)
    }

    if(symbolsInput.checked){
        generators.push(getSymbol)
    }
    
    console.log(generators.length);

    if (generators.length === 0 ){ return;

    };


    for (i = 0; i < passwordLength; i = i + generators.length){
        generators.forEach(() =>{

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue
        });
    }

    password = password.slice(0, passwordLength);
    

    generatePasswordElement.style.display = "block"
    generatePasswordElement.querySelector("h4").innerText = password;

};
//Eventos
generatePasswordButton.addEventListener("click", (e) =>{
    e.preventDefault();
    generatePassowrd(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});

openCloseGeneratorButton.addEventListener("click", () =>{
    generatePassowrdContainer.classList.toggle("hide")
});

CopyPasswordButton.addEventListener("click", (e) =>{
    e.preventDefault();

    const password = generatePasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() =>{
        CopyPasswordButton.innerText = "Senha copiada com sucesso!!"
    });
});