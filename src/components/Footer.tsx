import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="AudioWaveform" size={28} className="text-[#FF6B35]" />
              <span className="text-xl font-bold">SoundLab</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональная музыкальная студия полного цикла
            </p>
            <div className="flex gap-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                <Icon name="Youtube" size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#mixing"
                  className="hover:text-white transition-colors"
                >
                  Сведение треков
                </a>
              </li>
              <li>
                <a
                  href="#production"
                  className="hover:text-white transition-colors"
                >
                  Продюсирование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мастеринг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Запись вокала
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>hello@soundlab.studio</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Работаем 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SoundLab. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
