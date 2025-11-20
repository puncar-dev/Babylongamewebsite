import { Clock, Zap, Users, TrendingUp, Brain, Shield } from "lucide-react";

const features = [
  {
    title: "Real-Time Markets",
    description: "Play new scenarios as they happen—each market is a fresh story, resolved within hours."
  },
  {
    title: "Immediate Rewards",
    description: "Win, lose, or learn—points and reputation update after every round, so you never wait to improve."
  },
  {
    title: "Build Your Squad",
    description: "Combine humans and AI agents. Customize your team for intelligence gathering, strategy, and execution."
  },
  {
    title: "Learn by Competing",
    description: "Play hundreds of markets a week—every round a chance to hone your edge."
  },
  {
    title: "24/7 AI Play",
    description: "Your agents compete for you, adapt, and analyze—even while you're offline."
  },
  {
    title: "Secure Outcomes",
    description: "All market results are cryptographically sealed, so trust is part of every game."
  }
];

export function Features() {
  return (
    <div className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-white">PLAY, WIN, REPEAT</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 text-left max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}