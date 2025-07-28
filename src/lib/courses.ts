
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
  fieldOfStudy: 'STEM' | 'Social Sciences' | 'Humanities' | 'Foundations / General';
  courseTitle: string;
  courseDescription: string;
  mindsetTagline: string;
  totalEstimatedTimeHours: number;
  sections: CourseSection[];
  pdfMarkdown: string;
};

const allCourses: Course[] = [
  {
    id: '1',
    slug: 'ap-biology',
    fieldOfStudy: 'STEM',
    courseTitle: 'AP Biology',
    courseDescription: 'A deep dive into the study of life and living organisms, from molecular biology to ecosystems.',
    mindsetTagline: 'Grasp the big ideas of biology, from the smallest cells to entire ecosystems.',
    totalEstimatedTimeHours: 8,
    sections: [
      {
        topicTitle: 'Unit 1: Chemistry of Life',
        understandFirst: 'Focus on the properties of water and the basic structure of macromolecules. This is the chemical alphabet for the language of biology.',
        lessonHeaders: [
            "Structure of Water and Hydrogen Bonding",
            "Elements of Life",
            "Introduction to Macromolecules",
            "Properties of Macromolecules",
            "Structure and Function of Biological Macromolecules",
            "Nucleic Acids"
        ],
        estimatedUnitTimeMinutes: 60,
        studyTips: [
            'Create flashcards for the four main macromolecules and their monomers.',
            'Draw a water molecule and illustrate how hydrogen bonds form between multiple molecules.'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 2: Cell Structure and Function',
        understandFirst: 'Clearly distinguish between prokaryotic and eukaryotic cells before memorizing individual organelles. It provides a framework for everything else.',
        lessonHeaders: [
            "Cell Structure: Subcellular Components",
            "Cell Size",
            "Plasma Membranes",
            "Membrane Transport",
            "Facilitated Diffusion",
            "Tonicity and Osmoregulation",
            "Mechanisms of Transport",
            "Compartmentalization",
            "Origins of Cell Compartmentalization"
        ],
        estimatedUnitTimeMinutes: 75,
        studyTips: [
            'Draw and label a diagram of both a plant and animal cell. Explain the function of each organelle in your own words.',
            'Use an analogy, like a factory, to remember the functions of different organelles.'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 3: Cellular Energetics',
        understandFirst: 'Master the overall inputs and outputs of photosynthesis and cellular respiration before getting lost in the details of each step.',
        lessonHeaders: [
            "Enzyme Structure & Catalysis",
            "Environmental Impacts on Enzyme Function",
            "Cellular Energy",
            "Photosynthesis",
            "Cellular Respiration",
            "Fitness"
        ],
        estimatedUnitTimeMinutes: 75,
        studyTips: [
            'Create a flowchart for both photosynthesis and cellular respiration, highlighting where key molecules are used and produced.',
            'Focus on the role of enzymes as catalysts that drive these reactions.'
        ]
      }
    ],
    pdfMarkdown: `
# AP Biology Crash Course

### "Precision over pressure. Learn less, retain more."

---

## Unit 1: Chemistry of Life

**Topic Overview:**  
Biological macromolecules are molecules that support life and include carbohydrates, proteins, lipids, and nucleic acids.

**Core Concepts:**
- Water’s polarity gives it adhesive, cohesive, and thermal properties.
- Carbon can form up to four covalent bonds → foundation of organic molecules.
- Proteins are made of amino acids joined by peptide bonds.

> **Study Hack:** When memorizing molecules, imagine building LEGO structures—start from the smallest piece and connect.

---

## Unit 2: Cell Structure and Function

**Topic Overview:**  
Cells are the fundamental units of life, divided into prokaryotic and eukaryotic.

**Must-Know Concepts:**
- Prokaryotes have no membrane-bound organelles.
- Ribosomes synthesize proteins; mitochondria make ATP via cellular respiration.
- Cell membranes are selectively permeable due to the phospholipid bilayer.

> **Mnemonic:** *"Rough ER has Ribosomes. Smooth ER is Slippery."*

---

## Unit 3: Cellular Energetics

- Enzymes lower activation energy
- Photosynthesis occurs in chloroplasts (light-dependent and Calvin Cycle)
- Cellular respiration includes glycolysis, Krebs cycle, and ETC

---

## Final Tips

- Understand → don’t memorize. Ask "why does this happen?" after every concept.
- Link terms to visuals or analogies.
- Repeat concepts every 2–3 days (spaced repetition).

---

_"You're not just learning to pass. You're learning to think precisely.”_
`
  },
  {
    id: '2',
    slug: 'ap-us-history',
    fieldOfStudy: 'Humanities',
    courseTitle: 'AP U.S. History (APUSH)',
    courseDescription: 'Explore the vast history of the United States from the pre-Columbian era to the present.',
    mindsetTagline: 'Connect the dots across American history by thinking in themes, not just timelines.',
    totalEstimatedTimeHours: 8,
    sections: [
      {
        topicTitle: 'Period 1: 1491-1607',
        understandFirst: 'Grasp the diversity of Native American societies before European contact. This context is crucial for understanding the changes that followed.',
        lessonHeaders: [
            "Contextualizing Period 1",
            "Native American Societies Before European Contact",
            "European Exploration in the Americas",
            "Columbian Exchange, Spanish Exploration, and Conquest",
            "Labor, Slavery, and Caste in the Spanish Colonial System"
        ],
        estimatedUnitTimeMinutes: 45,
        studyTips: [
          'Focus on the concept of the Columbian Exchange and its impact on both the Old World and the New World.',
          'Compare the motivations and settlement patterns of the Spanish, French, and Dutch.'
        ]
      },
      {
        topicTitle: 'Period 3: 1754-1800',
        understandFirst: "Understand the causes and effects of the French and Indian War, as it directly led to the British policies that sparked the American Revolution.",
        lessonHeaders: [
            "The French and Indian War",
            "The Imperial Crisis and the Road to Revolution",
            "The American Revolution",
            "The Articles of Confederation",
            "The Constitutional Convention and Debates over Ratification",
            "Washington's Farewell",
            "Development of Political Parties"
        ],
        estimatedUnitTimeMinutes: 75,
        studyTips: [
            'Create a timeline of key events from the French and Indian War to the election of 1800.',
            'Explain the key weaknesses of the Articles of Confederation that led to the creation of the Constitution.'
        ],
        recommended: true
      },
      {
        topicTitle: 'Period 7: 1890-1945',
        understandFirst: "Recognize the major problems of the Gilded Age (industrialization, urbanization, immigration) to understand the motivations behind the Progressive Era reforms.",
        lessonHeaders: [
            "Contextualizing Period 7",
            "The Gilded Age",
            "The Progressive Era",
            "U.S. Imperialism",
            "World War I",
            "The 1920s: Innovation and Conflict",
            "The Great Depression and the New Deal",
            "World War II"
        ],
        estimatedUnitTimeMinutes: 90,
        studyTips: [
            'Use thematic learning. For example, trace the changing role of the federal government through the Progressive Era, the New Deal, and WWII.',
            'Connect literary and cultural movements to the historical events of the 1920s and 1930s.'
        ],
        recommended: true
      }
    ],
    pdfMarkdown: `
# AP U.S. History Crash Course

### "History is not a set of facts, but a story of change."

---

## Period 1: 1491-1607

**Topic Overview:**  
Native American societies had complex structures before European arrival, which was followed by the transformative Columbian Exchange.

**Core Concepts:**
- Maize cultivation in the Southwest supported large-scale irrigation and settlement.
- The Great Basin and Great Plains tribes were largely mobile due to a lack of resources.
- The Columbian Exchange brought new crops to Europe and new diseases to the Americas.

> **Study Hack:** Compare and contrast the goals of the Spanish, French, and Dutch in the New World. It reveals their different settlement patterns.

---

## Period 3: 1754-1800

**Topic Overview:**  
The American colonies moved from being part of the British Empire to an independent nation, facing internal and external challenges.

**Must-Know Concepts:**
- The French and Indian War (Seven Years' War) led to the end of salutary neglect and increased British taxation.
- Enlightenment ideas from Locke (natural rights) and Montesquieu (separation of powers) fueled revolutionary sentiment.
- The Articles of Confederation were weak; Shay's Rebellion highlighted the need for a stronger central government, leading to the Constitution.

> **Mnemonic:** *"Proclamation of 1763, Stamp Act, Townshend Acts, Tea Act... See The Trouble?"*

---

## Period 7: 1890-1945

- **Progressive Era:** Muckrakers exposed corruption, leading to reforms like the Pure Food and Drug Act and the 17th Amendment.
- **Imperialism:** Debates over expansion in places like the Philippines (Anti-Imperialist League).
- **WWI & WWII:** The U.S. moved from isolationism to global leadership.
- **Great Depression:** FDR's New Deal drastically expanded the role of the federal government in the economy.

---

## Final Tips

- Think thematically (e.g., how did the definition of 'American identity' change over time?).
- Always connect historical events to their broader context (Causation).
- For DBQs, your documents are your evidence. Use them to support your argument, don't just summarize them.

---

_"The past is never dead. It's not even past.”_
`
  },
  {
    id: '3',
    slug: 'ap-calculus-ab',
    fieldOfStudy: 'STEM',
    courseTitle: 'AP Calculus AB',
    courseDescription: 'An introduction to the fundamental concepts of calculus, including limits, derivatives, and integrals.',
    mindsetTagline: 'Master the rules, understand the concepts. Calculus is a new way to see the world.',
    totalEstimatedTimeHours: 7,
    sections: [
      {
        topicTitle: 'Unit 1: Limits and Continuity',
        understandFirst: "Limits are the bedrock of calculus. Focus on what it means for a function to 'approach' a value before you tackle the algebraic tricks.",
        lessonHeaders: [
            "Defining Limits and Using Limit Notation",
            "Estimating Limit Values from Graphs & Tables",
            "Determining Limits Using Algebraic Properties",
            "Determining Limits Using Algebraic Manipulation",
            "The Squeeze Theorem",
            "Exploring Types of Discontinuities",
            "Defining Continuity at a Point",
            "Infinite Limits and Vertical Asymptotes",
            "Limits at Infinity and Horizontal Asymptotes"
        ],
        estimatedUnitTimeMinutes: 60,
        studyTips: [
          'Practice algebraic manipulation for finding limits. Factoring and multiplying by the conjugate are key skills.',
          'Draw graphs to visualize limits and discontinuities. A picture is worth a thousand equations here.'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 2: Differentiation: Definition and Basic Rules',
        understandFirst: "The derivative is just the slope of a curve at a single point. Internalize this concept before memorizing the rules.",
        lessonHeaders: [
            "Defining the Derivative of a Function",
            "Estimating Derivatives",
            "The Power Rule",
            "The Product Rule",
            "The Quotient Rule",
            "Derivatives of Trigonometric Functions"
        ],
        estimatedUnitTimeMinutes: 60,
        studyTips: [
            'Do not just memorize the rules; understand what the derivative represents (slope of the tangent line).',
            'Write out each step of the Product and Quotient rules. Do not try to do them in your head at first.'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions',
        understandFirst: 'The Chain Rule is for differentiating a "function within a function." Practice identifying the "inner" and "outer" functions.',
        lessonHeaders: [
            "The Chain Rule",
            "Implicit Differentiation",
            "Differentiating Inverse Functions",
            "Differentiating Inverse Trigonometric Functions",
            "Calculating Higher-Order Derivatives"
        ],
        estimatedUnitTimeMinutes: 75,
        studyTips: [
            'The Chain Rule is one of the most important concepts in calculus. Practice it until it becomes second nature.',
            'For implicit differentiation, remember to multiply by dy/dx every time you differentiate a y-term.'
        ],
      }
    ],
    pdfMarkdown: `
# AP Calculus AB Crash Course

### "Calculus is the art of measuring change."

---

## Unit 1: Limits and Continuity

**Topic Overview:**  
Limits describe the behavior of a function as it gets infinitely close to a point. Continuity means a function's graph has no breaks or holes.

**Core Concepts:**
- A limit exists if and only if the left-hand limit equals the right-hand limit.
- A function f(x) is continuous at x=c if lim(x→c) f(x) = f(c).
- Types of discontinuities: Removable (hole), Infinite (asymptote), Jump.

> **Study Hack:** To find the limit of a rational function, first try direct substitution. If you get 0/0, it's an indeterminate form—time to use algebra (factor) or L'Hopital's Rule!

---

## Unit 2: Differentiation

**Topic Overview:**  
The derivative is the instantaneous rate of change, or the slope of the tangent line at a point.

**Must-Know Concepts:**
- **Power Rule:** d/dx (x^n) = n*x^(n-1)
- **Product Rule:** (fg)' = f'g + fg'
- **Quotient Rule:** (f/g)' = (f'g - fg') / g^2
- **Chain Rule:** d/dx f(g(x)) = f'(g(x)) * g'(x)

> **Mnemonic:** For the Quotient Rule: *"Low D-High minus High D-Low, over the square of what's below."*

---

## Unit 3: Integration

- The **definite integral** of a function from a to b represents the accumulated area under the curve.
- The **Fundamental Theorem of Calculus (Part 1)** connects differentiation and integration: d/dx ∫[a,x] f(t) dt = f(x).
- **U-Substitution** is the "reverse chain rule" for integrals.

---

## Final Tips

- Understand the geometric meaning of the derivative (slope) and the integral (area).
- Know your derivative rules cold. They are non-negotiable.
- Practice interpreting problems in context (e.g., if v(t) is velocity, its integral is displacement).

---

_"Calculus is not just a subject; it's a new way of seeing the world.”_
`
  },
  {
    id: '5',
    slug: 'ap-psychology',
    fieldOfStudy: 'Social Sciences',
    courseTitle: 'AP Psychology',
    courseDescription: 'A scientific exploration of human behavior and mental processes.',
    mindsetTagline: 'Learn the "why" behind human behavior by connecting theories to real-life examples.',
    totalEstimatedTimeHours: 6,
    sections: [
      {
        topicTitle: 'Unit 1: Scientific Foundations of Psychology',
        understandFirst: 'Psychology is a science. Focus on the differences between research methods (e.g., correlational vs. experimental) to understand how psychologists draw conclusions.',
        lessonHeaders: [
            "Introducing Psychology: The Historical Perspectives",
            "Contemporary Approaches to Psychology",
            "Research Methods in Psychology",
            "The Experimental Method",
            "Ethical Guidelines in Psychology"
        ],
        estimatedUnitTimeMinutes: 45,
        studyTips: [
          'Be able to identify independent and dependent variables in an experiment.',
          'Create a chart comparing the major psychological perspectives (e.g., behavioral, cognitive, psychoanalytic).'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 2: Biological Bases of Behavior',
        understandFirst: 'The neuron is the fundamental building block. Understand how one neuron fires (action potential) and communicates with another (neurotransmitters) before exploring the whole brain.',
        lessonHeaders: [
            "Interaction of Heredity and Environment",
            "The Endocrine System",
            "Tools for Examining Brain Structure and Function",
            "The Brain",
            "The Neuron and Neural Firing",
            "Influence of Drugs on Neural Firing"
        ],
        estimatedUnitTimeMinutes: 60,
        studyTips: [
          'Draw a neuron and trace the path of an action potential, labeling all key parts.',
          'Use mnemonics to remember the functions of the brain lobes (e.g., "Front door" for Frontal lobe planning).'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 3: Sensation and Perception',
        understandFirst: 'Sensation is about receiving data from your senses (bottom-up), while perception is how your brain interprets that data (top-down). Get this distinction clear first.',
        lessonHeaders: [
            "Principles of Sensation & Perception",
            "Visual Anatomy",
            "Visual Perception",
            "Auditory Sensation and Perception",
            "Chemical and Body Senses"
        ],
        estimatedUnitTimeMinutes: 45,
        studyTips: [
            'Use examples from your own life to illustrate the difference between sensation and perception.',
            'Draw a diagram of the eye and ear, tracing the path of light and sound.'
        ]
      }
    ],
    pdfMarkdown: `
# AP Psychology Crash Course

### "The greatest discovery is that a human can alter his life by altering his attitudes."

---

## Unit 1: Scientific Foundations of Psychology

**Topic Overview:**  
Psychology is the scientific study of behavior and mental processes. This unit explores its history, methods, and ethical considerations.

**Core Concepts:**
- **Major Perspectives:** Psychoanalytic, Behaviorist, Humanistic, Cognitive, Biological, Sociocultural.
- **Research Methods:** Experiments (show cause-and-effect), Correlational studies (show relationships), Surveys, Naturalistic Observation.
- **Ethics:** Informed consent, debriefing, confidentiality are crucial.

> **Study Hack:** To remember neurotransmitter functions, create a silly story. "Dopey Al the Sergeant was so excited..." (Dopamine, Acetylcholine, Serotonin).

---

## Unit 2: Biological Bases of Behavior

**Topic Overview:**  
This unit explores the link between biology and behavior, from neurons to brain structures.

**Must-Know Concepts:**
- **Neuron:** The basic cell of the nervous system. Key parts: dendrite (receives signals), axon (sends signals), synapse (gap between neurons).
- **Action Potential:** An all-or-none electrical signal that travels down the axon.
- **Key Brain Lobes:** Frontal (planning, personality), Parietal (sensation, touch), Temporal (hearing, language), Occipital (vision).

> **Mnemonic:** *"The Four F's of the Frontal Lobe: Foresight, Fluency, Feeling, Function."*

---

## Unit 3: Sensation and Perception

- **Sensation vs. Perception:** Sensation is receiving sensory data; Perception is interpreting it.
- **Bottom-Up vs. Top-Down Processing:** Bottom-up starts with senses; Top-down starts with the brain's expectations.
- **Vision:** Rods (black/white, peripheral), Cones (color, detail).

---

## Final Tips

- Apply concepts to your own life. When do you conform? How have you been operantly conditioned?
- Focus on the key experiments and what they demonstrated about human behavior.
- Distinguish between similar-sounding terms (e.g., retroactive vs. proactive interference).

---

_"The purpose of psychology is to give us a completely different idea of the things we know best.”_
`
  },
  {
    id: '6',
    slug: 'ap-microeconomics',
    fieldOfStudy: 'Social Sciences',
    courseTitle: 'AP Microeconomics',
    courseDescription: 'The study of how individuals and firms make decisions regarding the allocation of scarce resources.',
    mindsetTagline: 'Think like an economist by mastering the core graphs. Every scenario is a puzzle to solve.',
    totalEstimatedTimeHours: 6,
    sections: [
      {
        topicTitle: 'Unit 1: Basic Economic Concepts',
        understandFirst: 'Scarcity is the fundamental problem of economics. Understand this and opportunity cost, and you have the foundation for everything else.',
        lessonHeaders: [
            "Scarcity",
            "Opportunity Cost and the Production Possibilities Curve (PPC)",
            "Comparative Advantage and Gains from Trade",
            "Demand",
            "Supply",
            "Market Equilibrium"
        ],
        estimatedUnitTimeMinutes: 45,
        studyTips: [
            'Be able to draw and interpret a PPC graph. Understand what points inside, on, and outside the curve mean.',
            'For any decision, always ask: "What is the opportunity cost?" This is the core of economic thinking.'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 2: Supply and Demand',
        understandFirst: 'This is the most important unit. Master drawing supply and demand graphs and identifying what causes the curves to shift.',
        lessonHeaders: [
            "Price Elasticity of Demand",
            "Price Elasticity of Supply",
            "Income and Cross-Price Elasticity",
            "Consumer and Producer Surplus",
            "Market Efficiency and Deadweight Loss",
            "Effect of Government Intervention (Taxes, Subsidies, Price Controls)"
        ],
        estimatedUnitTimeMinutes: 75,
        studyTips: [
            'Practice drawing S&D graphs and shifting the curves daily. Clearly label everything.',
            'Use the mnemonic "TRIBE" for demand shifters (Tastes, Related goods, Income, Buyers, Expectations).'
        ],
        recommended: true
      },
      {
        topicTitle: 'Unit 4: Imperfect Competition',
        understandFirst: 'Understand the characteristics of a monopoly (one seller, high barriers to entry) as the extreme opposite of perfect competition.',
        lessonHeaders: [
            "Introduction to Imperfectly Competitive Markets",
            "Monopoly",
            "Price Discrimination",
            "Monopolistic Competition",
            "Oligopoly and Game Theory"
        ],
        estimatedUnitTimeMinutes: 75,
        studyTips: [
            'Create a table comparing the four market structures (Perfect Competition, Monopoly, Oligopoly, Monopolistic Competition).',
            'For game theory, always look for the dominant strategy for each player first.'
        ]
      }
    ],
    pdfMarkdown: `
# Intro to Microeconomics Crash Course

### "Economics is the study of choice under scarcity."

---

## Unit 1: Basic Economic Concepts

**Topic Overview:**  
Economics is about making decisions when you can't have everything you want (scarcity).

**Core Concepts:**
- **Scarcity:** The fundamental economic problem. Unlimited wants, limited resources.
- **Opportunity Cost:** The value of the next best alternative you give up when you make a choice. There's no such thing as a free lunch!
- **Production Possibilities Curve (PPC):** A graph showing the maximum combinations of two goods that can be produced with available resources. Points on the curve are efficient.

> **Study Hack:** For any decision, always ask: "What is the opportunity cost?" This is the core of economic thinking.

---

## Unit 2: Supply and Demand

**Topic Overview:**  
The interaction of buyers (demand) and sellers (supply) determines the price and quantity of goods in a market.

**Must-Know Concepts:**
- **Law of Demand:** As price falls, quantity demanded rises (downward-sloping curve).
- **Law of Supply:** As price rises, quantity supplied rises (upward-sloping curve).
- **Equilibrium:** The point where the supply and demand curves intersect. This is the market-clearing price and quantity.
- **Shifters:** Know what shifts the entire curve (e.g., income for demand, technology for supply) vs. what causes movement along it (a price change).

> **Mnemonic:** For demand curve shifters: **TRIBE** (Tastes, Related goods, Income, Buyers, Expectations).

---

## Unit 4: Imperfect Competition

- **Perfect Competition:** Many firms, identical products, no barriers to entry (e.g., agriculture). Price takers.
- **Monopoly:** One firm, unique product, high barriers to entry (e.g., local utility). Price makers.
- **Oligopoly:** A few large firms dominate (e.g., cell phone carriers). Strategic interaction is key.
- **Monopolistic Competition:** Many firms, differentiated products (e.g., restaurants, hair salons).

---

## Final Tips

- **Draw the graph!** Visualizing supply and demand shifts is the most important skill in this course.
- Clearly distinguish between a "change in demand" (shift of the curve) and a "change in quantity demanded" (movement along the curve).
- Think at the margin. Economic decisions are about the cost and benefit of the *next* one.

---

_"The art of economics consists in looking not merely at the immediate but at the longer effects of any act or policy.”_
`
  },
];

export const courses = allCourses;
