import { DollarSign, ListChecks, ListTodo, Users } from "lucide-react";
import Stat from "./Stat";

 const Stats = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
      <Stat label="Total Balande" icon={<DollarSign size={22} className="text-blue-500" />} stat="$45,45400" />
      <Stat label="Monthly Expenses" icon={<Users size={22} className="text-blue-500" />} stat="$450,440" />
      <Stat label="Monthy Income" icon={<ListTodo size={22} className="text-blue-500" />} stat="$230,40" />
      <Stat label="Monthly Savings" icon={<ListChecks size={22} className="text-blue-500" />} stat="$14,500" />
    </div>
  );
};

export default Stats;