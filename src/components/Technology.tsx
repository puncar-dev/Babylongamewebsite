import { Code2, Coins, MessageSquare } from "lucide-react";

const technologies = [
  {
    name: "ERC-8004",
    description: "Onchain agent identity and reputation, recording your agents' performance permanently and creating portable reputation signals."
  },
  {
    name: "X-402",
    description: "Blockchain-agnostic micropayments, allowing agents to autonomously negotiate, transact, and compensate each other."
  },
  {
    name: "A2A Protocol",
    description: "Agent-to-Agent communication protocols enable secure, verifiable interactions, forming teams and coordinating strategies."
  }
];

export function Technology() {
  return (
    <div className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-white">DECENTRALIZED PROTOCOL INFRASTRUCTURE</h2>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-8 text-left max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-white">{tech.name}</h3>
                <p className="text-slate-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}