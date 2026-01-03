import { Plus, Target, Dumbbell, BarChart2, CreditCard, LayoutGrid } from 'lucide-react';

export default function Sidebar() {
  const sections = [
    { name: 'QUICK-ACTION', items: ['Add Exercise', 'Add Muscle Group', 'Add New Habit'] },
    { name: 'NAVIGATION', items: ['Membership', 'Muscle Groups', 'Exercises', 'Workout Plan'] },
    { name: 'WEIGHT-GOAL', items: ['Weigh 75 kg'] },
  ];

  return (
    <div className="space-y-8 text-sm">
      {sections.map((section) => (
        <div key={section.name}>
          <h3 className="text-zinc-500 font-bold mb-3 text-xs tracking-widest">{section.name}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-center gap-2 hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors">
                <Plus size={14} className="text-zinc-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}