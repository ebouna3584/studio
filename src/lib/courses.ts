
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
            understandFirst: 'Purpose: Build your neurobiological backend and understand brain optimization. Your habits and identity are the result of repeated Cue → Craving → Action → Reward → Reinforcement loops.',
            lessonHeaders: [
                'Identity and Habit Restructuring', 
                'Neurological Mechanisms to Rewire',
                'Daily Neural Rewiring Protocol',
                'Critical Subjects to Master'
            ],
            estimatedUnitTimeMinutes: 420,
            studyTips: [
                'The brain doesn’t care what’s true. It believes what you repeat with intensity. Most people fail not from lack of talent—but because their amygdala never felt urgency. Identity = repetition + emotion + reflection. Repeat. Reflect. Rewire.'
            ],
            recommended: true
        },
        {
            topicTitle: 'Phase II: Reinforcement & Neural Encoding',
            understandFirst: 'Purpose: Lock in habits, rituals, and neurological anchoring of behaviors. This phase is about bleeding theory into your behavior until it becomes instinct, not information.',
            lessonHeaders: [
                'Deep Practice and Immersion Training',
                'Behavioral Psychology Mastery',
                'Startup Economics Mastery'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'Your brain is no longer just biological. It\'s engineered. Execute until it becomes instinct.'
            ]
        },
        {
            topicTitle: 'Phase III: Performance Simulations & Feedback Loops',
            understandFirst: 'Purpose: Stress test cognition and refine execution through scenario-based learning. This phase forges your cognitive steel through high-stress, high-fidelity simulation.',
            lessonHeaders: [
                'Investor Pitch Gauntlet',
                'Bias Recognition Combat',
                'Cognition Under Chaos Drill'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'It’s not what you know. It’s how you perform when watched, stressed, or constrained. When these simulations become second nature, you are no longer training. You are operating.'
            ]
        },
        {
            topicTitle: 'Phase IV: Adaptive Intelligence & Situational Mastery',
            understandFirst: 'Purpose: Master ambiguity, fluidity, and environmental control. This is the phase where you cease being merely a thinker or performer and become a living system.',
            lessonHeaders: [
                'Context Switching Mastery',
                'Emotional Intelligence Under Constraint',
                'Meta-Learning Engineering'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'To operate across any battlefield with full command. When context changes, your system doesn’t collapse — it recalibrates in real time. This is what makes you ungovernable by environment and unreplaceable by machines.'
            ]
        },
        {
            topicTitle: 'Phase V: Reality Distortion & Perceptual Dominance',
            understandFirst: 'Purpose: Bend perception. You no longer react to reality — you architect it. Perceptual dominance means controlling how others see, feel, and interpret your presence, actions, and decisions.',
            lessonHeaders: [
                'Perceptual Engineering',
                'Charisma Engineering',
                'Psychological Operations for Influence'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'To dominate perception is to control outcomes before action is taken. You become a reality distortion field — rewriting the narrative and walking unseen through chaos. This is the power of invisible influence.'
            ]
        },
        {
            topicTitle: 'Phase VI: Quantum Cognition & Nonlinear Thinking',
            understandFirst: 'Purpose: Your brain becomes non-Euclidean — no longer limited by linear causality. You learn to leap between ideas, collapse abstract concepts into strategic actions, and wield paradox as a tool.',
            lessonHeaders: [
                'Nonlinear Logic Systems',
                'Time Distortion Cognition',
                'Abstract Execution'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'Become a quantum thinker to compress time, synthesize wisdom, and execute across dimensions. Your brain becomes a weapon of pattern recognition, foresight, and creative warfare. This is how you create what has never existed — and do it fast.'
            ]
        },
        {
            topicTitle: 'Phase VII: Ascendant Neuroarchitecture & Auto-Transcendence',
            understandFirst: 'Purpose: You are no longer training to become powerful. You are designing the architecture of the mind that builds reality itself. You become the source code.',
            lessonHeaders: [
                'Cognitive Operating System Design',
                'Sovereign Self Programming',
                'Ascendant Discipline'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'Become the architect of your own neural universe. No guru, no app, no system — just you. You are the coder, the source, the sovereign system. The rewiring is no longer a process. It is you. You are now the signal.'
            ]
        }
    ],
    pdfMarkdown: `
# The Neurobiological Reframing Full Masterclass: Syllabus

## Course Overview
A comprehensive self-engineering protocol that reshapes your brain, behavior, and performance architecture into something AI cannot replicate nor society can ignore.

---

### Phase I: Core Rewiring & Scientific Foundations
**Purpose:** Build your neurobiological backend and understand brain optimization.
- **Key Themes:** Identity Restructuring, Neurological Mechanisms, Daily Protocols, Critical Subjects.
- **Summary:** Debug your mind, install urgency, and master the foundational knowledge required for cognitive dominance.

### Phase II: Reinforcement & Neural Encoding
**Purpose:** Lock in habits, rituals, and neurological anchoring of behaviors.
- **Key Themes:** Deep Practice, Immersion Training, Behavioral Mastery.
- **Summary:** Bleed theory into your behavior until it becomes instinct, not just information.

### Phase III: Performance Simulations & Feedback Loops
**Purpose:** Stress test cognition and refine execution through scenario-based learning.
- **Key Themes:** Investor Pitches, Bias Recognition, Chaos Drills.
- **Summary:** Forge cognitive steel through high-stress, high-fidelity simulation to make peak performance repeatable.

### Phase IV: Adaptive Intelligence & Situational Mastery
**Purpose:** Master ambiguity, fluidity, and environmental control.
- **Key Themes:** Context Switching, Emotional Intelligence, Meta-Learning.
- **Summary:** Become a living system that recalibrates in real time, making you unreplaceable by machines.

### Phase V: Reality Distortion & Perceptual Dominance
**Purpose:** Bend perception. You no longer react to reality — you architect it.
- **Key Themes:** Perceptual Engineering, Charisma, Psychological Operations.
- **Summary:** Control outcomes before action is taken by becoming a reality distortion field.

### Phase VI: Quantum Cognition & Nonlinear Thinking
**Purpose:** Your brain becomes non-Euclidean, no longer limited by linear causality.
- **Key Themes:** Nonlinear Logic, Time Distortion, Abstract Execution.
- **Summary:** Become a weapon of pattern recognition, foresight, and creative warfare.

### Phase VII: Ascendant Neuroarchitecture & Auto-Transcendence
**Purpose:** Design the architecture of the mind that builds reality itself.
- **Key Themes:** Cognitive OS Design, Sovereign Self Programming, Ascendant Discipline.
- **Summary:** Become the architect of your own neural universe. You are the signal.
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
  summary: string;
  keyConcepts: string[];
  commonPitfalls: string[];
};

type LessonContent = {
  [lessonSlug: string]: LessonContentDetails;
};

const cognitiveDominanceContent: LessonContent = {
  'identity-and-habit-restructuring': {
    summary: 'Your habits and identity are the result of repeated Cue → Craving → Action → Reward → Reinforcement loops. Your basal ganglia automates these behaviors, while your prefrontal cortex makes high-level decisions. Rewiring requires reconditioning reward mechanisms in the nucleus accumbens and emotional reinforcement from the amygdala.',
    keyConcepts: ['Cue-Craving-Action-Reward Loop', 'Basal Ganglia Automation', 'Prefrontal Cortex Decision-Making', 'Emotional Consistency over Discipline'],
    commonPitfalls: ['Relying on discipline alone', 'Ignoring the emotional component of habits', 'Seeking cheap dopamine hits instead of earned rewards']
  },
  'neurological-mechanisms-to-rewire': {
    summary: 'To rewire your brain, you must understand its core components and how to manipulate them. This lesson covers the key neural structures involved in planning, habit formation, reward, and emotional memory, providing strategies to activate and reshape them.',
    keyConcepts: ['Prefrontal Cortex (Planning)', 'Basal Ganglia (Habit Automation)', 'Nucleus Accumbens (Dopamine/Reward)', 'Amygdala (Emotional Memory)', 'Hippocampus (Memory Consolidation)'],
    commonPitfalls: ['Neglecting long-term goal setting', 'Failing to establish consistent routines', 'Underestimating the power of emotional anchors']
  },
  'daily-neural-rewiring-protocol': {
    summary: 'This lesson provides a concrete daily protocol designed to systematically rewire your neural pathways. It combines physical and mental exercises to increase alertness, anchor dopaminergic projections, release BDNF for memory consolidation, and train delayed gratification.',
    keyConcepts: ['Cold Water Exposure (Noradrenaline)', 'Wealth & Physical Ideal Visualization', 'Neuroplasticity Journaling', 'High-Intensity Training (BDNF Release)', 'Dopamine Detox'],
    commonPitfalls: ['Inconsistency in application', 'Skipping visualization or journaling', 'Avoiding high-intensity physical triggers']
  },
   'critical-subjects-to-master': {
    summary: 'This lesson outlines the six critical domains of knowledge that are unreplaceable by AI. Mastery of these subjects provides a durable competitive advantage in a world of automation, focusing on human persuasion, strategic thinking, and system building.',
    keyConcepts: ['Behavioral Psychology', 'Startup Economics', 'Strategic Cognition', 'Neural Systems', 'AI Infrastructure', 'Persuasive Communication'],
    commonPitfalls: ['Focusing only on technical skills', 'Ignoring the psychology of human behavior', 'Failing to understand the economics of scalable systems']
  },
   'deep-practice-and-immersion-training': {
    summary: 'Theory is useless without application. This phase focuses on deep practice through weekly drills that translate knowledge into instinct. You will apply concepts from all core subjects in real-world scenarios to forge tactical empathy, strategic dissection, and faster feedback loops.',
    keyConcepts: ['Weekly Practice Drills', 'Strategic Dissection', 'Faster Feedback Iteration', 'Reinforced Mental Sharpness', 'Real-world Application'],
    commonPitfalls: ['Passive learning without active practice', 'Fear of applying concepts in live situations', 'Inconsistent drilling']
  },
  'behavioral-psychology-mastery': {
    summary: 'Master the scientific study of observable behaviors and the underlying processes that drive them. This lesson weaponizes your understanding of how people think, covering cognitive biases, neuromarketing, and persuasion models to give you an edge in any human interaction.',
    keyConcepts: ['Cognitive Biases (Anchoring, Loss Aversion)', 'Neuromarketing Principles', 'Cialdini’s Principles of Persuasion', 'Kahneman’s System 1 vs. System 2'],
    commonPitfalls: ['Assuming rational behavior in others', 'Ignoring emotional triggers in decision-making', 'Failing to spot and counter cognitive biases']
  },
   'startup-economics-mastery': {
    summary: 'Understand how scalable businesses grow with limited resources. This lesson covers the engine behind systemic wealth, teaching you to create automated income machines by mastering concepts like CAC, LTV, and MVP.',
    keyConcepts: ['Business Models (SaaS, Freemium)', 'Minimum Viable Product (MVP)', 'CAC/LTV Ratio', 'Pricing Psychology', 'Growth Metrics (Retention, Churn)'],
    commonPitfalls: ['Building a product without validating the market', 'Ignoring the CAC/LTV ratio', 'Poor pricing strategy']
  },
  'investor-pitch-gauntlet': {
    summary: 'This simulation tests your ability to pitch a startup with minimal preparation and maximum pressure. You must articulate a full business case (Problem, Solution, Model, TAM, Ask) in 90 seconds and defend it against live objections.',
    keyConcepts: ['Rapid Articulation', 'High-Pressure Communication', 'Objection Handling', 'Concise Business Modeling'],
    commonPitfalls: ['Freezing under pressure', 'Failing to articulate the core business model clearly', 'Weak defense against objections']
  },
  'bias-recognition-combat': {
    summary: 'A live simulation where you must detect and redirect cognitive biases in a conversation or negotiation. This drill trains you to regain the upper hand when faced with irrational behavior by applying psychological principles in real-time.',
    keyConcepts: ['Live Bias Detection', 'Behavioral Redirects', 'Psychological Framing', 'Maintaining Composure'],
    commonPitfalls: ['Failing to spot the active bias', 'Reacting emotionally instead of strategically', 'Ineffective reframing attempts']
  },
  'cognition-under-chaos-drill': {
    summary: 'This drill forces you to make decisions in a high-pressure, multi-variable scenario using the OODA Loop (Observe-Orient-Decide-Act). The goal is to prioritize clarity, speed, and efficiency over perfection, testing your strategic cognition under fire.',
    keyConcepts: ['OODA Loop Execution', 'Time-Restricted Decision Making', 'Efficiency Over Perfection', 'Post-Action Justification'],
    commonPitfalls: ['Analysis paralysis', 'Slow orientation phase', 'Inability to justify actions clearly']
  },
   'context-switching-mastery': {
    summary: 'Develop the ability to move fluidly between different domains (e.g., tech, business, psychology) and roles (e.g., founder, developer, closer) without losing effectiveness. This is about building true cognitive agility.',
    keyConcepts: ['Interdisciplinary Pivots', 'Rapid Re-immersion', 'Cross-Discipline Pattern Recognition', 'Mental Model Shifting'],
    commonPitfalls: ['Attention residue from previous tasks', 'Loss of depth when switching contexts', 'Slow adaptation to new roles']
  },
  'emotional-intelligence-under-constraint': {
    summary: 'Maintain interpersonal clarity and leverage under tension. This lesson trains you to handle simulated hostility, deflection, and coldness, allowing you to integrate non-reactivity with active influence.',
    keyConcepts: ['Non-Reactivity', 'Energy Matching', 'Emotional Boundary Manipulation', 'Influence Under Pressure'],
    commonPitfalls: ['Emotional reactivity', 'Losing composure under criticism', 'Failing to influence when faced with resistance']
  },
   'meta-learning-engineering': {
    summary: 'Learn how to learn faster, deeper, and more efficiently. This lesson teaches you to deconstruct new skill domains in hours, using techniques like spaced repetition, interleaving, and cognitive chunking to build a repeatable framework for acquiring any new field.',
    keyConcepts: ['Skill Deconstruction', 'Spaced Repetition', 'Interleaving', 'Cognitive Chunking', 'Repeatable Learning Frameworks'],
    commonPitfalls: ['Inefficient learning strategies', 'Lack of a systematic approach to acquiring new skills', 'Forgetting information quickly']
  },
  'perceptual-engineering': {
    summary: 'Control the lens through which others see you and the situation. This lesson covers priming, framing, and narrative embedding, as well as power positioning through clothing, cadence, and vocabulary to hack how you are perceived in the first five seconds.',
    keyConcepts: ['Priming & Framing', 'Narrative Embedding', 'Power Positioning', 'Introduction Hacking'],
    commonPitfalls: ['Making a poor first impression', 'Allowing others to control the narrative', 'Underestimating the power of non-verbal cues']
  },
  'charisma-engineering': {
    summary: 'Cultivate a presence that magnetizes or deflects attention at will. This involves vocal tonality drills, studying charismatic archetypes like Steve Jobs and JFK, and practicing paradox stacking (e.g., confident + curious) to develop a dynamic and compelling persona.',
    keyConcepts: ['Vocal Tonality', 'Charisma Archetypes', 'Paradox Stacking', 'Presence Modulation'],
    commonPitfalls: ['Monotone delivery', 'Static or one-dimensional persona', 'Inability to command a room']
  },
   'psychological-operations-for-influence': {
    summary: 'Influence group decisions without direct commands. This lesson teaches the art of PsyOps, including seeding consensus, using misdirection, planting doubt, and running an "internal theatre" to play roles in your head for external impact.',
    keyConcepts: ['Consensus Seeding', 'Misdirection & Planted Doubt', 'Predictive Scripting', 'Internal Theatre'],
    commonPitfalls: ['Using overt commands instead of subtle influence', 'Failing to read group dynamics', 'Lack of strategic patience']
  },
   'nonlinear-logic-systems': {
    summary: 'Solve problems multidimensionally and non-sequentially. This lesson trains you to leap between ideas, use paradox chains to unlock creativity, and practice inverted planning (building from the end to the start) to escape linear thinking.',
    keyConcepts: ['Idea Threading', 'Divergence Mapping', 'Paradox Chains', 'Inverted Planning'],
    commonPitfalls: ['Getting stuck in linear, step-by-step thinking', 'Inability to connect disparate ideas', 'Creative blocks']
  },
  'time-distortion-cognition': {
    summary: 'Manipulate your perception of time for enhanced productivity and analysis. This involves drills to induce flow states (time warping), mapping long-term strategy in reverse, and using future-state simulation to influence present actions.',
    keyConcepts: ['Time Warping (Flow States)', 'Reverse Strategic Mapping', 'Future-State Simulation'],
    commonPitfalls: ['Poor time management', 'Inability to enter flow states', 'Lack of long-term strategic vision']
  },
  'abstract-execution': {
    summary: 'Convert abstract principles into tangible tools, products, or systems. This is the art of taking a quote, philosophy, or theory and building a functional system from it, turning values into startup strategies and ideas into pitches.',
    keyConcepts: ['Principle to Product Conversion', 'Value-Based System Design', 'Diagrammatic Thinking', 'Idea to Pitch Pipeline'],
    commonPitfalls: ['Ideas without execution', 'Inability to translate abstract thoughts into concrete actions', 'Lack of a system to capture and develop ideas']
  },
  'cognitive-operating-system-design': {
    summary: 'Architect your own mind’s structure, inputs, and protocols. This lesson teaches you to build internal dashboards, feedback loops, and thought pipelines, essentially coding the default thoughts and decision trees that run your life.',
    keyConcepts: ['Internal Dashboards', 'Thought Pipelines', 'Default Thought Design', 'Cognitive Rituals'],
    commonPitfalls: ['Running on default, unexamined mental programs', 'Lack of a structured internal world', 'Inconsistent mental performance']
  },
  'sovereign-self-programming': {
    summary: 'Write the rules you follow, the values you embed, and the emotions you allow. This involves auditing all inherited beliefs, replacing default reactions with authored ones, and training emotion synthesis to manufacture confidence, calm, or focus on command.',
    keyConcepts: ['Belief Auditing', 'Authored Reactions', 'Emotion Synthesis', 'Value Embedding'],
    commonPitfalls: ['Living by others’ rules and values', 'Emotional reactivity', 'Lack of a core, self-defined identity']
  },
  'ascendant-discipline': {
    summary: 'No longer force discipline — embody it. This final lesson is about collapsing the need for motivation by building rhythm instead of grind and integrating awe, play, and purpose into your neural foundation, making high-performance your natural state.',
    keyConcepts: ['Embodied Discipline', 'Rhythm over Grind', 'Motivation Collapse', 'Purpose Integration'],
    commonPitfalls: ['Relying on motivation to act', 'Experiencing burnout from constant grinding', 'Lack of a deeper purpose driving your actions']
  },
};

export const allLessonContent: { [courseSlug: string]: LessonContent } = {
  'cognitive-dominance': cognitiveDominanceContent,
};
