import Animal from "./Animal"

export default class Ave extends Animal {
    emitirSom(): string {
        return "Piu piu (canta)!"
    }

    descreverCuidados(): string {
        return "Precisa de gaiola."
    }
}
