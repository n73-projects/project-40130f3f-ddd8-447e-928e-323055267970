import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Building, Users, Award, BookOpen, Star, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-400">Help Fadu</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#courses" className="text-gray-600 dark:text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 transition-colors">Cursos</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 transition-colors">Nosotros</a>
            <a href="#testimonials" className="text-gray-600 dark:text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 transition-colors">Testimonios</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 transition-colors">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800">
            🎓 Nuevos cursos disponibles
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Domina la <span className="text-blue-600 dark:text-blue-400 dark:text-blue-400">Arquitectura</span>
            <br />con Help Fadu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Aprende de los mejores profesionales y desarrolla las habilidades necesarias 
            para destacar en el mundo de la arquitectura moderna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-lg px-8 py-6">
              Explorar Cursos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              Ver Demo Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Estudiantes Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Cursos Especializados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Tasa de Satisfacción</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-blue-100">Proyectos Completados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cursos Destacados
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
              Desde los fundamentos hasta las técnicas más avanzadas, 
              nuestros cursos están diseñados para tu crecimiento profesional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-400 dark:text-blue-400 mb-4" />
                  <Badge className="bg-green-100 text-green-800">Bestseller</Badge>
                </div>
                <CardTitle className="text-xl dark:text-white">Diseño Arquitectónico Básico</CardTitle>
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
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">(4.8)</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$299</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <li>• 20 horas de contenido</li>
                  <li>• Certificado de finalización</li>
                  <li>• Acceso de por vida</li>
                  <li>• Soporte 24/7</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Building className="h-10 w-10 text-blue-600 dark:text-blue-400 dark:text-blue-400 mb-4" />
                  <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
                </div>
                <CardTitle className="text-xl dark:text-white">BIM y Modelado 3D</CardTitle>
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
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">(4.9)</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$499</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <li>• 35 horas de contenido</li>
                  <li>• Proyectos prácticos</li>
                  <li>• Software incluido</li>
                  <li>• Mentorías grupales</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Award className="h-10 w-10 text-blue-600 dark:text-blue-400 dark:text-blue-400 mb-4" />
                  <Badge className="bg-purple-100 text-purple-800">Avanzado</Badge>
                </div>
                <CardTitle className="text-xl dark:text-white">Arquitectura Sostenible</CardTitle>
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
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">(4.7)</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$699</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <li>• 40 horas de contenido</li>
                  <li>• Casos reales de estudio</li>
                  <li>• Certificación LEED</li>
                  <li>• Red profesional</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ¿Por qué elegir Help Fadu?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Somos la plataforma líder en educación arquitectónica online, 
                con más de 5 años formando a los mejores profesionales del sector.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Instructores Expertos</h4>
                    <p className="text-gray-600 dark:text-gray-300">Aprende de arquitectos reconocidos con años de experiencia práctica.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contenido Actualizado</h4>
                    <p className="text-gray-600 dark:text-gray-300">Cursos constantemente actualizados con las últimas tendencias y tecnologías.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Certificaciones Reconocidas</h4>
                    <p className="text-gray-600 dark:text-gray-300">Obtén certificados válidos y reconocidos por la industria arquitectónica.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Comienza tu carrera hoy</h4>
              <p className="mb-8">
                Únete a nuestra comunidad de estudiantes y transforma tu futuro profesional.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Elige tu curso ideal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Aprende a tu ritmo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Obtén tu certificación</span>
                </div>
              </div>
              <Button className="w-full mt-8 bg-white text-blue-600 dark:text-blue-400 hover:bg-gray-100">
                Empezar Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Lo que dicen nuestros estudiantes
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Miles de arquitectos han transformado su carrera con Help Fadu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "Help Fadu cambió completamente mi perspectiva sobre el diseño arquitectónico. 
                  Los cursos son increíblemente detallados y prácticos."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">MA</span>
                  </div>
                  <div>
                    <div className="font-semibold">María Alejandra</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Arquitecta Senior</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "La calidad de la enseñanza es excepcional. Pude aplicar inmediatamente 
                  lo aprendido en mis proyectos profesionales."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">CR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Carlos Rodríguez</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Diseñador Arquitectónico</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "Recomiendo Help Fadu a todos mis colegas. Es la mejor inversión 
                  que he hecho para mi desarrollo profesional."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">LS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Laura Sánchez</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Arquitecta Independiente</div>
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

            <Card className="border-0 shadow-lg">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre
                      </label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Apellido
                      </label>
                      <Input placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Curso de Interés
                    </label>
                    <Input placeholder="¿Qué curso te interesa?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea 
                      placeholder="Cuéntanos más sobre tus objetivos..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Building className="h-8 w-8 text-blue-400" />
                <h4 className="text-2xl font-bold">Help Fadu</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Formamos los mejores arquitectos del futuro con educación de calidad mundial.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  Instagram
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Cursos</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Diseño Básico</a></li>
                <li><a href="#" className="hover:text-white">BIM y 3D</a></li>
                <li><a href="#" className="hover:text-white">Sostenibilidad</a></li>
                <li><a href="#" className="hover:text-white">Urbanismo</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Soporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
                <li><a href="#" className="hover:text-white">Comunidad</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Empresa</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Carreras</a></li>
                <li><a href="#" className="hover:text-white">Prensa</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Help Fadu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
