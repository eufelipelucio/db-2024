import { AnimaisService } from './animaisService.js';
import { RecintosService } from './recintosService.js';

class RecintosZoo {
    constructor() {
        this.animaisService = new AnimaisService();
        this.recintosService = new RecintosService();
    }

    analisaRecintos(animal, quantidade) {
        const animalInfo = this.animaisService.getCaracteristicas(animal);

        if (!animalInfo) {
            return { erro: "Animal inválido", recintosViaveis: false };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: false };
        }

        const recintosViaveis = this.recintosService.getRecintosDisponiveis(animalInfo, quantidade);

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: false };
        }

        return { recintosViaveis };
    }
}

export { RecintosZoo as RecintosZoo };
