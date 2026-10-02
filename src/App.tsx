import { useEffect } from 'react';
import { PhoneFrame } from './components/layout/PhoneFrame';
import { Toast } from './components/ui/Toast';
import { AppProvider, useApp } from './context/AppContext';
import { GameScreen } from './screens/GameScreen/GameScreen';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { RewardsScreen } from './screens/RewardsScreen/RewardsScreen';

/** Top-edge color per screen; drives the iOS status bar / browser chrome tint. */
const THEME_COLORS = {
  home: '#f4562f',
  game: '#fdf0e6',
  rewards: '#fdf0e6',
} as const;

function Shell() {
  const { screen, toast } = useApp();

  useEffect(() => {
    document.documentElement.dataset.screen = screen;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[screen]);
  }, [screen]);

  return (
    <PhoneFrame tone={screen === 'home' ? 'light' : 'dark'}>
      {screen === 'home' && <HomeScreen />}
      {screen === 'game' && <GameScreen />}
      {screen === 'rewards' && <RewardsScreen />}
      <Toast message={toast} />
    </PhoneFrame>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
