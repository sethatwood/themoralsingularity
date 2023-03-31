<template>
    <div class="container mx-auto">
        <div v-if="!gameStarted">
            <h1 class="text-3xl font-semibold mb-6">
                Welcome to The Moral Singularity!
            </h1>
            <p class="mb-6">
                In this game, you'll face a series of ethical dilemmas involving
                artificial intelligence. Your decisions will shape the outcome
                of each scenario and impact your final score. The score of each
                scenario is based on the ethical implications of your choice,
                with -1 representing a negative outcome, 0 representing a
                neutral outcome, and 1 representing a positive outcome. Your
                goal is to achieve the highest possible score by making the most
                ethical decisions.
            </p>
            <button
                class="bg-green-500 text-white px-4 py-2 rounded mb-6"
                @click="startGame"
            >
                Start Game
            </button>
        </div>

        <div v-if="gameStarted">
            <h1 class="text-2xl font-semibold mb-6">{{ scenario.title }}</h1>
            <p class="mb-4">{{ scenario.description }}</p>
            <p class="mb-6">{{ scenario.dilemma }}</p>

            <div v-if="!showOutcome">
                <h2 class="text-xl font-semibold mb-4">Options:</h2>
                <div
                    class="mb-4"
                    v-for="option in scenario.options"
                    :key="option.id"
                >
                    <button
                        class="bg-blue-500 text-white px-4 py-2 rounded"
                        @click="selectOption(option)"
                    >
                        {{ option.title }}
                    </button>
                </div>
            </div>

            <div v-if="showOutcome">
                <h2 class="text-xl font-semibold mb-4">Outcome:</h2>
                <p class="mb-6">{{ selectedOutcome.description }}</p>
                <p class="mb-4">Score: {{ selectedOutcome.score }}</p>

                <button
                    class="bg-yellow-500 text-white px-4 py-2 rounded mb-6 mr-4"
                    @click="replayScenario"
                >
                    Replay Scenario
                </button>
                <button
                    class="bg-green-500 text-white px-4 py-2 rounded mb-6"
                    @click="nextScenario"
                >
                    Next Scenario
                </button>
            </div>

            <div>
                <p class="text-xl font-semibold">
                    Running Score: {{ totalScore }} / {{ totalPossibleScore }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import scenarios from "@/scenarios.js";

export default {
    data() {
        return {
            scenarios,
            scenarioIndex: 0,
            scenario: scenarios[0],
            showOutcome: false,
            selectedOutcome: null,
            totalScore: 0,
            totalPossibleScore: 0,
            gameStarted: false,
        };
    },
    mounted() {
        document.title = "Play | The Moral Singularity";
    },
    methods: {
        startGame() {
            this.gameStarted = true;
            this.calculateTotalPossibleScore();
        },
        selectOption(option) {
            this.selectedOutcome = option.outcome;
            this.totalScore += option.outcome.score;
            this.showOutcome = true;
        },
        nextScenario() {
            this.scenarioIndex++;
            if (this.scenarioIndex < this.scenarios.length) {
                this.scenario = this.scenarios[this.scenarioIndex];
                this.showOutcome = false;
            } else {
                alert(`Game over! Your total score is: ${this.totalScore}`);
                this.resetGame();
            }
        },
        resetGame() {
            this.scenarioIndex = 0;
            this.scenario = this.scenarios[this.scenarioIndex];
            this.showOutcome = false;
            this.selectedOutcome = null;
            this.totalScore = 0;
            this.gameStarted = false;
        },
        calculateTotalPossibleScore() {
            this.totalPossibleScore = this.scenarios.reduce((sum, scenario) => {
                const maxScore = Math.max(
                    ...scenario.options.map((option) => option.outcome.score)
                );
                return sum + maxScore;
            }, 0);
        },
        replayScenario() {
            const scoreToSubtract = this.selectedOutcome.score;
            this.showOutcome = false;
            this.selectedOutcome = null;
            this.totalScore -= scoreToSubtract;
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
    padding: 2rem;
}
</style>
