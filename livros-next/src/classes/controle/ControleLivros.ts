import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: "Delilah Green não está nem aí (Bright Falls – Livro 1)", resumo: "Obrigada a voltar à cidade onde sua infância foi marcada por sofrimento, a fotógrafa Delilah Green se vê diante de um dilema: seguir em frente ou se entregar aos sentimentos que renascem ao reencontrar uma amiga de longa data. Em meio a casamentos, segredos de família e a busca por si mesma, Delilah precisa decidir o que realmente importa.", autores: ["Ashley Herring Blake"] },
    { codigo: 2, codEditora: 2, titulo: "Os homens que não amavam as mulheres (Millennium – Livro 1)", resumo: "Harriet Vanger desaparece misteriosamente de uma ilha particular da família. Quase 40 anos depois, o patriarca Henrik Vanger contrata o jornalista Mikael Blomkvist para investigar o caso. Com a ajuda da hacker Lisbeth Salander, Blomkvist descobre um mundo de segredos obscuros, onde o desaparecimento de Harriet é apenas a ponta do iceberg de um caso de família repleto de crimes e conspirações.", autores: ["Stieg Larsson"] },
    { codigo: 3, codEditora: 3, titulo: "A Guerra dos Tronos (As Crônicas de Gelo e Fogo – Livro 1)", resumo: "A luta pelo controle de Westeros se intensifica quando Eddard Stark, o leal Guardião do Norte, é convocado a se tornar a nova Mão do Rei Robert Baratheon. Ao chegar a Porto Real, ele se depara com um labirinto de traições e alianças mortais. Enquanto as intrigas políticas se desenrolam na capital, forças sobrenaturais ameaçam a paz no Norte, e um exilado, com um desejo ardente de retomar o Trono de Ferro, trama sua volta ao poder. Em meio a essas forças conflitantes, o destino dos Sete Reinos está em jogo.", autores: ["George R. R. Martin"] }
];

export default class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
