import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="AudioWaveform" size={32} className="text-[#FF6B35]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6] bg-clip-text text-transparent">
              SoundLab
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#main"
              className="font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
            >
              Главная
            </a>
            <a
              href="#mixing"
              className="font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
            >
              Сведение
            </a>
            <a
              href="#production"
              className="font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
            >
              Продюсирование
            </a>
            <Button className="bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6] hover:opacity-90">
              Связаться
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
