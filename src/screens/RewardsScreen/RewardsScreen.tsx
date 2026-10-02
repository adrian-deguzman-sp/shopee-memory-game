import { Mascot } from '../../assets/art/Mascot';
import { CoinIcon } from '../../assets/icons/CardIcons';
import { SparkleIcon } from '../../assets/icons/UiIcons';
import { BagGlyph } from '../../assets/art/BagGlyph';
import { Screen } from '../../components/layout/Screen';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { StreakRow } from '../../components/rewards/StreakRow';
import { VoucherCard } from '../../components/rewards/VoucherCard';
import { Button } from '../../components/ui/Button';
import { REWARD } from '../../constants/rewards';
import { useApp } from '../../context/AppContext';
import styles from './RewardsScreen.module.css';

export function RewardsScreen() {
  const { navigate, streak, showToast } = useApp();

  return (
    <Screen className={styles.rewards}>
      <ScreenHeader tone="dark" center="Rewards" onBack={() => navigate('home')} />

      <div className={styles.scroll}>
        <div className={styles.art} aria-hidden="true">
          <span className={`${styles.spark} ${styles.s1}`}>
            <SparkleIcon size={22} />
          </span>
          <span className={`${styles.spark} ${styles.s2}`}>
            <SparkleIcon size={28} />
          </span>
          <span className={`${styles.spark} ${styles.s3}`}>
            <SparkleIcon size={18} />
          </span>
          <CoinIcon size={56} className={styles.coinBack} />
          <div className={styles.ticket}>
            <BagGlyph size={72} />
          </div>
          <CoinIcon size={64} className={styles.coinFront} />
        </div>

        <h1 className={styles.heading}>You got a reward!</h1>

        <div className={styles.voucher}>
          <VoucherCard variant="full" amount={REWARD.amount} title={REWARD.title} validUntil={REWARD.validUntil} />
        </div>

        <Button
          block
          onClick={() => showToast('Mock: this would open your voucher wallet')}
        >
          Use Voucher
        </Button>

        <section className={styles.keep}>
          <h2 className={styles.keepTitle}>Keep Playing!</h2>
          <p className={styles.keepText}>
            Play daily to collect more rewards
            <br />
            and enjoy bigger prizes!
          </p>
          <StreakRow completed={streak} />
        </section>

        <button type="button" className={styles.banner} onClick={() => navigate('home')}>
          <Mascot size={72} expression="happy" className={styles.bannerMascot} />
          <span className={styles.bannerText}>
            More games.
            <br />
            More rewards.
            <br />
            Only on Shopee!
          </span>
        </button>
      </div>
    </Screen>
  );
}
