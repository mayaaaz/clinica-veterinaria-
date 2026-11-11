import Animal from "./Animal"
import Cachorro from "./Cachorro"
import Gato from "./Gato"
import Ave from "./Ave"
import Veterinario from "./Veterinario"
import Consulta from "./Consulta"
import Clinica from "./Clinica"

let rex = new Cachorro("Rex", 3, "Ana")
let vet = new Veterinario("Dr. Paulo", "V001", 5000)

let animais: Animal[] = [rex, new Gato("Mimi", 2, "Carlos"), new Ave("Piu", 1, "Joana")]
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i].getNome(), animais[i].emitirSom(), animais[i].descreverCuidados())
}

vet.alterarSalario(-100)
console.log(vet.calcularBonus(2))

let consulta = new Consulta(rex, vet, new Date())

let clinica = new Clinica()
clinica.adicionarAnimal(rex)
clinica.adicionarFuncionario(vet)
