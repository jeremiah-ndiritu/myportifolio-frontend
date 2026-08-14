import { useEffect } from "react";
import { Toaster } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";
import AIChatPanel from "./components/chat/AIChatPanel";
import ScrollToTop from "./components/ui/ScrollToTop";
import AnnouncementBar from "./components/ui/AnnouncementBar";
import { useAnnouncements } from "./hooks/queries/useAnnouncements";
import MainLayout from "./components/layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import ParticlesAnimation from "./components/ParticlesAnimation";

const App = () => {
  const { announcements, dismissAnnouncement } = useAnnouncements();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);

  const activeAnnouncement = announcements[0];

  return (
    <>
      <ScrollToTop />
      {activeAnnouncement && (
        <AnnouncementBar
          title={activeAnnouncement.title}
          description={activeAnnouncement.description}
          href={activeAnnouncement.href}
          cta={activeAnnouncement.cta}
          onDismiss={() => dismissAnnouncement(activeAnnouncement.id)}
        />
      )}
      <MainLayout>
        <ParticlesAnimation />

        <AIChatPanel />

        <AppRoutes />

        <Toaster position="top-right" richColors />
      </MainLayout>
    </>
  );
};

export default App;
