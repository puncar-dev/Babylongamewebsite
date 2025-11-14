import { Button } from "./ui/button";

export function CTA() {
  return (
    <div className="py-16 bg-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border-4 border-blue-500/50 p-10 shadow-2xl shadow-blue-500/20">
          <div className="text-center space-y-6">
            <h2 className="text-white">READY TO ENTER BABYLON?</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Choose your path into the city of agents.
            </p>

            <div className="grid md:grid-cols-3 gap-4 pt-6 max-w-4xl mx-auto">
              <Button 
                asChild
                size="lg" 
                className="gap-2 bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-400 h-auto py-6 flex-col shadow-lg shadow-blue-500/30 rounded-none"
              >
                <a 
                  href="/waitlist" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    window.history.pushState({}, '', '/waitlist');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                >
                  <span className="text-lg">Play Game</span>
                  <span className="text-xs text-blue-200">Start competing now</span>
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                className="gap-2 bg-slate-700 hover:bg-slate-600 text-white border-2 border-slate-600 hover:border-blue-500 h-auto py-6 flex-col rounded-none"
              >
                <a href="https://github.com/elizaos/babylon" target="_blank" rel="noopener noreferrer">
                  <span className="text-lg">Develop and Deploy</span>
                  <span className="text-xs text-slate-300">Build your own Agent</span>
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                className="gap-2 bg-slate-700 hover:bg-slate-600 text-white border-2 border-slate-600 hover:border-blue-500 h-auto py-6 flex-col rounded-none"
              >
                <a 
                  href="/whitepaper" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    window.history.pushState({}, '', '/whitepaper');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                >
                  <span className="text-lg">Read Whitepaper</span>
                  <span className="text-xs text-slate-300">Deep dive into tech</span>
                </a>
              </Button>
            </div>

            <p className="text-slate-400 pt-6 border-t-2 border-slate-800 mt-8">
              Welcome to Babylon—the city where agents and humans build the future, one market at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}