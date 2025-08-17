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
      {/* Urgent Banner */}
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <Icon name="Clock" size={16} className="animate-pulse" />
          <span className="font-medium">СРОЧНО! Только 48 часов на обжалование. Действуйте сейчас!</span>
        </div>
      </div>

      {/* Hero Section - High Conversion */}
      <section className="relative bg-gradient-to-br from-primary/15 via-primary/8 to-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="destructive" className="animate-pulse">
                    🔥 ГОРЯЧАЯ ЛИНИЯ
                  </Badge>
                  <Badge variant="secondary">
                    <Icon name="Award" size={16} className="mr-2" />
                    12+ лет опыта
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                  <span className="text-red-600">СПАСЕМ</span> ваши права!
                </h1>
                
                <div className="text-xl md:text-2xl font-semibold text-foreground">
                  ✅ Лишили прав? Вернем за 30 дней или вернем деньги!
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Александр Петров</strong> - автоюрист №1 в Москве. 
                  <span className="text-green-600 font-semibold"> 95% выигранных дел</span>, 
                  более <span className="text-primary font-semibold">3000 спасенных водителей</span>.
                </p>
              </div>

              {/* Social Proof */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground">(2,847 отзывов)</span>
                </div>
                <div className="text-sm text-green-700">
                  <strong>Сегодня помогли:</strong> Михаил К. - вернул права, Анна П. - выиграла спор с ГИБДД
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button size="lg" className="w-full md:w-auto text-lg font-bold py-6 px-8 bg-red-600 hover:bg-red-700 animate-pulse">
                  <Icon name="Phone" size={20} className="mr-3" />
                  БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СЕЙЧАС
                </Button>
                <div className="text-sm text-muted-foreground">
                  📞 Отвечаем в течение 2 минут • 🕐 Работаем 24/7
                </div>
              </div>

              {/* Urgency Counter */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="text-sm font-medium text-yellow-800 mb-1">
                  ⏰ До истечения срока обжалования осталось:
                </div>
                <div className="text-2xl font-bold text-red-600">47 часов 23 минуты</div>
              </div>
            </div>

            <div className="relative">
              {/* Lawyer Card with Trust Elements */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 border-2 border-primary/20">
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ОНЛАЙН
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src="/img/c0b6269f-ccaa-48f9-8566-4cce3325bc3f.jpg" 
                    alt="Александр Петров - Автоюрист"
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h3 className="font-display font-bold text-xl">Александр Петров</h3>
                    <p className="text-muted-foreground">Автоюрист, к.ю.н.</p>
                    <div className="flex items-center mt-1">
                      <Icon name="Shield" size={16} className="text-green-600 mr-1" />
                      <span className="text-sm text-green-600 font-medium">Проверен</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-1">
                    <div className="text-3xl font-display font-bold text-green-600">95%</div>
                    <div className="text-xs text-muted-foreground">Выигранных дел</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-display font-bold text-primary">3000+</div>
                    <div className="text-xs text-muted-foreground">Спасенных прав</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Icon name="Award" size={16} className="text-yellow-500 mr-2" />
                    <span>Лучший автоюрист 2023 года</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={16} className="text-blue-500 mr-2" />
                    <span>Застрахованная ответственность</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="text-green-500 mr-2" />
                    <span>Средний срок решения: 15 дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate CTA Section */}
      <section className="py-12 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            НЕ ТЕРЯЙТЕ ВРЕМЯ! КАЖДЫЙ ЧАС НА СЧЕТУ
          </h2>
          <p className="text-xl">
            Через 48 часов будет поздно. Звоните прямо сейчас - первая консультация БЕСПЛАТНО!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg font-bold py-6 px-8">
              <Icon name="Phone" size={20} className="mr-3" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-bold py-6 px-8 border-white text-white hover:bg-white hover:text-red-600">
              <Icon name="MessageCircle" size={20} className="mr-3" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-red-600">
              ГРОЗИТ ЛИШЕНИЕ ПРАВ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы решаем самые сложные дела за 15-30 дней
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200 hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-red-600" />
                </div>
                <CardTitle className="font-display text-red-600">Превышение скорости</CardTitle>
                <div className="text-3xl font-bold text-green-600">98% побед</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Оспариваем радары и камеры
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Находим технические ошибки
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Доказываем нарушения процедуры
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">Стоимость защиты:</div>
                  <div className="text-2xl font-bold text-primary">от 15 000 ₽</div>
                  <div className="text-sm text-green-600">💰 Возврат 100% при проигрыше</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wine" size={32} className="text-orange-600" />
                </div>
                <CardTitle className="font-display text-orange-600">Алкогольное опьянение</CardTitle>
                <div className="text-3xl font-bold text-green-600">92% побед</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Независимая экспертиза
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Нарушения при освидетельствовании
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Неисправность алкотестера
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">Стоимость защиты:</div>
                  <div className="text-2xl font-bold text-primary">от 25 000 ₽</div>
                  <div className="text-sm text-green-600">💰 Возврат 100% при проигрыше</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ArrowLeftRight" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="font-display text-blue-600">Встречная полоса</CardTitle>
                <div className="text-3xl font-bold text-green-600">89% побед</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Анализ дорожной разметки
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Проверка знаков и светофоров
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                    Восстановление видеозаписи
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">Стоимость защиты:</div>
                  <div className="text-2xl font-bold text-primary">от 20 000 ₽</div>
                  <div className="text-sm text-green-600">💰 Возврат 100% при проигрыше</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Реальные отзывы спасенных водителей
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <h4 className="font-semibold">Михаил К.</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  "Лишали прав за превышение на 60 км/ч. Александр нашел ошибки в протоколе и 
                  <strong className="text-green-600"> вернул права за 20 дней!</strong> Рекомендую всем!"
                </p>
                <div className="text-xs text-muted-foreground mt-2">2 дня назад</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <h4 className="font-semibold">Анна П.</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  "Спасибо огромное! Дело казалось безнадежным, но 
                  <strong className="text-blue-600"> Александр добился полной отмены постановления.</strong> 
                  Профессионал высшего класса!"
                </p>
                <div className="text-xs text-muted-foreground mt-2">5 дней назад</div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    Д
                  </div>
                  <div>
                    <h4 className="font-semibold">Дмитрий С.</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  "Грозило лишение на 1.5 года за алкоголь. 
                  <strong className="text-purple-600"> Александр доказал неисправность прибора</strong> 
                  и дело закрыли. Спас мою карьеру!"
                </p>
                <div className="text-xs text-muted-foreground mt-2">1 неделю назад</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* High-Conversion Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              ПОЛУЧИТЕ ПЛАН СПАСЕНИЯ ПРАВ БЕСПЛАТНО
            </h2>
            <p className="text-xl">
              Опишите ситуацию - узнайте шансы на победу за 5 минут
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-red-500/30 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-3">🎁 Получите БЕСПЛАТНО:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-300" />
                    Анализ ваших шансов на победу
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-300" />
                    План действий по спасению прав
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-300" />
                    Список необходимых документов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-green-300" />
                    Юридическую поддержку 24/7
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold">⏰ 47:23</div>
                <div className="text-sm">до истечения срока</div>
              </div>
            </div>

            <Card className="bg-white text-foreground">
              <CardHeader>
                <CardTitle className="font-display text-center">
                  🔥 СРОЧНАЯ КОНСУЛЬТАЦИЯ
                </CardTitle>
                <CardDescription className="text-center">
                  Ответим в течение 2 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя *</label>
                  <Input placeholder="Как к вам обращаться?" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон *</label>
                  <Input placeholder="+7 (999) 999-99-99" className="border-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">За что грозит лишение? *</label>
                  <Textarea 
                    placeholder="Опишите ситуацию: превышение скорости, алкоголь, встречка и т.д." 
                    className="min-h-20 border-2"
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-lg font-bold py-6">
                  <Icon name="Shield" size={18} className="mr-2" />
                  СПАСТИ МОИ ПРАВА СЕЙЧАС!
                </Button>
                <div className="text-xs text-center text-muted-foreground">
                  ✅ Данные защищены • 🔒 Конфиденциальность гарантирована
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with Trust Elements */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl">АвтоЮрист #1</h3>
              <p className="text-gray-300 text-sm">
                Спасаем права водителей с 2012 года. 
                Лицензия №123456 от 01.01.2012
              </p>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-400" />
                <span className="text-sm">Лицензированная деятельность</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Гарантии</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Возврат денег при проигрыше</li>
                <li>✅ Страхование ответственности</li>
                <li>✅ Работаем по договору</li>
                <li>✅ Официальные документы</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2 text-green-400" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" size={16} className="mr-2 text-green-400" />
                  WhatsApp: +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2 text-green-400" />
                  Работаем 24/7
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Награды</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <Icon name="Award" size={16} className="mr-2 text-yellow-400" />
                  Лучший автоюрист 2023
                </div>
                <div className="flex items-center">
                  <Icon name="Star" size={16} className="mr-2 text-yellow-400" />
                  4.9/5 рейтинг клиентов
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={16} className="mr-2 text-blue-400" />
                  3000+ спасенных прав
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 АвтоЮрист. Все права защищены. ИП Петров А.В. ОГРНИП 123456789012345</p>
          </div>
        </div>
      </footer>
    </div>
  )
}