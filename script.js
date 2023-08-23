function tabuada(){
    let number = document.querySelector('#pesquisar').value 
    document.querySelector('#display').innerText = ''

    for(cont = 1; cont < 11; cont++){
        
        let result = number + 'x' + cont + '=' + (number * cont) + '\n'
        document.querySelector("#display").innerText += result
    }
}