export default abstract class Funcionario {
    private nome: string
    private matricula: string
    private salario: number = 0

    constructor(nome: string, matricula: string, salario: number) {
        this.nome = nome
        this.matricula = matricula
        this.alterarSalario(salario)
    }

    getNome(): string {
        return this.nome
    }

    getSalario(): number {
        return this.salario
    }

    alterarSalario(valor: number): void {
        if (valor > 0) {
            this.salario = valor
        } else {
            console.log("Salário inválido.")
        }
    }

    abstract calcularBonus(quantidade: number): number
}
