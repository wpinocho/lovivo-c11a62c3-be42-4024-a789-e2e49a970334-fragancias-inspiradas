import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ScrollLink } from '@/components/ScrollLink';
import { Heart, Sparkles, Award, ShieldCheck } from 'lucide-react';

/**
 * EDITABLE PAGE - About
 * 
 * Página "Sobre Nosotros" de la tienda de fragancias.
 * Totalmente editable por IA.
 */

const About = () => {
  return (
    <EcommerceTemplate>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/about-lab.jpg" 
            alt="Nuestro laboratorio de fragancias" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Creando fragancias de lujo inspiradas en los perfumes más icónicos del mundo, 
              con nuestra propia esencia y diseño premium.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Lujo Accesible
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nace de una pasión por las fragancias de alta gama y la convicción de que 
                el lujo debería ser accesible para todos. Nos inspiramos en los perfumes más 
                exclusivos del mundo, desde clásicos de Chanel hasta creaciones contemporáneas 
                de Tom Ford y Creed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada fragancia es cuidadosamente desarrollada en nuestro laboratorio, 
                utilizando ingredientes de primera calidad y técnicas de perfumería 
                tradicional combinadas con innovación moderna.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Heart className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Hecho con pasión</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Calidad premium</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/about-ingredients.jpg" 
                  alt="Ingredientes de lujo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/about-craft.jpg" 
                  alt="Artesanía de perfumes" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                Artesanía <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  Premium
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro proceso combina la tradición perfumista francesa con tecnología 
                de vanguardia. Cada fragancia pasa por múltiples pruebas de calidad y 
                ajustes hasta lograr la perfección.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Los envases negros con detalles dorados no solo son elegantes: están 
                diseñados para preservar la integridad de la fragancia, protegiéndola 
                de la luz y el calor.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-secondary" />
                    <h3 className="font-bold text-lg">100%</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Control de calidad</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-lg">Premium</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Ingredientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un grupo apasionado de expertos en perfumería, diseño y calidad trabajando 
              juntos para crear fragancias excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/team-field-1.jpg" 
                alt="Equipo trabajando en campo" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-2">Día de Campo 2024</h3>
                <p className="text-white/80 text-sm">
                  Probando nuevas fragancias en un entorno natural inspirador
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/team-field-2.jpg" 
                alt="Sesión de testing de fragancias" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-2">Sesión de Testing</h3>
                <p className="text-white/80 text-sm">
                  Evaluando cada nota olfativa con precisión y pasión
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/team-field-3.jpg" 
                alt="Brainstorming al aire libre" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-2">Creatividad en Acción</h3>
                <p className="text-white/80 text-sm">
                  Brainstorming de nuevas composiciones aromáticas
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="/team-field-4.jpg" 
                alt="Team building en jardín botánico" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-2">Jardín Botánico</h3>
                <p className="text-white/80 text-sm">
                  Explorando aromas naturales para nuestras creaciones
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nuestro equipo está compuesto por perfumistas profesionales, químicos especializados 
                en fragancias, diseñadores de producto y expertos en control de calidad. Trabajamos 
                en un ambiente colaborativo donde la creatividad y la excelencia técnica se encuentran.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Profesionales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Años Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Fragancias Creadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada fragancia que creamos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pasión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada fragancia es creada con amor por el arte de la perfumería 
                y respeto por los clásicos que nos inspiran.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Calidad</h3>
              <p className="text-muted-foreground leading-relaxed">
                No comprometemos la calidad. Usamos las mejores materias primas 
                y procesos rigurosos de control.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accesibilidad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creemos que todos merecen llevar fragancias de lujo sin pagar 
                precios exorbitantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-secondary/5 to-primary/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Descubre Nuestra Colección
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explora nuestras fragancias inspiradas en los perfumes más icónicos 
            del mundo. Calidad premium, precios justos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ScrollLink to="/#products">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90">
                Ver Fragancias
              </Button>
            </ScrollLink>
            <ScrollLink to="/#collections">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                Explorar Colecciones
              </Button>
            </ScrollLink>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;