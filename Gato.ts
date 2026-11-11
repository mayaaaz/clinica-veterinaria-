import Animal from "./Animal"

export default class Gato extends Animal {
    emitirSom(): string {
        return "Miau!"
    }

    descreverCuidados(): string {
        return "Precisa de arranhador."
    }
}
