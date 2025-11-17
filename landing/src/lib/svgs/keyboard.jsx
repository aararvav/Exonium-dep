const Keyboard = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="160"
      viewBox="0 0 400 160"
      fill="none"
      aria-hidden="true"
      className="w-full h-auto"
    >
      {/* Keyboard base */}
      <rect x="4" y="4" width="392" height="152" rx="24" fill="#1a1b23" stroke="#374151" strokeWidth="2" />
      <rect x="8" y="8" width="384" height="144" rx="20" fill="#0f1724" />
      
      {/* Row 1 keys */}
      <g fill="#2a2d3e" stroke="#4a4d5e" strokeWidth="1">
        <rect x="20" y="25" width="32" height="26" rx="4" />
        <rect x="60" y="25" width="32" height="26" rx="4" />
        <rect x="100" y="25" width="32" height="26" rx="4" />
        <rect x="140" y="25" width="32" height="26" rx="4" />
        <rect x="180" y="25" width="32" height="26" rx="4" />
        <rect x="220" y="25" width="32" height="26" rx="4" />
        <rect x="260" y="25" width="32" height="26" rx="4" />
        <rect x="300" y="25" width="32" height="26" rx="4" />
        <rect x="340" y="25" width="40" height="26" rx="4" />
      </g>

      {/* Row 2 keys */}
      <g fill="#2a2d3e" stroke="#4a4d5e" strokeWidth="1">
        <rect x="20" y="60" width="40" height="26" rx="4" />
        <rect x="68" y="60" width="32" height="26" rx="4" />
        <rect x="108" y="60" width="32" height="26" rx="4" />
        <rect x="148" y="60" width="32" height="26" rx="4" />
        <rect x="188" y="60" width="32" height="26" rx="4" />
        <rect x="228" y="60" width="32" height="26" rx="4" />
        <rect x="268" y="60" width="32" height="26" rx="4" />
        <rect x="308" y="60" width="32" height="26" rx="4" />
        <rect x="348" y="60" width="32" height="26" rx="4" />
      </g>

      {/* Row 3 keys */}
      <g fill="#2a2d3e" stroke="#4a4d5e" strokeWidth="1">
        <rect x="20" y="95" width="48" height="26" rx="4" />
        <rect x="76" y="95" width="32" height="26" rx="4" />
        <rect x="116" y="95" width="32" height="26" rx="4" />
        <rect x="156" y="95" width="32" height="26" rx="4" />
        <rect x="196" y="95" width="32" height="26" rx="4" />
        <rect x="236" y="95" width="32" height="26" rx="4" />
        <rect x="276" y="95" width="32" height="26" rx="4" />
        <rect x="316" y="95" width="64" height="26" rx="4" />
      </g>

      {/* Spacebar */}
      <rect x="100" y="130" width="200" height="20" rx="10" fill="#2a2d3e" stroke="#4a4d5e" strokeWidth="1" />

      {/* Key labels */}
      <g fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="monospace">
        <text x="36" y="42">ESC</text>
        <text x="76" y="42">1</text>
        <text x="116" y="42">2</text>
        <text x="156" y="42">3</text>
        <text x="196" y="42">4</text>
        <text x="236" y="42">5</text>
        <text x="276" y="42">6</text>
        <text x="316" y="42">7</text>
        
        <text x="40" y="77">TAB</text>
        <text x="84" y="77">Q</text>
        <text x="124" y="77">W</text>
        <text x="164" y="77">E</text>
        <text x="204" y="77">R</text>
        <text x="244" y="77">T</text>
        <text x="284" y="77">Y</text>
        <text x="324" y="77">U</text>
        
        <text x="44" y="112">CAPS</text>
        <text x="92" y="112">A</text>
        <text x="132" y="112">S</text>
        <text x="172" y="112">D</text>
        <text x="212" y="112">F</text>
        <text x="252" y="112">G</text>
        <text x="292" y="112">H</text>
        
        <text x="200" y="145">SPACE</text>
      </g>
    </svg>
  );
};

export default Keyboard;
