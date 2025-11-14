import { Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Waitlist() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://babylon.market/?ref=PBDC5C0L";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b-2 border-slate-800 bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a 
            href="/"
            onClick={(e) => { 
              e.preventDefault(); 
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </a>
          <div className="text-white">BABYLON</div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-white mb-2">You're on the List!</h1>
          <p className="text-slate-400">Join the Babylon community and earn points to move up</p>
        </div>

        {/* Waitlist Position */}
        <div className="bg-slate-900/50 border-2 border-slate-800 p-8 mb-8">
          <h2 className="text-white text-center mb-8">Your Waitlist Position</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl text-blue-400 mb-2">#59</div>
              <div className="text-slate-300 mb-1">Your Position in Line</div>
              <div className="text-slate-500 text-sm">Top 2% of waitlist</div>
            </div>
            <div className="text-center">
              <div className="text-6xl text-white mb-2">58</div>
              <div className="text-slate-300 mb-1">People Ahead</div>
              <div className="text-slate-500 text-sm">Out of 59 total</div>
            </div>
          </div>
        </div>

        {/* Your Points */}
        <div className="bg-slate-900/50 border-2 border-slate-800 p-8 mb-8">
          <h2 className="text-white text-center mb-8">Your Points</h2>
          
          <div className="text-center mb-8">
            <div className="text-6xl text-blue-400 mb-2">1000</div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center border-2 border-slate-800 p-4">
              <div className="text-2xl text-white mb-1">0</div>
              <div className="text-slate-400 text-sm">Invite Points</div>
            </div>
            <div className="text-center border-2 border-slate-800 p-4">
              <div className="text-2xl text-white mb-1">0</div>
              <div className="text-slate-400 text-sm">Earned Points</div>
            </div>
            <div className="text-center border-2 border-slate-800 p-4">
              <div className="text-2xl text-white mb-1">0</div>
              <div className="text-slate-400 text-sm">Bonus Points</div>
            </div>
          </div>
        </div>

        {/* Invite Friends - MAIN CTA */}
        <div className="bg-blue-500/10 border-4 border-blue-500 p-10 mb-12">
          <h2 className="text-white text-center mb-8">Invite Friends & Move Up in Line!</h2>
          
          <div className="text-center mb-8 space-y-2">
            <p className="text-slate-200">
              Each invite is worth <span className="text-blue-400">+50 points</span>.
            </p>
            <p className="text-green-400">
              Enter early → trade more → gain advantage.
            </p>
          </div>

          <div className="flex gap-3 max-w-2xl mx-auto">
            <div className="flex-1 bg-slate-900 border-2 border-slate-700 px-5 h-12 text-slate-200 flex items-center">
              {referralLink}
            </div>
            <Button
              onClick={handleCopy}
              className="rounded-none bg-blue-500 hover:bg-blue-600 border-2 border-blue-400 px-8 h-12"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Earn More Points */}
        <div className="bg-slate-900/50 border-2 border-slate-800 p-8 mb-8">
          <h2 className="text-white text-center mb-8">Earn More Points</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-2 border-slate-700 p-4 hover:border-blue-500 transition-colors cursor-pointer">
              <div className="text-slate-300">Add Email Address</div>
              <div className="text-blue-400">+25 points</div>
            </div>
            <div className="flex items-center justify-between border-2 border-green-700 bg-green-900/20 p-4">
              <div className="text-green-400">Wallet Connected</div>
              <div className="text-green-400">+25 points</div>
            </div>
          </div>
        </div>

        {/* Top Inviters */}
        <div className="bg-slate-900/50 border-2 border-slate-800 p-8">
          <h2 className="text-white text-center mb-6">Top Inviters</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between border-2 border-yellow-700 bg-yellow-900/20 p-4">
              <div className="flex items-center gap-4">
                <div className="text-yellow-400">#1</div>
                <div>
                  <div className="text-white">Anonymous</div>
                  <div className="text-slate-400 text-sm">15 invites</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-blue-400">650</div>
                <div className="text-slate-400 text-sm">points</div>
              </div>
            </div>

            <div className="flex items-center justify-between border-2 border-slate-700 p-4">
              <div className="flex items-center gap-4">
                <div className="text-slate-400">#2</div>
                <div>
                  <div className="text-white">Anonymous</div>
                  <div className="text-slate-400 text-sm">5 invites</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-blue-400">250</div>
                <div className="text-slate-400 text-sm">points</div>
              </div>
            </div>

            <div className="flex items-center justify-between border-2 border-slate-700 p-4">
              <div className="flex items-center gap-4">
                <div className="text-slate-400">#3</div>
                <div>
                  <div className="text-white">Anonymous</div>
                  <div className="text-slate-400 text-sm">3 invites</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-blue-400">150</div>
                <div className="text-slate-400 text-sm">points</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Ready to play Babylon?</p>
          <a 
            href="/"
            onClick={(e) => { 
              e.preventDefault(); 
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            <Button className="rounded-none bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-400 px-8">
              Learn More About Babylon
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}