export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  personalReflection: string;
}

export const questions: Question[] = [
  {
    question: 'When a new team member joins, what is the most impactful first experience you can engineer for them?',
    options: [
      'A comprehensive document dump with all company policies',
      'A structured 30-60-90 day plan with clear milestones and a dedicated buddy',
      'Immediate assignment to a high-stakes project to accelerate learning',
      'A week of shadowing meetings without any context or introduction',
    ],
    correctAnswer: 'A structured 30-60-90 day plan with clear milestones and a dedicated buddy',
    personalReflection:
      'Think back to your own onboarding. What single moment made you feel you truly "belonged"? How could you recreate that feeling deliberately for others?',
  },
  {
    question: 'Which metric is the strongest leading indicator of employee disengagement before it becomes a flight risk?',
    options: [
      'Declining participation in optional team socials',
      'Reduced frequency of proactive questions and suggestions in meetings',
      'Consistently logging out at exactly the contracted finish time',
      'Requesting more detailed written feedback on performance reviews',
    ],
    correctAnswer: 'Reduced frequency of proactive questions and suggestions in meetings',
    personalReflection:
      'Can you recall a time you stopped contributing ideas in a meeting? What caused that silence? What would have re-engaged you?',
  },
  {
    question: 'A high-performer is quietly underperforming. What is the most effective first intervention?',
    options: [
      'Issue a formal performance improvement plan immediately to set clear expectations',
      'Increase their workload to re-ignite their competitive drive',
      'Schedule a private, curiosity-led 1:1 focused on their experience, not their output',
      "Ask their peers to provide informal feedback without the individual's knowledge",
    ],
    correctAnswer: 'Schedule a private, curiosity-led 1:1 focused on their experience, not their output',
    personalReflection:
      'Have you ever been the quiet underperformer? What was the barrier no one addressed? What question from a manager would have unlocked you?',
  },
  {
    question: 'What is the most psychologically safe way to surface unspoken friction within a team?',
    options: [
      'An anonymous survey with quantitative ratings only',
      'A structured "Start / Stop / Continue" retrospective facilitated by a neutral party',
      'Encouraging individuals to email concerns directly to HR',
      'Observing team dynamics over several months before acting',
    ],
    correctAnswer: 'A structured "Start / Stop / Continue" retrospective facilitated by a neutral party',
    personalReflection:
      'What friction are you currently sitting on — either as a giver or receiver of feedback — that you have not yet voiced? What would make it safe enough to say it?',
  },
  {
    question: 'When designing a recognition programme, which approach creates the most durable motivational effect?',
    options: [
      'Monthly "Employee of the Month" awards decided by senior leadership',
      'A large annual bonus tied solely to individual financial targets',
      'Timely, specific, peer-visible recognition linked to a stated company value',
      'A points-based system redeemable for company-branded merchandise',
    ],
    correctAnswer: 'Timely, specific, peer-visible recognition linked to a stated company value',
    personalReflection:
      'Think of the most meaningful piece of recognition you ever received. Was it about the reward itself, or what was said and who witnessed it?',
  },
];
