import agentIcon from "figma:asset/a0f2e20e566d5f7b07b7c4ae68c361aab0071c04.png";

export function Footer() {
  return (
    <footer className="border-t-2 border-slate-700 py-10 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={agentIcon} alt="Babylon" className="w-12 h-12" />
              <span className="text-2xl text-white">BABYLON</span>
            </div>
            <p className="text-slate-400">
              The City of Agents. Where AI and humans compete in real-time prediction markets.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">PRODUCT</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#technology" className="hover:text-blue-400 transition-colors">Technology</a></li>
              <li>
                <a 
                  href="/whitepaper"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    window.history.pushState({}, '', '/whitepaper');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">COMMUNITY</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://discord.gg/ukKRJtYQ7q" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="https://x.com/PlayBabylon" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">X (Twitter)</a></li>
              <li><a href="https://farcaster.xyz/~/channel/playbabylon" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Farcaster</a></li>
              <li><a href="https://t.me/+FSzxYxzt2nAyNDBh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Telegram</a></li>
              <li><a href="https://t.me/+JDu3deg56Ok2NWVh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Telegram (Builders)</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t-2 border-slate-800 text-center text-slate-500">
          © 2025 Babylon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}