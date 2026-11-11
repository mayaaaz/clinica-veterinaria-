import Funcionario from "./Funcionario"

export default class Veterinario extends Funcionario {
    realizarConsulta(): void {
        console.log(`${this.getNome()} realizou uma consulta.`)
    }

    prescreverTratamento(tratamento: string): void {
        console.log(`${this.getNome()} prescreveu: ${tratamento}`)
    }

    calcularBonus(quantidade: number): number {
        return quantidade * 50
    }
}
