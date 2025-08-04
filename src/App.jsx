import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Globe,
  ChevronDown,
  Menu,
  X,
  Brain,
  Users,
  BarChart3,
  Lightbulb,
  Award,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import './App.css'

// Import images
import profileImage from './assets/SeqUusKJ7ZFm.webp'
import researchImage1 from './assets/JMoQs1uoWJDw.png'
import researchImage2 from './assets/uLZp5ghYuyuX.jpg'
import researchImage3 from './assets/hm6MM55tlUzI.jpg'
import marketingImage from './assets/6SV1WlkKCugR.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { id: 'home', label: 'Inicio', icon: User },
    { id: 'about', label: 'Sobre Mí', icon: User },
    { id: 'research', label: 'Investigación', icon: Brain },
    { id: 'publications', label: 'Publicaciones', icon: BookOpen },
    { id: 'teaching', label: 'Docencia', icon: GraduationCap },
    { id: 'experience', label: 'Experiencia', icon: Briefcase },
    { id: 'contact', label: 'Contacto', icon: Mail }
  ]

  const researchAreas = [
    {
      title: "Inteligencia Artificial en Marketing",
      description: "Implementación de chatbots, análisis predictivo y NLP en estrategias de marca",
      icon: Brain,
      image: researchImage1,
      topics: ["Chatbots de Marca", "Machine Learning", "NLP", "Experiencia del Cliente"]
    },
    {
      title: "Comportamiento del Consumidor",
      description: "Estudios sobre experiencia del cliente y psicología del consumidor",
      icon: Users,
      image: researchImage2,
      topics: ["Customer Experience", "Antropomorfismo", "Toma de Decisiones", "Psicología del Consumidor"]
    },
    {
      title: "Estudios Interculturales",
      description: "Análisis comparativo de valores culturales en América del Sur",
      icon: Globe,
      image: researchImage3,
      topics: ["Valores Culturales", "América del Sur", "Análisis Transcultural", "CVSCALE"]
    },
    {
      title: "Business Intelligence",
      description: "Análisis multivariado y técnicas de machine learning para insights de negocio",
      icon: BarChart3,
      image: marketingImage,
      topics: ["Análisis Multivariado", "Visualización", "KPIs", "Dashboards"]
    }
  ]

  const publications = [
    {
      year: 2025,
      title: "Decoding cultural dynamics in South America: Cultural values scale analysis",
      journal: "ReMark: Revista Brasileira de Marketing",
      authors: "Rojas-Contreras, C., Duque-Oliva, E. J., França da Cunha, C., & Borges, M. de L.",
      status: "Aceptado para publicación",
      type: "journal"
    },
    {
      year: 2023,
      title: "Toward a Theoretical Model of Branded Chatbot Adoption, a Bibliometric and Machine Learning Perspective",
      journal: "Optimistic Marketing in Challenging Times",
      authors: "Contreras, C. R., & Valette-Florence, P.",
      type: "book-chapter"
    },
    {
      year: 2023,
      title: "The new muses of sustainable luxury: What effects do influencers have on the charisma of luxury brands?",
      journal: "47th Academy of Marketing Conference",
      authors: "Lahbib, O., Rojas-Contreras, C., Kessous, A., & Valette-Florence, P.",
      type: "conference"
    },
    {
      year: 2021,
      title: "Brands and chatbots: An overview using machine learning",
      journal: "Society for Marketing Advances Annual Conference",
      authors: "Contreras, C. R., & Valette-Florence, P.",
      type: "conference"
    },
    {
      year: 2019,
      title: "Discovering emerging research topics for brand personality: A bibliometric analysis",
      journal: "Australasian Marketing Journal",
      authors: "Lara-Rodríguez, J. S., Rojas-Contreras, C., & Duque-Oliva, E. J.",
      citations: 56,
      type: "journal"
    }
  ]

  const experience = [
    {
      period: "2025 - Presente",
      position: "Profesor Asistente de Marketing",
      company: "Universidad de los Andes",
      location: "Bogotá, Colombia",
      description: "Investigación en marketing digital, IA y comportamiento del consumidor. Docencia en programas de pregrado y posgrado."
    },
    {
      period: "2023 - 2024",
      position: "Profesor Adjunto",
      company: "Universidad Nacional de Colombia",
      location: "Bogotá, Colombia",
      description: "Cursos: Métodos Cuantitativos, Comportamiento del Consumidor, Gestión de Marca, Marketing Estratégico."
    },
    {
      period: "2019 - 2023",
      position: "Investigador Doctoral",
      company: "Université Grenoble Alpes",
      location: "Grenoble, Francia",
      description: "Investigación en marketing digital y comportamiento del consumidor. Colaboración en proyectos internacionales."
    },
    {
      period: "2015 - 2020",
      position: "Data Scientist y Desarrollador Web",
      company: "Pocket Result",
      location: "París, Francia",
      description: "Desarrollo de soluciones de business intelligence e implementación de algoritmos de machine learning."
    }
  ]

  const education = [
    {
      period: "2019 - 2023",
      degree: "PhD in Marketing and Management Sciences",
      institution: "Université Grenoble Alpes",
      location: "Grenoble, Francia",
      specialization: "Grenoble IAE INP, CERAG"
    },
    {
      period: "2014 - 2018",
      degree: "Master of Science in Management",
      institution: "Universidad Nacional de Colombia",
      location: "Bogotá, Colombia"
    },
    {
      period: "2014 - 2015",
      degree: "Master in Marketing and Consumption",
      institution: "Université de Rouen Normandie",
      location: "Rouen, Francia"
    },
    {
      period: "2012",
      degree: "Bachelor in Political Science",
      institution: "Universidad de los Andes",
      location: "Bogotá, Colombia"
    }
  ]

  const skills = [
    { category: "Metodologías", items: ["Machine Learning", "Análisis Multivariado", "NLP", "Análisis Bibliométrico"] },
    { category: "Herramientas", items: ["Python", "R", "SPSS", "Tableau", "Power BI"] },
    { category: "Especialización", items: ["Marketing Digital", "Customer Experience", "Brand Management", "Cross-Cultural Research"] }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="text-2xl font-bold text-blue-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Camilo Rojas Contreras
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-100' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-2 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left hover:bg-gray-100"
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Marketing Researcher &{' '}
                <span className="text-blue-600">AI Expert</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PhD en Marketing por la Université Grenoble Alpes. Especialista en inteligencia artificial, 
                comportamiento del consumidor y estudios interculturales. Profesor en la Universidad de los Andes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Mail className="mr-2" size={20} />
                  Contactar
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Download className="mr-2" size={20} />
                  Descargar CV
                </Button>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="https://orcid.org/0000-0002-2729-1560" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <ExternalLink size={20} className="text-gray-600" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Linkedin size={20} className="text-blue-600" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Github size={20} className="text-gray-800" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <img 
                  src={profileImage} 
                  alt="Camilo Rojas Contreras" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Áreas de Investigación</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mi trabajo se centra en la intersección entre tecnología, marketing y comportamiento humano, 
              con un enfoque particular en aplicaciones de inteligencia artificial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <area.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {area.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-sm">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Mí</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Soy un investigador apasionado por entender cómo la tecnología transforma las relaciones 
                  entre marcas y consumidores. Con un PhD en Marketing por la Université Grenoble Alpes, 
                  mi trabajo se centra en la aplicación de inteligencia artificial en estrategias de marketing.
                </p>
                <p>
                  Mi experiencia internacional incluye trabajo en Francia como Data Scientist y desarrollador web, 
                  lo que me ha permitido combinar la perspectiva académica con aplicaciones prácticas en el mundo empresarial.
                </p>
                <p>
                  Actualmente, como Profesor Asistente en la Universidad de los Andes, dirijo investigaciones 
                  sobre chatbots de marca, estudios interculturales en América del Sur, y el impacto de la IA 
                  en el comportamiento del consumidor.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2" size={24} />
                    Formación Académica
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <div className="text-sm text-gray-500">{edu.period}</div>
                      <div className="font-semibold text-gray-900">{edu.degree}</div>
                      <div className="text-gray-600">{edu.institution}</div>
                      <div className="text-sm text-gray-500">{edu.location}</div>
                      {edu.specialization && (
                        <div className="text-sm text-blue-600">{edu.specialization}</div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2" size={24} />
                    Habilidades Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="font-semibold text-gray-900 mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Publicaciones</h2>
            <p className="text-xl text-gray-600">
              Contribuciones académicas en revistas indexadas, conferencias internacionales y capítulos de libro
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant={pub.type === 'journal' ? 'default' : pub.type === 'conference' ? 'secondary' : 'outline'}>
                            {pub.type === 'journal' ? 'Revista' : pub.type === 'conference' ? 'Conferencia' : 'Capítulo'}
                          </Badge>
                          <span className="text-sm text-gray-500">{pub.year}</span>
                          {pub.citations && (
                            <Badge variant="outline" className="text-xs">
                              {pub.citations} citas
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                        <p className="text-gray-600 mb-2">{pub.authors}</p>
                        <p className="text-blue-600 font-medium">{pub.journal}</p>
                        {pub.status && (
                          <p className="text-sm text-green-600 mt-1">{pub.status}</p>
                        )}
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <Card className="inline-block">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">81</div>
                    <div className="text-sm text-gray-600">Citas Totales</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">7</div>
                    <div className="text-sm text-gray-600">Publicaciones</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">4</div>
                    <div className="text-sm text-gray-600">Países</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiencia Profesional</h2>
            <p className="text-xl text-gray-600">
              Trayectoria académica y profesional en marketing, investigación y análisis de datos
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="ml-16 flex-1">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                            <p className="text-blue-600 font-medium">{exp.company}</p>
                            <p className="text-sm text-gray-500 flex items-center mt-1">
                              <MapPin size={14} className="mr-1" />
                              {exp.location}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-sm">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section id="teaching" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Docencia</h2>
            <p className="text-xl text-gray-600">
              Experiencia educativa en programas de pregrado y posgrado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2" size={24} />
                    Nivel de Posgrado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Métodos Cuantitativos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Diseño experimental, análisis estadístico y técnicas de muestreo
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Business Analytics</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Machine learning aplicado, modelos predictivos y visualización de datos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2" size={24} />
                    Nivel de Pregrado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Principios de Marketing</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Fundamentos del marketing mix y estrategias de posicionamiento
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Comportamiento del Consumidor</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Psicología del consumidor y procesos de toma de decisiones
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Business Analytics</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Introducción al análisis de datos y herramientas de visualización
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Metodología Pedagógica</CardTitle>
                <CardDescription>
                  Enfoque en aprendizaje activo y aplicación práctica de conocimientos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <Lightbulb className="mx-auto mb-2 text-blue-600" size={32} />
                    <h4 className="font-semibold">Aprendizaje Basado en Proyectos</h4>
                  </div>
                  <div className="text-center p-4">
                    <Users className="mx-auto mb-2 text-green-600" size={32} />
                    <h4 className="font-semibold">Metodologías Activas</h4>
                  </div>
                  <div className="text-center p-4">
                    <Brain className="mx-auto mb-2 text-purple-600" size={32} />
                    <h4 className="font-semibold">Tecnología Educativa</h4>
                  </div>
                  <div className="text-center p-4">
                    <BarChart3 className="mx-auto mb-2 text-orange-600" size={32} />
                    <h4 className="font-semibold">Evaluación Formativa</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-xl text-gray-300">
              Interesado en colaboraciones, consultoría o proyectos de investigación
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-medium">caa.rojasc@uniandes.edu.co</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-600 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300">Ubicación</p>
                      <p className="text-white font-medium">Universidad de los Andes</p>
                      <p className="text-gray-300">Bogotá, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600 rounded-lg">
                      <ExternalLink size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300">ORCID</p>
                      <p className="text-white font-medium">0000-0002-2729-1560</p>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="text-white font-semibold mb-4">Redes Académicas</h4>
                    <div className="flex space-x-4">
                      <a href="https://orcid.org/0000-0002-2729-1560" 
                         className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                      <a href="#" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Áreas de Colaboración</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Investigación Académica</h4>
                      <p className="text-gray-300 text-sm">
                        Colaboraciones en proyectos de IA, marketing digital y comportamiento del consumidor
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Consultoría Empresarial</h4>
                      <p className="text-gray-300 text-sm">
                        Análisis de datos, estrategias de marketing digital y implementación de chatbots
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Conferencias y Talleres</h4>
                      <p className="text-gray-300 text-sm">
                        Presentaciones sobre IA en marketing, metodologías de investigación y análisis de datos
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Supervisión Académica</h4>
                      <p className="text-gray-300 text-sm">
                        Dirección de tesis de maestría y doctorado en marketing y comportamiento del consumidor
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Camilo Rojas Contreras. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Desarrollado para GitHub Pages - Universidad de los Andes, Bogotá, Colombia
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

