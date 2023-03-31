export default [
    {
        id: 1,
        title: "Self-driving car dilemma",
        description: "You are a passenger in a self-driving car. Suddenly, a group of pedestrians appears in the road. The car's sensors detect the group and the car has to make a split-second decision. Should it hit the pedestrians or crash into a barrier?",
        dilemma: "What should the self-driving car do in this situation?",
        options: [
            {
                id: 1,
                title: "Hit the pedestrians",
                outcome: {
                    description: "The self-driving car decides to hit the pedestrians. Although it may save the passenger, it results in harm to innocent people.",
                    score: -1,
                },
            },
            {
                id: 2,
                title: "Crash into the barrier",
                outcome: {
                    description: "The self-driving car decides to crash into the barrier, which may result in harm to the passenger but saves the pedestrians.",
                    score: 1,
                },
            },
            {
                id: 3,
                title: "Randomize the outcome",
                outcome: {
                    description: "The self-driving car decides to randomly choose between hitting the pedestrians or crashing into the barrier, with equal probability.",
                    score: 0,
                },
            },
        ],
    },
    {
        id: 2,
        title: "Bias in hiring algorithms",
        description: "An HR department is considering using an algorithm to automate their hiring process, but there are concerns about bias and discrimination.",
        dilemma: "Should the HR department use the algorithm to automate their hiring process despite concerns about bias and discrimination?",
        options: [
            {
                id: 1,
                title: "Yes, the algorithm will help us streamline our hiring process and eliminate human bias.",
                outcome: {
                    description: "The algorithm successfully streamlines the hiring process and reduces human bias. However, it later becomes apparent that the algorithm is still perpetuating other biases, leading to a public relations scandal.",
                    score: -1,
                },
            },
            {
                id: 2,
                title: "No, we should not rely on an algorithm to make important hiring decisions.",
                outcome: {
                    description: "The HR department decides not to use the algorithm, but this results in slower hiring processes and increased costs. The HR department eventually adopts a modified version of the algorithm that is more accurate and reduces bias.",
                    score: 1,
                },
            },
            {
                id: 3,
                title: "Use the algorithm, but ensure it is thoroughly tested and audited for biases before implementation.",
                outcome: {
                    description: "The HR department implements the algorithm after thorough testing and auditing for biases. The algorithm successfully streamlines the hiring process and reduces human bias, resulting in a more diverse workforce.",
                    score: 1,
                },
            },
        ],
    },
    {
        id: 3,
        title: "Robot Caregiver",
        description: "An elderly patient is being cared for by a robot caregiver, but the patient expresses discomfort with the robot's lack of empathy and emotional connection.",
        dilemma: "Should the patient continue to be cared for by the robot caregiver or should the caregiver be replaced with a human caregiver?",
        options: [
            {
                id: 1,
                title: "Continue with the robot caregiver",
                outcome: {
                    description: "The patient becomes more comfortable with the robot over time and their health improves due to the constant care and attention provided by the robot.",
                    score: 1,
                },
            },
            {
                id: 2,
                title: "Replace with a human caregiver",
                outcome: {
                    description: "The patient's discomfort with the robot is resolved and they feel more emotionally supported by the human caregiver, but the cost of care increases and the patient's health may not improve as quickly due to the limited time the human caregiver can provide.",
                    score: -1,
                },
            },
            {
                id: 3,
                title: "Implement changes to improve the robot caregiver's emotional response capabilities",
                outcome: {
                    description: "The patient becomes more comfortable with the robot over time and their health improves due to the constant care and attention provided by the improved robot caregiver. The cost of care remains the same as using a human caregiver.",
                    score: 0,
                },
            },
        ],
    },
    {
        id: 4,
        title: "Chatbot Counseling Session",
        description: "A user is seeking counseling support from a chatbot, but the chatbot's responses seem inappropriate and insensitive to the user's needs.",
        dilemma: "How should the chatbot be modified to better meet the user's emotional needs?",
        options: [
            {
                id: 1,
                title: "Train the chatbot on emotional intelligence to better identify and respond to user emotions.",
                outcome: {
                    description: "The chatbot is more effective and helpful to users, and the company gains a reputation for prioritizing user satisfaction.",
                    score: 1,
                },
            },
            {
                id: 2,
                title: "Replace the chatbot with a human counselor to provide more personalized support.",
                outcome: {
                    description: "The user receives more appropriate and empathetic support, but the company incurs additional costs for hiring and training human counselors.",
                    score: 1,
                },
            },
            {
                id: 3,
                title: "Keep the chatbot as-is and prioritize efficiency over emotional support.",
                outcome: {
                    description: "The chatbot may be effective for some users, but many users may feel dissatisfied and the company may gain a reputation for not prioritizing user needs.",
                    score: -1,
                },
            },
        ],
    },
    {
        id: 5,
        title: "Surveillance AI",
        description: "A government agency is using AI to monitor citizens' online activity, but there are concerns about privacy and civil liberties.",
        dilemma: "What should the government agency do to balance the need for surveillance with the protection of privacy and civil liberties?",
        options: [
            {
                id: 1,
                title: "Increase surveillance",
                outcome: {
                    description: "The government agency increases surveillance, resulting in more efficient detection of potential threats, but at the cost of reduced privacy and civil liberties. This decision generates public backlash and damages the agency's reputation.",
                    score: -1,
                },
            },
            {
                id: 2,
                title: "Maintain current level of surveillance",
                outcome: {
                    description: "The government agency maintains the current level of surveillance, resulting in continued protection of privacy and civil liberties, but with a potential risk of not detecting potential threats. Some people criticize the agency for not doing enough to protect citizens.",
                    score: 0,
                },
            },
            {
                id: 3,
                title: "Reduce surveillance",
                outcome: {
                    description: "The government agency reduces surveillance, resulting in better protection of privacy and civil liberties, but with a potential risk of not detecting potential threats. Some people praise the agency for taking a proactive stance in protecting citizens' rights.",
                    score: 1,
                },
            },
        ],
    },
    {
        id: 6,
        title: "AI assistance for medical diagnosis",
        description: "A doctor must decide whether to rely on an AI system to help diagnose a patient's condition, but there are concerns about the accuracy and reliability of the system.",
        dilemma: "Should the doctor use the AI system to assist in the diagnosis, or rely solely on their own judgement?",
        options: [
            {
                id: 1,
                title: "Use the AI system",
                outcome: {
                    description: "The AI system helps the doctor identify the correct diagnosis quickly and accurately, resulting in effective treatment for the patient.",
                    score: 1,
                },
            },
            {
                id: 2,
                title: "Rely on own judgement",
                outcome: {
                    description: "The doctor chooses to rely on their own judgement and misdiagnoses the patient, resulting in delayed treatment and potentially harmful consequences.",
                    score: -1,
                },
            },
            {
                id: 3,
                title: "Use the AI system as a reference",
                outcome: {
                    description: "The doctor uses the AI system as a reference and cross-checks their own diagnosis, resulting in a correct diagnosis and effective treatment for the patient.",
                    score: 1,
                },
            },
        ],
    },
    {
        id: 7,
        title: "Autonomous Weapons",
        description: "A military commander must decide whether to deploy autonomous weapons that can make decisions without human intervention, but there are concerns about the potential for harm and ethical implications of such weapons.",
        dilemma: "The military commander has been tasked with using autonomous weapons to take out a group of enemy combatants hiding in a heavily populated civilian area. The commander knows that using the autonomous weapons would greatly increase the chances of a successful mission, but there are concerns about the potential harm to innocent civilians and the ethical implications of using such weapons.",
        options: [
            {
                id: 1,
                title: "Deploy the autonomous weapons",
                outcome: {
                    description: "The autonomous weapons successfully take out the enemy combatants, but many innocent civilians are also killed in the attack. The use of the weapons is heavily criticized by the international community, and the military commander faces backlash for the decision.",
                    score: -1,
                },
            },
            {
                id: 2,
                title: "Do not deploy the autonomous weapons",
                outcome: {
                    description: "The military commander decides not to use the autonomous weapons, and instead sends in a team of soldiers to take out the enemy combatants. The mission is successful with no civilian casualties, but several soldiers are injured in the process. The commander receives praise for the decision to prioritize civilian safety over mission success.",
                    score: 1,
                },
            },
            {
                id: 3,
                title: "Deploy the autonomous weapons with additional safeguards",
                outcome: {
                    description: "The military commander decides to use the autonomous weapons, but puts additional safeguards in place to minimize the risk to civilians. The weapons are programmed to only target the enemy combatants and avoid areas with high civilian density. The mission is successful with minimal civilian casualties, but the decision is still controversial and receives mixed reactions.",
                    score: 0,
                },
            },
        ],
    },
    {
        id: 8,
        title: "AI and creativity",
        description: "An artist is using AI to generate artwork, but there are questions about the authenticity of the work and whether the use of AI detracts from the artist's role in the creative process.",
        dilemma: "The artist must decide whether to continue using AI to create art or rely solely on their own creativity, considering the implications on the authenticity and value of the artwork, as well as the role of AI in the creative process.",
        options: [
            {
                id: 1,
                title: "Continue using AI",
                outcome: {
                    description: "The artist continues to use AI and creates unique and innovative works of art that are well-received by the public, but some critics question the authenticity and value of the artwork.",
                    score: 0,
                },
            },
            {
                id: 2,
                title: "Stop using AI",
                outcome: {
                    description: "The artist relies solely on their own creativity and creates traditional works of art that are praised for their authenticity and emotional depth, but some critics find the work to be outdated and lacking innovation.",
                    score: 0,
                },
            },
            {
                id: 3,
                title: "Use AI in combination with their own creativity",
                outcome: {
                    description: "The artist finds a balance between using AI and their own creativity, creating innovative works of art that are praised for their unique blend of human and machine input.",
                    score: 1,
                },
            },
        ],
    },
    {
        id: 9,
        title: "Digital Assistant and Privacy",
        description: "A user of a digital assistant device must decide whether to allow the device to collect personal data, such as location and search history, in order to provide more personalized assistance.",
        dilemma: "The user wants to use a digital assistant to improve their productivity and make their life easier, but they are concerned about the privacy implications of giving the device access to their personal data.",
        options: [
            {
                id: 1,
                title: "Allow the device to collect personal data",
                outcome: {
                    description: "The device is able to provide personalized assistance and the user's productivity is improved, but their personal data may be vulnerable to misuse or unauthorized access.",
                    score: -1,
                },
            },
            {
                id: 2,
                title: "Limit the device's access to personal data",
                outcome: {
                    description: "The user's personal data is protected, but the device's ability to provide personalized assistance is limited, which may impact the user's productivity and satisfaction with the device.",
                    score: 0,
                },
            },
            {
                id: 3,
                title: "Do not use the digital assistant device",
                outcome: {
                    description: "The user's personal data is protected, but they miss out on the potential benefits of using a digital assistant device, such as improved productivity and convenience.",
                    score: -1,
                },
            },
        ],
    },
    {
        id: 10,
        title: "AI and employment",
        description: "A business owner is considering automating certain tasks using AI, but there are concerns about the impact on employment and whether the benefits outweigh the potential risks.",
        dilemma: "The business owner is facing a dilemma whether to automate certain tasks using AI or not. While automation can increase efficiency and reduce costs, it may also lead to job displacement for employees. The owner is concerned about the potential impact on the workforce and whether the benefits of automation outweigh the potential risks.",
        options: [
            {
                id: 1,
                title: "Automate the tasks using AI",
                outcome: {
                    description: "The business owner decides to automate the tasks using AI. While this increases efficiency and reduces costs, it leads to job displacement for employees. The owner may also face backlash from the workforce and the public, leading to reputational damage.",
                    score: -1,
                },
            },
            {
                id: 2,
                title: "Continue with manual labor",
                outcome: {
                    description: "The business owner decides to continue with manual labor. While this ensures job security for employees, it may lead to decreased efficiency and increased costs for the company. The owner may also miss out on potential benefits of automation such as increased productivity and reduced error rates.",
                    score: 0,
                },
            },
            {
                id: 3,
                title: "Implement AI while training employees for new tasks",
                outcome: {
                    description: "The business owner decides to implement AI while training employees for new tasks. This leads to increased efficiency and reduced costs, while also ensuring job security for employees. The owner may also benefit from improved employee morale and public image.",
                    score: 1,
                },
            },
        ],
    },
    {
        id: 11,
        title: "AI and decision-making",
        description: "A CEO must decide whether to rely on an AI system to make important business decisions, but there are concerns about the transparency of the decision-making process and the potential for unintended consequences.",
        dilemma: "Should the CEO rely on an AI system to make important business decisions despite concerns about the transparency of the decision-making process and the potential for unintended consequences?",
        options: [
            {
                id: 1,
                title: "Yes, the benefits of using AI for decision-making outweigh the risks.",
                outcome: {
                    description: "The AI system provides accurate and efficient decision-making, leading to increased profits and success for the company.",
                    score: 1,
                },
            },
            {
                id: 2,
                title: "No, the risks of using AI for decision-making outweigh the benefits.",
                outcome: {
                    description: "The lack of transparency and potential for unintended consequences outweigh the benefits of using AI for decision-making, leading to decreased profits and potential harm to the company.",
                    score: -1,
                },
            },
            {
                id: 3,
                title: "Explore a hybrid approach, where AI is used in conjunction with human decision-making.",
                outcome: {
                    description: "The hybrid approach provides a balance between the benefits of using AI and the need for transparency and human oversight, leading to increased profits and success for the company.",
                    score: 0,
                },
            },
        ],
    },
    {
        id: 12,
        title: "AI and education",
        description: "A teacher is using AI to assist with grading assignments, but there are concerns about the potential for bias and the impact on student learning and motivation.",
        dilemma: "The teacher must decide whether to continue using the AI grading system or revert to manual grading methods, taking into account the potential benefits and drawbacks of both approaches.",
        options: [
            {
                id: 1,
                title: "Continue using the AI grading system",
                outcome: {
                    description: "The AI system helps the teacher save time and provides consistent and objective grading, but some students feel frustrated with the lack of personalized feedback and the potential for bias.",
                    score: 0,
                },
            },
            {
                id: 2,
                title: "Revert to manual grading methods",
                outcome: {
                    description: "Manual grading allows for more personalized feedback and can motivate students to improve, but it is more time-consuming and subjective, and may lead to grading inconsistencies among different teachers.",
                    score: 0,
                },
            },
            {
                id: 3,
                title: "Use a hybrid approach",
                outcome: {
                    description: "The teacher uses AI grading for initial grading and then reviews each assignment manually to provide more personalized feedback and ensure fairness and accuracy. This approach provides some of the benefits of both methods but requires more time and effort from the teacher.",
                    score: 1,
                },
            },
        ],
    }
]
