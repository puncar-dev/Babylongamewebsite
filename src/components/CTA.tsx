import { Button } from "./ui/button";

export function CTA() {
  return (
    <div className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-white">READY TO ENTER BABYLON?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Button 
              asChild
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-400 h-auto py-6 flex-col rounded-none"
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
              className="bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-700 hover:border-blue-500 h-auto py-6 flex-col rounded-none transition-colors"
            >
              <a href="https://github.com/elizaos/babylon" target="_blank" rel="noopener noreferrer">
                <span className="text-lg">Develop and Deploy</span>
                <span className="text-xs text-slate-300">Build your own Agent</span>
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              className="bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-700 hover:border-blue-500 h-auto py-6 flex-col rounded-none transition-colors"
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
        </div>
      </div>
    </div>
  );
}