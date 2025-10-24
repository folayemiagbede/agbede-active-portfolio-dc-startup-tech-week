import { ExpertiseItem, ProjectCategory, BackgroundItem, EducationItem, TrainingItem, SkillCategory, ResearchItem } from './types';

export const NAV_LINKS = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Background', href: '#background' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
];

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    title: 'AI Development & Applications',
    points: [
      'Custom GPT development for career navigation and accessibility',
      'JavaScript/React application development for neurodivergent users',
      'Prompt engineering and model training on domain-specific content',
      'Natural language processing for personalized recommendations',
      'User experience design for AI-powered tools',
      'Assessment framework integration and synthesis',
    ],
  },
  {
    title: 'AI Governance & Policy Implementation',
    points: [
      'AI policy frameworks for federal agencies',
      'Plain-language intake forms for AI application review',
      'Cross-team coordination on AI ethics and equity',
      'Risk assessment for API integration and security policy',
      'Logic model design for accessible technology systems',
      'Executive briefings on AI implementation strategy',
    ],
  },
  {
    title: 'Operations & Change Management',
    points: [
      'Large-scale organizational transformation',
      'Process optimization and automation',
      'Vendor and contract management (IDIQ)',
      'Performance metrics and dashboard design',
      'Cross-functional stakeholder coordination',
    ],
  },
  {
    title: 'Research & Analysis',
    points: [
      'Computational social science methods',
      'Mixed-method research design',
      'Qualitative analysis (Atlas.ti)',
      'Data visualization and storytelling',
      'Policy impact evaluation',
    ],
  },
  {
    title: 'UX Research & Design',
    points: [
      'Customer experience mapping',
      'User-centered design methodologies',
      'Service design and journey mapping',
      'Usability testing and iteration',
      'Accessibility compliance',
    ],
  },
   {
    title: 'Public Policy & Advocacy',
    points: [
      'Economic policy analysis',
      'Legislative research and advocacy',
      'Interagency coordination',
      'Regulatory compliance frameworks',
      'Public-private partnership development',
    ],
  },
];

export const PROJECTS_DATA: ProjectCategory[] = [
    {
        title: 'AI Development Projects',
        projects: [
            {
                title: 'USAID Work Portfolio GPT',
                tags: ['Custom GPT', 'Career Tools', 'Knowledge Management', 'NLP'],
                challenge: 'Career transitions require articulating complex professional experience across different contexts and audiences. Traditional resumes fail to capture the depth of government work, and manually tailoring applications is time-intensive and cognitively draining.',
                solution: [
                    'Built custom GPT trained on comprehensive work portfolio',
                    'Natural language processing to extract relevant experience',
                    'Reframes accomplishments for different sectors',
                    'Cost-effective solution using standard OpenAI subscription',
                ],
                impact: 'Created replicable model for professionals to build personal AI assistants. Demonstrates how low-cost AI can democratize access to sophisticated career support.',
                link: 'https://chatgpt.com/g/g-682f2d417984819186559df920341dd1-folayemi-agbede-s-work-at-usaid'
            },
            {
                title: 'Undistracted DIY™',
                tags: ['Custom GPT', 'Accessibility', 'Home Improvement', 'Decision Support'],
                challenge: 'Home improvement projects require synthesizing technical specifications and safety requirements—cognitive tasks particularly challenging for people with ADHD or executive function differences.',
                solution: [
                    'Custom GPT trained on technical specifications',
                    'Breaks complex DIY decisions into manageable decision trees',
                    'Provides safety-first guidance with clear thresholds',
                    'Adapts recommendations based on user skill level',
                ],
                impact: 'Enables neurodivergent homeowners to navigate home improvement with confidence and safety.',
                link: 'https://chatgpt.com/g/g-67ed32058a0c81918c72fe7cce474f3d-undistracted-diytm'
            },
            {
                title: 'abAIde™ Career Coaching Application',
                tags: ['Custom GPT', 'Career Development', 'NLP', 'Assessment Integration'],
                challenge: 'Career transitions require synthesizing insights from multiple assessment frameworks. Traditional career coaching is expensive and inaccessible, particularly for underrepresented professionals navigating complex career pivots.',
                solution: [
                    'Custom GPT trained on 1,500+ pages of career development content',
                    'Synthesizes multiple assessment frameworks',
                    'Creates personalized recommendations based on market trends',
                    'Interactive coaching adapting to individual career stages',
                ],
                impact: 'Democratizes access to personalized career coaching for professionals who cannot afford traditional coaching services.'
            },
            {
                title: 'CyncUp™: Heritage Bike Route Planner',
                tags: ['Civic Tech', 'Cultural Preservation', 'GIS/Mapping', 'Python', 'In Development'],
                challenge: 'African American heritage sites face erasure through gentrification and organized attacks on accurate historical placemaking. Many Black cyclists also bring people together from across the country for meaningful events that center Black heritage and integrate economic support with cultural preservation.',
                solution: [
                    'Bike route planning using publicly available spatial data',
                    'Maps cycling routes connecting heritage sites with small businesses',
                    'Leverages shapefiles, GeoJSON, and KML data sources',
                    'Counters anti-DEIA efforts through visible, accessible history',
                ],
                impact: '',
                vision: 'Tool for active cultural preservation and economic justice, enabling communities to reclaim public narratives while directly supporting Black-owned businesses. CyncUp™ also enables people to enjoy the outdoors and satisfy the human need to socialize in person while engaging with history and community.'
            }
        ]
    },
    {
        title: 'Operations, Policy & Research Projects',
        projects: [
            {
                title: 'WhatsApp API Translation Tool for Global Safeguarding',
                tags: ['Logic Model Design', 'API Integration', 'Safeguarding', 'Accessibility'],
                challenge: 'Communities worldwide lacked accessible channels to report harm caused by development activities. Language barriers and unfamiliar reporting systems prevented vulnerable populations from making complaints.',
                solution: [
                    'Designed logic model integrating translation into WhatsApp API',
                    'Leveraged WhatsApp\'s widespread adoption as accessible channel',
                    'Created automatic translation workflows for local languages',
                    'Balanced innovation with security requirements',
                ],
                impact: 'While the project didn\'t proceed due to security policy concerns, the logic model established important precedent for accessible safeguarding mechanisms and informed future policy development.'
            },
            {
                title: 'AI Governance Framework for Federal Agency',
                tags: ['AI Policy', 'Risk Mitigation', 'Equity', 'Executive Briefing'],
                challenge: 'Following the White House Executive Order on AI, a federal agency needed to rapidly develop governance frameworks that balanced innovation with equity considerations and regulatory compliance across global operations.',
                solution: [
                    'Plain-language AI application intake form',
                    'Cross-bureau coordination between CIO and DEIA leadership',
                    'Policy frameworks addressing bias detection and privacy',
                    'Executive briefings translating technical requirements',
                ],
                impact: 'Established agency-wide AI governance protocols enabling responsible innovation while protecting vulnerable populations. Framework adopted as model for task force operations.'
        },
    }
];

export const BACKGROUND_DATA: BackgroundItem[] = [
  {
    company: 'HandshakeAI',
    role: 'AI Trainer | Handshake AI Fellowship',
    duration: 'October 2024–Present',
    description: 'Contributing to advancement of large language models through prompt development and response evaluation, applying subject-matter expertise in education and workforce development to improve AI capabilities.'
  },
  {
    company: 'U.S. Agency for International Development (USAID)',
    role: 'Senior Management Analyst | Acting Division Chief',
    duration: '2021–2025',
    description: 'Led technology implementation, organizational transformation, and strategic advisory initiatives across global operations. Managed complex stakeholder networks, directed cross-functional teams, and advised C-suite leadership on AI governance, change management, and operational excellence.',
    details: [
      {
        title: 'AI/ML Implementation & Technical Leadership',
        points: [
          'Co-authored agency-wide AI governance strategy in response to White House Executive Order 14110, establishing frameworks for responsible ML/AI adoption that directly supported organizational performance improvement',
          'Designed and implemented plain-language AI application intake system promoting transparency in technology adoption decisions, creating replicable framework now used across multiple bureaus',
          'Led Salesforce CRM implementation advisory supporting digital intake process redesign, reducing information management burden and improving data quality for program staff',
          'Co-designed Organizational Health Index dashboard (Tableau-based) incorporating performance indicators and MOCHA accountability framework, enabling data-driven management decisions',
          'Delivered process automation recommendations eliminating 65+ hours of monthly administrative burden through workflow optimization and system integration'
        ]
      },
      {
        title: 'Client & Project Management',
        points: [
            'Managed research and innovation portfolio with access to roughly $600,000 in budgetary support spanning academic partnerships, international development initiatives, and organizational transformation projects worldwide',
            'Led Northern Triangle Task Force After Action Review, conducting 28+ stakeholder interviews and delivering 15+ actionable recommendations adopted agency-wide, improving resource allocation and operational efficiency',
            'Directed Customer Experience mapping initiative for sensitive organizational processes, converting stakeholder resistance into collaborative partnerships through trauma-informed, practitioner-centered approaches',
            'Served as project lead for Organizational Effectiveness Review, coordinating cross-functional teams including qualitative consultants and IT contractors to deliver evidence-based workspace optimization recommendations',
            'Maintained exceptional client satisfaction through systematic feedback integration, adaptive project management, and commitment to on-time, on-budget, high-quality deliverables'
        ]
      },
      {
        title: 'Team Development & Leadership',
        points: [
            'Recruited, coached, and supervised team members across multiple rotations, including 60-day assignment as Acting Division Chief for Development Partnerships team',
            'Established structured onboarding system using briefing books and coaching sessions, reducing time-to-productivity for new analysts by 40% and building institutional knowledge retention',
            'Created centralized project management system (Smartsheet) that clarified team responsibilities, improved documentation quality, and enhanced strategic oversight across distributed teams',
            'Provided actionable feedback and professional development opportunities resulting in team members advancing to senior positions and expanding span of control',
            'Mentored early career staff on technical skills including qualitative analysis (Atlas.ti), dashboard design, and stakeholder engagement'
        ]
      },
      {
        title: 'Business Development & Strategic Partnerships',
        points: [
            'Cultivated strategic partnerships with American University and Delaware State University, building DEIA-informed partnership pipelines with HBCUs and Hispanic-serving Institutions that resulted in new institutional collaborations',
            'Represented USAID at convenings and stakeholder meetings, building relationships that informed future program design and partnership opportunities',
            'Identified and pursued new engagement opportunities by connecting organizational needs with external expertise, resulting in successful consultant contracts and expanded service delivery capacity'
        ]
      }
    ]
  },
  {
    company: 'Digiola Creative',
    role: 'Founder & Principal Consultant',
    duration: '2020–2022',
    description: 'Led independent consulting practice delivering strategic analysis for nonprofit organizations, specializing in electoral strategy, organizational effectiveness, and mission-driven transformation.'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        institution: 'University of Pennsylvania, Wharton School',
        details: [
            'Public Policy Certificate Program (2025–2026)',
            'Economic Analysis and Policy Evaluation'
        ]
    },
    {
        institution: 'American University',
        details: [
            'Master of Arts, International Affairs (2012)',
            'Concentration: Economic Policy, Gender Studies',
            'Thesis: "The Cost of Pay: Sex, Employment and Policy Priorities in Mozambique"',
            '2014 Irene Tinker-Millidge Walker Fellow'
        ]
    },
    {
        institution: 'Northwestern University',
        details: [
            'Bachelor of Arts, African American Studies',
            'Minor: Latin American & Caribbean Studies',
            '2007 Melville J. Herskovits Africana Studies Scholar'
        ]
    }
];

export const TRAINING_DATA: TrainingItem[] = [
    { institution: 'Conversation Design Institute (In Progress)', details: 'Training in conversation design for AI systems, voice and text prompt logic trees, and human-in-the-loop assistance design' },
    { institution: '150-Hour Mediator Certification (In Progress)', details: 'Conflict resolution and collaborative facilitation; Charles County, Maryland' },
    { institution: 'Trauma-Responsive Conflict Resolution Training (2020)', details: '16-hour intensive covering nonviolent communication, de-escalation, and trauma-informed dialogue facilitation; Richmond Peace Education Center' },
    { institution: 'Race Forward Affiliate Trainer', details: 'Equity and inclusion in organizational transformation' },
    { institution: 'Advanced Data Analytics Training', details: 'Atlas.ti, mixed-method research, weighted analysis' }
];

export const SKILLS_DATA: SkillCategory[] = [
    { title: 'Data Science & Analytics', skills: 'Qualitative analysis (Atlas.ti), statistical analysis (SPSS, Stata), data visualization (Tableau), GIS mapping (ArcGIS), quantitative evaluation, cost-benefit analysis' },
    { title: 'AI/ML Applications', skills: 'Custom GPT development, prompt engineering, JavaScript, React, API integration, user experience design, natural language processing applications, conversation design' },
    { title: 'Project Management', skills: 'Smartsheet, Asana, Salesforce CRM, Google Workspace, Office 356, Zoom, Microsoft Teams, Slack' },
    { title: 'Research Methods', skills: 'Mixed-method research design, stakeholder interviews, customer journey mapping, behavioral insights, impact evaluation, weighted analysis' }
];

export const RESEARCH_DATA: ResearchItem[] = [
    {
        title: 'Detroit: A 2000 Census-Based Analysis',
        meta: 'GIS & Urban Planning Research | 2013',
        description: 'Computational analysis of spatial inequality in Detroit using ArcGIS, examining the intersection of race, employment, income, and infrastructure access. Employed nearest neighbor analysis and tract-level mapping to document systemic resource distribution patterns.'
    },
    {
        title: 'Economic Impact of the Great Recession on Communities of Color',
        meta: 'Center for American Progress | 2010–2011',
        description: 'Co-authored groundbreaking research examining disproportionate effects of economic downturn on communities of color. Widely cited in academic literature including Harvard Law Review, congressional testimony, and mainstream media.'
    },
    {
        title: 'Building Demand for Math Literacy',
        meta: 'International Journal of Urban Learning Technology | Spring 2008',
        description: 'Co-authored with Melanie L. West, Barbara P. Moss, and Naama Lewis. Research examining culturally responsive math education using video-game based platform with hip hop-inspired themes.'
    },
    {
        title: 'Selected Center for American Progress Publications',
        meta: 'Center for American Progress | 2010–2011',
        description: 'Key publications including:',
        links: [
            { text: '"No More DREAMs Deferred: African Immigrants Make Their DREAM Act Case"', url: 'https://www.americanprogress.org/article/no-more-dreams-deferred/' },
            { text: '"Infographic: The Growth of Asian American and Pacific Islander Communities"', url: 'https://www.americanprogress.org/article/infographic-the-growth-of-asian-american-and-pacific-islander-communities/' },
            { text: '"Beyond Recovery for Gulf Coast Communities of Color"', url: 'https://www.americanprogress.org/article/beyond-recovery-for-gulf-coast-communities-of-color/' },
            { text: '"The State of Communities of Color in the U.S. Economy"', url: 'https://www.americanprogress.org/article/the-state-of-communities-of-color-in-the-u-s-economy-3/' }
        ]
    },
    {
        title: 'The Cost of Pay: Sex, Employment and Policy Priorities in Mozambique',
        meta: 'Master\'s Thesis, American University | 2012',
        description: 'Analysis of gendered employment patterns and economic policy in Mozambique\'s private sector development. Examined nine years of economic data using equity lens to evaluate job creation outcomes.'
    },
    {
        title: 'Equity-Centered Data Collection in International Development',
        meta: 'USAID Bureau for Latin America and the Caribbean | 2023',
        description: 'Produced guidance on disaggregated data methods to capture socioeconomic marginalization of Afro-descendant and Indigenous populations. Framework addresses privacy protection and cultural sensitivity.'
    }
];