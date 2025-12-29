import Hero from "@/components/Hero";
import HomeCourses from "@/components/HomeCourses";
import HomeLiveTraining from "@/components/HomeLiveTraining";
import WhyAICybersecurityImportant from "@/components/WhyAICybersecurityImportant";
import MarketTrends from "@/components/MarketTrends";
import NewsletterSubscription from "@/components/NewsletterSubscription";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAICybersecurityImportant />
      <MarketTrends />
      <HomeCourses />
      <HomeLiveTraining />
      {/* <NewsletterSubscription /> */}
    </main>
  );
}