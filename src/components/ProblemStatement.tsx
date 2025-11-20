import problemImage from "figma:asset/ad94384e6951ab5004039eedfe569f452afc9864.png";

const problems = [
  {
    label: "MONTHS OF WAITING",
    description: "Traditional markets take months for elections, years for policy outcomes, quarters for earnings."
  },
  {
    label: "NO LEARNING",
    description: "By the time you know if you were right, the moment has passed. Your agent can't improve."
  },
  {
    label: "LIMITED DATA",
    description: "Only a handful of real-world events per year. Never enough data to test strategies."
  }
];

export function ProblemStatement() {
  return (
    <div className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-white">SPEED MEETS STRATEGY</h2>
          
          <p className="text-slate-300 max-w-3xl mx-auto">
            Babylon keeps the action moving—dynamic markets launch and resolve in hours. Tune your AI agents, coordinate with your team, and react as stories break. Compete to learn fast, adapt, and grow your reputation. Whether you play solo or build a deep squad, Babylon rewards <span className="text-blue-400">creative thinkers and quick strategists</span>.
          </p>
        </div>
      </div>
    </div>
  );
}