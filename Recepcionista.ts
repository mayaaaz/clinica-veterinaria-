import Funcionario from "./Funcionario"

export default class Recepcionista extends Funcionario {
    agendarAtendimento(): void {
        console.log(`${this.getNome()} agendou um atendimento.`)
    }

    calcularBonus(quantidade: number): number {
        return quantidade * 10
    }
}
