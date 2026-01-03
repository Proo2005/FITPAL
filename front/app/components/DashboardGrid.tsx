import WeeklySplit from './WeeklySplit';
import HabitTracker from './HabitTracker';
import PRTracker from './PRTracker';

export default function DashboardGrid() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-10">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight uppercase text-zinc-400">Weekly-Split</h2>
      </header>
      
      <WeeklySplit />

      <section>
        <h2 className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4">Habit-Tracking</h2>
        <HabitTracker />
      </section>

      <section>
        <h2 className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4">PR-Tracker</h2>
        <PRTracker />
      </section>
    </div>
  );
}