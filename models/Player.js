//Modelo del jugador
class Player {
    winner = false;

    constructor({
        score,
        level,
    }) {
        this.score = score;
        this.level = level;
    }
}

export {Player};