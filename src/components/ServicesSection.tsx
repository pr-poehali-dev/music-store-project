import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">
            Полный цикл музыкального производства
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mixing Section */}
          <Card
            id="mixing"
            className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100"
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-xl flex items-center justify-center">
                  <Icon name="Sliders" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Сведение</h3>
                  <p className="text-gray-600">Профессиональная обработка</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#FF6B35]"
                  />
                  <span>Коррекция звучания инструментов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#FF6B35]"
                  />
                  <span>Пространственная обработка</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#FF6B35]"
                  />
                  <span>Динамическая обработка</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#FF6B35]"
                  />
                  <span>Финальная шлифовка звука</span>
                </li>
              </ul>

              <div className="bg-white rounded-xl p-4 mb-6">
                <div className="text-sm text-gray-600 mb-2">Оборудование:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm">
                    Pro Tools
                  </span>
                  <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm">
                    SSL
                  </span>
                  <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm">
                    Waves
                  </span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:opacity-90">
                Заказать сведение
              </Button>
            </CardContent>
          </Card>

          {/* Production Section */}
          <Card
            id="production"
            className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100"
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-xl flex items-center justify-center">
                  <Icon name="Music" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Продюсирование
                  </h3>
                  <p className="text-gray-600">Создание уникального звучания</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#8B5CF6]"
                  />
                  <span>Аранжировка композиций</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#8B5CF6]"
                  />
                  <span>Запись инструментов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#8B5CF6]"
                  />
                  <span>Создание битов и основ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-[#8B5CF6]"
                  />
                  <span>Полный музыкальный продакшн</span>
                </li>
              </ul>

              <div className="bg-white rounded-xl p-4 mb-6">
                <div className="text-sm text-gray-600 mb-2">Инструменты:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#8B5CF6]/10 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                    Ableton Live
                  </span>
                  <span className="bg-[#8B5CF6]/10 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                    Logic Pro
                  </span>
                  <span className="bg-[#8B5CF6]/10 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                    Kontakt
                  </span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:opacity-90">
                Заказать продюсирование
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
