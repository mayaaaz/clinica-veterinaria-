import Funcionario from "./Funcionario"

export default class Recepcionista extends Funcionario {
    agendarAtendimento(): void {
        console.log(` agendou um atendimento.`)
    }

    calcularBonus(quantidade: number): number {
        return quantidade * 10
    }
}
