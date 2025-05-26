
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Zap, Globe, Users, Trophy, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Conoce <span className="text-amber-400">SportBlocks</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            La primera plataforma descentralizada para NFTs deportivos en StarkNet, 
            donde los momentos legendarios del deporte se convierten en activos digitales únicos.
          </p>
        </div>
      </section>

      {/* What is SportBlocks */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                ¿Qué es SportBlocks?
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                SportBlocks es una plataforma revolucionaria que combina la pasión por el deporte 
                con la tecnología blockchain más avanzada. Creamos NFTs únicos que capturan los 
                momentos más emocionantes e históricos del mundo deportivo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                  <span className="text-slate-700 font-medium">Autenticidad verificada por blockchain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                  <span className="text-slate-700 font-medium">Colaboración directa con atletas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                  <span className="text-slate-700 font-medium">Tecnología StarkNet de última generación</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop" 
                alt="Tecnología deportiva" 
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Innovación Tecnológica</h3>
              <p className="text-slate-600">
                Utilizamos StarkNet para garantizar transacciones rápidas, seguras y con bajas comisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Características Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-xl">Seguridad Garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Todos los NFTs están protegidos por la robusta seguridad de StarkNet, 
                  garantizando la autenticidad y propiedad de cada activo digital.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <CardTitle className="text-xl">Transacciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Disfruta de transacciones instantáneas con comisiones mínimas gracias 
                  a la tecnología Layer 2 de StarkNet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-xl">Comunidad Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Únete a una comunidad mundial de coleccionistas deportivos y 
                  comparte tu pasión por los momentos épicos del deporte.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Trophy className="w-12 h-12 text-orange-400 mb-4" />
                <CardTitle className="text-xl">Atletas Verificados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Colaboramos directamente con atletas profesionales para crear 
                  NFTs auténticos de sus mejores momentos deportivos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Star className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-xl">Rareza Única</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Cada NFT tiene diferentes niveles de rareza, desde comunes hasta 
                  legendarios, aumentando su valor y exclusividad.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                <CardTitle className="text-xl">Acceso Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Plataforma accesible desde cualquier parte del mundo, 
                  democratizando el acceso a los momentos deportivos más icónicos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            ¿Listo para comenzar tu colección?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Únete a SportBlocks y comienza a coleccionar los momentos deportivos más épicos de la historia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => navigate('/gallery')}
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explorar Colección
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => navigate('/marketplace')}
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Ver Marketplace
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
