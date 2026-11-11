import Animal from "./Animal"
import Veterinario from "./Veterinario"

export default class Consulta {
    private animal: Animal
    private veterinario: Veterinario
    private data: Date

    constructor(animal: Animal, veterinario: Veterinario, data: Date) {
        this.animal = animal
        this.veterinario = veterinario
        this.data = data
    }
}
