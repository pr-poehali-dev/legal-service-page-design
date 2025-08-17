import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Icon name="Scale" size={16} className="mr-2" />
                  Автоюрист
                </Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                  Юрист по делам ГИБДД
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Профессиональная защита ваших прав в автомобильных спорах. 
                  Опыт работы 12+ лет, успешно решено более 3000 дел.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                  Лишение прав
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                  ДТП и страховые
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                  Штрафы ГИБДД
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="font-medium">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src="/img/c0b6269f-ccaa-48f9-8566-4cce3325bc3f.jpg" 
                    alt="Александр Петров - Автоюрист"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-display font-semibold text-lg">Александр Петров</h3>
                    <p className="text-muted-foreground">Автоюрист, к.ю.н.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-display font-bold text-primary">3000+</div>
                    <div className="text-sm text-muted-foreground">Решенных дел</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Положительных решений</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Услуги автоюриста</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг по автомобильным вопросам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="AlertTriangle" size={24} className="text-red-600" />
                </div>
                <CardTitle className="font-display">Лишение водительских прав</CardTitle>
                <CardDescription>
                  Защита при угрозе лишения прав за нарушения ПДД
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Превышение скорости
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Алкогольное опьянение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Выезд на встречную полосу
                  </li>
                </ul>
                <div className="pt-2">
                  <div className="text-2xl font-display font-bold text-primary">от 15 000 ₽</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Car" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="font-display">ДТП и страховые споры</CardTitle>
                <CardDescription>
                  Взыскание ущерба, споры со страховыми компаниями
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Взыскание ущерба с виновника
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Споры по ОСАГО/КАСКО
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Независимая экспертиза
                  </li>
                </ul>
                <div className="pt-2">
                  <div className="text-2xl font-display font-bold text-primary">от 20 000 ₽</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-orange-600" />
                </div>
                <CardTitle className="font-display">Обжалование штрафов</CardTitle>
                <CardDescription>
                  Оспаривание постановлений ГИБДД и штрафов с камер
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Штрафы с камер видеофиксации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Неправомерные постановления
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-600" />
                    Технические ошибки
                  </li>
                </ul>
                <div className="pt-2">
                  <div className="text-2xl font-display font-bold text-primary">от 5 000 ₽</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">12+ лет опыта</h3>
              <p className="text-muted-foreground">Специализируемся исключительно на автомобильном праве</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">3000+ клиентов</h3>
              <p className="text-muted-foreground">Доверили нам решение своих юридических вопросов</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">24/7 поддержка</h3>
              <p className="text-muted-foreground">Всегда на связи для решения срочных вопросов</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">Гарантия результата</h3>
              <p className="text-muted-foreground">Возврат средств при отрицательном исходе дела</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Как мы работаем</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-display font-bold text-lg">
                1
              </div>
              <h3 className="font-display font-semibold">Консультация</h3>
              <p className="text-muted-foreground text-sm">Анализируем вашу ситуацию и оцениваем перспективы</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-display font-bold text-lg">
                2
              </div>
              <h3 className="font-display font-semibold">Планирование</h3>
              <p className="text-muted-foreground text-sm">Разрабатываем стратегию защиты ваших интересов</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-display font-bold text-lg">
                3
              </div>
              <h3 className="font-display font-semibold">Реализация</h3>
              <p className="text-muted-foreground text-sm">Представляем ваши интересы в суде и ГИБДД</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-display font-bold text-lg">
                4
              </div>
              <h3 className="font-display font-semibold">Результат</h3>
              <p className="text-muted-foreground text-sm">Получаем положительное решение по вашему делу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Получить консультацию</h2>
            <p className="text-xl text-muted-foreground">
              Опишите вашу ситуацию, и мы предложим оптимальное решение
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-display">Бесплатная консультация</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (999) 999-99-99" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Опишите вашу проблему</label>
                <Textarea 
                  placeholder="Расскажите подробно о вашей ситуации..." 
                  className="min-h-24"
                />
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <input type="checkbox" className="w-4 h-4" />
                <span>Согласен на обработку персональных данных</span>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={18} className="mr-2" />
                Получить консультацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg">АвтоЮрист</h3>
              <p className="text-muted-foreground">
                Профессиональная юридическая помощь по автомобильным спорам
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={18} className="text-primary" />
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={18} className="text-primary" />
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={18} className="text-primary" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Лишение водительских прав</li>
                <li>ДТП и страховые споры</li>
                <li>Обжалование штрафов ГИБДД</li>
                <li>Автоэкспертиза</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@autolawyer.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Тверская, 1
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />
          
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 АвтоЮрист. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}