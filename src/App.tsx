// ============================================================
// App.tsx
// Root component — acts as the desktop OS shell.
//
// This file is intentionally kept lean:
//   - Login guard
//   - One <Window> per registered app
//   - Taskbar + StartMenu drawn on top
//
// To add a new app:
//   1. Add its window metadata to config/apps.config.ts
//   2. Create a component in components/apps/
//   3. Add a <Window id="..."> entry below
// ============================================================

import React from 'react';
import { useStore } from './store/useStore';

// OS layer components
import { Desktop }     from './components/os/Desktop';
import { Window }      from './components/os/Window';
import { Taskbar }     from './components/os/Taskbar';
import { StartMenu }   from './components/os/StartMenu';
import { LoginScreen } from './components/os/LoginScreen';

// App components
import { PortfolioBrowser } from './components/apps/PortfolioBrowser';
import { Notepad }          from './components/apps/Notepad';
import { MyComputer }       from './components/apps/MyComputer';
import { Resume }           from './components/apps/Resume';
import { MediaPlayer }      from './components/apps/MediaPlayer';
import { Paint }            from './components/apps/Paint';
import { Calculator }       from './components/apps/Calculator';

const App: React.FC = () => {
  const isLoggedIn      = useStore((s) => s.isLoggedIn);
  const closeStartMenu  = useStore((s) => s.closeStartMenu);

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <main
      className="bliss-bg h-screen w-full flex flex-col overflow-hidden relative font-body text-on-surface"
      onClick={closeStartMenu}
    >
      {/* Desktop icons + right-click context menu */}
      <Desktop />

      {/* ── App Windows ─────────────────────────────────────── */}

      <Window id="portfolio"    defaultWidth={1000} defaultHeight={700} defaultX={90}  defaultY={30}>
        <PortfolioBrowser />
      </Window>

      <Window id="notepad"      defaultWidth={560}  defaultHeight={460} defaultX={320} defaultY={120}>
        <Notepad />
      </Window>

      <Window id="computer"     defaultWidth={640}  defaultHeight={450} defaultX={160} defaultY={90}>
        <MyComputer />
      </Window>

      <Window id="resume"       defaultWidth={560}  defaultHeight={660} defaultX={260} defaultY={60}>
        <Resume />
      </Window>

      <Window id="media_player" defaultWidth={480}  defaultHeight={540} defaultX={500} defaultY={80}>
        <MediaPlayer />
      </Window>

      <Window id="paint"        defaultWidth={680}  defaultHeight={520} defaultX={200} defaultY={60}>
        <Paint />
      </Window>

      <Window id="calculator"   defaultWidth={280}  defaultHeight={400} defaultX={700} defaultY={120}>
        <Calculator />
      </Window>

      {/* ── OS Chrome (always on top) ────────────────────────── */}
      <StartMenu />
      <Taskbar />
    </main>
  );
};

export default App;
