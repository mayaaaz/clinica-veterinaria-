import Animal from "./Animal"

export default class Cachorro extends Animal {
    emitirSom(): string {
        return "auauauauau"
    }

    descreverCuidados(): string {
        return "Precisa de passeio diário."
    }
}
