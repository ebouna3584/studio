export type CourseSection = {
  topicTitle: string;
  explanation: string;
  studyTip?: string;
};

export type Course = {
  id: string;
  slug: string;
  courseTitle: string;
  courseDescription: string;
  sections: CourseSection[];
  pdfMarkdown: string; // For future use as requested
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
    pdfMarkdown: '...'
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
    pdfMarkdown: '...'
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
    pdfMarkdown: '...'
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
    pdfMarkdown: '...'
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
    pdfMarkdown: '...'
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
    pdfMarkdown: '...'
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
    pdfMarkdown: '...'
  },
];

export const courses = allCourses;
