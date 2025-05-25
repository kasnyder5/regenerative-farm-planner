
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(0);
  const [zipCode, setZipCode] = useState('');
  const [acreage, setAcreage] = useState('');
  const [goals, setGoals] = useState<string[]>([]);

  const nextStep = () => setStep(step + 1);
  const toggleGoal = (goal: string) =>
    setGoals((prev) => prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]);

  const mockSummary = zipCode.startsWith('30')
    ? 'You are in USDA Zone 8a (Southeast). This plan emphasizes heat-tolerant crops, composting, and water conservation.'
    : 'This plan follows general temperate zone guidance with beginner crops and regenerative strategies.';

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>AI Homestead Planner (Mock)</h1>
      {step === 0 && (
        <>
          <h2>Step 1: Enter ZIP Code</h2>
          <input value={zipCode} onChange={e => setZipCode(e.target.value)} />
          <button onClick={nextStep}>Next</button>
        </>
      )}
      {step === 1 && (
        <>
          <h2>Step 2: Enter Acreage</h2>
          <input value={acreage} onChange={e => setAcreage(e.target.value)} />
          <button onClick={nextStep}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Step 3: Select Goals</h2>
          {['Food self-sufficiency', 'Soil regeneration', 'Raise animals', 'Market sales'].map(goal => (
            <div key={goal}>
              <input
                type="checkbox"
                checked={goals.includes(goal)}
                onChange={() => toggleGoal(goal)}
              /> {goal}
            </div>
          ))}
          <button onClick={nextStep}>Finish</button>
        </>
      )}
      {step === 3 && (
        <>
          <h2>Your Mock Homestead Plan</h2>
          <p><strong>Summary:</strong> {mockSummary}</p>
          <h3>Weekly Tasks</h3>
          <ul>
            <li>Turn compost pile</li>
            <li>Broadcast cover crops</li>
            <li>Check coop</li>
          </ul>
          <h3>Crop Suggestions</h3>
          <ul>
            <li>Tomatoes</li>
            <li>Mustard greens</li>
            <li>Amaranth</li>
          </ul>
        </>
      )}
    </div>
  );
}
