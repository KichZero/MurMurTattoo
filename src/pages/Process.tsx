import { useLanguage } from "../contexts/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const processSteps = [
    {
      label: t("process.steps.consultation.label"),
      items: t("process.steps.consultation.items") as string[],
    },
    {
      label: t("process.steps.process.label"),
      items: t("process.steps.process.items") as string[],
    },
    {
      label: t("process.steps.aftercare.label"),
      items: t("process.steps.aftercare.items") as string[],
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-tag slide-up">{t("process.tag")}</p>
          <h2 className="slide-up-delay-1">{t("process.title")}</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.label} className="process-card">
              <h3>{step.label}</h3>
              <ul>
                {step.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
