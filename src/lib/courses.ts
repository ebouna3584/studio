
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
    courseTitle: 'The Cognitive Dominance Course',
    courseDescription: 'An intensive program designed to re-architect your thinking, discipline, and strategic capabilities for elite performance in business and life.',
    mindsetTagline: 'Install a New Operating System for Your Mind.',
    totalEstimatedTimeHours: 40,
    sections: [
        {
            topicTitle: 'Phase I: Foundations of Cognitive Dominance',
            understandFirst: 'Purpose: Build a steel foundation of mental clarity, focus, and personal command. This is mental architecture — not skill, but the operating system on which skills will run.',
            lessonHeaders: [
                'Cognitive Precision', 
                'Ruthless Self-Awareness', 
                'First Principles Thinking'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'Phase I is internal war. You debug your mind like code, removing inefficiencies, emotional noise, and false narratives. You walk out with internal sovereignty and total clarity.'
            ],
            recommended: true
        },
        {
            topicTitle: 'Phase II: Strategic Thinking & Systems Design',
            understandFirst: 'Purpose: Build a brain capable of constructing and navigating entire systems — of thought, business, and power.',
            lessonHeaders: [
                'Second-Order Thinking', 
                'Mental Modeling', 
                'Systems Mapping'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You begin thinking in layers. This phase rewires your mind to become predictive, architectural, and strategic. No more linear thinking — now you see webs of influence and pathways of leverage.'
            ]
        },
        {
            topicTitle: 'Phase III: High-Performance Operating System',
            understandFirst: 'Purpose: Convert your cognitive upgrades into real-world output. This phase is about execution: speed, clarity, consistency.',
            lessonHeaders: [
                'Mental Efficiency',
                'Automated Self-Discipline',
                'Cognitive Endurance'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You become a machine, but not in the mechanical sense — you are fluid, frictionless, and impossible to stop. Everything in your life aligns around output, and you’re no longer fighting resistance; you’ve built an engine.'
            ]
        },
        {
            topicTitle: 'Phase IV: Adaptive Intelligence & Situational Mastery',
            understandFirst: 'Purpose: Make your system fluid. This is dynamic intelligence — the ability to thrive in unknowns, lead in chaos, and recalibrate in real time.',
            lessonHeaders: [
                'Context Switching Mastery',
                'Emotional Intelligence Under Constraint',
                'Situational Command'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You stop being static and become dynamic. You adapt faster than change happens. This is your firewall against chaos — when most freeze or break, you evolve.'
            ]
        },
        {
            topicTitle: 'Phase V: Psychological Warfare & Influence Engineering',
            understandFirst: 'Purpose: Learn to control attention, perception, and belief. Whether negotiating, selling, or competing — this phase teaches you to bend psychological space.',
            lessonHeaders: [
                'Narrative Architecture',
                'Influence Dynamics',
                'Dark Psychology Defense'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'This is the power to make people move — think, act, or trust in the way you architect. You become an invisible architect of perception, and a master of the human psyche.'
            ]
        },
        {
            topicTitle: 'Phase VI: Game Control & Strategic Omniscience',
            understandFirst: 'Purpose: You’re no longer playing the game — you’re redesigning it. This is the art of power accumulation, invisible leverage, and multi-layered domination.',
            lessonHeaders: [
                'Game Design Mindset',
                'Information Supremacy',
                'Move Sequencing'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'You are no longer competing in the visible field — you move in hidden dimensions. Everything becomes a layer: optics, power, incentives, control. You begin pulling strings others don’t even see.'
            ]
        },
        {
            topicTitle: 'Phase VII: Immortalization & Legacy Design',
            understandFirst: 'Purpose: Transition from dominance to permanence. The goal here isn’t to win — it’s to become untouchable, unforgettable, and unerasable.',
            lessonHeaders: [
                'Institutionalizing Your Mind',
                'Cultural Engineering',
                'Symbolic Permanence'
            ],
            estimatedUnitTimeMinutes: 300,
            studyTips: [
                'Now you shift from winning the game to becoming the blueprint for it. This is where individuals become empires — where your cognition births institutions. You aren’t just remembered. You’re installed into the operating system of the future.'
            ]
        }
    ],
    pdfMarkdown: `
# The Cognitive Dominance Course: Syllabus

## Course Overview
An intensive program designed to re-architect your thinking, discipline, and strategic capabilities for elite performance in business and life.

---

### Phase I: Foundations of Cognitive Dominance
**Purpose:** Build a steel foundation of mental clarity, focus, and personal command.
- **Key Themes:** Cognitive Precision, Ruthless Self-Awareness, First Principles Thinking.
- **Summary:** Debug your mind like code, removing inefficiencies, emotional noise, and false narratives.

### Phase II: Strategic Thinking & Systems Design
**Purpose:** Build a brain capable of constructing and navigating entire systems.
- **Key Themes:** Second-Order Thinking, Mental Modeling, Systems Mapping.
- **Summary:** Rewire your mind to become predictive, architectural, and strategic.

### Phase III: High-Performance Operating System
**Purpose:** Convert your cognitive upgrades into real-world output.
- **Key Themes:** Mental Efficiency, Automated Self-Discipline, Cognitive Endurance.
- **Summary:** Become fluid, frictionless, and impossible to stop.

### Phase IV: Adaptive Intelligence & Situational Mastery
**Purpose:** Make your system fluid and thrive in unknowns.
- **Key Themes:** Context Switching, Emotional Intelligence Under Constraint, Situational Command.
- **Summary:** Adapt faster than change happens.

### Phase V: Psychological Warfare & Influence Engineering
**Purpose:** Learn to control attention, perception, and belief.
- **Key Themes:** Narrative Architecture, Influence Dynamics, Dark Psychology Defense.
- **Summary:** Become an invisible architect of perception.

### Phase VI: Game Control & Strategic Omniscience
**Purpose:** Redesign the game instead of just playing it.
- **Key Themes:** Game Design Mindset, Information Supremacy, Move Sequencing.
- **Summary:** Pull strings others don’t even see.

### Phase VII: Immortalization & Legacy Design
**Purpose:** Transition from dominance to permanence.
- **Key Themes:** Institutionalizing Your Mind, Cultural Engineering, Symbolic Permanence.
- **Summary:** Become the blueprint for the game itself.
`
};

export const course = cognitiveDominanceCourse;

// Keeping quotes for the homepage
export const quotes: string[] = [
  "You are the architect of your own mind. Build it to withstand empires.",
  "The expert in anything was once a beginner.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The secret to getting ahead is getting started.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Wisdom is not a product of schooling but of the lifelong attempt to acquire it."
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
  'cognitive-precision': {
    summary: 'Train your brain to function with accuracy and minimal noise. Sharpen attention, reduce scatter, and begin to think in high-resolution.',
    keyConcepts: ['Attention Control', 'Signal vs. Noise Discrimination', 'Logical Fallacy Detection'],
    commonPitfalls: ['Emotional Reactivity', 'Confirmation Bias', 'Mental Clutter']
  },
  'second-order-thinking': {
    summary: 'Move beyond immediate results to predict the ripple effects of any action. This is the ability to see the consequences of the consequences, which is where true strategic advantage lies.',
    keyConcepts: ['Consequence Mapping', 'Time Horizon Expansion', 'Feedback Loop Analysis'],
    commonPitfalls: ['Short-Term Optimization', 'Ignoring Unintended Consequences', 'Linear Cause-and-Effect Thinking']
  },
   'mental-efficiency': {
    summary: 'Optimize your energy, focus blocks, and execution rituals to achieve maximum output with minimum wasted effort. This is about building a frictionless system for productivity.',
    keyConcepts: ['Focus Blocks (Deep Work)', 'Energy Management Cycles', 'Ritualized Startup/Shutdown Protocols'],
    commonPitfalls: ['Multitasking', 'Decision Fatigue', 'Ignoring Physical Recovery']
  },
  'context-switching-mastery': {
    summary: 'Develop the ability to move seamlessly between different mental modes and roles (e.g., from deep technical work to high-level strategy) without loss of focus or effectiveness.',
    keyConcepts: ['Mental Model Shifting', 'Role-Based Protocols', 'Cognitive Agility Drills'],
    commonPitfalls: ['Attention Residue', 'Role Bleed', 'Loss of Depth']
  },
  'narrative-architecture': {
    summary: 'Learn to craft beliefs, stories, and frames that capture attention and spread organically. This is the skill of becoming unignorable and defining the lens through which others see reality.',
    keyConcepts: ['Frame Control', 'Storytelling for Belief Change', 'Memetic Engineering'],
    commonPitfalls: ['Weak Messaging', 'Inconsistent Narrative', 'Failure to Resonate with Audience']
  },
  'game-design-mindset': {
    summary: 'Analyze the structure of industries, markets, and organizations as games with rules, players, and objectives. Then, learn how to rewrite those rules to create an unfair advantage.',
    keyConcepts: ['Rule Analysis & Exploitation', 'Incentive Structure Design', 'Asymmetric Competition'],
    commonPitfalls: ['Accepting the Default Game', 'Ignoring Hidden Players', 'Underestimating Incumbent Defenses']
  },
   'institutionalizing-your-mind': {
    summary: 'Encode your ideas, methods, and mental frameworks into durable systems—businesses, books, investment theses, or software—that can outlast you and scale your influence.',
    keyConcepts: ['Codifying Tacit Knowledge', 'Systematizing Your Philosophy', 'Building Legacy Platforms'],
    commonPitfalls: ['Keeping Knowledge in Your Head', 'Failing to Document Processes', 'One-Off Successes vs. Repeatable Systems']
  }
};


export const allLessonContent: { [courseSlug: string]: LessonContent } = {
  'cognitive-dominance': cognitiveDominanceContent,
};
