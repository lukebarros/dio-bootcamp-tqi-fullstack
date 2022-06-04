const MEDIA_FINAL = 7;
var alunos = [
    {
        nome: 'Lucas', 
        media: 9
    }, 
    {
        nome: 'João', 
        media: 5
    }, 
    {
        nome: 'Maria', 
        media: 8
    },
];
let aluno = () => {
    let aprovados = [];
    let reprovados = [];
    for (let i in alunos) {
        const {nome, media} = alunos[i];
        if (media >= MEDIA_FINAL) {
            aprovados.push(nome);
        }
        else {
            reprovados.push(nome);
        }
    }
    return 'Aprovados: ' + aprovados +'\nReprovados: ' + reprovados;
}
console.log(aluno());