import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const products = [
    {
      id: 1,
      name: "Вязаный свитер 'Уют'",
      price: 2490,
      image: "/img/5c1b6924-fb18-4442-8199-8f9ac5baff71.jpg",
      category: "Свитера",
      discount: 20
    },
    {
      id: 2,
      name: "Худи 'Модник'",
      price: 3290,
      image: "/img/a3e45b61-e457-4b83-a717-f812fb32c939.jpg",
      category: "Толстовки"
    },
    {
      id: 3,
      name: "Дождевик 'Прогулка'",
      price: 1990,
      image: "/img/5a9ede5d-37c0-4e85-883a-7b44d8a5f999.jpg",
      category: "Верхняя одежда",
      discount: 15
    },
    {
      id: 4,
      name: "Носочки 'Лапка'",
      price: 690,
      image: "/img/0be561c0-7ec6-4062-a466-48d1080ae94f.jpg",
      category: "Аксессуары",
      discount: 10
    },
    {
      id: 5,
      name: "Шапочка 'Ушки'",
      price: 1290,
      image: "/img/3045a0d6-62fa-4fc7-82b8-9626d2b80e7b.jpg",
      category: "Головные уборы"
    },
    {
      id: 6,
      name: "Костюм 'Супергерой'",
      price: 3990,
      image: "/img/9e597da5-01c9-4323-94d5-5c9d238c29f8.jpg",
      category: "Карнавальная одежда",
      discount: 25
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">🐾 Животный ритм</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: "home", label: "Главная" },
                { id: "catalog", label: "Каталог" },
                { id: "about", label: "О бренде" },
                { id: "delivery", label: "Доставка" },
                { id: "promo", label: "Акции" },
                { id: "gallery", label: "Фото и видео" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all hover:text-primary ${
                    activeSection === item.id ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="decorative-corner decorative-corner-tl"></div>
        <div className="decorative-corner decorative-corner-tr"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="text-lg px-4 py-2 bg-accent text-accent-foreground">
                🎉 Новая коллекция осень 2025
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Стиль и комфорт для ваших любимцев
              </h2>
              <p className="text-xl text-muted-foreground">
                Эксклюзивная одежда для собак и кошек, созданная с любовью и заботой о комфорте
                вашего питомца
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection("catalog")}>
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  О нас
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/8e5e548a-63ae-406a-aa16-6e62f11ed479.png"
                alt="Животный ритм"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="decorative-corner decorative-corner-bl"></div>
        <div className="decorative-corner decorative-corner-br"></div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Наш каталог</h2>
            <p className="text-xl text-muted-foreground">
              Подберите идеальный наряд для вашего питомца
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="relative overflow-hidden hover:shadow-xl transition-all group">
                <div className="decorative-corner decorative-corner-tl"></div>
                <div className="decorative-corner decorative-corner-br"></div>
                {product.discount && (
                  <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground">
                    -{product.discount}%
                  </Badge>
                )}
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <Badge variant="outline">{product.category}</Badge>
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.discount ? (
                          <>
                            <span className="text-2xl font-bold text-primary">
                              {product.price - (product.price * product.discount) / 100} ₽
                            </span>
                            <span className="ml-2 text-lg line-through text-muted-foreground">
                              {product.price} ₽
                            </span>
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        )}
                      </div>
                      <Button>
                        <Icon name="ShoppingCart" size={20} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 relative">
        <div className="decorative-corner decorative-corner-tl"></div>
        <div className="decorative-corner decorative-corner-br"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">О бренде</h2>
            <p className="text-xl leading-relaxed">
              <strong>Животный ритм</strong> — это российский бренд одежды для домашних питомцев,
              созданный с любовью к животным в 2020 году. Мы верим, что каждый питомец заслуживает
              не только комфорта, но и стиля.
            </p>
            <p className="text-xl leading-relaxed">
              Наша миссия — создавать качественную, удобную и стильную одежду, которая подчеркнет
              индивидуальность вашего любимца и защитит его в любую погоду. Мы используем только
              натуральные гипоаллергенные материалы и тщательно продумываем каждую деталь.
            </p>
            
            <Card className="mt-8 bg-gradient-to-br from-accent/20 to-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Store" size={48} className="text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-4">Наш шоурум в Москве</h3>
                    <p className="text-xl mb-3">
                      <strong>📍 Москва, ул. Пырьева, 2</strong>
                    </p>
                    <p className="text-lg text-muted-foreground mb-4">
                      Удобная транспортная доступность от станций метро:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Icon name="Train" size={20} className="text-primary" />
                        <span>Поклонная — 16-20 мин</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Train" size={20} className="text-primary" />
                        <span>Минская — 21-30 мин</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Train" size={20} className="text-primary" />
                        <span>Ломоносовский пр-т — 21-30 мин</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-lg">
                      <p>
                        <strong>Экстерьер:</strong> Уютное здание с витриной в теплых бежевых тонах и винтажными элементами декора. 
                        Большие окна позволяют увидеть коллекцию ещё с улицы, а вывеска с логотипом в виде лапки сразу привлекает внимание.
                      </p>
                      <p>
                        <strong>Интерьер:</strong> Тёплая домашняя атмосфера с деревянными стеллажами, мягким освещением и удобными зонами 
                        для примерки. Есть игровая зона для питомцев, чтобы они чувствовали себя комфортно во время подбора одежды. 
                        Стены украшены фотографиями счастливых клиентов — наших пушистых моделей!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2">Премиум качество</h3>
                <p className="text-muted-foreground">
                  Только лучшие материалы для вашего питомца
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-2">Уникальный дизайн</h3>
                <p className="text-muted-foreground">Собственная коллекция каждый сезон</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-2">С любовью</h3>
                <p className="text-muted-foreground">Каждое изделие создано с заботой</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Доставка</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Icon name="Truck" size={40} className="text-primary" />
                  <h3 className="text-2xl font-bold">По России</h3>
                  <p className="text-muted-foreground">
                    Доставка СДЭК и Почта России. Срок доставки 3-7 дней.
                  </p>
                  <p className="font-semibold">Бесплатно от 3000 ₽</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Icon name="MapPin" size={40} className="text-primary" />
                  <h3 className="text-2xl font-bold">Москва и МО</h3>
                  <p className="text-muted-foreground">
                    Курьерская доставка в день заказа или на следующий день.
                  </p>
                  <p className="font-semibold">От 300 ₽</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="promo" className="py-20 relative">
        <div className="decorative-corner decorative-corner-tl"></div>
        <div className="decorative-corner decorative-corner-br"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Акции</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-accent to-secondary">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Скидка 20%</h3>
                <p className="text-xl mb-6">На всю коллекцию свитеров при покупке от 2-х штук</p>
                <Button size="lg" variant="secondary">
                  Выбрать свитера
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Бесплатная доставка</h3>
                <p className="text-xl mb-6">При заказе от 3000 ₽ по всей России</p>
                <Button size="lg" variant="secondary">
                  В каталог
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Фото и видео</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="aspect-square overflow-hidden rounded-2xl relative group cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <Icon
                    name="Play"
                    size={48}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold mb-4">🐾 Животный ритм</h3>
              <p className="opacity-90">Стильная одежда для ваших питомцев с 2020 года</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p>📧 info@animalrhythm.ru</p>
                <p>📱 +1(234)567-89-00</p>
                <p>⏰ Пн-Вс: 10:00 - 20:00</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="icon" variant="secondary">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon name="Send" size={24} />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon name="Facebook" size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center opacity-75">
            <p>© 2025 Животный ритм. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;