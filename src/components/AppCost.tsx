import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'What kind of app are you building?',
    options: [
      { label: 'Informational / Static', value: 0 },
      { label: 'User accounts & profiles', value: 1 },
      { label: 'E-commerce or marketplace', value: 2 },
      { label: 'Real-time chat or messaging', value: 2 },
      { label: 'Dashboard & admin panels', value: 2 },
    ],
  },
  {
    id: 2,
    question: 'Which platforms do you want to support?',
    options: [
      { label: 'Web only', value: 0 },
      { label: 'Mobile only (iOS/Android)', value: 1 },
      { label: 'Both Web and Mobile', value: 2 },
    ],
  },
  {
    id: 3,
    question: 'Do you need user login or authentication?',
    options: [
      { label: 'No', value: 0 },
      { label: 'Yes, basic email/password', value: 1 },
      { label: 'Yes, Google/Apple login, 2FA', value: 2 },
    ],
  },
  {
    id: 4,
    question: 'Will your app integrate with other services?',
    options: [
      { label: 'No', value: 0 },
      { label: 'Maybe a couple', value: 1 },
      { label: 'Yes, several integrations', value: 2 },
    ],
  },
  {
    id: 5,
    question: 'Do you want a custom design or standard layout?',
    options: [
      { label: 'Template/basic UI', value: 0 },
      { label: 'Custom-designed experience', value: 2 },
    ],
  },
  {
    id: 6,
    question: 'Do you need payment processing or subscriptions?',
    options: [
      { label: 'No', value: 0 },
      { label: 'One-time purchases', value: 1 },
      { label: 'Subscriptions or in-app payments', value: 2 },
    ],
  },
];

const AppCost: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (value: any) => {
    const updatedAnswers: any = [...answers];
    updatedAnswers[currentStep] = value;
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const totalScore = answers.reduce((acc, val) => acc + val, 0);
  let estimate = '';
  if (totalScore <= 4) estimate = '$10,000 – $25,000';
  else if (totalScore <= 9) estimate = '$25,000 – $75,000';
  else estimate = '$75,000 – $200,000+';

  if (submitted) {
    return (
      <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-md text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Estimated App Cost</h2>
        <p className="text-xl">Your app may cost between:</p>
        <p className="text-3xl font-semibold text-blue-600">{estimate}</p>
        <div className="space-y-4">
          <a
            href="/ElcoDev_App_Cost_Guide_2025_Testimonials.pdf"
            download
            className="inline-block px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Download Full Cost Guide
          </a>
          <a
            href="https://calendly.com/elco-dev/consult?month=2025-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
          >
            Book a Free Consult
          </a>
        </div>
      </div>
    );
  }

  const question = questions[currentStep];

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-xl font-bold text-gray-800">
        Step {currentStep + 1} of {questions.length}
      </h2>
      <p className="text-lg font-medium text-gray-700">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt.value)}
            className="w-full px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded-xl text-left"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppCost;