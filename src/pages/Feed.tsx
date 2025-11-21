
export default function Feed() {
  return (
    <section className="instagram-section" id="feed">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-tag section-tag-blue slide-up">Портфолио</p>
          <h2 className="slide-up-delay-1">Наши работы</h2>
        </div>
        <div className="fade-in-delay-2" style={{ maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
            Посмотри примеры наших работ в Instagram. Мы делаем татуировки в разных стилях: от минимализма до реализма, от классики до современного искусства. Каждая работа уникальна и создаётся специально для клиента.
          </p>
        </div>
        <div className="instagram-frame scale-in">
          <iframe
            src="https://www.instagram.com/murmur13tattoo/embed"
            title="Instagram Mur Mur 13"
            loading="lazy"
            allowTransparency={true}
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://www.instagram.com/murmur13tattoo/"
            target="_blank"
            rel="noreferrer"
            className="instagram-link"
          >
            Открыть профиль в Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
