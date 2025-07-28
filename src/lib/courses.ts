
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

### Unit 1: Chemistry of Life
**Big Idea:** The chemical components of life are essential for structure and function.

**1.1 Structure of Water and Hydrogen Bonding**
- **Water is Polar:** The oxygen atom has a slight negative charge, and the hydrogen atoms have a slight positive charge. This unequal sharing of electrons creates polarity.
- **Hydrogen Bonds:** The positive hydrogen of one water molecule is attracted to the negative oxygen of another. These weak bonds are responsible for water's unique properties.
- **Properties:**
  - **Cohesion:** Water molecules stick to each other (creates surface tension).
  - **Adhesion:** Water molecules stick to other substances (capillary action).
  - **High Specific Heat:** Water can absorb a lot of heat before its temperature changes, which stabilizes environments.
  - **Universal Solvent:** Water's polarity allows it to dissolve many other polar substances.

**1.2 Elements of Life**
- **CHONPS:** Life is primarily composed of Carbon, Hydrogen, Oxygen, Nitrogen, Phosphorus, and Sulfur.
- **Carbon:** The backbone of life. It can form four stable covalent bonds, creating a variety of complex molecules (organic molecules).

**1.3 Macromolecules**
- **Monomers & Polymers:** Monomers are single subunits that join together to form polymers.
- **Dehydration Synthesis:** A reaction that joins two monomers, releasing a water molecule.
- **Hydrolysis:** A reaction that breaks down a polymer by adding a water molecule.

**1.4 Structure and Function of Macromolecules**
- **Carbohydrates:** Monomer is the monosaccharide (e.g., glucose). Used for short-term energy (glucose) and structure (cellulose, chitin).
- **Lipids (Fats):** Not true polymers. They are nonpolar and hydrophobic. Used for long-term energy storage, insulation, and make up cell membranes (phospholipids).
- **Proteins:** Monomer is the amino acid. The sequence of amino acids (primary structure) determines the protein's 3D shape and function. They do everything: enzymes, structure, transport, etc.
- **Nucleic Acids:** Monomer is the nucleotide. DNA and RNA store and transmit genetic information.

---

### Unit 2: Cell Structure and Function
**Big Idea:** Cells are the basic units of life, with specialized structures for specific functions.

**2.1 Cell Types**
- **Prokaryotic:** Simple cells with no nucleus or membrane-bound organelles (e.g., bacteria). DNA is in a nucleoid region.
- **Eukaryotic:** Complex cells with a true nucleus and many membrane-bound organelles (e.g., plants, animals, fungi).

**2.2 Key Organelles (Eukaryotic)**
- **Nucleus:** Contains the cell's genetic material (DNA) and controls cell activities.
- **Ribosomes:** Synthesize proteins. Can be free in the cytoplasm or attached to the Endoplasmic Reticulum.
- **Endoplasmic Reticulum (ER):**
  - **Rough ER:** Studded with ribosomes; processes and transports proteins.
  - **Smooth ER:** Synthesizes lipids, detoxifies substances.
- **Golgi Apparatus:** Modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles.
- **Mitochondria:** The "powerhouse" of the cell. Site of cellular respiration, where ATP (energy) is generated.
- **Chloroplasts (Plants/Algae):** Site of photosynthesis.
- **Vacuoles:** Storage sacs (a large central vacuole in plants helps maintain turgor pressure).
- **Cell Membrane:** Selectively permeable barrier that regulates what enters and leaves the cell. Made of a phospholipid bilayer.

**2.3 Membrane Transport**
- **Passive Transport:** Does not require energy. Moves substances from high to low concentration.
  - **Diffusion:** Movement of small, nonpolar molecules.
  - **Facilitated Diffusion:** Movement of larger or polar molecules through protein channels.
  - **Osmosis:** The diffusion of water across a selectively permeable membrane.
- **Active Transport:** Requires energy (ATP) to move substances against their concentration gradient (from low to high).

---

### Unit 3: Cellular Energetics
**Big Idea:** Living systems require a constant input of energy to maintain order.

**3.1 Enzymes**
- **Catalysts:** Enzymes are biological catalysts (usually proteins) that speed up chemical reactions by lowering the activation energy.
- **Active Site:** The specific region of an enzyme where the substrate binds.
- **Specificity:** Each enzyme has a specific shape that fits a specific substrate.
- **Denaturation:** Changes in temperature, pH, or salt concentration can alter an enzyme's shape and cause it to lose its function.

**3.2 Photosynthesis**
- **Overall Equation:** 6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
- **Location:** Chloroplasts
- **Two Stages:**
  - **Light-Dependent Reactions:** Occur in the thylakoid membranes. Light energy is used to split water, produce ATP, and form NADPH. Oxygen is released.
  - **Calvin Cycle (Light-Independent):** Occurs in the stroma. Uses ATP and NADPH from the light reactions to convert CO₂ into glucose.

**3.3 Cellular Respiration**
- **Overall Equation:** C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP
- **Location:** Mitochondria (and cytoplasm)
- **Three Main Stages:**
  - **Glycolysis:** Occurs in the cytoplasm. Glucose is broken down into pyruvate. A small amount of ATP is produced.
  - **Krebs Cycle (Citric Acid Cycle):** Occurs in the mitochondrial matrix. Pyruvate is further broken down, releasing CO₂ and producing ATP, NADH, and FADH₂.
  - **Electron Transport Chain (ETC):** Occurs on the inner mitochondrial membrane. Electrons from NADH and FADH₂ are passed down a chain of proteins, releasing energy to pump protons and create a gradient. Oxygen is the final electron acceptor. This gradient drives the synthesis of a large amount of ATP (oxidative phosphorylation).
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
# AP U.S. History (APUSH) Crash Course

### Period 1: 1491–1607
**Big Idea:** Different native societies adapted to and transformed their environments through innovations in agriculture, resource use, and social structure.

- **Maize Cultivation:** Societies like the Pueblo in the Southwest developed complex irrigation systems to grow maize, which supported large, settled populations.
- **Mobile Lifestyles:** In the Great Basin and the Great Plains, tribes like the Sioux and Apache were largely mobile, following buffalo herds, due to the lack of reliable resources.
- **Columbian Exchange:** The arrival of Europeans triggered a massive exchange of plants, animals, diseases, and technologies.
  - **From New World to Old:** Corn, potatoes, tomatoes, tobacco.
  - **From Old World to New:** Wheat, rice, horses, cattle, pigs, and devastating diseases like smallpox, which wiped out up to 90% of the Native American population.
- **Spanish Colonization:** Driven by "God, Gold, and Glory," the Spanish established a colonial empire using the **Encomienda System**, a brutal form of forced labor. A rigid **caste system** based on racial hierarchy was established.

---

### Period 3: 1754–1800
**Big Idea:** British imperial attempts to reassert control over its colonies and the colonial reaction to these attempts produced a new American republic, along with struggles over the new nation’s social, political, and economic identity.

- **French and Indian War (1754-1763):** A war between Britain and France over the Ohio River Valley. The British victory led to the **end of salutary neglect**, as Britain imposed new taxes to pay off its war debt.
- **The Road to Revolution (1763-1776):**
  - **Proclamation of 1763:** Forbade colonial settlement west of the Appalachians to prevent conflict with Native Americans.
  - **Key Acts:** Sugar Act, Stamp Act, Townshend Acts, Tea Act. Colonists argued for "no taxation without representation."
  - **Enlightenment Ideas:** Thinkers like John Locke (natural rights: life, liberty, property) and Thomas Paine (*Common Sense*) provided the intellectual fuel for independence.
- **The American Revolution:** Despite British military superiority, the colonists won due to strong leadership (George Washington), commitment to the cause, and crucial foreign assistance from France.
- **The Articles of Confederation (1781-1789):** The first government of the U.S. It was intentionally weak, with no power to tax or raise an army. **Shays' Rebellion** (1786) highlighted its ineffectiveness.
- **The Constitution:** Created a stronger federal government with separation of powers and a system of checks and balances. Key compromises included the Great Compromise (bicameral legislature) and the 3/5 Compromise.
- **Federalists vs. Anti-Federalists:** Federalists (Hamilton, Madison) supported the Constitution; Anti-Federalists (Jefferson, Patrick Henry) feared it would give the central government too much power and demanded a Bill of Rights.
- **Washington's Farewell Address:** Warned against the dangers of political parties and permanent foreign alliances.

---

### Period 7: 1890–1945
**Big Idea:** An increasingly pluralistic United States faced profound domestic and global challenges, debated the proper degree of government activism, and sought to define its international role.

- **The Gilded Age & Progressive Era (1890-1920):**
  - **Problems:** Industrialization led to massive wealth inequality, unsafe working conditions, and corrupt political machines. Muckraking journalists like Upton Sinclair (*The Jungle*) exposed these issues.
  - **Progressive Reforms:** Progressives sought to use government power to regulate business and improve society. Key reforms included trust-busting (Theodore Roosevelt), the creation of the Federal Reserve, and constitutional amendments (17th for direct election of senators, 19th for women's suffrage).
- **U.S. Imperialism:** Following the Spanish-American War (1898), the U.S. acquired territories like the Philippines, Puerto Rico, and Guam, sparking debates between imperialists and anti-imperialists.
- **World War I (1914-1918):** The U.S. initially remained neutral but entered the war in 1917 due to German unrestricted submarine warfare and the Zimmerman Telegram. The war led to increased government control of the economy and suppression of dissent (Espionage and Sedition Acts).
- **The 1920s:** A decade of cultural conflict and economic boom. "Roaring Twenties" vs. Red Scare, Prohibition, and the rise of the KKK.
- **The Great Depression and the New Deal (1929-1939):** The stock market crash of 1929 triggered the worst economic crisis in U.S. history. Franklin D. Roosevelt's **New Deal** fundamentally expanded the role of the federal government with programs for relief, recovery, and reform (e.g., Social Security, FDIC).
- **World War II (1939-1945):** The U.S. was drawn into the war after the attack on Pearl Harbor (Dec. 7, 1941). The war ended the Great Depression, created new opportunities for women and minorities (Rosie the Riveter, Double V Campaign), but also led to civil liberties violations like the internment of Japanese Americans.
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

### Unit 1: Limits and Continuity
**Big Idea:** Calculus was developed to describe motion and change. Limits are the foundation of this description.

**1.1 Defining Limits**
- **Intuitive Definition:** A limit is the y-value a function *approaches* as the x-value gets closer and closer to some number.
- **Notation:** lim (x→c) f(x) = L
- **Key Point:** The function does not have to be defined at x=c for the limit to exist. The limit is about the approach, not the destination.
- **Existence:** A limit at x=c exists if and only if the left-hand limit equals the right-hand limit: lim (x→c⁻) f(x) = lim (x→c⁺) f(x).

**1.2 Finding Limits**
1.  **Direct Substitution:** Always try plugging in the value first.
2.  **Algebraic Manipulation:** If direct substitution gives 0/0 (indeterminate form), try:
    - Factoring and canceling
    - Multiplying by the conjugate
    - Finding a common denominator
3.  **From a Graph:** Look at the y-value the function is heading towards from both the left and right.

**1.3 Continuity**
- **Definition:** A function f(x) is continuous at a point x=c if:
  1. f(c) is defined (the point exists).
  2. lim (x→c) f(x) exists (the limit exists).
  3. lim (x→c) f(x) = f(c) (the limit equals the point).
- **Types of Discontinuities:**
  - **Removable (Hole):** The limit exists, but the point doesn't, or is in the wrong place. Can be fixed by defining/redefining one point.
  - **Jump:** The left and right limits are different.
  - **Infinite (Asymptote):** The limit approaches ±∞.

---

### Unit 2: Differentiation: Definition and Basic Rules
**Big Idea:** The derivative is the instantaneous rate of change of a function, or the slope of the tangent line at a point.

**2.1 The Definition of the Derivative**
- **Limit Definition:** f'(x) = lim (h→0) [f(x+h) - f(x)] / h. This finds the slope of the secant line between two points that are infinitely close together.
- **Notation:** f'(x), dy/dx, y'

**2.2 Basic Differentiation Rules**
- **Power Rule:** d/dx (xⁿ) = nxⁿ⁻¹
- **Constant Rule:** d/dx (c) = 0
- **Constant Multiple Rule:** d/dx [c * f(x)] = c * f'(x)
- **Sum/Difference Rule:** d/dx [f(x) ± g(x)] = f'(x) ± g'(x)
- **Product Rule:** d/dx [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)
- **Quotient Rule:** d/dx [f(x)/g(x)] = [f'(x)g(x) - f(x)g'(x)] / [g(x)]²
  - *Mnemonic: "Low D-High minus High D-Low, over the square of what's below."*

---

### Unit 3: Differentiation: Composite, Implicit, and Inverse Functions
**Big Idea:** The Chain Rule is one of the most powerful differentiation rules and is used for composite functions.

**3.1 The Chain Rule**
- **Formula:** d/dx [f(g(x))] = f'(g(x)) * g'(x)
- **In words:** "The derivative of the outer function (with the inside function left alone), times the derivative of the inner function."
- **Example:** To find the derivative of sin(x²), the outer function is sin() and the inner is x². The derivative is cos(x²) * 2x.

**3.2 Implicit Differentiation**
- **Use When:** You can't easily solve an equation for y.
- **Method:**
  1. Differentiate both sides of the equation with respect to x.
  2. When differentiating a term with y, remember to multiply by dy/dx (the chain rule).
  3. Solve for dy/dx.

**3.3 Derivatives of Inverse Functions**
- If f and g are inverse functions, then g'(x) = 1 / f'(g(x)).
`
  },
  {
    id: '4',
    slug: 'ap-chemistry',
    fieldOfStudy: 'STEM',
    courseTitle: 'AP Chemistry',
    courseDescription: 'Explore the molecular world, from atomic theory to chemical reactions and thermodynamics.',
    mindsetTagline: 'Think like a chemist: connect the particles to the properties you can see.',
    totalEstimatedTimeHours: 9,
    sections: [
        {
            topicTitle: 'Unit 1: Atomic Structure and Properties',
            understandFirst: 'Master electron configurations and periodic trends. They explain almost everything about an atom\'s behavior.',
            lessonHeaders: [
                'Moles and Molar Mass',
                'Mass Spectroscopy of Elements',
                'Elemental Composition of Pure Substances',
                'Composition of Mixtures',
                'Atomic Structure and Electron Configuration',
                'Photoelectron Spectroscopy',
                'Periodic Trends',
                'Valence Electrons and Ionic Compounds',
            ],
            estimatedUnitTimeMinutes: 75,
            studyTips: ['Practice writing electron configurations for various elements without looking at a periodic table.', 'Draw diagrams of atoms to visualize periodic trends like atomic radius and ionization energy.'],
            recommended: true,
        },
        {
            topicTitle: 'Unit 2: Molecular and Ionic Compound Structure and Properties',
            understandFirst: 'Focus on drawing correct Lewis structures. From there, you can determine molecular geometry (VSEPR) and polarity.',
            lessonHeaders: [
                'Types of Chemical Bonds',
                'Intramolecular Force and Potential Energy',
                'Structure of Ionic Solids',
                'Structure of Metals and Alloys',
                'Lewis Diagrams',
                'Resonance and Formal Charge',
                'VSEPR and Bond Hybridization',
            ],
            estimatedUnitTimeMinutes: 75,
            studyTips: ['Build models of molecules (or draw them in 3D) to understand VSEPR theory.', 'Create a flowchart for determining the type of intermolecular forces (IMFs) in a substance.'],
        },
        {
            topicTitle: 'Unit 3: Intermolecular Forces and Properties',
            understandFirst: 'Grasp the difference between intramolecular bonds (like covalent) and intermolecular forces (like hydrogen bonding). IMFs determine physical properties.',
            lessonHeaders: [
                'Intermolecular Forces',
                'Properties of Solids',
                'Solids, Liquids, and Gases',
                'The Ideal Gas Law',
                'Kinetic Molecular Theory',
                'Deviation from Ideal Gas Law',
                'Solutions and Mixtures',
                'Photoelectric Effect',
            ],
            estimatedUnitTimeMinutes: 90,
            studyTips: ['Rank the IMFs from weakest to strongest (London Dispersion < Dipole-Dipole < Hydrogen Bonding).', 'Relate the strength of IMFs to physical properties like boiling point and vapor pressure.'],
            recommended: true,
        },
    ],
    pdfMarkdown: `
# AP Chemistry Crash Course

### Unit 1: Atomic Structure and Properties

**1.1 Moles and Molar Mass**
- **The Mole:** A unit representing 6.022 x 10²³ particles (Avogadro's Number). It's a bridge between the atomic scale and the macroscopic scale.
- **Molar Mass:** The mass (in grams) of one mole of a substance. It is numerically equal to the atomic mass in amu found on the periodic table.
- **Calculations:** Use molar mass to convert between grams and moles. Use Avogadro's number to convert between moles and number of atoms/molecules.

**1.2 Electron Configuration & PES**
- **Electron Configuration:** Describes the arrangement of electrons in an atom's orbitals (e.g., 1s², 2s², 2p⁶).
- **Photoelectron Spectroscopy (PES):** An experimental technique that provides evidence for electron shells and subshells.
  - Each peak in a PES spectrum represents the electrons in a single subshell.
  - The height of the peak is proportional to the number of electrons in that subshell.
  - The binding energy (x-axis) is the energy required to remove an electron. Higher binding energy means the electrons are closer to the nucleus.

**1.3 Periodic Trends**
- **Atomic Radius:** Decreases across a period (due to increasing nuclear charge) and increases down a group (due to adding more electron shells).
- **Ionization Energy:** The energy required to remove an electron. Increases across a period and decreases down a group.
- **Electronegativity:** The ability of an atom to attract electrons in a bond. Increases across a period and decreases down a group.
- **Ionic Radius:** Cations (+) are smaller than their parent atoms. Anions (-) are larger than their parent atoms.

---

### Unit 2: Molecular and Ionic Compound Structure

**2.1 Types of Bonds**
- **Ionic Bonds:** Formed between a metal and a nonmetal. Involves the *transfer* of electrons, creating ions that are held together by electrostatic attraction.
- **Covalent Bonds:** Formed between two nonmetals. Involves the *sharing* of electrons.
  - **Nonpolar Covalent:** Electrons are shared equally (e.g., H₂, Cl₂).
  - **Polar Covalent:** Electrons are shared unequally due to differences in electronegativity, creating partial positive (δ+) and partial negative (δ-) charges.

**2.2 Lewis Structures & VSEPR Theory**
- **Lewis Structures:** Diagrams that show the bonding between atoms and the lone pairs of electrons. The goal is usually to satisfy the **octet rule** (8 valence electrons) for each atom.
- **VSEPR Theory (Valence Shell Electron Pair Repulsion):** Predicts the 3D geometry of molecules. The basic idea is that electron pairs (both bonding and lone pairs) will repel each other and arrange themselves as far apart as possible.
  - **Key Geometries:** Linear, Trigonal Planar, Tetrahedral, Trigonal Bipyramidal, Octahedral.
  - **Lone Pairs:** Lone pairs have a stronger repulsion than bonding pairs, which can distort bond angles.

**2.3 Polarity**
- **Bond Polarity:** Determined by the difference in electronegativity between two bonded atoms.
- **Molecular Polarity:** Determined by the overall distribution of charge in a molecule. A molecule can have polar bonds but be nonpolar overall if the polarities cancel out due to symmetry (e.g., CO₂).

---

### Unit 3: Intermolecular Forces (IMFs)

**3.1 Types of IMFs**
- **IMFs** are the attractive forces *between* molecules. They are much weaker than intramolecular bonds (like covalent bonds).
- **London Dispersion Forces (LDFs):** Weakest IMF. Present in *all* molecules. Caused by temporary, random shifts in electron density. LDFs increase with the size of the electron cloud (i.e., more electrons).
- **Dipole-Dipole Forces:** Present in *polar* molecules. The attraction between the permanent partial positive charge on one molecule and the permanent partial negative charge on another.
- **Hydrogen Bonding:** Strongest type of dipole-dipole force. Occurs when hydrogen is bonded to a highly electronegative atom (N, O, or F).

**3.2 Properties and IMFs**
- The strength of a substance's IMFs determines its physical properties.
- **Stronger IMFs lead to:**
  - Higher boiling point and melting point
  - Lower vapor pressure
  - Higher viscosity
  - Higher surface tension
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

### Unit 1: Scientific Foundations of Psychology
**Big Idea:** Psychology is a science that uses empirical methods to study behavior and mental processes.

- **Major Perspectives:**
  - **Psychoanalytic (Freud):** Emphasizes unconscious conflicts and childhood experiences.
  - **Behavioral (Watson, Skinner):** Focuses on observable behaviors and how they are learned through conditioning (rewards, punishments).
  - **Humanistic (Maslow, Rogers):** Highlights human potential for growth and free will.
  - **Cognitive:** Studies mental processes like thinking, memory, and problem-solving.
  - **Biological:** Explains behavior through genetics, brain structures, and neurotransmitters.
  - **Sociocultural:** Examines how social and cultural factors influence behavior.
- **Research Methods:**
  - **Experiment:** The only method that can establish cause and effect. Involves manipulating an **Independent Variable (IV)** to see its effect on a **Dependent Variable (DV)**. Requires **random assignment** to control and experimental groups.
  - **Correlational Study:** Shows the relationship between two variables. **Correlation does not equal causation!**
  - **Survey, Naturalistic Observation, Case Study:** Descriptive methods used to gather data.
- **Ethics:** Researchers must obtain **informed consent**, protect participants from harm, ensure confidentiality, and provide a **debriefing**.

---

### Unit 2: Biological Bases of Behavior
**Big Idea:** All psychological processes have a biological basis.

- **The Neuron:** The basic cell of the nervous system.
  - **Dendrites:** Receive messages.
  - **Axon:** Sends messages.
  - **Myelin Sheath:** Speeds up neural impulses.
  - **Action Potential:** A brief, all-or-none electrical charge that travels down the axon.
  - **Synapse:** The gap between neurons where communication occurs via **neurotransmitters** (e.g., dopamine, serotonin, acetylcholine).
- **The Brain:**
  - **Cerebral Cortex (Lobes):**
    - **Frontal Lobe:** Planning, decision-making, personality.
    - **Parietal Lobe:** Processes sensory information (touch, temperature).
    - **Temporal Lobe:** Auditory processing, language comprehension.
    - **Occipital Lobe:** Visual processing.
  - **Key Structures:**
    - **Limbic System (Amygdala, Hippocampus, Hypothalamus):** Deals with emotion, memory, and drives.
    - **Cerebellum:** Coordinates voluntary movement and balance.
- **Endocrine System:** A system of glands that secrete hormones into the bloodstream.

---

### Unit 3: Sensation and Perception
**Big Idea:** There is a difference between the physical world and our psychological experience of it.

- **Sensation vs. Perception:**
  - **Sensation:** The process by which our sensory receptors receive stimulus energy from the environment. This is **bottom-up processing** (data-driven).
  - **Perception:** The process of organizing and interpreting sensory information, enabling us to recognize meaningful objects and events. This is **top-down processing** (concept-driven).
- **Vision:**
  - **Rods:** Detect black, white, and gray; necessary for peripheral and twilight vision.
  - **Cones:** Detect fine detail and color; function in daylight or well-lit conditions.
- **Hearing:** Sound waves are converted into neural impulses in the cochlea.
- **Gestalt Principles:** The brain's tendency to organize sensory information into a meaningful "whole" (e.g., proximity, similarity, continuity).
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
# AP Microeconomics Crash Course

### Unit 1: Basic Economic Concepts
**Big Idea:** Economics is the study of scarcity and choice.

- **Scarcity:** The fundamental problem of economics. We have unlimited wants but limited resources. This forces us to make choices.
- **Opportunity Cost:** The value of the best alternative forgone when a choice is made. It's the cost of what you *give up*.
- **Production Possibilities Curve (PPC):** A model that shows the different combinations of two goods that can be produced using all available resources efficiently.
  - **Points on the curve:** Efficient.
  - **Points inside the curve:** Inefficient (unemployment).
  - **Points outside the curve:** Unattainable.
  - **Bowed-out shape:** Illustrates the **Law of Increasing Opportunity Cost**.
- **Comparative Advantage:** The ability to produce a good at a lower opportunity cost than another producer. This is the basis for the gains from trade.

---

### Unit 2: Supply and Demand
**Big Idea:** The interaction of buyers and sellers in markets determines prices and quantities.

- **Demand:**
  - **Law of Demand:** As the price of a good falls, the quantity demanded increases (downward-sloping curve).
  - **Determinants (Shifters) of Demand:** Changes in **T**astes, price of **R**elated goods (substitutes, complements), **I**ncome, number of **B**uyers, **E**xpectations. (TRIBE)
- **Supply:**
  - **Law of Supply:** As the price of a good rises, the quantity supplied increases (upward-sloping curve).
  - **Determinants (Shifters) of Supply:** Changes in **R**esource prices, **O**ther goods' prices, **T**echnology, **T**axes and subsidies, **E**xpectations, **N**umber of sellers. (ROTTEN)
- **Equilibrium:** The point where the supply and demand curves intersect. At this price, the quantity supplied equals the quantity demanded (the market clears).
- **Surplus & Shortage:**
  - **Surplus:** When price is above equilibrium (Qs > Qd).
  - **Shortage:** When price is below equilibrium (Qd > Qs).
- **Government Intervention:**
  - **Price Ceiling:** A legal maximum price (e.g., rent control). If set below equilibrium, it causes a shortage.
  - **Price Floor:** A legal minimum price (e.g., minimum wage). If set above equilibrium, it causes a surplus.
  - **Taxes & Subsidies:** Taxes shift the supply curve left; subsidies shift it right.

---

### Unit 4: Imperfect Competition
**Big Idea:** Most real-world markets are imperfectly competitive, where firms have some power to set their own prices.

- **Market Structures:**
  | Feature | Perfect Competition | Monopolistic Comp. | Oligopoly | Monopoly |
  | :--- | :--- | :--- | :--- | :--- |
  | **# of Firms** | Many | Many | Few | One |
  | **Product Type** | Identical | Differentiated | Identical or Diff. | Unique |
  | **Barriers** | None | Low | High | Very High |
  | **Example** | Agriculture | Restaurants, Salons | Cars, Cell Phones | Local Utility |

- **Monopoly:**
  - A single seller with high barriers to entry.
  - The firm *is* the industry; it faces a downward-sloping demand curve.
  - To maximize profit, a monopolist produces where **Marginal Revenue (MR) = Marginal Cost (MC)**.
  - Monopolies produce less and charge a higher price than perfectly competitive firms, creating **deadweight loss**.
- **Oligopoly & Game Theory:**
  - A market dominated by a few large firms.
  - Firms are interdependent; their decisions affect each other.
  - **Game Theory** is used to model this strategic behavior. A **Nash Equilibrium** is a situation where no player can benefit by changing their strategy while the other players keep theirs unchanged.
`
  },
  {
    id: '7',
    slug: 'ap-computer-science-principles',
    fieldOfStudy: 'STEM',
    courseTitle: 'AP Computer Science Principles',
    courseDescription: 'A broad introduction to the creative aspects of programming, abstractions, algorithms, and the global impact of computing.',
    mindsetTagline: 'Think creatively about how technology shapes our world. No prior coding experience needed.',
    totalEstimatedTimeHours: 7,
    sections: [
        {
            topicTitle: 'Unit 1: The Creative Development Process',
            understandFirst: 'Focus on how computing is a collaborative and iterative process. It’s about more than just writing code; it’s about solving problems with a team.',
            lessonHeaders: [
                'Collaboration',
                'Program Function and Purpose',
                'Program Design and Development',
                'Identifying and Correcting Errors',
            ],
            estimatedUnitTimeMinutes: 45,
            studyTips: ['Work with a friend on a small project to practice collaboration.', 'Before writing any code, write out the purpose of a program in plain English.'],
            recommended: true,
        },
        {
            topicTitle: 'Unit 2: Data',
            understandFirst: 'Understand that all data—numbers, text, images—is ultimately represented by bits (0s and 1s). The concept of abstraction hides this complexity.',
            lessonHeaders: [
                'Binary Numbers',
                'Data Compression',
                'Extracting Information from Data',
                'Using Programs with Data',
            ],
            estimatedUnitTimeMinutes: 60,
            studyTips: ['Practice converting numbers between decimal and binary.', 'Find a large dataset online and think about what kinds of questions you could answer with it.'],
        },
        {
            topicTitle: 'Unit 3: Algorithms and Programming',
            understandFirst: 'Master the core logic structures: sequence, selection (if/else), and iteration (loops). These are the fundamental building blocks of any program.',
            lessonHeaders: [
                'Variables and Assignments',
                'Mathematical Expressions',
                'Strings',
                'Boolean Expressions, If Statements',
                'Lists',
                'Loops',
                'Procedures and Parameters',
                'Algorithms',
            ],
            estimatedUnitTimeMinutes: 90,
            studyTips: ['Use flowcharts to visualize algorithms before you code them.', 'Explain a simple algorithm (like making a sandwich) to a friend to practice logical thinking.'],
            recommended: true,
        },
    ],
    pdfMarkdown: '# AP CSP Notes\n\nDetails to come.'
},
{
    id: '8',
    slug: 'ap-english-language',
    fieldOfStudy: 'Humanities',
    courseTitle: 'AP English Language & Composition',
    courseDescription: 'Analyze how writers use language to create meaning and craft persuasive arguments.',
    mindsetTagline: 'Become a master of rhetoric. Read like a detective, write like a lawyer.',
    totalEstimatedTimeHours: 8,
    sections: [
        {
            topicTitle: 'Unit 1: Rhetorical Analysis',
            understandFirst: 'Master the rhetorical situation (speaker, purpose, audience, context, exigence). It’s the key to unlocking any text.',
            lessonHeaders: [
                'Rhetorical Situation: Exigence, Purpose, Audience',
                'Claims and Evidence',
                'Reasoning and Organization',
                'Style and Tone',
            ],
            estimatedUnitTimeMinutes: 90,
            studyTips: ['Analyze the commercials you see on TV. Who is the audience? What is the purpose?', 'Read a newspaper editorial and identify the main claim and the evidence used to support it.'],
            recommended: true,
        },
        {
            topicTitle: 'Unit 2: Argumentation',
            understandFirst: 'An argument is more than just an opinion. It requires a clear claim, solid evidence, and logical reasoning.',
            lessonHeaders: [
                'Developing a Defensible Claim',
                'Selecting and Using Evidence',
                'Developing a Line of Reasoning',
                'Introducing and Concluding an Argument',
            ],
            estimatedUnitTimeMinutes: 90,
            studyTips: ['For any topic, practice writing a claim that is debatable and specific.', 'Use the "They Say / I Say" framework to structure your arguments.'],
        },
        {
            topicTitle: 'Unit 3: Synthesis',
            understandFirst: 'Synthesis is about making connections between different sources to support your own argument. It’s a conversation between texts.',
            lessonHeaders: [
                'Entering the Conversation',
                'Identifying Nuance and Complexity',
                'Crafting a Sophisticated Argument',
                'Citing Sources',
            ],
            estimatedUnitTimeMinutes: 75,
            studyTips: ['When reading multiple sources on a topic, create a chart to track their main arguments and how they relate.', 'Think of synthesis as hosting a dinner party. You invite different authors (sources) and lead the conversation (your argument).'],
            recommended: true,
        },
    ],
    pdfMarkdown: '# AP Lang Notes\n\nDetails to come.'
  },
];

export const courses = allCourses;

type LessonContentDetails = {
  summary: string;
  keyConcepts: string[];
  commonPitfalls: string[];
};

type LessonContent = {
  [lessonSlug: string]: LessonContentDetails;
};

// AP Biology Content
const apBiologyContent: LessonContent = {
  'structure-of-water-and-hydrogen-bonding': {
    summary: 'Water is a polar molecule, meaning it has a slight positive charge on the hydrogen side and a slight negative charge on the oxygen side. This polarity allows water molecules to form hydrogen bonds with each other, which are responsible for many of water\'s unique properties, such as cohesion, adhesion, and its high specific heat.',
    keyConcepts: [
      'Polarity: The unequal sharing of electrons in the H-O bonds.',
      'Hydrogen Bonds: Weak attractions between the positive hydrogen of one water molecule and the negative oxygen of another.',
      'Cohesion: Water molecules sticking to each other.',
      'Adhesion: Water molecules sticking to other surfaces.'
    ],
    commonPitfalls: [
      'Confusing hydrogen bonds (between molecules) with covalent bonds (within a molecule).',
      'Forgetting that hydrogen bonds are relatively weak individually but strong collectively.'
    ]
  },
  'elements-of-life': {
    summary: 'Life is primarily composed of a few key elements: Carbon, Hydrogen, Oxygen, Nitrogen, Phosphorus, and Sulfur (CHONPS). Carbon is the backbone of organic molecules due to its ability to form four stable covalent bonds.',
    keyConcepts: [
      'CHONPS: The six most abundant elements in living organisms.',
      'Carbon Skeleton: The chain of carbon atoms in an organic molecule that provides its basic structure.',
      'Functional Groups: Specific groups of atoms attached to the carbon skeleton that determine the chemical properties of a molecule.'
    ],
    commonPitfalls: [
      'Memorizing the elements without understanding why carbon is so central to life\'s chemistry.',
      'Overlooking the importance of phosphorus in DNA and ATP, and sulfur in proteins.'
    ]
  },
  'introduction-to-macromolecules': {
    summary: 'There are four main classes of large biological molecules, or macromolecules: carbohydrates, lipids, proteins, and nucleic acids. Many of these are polymers, built from smaller, repeating units called monomers.',
    keyConcepts: [
      'Monomer: The repeating subunit that serves as a building block of a polymer.',
      'Polymer: A long molecule consisting of many similar or identical building blocks linked by covalent bonds.',
      'Dehydration Synthesis: A reaction in which two molecules are covalently bonded to each other with the removal of a water molecule.',
      'Hydrolysis: A reaction that breaks bonds between two molecules by the addition of water.'
    ],
    commonPitfalls: [
      'Confusing dehydration synthesis with hydrolysis.',
      'Thinking that all macromolecules are polymers (lipids are a key exception).'
    ]
  },
  'enzyme-structure-catalysis': {
    summary: 'Enzymes are biological catalysts, typically proteins, that speed up biochemical reactions by lowering the activation energy. The specific shape of an enzyme, particularly its active site, is crucial for its function, as it binds to a specific substrate.',
    keyConcepts: [
      'Catalyst: A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change.',
      'Activation Energy: The minimum amount of energy required to initiate a chemical reaction.',
      'Substrate: The reactant molecule that an enzyme acts on.',
      'Active Site: The specific region of an enzyme that binds to the substrate and forms the enzyme-substrate complex.'
    ],
    commonPitfalls: [
      'Thinking that enzymes are "used up" in a reaction. They are not; they can be used over and over.',
      'Forgetting that enzyme structure is critical. If the shape changes (denaturation), the function is lost.'
    ]
  },
};

// AP US History Content
const apUSHistoryContent: LessonContent = {
  'columbian-exchange-spanish-exploration-and-conquest': {
    summary: 'The Columbian Exchange refers to the widespread transfer of plants, animals, culture, human populations, technology, diseases, and ideas between the Americas, West Africa, and the Old World in the 15th and 16th centuries. Spanish exploration and conquest were driven by a desire for wealth (gold), national glory, and the spread of Christianity (God, Gold, and Glory).',
    keyConcepts: [
      'Columbian Exchange: The transfer of goods, diseases, and ideas between the Eastern and Western Hemispheres.',
      'Encomienda System: A Spanish labor system that rewarded conquerors with the labor of particular groups of conquered non-Christian people.',
      'Impact of Disease: Smallpox and other European diseases devastated Native American populations, making conquest easier.',
      'Caste System: A social hierarchy developed in the Spanish colonies that was based on racial ancestry.'
    ],
    commonPitfalls: [
      'Viewing the Columbian Exchange as only a positive event, without acknowledging the catastrophic impact of disease on native populations.',
      'Underestimating the complexity and resistance of Native American societies to Spanish conquest.'
    ]
  },
  'the-french-and-indian-war': {
    summary: 'Fought between Great Britain and France (and their respective native allies) from 1754-1763, the French and Indian War was part of a larger global conflict known as the Seven Years\' War. British victory resulted in France being expelled from North America but also led to massive debt for Britain, which it sought to repay by taxing its American colonies, ending the period of salutary neglect.',
    keyConcepts: [
      'Causes: Competing claims over the Ohio River Valley.',
      'Albany Plan of Union (1754): Benjamin Franklin\'s early attempt to unite the colonies for common defense, which failed.',
      'Treaty of Paris (1763): Ended the war, giving Britain control of French territory east of the Mississippi.',
      'Consequences: End of salutary neglect, increased British control and taxation, and colonial resentment.'
    ],
    commonPitfalls: [
      'Thinking the war was between the French and the Indians; it was Britain and its colonies vs. France and its native allies.',
      'Failing to connect the war directly to the causes of the American Revolution.'
    ]
  },
  'the-articles-of-confederation': {
    summary: 'The Articles of Confederation was the first written constitution of the United States. It created a weak central government with most powers retained by the states. This design was intentional, born from a fear of a strong, tyrannical central authority like the British monarchy. However, its weaknesses soon became apparent.',
    keyConcepts: [
      'Weak Central Government: No executive or judicial branch, only a unicameral legislature.',
      'Powers: Could declare war, make treaties, and borrow money.',
      'Weaknesses: Could not levy taxes, raise a national army, or regulate interstate commerce.',
      'Shays\' Rebellion: A farmer uprising in Massachusetts that highlighted the inability of the central government to maintain order, serving as a major catalyst for the Constitutional Convention.'
    ],
    commonPitfalls: [
      'Seeing the Articles as a total failure without understanding why they were created that way (fear of centralized power).',
      'Confusing the powers it had with the more significant powers it lacked.'
    ]
  },
};

// AP Calculus AB Content
const apCalculusABContent: LessonContent = {
  'defining-limits-and-using-limit-notation': {
    summary: 'A limit is the value that a function "approaches" as the input "approaches" some value. It is the foundational concept of calculus, used to define continuity, derivatives, and integrals. We use the notation lim(x→c) f(x) = L to express that the limit of f(x) as x approaches c is L.',
    keyConcepts: [
      'Limit: The y-value a function gets closer and closer to as the x-value gets closer and closer to a certain point.',
      'One-Sided Limits: Analyzing the limit from either the left (x→c⁻) or the right (x→c⁺).',
      'Existence of a Limit: A limit at a point c exists if and only if the left-hand limit equals the right-hand limit.',
      'Graphical Interpretation: Visualizing how a function behaves near a specific x-value, even if the function is undefined at that exact point.'
    ],
    commonPitfalls: [
      'Confusing the limit of a function at a point, lim(x→c)f(x), with the value of the function at that point, f(c). They can be different!',
      'Assuming a limit does not exist just because there is a hole in the graph. The limit can exist at a hole.'
    ]
  },
  'the-power-rule': {
    summary: 'The Power Rule is a fundamental shortcut for finding the derivative of functions of the form f(x) = xⁿ. Instead of using the long limit definition of the derivative, the Power Rule states that the derivative is simply nxⁿ⁻¹.',
    keyConcepts: [
      'Derivative: The instantaneous rate of change, or the slope of the tangent line to a curve at a point.',
      'Power Rule Formula: d/dx(xⁿ) = nxⁿ⁻¹.',
      'Applying the Rule: Bring the exponent down as a coefficient and subtract one from the original exponent.',
      'Constants: The derivative of a constant is always zero.'
    ],
    commonPitfalls: [
      'Forgetting to subtract one from the exponent.',
      'Incorrectly applying the rule to functions that are not in the form xⁿ (e.g., eˣ or sin(x)).',
      'Making mistakes with negative or fractional exponents (remember your exponent rules!).'
    ]
  },
  'the-chain-rule': {
    summary: 'The Chain Rule is arguably the most essential differentiation rule. It is used to find the derivative of composite functions (a function "nested" inside another function).',
    keyConcepts: [
      'Composite Function: A function of the form f(g(x)).',
      'Formula: d/dx[f(g(x))] = f\'(g(x)) * g\'(x).',
      'The "Onion" Analogy: Differentiate the "outer layer" (the f function), leaving the "inner layer" (the g(x) function) unchanged. Then, multiply by the derivative of the "inner layer".',
      'Repeated Application: For functions with multiple nested layers, the chain rule can be applied sequentially.'
    ],
    commonPitfalls: [
      'Forgetting to multiply by the derivative of the inside function.',
      'Incorrectly identifying the "inner" and "outer" functions.',
      'Trying to differentiate the inner function first.'
    ]
  }
};

// AP Chemistry Content
const apChemistryContent: LessonContent = {
    'moles-and-molar-mass': {
        summary: 'The mole is the unit for counting atoms and molecules in chemistry, where 1 mole equals 6.022 x 10²³ particles (Avogadro\'s number). Molar mass is the mass of one mole of a substance, expressed in grams/mole, and is numerically equal to the atomic mass in amu.',
        keyConcepts: [
            'Avogadro\'s Number: 6.022 x 10²³ particles/mole.',
            'Mole (mol): A unit that bridges the microscopic world of atoms to the macroscopic world of grams.',
            'Molar Mass: The mass of one mole of a substance (g/mol). Calculated by summing the atomic masses of all atoms in a chemical formula.',
            'Conversions: Using molar mass and Avogadro\'s number to convert between mass, moles, and number of particles.'
        ],
        commonPitfalls: [
            'Confusing molar mass with molecular mass (amu vs. g/mol).',
            'Using Avogadro\'s number when converting between grams and moles (it\'s for converting moles to particles).',
            'Forgetting to account for the number of atoms of each element in a compound when calculating molar mass (e.g., H₂O has two H atoms).'
        ]
    },
    'lewis-diagrams': {
        summary: 'Lewis diagrams (or Lewis structures) are visual representations of the valence electrons of atoms within a molecule. They are used to show how electrons are arranged around atoms and the bonding patterns in a molecule.',
        keyConcepts: [
            'Valence Electrons: The electrons in the outermost energy level of an atom, which are involved in bonding.',
            'Octet Rule: The tendency of atoms to prefer to have eight electrons in their valence shell.',
            'Bonding Pairs vs. Lone Pairs: Electrons shared between two atoms are bonding pairs; electrons not involved in bonding are lone pairs.',
            'Steps: 1. Count total valence electrons. 2. Arrange atoms with the least electronegative in the center. 3. Connect atoms with single bonds. 4. Distribute remaining electrons to satisfy octets.'
        ],
        commonPitfalls: [
            'Miscounting the total number of valence electrons.',
            'Violating the octet rule for elements that must obey it (like C, N, O, F).',
            'Forgetting to check for formal charge to find the most stable structure when resonance is possible.'
        ]
    },
     'intermolecular-forces': {
        summary: 'Intermolecular forces (IMFs) are the attractive forces between neighboring molecules. They are much weaker than the intramolecular forces (like covalent bonds) that hold atoms together within a molecule. The strength of IMFs determines a substance\'s physical properties.',
        keyConcepts: [
            'London Dispersion Forces (LDF): Weakest IMF, present in all molecules. Caused by temporary shifts in electron density.',
            'Dipole-Dipole Forces: Present in polar molecules. Caused by the attraction between permanent partial positive and negative charges.',
            'Hydrogen Bonding: A special, strong type of dipole-dipole force. Occurs only when Hydrogen is bonded directly to Nitrogen, Oxygen, or Fluorine (H-N, H-O, H-F).',
            'Property Correlation: Stronger IMFs lead to higher boiling points, lower vapor pressure, and greater surface tension.'
        ],
        commonPitfalls: [
            'Confusing intermolecular forces (between molecules) with intramolecular forces (within a molecule).',
            'Thinking hydrogen bonding is a true bond; it\'s an IMF.',
            'Assuming a molecule is nonpolar just because it has nonpolar bonds; molecular geometry matters.'
        ]
    }
};

// AP Psychology Content
const apPsychologyContent: LessonContent = {
    'the-experimental-method': {
        summary: 'The experimental method is the only research method that can establish a cause-and-effect relationship between variables. It involves manipulating one variable (the independent variable) to determine if it causes a change in another variable (the dependent variable), while controlling for all other variables.',
        keyConcepts: [
            'Independent Variable (IV): The variable that is manipulated by the experimenter.',
            'Dependent Variable (DV): The variable that is measured to see if the IV had an effect.',
            'Experimental Group vs. Control Group: The group that receives the treatment vs. the group that does not, used for comparison.',
            'Random Assignment: Placing participants into groups by chance to minimize preexisting differences.'
        ],
        commonPitfalls: [
            'Confusing the independent and dependent variables.',
            'Mixing up random assignment (for experiments) with random sampling (for surveys).',
            'Forgetting that correlation does not equal causation; only a true experiment can prove causation.'
        ]
    },
    'the-neuron-and-neural-firing': {
        summary: 'The neuron is the basic building block of the nervous system. Communication within a neuron is an electrical process (the action potential), while communication between neurons is a chemical process involving neurotransmitters.',
        keyConcepts: [
            'Parts of a Neuron: Dendrites (receive), Soma (cell body), Axon (transmits), Myelin Sheath (speeds up signal).',
            'Action Potential: An "all-or-none" electrical impulse that travels down the axon when a neuron reaches its threshold of excitation.',
            'Synapse: The microscopic gap between the axon tip of the sending neuron and the dendrite of the receiving neuron.',
            'Neurotransmitters: Chemical messengers that cross the synapse and bind to receptor sites on the receiving neuron (e.g., serotonin, dopamine).'
        ],
        commonPitfalls: [
            'Thinking the action potential can be "strong" or "weak". It is all-or-none; its frequency can change, but not its intensity.',
            'Describing the process as purely electrical, forgetting the critical chemical step at the synapse.'
        ]
    },
};

// AP Microeconomics Content
const apMicroeconomicsContent: LessonContent = {
    'opportunity-cost-and-the-production-possibilities-curve-(ppc)': {
        summary: 'Opportunity cost is the value of the next-best alternative that must be forgone to pursue a certain action. The Production Possibilities Curve (PPC) is a model that illustrates the trade-offs and opportunity costs an economy faces when producing two goods, showing the maximum attainable combinations with available resources.',
        keyConcepts: [
            'Opportunity Cost: The cost of what you give up.',
            'Production Possibilities Curve (PPC): A graph showing efficient production combinations.',
            'Efficiency: Points on the PPC are productively efficient. Points inside are inefficient. Points outside are unattainable.',
            'Law of Increasing Opportunity Cost: As you produce more of one good, the opportunity cost (in terms of the other good) increases. This gives the PPC its bowed-out shape.'
        ],
        commonPitfalls: [
            'Calculating opportunity cost incorrectly (it\'s what is given up, not what is gained).',
            'Confusing a linear PPC (constant opportunity cost) with a bowed-out PPC (increasing opportunity cost).',
            'Thinking that a point inside the PPC is unattainable (it\'s attainable but inefficient).'
        ]
    },
    'market-equilibrium': {
        summary: 'Market equilibrium is the point where the quantity of a good that buyers are willing and able to buy is exactly equal to the quantity that sellers are willing and able to sell. It is found at the intersection of the supply and demand curves.',
        keyConcepts: [
            'Equilibrium Price (P*): The price at which quantity demanded equals quantity supplied. Also called the market-clearing price.',
            'Equilibrium Quantity (Q*): The quantity bought and sold at the equilibrium price.',
            'Surplus: Occurs when the market price is above equilibrium (Qs > Qd). This puts downward pressure on price.',
            'Shortage: Occurs when the market price is below equilibrium (Qd > Qs). This puts upward pressure on price.'
        ],
        commonPitfalls: [
            'Confusing a change in demand/supply (a curve shift) with a change in quantity demanded/supplied (a movement along a curve).',
            'Incorrectly identifying the new equilibrium point after a curve shift.'
        ]
    }
};

export const allLessonContent: { [courseSlug: string]: LessonContent } = {
  'ap-biology': apBiologyContent,
  'ap-us-history': apUSHistoryContent,
  'ap-calculus-ab': apCalculusABContent,
  'ap-chemistry': apChemistryContent,
  'ap-psychology': apPsychologyContent,
  'ap-microeconomics': apMicroeconomicsContent,
  'ap-computer-science-principles': {},
  'ap-english-language': {},
};
