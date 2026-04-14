import { siteContent } from '../data/siteContent';

const LandingPage = () => {
  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <h1>{siteContent.landing.title}</h1>
          <p>{siteContent.landing.subtitle}</p>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;