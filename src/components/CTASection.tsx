import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Готовы создать свой хит?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Свяжитесь с нами и получите профессиональную консультацию бесплатно
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-[#FF6B35] hover:bg-gray-100 text-lg px-8"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Позвонить сейчас
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] text-lg px-8"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
