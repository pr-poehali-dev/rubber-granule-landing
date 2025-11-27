import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', quantity: '', message: '' });
  };

  const products = [
    {
      title: "Крошка из ореховой скорлупы",
      description: "Натуральный экологичный материал премиум-класса",
      image: "https://cdn.poehali.dev/projects/82382b45-5902-4a5d-9ff4-9017db759178/files/c0a4efb5-b385-47fc-8d92-6809875e7fe6.jpg",
      features: ["Фракции 0.5-2 мм, 2-5 мм", "100% натуральный состав", "От 8 руб/кг"]
    },
    {
      title: "Цветная композитная крошка",
      description: "Инновационная смесь с добавлением EPDM",
      image: "https://cdn.poehali.dev/projects/82382b45-5902-4a5d-9ff4-9017db759178/files/96eedc5e-8856-4834-924b-6213aa6e63bb.jpg",
      features: ["Яркие натуральные оттенки", "Устойчивость к UV", "От 50 руб/кг"]
    },
    {
      title: "Покрытия ShellTech Pro",
      description: "Профессиональные решения на основе ореховой крошки",
      image: "https://cdn.poehali.dev/projects/82382b45-5902-4a5d-9ff4-9017db759178/files/796b4d0a-a865-4475-9f1a-f13da673b03c.jpg",
      features: ["Полный цикл от производства до монтажа", "Гарантия 7 лет", "Бесплатный расчет"]
    }
  ];

  const benefits = [
    {
      icon: "Leaf",
      title: "Эко-технологии",
      description: "100% натуральное сырье из скорлупы грецкого ореха, безопасно для природы"
    },
    {
      icon: "Zap",
      title: "Быстрая доставка",
      description: "Собственное производство и логистика, отгрузка в день заказа"
    },
    {
      icon: "Award",
      title: "Премиум качество",
      description: "Инновационное оборудование ShellTech с многоступенчатым контролем"
    },
    {
      icon: "Factory",
      title: "Полный цикл",
      description: "От переработки сырья до готовых спортивных покрытий под ключ"
    }
  ];

  const applications = [
    "Спортивные площадки и стадионы",
    "Детские игровые зоны",
    "Беговые дорожки",
    "Противоскользящие покрытия",
    "Ландшафтный дизайн",
    "Производство резиновых плиток"
  ];

  const phoneNumber = "79202957177";
  const telegramUsername = "79202957177";

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-25"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/ff85410c-dddb-48f5-8841-5821fb19ebed.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
      <div className="relative z-10">
      <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/f1e9460a-c4d0-4bcf-a108-8b07aca90125.jpg" 
              alt="ShellTech ABX Logo"
              className="h-20 w-auto transition-transform hover:scale-105"
            />
          </div>
          <div className="flex gap-3">
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
              className="gap-2"
            >
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </Button>
            <Button 
              size="sm"
              onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
              className="gap-2"
            >
              <Icon name="Send" size={16} />
              Telegram
            </Button>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
            <span className="text-foreground">ShellTech ABX</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
              технологии переработки скорлупы
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
            Производим премиальную резиновую крошку из скорлупы грецкого ореха для спортивных покрытий и ландшафтного дизайна
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2" onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="ShoppingCart" size={20} />
              Оформить заказ
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Package" size={20} />
              Посмотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 bg-background/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-4xl font-heading font-bold mb-4">Продукция ShellTech</h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-medium">
            Инновационные материалы на основе натуральной ореховой скорлупы
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in group bg-background/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 gap-2" onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="ShoppingBag" size={18} />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4">Применение технологий</h3>
            <p className="text-foreground/70 text-lg font-medium">
              Сферы использования материалов ShellTech ABX
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Icon name="CircleDot" size={20} className="text-primary flex-shrink-0" />
                <span className="font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto shadow-2xl animate-fade-in bg-background/90 backdrop-blur-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-heading font-bold">Связаться с ShellTech</CardTitle>
            <CardDescription className="text-base font-medium">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="ivan@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Объем заказа (кг)</Label>
                <Input 
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  placeholder="1000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Комментарий к заказу</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Укажите желаемую фракцию, цвет и другие детали..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full gap-2" size="lg">
                <Icon name="Send" size={20} />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-foreground/5 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/f1e9460a-c4d0-4bcf-a108-8b07aca90125.jpg" 
                  alt="ShellTech ABX Logo"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                ShellTech ABX — инновационные технологии переработки ореховой скорлупы с 2018 года
              </p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Phone" size={16} />
                  +7 (920) 295-71-77
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={16} />
                  suprug@tut.by
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Мы в соцсетях</h5>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
                >
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ShellTech ABX. Все права защищены.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;