class Pessoa{
    constructor (nome, idade, cidade){
        this.nome = nome
        this.idade = idade
        this.cidade = cidade

    }

}
class Pet{
    constructor (nome){
        this.nome=nome
    }
}
let nome1= new Pessoa ('Juan', 27, 'Fortaleza')
let pet1= new Pet ('Ciel')
let nome2= new Pessoa ('Anderson', 31, 'Baturité')
let pet2= new Pet('nenhum')
console.log(nome1)
console.log(pet1)
console.log(nome2)
console.log(pet2)
