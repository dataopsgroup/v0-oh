interface QuizOption {
  value: number
  label: string
}

interface QuizQuestion {
  id: string
  text: string
  options: QuizOption[]
}

interface QuizSectionData {
  id: number
  title: string
  questions: QuizQuestion[]
}

export const quizSections: QuizSectionData[] = [
  {
    id: 1,
    title: "User Adoption Assessment",
    questions: [
      {
        id: "q1_1",
        text: "What percentage of your team regularly uses HubSpot for their core responsibilities?",
        options: [
          { value: 1, label: "Less than 20%\nVery low adoption" },
          { value: 2, label: "20-40%\nLow adoption" },
          { value: 3, label: "41-60%\nModerate adoption" },
          { value: 4, label: "61-80%\nGood adoption" },
          { value: 5, label: "More than 80%\nExcellent adoption" },
        ],
      },
      {
        id: "q1_2",
        text: "What percentage of your licensed HubSpot capabilities are actively being used?",
        options: [
          { value: 1, label: "Less than 20%\nVery limited usage" },
          { value: 2, label: "20-40%\nBasic usage only" },
          { value: 3, label: "41-60%\nModerate usage" },
          { value: 4, label: "61-80%\nGood utilization" },
          { value: 5, label: "More than 80%\nFull utilization" },
        ],
      },
      {
        id: "q1_3",
        text: "How would your team rate the value HubSpot provides to their daily work?",
        options: [
          { value: 1, label: "Creates more work\nActively frustrating" },
          { value: 2, label: "Minimal value\nNot worth the effort" },
          { value: 3, label: "Some useful features\nMixed perception" },
          { value: 4, label: "Valuable but imperfect\nGenerally positive" },
          { value: 5, label: "Essential tool\nHighly valued" },
        ],
      },
      {
        id: "q1_4",
        text: "How effective was your team's HubSpot training?",
        options: [
          { value: 1, label: "No formal training\nSelf-taught only" },
          { value: 2, label: "Basic generic training\nMinimal guidance" },
          { value: 3, label: "Role-based but limited\nSome tailored content" },
          { value: 4, label: "Comprehensive training\nWell-designed program" },
          { value: 5, label: "Ongoing education\nContinuous improvement" },
        ],
      },
      {
        id: "q1_5",
        text: "How much resistance exists toward using HubSpot?",
        options: [
          { value: 1, label: "Active resistance\nSignificant workarounds" },
          { value: 2, label: "Significant grumbling\nReluctant usage" },
          { value: 3, label: "Neutral attitude\nUsed when required" },
          { value: 4, label: "Generally positive\nOvercoming resistance" },
          { value: 5, label: "Enthusiastic adoption\nTeam champions system" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Data Quality Assessment",
    questions: [
      {
        id: "q2_1",
        text: "What is your estimated duplicate contact/company rate?",
        options: [
          { value: 1, label: "More than 20% duplicates\nSeverely compromised" },
          { value: 2, label: "15-20% duplicates\nHighly problematic" },
          { value: 3, label: "10-15% duplicates\nModerate issues" },
          { value: 4, label: "5-10% duplicates\nMinor issues" },
          { value: 5, label: "Less than 5% duplicates\nWell-managed" },
        ],
      },
      {
        id: "q2_2",
        text: "What percentage of key fields are complete across your records?",
        options: [
          { value: 1, label: "Less than 40% complete\nSeverely incomplete" },
          { value: 2, label: "40-60% complete\nMajor gaps" },
          { value: 3, label: "61-75% complete\nModerate completion" },
          { value: 4, label: "76-90% complete\nGood completion" },
          { value: 5, label: "More than 90% complete\nExcellent completion" },
        ],
      },
      {
        id: "q2_3",
        text: "How often is your data reviewed and updated?",
        options: [
          { value: 1, label: "Rarely or never\nNo maintenance" },
          { value: 2, label: "Annually\nInfrequent" },
          { value: 3, label: "Quarterly\nPeriodic review" },
          { value: 4, label: "Monthly\nRegular maintenance" },
          { value: 5, label: "Continuous automation\nSystematic approach" },
        ],
      },
      {
        id: "q2_4",
        text: "How structured is your approach to data management?",
        options: [
          { value: 1, label: "No defined processes\nAd hoc approach" },
          { value: 2, label: "Some rules, inconsistent\nInformal systems" },
          { value: 3, label: "Documented standards\nLimited enforcement" },
          { value: 4, label: "Clear standards\nRegular enforcement" },
          { value: 5, label: "Comprehensive governance\nFormal program" },
        ],
      },
      {
        id: "q2_5",
        text: "How much does your team trust HubSpot as the source of truth?",
        options: [
          { value: 1, label: "Actively distrust data\nAvoid using system data" },
          { value: 2, label: "Low trust\nFrequent verification" },
          { value: 3, label: "Moderate trust\nSome verification" },
          { value: 4, label: "Generally trusted\nOccasional questions" },
          { value: 5, label: "Complete trust\nSingle source of truth" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Process Integration Assessment",
    questions: [
      {
        id: "q3_1",
        text: "How well does HubSpot align with your team's actual processes?",
        options: [
          { value: 1, label: "Forces unnatural processes\nRequires major changes" },
          { value: 2, label: "Significant mismatch\nMany workarounds needed" },
          { value: 3, label: "Partial alignment\nSome friction points" },
          { value: 4, label: "Good alignment\nMinor adjustments needed" },
          { value: 5, label: "Seamless support\nPerfectly aligned" },
        ],
      },
      {
        id: "q3_2",
        text: "How effectively are you using automation to eliminate manual tasks?",
        options: [
          { value: 1, label: "Minimal automation\nMostly manual processes" },
          { value: 2, label: "Basic automation only\nSimple tasks automated" },
          { value: 3, label: "Moderate automation\nKey processes automated" },
          { value: 4, label: "Extensive automation\nMost tasks automated" },
          { value: 5, label: "Comprehensive automation\nAll possible automation" },
        ],
      },
      {
        id: "q3_3",
        text: "How effectively does HubSpot connect marketing, sales, and service?",
        options: [
          { value: 1, label: "Completely siloed\nNo department connection" },
          { value: 2, label: "Limited sharing\nMinimal cross-team visibility" },
          { value: 3, label: "Some shared processes\nPartial integration" },
          { value: 4, label: "Strong alignment\nMinor gaps remain" },
          { value: 5, label: "Fully unified experience\nSeamless handoffs" },
        ],
      },
      {
        id: "q3_4",
        text: "How well is HubSpot integrated with other critical business systems?",
        options: [
          { value: 1, label: "No integration\nStandalone system" },
          { value: 2, label: "Manual export/import\nManual transfers" },
          { value: 3, label: "Basic one-way integration\nLimited data flow" },
          { value: 4, label: "Bi-directional integration\nKey systems connected" },
          { value: 5, label: "Comprehensive ecosystem\nFull integration" },
        ],
      },
      {
        id: "q3_5",
        text: "How clearly can you track the entire customer journey in HubSpot?",
        options: [
          { value: 1, label: "No end-to-end visibility\nDisconnected stages" },
          { value: 2, label: "Major gaps in journey\nSignificant blind spots" },
          { value: 3, label: "Partial journey visibility\nSome key points tracked" },
          { value: 4, label: "Good visibility\nMinor blind spots" },
          { value: 5, label: "Complete tracking\nFull journey visibility" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Reporting & Analytics Assessment",
    questions: [
      {
        id: "q4_1",
        text: "How extensively is your team using HubSpot's reporting capabilities?",
        options: [
          { value: 1, label: "Not using for reporting\nExternal reporting only" },
          { value: 2, label: "Basic out-of-box reports\nDefault reports only" },
          { value: 3, label: "Some custom reports\nLimited customization" },
          { value: 4, label: "Extensive custom reporting\nTailored to needs" },
          { value: 5, label: "Comprehensive dashboards\nAll levels of business" },
        ],
      },
      {
        id: "q4_2",
        text: "How well do your HubSpot metrics align with business objectives?",
        options: [
          { value: 1, label: "No connection to goals\nVanity metrics only" },
          { value: 2, label: "Basic activity metrics\nVolume measurements" },
          { value: 3, label: "Some outcome metrics\nMixed relevance" },
          { value: 4, label: "Strong KPI alignment\nGood business context" },
          { value: 5, label: "Complete performance view\nPerfect alignment" },
        ],
      },
      {
        id: "q4_3",
        text: "How often do your teams use HubSpot data to make decisions?",
        options: [
          { value: 1, label: "Rarely or never\nDecisions made elsewhere" },
          { value: 2, label: "Occasionally\nFor major decisions only" },
          { value: 3, label: "Regularly for some\nInconsistent usage" },
          { value: 4, label: "Frequently\nMost areas use data" },
          { value: 5, label: "Consistently\nData-driven culture" },
        ],
      },
      {
        id: "q4_4",
        text: "How engaged is your leadership with HubSpot insights?",
        options: [
          { value: 1, label: "No engagement\nLeadership unaware" },
          { value: 2, label: "Minimal awareness\nLimited interest" },
          { value: 3, label: "Periodic reporting\nOccasional review" },
          { value: 4, label: "Regular consumption\nInterested in results" },
          { value: 5, label: "Active engagement\nData-driven leadership" },
        ],
      },
      {
        id: "q4_5",
        text: "How effectively can you track the impact of marketing activities on sales?",
        options: [
          { value: 1, label: "Cannot track\nNo visibility" },
          { value: 2, label: "Basic correlation\nLimited connection" },
          { value: 3, label: "Some attribution\nPartial visibility" },
          { value: 4, label: "Strong attribution\nMost impact tracked" },
          { value: 5, label: "Complete attribution\nFull ROI visibility" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "ROI & Value Assessment",
    questions: [
      {
        id: "q5_1",
        text: "How well do you understand your total cost of HubSpot ownership?",
        options: [
          { value: 1, label: "Unknown costs\nNo clear tracking" },
          { value: 2, label: "License costs only\nPartial visibility" },
          { value: 3, label: "License & staff costs\nMain costs tracked" },
          { value: 4, label: "Comprehensive visibility\nGood understanding" },
          { value: 5, label: "Complete cost analysis\nFull TCO picture" },
        ],
      },
      {
        id: "q5_2",
        text: "How effectively does HubSpot enable growth and adaptation to changes?",
        options: [
          { value: 1, label: "Major limitations\nConstrains business" },
          { value: 2, label: "Challenging to adapt\nSignificant barriers" },
          { value: 3, label: "Moderately flexible\nSome adaptations possible" },
          { value: 4, label: "Responsive & scalable\nSupports growth well" },
          { value: 5, label: "Enabler of growth\nStrategic advantage" },
        ],
      },
      {
        id: "q5_3",
        text: "Can you measure the ROI of your HubSpot implementation?",
        options: [
          { value: 1, label: "Cannot measure ROI\nNo ability to calculate" },
          { value: 2, label: "Rough estimates only\nAnecdotal evidence" },
          { value: 3, label: "Basic ROI calculation\nSimplified approach" },
          { value: 4, label: "Good ROI understanding\nClear methodology" },
          { value: 5, label: "Precise ROI tracking\nComprehensive model" },
        ],
      },
      {
        id: "q5_4",
        text: "How much value does HubSpot provide beyond contact management?",
        options: [
          { value: 1, label: "Contact database only\nMinimal expanded use" },
          { value: 2, label: "Email marketing tool\nLimited applications" },
          { value: 3, label: "Department-specific tool\nOne area benefits" },
          { value: 4, label: "Cross-department value\nMultiple applications" },
          { value: 5, label: "Business transformation\nCompany-wide impact" },
        ],
      },
      {
        id: "q5_5",
        text: "How well does your team leverage HubSpot's evolving capabilities?",
        options: [
          { value: 1, label: "Not following updates\nStatic implementation" },
          { value: 2, label: "Awareness of updates\nMinimal adoption" },
          { value: 3, label: "Periodic evaluation\nSelected new features" },
          { value: 4, label: "Regular updates\nConsistent evaluation" },
          { value: 5, label: "Continuous optimization\nFully leveraged" },
        ],
      },
    ],
  },
]
