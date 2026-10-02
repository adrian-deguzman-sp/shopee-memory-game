import { useState } from 'react';
import { GiftBox } from '../../assets/art/GiftBox';
import { Logo } from '../../assets/art/Logo';
import { Mascot } from '../../assets/art/Mascot';
import { TitleArt } from '../../assets/art/TitleArt';
import { CoinIcon } from '../../assets/icons/CardIcons';
import { BulbIcon, GamepadIcon } from '../../assets/icons/UiIcons';
import { GiftIcon } from '../../assets/icons/CardIcons';
import { Screen } from '../../components/layout/Screen';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { HelpModal } from '../../components/modals/HelpModal';
import { Button } from '../../components/ui/Button';
import { Ribbon } from '../../components/ui/Ribbon';
import { useApp } from '../../context/AppContext';
import styles from './HomeScreen.module.css';

export function HomeScreen() {
  const { navigate } = useApp();
  const [showHelp, setShowHelp] = useState(false);

  return (
    <Screen className={styles.home}>
      <div className={styles.rays} data-keep-motion aria-hidden="true" />
      <ScreenHeader tone="light" center={<Logo />} onHelp={() => setShowHelp(true)} />

      <TitleArt className={styles.title} />
      <Ribbon tone="yellow" tilt className={styles.ribbon}>
        Find the matching pairs
        <br />
        and win exciting rewards!
      </Ribbon>

      <div className={styles.stage} aria-hidden="true">
        <GiftBox size={78} color="#7BC4C4" ribbon="#FFC83D" className={styles.giftLeft} />
        <GiftBox size={64} color="#8E6BD8" ribbon="#FFC83D" className={styles.giftLeft2} />
        <GiftBox size={70} color="#4F7FD8" ribbon="#FFC83D" className={styles.giftRight} />
        <CoinIcon size={34} className={styles.coinA} />
        <CoinIcon size={26} className={styles.coinB} />
        <CoinIcon size={30} className={styles.coinC} />
        <Mascot size={190} className={styles.mascot} />
      </div>

      <ul className={styles.how}>
        <li>
          <span className={styles.ico}>
            <GamepadIcon size={28} />
          </span>
          Flip the cards
        </li>
        <li>
          <span className={styles.ico}>
            <BulbIcon size={28} />
          </span>
          Find matching pairs
        </li>
        <li>
          <span className={styles.ico}>
            <GiftIcon size={28} />
          </span>
          <span>
            Complete the game
            <br />
            and get a reward!
          </span>
        </li>
      </ul>

      <div className={styles.cta}>
        <Button variant="play" block onClick={() => navigate('game')}>
          Play Now
        </Button>
      </div>

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </Screen>
  );
}
