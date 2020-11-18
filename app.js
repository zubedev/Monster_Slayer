function getRandomValue(min, max) {
    // Returns a random attack integer value between min and max args
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            healthPlayer: 100,      // starting health of the Player
            healthMonster: 100,     // starting health of the Monster
            currentRound: 0         // round obviously starts at 0
        }
    },
    computed: {
        healthMonsterStyle() { return { width: this.healthMonster + '%' } },
        healthPlayerStyle() { return { width: this.healthPlayer + '%' } },
        disableSpecialAttack() {
            // allow to use SpecialAttack every 3 rounds
            return this.currentRound % 3 !== 0 || this.currentRound === 0
        }
    },
    methods: {
        attackByMonster() {
            const attackVal = getRandomValue(8, 15)
            this.healthPlayer -= attackVal
        },
        attackByPlayer() {
            this.currentRound++ // increment the round count
            const attackVal = getRandomValue(5, 12)
            this.healthMonster -= attackVal
            this.attackByMonster() // player gets hit by monster on each attack
        },
        specialAttack() {
            this.currentRound++ // increment the round count
            const attackVal = getRandomValue(10, 25) // larger value than normal
            this.healthMonster -= attackVal
            this.attackByMonster() // player should still get hit by monster
        }
    }
});

app.mount('#game');
