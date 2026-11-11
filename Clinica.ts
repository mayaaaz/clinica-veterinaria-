import Funcionario from "./Funcionario"
import Animal from "./Animal"

export default class Clinica {
    private funcionarios: Funcionario[] = []
    private animais: Animal[] = []

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario)
    }

    adicionarAnimal(animal: Animal): void {
        this.animais.push(animal)
    }
}
