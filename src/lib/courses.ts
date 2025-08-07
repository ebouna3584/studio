
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
      introduction: 'Your habits and identity are the result of repeated Cue → Craving → Action → Reward → Reinforcement loops. Your basal ganglia automates these behaviors, while your prefrontal cortex makes high-level decisions. Rewiring requires reconditioning reward mechanisms in the nucleus accumbens and emotional reinforcement from the amygdala.',
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
                  '* Habits form through emotional consistency, not discipline. Discipline is a finite resource that depletes. Emotional consistency, however, creates a powerful feedback loop. If an action consistently produces a desired emotional state (e.g., pride, progress, control), the brain will naturally want to repeat it. The key is to attach strong, positive emotions to desired habits and negative emotions to undesired ones.',
                  '* Identity shifts occur with emotional repetition and urgency. To change who you are, you must repeatedly perform actions consistent with your desired identity and feel the corresponding emotions. Urgency, often triggered by the amygdala (the brain\'s fear center), accelerates this process by signaling that the change is critical for survival or success. The hippocampus then helps to cement these new identity-linked memories.'
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
};

export const allLessonContent: { [courseSlug: string]: LessonContent } = {
  'cognitive-dominance': cognitiveDominanceContent,
};
