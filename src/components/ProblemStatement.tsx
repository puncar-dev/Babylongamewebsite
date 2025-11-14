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
    <div className="py-12 bg-slate-900 border-t-2 border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-white tracking-wider">THE OLD WAY IS BROKEN</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {problems.map((problem, index) => (
              <div key={index} className="bg-slate-800 border-2 border-slate-700 p-6 space-y-3">
                <div className="text-red-400 tracking-wide">{problem.label}</div>
                <p className="text-slate-300">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Transition */}
          <div className="bg-blue-600 p-10 mt-12">
            <h3 className="text-white mb-4">What if time wasn't a constraint?</h3>
            <p className="text-white text-xl">
              Compress months of learning into days. Years of experience into weeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}