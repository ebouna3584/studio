export type CourseSection = {
  topicTitle: string;
  explanation: string;
  studyTip?: string;
};

export type Course = {
  id: string;
  slug: string;
  courseTitle: string;
  courseDescription:string;
  sections: CourseSection[];
  pdfMarkdown: string;
};

const allCourses: Course[] = [
  {
    id: '1',
    slug: 'ap-biology',
    courseTitle: 'AP Biology',
    courseDescription: 'A deep dive into the study of life and living organisms, from molecular biology to ecosystems.',
    sections: [
      {
        topicTitle: 'Chemistry of Life',
        explanation: `All life is subject to the laws of chemistry. This unit explores the chemical building blocks of life, including the properties of water, the structure of macromolecules like carbohydrates, lipids, proteins, and nucleic acids, and the principles of energy and metabolism.`,
        studyTip: 'Create flashcards for the four main macromolecules and their monomers. Understanding their structure is key to understanding their function.'
      },
      {
        topicTitle: 'Cell Structure and Function',
        explanation: 'The cell is the basic unit of life. We will examine the differences between prokaryotic and eukaryotic cells, tour the various organelles and their functions, and understand how cells transport materials across their membranes.',
        studyTip: 'Draw and label a diagram of both a plant and animal cell. Explain the function of each organelle in your own words.'
      },
      {
        topicTitle: 'Cellular Energetics',
        explanation: `This section covers how cells acquire and use energy. Key processes include photosynthesis, where organisms capture light energy to build sugars, and cellular respiration, where sugars are broken down to produce ATP.`,
        studyTip: 'Focus on the inputs and outputs for each major stage of photosynthesis and cellular respiration. A flowchart can be very helpful here.'
      }
    ],
    pdfMarkdown: `
# 📘 AP Biology Crash Course

### "Precision over pressure. Learn less, retain more."

---

## 🧬 Unit 1: Chemistry of Life

**Topic Overview:**  
Biological macromolecules are molecules that support life and include carbohydrates, proteins, lipids, and nucleic acids.

**Core Concepts:**
- Water’s polarity gives it adhesive, cohesive, and thermal properties.
- Carbon can form up to four covalent bonds → foundation of organic molecules.
- Proteins are made of amino acids joined by peptide bonds.

> 🔍 **Study Hack:** When memorizing molecules, imagine building LEGO structures—start from the smallest piece and connect.

---

## 🧠 Unit 2: Cell Structure and Function

**Topic Overview:**  
Cells are the fundamental units of life, divided into prokaryotic and eukaryotic.

**Must-Know Concepts:**
- Prokaryotes have no membrane-bound organelles.
- Ribosomes synthesize proteins; mitochondria make ATP via cellular respiration.
- Cell membranes are selectively permeable due to the phospholipid bilayer.

> 🧩 **Mnemonic:** *"Rough ER has Ribosomes. Smooth ER is Slippery."*

---

## 🔬 Unit 3: Cellular Energetics

- Enzymes lower activation energy
- Photosynthesis occurs in chloroplasts (light-dependent and Calvin Cycle)
- Cellular respiration includes glycolysis, Krebs cycle, and ETC

---

## 🧷 Final Tips

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
    sections: [
      {
        topicTitle: 'Period 1: 1491-1607',
        explanation: 'This period covers the Americas before European contact and the early stages of the Columbian Exchange. We explore diverse Native American societies and the initial impacts of Spanish, French, and Dutch colonization.',
        studyTip: 'Focus on the concept of the Columbian Exchange and its impact on both the Old World and the New World. It\'s a foundational concept for the rest of the course.'
      },
      {
        topicTitle: 'Period 3: 1754-1800',
        explanation: 'A pivotal era covering the lead-up to the American Revolution, the war itself, and the challenges of creating a new nation under the Articles of Confederation and, later, the Constitution.',
        studyTip: 'Create a timeline of key events from the French and Indian War to the election of 1800. Note the cause-and-effect relationships between events.'
      },
      {
        topicTitle: 'Period 7: 1890-1945',
        explanation: 'This period examines the Progressive Era, U.S. expansionism, World War I, the Roaring Twenties, the Great Depression, and World War II. It\'s a time of immense social, political, and economic change.',
        studyTip: 'Use thematic learning. For example, trace the changing role of the federal government through the Progressive Era, the New Deal, and WWII.'
      }
    ],
    pdfMarkdown: `
# 🇺🇸 AP U.S. History Crash Course

### "History is not a set of facts, but a story of change."

---

## 🌎 Period 1: 1491-1607

**Topic Overview:**  
Native American societies had complex structures before European arrival, which was followed by the transformative Columbian Exchange.

**Core Concepts:**
- Maize cultivation in the Southwest supported large-scale irrigation and settlement.
- The Great Basin and Great Plains tribes were largely mobile due to a lack of resources.
- The Columbian Exchange brought new crops to Europe and new diseases to the Americas.

> 🔍 **Study Hack:** Compare and contrast the goals of the Spanish, French, and Dutch in the New World. It reveals their different settlement patterns.

---

## 🗽 Period 3: 1754-1800

**Topic Overview:**  
The American colonies moved from being part of the British Empire to an independent nation, facing internal and external challenges.

**Must-Know Concepts:**
- The French and Indian War (Seven Years' War) led to the end of salutary neglect and increased British taxation.
- Enlightenment ideas from Locke (natural rights) and Montesquieu (separation of powers) fueled revolutionary sentiment.
- The Articles of Confederation were weak; Shay's Rebellion highlighted the need for a stronger central government, leading to the Constitution.

> 🧩 **Mnemonic:** *"Proclamation of 1763, Stamp Act, Townshend Acts, Tea Act... See The Trouble?"*

---

## 🏛️ Period 7: 1890-1945

- **Progressive Era:** Muckrakers exposed corruption, leading to reforms like the Pure Food and Drug Act and the 17th Amendment.
- **Imperialism:** Debates over expansion in places like the Philippines (Anti-Imperialist League).
- **WWI & WWII:** The U.S. moved from isolationism to global leadership.
- **Great Depression:** FDR's New Deal drastically expanded the role of the federal government in the economy.

---

## 🧷 Final Tips

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
    sections: [
      {
        topicTitle: 'Limits and Continuity',
        explanation: 'Limits are the foundation of calculus. They describe the value that a function approaches as the input approaches some value. We\'ll explore how to find limits graphically and algebraically and connect this to the concept of continuity.',
        studyTip: 'Practice, practice, practice algebraic manipulation for finding limits. Factoring, multiplying by the conjugate, and finding common denominators are essential skills.'
      },
      {
        topicTitle: 'Differentiation: Definition and Fundamental Properties',
        explanation: 'The derivative represents the instantaneous rate of change of a function. This section introduces the formal definition of the derivative and covers essential rules like the Power, Product, and Quotient Rules.',
        studyTip: 'Do not just memorize the rules; understand what the derivative represents (slope of the tangent line). This conceptual understanding is crucial.'
      },
      {
        topicTitle: 'Integration and Accumulation of Change',
        explanation: 'Integration can be understood as the process of summing up infinite small pieces, often to find the area under a curve. We introduce the concept of the definite integral and the Fundamental Theorem of Calculus, which links derivatives and integrals.',
        studyTip: 'Connect the concepts. The Fundamental Theorem of Calculus is the bridge between differentiation and integration. Make sure you understand why it works.'
      }
    ],
    pdfMarkdown: `
# 📈 AP Calculus AB Crash Course

### "Calculus is the art of measuring change."

---

## 📉 Unit 1: Limits and Continuity

**Topic Overview:**  
Limits describe the behavior of a function as it gets infinitely close to a point. Continuity means a function's graph has no breaks or holes.

**Core Concepts:**
- A limit exists if and only if the left-hand limit equals the right-hand limit.
- A function f(x) is continuous at x=c if lim(x→c) f(x) = f(c).
- Types of discontinuities: Removable (hole), Infinite (asymptote), Jump.

> 🔍 **Study Hack:** To find the limit of a rational function, first try direct substitution. If you get 0/0, it's an indeterminate form—time to use algebra (factor) or L'Hopital's Rule!

---

## 📐 Unit 2: Differentiation

**Topic Overview:**  
The derivative is the instantaneous rate of change, or the slope of the tangent line at a point.

**Must-Know Concepts:**
- **Power Rule:** d/dx (x^n) = n*x^(n-1)
- **Product Rule:** (fg)' = f'g + fg'
- **Quotient Rule:** (f/g)' = (f'g - fg') / g^2
- **Chain Rule:** d/dx f(g(x)) = f'(g(x)) * g'(x)

> 🧩 **Mnemonic:** For the Quotient Rule: *"Low D-High minus High D-Low, over the square of what's below."*

---

## 📊 Unit 3: Integration

- The **definite integral** of a function from a to b represents the accumulated area under the curve.
- The **Fundamental Theorem of Calculus (Part 1)** connects differentiation and integration: d/dx ∫[a,x] f(t) dt = f(x).
- **U-Substitution** is the "reverse chain rule" for integrals.

---

## 🧷 Final Tips

- Understand the geometric meaning of the derivative (slope) and the integral (area).
- Know your derivative rules cold. They are non-negotiable.
- Practice interpreting problems in context (e.g., if v(t) is velocity, its integral is displacement).

---

_"Calculus is not just a subject; it's a new way of seeing the world.”_
`
  },
  {
    id: '4',
    slug: 'organic-chemistry-i',
    courseTitle: 'Organic Chemistry I',
    courseDescription: 'The study of the structure, properties, composition, reactions, and preparation of carbon-containing compounds.',
    sections: [
        {
            topicTitle: 'Structure and Bonding',
            explanation: 'This foundational unit introduces atomic and molecular orbitals, hybridization (sp3, sp2, sp), and the geometry of organic molecules. Understanding VSEPR theory is crucial for predicting molecular shapes.',
            studyTip: 'Get a molecular model kit. Physically building molecules will give you a much better intuition for 3D structure and stereochemistry.'
        },
        {
            topicTitle: 'Stereochemistry',
            explanation: 'Stereochemistry is the study of the 3D arrangement of atoms in molecules. Key concepts include chirality, enantiomers, diastereomers, and the Cahn-Ingold-Prelog (R/S) system for naming stereocenters.',
            studyTip: 'Practice identifying chiral centers and assigning R/S configurations until it becomes second nature. This skill is required for almost every subsequent chapter.'
        },
        {
            topicTitle: 'Substitution and Elimination Reactions (SN1, SN2, E1, E2)',
            explanation: 'These are the cornerstone reactions of Organic Chemistry I. We analyze the mechanisms, substrates, nucleophiles/bases, leaving groups, and solvent effects that determine which reaction pathway is favored.',
            studyTip: 'Create a summary chart that compares the four main reaction types (SN1, SN2, E1, E2) based on key factors. This will be your most valuable study aid.'
        }
    ],
    pdfMarkdown: `
# 🧪 Organic Chemistry I Crash Course

### "It's like building with LEGOs, but on a molecular level."

---

## ⚛️ Unit 1: Structure and Bonding

**Topic Overview:**  
The shape and stability of organic molecules are determined by how carbon atoms bond using hybridized orbitals.

**Core Concepts:**
- **sp3 hybridization** (e.g., methane): tetrahedral geometry, 109.5° bond angles.
- **sp2 hybridization** (e.g., ethene): trigonal planar geometry, 120° bond angles, contains one double bond (1 sigma, 1 pi).
- **sp hybridization** (e.g., ethyne): linear geometry, 180° bond angles, contains one triple bond (1 sigma, 2 pi).

> 🔍 **Study Hack:** Use a molecular model kit. Seeing the 3D shapes is far more effective than just looking at 2D drawings.

---

## 🔄 Unit 2: Stereochemistry

**Topic Overview:**  
Molecules can have the same connectivity but different 3D arrangements, known as stereoisomers.

**Must-Know Concepts:**
- A **chiral center** is a carbon atom bonded to four different groups.
- **Enantiomers** are non-superimposable mirror images of each other (like left and right hands).
- **Diastereomers** are stereoisomers that are not mirror images.
- Use the **Cahn-Ingold-Prelog** rules to assign R (clockwise) or S (counter-clockwise) configuration to a chiral center.

> 🧩 **Mnemonic:** *"Enantiomers are Evil twins (mirror images). Diastereomers are Distant relatives."*

---

## 💥 Unit 3: Substitution & Elimination

- **SN2:** 1 step (concerted), needs a strong/unhindered nucleophile, prefers primary substrates, inverts stereochemistry.
- **SN1:** 2 steps (carbocation intermediate), needs a weak nucleophile/polar protic solvent, prefers tertiary substrates, creates a racemic mixture.
- **E2:** 1 step, needs a strong/bulky base, requires an anti-periplanar proton.
- **E1:** 2 steps, competes with SN1, favored by heat.

---

## 🧷 Final Tips

- Don't just memorize reactions, learn the **mechanisms** (the "why"). Pushing arrows is key.
- Make reaction flashcards with the substrate, reagents, and product.
- Redraw mechanisms over and over until you can do them from memory.

---

_"Organic chemistry is the study of the flow of electrons.”_
`
  },
  {
    id: '5',
    slug: 'introduction-to-psychology',
    courseTitle: 'Introduction to Psychology',
    courseDescription: 'A scientific exploration of human behavior and mental processes.',
    sections: [
        {
            topicTitle: 'Biological Bases of Behavior',
            explanation: 'This unit explores the link between biology and behavior. Topics include the structure and function of neurons, the nervous system, the endocrine system, and how genetics and brain structures influence our thoughts and actions.',
            studyTip: 'Draw a neuron and trace the path of an action potential, labeling all key parts and ions involved. This visual mapping helps solidify the concept.'
        },
        {
            topicTitle: 'Learning',
            explanation: 'How do we learn? This section covers major theories of learning, including classical conditioning (Pavlov), operant conditioning (Skinner), and observational learning (Bandura).',
            studyTip: 'Think of real-life examples for each type of learning. For operant conditioning, clearly distinguish between positive/negative reinforcement/punishment.'
        },
        {
            topicTitle: 'Social Psychology',
            explanation: 'This fascinating area examines how our thoughts, feelings, and behaviors are influenced by the presence of others. Key topics include conformity, obedience, attribution theory, and cognitive dissonance.',
            studyTip: 'Focus on classic experiments like Asch\'s conformity study and Milgram\'s obedience study. Understand their methodology and implications.'
        }
    ],
    pdfMarkdown: `
# 🧠 Introduction to Psychology Crash Course

### "The greatest discovery is that a human can alter his life by altering his attitudes."

---

## 🔬 Unit 1: Biological Bases of Behavior

**Topic Overview:**  
Our brains, neurons, and hormones are the biological hardware that runs our mental software.

**Core Concepts:**
- **Neuron:** The basic cell of the nervous system. Key parts: dendrite (receives signals), axon (sends signals), synapse (gap between neurons).
- **Action Potential:** An all-or-none electrical signal that travels down the axon.
- **Key Brain Lobes:** Frontal (planning, personality), Parietal (sensation, touch), Temporal (hearing, language), Occipital (vision).

> 🔍 **Study Hack:** To remember neurotransmitter functions, create a silly story. "Dopey Al the Sergeant was so excited..." (Dopamine, Acetylcholine, Serotonin).

---

## 🔔 Unit 2: Learning

**Topic Overview:**  
Learning is a relatively permanent change in behavior due to experience.

**Must-Know Concepts:**
- **Classical Conditioning (Pavlov):** Learning by association. A neutral stimulus (bell) becomes paired with an unconditioned stimulus (food) to elicit a conditioned response (salivation).
- **Operant Conditioning (Skinner):** Learning through consequences. Reinforcement increases a behavior; punishment decreases it.
- **Observational Learning (Bandura):** Learning by watching others (modeling). Bobo doll experiment is the classic example.

> 🧩 **Mnemonic:** *"Reinforcement is Rewarding. Punishment is a Pain."*

---

## 👥 Unit 3: Social Psychology

- **Conformity (Asch):** Adjusting our behavior or thinking to coincide with a group standard.
- **Obedience (Milgram):** Compliance with commands given by an authority figure.
- **Fundamental Attribution Error:** Overestimating personality and underestimating the situation when explaining others' behavior.

---

## 🧷 Final Tips

- Apply concepts to your own life. When do you conform? How have you been operantly conditioned?
- Focus on the key experiments and what they demonstrated about human behavior.
- Distinguish between similar-sounding terms (e.g., retroactive vs. proactive interference).

---

_"The purpose of psychology is to give us a completely different idea of the things we know best.”_
`
  },
  {
    id: '6',
    slug: 'intro-to-microeconomics',
    courseTitle: 'Intro to Microeconomics',
    courseDescription: 'The study of how individuals and firms make decisions regarding the allocation of scarce resources.',
     sections: [
        {
            topicTitle: 'Basic Economic Concepts',
            explanation: 'This unit introduces the fundamental ideas of economics, including scarcity, opportunity cost, and the production possibilities curve (PPC). These concepts form the basis for all economic reasoning.',
            studyTip: 'Be able to draw and interpret a PPC graph. Understand what points inside, on, and outside the curve represent, and what causes the curve to shift.'
        },
        {
            topicTitle: 'Supply and Demand',
            explanation: 'The model of supply and demand is the economist\'s most important tool. We analyze how markets work, what determines the price and quantity of goods, and how government policies like price ceilings and taxes affect market outcomes.',
            studyTip: 'Practice drawing supply and demand graphs and shifting the curves. Clearly label your axes (Price and Quantity) and equilibrium points. This is the single most important skill in the course.'
        },
        {
            topicTitle: 'Market Structures',
            explanation: 'This section compares different types of markets: perfect competition, monopolistic competition, oligopoly, and monopoly. We examine how firms behave in each structure regarding pricing and output decisions.',
            studyTip: 'Create a table comparing the four market structures based on number of firms, type of product, barriers to entry, and long-run profitability.'
        }
    ],
    pdfMarkdown: `
# 💰 Intro to Microeconomics Crash Course

### "Economics is the study of choice under scarcity."

---

## 📈 Unit 1: Basic Economic Concepts

**Topic Overview:**  
Economics is about making decisions when you can't have everything you want (scarcity).

**Core Concepts:**
- **Scarcity:** The fundamental economic problem. Unlimited wants, limited resources.
- **Opportunity Cost:** The value of the next best alternative you give up when you make a choice. There's no such thing as a free lunch!
- **Production Possibilities Curve (PPC):** A graph showing the maximum combinations of two goods that can be produced with available resources. Points on the curve are efficient.

> 🔍 **Study Hack:** For any decision, always ask: "What is the opportunity cost?" This is the core of economic thinking.

---

## ⚖️ Unit 2: Supply and Demand

**Topic Overview:**  
The interaction of buyers (demand) and sellers (supply) determines the price and quantity of goods in a market.

**Must-Know Concepts:**
- **Law of Demand:** As price falls, quantity demanded rises (downward-sloping curve).
- **Law of Supply:** As price rises, quantity supplied rises (upward-sloping curve).
- **Equilibrium:** The point where the supply and demand curves intersect. This is the market-clearing price and quantity.
- **Shifters:** Know what shifts the entire curve (e.g., income for demand, technology for supply) vs. what causes movement along it (a price change).

> 🧩 **Mnemonic:** For demand curve shifters: **TRIBE** (Tastes, Related goods, Income, Buyers, Expectations).

---

## 🏪 Unit 3: Market Structures

- **Perfect Competition:** Many firms, identical products, no barriers to entry (e.g., agriculture). Price takers.
- **Monopoly:** One firm, unique product, high barriers to entry (e.g., local utility). Price makers.
- **Oligopoly:** A few large firms dominate (e.g., cell phone carriers). Strategic interaction is key.
- **Monopolistic Competition:** Many firms, differentiated products (e.g., restaurants, hair salons).

---

## 🧷 Final Tips

- **Draw the graph!** Visualizing supply and demand shifts is the most important skill in this course.
- Clearly distinguish between a "change in demand" (shift of the curve) and a "change in quantity demanded" (movement along the curve).
- Think at the margin. Economic decisions are about the cost and benefit of the *next* one.

---

_"The art of economics consists in looking not merely at the immediate but at the longer effects of any act or policy.”_
`
  },
  {
    id: '7',
    slug: 'college-algebra',
    courseTitle: 'College Algebra',
    courseDescription: 'A foundational course covering functions, equations, and graphs.',
    sections: [
        {
            topicTitle: 'Functions',
            explanation: 'A function is a rule that assigns each input to exactly one output. This unit covers function notation, domain and range, transformations of graphs (shifting, stretching, reflecting), and operations on functions.',
            studyTip: 'The concept of domain is crucial. Always be thinking: "What values of x are not allowed?" Look for division by zero and square roots of negative numbers.'
        },
        {
            topicTitle: 'Polynomial and Rational Functions',
            explanation: 'We explore the properties of polynomial functions, including finding roots (zeros), end behavior, and graphing. Rational functions (ratios of polynomials) introduce concepts like vertical and horizontal asymptotes.',
            studyTip: 'For rational functions, finding the vertical asymptotes (from the denominator) and horizontal/slant asymptotes (by comparing degrees) is the first step to graphing.'
        },
        {
            topicTitle: 'Exponential and Logarithmic Functions',
            explanation: 'These functions model growth and decay. We cover the properties of exponents and logarithms, solving exponential and logarithmic equations, and applications like compound interest and population growth.',
            studyTip: 'Logarithms are the inverse of exponentials. Being able to switch between log form and exponential form (e.g., log_b(x) = y <=> b^y = x) is the key to solving equations.'
        }
    ],
    pdfMarkdown: `
# 🧮 College Algebra Crash Course

### "Algebra is the language of patterns and relationships."

---

## ⚙️ Unit 1: Functions

**Topic Overview:**  
A function is a machine that takes an input (x) and gives exactly one output (y or f(x)).

**Core Concepts:**
- **Domain:** The set of all possible input values (x-values). Watch for division by zero and square roots of negative numbers.
- **Range:** The set of all possible output values (y-values).
- **Vertical Line Test:** A graph represents a function if and only if no vertical line intersects the graph more than once.
- **Transformations:** Learn how f(x-h)+k shifts a graph h units horizontally and k units vertically.

> 🔍 **Study Hack:** Think of the domain as the "allowed ingredients" for your function machine.

---

## 📈 Unit 2: Polynomial and Rational Functions

**Topic Overview:**  
Analyzing the graphs and behavior of functions made from polynomials.

**Must-Know Concepts:**
- **Zeros/Roots:** The x-values where the polynomial equals zero (where the graph crosses the x-axis).
- **End Behavior:** What happens to the graph as x approaches positive or negative infinity. Determined by the term with the highest power.
- **Asymptotes (for Rational Functions):**
  - **Vertical:** Occur where the denominator is zero.
  - **Horizontal:** Compare the degrees of the numerator and denominator to find them.

> 🧩 **Mnemonic:** For horizontal asymptotes: **BOBO BOTN EATS DC** (Bigger On Bottom -> y=0; Bigger On Top -> None; Exponents Are The Same -> Divide Coefficients).

---

## 🌿 Unit 3: Exponential and Log Functions

- **Exponential Functions (y = a*b^x)** model rapid growth or decay.
- **Logarithmic Functions (y = log_b(x))** are the inverse of exponential functions.
- **Key Property:** log_b(x) = y is the same as b^y = x. Being able to switch between these forms is essential for solving equations.
- **Compound Interest Formula:** A = P(1 + r/n)^(nt)

---

## 🧷 Final Tips

- Master factoring. It is used everywhere, especially for finding zeros and simplifying rational functions.
- Understand the properties of logarithms. They allow you to solve for variables that are in the exponent.
- Practice the order of operations (PEMDAS) meticulously.

---

_"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.”_
`
  },
];

export const courses = allCourses;
