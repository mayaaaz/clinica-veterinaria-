import Funcionario from "./Funcionario"

export default class Veterinario extends Funcionario {
    realizarConsulta(): void {
        console.log(` realizou uma consulta.`)
    }

    prescreverTratamento(tratamento: string): void {
        console.log(`o doutor prescreveu: ${tratamento}`)
    }

    calcularBonus(quantidade: number): number {
        return quantidade * 50
    }
}
