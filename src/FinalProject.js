export class Funcionario {
    constructor(nome) {
        this.nome = nome;
        this.salario = 1518;
    }
}

class Professor extends Funcionario {
    constructor(nome, materia) {
        super(nome);
        this.materia = materia;
        this.salario = calcularSalario("professor", this.salario);
    }
}

class Diretor extends Funcionario {
    constructor(nome) {
        super(nome);
        this.salario = calcularSalario("diretor", this.salario);
    }
}

class Design extends Funcionario {
    constructor(nome) {
        super(nome);
        this.salario = calcularSalario("design", this.salario);
    }
}

class Porteiro extends Funcionario {
    constructor(nome, horario) {
        super(nome);
        this.horario = horario;
        this.salario = calcularSalario("porteiro", this.salario, this.horario);
    }
}

function calcularSalario(cargo, salarioBase, horarioStr = null) {
    let salarioCalculado;

    switch (cargo) {
        case "professor":
            salarioCalculado = salarioBase * 1.40;
            break;
        case "diretor":
            salarioCalculado = salarioBase * 4.48;
            break;
        case "design":
            salarioCalculado = salarioBase * 1.35;
            break;
        case "porteiro":
            const horaFinalStr = horarioStr.split('-')[1];
            const horaFinal = parseInt(horaFinalStr.split(':')[0]);
            salarioCalculado = horaFinal >= 22 ? salarioBase * 1.31 : salarioBase * 1.21;
            break;
        default:
            salarioCalculado = salarioBase;
    }

    return parseFloat(salarioCalculado.toFixed(2));
}

let f1 = new Funcionario("Carlos César Brito")
let f2 = new Funcionario("Maria Clarice de Lima")
console.log(f1, f2)
let d1 = new Diretor ("Alberto Soares da Silva")
console.log(d1)
let pro1 = new Professor ("Mário Abreu ", "Biologia")
console.log(pro1)
let prof2 = new Professor("Ana Lúcia ", "Portugês/Literatura/Redação")
console.log(prof2)
let prof3 = new Professor("Fernanda Maria ", "História/Filosofia")
console.log(prof3)
let prof4 = new Professor("Cássio Eduardo ", "Física")
console.log(prof4)
let des1 = new Design("Luana Cavalcante ")
console.log(des1)
let port1 = new Porteiro("Francismo Xavier ", "6:20-14:40")
console.log(port1)
let port2 = new Porteiro("Benedito Geraldo ", "14:40-23:00")
console.log(port2)