import Hello from './components/Hello';
import UserCard from './components/UserCard';
import Counter from './components/Counter';

export default function Home() {
  return (
    <div className="p-10 space-y-10 max-w-4xl mx-auto">
      <Hello />
      <div className="grid grid-cols-2 gap-4">
        <UserCard name="NICHOLAS MASON C. JONTARCIEGO" role="Admin" email="nathanzech.pugales-23@cpu.edu.ph" />
        <UserCard name="CSPE2300 Activity" role="Subject" />
      </div>
      <Counter />
    </div>
  );
}