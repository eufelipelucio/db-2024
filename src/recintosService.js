class RecintosService {
    constructor() {
        this.recintos = [
            { id: 1, bioma: 'savana', espacoLivre: 5, espacoTotal: 10 },
            { id: 2, bioma: 'savana', espacoLivre: 3, espacoTotal: 5 },
            { id: 3, bioma: 'floresta', espacoLivre: 2, espacoTotal: 7 },
            { id: 4, bioma: 'rio', espacoLivre: 5, espacoTotal: 8 },
        ];
    }

    getRecintosDisponiveis(animalInfo, quantidade) {
        const recintosViaveis = [];

        this.recintos.forEach((recinto) => {
            if (recinto.bioma === animalInfo.biomas.find(b => b === recinto.bioma) && recinto.espacoLivre >= animalInfo.tamanho * quantidade) {
                recintosViaveis.push(`Recinto ${recinto.id} (espaço livre: ${recinto.espacoLivre} total: ${recinto.espacoTotal})`);
            }
        });

        return recintosViaveis;
    }
}

export { RecintosService };
