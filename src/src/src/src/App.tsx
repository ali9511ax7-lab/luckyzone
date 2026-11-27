import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('ar')

  const content = {
    ar: {
      title: 'منطقتك للحظ والمرح',
      subtitle: 'العب، استمتع، واجمع النقاط الافتراضية',
      balance: 'رصيدك',
      games: 'الألعاب',
      daily: 'المكافأة اليومية',
      ranking: 'المتصدرون',
      play: 'العب الآن',
      points: 'نقطة',
    },
    en: {
      title: 'Your Zone of Fun',
      subtitle: 'Play, enjoy and collect virtual points',
      balance: 'Your Balance',
      games: 'Games',
      daily: 'Daily Bonus',
      ranking: 'Leaderboard',
      play: 'Play Now',
      points: 'Points',
    },
    fr: {
      title: 'Votre Zone de Fun',
      subtitle: 'Jouez et gagnez des points virtuels',
      balance: 'Votre solde',
      games: 'Jeux',
      daily: 'Bonus quotidien',
      ranking: 'Classement',
      play: 'Jouer',
      points: 'Points',
    },
  }

  const t = content[language as keyof typeof content]

  const games = [
    { name: 'Lucky Slots', emoji: '🎰', color: 'purple' },
    { name: 'Dice Master', emoji: '🎲', color: 'blue' },
    { name: 'Memory Game', emoji: '🧠', color: 'gold' },
  ]

  return (
    <main className="app" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <header className="navbar">
        <h2>🍀 LuckyZone</h2>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="ar">العربية</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </header>

      <section className="hero">
        <p>WELCOME TO LUCKYZONE</p>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <div className="balance">
          <span>🪙 {t.balance}</span>
          <strong>1,000 {t.points}</strong>
        </div>
      </section>

      <section className="games">
        <h2>{t.games}</h2>
        <div className="game-list">
          {games.map(game => (
            <article className={`game-card ${game.color}`} key={game.name}>
              <div className="game-emoji">{game.emoji}</div>
              <h3>{game.name}</h3>
              <button onClick={() => alert('Coming Soon!')}>
                {t.play}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="features">
        <div>🎁 <h3>{t.daily}</h3></div>
        <div>🏆 <h3>{t.ranking}</h3></div>
      </section>

      <footer>
        LuckyZone © 2026 — Virtual points only. No real-money gambling.
      </footer>
    </main>
  )
}

export default App
