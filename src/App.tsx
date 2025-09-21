import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p>Start prompting (or editing) to see magic happen :)</p>
        <Analytics />
        <SpeedInsights />
    </div>
  );
}

export default App;
