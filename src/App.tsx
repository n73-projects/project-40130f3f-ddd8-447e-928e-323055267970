import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Building, Users, Award, BookOpen, Star, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Help Fadu</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#courses" className="text-muted-foreground hover:text-primary transition-colors font-medium">Cursos</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">Nosotros</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium">Testimonios</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            🎓 Nuevos cursos disponibles
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Domina la <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Arquitectura</span>
            <br />con Help Fadu
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Aprende de los mejores profesionales y desarrolla las habilidades necesarias 
            para destacar en el mundo de la arquitectura moderna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg">
              Explorar Cursos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 text-primary hover:bg-primary/5">
              Ver Demo Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-primary-foreground/80 text-sm font-medium">Estudiantes Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80 text-sm font-medium">Cursos Especializados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80 text-sm font-medium">Tasa de Satisfacción</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-primary-foreground/80 text-sm font-medium">Proyectos Completados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Cursos Destacados
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde los fundamentos hasta las técnicas más avanzadas, 
              nuestros cursos están diseñados para tu crecimiento profesional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 bg-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <Badge className="bg-green-100 text-green-800">Bestseller</Badge>
                </div>
                <CardTitle className="text-xl text-card-foreground">Diseño Arquitectónico Básico</CardTitle>
                <CardDescription>
                  Aprende los fundamentos del diseño arquitectónico desde cero
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">$299</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• 20 horas de contenido</li>
                  <li>• Certificado de finalización</li>
                  <li>• Acceso de por vida</li>
                  <li>• Soporte 24/7</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 bg-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Building className="h-10 w-10 text-primary mb-4" />
                  <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
                </div>
                <CardTitle className="text-xl text-card-foreground">BIM y Modelado 3D</CardTitle>
                <CardDescription>
                  Domina las herramientas BIM más utilizadas en la industria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">$499</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• 35 horas de contenido</li>
                  <li>• Proyectos prácticos</li>
                  <li>• Software incluido</li>
                  <li>• Mentorías grupales</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 bg-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <Badge className="bg-purple-100 text-purple-800">Avanzado</Badge>
                </div>
                <CardTitle className="text-xl text-card-foreground">Arquitectura Sostenible</CardTitle>
                <CardDescription>
                  Especialízate en diseño ecológico y construcción sostenible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.7)</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">$699</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• 40 horas de contenido</li>
                  <li>• Casos reales de estudio</li>
                  <li>• Certificación LEED</li>
                  <li>• Red profesional</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                ¿Por qué elegir Help Fadu?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Somos la plataforma líder en educación arquitectónica online, 
                con más de 5 años formando a los mejores profesionales del sector.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Instructores Expertos</h4>
                    <p className="text-muted-foreground">Aprende de arquitectos reconocidos con años de experiencia práctica.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Contenido Actualizado</h4>
                    <p className="text-muted-foreground">Cursos constantemente actualizados con las últimas tendencias y tecnologías.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Certificaciones Reconocidas</h4>
                    <p className="text-muted-foreground">Obtén certificados válidos y reconocidos por la industria arquitectónica.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground shadow-lg">
              <h4 className="text-2xl font-bold mb-6">Comienza tu carrera hoy</h4>
              <p className="mb-8">
                Únete a nuestra comunidad de estudiantes y transforma tu futuro profesional.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-foreground/20 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Elige tu curso ideal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-foreground/20 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Aprende a tu ritmo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-foreground/20 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Obtén tu certificación</span>
                </div>
              </div>
              <Button className="w-full mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
                Empezar Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Lo que dicen nuestros estudiantes
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Miles de arquitectos han transformado su carrera con Help Fadu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Help Fadu cambió completamente mi perspectiva sobre el diseño arquitectónico. 
                  Los cursos son increíblemente detallados y prácticos."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">MA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">María Alejandra</div>
                    <div className="text-sm text-muted-foreground">Arquitecta Senior</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "La calidad de la enseñanza es excepcional. Pude aplicar inmediatamente 
                  lo aprendido en mis proyectos profesionales."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">CR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Carlos Rodríguez</div>
                    <div className="text-sm text-muted-foreground">Diseñador Arquitectónico</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Recomiendo Help Fadu a todos mis colegas. Es la mejor inversión 
                  que he hecho para mi desarrollo profesional."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">LS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Laura Sánchez</div>
                    <div className="text-sm text-muted-foreground">Arquitecta Independiente</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ¿Tienes preguntas?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Nuestro equipo está aquí para ayudarte a elegir el curso perfecto 
                para tu carrera arquitectónica.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600 dark:text-gray-300">info@helpfadu.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Oficina</div>
                    <div className="text-gray-600 dark:text-gray-300">Ciudad Universitaria, Buenos Aires</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border shadow-lg bg-card">
              <CardHeader>
                <CardTitle>Solicita Información</CardTitle>
                <CardDescription>
                  Completa el formulario y te contactaremos en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre
                      </label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Apellido
                      </label>
                      <Input placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Curso de Interés
                    </label>
                    <Input placeholder="¿Qué curso te interesa?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea 
                      placeholder="Cuéntanos más sobre tus objetivos..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Building className="h-8 w-8 text-primary" />
                <h4 className="text-2xl font-bold text-foreground">Help Fadu</h4>
              </div>
              <p className="text-muted-foreground mb-6">
                Formamos los mejores arquitectos del futuro con educación de calidad mundial.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  Facebook
                </Button>
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  Instagram
                </Button>
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Cursos</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Diseño Básico</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">BIM y 3D</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sostenibilidad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Urbanismo</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Soporte</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Comunidad</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Empresa</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Prensa</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Help Fadu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
