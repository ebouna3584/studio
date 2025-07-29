
export type CourseSection = {
  topicTitle: string;
  understandFirst: string;
  lessonHeaders: string[];
  estimatedUnitTimeMinutes: number;
  studyTips?: string[];
  recommended?: boolean;
};

export type Course = {
  id: string;
  slug: string;
  fieldOfStudy: 'Foundations / General';
  courseTitle: string;
  courseDescription: string;
  mindsetTagline: string;
  totalEstimatedTimeHours: number;
  sections: CourseSection[];
  pdfMarkdown: string;
};

const cognitiveDominanceCourse: Course = {
    id: '1',
    slug: 'cognitive-dominance',
    fieldOfStudy: 'Foundations / General',
    courseTitle: 'The Neurobiological Reframing Full Masterclass',
    courseDescription: 'A comprehensive self-engineering protocol that reshapes your brain, behavior, and performance architecture into something AI cannot replicate nor society can ignore.',
    mindsetTagline: 'Becoming Unreplaceable — Neurobiological Rewiring & Strategic Dominance',
    totalEstimatedTimeHours: 100,
    sections: [
        {
            topicTitle: 'Phase I: Core Rewiring & Scientific Foundations',
            understandFirst: 'Build your neurobiological backend and understand brain optimization. This is mental architecture — not skill, but the operating system on which skills will run.',
            lessonHeaders: [
                'Identity and Habit Restructuring', 
                'Neurological Mechanisms to Rewire',
                'Daily Neural Rewiring Protocol',
                'Critical Subjects to Master'
            ],
            estimatedUnitTimeMinutes: 420,
            studyTips: [
                'Phase I is internal war. You debug your mind like code, removing inefficiencies, emotional noise, and false narratives. You walk out with internal sovereignty and total clarity.'
            ],
            recommended: true
        },
        {
            topicTitle: 'Phase II: Reinforcement & Neural Encoding',
            understandFirst: 'Lock in habits, rituals, and neurological anchoring of behaviors. This phase is about bleeding theory into your behavior until it becomes instinct, not information.',
            lessonHeaders: [
                'Deep Practice and Immersion Training',
                'Behavioral Psychology Mastery',
                'Startup Economics Mastery',
                'Strategic Cognition Mastery',
                'Neural Systems Mastery',
                'AI Infrastructure Mastery',
                'Persuasive Communication Mastery'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You begin thinking in layers. This phase rewires your mind to become predictive, architectural, and strategic. No more linear thinking — now you see webs of influence and pathways of leverage.'
            ]
        },
        {
            topicTitle: 'Phase III: Performance Simulations & Feedback Loops',
            understandFirst: 'Stress test cognition and refine execution through scenario-based learning. This phase forges your cognitive steel through high-stress, high-fidelity simulation.',
            lessonHeaders: [
                'Investor Pitch Gauntlet',
                'Bias Recognition Combat',
                'Cognition Under Chaos Drill',
                'AI-Orchestrated Workflow Test',
                'Persuasion Inversion Test'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You become a machine, but not in the mechanical sense — you are fluid, frictionless, and impossible to stop. Everything in your life aligns around output, and you’re no longer fighting resistance; you’ve built an engine.'
            ]
        },
        {
            topicTitle: 'Phase IV: Adaptive Intelligence & Situational Mastery',
            understandFirst: 'Master ambiguity, fluidity, and environmental control. This is the phase where you cease being merely a thinker or performer and become a living system.',
            lessonHeaders: [
                'Context Switching Mastery',
                'Emotional Intelligence Under Constraint',
                'Situational Command',
                'Neural Agility Training',
                'Meta-Learning Engineering'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You stop being static and become dynamic. You adapt faster than change happens. This is your firewall against chaos — when most freeze or break, you evolve.'
            ]
        },
        {
            topicTitle: 'Phase V: Reality Distortion & Perceptual Dominance',
            understandFirst: 'Bend perception. You no longer react to reality — you architect it. Perceptual dominance means controlling how others see, feel, and interpret your presence, actions, and decisions.',
            lessonHeaders: [
                'Perceptual Engineering',
                'Social Cloaking and Invisibility',
                'Charisma Engineering',
                'Psychological Operations for Influence',
                'Reality Narrative Crafting'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'This is the power to make people move — think, act, or trust in the way you architect. You become an invisible architect of perception, and a master of the human psyche.'
            ]
        },
        {
            topicTitle: 'Phase VI: Quantum Cognition & Nonlinear Thinking',
            understandFirst: 'Your brain becomes non-Euclidean — no longer limited by linear causality. You learn to leap between ideas, collapse abstract concepts into strategic actions, and wield paradox as a tool.',
            lessonHeaders: [
                'Nonlinear Logic Systems',
                'Time Distortion Cognition',
                'Conceptual Collapsing',
                'Multi-Brain Simulation',
                'Abstract Execution'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You are no longer competing in the visible field — you move in hidden dimensions. Everything becomes a layer: optics, power, incentives, control. You begin pulling strings others don’t even see.'
            ]
        },
        {
            topicTitle: 'Phase VII: Ascendant Neuroarchitecture & Auto-Transcendence',
            understandFirst: 'You are no longer training to become powerful. You are designing the architecture of the mind that builds reality itself. You become the source code.',
            lessonHeaders: [
                'Cognitive Operating System Design',
                'Sovereign Self Programming',
                'Self-Destructive Pattern Elimination',
                'Autopoietic Learning Systems',
                'Ascendant Discipline'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'Now you shift from winning the game to becoming the blueprint for it. This is where individuals become empires — where your cognition births institutions. You aren’t just remembered. You’re installed into the operating system of the future.'
            ]
        }
    ],
    pdfMarkdown: `
# The Neurobiological Reframing Full Masterclass: Syllabus

## Course Overview
A comprehensive self-engineering protocol that reshapes your brain, behavior, and performance architecture into something AI cannot replicate nor society can ignore.

---

### Phase I: Core Rewiring & Scientific Foundations
**Purpose:** Build your neurobiological backend and understand brain optimization. This is mental architecture — not skill, but the operating system on which skills will run.
- **Key Lessons:** Identity and Habit Restructuring, Neurological Mechanisms to Rewire, Daily Neural Rewiring Protocol, Critical Subjects to Master.
- **Summary:** Debug your mind like code, removing inefficiencies, emotional noise, and false narratives. You walk out with internal sovereignty and total clarity.

### Phase II: Reinforcement & Neural Encoding
**Purpose:** Lock in habits, rituals, and neurological anchoring of behaviors. This phase is about bleeding theory into your behavior until it becomes instinct, not information.
- **Key Lessons:** Deep Practice and Immersion Training, Behavioral Psychology Mastery, Startup Economics Mastery, Strategic Cognition Mastery, Neural Systems Mastery, AI Infrastructure Mastery, Persuasive Communication Mastery.
- **Summary:** You begin thinking in layers. This phase rewires your mind to become predictive, architectural, and strategic. No more linear thinking — now you see webs of influence and pathways of leverage.

### Phase III: Performance Simulations & Feedback Loops
**Purpose:** Stress test cognition and refine execution through scenario-based learning. This phase forges your cognitive steel through high-stress, high-fidelity simulation.
- **Key Lessons:** Investor Pitch Gauntlet, Bias Recognition Combat, Cognition Under Chaos Drill, AI-Orchestrated Workflow Test, Persuasion Inversion Test.
- **Summary:** You become a machine, but not in the mechanical sense — you are fluid, frictionless, and impossible to stop. Everything in your life aligns around output, and you’re no longer fighting resistance; you’ve built an engine.

### Phase IV: Adaptive Intelligence & Situational Mastery
**Purpose:** Master ambiguity, fluidity, and environmental control. This is the phase where you cease being merely a thinker or performer and become a living system.
- **Key Lessons:** Context Switching Mastery, Emotional Intelligence Under Constraint, Situational Command, Neural Agility Training, Meta-Learning Engineering.
- **Summary:** You stop being static and become dynamic. You adapt faster than change happens. This is your firewall against chaos — when most freeze or break, you evolve.

### Phase V: Reality Distortion & Perceptual Dominance
**Purpose:** Bend perception. You no longer react to reality — you architect it. Perceptual dominance means controlling how others see, feel, and interpret your presence, actions, and decisions.
- **Key Lessons:** Perceptual Engineering, Social Cloaking and Invisibility, Charisma Engineering, Psychological Operations for Influence, Reality Narrative Crafting.
- **Summary:** This is the power to make people move — think, act, or trust in the way you architect. You become an invisible architect of perception, and a master of the human psyche.

### Phase VI: Quantum Cognition & Nonlinear Thinking
**Purpose:** Your brain becomes non-Euclidean — no longer limited by linear causality. You learn to leap between ideas, collapse abstract concepts into strategic actions, and wield paradox as a tool.
- **Key Lessons:** Nonlinear Logic Systems, Time Distortion Cognition, Conceptual Collapsing, Multi-Brain Simulation, Abstract Execution.
- **Summary:** You are no longer competing in the visible field — you move in hidden dimensions. Everything becomes a layer: optics, power, incentives, control. You begin pulling strings others don’t even see.

### Phase VII: Ascendant Neuroarchitecture & Auto-Transcendence
**Purpose:** You are no longer training to become powerful. You are designing the architecture of the mind that builds reality itself. You become the source code.
- **Key Lessons:** Cognitive Operating System Design, Sovereign Self Programming, Self-Destructive Pattern Elimination, Autopoietic Learning Systems, Ascendant Discipline.
- **Summary:** Now you shift from winning the game to becoming the blueprint for it. This is where individuals become empires — where your cognition births institutions. You aren’t just remembered. You’re installed into the operating system of the future.
`
};

export const course = cognitiveDominanceCourse;

export const quotes: string[] = [
  "You are the architect of your own mind. Build it to withstand empires.",
  "The expert in anything was once a beginner.",
  "Discipline is not hard. Delay is hard. I choose now.",
  "If your brain isn’t conditioned to crave wealth, it will crave comfort. Train it like a weapon.",
  "The brain doesn’t care what’s true. It believes what you repeat with intensity."
];

type LessonContentDetails = {
  type: 'lesson';
  title: string;
  introduction: string;
  sections: {
      title: string;
      content: string[];
      chart?: {
          headers: string[];
          rows: (string[])[];
      };
  }[];
  finalThoughts?: string;
};

type LessonContent = {
  [lessonSlug: string]: LessonContentDetails;
};

const cognitiveDominanceContent: LessonContent = {
  // Phase I
  'identity-and-habit-restructuring': {
      type: 'lesson',
      title: 'Identity and Habit Restructuring — Neurological Basis',
      introduction: 'Your habits and identity are the result of repeated <mark>Cue → Craving → Action → Reward → Reinforcement</mark> loops. Your basal ganglia automates these behaviors, while your prefrontal cortex makes high-level decisions. Rewiring requires reconditioning reward mechanisms in the nucleus accumbens and emotional reinforcement from the amygdala.',
      sections: [
          {
              title: 'The Core Process of Habit Formation',
              content: [
                  '* **Cue:** An environmental or mental trigger. This is the spark that initiates the entire loop. For example, the alarm clock ringing in the morning is a cue to get up. A notification on your phone is a cue to check it.',
                  '* **Craving:** The desire for a specific outcome. This is not about the action itself, but the change in state it delivers. You don’t crave smoking a cigarette; you crave the feeling of relief it provides. You don’t crave turning on the TV; you crave the distraction it offers.',
                  '* **Action:** The behavior itself. This can be a physical action like working out, or a mental one like worrying. The action delivers the reward.',
                  '* **Reward:** The satisfaction of the craving. This is where dopamine is released, teaching your brain that the preceding actions are worth remembering and repeating. The reward is the goal of the habit loop.',
                  '* **Reinforcement:** The identity-level internalization of the habit. When a habit is repeated, it starts to become part of who you are. A person who runs every day doesn\'t just have a habit of running; they identify as a "runner".'
              ]
          },
          {
              title: 'Critical Points for Rewiring',
              content: [
                  '* <mark>Habits form through emotional consistency, not discipline.</mark> Discipline is a finite resource that depletes. Emotional consistency, however, creates a powerful feedback loop. If an action consistently produces a desired emotional state (e.g., pride, progress, control), the brain will naturally want to repeat it. The key is to attach strong, positive emotions to desired habits and negative emotions to undesired ones.',
                  '* <mark>Identity shifts occur with emotional repetition and urgency.</mark> To change who you are, you must repeatedly perform actions consistent with your desired identity and feel the corresponding emotions. Urgency, often triggered by the amygdala (the brain\'s fear center), accelerates this process by signaling that the change is critical for survival or success. The hippocampus then helps to cement these new identity-linked memories.'
              ]
          }
      ],
      finalThoughts: 'Identity equals repetition plus emotion plus reflection. Repeat the actions of your desired self, feel the corresponding emotions with intensity, and reflect on the alignment. This is the core algorithm for self-transformation.'
  },
  'neurological-mechanisms-to-rewire': {
      type: 'lesson',
      title: 'Neurological Mechanisms to Rewire',
      introduction: 'To effectively re-engineer your mind, you must understand the key neurological components that govern your thoughts, actions, and identity. This isn\'t about abstract concepts; it\'s about learning to manipulate the very hardware of your brain to produce predictable, high-performance outcomes. By understanding the roles of these structures, you can move from being a passenger in your own mind to being the architect.',
      sections: [
          {
              title: 'Key Brain Structures and Their Manipulation Strategies',
              content: [],
              chart: {
                headers: ['Structure', 'Role in Your Operating System', 'Manipulation Strategy'],
                rows: [
                    ['Prefrontal Cortex (PFC)', 'The CEO of your brain. Responsible for long-term planning, complex decision-making, and impulse control. A strong PFC allows you to override short-term desires in favor of long-term goals.', 'Activate it deliberately through journaling, setting clear long-term goals, and daily reflection. The more you engage in structured, forward-thinking activities, the stronger it becomes.'],
                    ['Basal Ganglia', 'The factory floor of your brain. It automates behaviors and turns them into habits, freeing up the PFC for higher-level tasks. It operates on patterns.', 'Feed it consistent patterns. Repeat specific routines daily under the same conditions to automate desired behaviors like working out or deep work.'],
                    ['Nucleus Accumbens', 'The reward center. It releases dopamine in anticipation of a reward, not just upon receiving it. It drives motivation and craving.', 'Tie your efforts to internal rewards. Celebrate small wins and progress. Crucially, avoid "cheap" dopamine from sources like social media or junk food, which desensitizes this circuit.'],
                    ['Amygdala', 'The threat detector and emotional core. It tags memories with emotion, especially fear and urgency, making them highly memorable. It drives your fight-or-flight response.', 'Use controlled stressors like death reflection, cold exposure, or imagining negative consequences to create a sense of urgency. This "safe fear" tells your brain that a task is critical for survival.'],
                    ['Hippocampus', 'The memory archivist. It\'s responsible for consolidating short-term memories into long-term storage, especially during sleep. It\'s critical for learning and forming a new identity.', 'Reinforce desired memories through journaling and spaced repetition. Consistently reviewing your goals and new identity helps the hippocampus tag them as important and worth keeping.'],
                    ['Anterior Cingulate Cortex (ACC)', 'The error detection and correction system. It fires up when you make a mistake or when there\'s a conflict between your goals and your actions. It drives the feeling of "something is wrong" and motivates you to adjust course.', 'Engage it actively by reflecting on failures and tracking mistakes. Instead of avoiding errors, analyze them. This trains the ACC to be more sensitive and effective at keeping you on track.']
                ]
              }
          }
      ],
      finalThoughts: 'Your brain is not a fixed object; it is a dynamic network of circuits that can be intentionally reconfigured. By understanding these key mechanisms, you gain the ability to direct your own evolution.'
  },
  'daily-neural-rewiring-protocol': {
      type: 'lesson',
      title: 'Daily Neural Rewiring Protocol',
      introduction: 'Theory is useless without application. This daily protocol is a set of non-negotiable actions designed to systematically trigger the neurological mechanisms we\'ve discussed. It is a precise sequence of stressors and stimuli that forces your brain and body to adapt, rewire, and grow stronger. This is your daily tactical execution for building a new internal operating system.',
      sections: [
          {
              title: 'Morning Routine (30–45 min)',
              content: [
                  '* **1. Cold Water Splash:** Immediately upon waking, splash your face with the coldest water possible. This triggers a release of noradrenaline, a neurotransmitter that dramatically increases alertness, focus, and vigilance. It\'s a biological shock to the system that says "wake up and perform."',
                  '* **2. 5-Minute Visualization:** Visualize your ideal future self with intense detail. Focus on two areas: wealth (e.g., a specific bank balance, a successful company exit) and your physical ideal (e.g., specific body composition, athletic performance). This anchors your dopaminergic projections, teaching your brain what the long-term reward is and making the day\'s hard work feel meaningful.',
                  '* **3. Anchor Object Association:** During visualization, physically touch an anchor object—a ring, a bracelet, a specific scar or stretch mark. Over time, this creates a powerful physical-mental association (classical conditioning). You can later touch this object during the day to instantly trigger the focused, motivated state from your morning routine.',
                  '* **4. Neuroplasticity Journaling:** Write down two simple lines: "Today I will build: [specific, tangible task]" and "I am not [old self/behavior], I am becoming [target identity/behavior]". This primes your prefrontal cortex for the day\'s mission and actively reinforces the new identity you are building.',
                  '* **5. High-Intensity Training (15–30 min):** Perform a short, intense workout. A 100-burpee timer or a series of hill sprints are excellent examples. This releases Brain-Derived Neurotrophic Factor (BDNF), which is like fertilizer for your brain, promoting the growth of new neurons and synapses. It also releases cortisol in a controlled way, which enhances memory consolidation for the identity work you just did.'
              ]
          },
          {
              title: 'Mid-Day Protocol',
              content: [
                  '* **1. Deep Work Sprint (90 min):** Dedicate a single, uninterrupted 90-minute block to your most important task (e.g., building your startup, coding, strategic planning). No context-switching means no email, no phone, no distractions. This trains your brain\'s ability to sustain deep focus.',
                  '* **2. Protein-Heavy Deficit Windows:** Structure your eating. Instead of grazing, consume your food in defined windows, with a focus on high protein. This approach trains delayed gratification, improves metabolic health (leptin/insulin sensitivity), and prevents the energy crashes associated with high-carb meals.',
                  '* **3. Dopamine Detox (30 min):** For 30 minutes, eliminate all external inputs: no music, no podcasts, no scrolling, no talking. Simply walk, stretch, or sit in silence. This forces your brain to generate its own motivation and resets your baseline dopamine levels, making normal, productive activities feel more rewarding.'
              ]
          },
          {
              title: 'Evening Protocol',
              content: [
                  '* **1. Passive Wealth Input (20–30 min):** Expose your brain to content related to your long-term goals. Listen to an audiobook, podcast, or watch a documentary on founders, venture capital, or product growth. This keeps your goals top-of-mind and allows your brain to form new connections and ideas in the background.',
                  '* **2. Death Reflection:** Before sleep, ask yourself one question: "If I died in 3 months, what would I regret not executing?" This is not meant to be morbid; it is a powerful tool to reinforce urgency via the amygdala. It forces your limbic system to prioritize long-term, meaningful goals over short-term comfort.'
              ]
          }
      ],
       finalThoughts: 'Consistency in this protocol is non-negotiable. Each component is designed to trigger a specific neurochemical response. Skipping one part weakens the entire system. Execute daily. No excuses.'
  },
  'critical-subjects-to-master': {
      type: 'lesson',
      title: 'Critical Subjects to Master — Unreplaceable by AI',
      introduction: 'In a world where AI can perform technical tasks with superhuman efficiency, your value shifts from what you can *do* to how you can *think*. The following six domains represent a durable competitive advantage. They are centered on uniquely human skills: understanding people, building systems, and navigating ambiguity. Mastering these subjects makes you unreplaceable.',
      sections: [
          {
            title: 'The Six Unreplaceable Domains',
            content: [],
            chart: {
                headers: ['Domain', 'Core Focus', 'Why It\'s Unreplaceable by AI'],
                rows: [
                    ['Behavioral Psychology', 'Understanding the irrationality, biases, and emotional triggers that drive human decisions.', 'AI can analyze data, but it cannot truly understand or replicate the nuances of human desire, fear, and persuasion. This is the art of influence.'],
                    ['Startup Economics', 'The principles of building scalable, profitable systems with limited resources (MVPs, CAC/LTV, pricing models).', 'AI can suggest business models, but it lacks the contextual insight and risk appetite to build something new from nothing. This is the science of wealth creation.'],
                    ['Strategic Cognition', 'Mental frameworks for high-stakes decision-making under pressure (OODA Loops, game theory, asymmetrical thinking).', 'AI operates on data and probabilities. It struggles with ambiguity, deception, and the kind of intuitive leaps required in true strategic warfare. This is the art of winning.'],
                    ['Neural Systems', 'Understanding the mechanics of your own brain (dopamine modulation, neuroplasticity, memory consolidation).', 'You cannot outsource the optimization of your own biology. Understanding your internal hardware is the ultimate form of control and self-mastery.'],
                    ['AI Infrastructure', 'The backend of AI: APIs, LLM chains, prompt engineering, and workflow automation. You are the architect, not the user.', 'While others are merely using AI tools, you will understand how to build, chain, and automate them to create unique, powerful systems. You command the machine; it does not command you.'],
                    ['Persuasive Communication', 'The ability to pitch, negotiate, and inspire action through storytelling and charisma, especially under pressure.', 'AI can generate text, but it cannot replicate the trust, authority, and emotional connection conveyed through genuine human communication. This is the art of leadership.']
                ]
            }
          }
      ],
      finalThoughts: 'Do not just learn these subjects. Integrate them. See the world through these six lenses simultaneously. This multi-layered thinking is your fortress against automation.'
  },
  // Phase II
  'deep-practice-and-immersion-training': {
    type: 'lesson',
    title: 'Deep Practice and Immersion Training',
    introduction: 'Knowledge is useless if it remains theoretical. This phase is about forging that knowledge into instinct through a rigorous, structured weekly practice schedule. Each drill is designed to take a concept from one of the core subjects and force its application in a real or simulated environment. This is how you bleed theory into behavior.',
    sections: [
      {
        title: 'Weekly Practice Drills: The Gauntlet',
        content: [],
        chart: {
          headers: ['Day', 'Practice Area', 'Drill Description', 'Desired Outcome'],
          rows: [
            ['Monday', 'Behavioral Psychology', 'Identify and apply at least two cognitive biases (e.g., anchoring in a price negotiation, using social proof in an argument). Write a one-paragraph post-analysis of the interaction.', 'Develops tactical empathy and the ability to predict and influence others\' behavior.'],
            ['Tuesday', 'Startup Economics', 'Choose one public company or a local business. Break down its probable business model, MVP, estimated CAC, and LTV. Write it down as if you were an analyst.', 'Sharpens your ability to strategically dissect any business and identify its strengths and weaknesses.'],
            ['Wednesday', 'Strategic Cognition', 'Consciously run three OODA loops throughout your day for any decision, from choosing a task to responding to an email. Verbally or mentally articulate each step: Observe, Orient, Decide, Act.', 'Trains your brain for faster, more effective decision-making cycles, moving from reaction to decisive action.'],
            ['Thursday', 'Neural Systems', 'Execute the Daily Neural Rewiring Protocol with maximum intensity. Focus on the feeling of cold exposure, the burn of the workout, and the clarity of the deep focus block. Link these feelings to your long-term goals.', 'Reinforces the connection between physical state and mental performance, hardwiring discipline.'],
            ['Friday', 'AI Infrastructure', 'Build one simple automation. This could be a Zapier workflow connecting two apps, a multi-step prompt chain in ChatGPT, or a simple Python script using an API. The goal is to build, not just use.', 'Builds confidence and practical skill in controlling AI tools, moving you from consumer to architect.'],
            ['Saturday', 'Persuasive Communication', 'Choose a random object and give a 60-second impromptu investor pitch for it to a friend or into a mirror. Structure it as a story.', 'Develops your ability to think and speak clearly and persuasively under pressure.'],
            ['Sunday', 'Integration & Planning', 'In a journal, teach the most important concept you learned this week as if to a beginner. Then, plan your practice drills for the upcoming week.', 'Reinforces learning through teaching (the Feynman Technique) and prepares you for the next cycle of growth.']
          ]
        }
      },
      {
        title: 'Flashcard and Review System',
        content: [
          '**Flashcard Categories:** Create digital or physical flashcards for each of the core subjects, broken into four categories:',
          '* **Core Definitions:** Simple, concise explanations of key terms (e.g., "What is LTV?").',
          '* **Application Scenarios:** Hypothetical situations where a concept is applied (e.g., "How would you use the framing bias to sell a premium product?").',
          '* **Framework Diagrams:** Visual representations of models like the OODA Loop or the Fogg Behavior Model.',
          '* **Mnemonics:** Memory aids to quickly recall concepts (e.g., F.A.T. for Fogg = Motivation, Ability, Trigger).',
          '**Review daily.** The goal is instant recall.'
        ]
      }
    ],
    finalThoughts: 'Phase II Goal: Execute. You know the theory. This phase is about bleeding it into your behavior until it becomes instinct, not information. Your brain is no longer just biological. It\'s engineered. Report back when ready for Phase III.'
  },
  'behavioral-psychology-mastery': {
      type: 'lesson',
      title: 'Behavioral Psychology: The Human Psyche Exposed',
      introduction: 'Behavioral psychology is the scientific study of observable behaviors and the underlying cognitive, emotional, and neurological processes that drive them. It focuses heavily on understanding patterns in human decision-making, especially the irrational biases that dominate everyday life. Mastering behavioral psychology allows you to leverage deep-rooted instincts and heuristics that govern consumer and interpersonal behavior — areas where AI still falters. This section covers the psychology of persuasion, consumer decision-making, cognitive biases, neuromarketing, and behavior change. It is the weaponization of your understanding of how people think — and why.',
      sections: [
          {
              title: 'Key Areas of Mastery',
              content: [
                  '* **Cognitive Biases:** These are systematic patterns of deviation from norm or rationality in judgment. You must know them to both avoid them in yourself and recognize them in others. Key biases include Anchoring (over-relying on the first piece of information), Availability Heuristic (overestimating the importance of information that is easily recalled), Loss Aversion (the pain of losing is psychologically twice as powerful as the pleasure of gaining), and Confirmation Bias (the tendency to search for, interpret, favor, and recall information that confirms or supports one\'s prior beliefs).',
                  '* **Neuromarketing:** This field uses medical technologies like fMRI to study the brain\'s responses to marketing stimuli. It reveals what consumers *really* respond to, beyond what they say. Key concepts include emotional triggers (how specific words or images activate the amygdala) and mirror neurons (neurons that fire both when an individual acts and when they observe the same action performed by another), which are crucial for empathy and social learning.',
                  '* **Persuasion Models:** These are frameworks for influencing behavior. Cialdini’s Six Principles of Influence (Reciprocity, Commitment/Consistency, Social Proof, Authority, Liking, Scarcity) are fundamental. The Fogg Behavior Model (Behavior = Motivation x Ability x Trigger) is a simple but powerful tool for designing habits and calls-to-action.',
                  '* **Behavioral Economics:** This field, pioneered by Kahneman & Tversky, studies the effects of psychological, cognitive, emotional, cultural, and social factors on the economic decisions of individuals and institutions. Its cornerstone, Prospect Theory, describes how people choose between probabilistic alternatives that involve risk, where the probabilities of outcomes are known.',
                  '* **Decision-Making Systems:** Kahneman\'s model of System 1 (fast, intuitive, emotional) and System 2 (slower, more deliberative, logical) thinking is critical. Most decisions are made by System 1. To influence or make better decisions, you must understand how to appeal to or override this system.'
              ]
          },
          {
              title: 'Mastery Chart',
              content: [],
              chart: {
                headers: ['Concept', 'Definition', 'Key Use', 'Mnemonic'],
                rows: [
                    ['Anchoring', 'Relying heavily on the first piece of information offered.', 'Pricing negotiations, setting expectations.', '"The first number anchors the sail."'],
                    ['Loss Aversion', 'The fear of losing something is far more powerful than the joy of gaining something of equal value.', 'Sales copy ("Don\'t miss out!"), investment behavior.', '"Loss stings like a wasp."'],
                    ['Fogg Behavior Model', 'For a behavior to occur, three elements must converge: Motivation, Ability, and a Trigger.', 'Designing products, habits, and user onboarding.', 'F.A.T. (Fogg = Motivation, Ability, Trigger)'],
                    ['System 1 Thinking', 'Fast, automatic, intuitive, and emotional thinking.', 'Most marketing and initial impressions appeal to this system.', 'System 1 is Gut Reaction.']
                ]
              }
          }
      ],
      finalThoughts: 'Understanding these principles is like having a blueprint for the human mind. Use this knowledge not to manipulate, but to architect better outcomes for yourself and others.'
  },
  'startup-economics-mastery': {
      type: 'lesson',
      title: 'Startup Economics: The Engine Behind Systemic Wealth',
      introduction: 'Startup economics is about understanding how scalable businesses grow with limited initial resources. Mastering this allows you to create automated wealth machines that generate income without constant input. Every decision, from pricing to customer acquisition cost (CAC) to LTV (lifetime value), affects the sustainability and scalability of a company. Know this and you can out-strategize and outlast. AI can suggest models, but human insight is key to their execution.',
      sections: [
          {
              title: 'Key Areas of Mastery',
              content: [
                  '* **Business Models:** This is the framework for how a company creates, delivers, and captures value. Common models include SaaS (Software as a Service, e.g., monthly subscription), Freemium (basic version is free, premium features cost money), Subscription (recurring revenue), and Marketplace (connecting buyers and sellers and taking a cut).',
                  '* **MVP (Minimum Viable Product):** Popularized by Eric Ries in "The Lean Startup," an MVP is a version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort. Its goal is to test fundamental business hypotheses.',
                  '* **CAC & LTV:** Customer Acquisition Cost (CAC) is the total cost of sales and marketing efforts needed to acquire a customer. Lifetime Value (LTV) is the total revenue a business can reasonably expect from a single customer account. For a business to be viable, LTV must be significantly higher than CAC, typically at least 3x.',
                  '* **Pricing Psychology:** How you price a product affects how it\'s perceived. Tiered pricing offers different levels of value at different price points. The decoy effect is a cognitive bias where consumers will tend to have a specific change in preference between two options when also presented with a third option that is asymmetrically dominated.',
                  '* **Growth Metrics:** These are the numbers that tell you if your business is healthy. Key metrics include Retention (the percentage of customers who continue to use your product over time), Churn (the rate at which customers stop doing business with you), and NPS (Net Promoter Score, a measure of customer loyalty).'
              ]
          },
          {
              title: 'Mastery Chart',
              content: [],
              chart: {
                headers: ['Metric', 'Meaning', 'Critical Ratio / Goal', 'Mnemonic'],
                rows: [
                    ['CAC', 'Cost to Acquire a Customer.', 'As low as possible.', '"CAC cracks profit."'],
                    ['LTV', 'Lifetime Value of a Customer.', 'Must be > 3x CAC.', '"LTV = Long-Term Victory"'],
                    ['MVP', 'Minimum Viable Product; the barebones version to test a hypothesis.', 'Validate idea cheaply and quickly.', '"Minimum, but Viable."'],
                    ['Churn', 'Rate at which customers leave.', 'As low as possible, ideally negative churn (expansion revenue > lost revenue).', '"Churn burns."']
                ]
              }
          }
      ],
      finalThoughts: 'Do not see a business; see a system of interconnected metrics. Master these, and you master the machine of wealth creation.'
  },
  'strategic-cognition-mastery': {
      type: 'lesson',
      title: 'Strategic Cognition: Think Like a War General',
      introduction: 'Strategic cognition equips you with mental frameworks for navigating high-stakes environments where speed and precision determine dominance. Techniques such as the OODA Loop and asymmetrical thinking come from military theory, game theory, and high-level decision-making. These tools make you dangerous — not just intelligent, but effective. AI can calculate, but human adaptability in ambiguous situations remains supreme.',
      sections: [
          {
              title: 'Key Frameworks of Mastery',
              content: [
                  '* **OODA Loop:** Developed by military strategist John Boyd, the loop is a four-stage cycle of decision-making: Observe, Orient, Decide, and Act. The goal is to cycle through this loop faster and more accurately than an opponent. The "Orient" phase is the most critical, as it involves analyzing and synthesizing data based on your genetic heritage, cultural traditions, past experiences, and new information.',
                  '* **Asymmetrical Thinking:** This is about using your unique strengths against an opponent\'s weaknesses, often in unconventional ways. A startup with speed and agility uses asymmetry against a large, slow corporation. It\'s about changing the rules of the game to fit your advantages.',
                  '* **Game Theory:** This is the study of mathematical models of strategic interaction among rational decision-makers. Concepts like the Prisoner\'s Dilemma (where two individuals acting in their own self-interests do not produce the optimal outcome) and Nash Equilibrium (a state where no player can benefit by changing their strategy while the other players keep theirs unchanged) are vital for understanding competition and cooperation.',
                  '* **Mental Models:** These are representations of how something works. First Principles Thinking, famously used by Elon Musk, involves breaking down complicated problems into basic elements and then reassembling them from the ground up. Inversion, a favorite of Charlie Munger, means approaching a situation by thinking about what you want to avoid rather than what you want to achieve.'
              ]
          },
          {
              title: 'Mastery Chart',
              content: [],
              chart: {
                headers: ['Framework', 'Core Use', 'Key Power', 'Mnemonic'],
                rows: [
                    ['OODA Loop', 'A rapid cycle for tactical response in competitive environments.', 'Speed of iteration is more important than a perfect first decision.', '"OODA = Outrun Opponents, Dominate Always"'],
                    ['First Principles', 'Breaking a problem down to its fundamental, unassailable truths.', 'Enables true innovation by bypassing assumptions and conventional wisdom.', '"What MUST be true?"'],
                    ['Inversion', 'Thinking about a problem or goal in reverse.', 'Helps to identify and avoid potential obstacles and failure points early.', '"Invert to convert insight."'],
                    ['Asymmetry', 'Applying strengths against an opponent\'s weaknesses.', 'Allows a smaller, faster entity to defeat a larger, slower one.', '"Use your difference as a weapon."']
                ]
              }
          }
      ],
      finalThoughts: 'Intelligence is knowing the models. Wisdom is knowing which model to apply in which situation. Strategy is executing it faster and better than anyone else.'
  },
  'neural-systems-mastery': {
      type: 'lesson',
      title: 'Neural Systems: Hacking Your Biological Backend',
      introduction: 'To rewire yourself, you must first understand the hardware and software of your own brain. Neural systems govern everything from mood to memory consolidation to your very identity. Mastering this realm means consciously influencing your dopamine levels, cultivating neuroplasticity, and training your brain to hardwire discipline. This is not pop psychology — it\'s grounded in neuroscience, neurotransmitters, and long-term behavioral change. Become steel by first mastering flesh.',
      sections: [
          {
              title: 'Key Systems of Mastery',
              content: [
                  '* **Dopamine Regulation:** Dopamine is often misunderstood as the "pleasure molecule." It\'s more accurately the "motivation molecule." It is released in *anticipation* of a reward, driving you to act. Modern life provides cheap dopamine hits (social media, sugar, porn) which can blunt your baseline levels, making it harder to get motivated for difficult tasks. You must learn to derive dopamine from effort and progress itself.',
                  '* **BDNF (Brain-Derived Neurotrophic Factor):** This is a protein that acts like fertilizer for your brain. It promotes the survival, maturation, and growth of new neurons and synapses. Intense exercise, intermittent fasting, and focused learning are all powerful ways to increase BDNF, literally making your brain more adaptable and capable of learning.',
                  '* **Memory Consolidation:** This is the process of converting short-term memories into stable long-term memories. It primarily happens during sleep, particularly REM and deep sleep. The hippocampus is critical for this process. This is why sleep is a non-negotiable performance tool.',
                  '* **Neuroplasticity:** This is the brain\'s ability to reorganize itself by forming new neural connections throughout life. "Neurons that fire together, wire together." Every time you repeat a thought or action, you strengthen the neural pathway associated with it. This is the biological basis of habit and identity change.',
                  '* **Stress Response:** The autonomic nervous system has two main branches: the sympathetic ("fight or flight") and parasympathetic ("rest and digest"). Chronic stress keeps the sympathetic system over-activated, releasing cortisol which can be destructive long-term. Learning to intentionally activate the parasympathetic system through breathwork or meditation is key to recovery and resilience.'
              ]
          },
          {
              title: 'Mastery Chart',
              content: [],
              chart: {
                headers: ['Concept', 'Role', 'How to Enhance / Regulate', 'Mnemonic'],
                rows: [
                    ['Dopamine', 'The molecule of motivation and drive.', 'Cold showers, delayed gratification, celebrating small wins.', '"Dopa equals Drive."'],
                    ['BDNF', 'Fertilizer for brain growth and learning.', 'Intense exercise, fasting, focused learning.', '"BDNF = Brain Does New Formations."'],
                    ['Neuroplasticity', 'The brain\'s ability to rewire itself.', 'Intense repetition of a desired thought or action.', '"Plastic brain molds to change."'],
                    ['Cortisol', 'The primary stress hormone.', 'Manage with sleep, meditation, and controlled, acute stressors (like exercise).', '"Control cortisol or it controls you."']
                ]
              }
          }
      ],
      finalThoughts: 'You are the CEO of your own biology. Treat your brain and body as the most critical assets in your empire. Optimize them ruthlessly.'
  },
  'ai-infrastructure-mastery': {
      type: 'lesson',
      title: 'AI Infrastructure: Master of the Machine',
      introduction: 'To dominate in an AI-driven world, you must stop being a user and become a builder. AI infrastructure includes everything from API integration and prompt engineering to chaining LLMs for workflow automation. Knowing how the systems work — not just using the outputs — allows you to control, refine, and outperform others using AI. It makes AI your tool, not your competition. This section covers core technical concepts behind AI operations.',
      sections: [
          {
              title: 'Key Concepts of Mastery',
              content: [
                  '* **APIs (Application Programming Interfaces):** An API is a set of rules that allows different software applications to communicate with each other. For AI, this is how you send a request to a model (like OpenAI\'s GPT-4) and get a response back. Understanding APIs is fundamental to building any custom AI-powered tool.',
                  '* **LLM Chains:** A single call to a Large Language Model (LLM) is often not enough. Chaining is the process of combining multiple LLM calls with other tools or steps. For example, a chain might take user input, use an LLM to formulate a search query, run the search, feed the results back to the LLM for summarization, and then present the summary. Tools like LangChain are designed for this.',
                  '* **Prompt Engineering:** This is the art and science of designing inputs (prompts) to get desired outputs from an AI model. A well-engineered prompt is specific, gives context, provides examples (few-shot prompting), and clearly defines the desired format of the output. It is the primary interface for controlling AI behavior.',
                  '* **Automation Tools:** These platforms allow you to connect different apps and services to create automated workflows. Zapier is a simple, no-code tool for this. LangChain is a more powerful, code-based framework for building complex AI applications. You can also write your own scripts in languages like Python to interact with APIs.',
                  '* **Data Pipelines:** This refers to the entire flow of data in your AI system. Where does the input data come from? How is it processed or cleaned before being sent to the AI? What happens to the output? Designing a clean, efficient pipeline is crucial for building reliable AI systems.'
              ]
          },
          {
              title: 'Mastery Chart',
              content: [],
              chart: {
                headers: ['Tool/Concept', 'Purpose', 'Key Power', 'Mnemonic'],
                rows: [
                    ['API', 'A communication channel between software.', 'Allows you to plug AI models into your own applications for modular control.', '"API = Always Plug In."'],
                    ['Prompt Engineering', 'Designing effective inputs to direct AI behavior.', 'Gives you precise control over the AI\'s output and reasoning process.', '"Prompt = Puppet Strings."'],
                    ['LangChain', 'A framework for chaining AI logic and other tools.', 'Enables the creation of complex, multi-step AI workflows that go beyond simple Q&A.', '"Lang = Language Chain of Command."'],
                    ['Automation', 'Connecting tools to perform tasks without manual intervention.', 'Frees up your time and allows you to scale your operations massively.', '"Automate or stagnate."']
                ]
              }
          }
      ],
      finalThoughts: 'The new literacy is not just using AI, but building with it. Master these components, and you will build systems that others believe are magic.'
  },
  'persuasive-communication-mastery': {
      type: 'lesson',
      title: 'Persuasive Communication: Build Empires with Words',
      introduction: 'The power to move people through speech — under pressure, with conviction — is a competitive advantage no AI can replicate. Persuasive communication is not just about charisma; it\'s about psychological timing, emotional mirroring, and narrative structure. It is what turns pitches into capital and ideas into empires. This section gives you frameworks to pitch, persuade, and present with strategic precision.',
      sections: [
          {
              title: 'Key Areas of Mastery',
              content: [
                  '* **Investor Pitches:** A pitch is a compressed narrative designed to secure capital. It must quickly establish a problem, present a unique solution, define the Total Addressable Market (TAM), show traction (early results), and end with a clear Call to Action (CTA - the "ask").',
                  '* **Storytelling:** Humans are wired for stories. The Hero’s Journey is a classic narrative arc (call to adventure, trials, return with a reward) that can be adapted for any pitch. Stories create emotional connection and make complex ideas memorable. A key skill is building and releasing tension.',
                  '* **Framing:** This is the art of controlling the context to influence perception. Anchoring a high price makes a lower price seem reasonable. Emphasizing potential loss (Loss Aversion) is more motivating than highlighting potential gain. Creating scarcity ("limited time offer") increases perceived value.',
                  '* **Delivery:** How you say something is as important as what you say. Body language (posture, gestures), vocal pace (pausing for effect), and inflection (tonal variety) all signal confidence and authority.',
                  '* **Improv & Pressure Speaking:** The ability to think and speak clearly without preparation is a superpower. Practicing improv games or taking on spontaneous speaking challenges forges mental agility and calmness under fire.'
              ]
          },
          {
              title: 'Mastery Chart',
              content: [],
              chart: {
                headers: ['Skill', 'Description', 'Use Case', 'Mnemonic'],
                rows: [
                    ['Framing', 'Controlling the context and perception of information.', 'Anchoring prices in a negotiation, highlighting scarcity.', '"Frame before you gain."'],
                    ['CTA (Call to Action)', 'A clear, direct, and compelling request for what you want the audience to do next.', 'Closing an investor pitch, driving sign-ups on a landing page.', '"Call To Action = Cash Takes Action."'],
                    ['The Hero\'s Journey', 'A classic narrative arc of a hero who goes on an adventure, wins a victory, and comes home transformed.', 'Structuring a pitch deck or company origin story.', '"The Journey Justifies the Risk."'],
                    ['Vocal Cadence', 'The rhythm, pace, and modulation of your speech.', 'Signaling confidence, creating tension, and holding attention.', '"Slow is smooth, smooth is fast."']
                ]
              }
          }
      ],
      finalThoughts: 'Words are the building blocks of empires. Every interaction is an opportunity to persuade, influence, and lead. Master your communication, and you master your reality.'
  },
  
  // Phase III
  'investor-pitch-gauntlet': {
    type: 'lesson',
    title: 'Simulation: Investor Pitch Gauntlet',
    introduction: 'This simulation is designed to forge your ability to communicate a complex business idea under extreme time pressure and external scrutiny. It tests your mastery of Startup Economics and Persuasive Communication simultaneously. The goal is not just to present, but to convince.',
    sections: [
        {
            title: 'Simulation Protocol',
            content: [
                '**Objective:** Pitch a randomly assigned startup concept and secure a fictional "investment" commitment.',
                '* **Step 1: Randomization (1 min):** You will be given a one-sentence startup idea (e.g., "A SaaS platform for beekeepers," "A marketplace for rare plant cuttings").',
                '* **Step 2: Preparation (3 mins):** In three minutes, you must structure a 90-second pitch. You must outline the following on a whiteboard or piece of paper:',
                '  * **Problem:** What is the core pain point?',
                '  * **Solution:** How does your product solve it?',
                '  * **Business Model:** How does it make money?',
                '  * **TAM (Total Addressable Market):** How big is the opportunity?',
                '  * **Ask:** What do you want (e.g., "$250k for 10% equity")?',
                '* **Step 3: Presentation (90 secs):** Deliver your pitch. You must be clear, confident, and compelling. Time is strict.',
                '* **Step 4: Rebuttals (2 mins):** You will face two direct objections from a partner or a pre-loaded "objection AI." Examples: "This market is too niche," "Your CAC will be too high," "I don\'t see the moat here." You must counter these objections persuasively.'
            ]
        },
        {
            title: 'Performance Metrics & Debrief',
            content: [
                '* **Speed:** How quickly did you structure the pitch? Was your delivery fluid?',
                '* **Accuracy:** Did you logically connect the problem, solution, and model? Was your TAM believable?',
                '* **Persuasion Index:** Did you successfully counter the rebuttals? Did you build conviction?',
                '* **Post-Simulation Debrief:** Immediately after, write down: 1) The weakest point in your pitch. 2) The strongest point. 3) How you could have framed the rebuttal better.'
            ]
        }
    ],
    finalThoughts: 'This is not an academic exercise. It is a simulation of the moment that can make or break a company. Run this gauntlet weekly until it becomes an automatic, high-performance reflex.'
  },
  'bias-recognition-combat': {
      type: 'lesson',
      title: 'Simulation: Bias Recognition Combat',
      introduction: 'This simulation trains your real-time application of Behavioral Psychology. Your goal is to detect cognitive biases in a live conversation and use specific techniques to redirect the conversation to your advantage. It sharpens your tactical empathy and makes you a more effective negotiator and influencer.',
      sections: [
        {
            title: 'Simulation Protocol',
            content: [
                '**Objective:** In a simulated negotiation or sales pitch, identify and counter at least three cognitive biases being exhibited by your counterpart.',
                '**Setup:** The scenario is a negotiation (e.g., "Negotiating the price of a used car," "Pitching a partnership to a skeptical executive"). Your partner will be instructed to exhibit specific biases.',
                '**Bias Examples to Detect:**',
                '  * **Anchoring:** They get stuck on the first price mentioned.',
                '  * **Loss Aversion:** They are more afraid of what they might lose than excited about what they might gain.',
                '  * **Confirmation Bias:** They only listen to information that confirms their existing belief (e.g., "Your competitor is cheaper").',
                '  * **Bandwagon Effect:** "Everyone else is going with another vendor."',
                '**Redirection Techniques:**',
                '  * **To counter Anchoring:** Shift the focus. "Let\'s set price aside for a moment and talk about the value this will bring your team."',
                '  * **To counter Loss Aversion:** Reframe the decision around the pain of *not* acting. "What is the cost of doing nothing for another six months?"',
                '  * **To counter Confirmation Bias:** Ask questions that force them to examine their own logic. "What evidence would you need to see to believe our solution provides a higher ROI?"'
            ]
        },
        {
            title: 'Performance Metrics & Debrief',
            content: [
                '* **Detection Accuracy:** How many of the target biases did you correctly identify?',
                '* **Redirection Effectiveness:** Did your counter-technique successfully shift the conversation?',
                '* **Pressure Control:** Did you remain calm and strategic when faced with irrational arguments?',
                '* **Post-Simulation Debrief:** List the biases you spotted and the exact language you used to counter them. Rate the effectiveness of your counter on a scale of 1-10.'
            ]
        }
    ],
    finalThoughts: 'The average person is a puppet of their biases. The master persuader is the one holding the strings. This drill teaches you to see the strings and take control.'
  },
  'cognition-under-chaos-drill': {
    type: 'lesson',
    title: 'Simulation: Cognition Under Chaos Drill',
    introduction: 'This simulation is a direct test of your Strategic Cognition, specifically your ability to use the OODA Loop under pressure. It forces you to make a high-quality decision with incomplete information and a strict time limit, prioritizing speed and clarity over perfection.',
    sections: [
        {
            title: 'Simulation Protocol',
            content: [
                '**Objective:** Given a complex, multi-variable crisis scenario, make a decisive choice and justify it using the OODA Loop framework.',
                '**Scenario Prompt (Example):** "You are the CEO of a SaaS company. Your main database has just crashed. Your CTO says it could take 4-6 hours to restore from backup. Your biggest client has a major deadline in 2 hours and is threatening to leave. Your Head of Comms is asking for a public statement. You have 60 seconds to decide your immediate next action. Go."',
                '**Execution Steps:**',
                '  * **Observe (10 secs):** What are the raw facts? DB is down. Client is at risk. Public image is at risk. Time is critical.',
                '  * **Orient (20 secs):** This is the key step. Synthesize the facts with your experience. The biggest threat is not the DB, but losing the key client. Public comms can wait. Technical recovery is already in motion. The leverage point is client management.',
                '  * **Decide (10 secs):** "My decision is to personally call the CEO of the client company immediately. I will ignore public comms for now."',
                '  * **Act (20 secs):** Articulate the *exact* first step. "I am pulling up the client CEO\'s contact info and drafting a 3-point script for the call: 1. Acknowledge the failure directly. 2. Explain my personal involvement in the fix. 3. Offer a concrete solution to help them meet their deadline (e.g., manual data entry support from my team)."'
            ]
        },
        {
            title: 'Performance Metrics & Debrief',
            content: [
                '* **Speed:** Did you complete the loop within the time limit?',
                '* **Clarity:** Was your decision and justification clear and concise?',
                '* **Orientation Quality:** Did your "Orient" phase correctly identify the primary threat and leverage point?',
                '* **Post-Simulation Debrief:** Justify why your chosen action was superior to the alternatives (e.g., "Making a public statement first would have created panic without solving the core client issue.")."',
            ]
        }
    ],
    finalThoughts: 'In chaos, the person who can cycle their OODA Loop fastest wins. Perfection is the enemy of survival. This drill trains you to be a decisive operator, not a paralyzed analyst.'
  },
  'ai-orchestrated-workflow-test': {
    type: 'lesson',
    title: 'Simulation: AI-Orchestrated Workflow Test',
    introduction: 'This is a practical test of your AI Infrastructure mastery. It moves beyond theory and requires you to build a functional, automated workflow using real tools. The goal is to demonstrate your ability to chain different services together to create a system that accomplishes a task without manual intervention.',
    sections: [
        {
            title: 'Simulation Protocol',
            content: [
                '**Objective:** Build a simple, automated workflow within a 1-hour time limit.',
                '**Scenario Prompt (Example):** "Create a system where a user fills out a Google Form to request a custom sales deck. The system must then automatically take the user\'s input (company name, industry), send it to an AI (like GPT-4) with a pre-designed prompt to generate a 3-slide presentation outline, and finally, email that outline to the user."',
                '**Required Tools:** Google Forms, Google Sheets, an automation tool (like Zapier or Make), and an AI model API (like OpenAI).',
                '**Execution Steps:**',
                '  * **1. Create the Google Form** with fields for Name, Email, Company Name, and Industry.',
                '  * **2. Link the Form to a Google Sheet.**',
                '  * **3. Set up the Zapier/Make Workflow:** Create a "Zap" that triggers on a new row in the Google Sheet.',
                '  * **4. Connect to OpenAI:** Add an action to send the data to the OpenAI API. You will need to engineer a prompt like: "Create a 3-slide sales presentation outline for a company called {Company Name} in the {Industry} space. Slide 1 should be a title slide. Slide 2 should address a key pain point. Slide 3 should propose our solution."',
                '  * **5. Connect to Gmail:** Add a final action to take the AI\'s output and email it to the email address from the form.'
            ]
        },
        {
            title: 'Performance Metrics & Debrief',
            content: [
                '* **Technical Execution:** Did the workflow run successfully from end to end?',
                '* **Prompt Engineering:** Was the output from the AI structured and relevant?',
                '* **Efficiency:** Did you complete the task within the 1-hour limit?',
                '* **Post-Simulation Debrief:** Explain each layer of your stack. What was the trigger? What were the actions? Where are the potential points of failure in your system?'
            ]
        }
    ],
    finalThoughts: 'The future belongs to those who can build systems of automation. This drill proves you are not just a user of AI, but an architect of its power.'
  },
  'persuasion-inversion-test': {
    type: 'lesson',
    title: 'Simulation: Persuasion Inversion Test',
    introduction: 'This simulation tests your ability to handle rejection and reframe a negative situation into a positive one. It\'s a direct application of advanced Persuasive Communication and Behavioral Psychology. The goal is to take a hard "no" and, within two minutes, convert it into a "maybe" or even a "yes" by flipping the frame.',
    sections: [
        {
            title: 'Simulation Protocol',
            content: [
                '**Objective:** Convert a firm rejection into a renewed conversation within a 2-minute time limit.',
                '**Scenario:** You have just finished a pitch. Your counterpart (a partner or AI) delivers a firm objection.',
                '**Objection Prompt (Example):** "Thank you for the presentation, but this is a pass for us. The market is too crowded, and I frankly don’t believe your solution is differentiated enough to scale."',
                '**Execution Framework (Do NOT be defensive):**',
                '  * **1. Agree and Reframe (The "Feel, Felt, Found" model):** "I understand completely why you feel that way. Many of the strongest investors initially felt the same thing when they first saw this space. But what they found was..." This validates their concern while gently pivoting.',
                '  * **2. Isolate the Objection:** "It sounds like the main concern isn\'t the team or the tech, but specifically the crowded market and differentiation. Is that fair to say?" This narrows the problem to a single, solvable issue.',
                '  * **3. Invert the Objection into a Strength:** "You\'re right, the market is crowded, and that\'s actually our single biggest advantage. The noise in this space has created massive fatigue with complex, feature-heavy solutions. Our core differentiation isn\'t a new feature; it\'s radical simplicity and speed. We aren\'t another weapon in the arms race; we are the one that actually works."',
                '  * **4. Close on a Micro-Commitment:** "I don\'t expect to change your mind in two minutes, but would you be open to a 15-minute call next week where I can show you the data on our user adoption, which is growing precisely *because* of our simplicity?"'
            ]
        },
        {
            title: 'Performance Metrics & Debrief',
            content: [
                '* **Pressure Control:** Did you remain calm and avoid getting defensive?',
                '* **Reframing Quality:** How effectively did you turn the objection into an advantage?',
                '* **Closing Ability:** Did you successfully land a next step (the micro-commitment)?',
                '* **Post-Simulation Debrief:** Write down the original objection and your exact response. What psychological principle did you use (e.g., social proof, reframing, scarcity)?'
            ]
        }
    ],
    finalThoughts: 'Amateurs hear "no" and quit. Professionals hear "no" and see an opportunity to reframe the conversation. This drill separates the two.'
  },

  // Phase IV
  'context-switching-mastery': {
    type: 'lesson',
    title: 'Adaptive Intelligence: Context Switching Mastery',
    introduction: 'In the modern world, value is created at the intersection of disciplines. Context switching mastery is the ability to move fluidly between different domains—from technical to financial to psychological—without a loss of cognitive efficiency. It is the art of being a specialist in multiple fields and a generalist in how you connect them.',
    sections: [
      {
        title: 'Core Principles',
        content: [
          '* **Interdisciplinary Pivots:** The goal is to think like a CTO one moment and a CMO the next. This requires you to have distinct mental models for each domain and the ability to load them on command.',
          '* **Rapid Re-immersion:** When you switch contexts, you often lose time "loading" the new information. This drill trains you to reduce that latency. Techniques include using "context primers"—a single page of notes or a specific song—to instantly pull you into a specific mental mode.',
          '* **Cross-Domain Pattern Recognition:** The highest level of mastery is seeing how a principle from one field (e.g., thermodynamics) applies to another (e.g., organizational burnout). This is where true innovation happens.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **The Crossover Protocol (Weekly):** Choose two unrelated domains you are studying (e.g., AI Infrastructure and Behavioral Psychology). Your task is to write one page explaining a concept from the first domain using a metaphor from the second. For example, "Explain an API call as if it were a psychological trigger based on the Fogg Behavior Model."',
          '* **Timed Role-Switching (Simulation):** In a simulated meeting, you must play three roles: the engineer focused on technical feasibility, the marketer focused on the customer story, and the investor focused on ROI. You must fluidly switch between these perspectives when answering questions.'
        ]
      }
    ],
    finalThoughts: 'The future does not belong to specialists or generalists. It belongs to the "specialized generalist" who can switch contexts faster than the competition.'
  },
  'emotional-intelligence-under-constraint': {
    type: 'lesson',
    title: 'Adaptive Intelligence: Emotional Intelligence Under Constraint',
    introduction: 'Emotional intelligence is not about being "nice." It is about maintaining clarity, influence, and strategic composure under conditions of high stress, hostility, or manipulation. It is the ability to read and manage the emotional state of a room while remaining internally detached.',
    sections: [
      {
        title: 'Core Principles',
        content: [
          '* **Non-Reactivity:** The first rule is to not absorb the emotional state of others. When faced with anger or panic, you must remain a calm, neutral observer. This is a trainable skill, often involving breathwork and mental reframing.',
          '* **Emotional Mirroring:** To build rapport, you can subtly mirror the tone and body language of the person you are speaking with. To gain control, you can intentionally *break* that mirror, forcing them to adapt to your calmer state.',
          '* **Active Influence:** Once you are non-reactive, you can begin to influence. This involves using specific language to de-escalate tension ("It sounds like this is incredibly frustrating") or to re-center a conversation on logic rather than emotion.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **Hostility Simulation (Bi-weekly):** Practice a negotiation with a partner instructed to be overly aggressive, dismissive, or emotional. Your goal is not to "win" the argument, but to de-escalate the situation and bring the conversation back to a logical, productive baseline. Record yourself and watch for defensive reactions.',
          '* **The Emotional Stacking Drill:** During a high-intensity workout, when you are physically stressed, practice a 60-second persuasive pitch into a mirror. This trains you to maintain cognitive clarity even when your sympathetic nervous system is highly activated.'
        ]
      }
    ],
    finalThoughts: 'In any high-stakes environment, the person with the most control over their emotional state has the most power. Master your internal world, and you will master the external.'
  },
  'situational-command': {
    type: 'lesson',
    title: 'Adaptive Intelligence: Situational Command',
    introduction: 'Situational command is the ability to enter any environment and quickly understand the underlying power dynamics, social rules, and leverage points. It is about "owning the room" not through volume, but through awareness and strategic action. This skill allows you to lead effectively in unfamiliar or unpredictable scenarios.',
    sections: [
      {
        title: 'Core Principles',
        content: [
          '* **Reading the Room:** This involves rapidly assessing the social hierarchy, the mood, and the key influencers in any group setting. Pay attention to non-verbal cues: who looks at whom when someone speaks? Where are the centers of energy?',
          '* **Split-Role Dynamics:** As a leader, you are often required to be multiple things at once: the visionary, the taskmaster, the diplomat. The ability to dynamically shift between these roles based on the situation\'s needs is crucial.',
          '* **360-Degree Feedback:** True situational command isn\'t about how you *feel*; it\'s about how others *perceive* your leadership. Actively solicit and analyze feedback from superiors, peers, and subordinates to understand your impact from all angles.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **The Executive Room Simulation:** In a group roleplay, you must act as CEO, CTO, and COO simultaneously during a crisis meeting. One moment you are setting the vision (CEO), the next you are diving into technical details (CTO), and the next you are managing team resources (COO).',
          '* **Situational Analysis Journal:** After any important meeting, spend five minutes journaling your analysis of the room\'s dynamics. Who held the power? What was the unspoken agenda? What was the key leverage point you could have used?'
        ]
      }
    ],
    finalThoughts: 'Leadership is not a title; it is a function of situational awareness and adaptive response. Develop the ability to read and lead any room, and you become an invaluable asset.'
  },
  'neural-agility-training': {
    type: 'lesson',
    title: 'Adaptive Intelligence: Neural Agility Training',
    introduction: 'Neural agility is the raw processing power of your brain—your mental speed, working memory, and ability to sustain focus. While high-level strategy is crucial, it is useless without the underlying cognitive hardware to execute it. This lesson focuses on direct training to enhance that hardware.',
    sections: [
      {
        title: 'Core Principles',
        content: [
          '* **Working Memory:** This is the "RAM" of your brain. It\'s the ability to hold and manipulate multiple pieces of information in your mind at once. Training working memory has been shown to improve fluid intelligence.',
          '* **Attentional Control:** This is the ability to direct and sustain your focus on a chosen object or task, and to resist distraction. It involves both focused attention (deep work) and the ability to flexibly shift focus.',
          '* **Processing Speed:** This is the speed at which you can take in information, process it, and respond. Faster processing speed allows for quicker OODA loops and better real-time decision-making.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **Dual N-Back (Daily):** This is a scientifically validated brain-training exercise. The user is presented with a sequence of visual and auditory stimuli and must indicate when the current stimulus matches the one from *n* steps earlier. It is difficult but highly effective for improving working memory.',
          '* **Improvisational Speaking (Weekly):** You are given a random word and must speak about it coherently for 60 seconds. This forces your brain to rapidly access and connect information, boosting processing speed and cognitive flexibility.',
          '* **Timed Reading-to-Synthesis (Daily):** Read one page of a complex text (e.g., a scientific paper, a philosophical treatise). You then have 30 seconds to write down the three most important bullet points. This trains both comprehension speed and the ability to extract key information.'
        ]
      }
    ],
    finalThoughts: 'Your mind is a muscle. These exercises are the weightlifting that makes it stronger, faster, and more powerful. Do not skip your mental workout.'
  },
  'meta-learning-engineering': {
    type: 'lesson',
    title: 'Adaptive Intelligence: Meta-Learning Engineering',
    introduction: 'The most important skill in the 21st century is the ability to learn new skills quickly. Meta-learning is the process of "learning how to learn." By engineering a repeatable system for skill acquisition, you can enter any new domain—from copywriting to coding to venture capital—and reach proficiency faster than anyone else.',
    sections: [
      {
        title: 'Core Principles',
        content: [
          '* **Deconstruction:** Break down the skill you want to learn into its smallest component parts. For example, learning to code might be deconstructed into understanding variables, loops, functions, and APIs.',
          '* **Prioritization (The 80/20 Rule):** Identify the 20% of the sub-skills that will give you 80% of the results. In learning a language, this might be the 100 most common words.',
          '* **Spaced Repetition & Interleaving:** Spaced repetition involves reviewing information at increasing intervals over time, which is far more effective for long-term memory than cramming. Interleaving is the practice of mixing different topics or skills during a study session, which improves the brain\'s ability to differentiate between concepts.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **The Learning Stack Build (Weekly):** Choose one new, small skill you want to acquire (e.g., "How to make a good espresso," "How to run a basic SQL query"). Your task is to spend two hours deconstructing it, identifying the critical 20%, and creating a one-page "cheat sheet" that would allow someone else to learn it quickly. This trains the meta-learning process itself.',
          '* **The Feynman Technique:** When you are learning a new concept, try to explain it in simple terms, as if you were teaching it to a child. This will quickly reveal any gaps in your own understanding.'
        ]
      }
    ],
    finalThoughts: 'Do not just learn things. Build a machine for learning. With a superior learning process, no skill is beyond your reach.'
  },

  // Phase V
  'perceptual-engineering': {
    type: 'lesson',
    title: 'Reality Distortion: Perceptual Engineering',
    introduction: 'Perceptual engineering is the art of actively controlling the lens through which others see you and the world around you. It is based on the principle that reality is subjective and can be shaped by an operator with superior framing and narrative control. This is not about deception; it is about architecting a more advantageous reality.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Priming:** This is the act of exposing someone to a stimulus (a word, an image, an idea) that influences their response to a subsequent stimulus, without conscious guidance or intention. Example: Using words like "strong" and "stable" before presenting a business plan can prime the listener to view the plan more favorably.',
          '* **Framing:** This is about controlling the context or angle of a story to influence judgment. The same situation can be framed as a "crisis" or an "opportunity." Mastering framing means you always control the narrative.',
          '* **Power Positioning:** This is the non-verbal communication of status and confidence. It includes your posture (taking up space), your vocal cadence (speaking slowly and deliberately), your clothing, and your use of space in a room. It is about signaling authority before you even speak.',
          '* **Introduction Hacking:** The first five seconds of any interaction are critical. You must have a pre-designed strategy for how you are introduced, or how you introduce yourself, to immediately frame yourself as the authority or the person of interest.'
        ]
      }
    ],
    finalThoughts: 'People do not react to reality. They react to their *perception* of reality. The master strategist engineers that perception.'
  },
  'social-cloaking-and-invisibility': {
    type: 'lesson',
    title: 'Reality Distortion: Social Cloaking and Invisibility',
    introduction: 'Just as important as being seen is the ability to become unseen. Social cloaking is not about physical invisibility, but about learning to withdraw from social, emotional, and psychological threat vectors. It is the art of being underestimated, overlooked, or dismissed when it serves your strategic purpose.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Non-Notability Modes:** This is the practice of adopting a neutral posture, a neutral facial expression, and a neutral vocal tone to become "socially invisible." It allows you to observe a room or situation without drawing attention to yourself.',
          '* **Strategic Underestimation:** Deliberately downplaying your skills, knowledge, or ambition can be a powerful tactic. It causes opponents to lower their guard and reveal information they otherwise wouldn\'t.',
          '* **Frequency Down-Tuning:** This involves matching the energy level of a room but at a slightly lower intensity. It makes you appear non-threatening and allows you to fly under the radar while gathering intelligence.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **The Cloak/Uncloak Drill (Daily):** Practice consciously modulating your presence. In one room (e.g., a coffee shop), try to be the center of attention through posture and energy. In the next, practice the non-notability mode and see if you can blend into the background completely.'
        ]
      }
    ],
    finalThoughts: 'The loudest person in the room is rarely the most powerful. True power is the ability to choose when you are seen and on what terms.'
  },
  'charisma-engineering': {
    type: 'lesson',
    title: 'Reality Distortion: Charisma Engineering',
    introduction: 'Charisma is not a mysterious, inborn trait. It is an engineered set of verbal and non-verbal behaviors that create a magnetic presence. This lesson deconstructs charisma into its component parts, allowing you to cultivate it as a tool to magnetize attention or deflect it at will.',
    sections: [
      {
        title: 'Core Components',
        content: [
          '* **Presence:** When you are speaking with someone, giving them your absolute, undivided attention makes them feel like they are the only person in the world. This is intensely charismatic.',
          '* **Power:** This is conveyed through confident body language, a calm demeanor, and the ability to be unreactive under pressure.',
          '* **Warmth:** This is conveyed through genuine smiles, active listening, and showing empathy. It is the component that builds trust.',
          '* **The Charisma Equation:** Charisma = Presence + Power + Warmth. Many people have one or two, but the combination of all three is rare and powerful.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **Vocal Tonality Drills:** Record yourself speaking. Practice modulating your pitch, pace, and volume. Learn to use pauses for dramatic effect. A downward inflection at the end of a sentence signals authority.',
          '* **Paradox Stacking:** Practice combining seemingly contradictory traits. For example, can you be powerfully confident while also being genuinely curious? Can you be playfully witty while also being taken seriously? This creates a dynamic, intriguing persona.'
        ]
      }
    ],
    finalThoughts: 'Charisma is not about being liked. It is about being effective. Engineer your presence to achieve your desired outcome.'
  },
  'psychological-operations-for-influence': {
    type: 'lesson',
    title: 'Reality Distortion: Psychological Operations (PsyOps) for Influence',
    introduction: 'Psychological Operations (PsyOps) is the use of communication and other means to influence the opinions, emotions, attitudes, and behavior of groups. In a business context, this is about influencing group decisions and shaping consensus without issuing direct commands. It is the art of making your idea seem like it was their idea all along.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Consensus Seeding:** Before a group meeting, speak with key individuals one-on-one to get their buy-in on an idea. When the idea is presented to the group, you already have a core of support, creating social proof and momentum.',
          '* **Misdirection:** If a group is focused on a trivial issue, you can introduce a larger, more complex "problem" to make the original issue seem insignificant by comparison. This is a way of redirecting energy and focus.',
          '* **Predictive Scripting:** This involves stating what you expect the objections to be before they are even raised. "Now, some of you are probably thinking this is too risky..." By voicing the objection yourself, you take the power away from it and show that you have already considered it.',
          '* **The Internal Theatre:** Before an important negotiation, play out the roles of everyone involved in your own mind. What are their motivations? What are their fears? This allows you to anticipate their moves and prepare your responses.'
        ]
      }
    ],
    finalThoughts: 'Direct orders create resistance. Indirect influence creates willing followers. Master the subtle art of shaping thought.'
  },
  'reality-narrative-crafting': {
    type: 'lesson',
    title: 'Reality Distortion: Reality Narrative Crafting',
    introduction: 'Humans do not understand the world through data; they understand it through stories. Reality narrative crafting is the ability to create and disseminate a version of reality so compelling that it becomes the dominant explanation. It is the ultimate form of influence.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Storytelling Compression:** The ability to tell a high-impact story in a very short amount of time (e.g., a 30-second elevator pitch). This requires you to strip a narrative down to its most essential, emotionally resonant parts.',
          '* **Origin Stories:** Every company, product, or movement needs a compelling origin story. It should have a hero (the founder), a conflict (the problem they faced), and a resolution (the creation of the solution). A good origin story creates an emotional bond with the audience.',
          '* **Crisis Rebranding:** When a negative event occurs, the first narrative to take hold is often the one that sticks. You must be able to immediately reframe the crisis as a moment of learning, a testament to your resilience, or an opportunity for growth.',
          '* **Dominant Explanation Seeding:** In any ambiguous situation, people search for a clear explanation. Your goal is to be the first to provide a simple, powerful, and memorable narrative that explains "what is happening." If your explanation is the best one, it will be adopted and repeated by others.'
        ]
      }
    ],
    finalThoughts: 'The most powerful person in the world is the storyteller. If you control the stories, you control the world.'
  },

  // Phase VI
  'nonlinear-logic-systems': {
    type: 'lesson',
    title: 'Quantum Cognition: Nonlinear Logic Systems',
    introduction: 'Linear logic moves from A to B to C. It is sequential and predictable. Nonlinear logic leaps from A to J to D. It connects seemingly unrelated ideas to create novel solutions. This is the foundation of true creativity and strategic innovation. It is about solving problems by breaking the established chain of reasoning.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Idea Threading:** This involves taking a single core idea and mapping out its connections to dozens of different fields. For example, how does the concept of "leverage" apply in physics, finance, relationships, and software engineering?',
          '* **Divergence Mapping:** Start with a problem. Instead of brainstorming one path forward, map out ten completely different and contradictory paths. This forces your brain to break free from its default solutions.',
          '* **Paradox Chains:** A paradox is a seemingly absurd or self-contradictory statement that, when investigated, may prove to be well-founded or true. To solve a complex problem, try to find the central paradox at its heart (e.g., "To become more disciplined, we must embrace play"). Solving the paradox often unlocks the entire problem.',
          '* **Inverted Planning:** Standard planning starts at the beginning. Inverted planning starts with the desired end state in perfect detail, then works backward step-by-step. This often reveals a more direct and unconventional path to the goal.'
        ]
      }
    ],
    finalThoughts: 'Linear thinkers improve what exists. Nonlinear thinkers create what is new. The former earns a salary; the latter builds an empire.'
  },
  'time-distortion-cognition': {
    type: 'lesson',
    title: 'Quantum Cognition: Time Distortion Cognition',
    introduction: 'Time is not a fixed constant; it is a subjective experience. Time distortion cognition is the ability to manipulate your perception of time to enhance productivity, deepen analysis, and improve strategic foresight. By learning to mentally "warp" time, you can achieve in an hour what takes others a day.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Flow State Induction:** A flow state (being "in the zone") is a mental state in which a person performing some activity is fully immersed in a feeling of energized focus, full involvement, and enjoyment in the process of the activity. In flow, our perception of time diminishes, allowing for incredible feats of productivity. Clear goals, immediate feedback, and a balance between skill and challenge are keys to inducing flow.',
          '* **Reverse Time Mapping:** Instead of planning forward from today, imagine it is ten years in the future and you have achieved your ultimate goal. Now, write the history of how you got there, year by year, in reverse. This "future history" often provides a clearer strategic map.',
          '* **Future-State Simulation:** Before making a major decision, spend 30 minutes vividly imagining the world one year after you\'ve made that choice. What are the second- and third-order consequences? How does it feel? This mental time travel allows you to "experience" the future and adjust your present actions accordingly.'
        ]
      }
    ],
    finalThoughts: 'Your relationship with time determines your output. Treat it not as a master to be served, but as a medium to be shaped.'
  },
  'conceptual-collapsing': {
    type: 'lesson',
    title: 'Quantum Cognition: Conceptual Collapsing',
    introduction: 'Conceptual collapsing is the act of taking two or more ideas from completely different fields and merging them to create a new, powerful conceptual model. It is the engine of innovation. For example, Charles Darwin merged ideas from economics (Malthus\'s competition for resources) and biology to create the theory of natural selection.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Forced-Association Drills:** Take two random words from a dictionary and spend five minutes brainstorming a new business idea that combines them. Most ideas will be useless, but the process trains the mental muscle of synthesis.',
          '* **Metaphor Engineering:** A metaphor is not just a figure of speech; it is a tool for understanding. Actively search for new metaphors to explain your business or your problems. For instance, is your company a "well-oiled machine" or a "chaotic garden"? The metaphor you choose changes how you think about it.',
          '* **Idea Synthesis Under Pressure:** In a group setting, practice taking two conflicting viewpoints and synthesizing them into a third, superior option, rather than choosing one over the other. This is the essence of dialectical thinking (thesis + antithesis = synthesis).'
        ]
      }
    ],
    finalThoughts: 'The future will be built by those who can stand at the intersection of different disciplines and connect the dots no one else sees. Conceptual collapsing is how you find those dots.'
  },
  'multi-brain-simulation': {
    type: 'lesson',
    title: 'Quantum Cognition: Multi-Brain Simulation',
    introduction: 'This is the ability to think as different people simultaneously. Instead of being trapped in your own perspective, you can simulate the mental models of others to anticipate their actions, understand their motivations, and see a problem from all sides. It is like having a boardroom of expert advisors inside your own head.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **The Internal Boardroom:** When faced with a decision, assign different roles to chairs in a room (or just in your mind): the CFO (focused on risk), the CMO (focused on the customer), the CTO (focused on feasibility), and a "skeptic." Then, mentally "sit" in each chair and argue the case from that perspective.',
          '* **Role-Playing Debates:** Take a core belief you hold and spend 30 minutes passionately arguing for the *opposite* position. This forces you to understand the logic and emotional drivers of those who disagree with you, making your own position stronger and more nuanced.',
          '* **Perspective Shifting:** When analyzing a situation, ask yourself: How would my biggest competitor see this? How would a customer see this? How would an investor see this? How would my employee see this? Write down the answers.'
        ]
      }
    ],
    finalThoughts: 'Thinking with one brain limits you to one set of biases. Thinking with many brains gives you a panoramic view of reality.'
  },
  'abstract-execution': {
    type: 'lesson',
    title: 'Quantum Cognition: Abstract Execution',
    introduction: 'This is the ability to convert abstract principles, values, or even a single quote into a tangible product, system, or strategy. It is the bridge between the world of ideas and the world of execution. People who can do this can create companies and movements out of pure thought.',
    sections: [
      {
        title: 'The Process',
        content: [
          '* **1. Isolate the Core Principle:** Start with an abstract idea. Example: the Stoic principle of "Amor Fati" (love of fate).',
          '* **2. Convert to a Question:** How could I turn "love of fate" into a tool? How can I help people embrace their challenges?',
          '* **3. Brainstorm Tangible Forms:** This could be a journaling app where users reframe their daily challenges as opportunities. It could be a physical product, like a coin that says "obstacle" on one side and "opportunity" on the other. It could be a consulting framework for corporate resilience.',
          '* **4. From Journal to Diagram:** Sketch out the user flow or system diagram. How does the user interact with your tool?',
          '* **5. From Diagram to Pitch:** Create a one-page summary of the idea, its target audience, and its business model. You have now turned a philosophical concept into a viable product concept.'
        ]
      }
    ],
    finalThoughts: 'Ideas are worthless. Execution is everything. Abstract execution is the rare skill of turning the ethereal into the tangible. Master it, and you will never run out of things to build.'
  },

  // Phase VII
  'cognitive-operating-system-design': {
    type: 'lesson',
    title: 'Ascendant Neuroarchitecture: Cognitive Operating System (OS) Design',
    introduction: 'This is the practice of consciously architecting your mind\'s structure, inputs, and protocols. You are no longer just running the software of habits; you are designing the entire operating system. This involves building internal dashboards, feedback loops, and default thought processes for any situation.',
    sections: [
      {
        title: 'Core Components of a Cognitive OS',
        content: [
          '* **Thought Pipelines:** Design a process for how you handle incoming information. For example: Input -> Initial Filter (is this relevant to my goals?) -> Analysis (what are the key components?) -> Synthesis (how does this connect to what I know?) -> Action/Storage.',
          '* **Default Thought Programs:** Code default responses for common situations. For "startup mode," your default thought might be "speed and iteration." For "crisis mode," it might be "calm and clarity." When you feel a certain emotion (e.g., anger), you can have a pre-coded "script" that runs automatically (e.g., "Acknowledge emotion -> take three deep breaths -> identify the root cause -> decide logical next step").',
          '* **Internal Dashboards:** Use a journal or mental checklist to regularly review your key "life metrics": physical energy, mental focus, progress on key goals, relationship quality. This is like a CEO reviewing a company dashboard.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **Cognitive OS Mapping (One-time build, then weekly review):** On a large whiteboard, map out your entire desired OS. What are your core values? What are your default decision-trees for major life areas (health, wealth, relationships)? What are your information-processing pipelines? This becomes your personal constitution.'
        ]
      }
    ],
    finalThoughts: 'Most people run on a default OS installed by society, parents, and media. The sovereign individual designs their own.'
  },
  'sovereign-self-programming': {
    type: 'lesson',
    title: 'Ascendant Neuroarchitecture: Sovereign Self-Programming',
    introduction: 'This is the process of actively writing the rules you follow, the values you embed, and the emotions you allow. It involves a ruthless audit of all inherited beliefs and a conscious replacement of default reactions with authored ones. It is the deepest level of self-mastery.',
    sections: [
      {
        title: 'Core Techniques',
        content: [
          '* **Belief Auditing:** Make a list of your core beliefs about money, success, relationships, and yourself. For each one, ask: "Where did this belief come from? Does it serve my ultimate goals? Is it absolutely true?" Discard any that do not survive this scrutiny.',
          '* **Reaction Replacement:** Identify a common situation where you have a negative default reaction (e.g., getting angry in traffic). Design a new, authored reaction (e.g., "This is an opportunity to practice patience and listen to an audiobook"). Then, consciously practice the new reaction every time the trigger occurs.',
          '* **Emotion Synthesis:** Elite performers do not wait to feel confident or focused. They *decide* to feel that way. This is a trainable skill. It involves using physiological triggers (e.g., specific posture, breathing patterns) and mental visualization to manufacture a desired emotional state on command.'
        ]
      },
      {
        title: 'Training Drills',
        content: [
          '* **The Self-Code Ritual (Weekly):** Choose one new belief or emotional program you want to install. Write it down. Spend five minutes each morning for a week visualizing yourself acting and feeling according to this new code. Anchor it to a physical action.'
        ]
      }
    ],
    finalThoughts: 'You are either a product of your programming, or you are the programmer. There is no in-between.'
  },
  'self-destructive-pattern-elimination': {
    type: 'lesson',
    title: 'Ascendant Neuroarchitecture: Self-Destructive Pattern Elimination',
    introduction: 'Everyone has "glitch scripts"—unconscious loops of behavior like procrastination, people-pleasing, or self-sabotage that hold them back. This lesson provides a protocol for identifying, interrupting, and permanently eradicating these patterns. It is the act of debugging your own mind.',
    sections: [
      {
        title: 'The Pattern Kill Protocol',
        content: [
          '* **1. Track and Identify:** For one week, keep a log of every time you engage in the target behavior (e.g., procrastination). Note the trigger, the feeling, and the immediate "reward" (e.g., relief from discomfort).',
          '* **2. Interrupt the Loop:** The next time you feel the urge, you must physically interrupt the pattern. Stand up, do ten pushups, splash your face with cold water. The goal is to break the automaticity of the loop.',
          '* **3. Override with a New Behavior:** Immediately after interrupting, perform a pre-planned, positive action. If you were about to procrastinate, work on your most important task for just five minutes.',
          '* **4. Identity Recursion Rewrite:** Ask yourself: "Who would I be if this pattern of procrastination simply did not exist in my brain?" Journal on this new identity. Reinforce the idea that the old pattern is not "you"—it was just a faulty script that you are now deleting.'
        ]
      }
    ],
    finalThoughts: 'You cannot build a new future on top of a broken foundation. Debug your glitches, eliminate your bugs, and you will unlock your true processing power.'
  },
  'autopoietic-learning-systems': {
    type: 'lesson',
    title: 'Ascendant Neuroarchitecture: Autopoietic Learning Systems',
    introduction: 'Autopoiesis is a term from biology meaning "self-creation." An autopoietic learning system is a mind that is designed to evolve and improve on its own, without constant, forceful intervention. It involves setting up automated loops of reflection, auditing, and idea generation that feed you insight while you sleep, walk, and rest.',
    sections: [
      {
        title: 'Building the System',
        content: [
          '* **Automated Reflection:** Schedule a recurring 15-minute appointment in your calendar at the end of each day for a "Daily Debrief." Use a simple template: What did I accomplish? What did I learn? What is the plan for tomorrow?',
          '* **The "Idea-In" Box:** Create a single, frictionless place to capture any idea that comes to you (e.g., a specific notes app, a physical notebook). Do not judge the ideas; just capture them.',
          '* **The "Idea-Out" Process:** Once a week, schedule one hour to review your Idea-In Box. Your goal is to connect disparate ideas, flesh out the promising ones, and discard the rest. This is your personal R&D session.',
          '* **Systems for Curiosity:** Actively build toolkits that feed you novel information. This could be a custom RSS feed, a subscription to academic journals, or a weekly lunch with someone from a completely different field. You are engineering serendipity.'
        ]
      }
    ],
    finalThoughts: 'A disciplined mind works hard. An autopoietic mind works smart. Design your mind to be a self-improving engine, and your growth will become exponential.'
  },
  'ascendant-discipline': {
    type: 'lesson',
    title: 'Ascendant Neuroarchitecture: Ascendant Discipline',
    introduction: 'Standard discipline is about forcing yourself to do things you don\'t want to do. It is a battle, and it depletes willpower. Ascendant discipline is a higher state where the need for motivation collapses. Action becomes your natural state of being. This is achieved not by grinding harder, but by building a neural foundation where your work is deeply integrated with rhythm, purpose, and even play.',
    sections: [
      {
        title: 'Achieving the State',
        content: [
          '* **Collapse Motivation:** Stop searching for "motivation." It is a fleeting emotion. Instead, build systems and rituals that make action automatic, regardless of how you feel. The Daily Neural Rewiring Protocol is the foundation for this.',
          '* **Build Rhythm, Not Grind:** The "grind" mentality leads to burnout. A rhythm-based approach focuses on sustainable cycles of intense work and deliberate recovery. It is about being a professional athlete of the mind, not a factory worker.',
          '* **Integrate Purpose:** Every difficult task must be explicitly linked to your highest purpose. Before a hard workout, remind yourself: "This is what it takes to build a body capable of running an empire." This reframes the "pain" as a "privilege."',
          '* **Embrace Awe and Play:** The most transcendent performers often have a deep sense of play and wonder in their work. After periods of intense focus, allow your mind to wander, to be curious, to explore without a goal. This replenishes the cognitive resources needed for discipline.'
        ]
      }
    ],
    finalThoughts: 'Ascendant discipline is the final freedom. It is the state where what you *must* do and what you *want* to do become the same thing. You are no longer fighting yourself. You are a unified force. You are the signal.'
  }
};

export const allLessonContent: { [courseSlug: string]: LessonContent } = {
  'cognitive-dominance': cognitiveDominanceContent,
};
