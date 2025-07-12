import Icon from "@/components/ui/icon";

const StudioSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Студийные возможности
          </h2>
          <p className="text-xl text-gray-600">
            Профессиональное оборудование мирового уровня
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Icon
                  name="Headphones"
                  size={32}
                  className="text-[#FF6B35] mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2">Мониторинг</h4>
                <p className="text-sm text-gray-600">
                  Профессиональные студийные мониторы и наушники
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Icon name="Mic" size={32} className="text-[#8B5CF6] mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Микрофоны</h4>
                <p className="text-sm text-gray-600">
                  Ламповые и конденсаторные микрофоны
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Icon
                  name="Settings"
                  size={32}
                  className="text-[#FF6B35] mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2">Обработка</h4>
                <p className="text-sm text-gray-600">
                  Аналоговые компрессоры и эквалайзеры
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Icon
                  name="Computer"
                  size={32}
                  className="text-[#8B5CF6] mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2">DAW</h4>
                <p className="text-sm text-gray-600">
                  Современные цифровые рабочие станции
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6] rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Почему выбирают нас?</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Опыт работы с топовыми артистами</li>
                <li>✓ Гарантия качества результата</li>
                <li>✓ Быстрые сроки выполнения</li>
                <li>✓ Доступные цены</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img/2ce9cec7-76cc-4ea0-ad88-2e014cf9e53e.jpg"
                alt="Музыкальное производство"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Icon
                      name="AudioWaveform"
                      size={24}
                      className="text-[#FF6B35]"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        Профессиональная студия
                      </div>
                      <div className="text-sm text-gray-600">
                        Записываем и сводим 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
