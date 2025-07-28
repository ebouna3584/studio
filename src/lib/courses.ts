
export type CourseSection = {
  topicTitle: string;
  explanation: string;
  studyTip?: string;
  lessonHeaders: string[];
  totalTimeMinutes: number;
};

export type Course = {
  id: string;
  slug: string;
  courseTitle: string;
  courseDescription:string;
  sections: CourseSection[];
  pdfMarkdown: string;
  timeEstimateMinutes: number;
};

const allCourses: Course[] = [
  {
    id: '1',
    slug: 'ap-biology',
    courseTitle: 'AP Biology',
    courseDescription: 'A deep dive into the study of life and living organisms, from molecular biology to ecosystems.',
    timeEstimateMinutes: 900,
    sections: [
      {
        topicTitle: 'Unit 1: Chemistry of Life',
        explanation: `All life is subject to the laws of chemistry. This unit explores the chemical building blocks of life, including the properties of water, the structure of macromolecules like carbohydrates, lipids, proteins, and nucleic acids, and the principles of energy and metabolism.`,
        studyTip: 'Create flashcards for the four main macromolecules and their monomers. Understanding their structure is key to understanding their function.',
        lessonHeaders: [
            "Structure of Water and Hydrogen Bonding",
            "Elements of Life",
            "Introduction to Macromolecules",
            "Properties of Macromolecules",
            "Structure and Function of Biological Macromolecules",
            "Nucleic Acids"
        ],
        totalTimeMinutes: 120
      },
      {
        topicTitle: 'Unit 2: Cell Structure and Function',
        explanation: 'The cell is the basic unit of life. We will examine the differences between prokaryotic and eukaryotic cells, tour the various organelles and their functions, and understand how cells transport materials across their membranes.',
        studyTip: 'Draw and label a diagram of both a plant and animal cell. Explain the function of each organelle in your own words.',
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
        totalTimeMinutes: 160
      },
      {
        topicTitle: 'Unit 3: Cellular Energetics',
        explanation: `This section covers how cells acquire and use energy. Key processes include photosynthesis, where organisms capture light energy to build sugars, and cellular respiration, where sugars are broken down to produce ATP.`,
        studyTip: 'Focus on the inputs and outputs for each major stage of photosynthesis and cellular respiration. A flowchart can be very helpful here.',
        lessonHeaders: [
            "Enzyme Structure",
            "Enzyme Catalysis",
            "Environmental Impacts on Enzyme Function",
            "Cellular Energy",
            "Photosynthesis",
            "Cellular Respiration"
        ],
        totalTimeMinutes: 140
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
    courseTitle: 'AP U.S. History (APUSH)',
    courseDescription: 'Explore the vast history of the United States from the pre-Columbian era to the present.',
    timeEstimateMinutes: 900,
    sections: [
      {
        topicTitle: 'Period 1: 1491-1607',
        explanation: 'This period covers the Americas before European contact and the early stages of the Columbian Exchange. We explore diverse Native American societies and the initial impacts of Spanish, French, and Dutch colonization.',
        studyTip: 'Focus on the concept of the Columbian Exchange and its impact on both the Old World and the New World. It\'s a foundational concept for the rest of the course.',
        lessonHeaders: [
            "Contextualizing Period 1",
            "Native American Societies Before European Contact",
            "European Exploration in the Americas",
            "Columbian Exchange, Spanish Exploration, and Conquest",
            "Labor, Slavery, and Caste in the Spanish Colonial System",
            "Cultural Interactions Between Europeans, Native Americans, and Africans"
        ],
        totalTimeMinutes: 90
      },
      {
        topicTitle: 'Period 3: 1754-1800',
        explanation: 'A pivotal era covering the lead-up to the American Revolution, the war itself, and the challenges of creating a new nation under the Articles of Confederation and, later, the Constitution.',
        studyTip: 'Create a timeline of key events from the French and Indian War to the election of 1800. Note the cause-and-effect relationships between events.',
        lessonHeaders: [
            "The French and Indian War",
            "The Imperial Crisis and the Road to Revolution",
            "The American Revolution",
            "The Articles of Confederation",
            "The Constitutional Convention and Debates over Ratification",
            "The Development of Political Parties",
            "America on the World Stage"
        ],
        totalTimeMinutes: 150
      },
      {
        topicTitle: 'Period 7: 1890-1945',
        explanation: 'This period examines the Progressive Era, U.S. expansionism, World War I, the Roaring Twenties, the Great Depression, and World War II. It\'s a time of immense social, political, and economic change.',
        studyTip: 'Use thematic learning. For example, trace the changing role of the federal government through the Progressive Era, the New Deal, and WWII.',
        lessonHeaders: [
            "The Gilded Age",
            "The Progressive Era",
            "U.S. Imperialism",
            "World War I",
            "The 1920s: Innovation and Conflict",
            "The Great Depression and the New Deal",
            "World War II"
        ],
        totalTimeMinutes: 200
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
    courseTitle: 'AP Calculus AB',
    courseDescription: 'An introduction to the fundamental concepts of calculus, including limits, derivatives, and integrals.',
    timeEstimateMinutes: 900,
    sections: [
      {
        topicTitle: 'Unit 1: Limits and Continuity',
        explanation: 'Limits are the foundation of calculus. They describe the value that a function approaches as the input approaches some value. We\'ll explore how to find limits graphically and algebraically and connect this to the concept of continuity.',
        studyTip: 'Practice, practice, practice algebraic manipulation for finding limits. Factoring, multiplying by the conjugate, and finding common denominators are essential skills.',
        lessonHeaders: [
            "Introducing Calculus: Can Change Occur at an Instant?",
            "Defining Limits and Using Limit Notation",
            "Estimating Limit Values from Graphs",
            "Estimating Limit Values from Tables",
            "Determining Limits Using Algebraic Properties of Limits",
            "Determining Limits Using Algebraic Manipulation",
            "Selecting Procedures for Determining Limits",
            "Determining Limits Using the Squeeze Theorem",
            "Connecting Multiple Representations of Limits",
            "Exploring Types of Discontinuities",
            "Defining Continuity at a Point",
            "Confirming Continuity over an Interval",
            "Removing Discontinuities",
            "Connecting Infinite Limits and Vertical Asymptotes",
            "Connecting Limits at Infinity and Horizontal Asymptotes"
        ],
        totalTimeMinutes: 200
      },
      {
        topicTitle: 'Unit 2: Differentiation: Definition and Fundamental Properties',
        explanation: 'The derivative represents the instantaneous rate of change of a function. This section introduces the formal definition of the derivative and covers essential rules like the Power, Product, and Quotient Rules.',
        studyTip: 'Do not just memorize the rules; understand what the derivative represents (slope of the tangent line). This conceptual understanding is crucial.',
        lessonHeaders: [
            "Defining the Derivative of a Function and Using Derivative Notation",
            "Estimating Derivatives of a Function at a Point",
            "Applying the Power Rule",
            "The Product Rule",
            "The Quotient Rule",
            "Derivatives of Trigonometric Functions"
        ],
        totalTimeMinutes: 150
      },
      {
        topicTitle: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions',
        explanation: 'This unit focuses on more advanced differentiation techniques, including the chain rule for composite functions, implicit differentiation for relations that are not functions, and finding derivatives of inverse functions.',
        studyTip: 'The Chain Rule is one of the most important concepts in calculus. Practice it with various combinations of functions until it becomes second nature.',
        lessonHeaders: [
            "The Chain Rule",
            "Implicit Differentiation",
            "Differentiating Inverse Functions",
            "Differentiating Inverse Trigonometric Functions",
            "Selecting Procedures for Calculating Derivatives",
            "Calculating Higher-Order Derivatives"
        ],
        totalTimeMinutes: 150
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
    courseTitle: 'AP Psychology',
    courseDescription: 'A scientific exploration of human behavior and mental processes.',
    timeEstimateMinutes: 900,
    sections: [
      {
        topicTitle: 'Unit 1: Scientific Foundations of Psychology',
        explanation: 'This unit introduces the history of psychology and its various approaches. It also covers the research methods psychologists use to study behavior and mental processes scientifically.',
        studyTip: 'Focus on the differences between research methods (e.g., correlational vs. experimental) and be able to identify independent and dependent variables.',
        lessonHeaders: [
            "Introducing Psychology",
            "Research Methods in Psychology",
            "The Experimental Method",
            "Selecting a Research Method",
            "Statistical Analysis in Psychology",
            "Ethical Guidelines in Psychology"
        ],
        totalTimeMinutes: 100,
      },
      {
        topicTitle: 'Unit 2: Biological Bases of Behavior',
        explanation: 'This unit explores the link between biology and behavior. Topics include the structure and function of neurons, the nervous system, the endocrine system, and how genetics and brain structures influence our thoughts and actions.',
        studyTip: 'Draw a neuron and trace the path of an action potential, labeling all key parts and ions involved. This visual mapping helps solidify the concept.',
        lessonHeaders: [
            "Interaction of Heredity and Environment",
            "The Endocrine System",
            "Tools for Examining Brain Structure and Function",
            "The Brain",
            "The Neuron",
            "Neural Firing",
            "Influence of Drugs on Neural Firing"
        ],
        totalTimeMinutes: 120,
      },
      {
        topicTitle: 'Unit 3: Sensation and Perception',
        explanation: 'Sensation is the process of receiving stimulus energy from the environment, while perception is the process of organizing and interpreting that sensory information. This unit covers all the major senses.',
        studyTip: 'Clearly distinguish between sensation (bottom-up processing) and perception (top-down processing). Use examples to illustrate the difference.',
        lessonHeaders: [
            "Principles of Sensation",
            "Principles of Perception",
            "Visual Anatomy",
            "Visual Perception",
            "Auditory Sensation and Perception",
            "Chemical Senses",
            "Body Senses"
        ],
        totalTimeMinutes: 110,
      }
    ],
    pdfMarkdown: `
# AP Psychology Crash Course

### "The greatest discovery is that a human can alter his life by altering his attitudes."

---

## Unit 1: Scientific Foundations of Psychology

**Topic Overview:**  
Our brains, neurons, and hormones are the biological hardware that runs our mental software.

**Core Concepts:**
- **Neuron:** The basic cell of the nervous system. Key parts: dendrite (receives signals), axon (sends signals), synapse (gap between neurons).
- **Action Potential:** An all-or-none electrical signal that travels down the axon.
- **Key Brain Lobes:** Frontal (planning, personality), Parietal (sensation, touch), Temporal (hearing, language), Occipital (vision).

> **Study Hack:** To remember neurotransmitter functions, create a silly story. "Dopey Al the Sergeant was so excited..." (Dopamine, Acetylcholine, Serotonin).

---

## Unit 2: Biological Bases of Behavior

**Topic Overview:**  
This unit explores the link between biology and behavior, from neurons to brain structures.

**Must-Know Concepts:**
- **Classical Conditioning (Pavlov):** Learning by association. A neutral stimulus (bell) becomes paired with an unconditioned stimulus (food) to elicit a conditioned response (salivation).
- **Operant Conditioning (Skinner):** Learning through consequences. Reinforcement increases a behavior; punishment decreases it.
- **Observational Learning (Bandura):** Learning by watching others (modeling). Bobo doll experiment is the classic example.

> **Mnemonic:** *"Reinforcement is Rewarding. Punishment is a Pain."*

---

## Unit 3: Sensation and Perception

- **Conformity (Asch):** Adjusting our behavior or thinking to coincide with a group standard.
- **Obedience (Milgram):** Compliance with commands given by an authority figure.
- **Fundamental Attribution Error:** Overestimating personality and underestimating the situation when explaining others' behavior.

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
    courseTitle: 'AP Microeconomics',
    courseDescription: 'The study of how individuals and firms make decisions regarding the allocation of scarce resources.',
    timeEstimateMinutes: 900,
    sections: [
      {
        topicTitle: 'Unit 1: Basic Economic Concepts',
        explanation: 'This unit introduces the fundamental ideas of economics, including scarcity, opportunity cost, and the production possibilities curve (PPC). These concepts form the basis for all economic reasoning.',
        studyTip: 'Be able to draw and interpret a PPC graph. Understand what points inside, on, and outside the curve represent, and what causes the curve to shift.',
        lessonHeaders: [
            "Scarcity",
            "Opportunity Cost and the Production Possibilities Curve (PPC)",
            "Comparative Advantage and Gains from Trade",
            "Demand",
            "Supply",
            "Market Equilibrium, Disequilibrium, and Changes in Equilibrium"
        ],
        totalTimeMinutes: 150
      },
      {
        topicTitle: 'Unit 2: Supply and Demand',
        explanation: 'The model of supply and demand is the economist\'s most important tool. We analyze how markets work, what determines the price and quantity of goods, and how government policies like price ceilings and taxes affect market outcomes.',
        studyTip: 'Practice drawing supply and demand graphs and shifting the curves. Clearly label your axes (Price and Quantity) and equilibrium points. This is the single most important skill in the course.',
        lessonHeaders: [
            "Price Elasticity of Demand",
            "Price Elasticity of Supply",
            "Income Elasticity and Cross-Price Elasticity of Demand",
            "Consumer Surplus, Producer Surplus, and Market Efficiency",
            "Effect of Government Intervention in Markets",
            "International Trade and Public Policy"
        ],
        totalTimeMinutes: 200
      },
      {
        topicTitle: 'Unit 4: Imperfect Competition',
        explanation: 'This section compares different types of markets that are not perfectly competitive: monopolistic competition, oligopoly, and monopoly. We examine how firms behave in each structure regarding pricing and output decisions.',
        studyTip: 'Create a table comparing the four market structures (including perfect competition) based on number of firms, type of product, barriers to entry, and long-run profitability.',
        lessonHeaders: [
            "Introduction to Imperfectly Competitive Markets",
            "Monopoly",
            "Price Discrimination",
            "Monopolistic Competition",
            "Oligopoly and Game Theory"
        ],
        totalTimeMinutes: 200
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

export const courses = allCourses.filter(c => ['ap-biology', 'ap-us-history', 'ap-calculus-ab', 'ap-psychology', 'ap-microeconomics'].includes(c.slug));
