import { PhoneFrame } from './components/layout/PhoneFrame';
import { Toast } from './components/ui/Toast';
import { AppProvider, useApp } from './context/AppContext';
import { GameScreen } from './screens/GameScreen/GameScreen';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { RewardsScreen } from './screens/RewardsScreen/RewardsScreen';

function Shell() {
  const { screen, toast } = useApp();

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
