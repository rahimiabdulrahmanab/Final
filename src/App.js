import Header from "./Header";
import Intro from "./Intro";
import MidSection from "./MidSection";
import BottomSection from "./BottomSection";

export default function App() {
  return (
    <div>
      {/* Top part of the page */}
      <Header />
      <Intro />

      {/* Main middle section (filters + list + map) */}
      <MidSection />

      {/* Bottom summary + footer */}
      <BottomSection />
    </div>
  );
}
