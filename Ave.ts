import Animal from "./Animal"

export default class Ave extends Animal {
    emitirSom(): string {
        return "Piu piu"
    }

    descreverCuidados(): string {
        return "Precisa de gaiola."
    }
}
