import Dock from "../components/Dock";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="hidden lg:block fixed bottom-0 left-1/2 transform -translate-x-1/2 mx-auto pb-10"> {/* only shows on Desktop */}
        <Dock />
      </div>
    </div>
  );
}

