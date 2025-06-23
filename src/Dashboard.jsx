import { useState, useEffect } from 'react';
import ReminderForm from './components/ReminderForm';
import DailyVolume from './components/DailyVolume';
import GreenLockPeriod from './components/GreenLockPeriod';

import { useEffect } from 'react';
export default function Dashboard() {
  const [jarvisPrice, setJarvisPrice] = useState(null);
  const [virtualPrice, setVirtualPrice] = useState(null);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const jarvisRes = await fetch('https://api.geckoterminal.com/api/v2/networks/base/pools/0xb00c5f0f9aa2f95057d7b9a18ad7d2d18f6ff298');
        const jarvisData = await jarvisRes.json();
        const jarvis = jarvisData.data.attributes.base_token_price_usd;
        setJarvisPrice(parseFloat(jarvis).toFixed(4));

        const virtualRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=virtual-protocol&vs_currencies=usd');
        const virtualData = await virtualRes.json();
        setVirtualPrice(parseFloat(virtualData["virtual-protocol"].usd).toFixed(4));
      } catch (error) {
        console.error("Failed to fetch token prices:", error);
      }
    }
    fetchPrices();
  }, []);

  const [showSection, setShowSection] = useState('subscribeUnlock');

  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4"
        style={{
          backgroundImage: "url('/images/nwbckgrnd.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col items-center justify-center text-center py-6">

<div className="flex justify-between items-center w-full mb-4 px-4">
  <h1 className="text-xl italic font-bold">Virgenscan</h1>
  <a href="https://twitter.com/jarvisagentai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white">
    <img src="/images/xlogo.png" alt="X" className="w-4 h-4" />
    <span>@jarvisagentai</span>
  </a>
</div>


<div className="flex justify-center items-center space-x-6 mb-4">
  <div className="flex items-center space-x-2">
    <img src="/images/jarvis.png" alt="JARVIS" className="w-5 h-5" />
    <span className="text-sm">$JARVIS: {jarvisPrice ? `$${jarvisPrice}` : "Loading..."}</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="/images/virtual.png" alt="Virtual" className="w-5 h-5" />
    <span className="text-sm">Virtual: {virtualPrice ? `$${virtualPrice}` : "Loading..."}</span>
  </div>
</div>

          <h1 className="text-3xl italic font-bold mb-2">Virgenscan</h1>
          <p className="text-sm italic text-gray-300 mb-4">
            $JARVIS is live. <br />
            <span className="text-xs">Official CA: 0x1E562BF73369D1d5B7E547b8580039E1f05cCc56</span>
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mb-6">
            TRADE $JARVIS
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setShowSection('dailyVolume')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Daily Volume
            </button>
            <button
              onClick={() => setShowSection('greenLock')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Green Lock Period
            </button>
            <button
              onClick={() => setShowSection('subscribeUnlock')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Subscribe Unlock Period
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow cursor-not-allowed opacity-50">
              Agent Market (coming soon)
            </button>
            <button
              onClick={() => setShowSection('stakedAgents')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Total Staked Agents
            </button>
          </div>
        </div>

        <div className="mt-10">
          {showSection === 'dailyVolume' && <DailyVolume />}
          {showSection === 'greenLock' && <GreenLockPeriod />}
          {showSection === 'subscribeUnlock' && <ReminderForm />}
          {showSection === 'agentMarket' && <p className="text-center">🤖 Agent Market section coming soon</p>}
          {showSection === 'stakedAgents' && <p className="text-center">📈 Total Staked Agents info will be shown here</p>}
        </div>
      </div>
    </>
  );
}


  useEffect(() => {
    async function fetchPrices() {
      try {
        const jarvisRes = await fetch('https://api.geckoterminal.com/api/v2/networks/base/pools/0xb00c5f0f9aa2f95057d7b9a18ad7d2d18f6ff298');
        const jarvisData = await jarvisRes.json();
        const jarvisPrice = jarvisData.data.attributes.base_token_price_usd;
        

        const virtualRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=virtual-protocol&vs_currencies=usd');
        const virtualData = await virtualRes.json();
        const virtualPrice = virtualData["virtual-protocol"].usd;
        
      } catch (error) {
        console.error("Failed to fetch token prices:", error);
      }
    }

    fetchPrices();
  }, []);

