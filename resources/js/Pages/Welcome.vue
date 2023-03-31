<template>
    <div class="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div class="container mx-auto px-4 py-12">
            <img src="/images/ai.jpg" class="max-w-sm m-auto md:max-w-lg" />
            <div class="text-center">
                <h1 class="text-6xl font-bold leading-tight mb-4">
                    Welcome to The Moral Singularity
                </h1>
                <h2 class="text-3xl font-semibold mb-8">
                    Play the AI Ethics Game
                </h2>
                <a
                    class="py-4 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer"
                    href="/play"
                >
                    Start Playing Now
                </a>
            </div>

            <div class="mt-16">
                <h2 class="text-2xl font-bold mb-4">
                    What is The Moral Singularity?
                </h2>
                <p class="text-lg leading-7 mb-8">
                    The Moral Singularity is an AI ethics game designed to
                    challenge your thinking and help you explore the
                    complexities of ethical decision-making in a world
                    increasingly driven by artificial intelligence. The game
                    features 12 core AI ethics dilemmas, each crafted to provoke
                    thought and engage players in various contexts related to AI
                    ethics.
                </p>

                <h2 class="text-2xl font-bold mb-4">
                    Why play The Moral Singularity?
                </h2>
                <p class="text-lg leading-7 mb-8">
                    AI is transforming our world at an unprecedented pace, and
                    with that transformation come new ethical challenges. By
                    playing The Moral Singularity, you'll develop a deeper
                    understanding of these challenges and build the skills you
                    need to navigate them. Whether you're an AI researcher, a
                    policymaker, or simply someone interested in the future of
                    technology, The Moral Singularity is the perfect tool to
                    help you explore the ethical implications of AI and develop
                    your critical thinking skills.
                </p>

                <h2 class="text-2xl font-bold mb-4">
                    Who created The Moral Singularity?
                </h2>
                <p class="text-lg leading-7 mb-8">
                    The Moral Singularity was created by a team of experts in AI
                    ethics, philosophy, and game design. Our goal was to create
                    an engaging, thought-provoking experience that would help
                    people develop a deeper understanding of the ethical
                    challenges posed by AI.
                </p>

                <h2 class="text-2xl font-bold mb-4">
                    A Deeper Dive into AI Ethics
                </h2>
                <p class="text-lg leading-7 mb-8">
                    As you complete all 12 scenarios, you'll gain valuable
                    insights into the complexities of AI ethics. Share your
                    experiences and newfound knowledge with friends and
                    colleagues to stimulate discussions and raise awareness
                    about the ethical implications of AI in our world.
                </p>
            </div>

            <div class="text-gray-500 text-center mt-16">
                <a href="https://themoralsingularity.org"
                    >TheMoralSingularity.org</a
                > | <a href="mailto:hello@themoralsingularity.org">
                    hello@themoralsingularity.org
                </a>
                <br>
                Built by a human-AI collaboration with 💜

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Welcome",
    mounted() {
        document.title = "Welcome | The Moral Singularity";
    },
};
</script>
