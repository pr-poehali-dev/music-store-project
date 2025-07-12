import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="main" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Профессиональное</span>
                <br />
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6] bg-clip-text text-transparent">
                  музыкальное
                </span>
                <br />
                <span className="text-gray-900">производство</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Сведение, мастеринг и продюсирование треков любой сложности.
                Современное студийное оборудование и многолетний опыт работы.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6] hover:opacity-90 text-lg px-8"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Послушать примеры
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white text-lg px-8"
              >
                Получить консультацию
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">500+</div>
                <div className="text-sm text-gray-600">Готовых треков</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B5CF6]">8</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img/e163e64b-592a-44f5-9fd7-ec9eb264dfbf.jpg"
                alt="Профессиональная студия звукозаписи"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Студия работает</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
