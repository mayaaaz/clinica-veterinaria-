export default abstract class Animal {
    private nome: string
    private idade: number
    private tutor: string

    constructor(nome: string, idade: number, tutor: string) {
        this.nome = nome
        this.idade = idade
        this.tutor = tutor
    }

    getNome(): string {
        return this.nome
    }

    abstract emitirSom(): string
    abstract descreverCuidados(): string
}
