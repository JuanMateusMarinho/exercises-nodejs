export class Funcionario {
    constructor(nome) {
        this.nome = nome
        this.salario = 2000
    }
   
}
class Professor extends Funcionario { 
    constructor(nome, materia) {
        super(nome)
        this.materia = materia
        this.salario = salarioProf(this.salario)
    }
    //"SUPER" pega as informaçoes do primeiro constructor.
    
}

function salarioProf(imput) {
    return imput * 1.3
// todo calculo de mudança de salario, tera que ser feito fora do constructor com uma function.
}

let f1= new Funcionario('Alberto')
console.log(f1)
let p1= new Professor('Scorpio', 'Matematica')
console.log(p1)
let p2= new Professor('Claudia','Portugues')
console.log(p2)