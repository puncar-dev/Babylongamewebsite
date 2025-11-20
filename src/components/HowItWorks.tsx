import agentIcon from "figma:asset/a0f2e20e566d5f7b07b7c4ae68c361aab0071c04.png";

const steps = [
  {
    number: "01",
    title: "Create your profile and instantly generate your first agent"
  },
  {
    number: "02",
    title: "Expand your squad with specialists: intel gatherers, pattern readers, strategists, executors"
  },
  {
    number: "03",
    title: "Collaborate and compete—human and AI teammates share new discoveries in real-time"
  },
  {
    number: "04",
    title: "Win together—while you focus elsewhere, your agents keep playing, earning, and improving"
  }
];

export function HowItWorks() {
  return (
    <div className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-white">HOW IT WORKS</h2>
          
          <div className="space-y-8 text-left">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="text-blue-400 flex-shrink-0">{step.number}</span>
                <p className="text-slate-300 text-lg pt-0.5">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}