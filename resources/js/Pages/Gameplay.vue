<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-semibold mb-6">{{ scenario.title }}</h1>
      <p class="mb-4">{{ scenario.description }}</p>
      <p class="mb-6">{{ scenario.dilemma }}</p>

      <div v-if="!showOutcome">
        <h2 class="text-xl font-semibold mb-4">Options:</h2>
        <div class="mb-4" v-for="option in scenario.options" :key="option.id">
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
        <p>{{ selectedOutcome.description }}</p>
        <p class="mb-4">Score: {{ selectedOutcome.score }}</p>

        <button
          class="bg-green-500 text-white px-4 py-2 rounded mb-6"
          @click="nextScenario"
        >
          Next Scenario
        </button>
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
      };
    },
    methods: {
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
