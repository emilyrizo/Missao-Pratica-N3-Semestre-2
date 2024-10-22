import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
    { codEditora: 1, nome: "Arqueiro" },
    { codEditora: 2, nome: "Companhia das Letras" },
    { codEditora: 3, nome: "Suma" }
];

export default class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = editoras.find(e => e.codEditora === codEditora);
        return editora?.nome;
    }
}
