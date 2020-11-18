function getAttackVal(min, max) {
    // Returns a random attack integer value between min and max args
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            healthPlayer: 100,      // starting health of the Player
            healthMonster: 100,     // starting health of the Monster
        }
    },
    methods: {
        attackByMonster() {
            const attackVal = getAttackVal(8, 15)
            this.healthPlayer -= attackVal
        },
        attackByPlayer() {
            const attackVal = getAttackVal(5, 12)
            this.healthMonster -= attackVal
            this.attackByMonster() // player gets hit by monster on each attack
        }
    }
});

app.mount('#game');
