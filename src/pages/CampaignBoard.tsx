
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Heart, Target, TrendingUp, Lightbulb, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CampaignBoard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-2xl shadow-2xl mr-4">
              <Trophy className="text-white w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">🎬 Campaign Board</h1>
              <p className="text-2xl text-amber-400 font-semibold">Sport Blocks – Building Athletes' Legacy</p>
            </div>
          </div>
        </div>

        {/* Section 1: El Problema */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Target className="text-red-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">1. EL PROBLEMA</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop" 
                alt="Athletes facing challenges"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-amber-400 font-semibold mb-6 text-center">
              La Brecha entre la Gloria y el Sustento. El Anhelo de Impacto. La Barrera de la Tecnología.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-400/30">
                <h3 className="text-lg font-bold text-white mb-4">Para el Atleta</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Llegó a la cima, pero el podio no garantiza estabilidad. Los premios son finitos. Los patrocinios, escasos. 
                  Y la conexión con sus fans rara vez se traduce en apoyo directo o duradero.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
                <h3 className="text-lg font-bold text-white mb-4">Para el Fan</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  No quiere ser un espectador más. Quiere participar, sentir que su apoyo tiene valor. 
                  Pero donar sin saber a dónde va el dinero no es suficiente. Quiere transparencia, acceso, historia.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
                <h3 className="text-lg font-bold text-white mb-4">Para el Deporte y la Sociedad</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  El deporte es inspiración. Pero la mayoría de atletas inspiradores no tienen ni las herramientas ni el respaldo 
                  para amplificar su impacto social. Y Web3, que podría ser la solución, parece un laberinto de jerga técnica.
                </p>
              </div>
            </div>

            {/* English Translation */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-bold text-amber-400 mb-4">🇺🇸 English Translation</h3>
              <p className="text-gray-300 text-sm mb-4">
                <strong>The Gap Between Glory and Sustenance. The Yearning for Impact. The Barrier of Technology.</strong>
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                For the Athlete: They reached the top, but the podium doesn't guarantee stability. For the Fan: They want to participate, not just watch. 
                For Sport and Society: Sport is inspiration, but most inspiring athletes lack tools to amplify their social impact.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Las Perspectivas */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Lightbulb className="text-yellow-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">2. LAS PERSPECTIVAS (INSIGHTS)</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=400&fit=crop" 
                alt="Sports inspiration and connection"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-yellow-400 font-semibold mb-6 text-center">
              El Deporte Mueve Corazones. La Transparencia Mueve Confianza. La Educación Mueve el Futuro.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Insight 1",
                  content: "El verdadero fan no solo colecciona trofeos, colecciona momentos. Quiere participar en el viaje del atleta, desde sus orígenes hasta su impacto."
                },
                {
                  title: "Insight 2", 
                  content: "La generosidad se duplica cuando se ve su efecto. Ver el impacto real de una contribución —liderada por un atleta que admira— fortalece la conexión emocional y la fidelidad."
                },
                {
                  title: "Insight 3",
                  content: "Web3 no necesita parecer Web3. Si se integra de forma humana, educativa y opcional, puede ser adoptada por todos, desde el fan tradicional hasta el nativo digital."
                },
                {
                  title: "Insight 4",
                  content: "Los atletas no solo compiten, lideran. Son modelos a seguir, generadores de cambio, y hoy más que nunca, merecen herramientas para amplificar su voz y su causa."
                }
              ].map((insight, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg p-6 border border-yellow-400/30">
                  <h3 className="text-lg font-bold text-white mb-3">{insight.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{insight.content}</p>
                </div>
              ))}
            </div>

            {/* English Translation */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-bold text-amber-400 mb-4">🇺🇸 English Translation</h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Sport Moves Hearts. Transparency Moves Trust. Education Moves the Future.</strong>
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                True fans collect moments, not just trophies. Generosity doubles when its effect is visible. 
                Web3 doesn't need to look like Web3. Athletes don't just compete, they lead.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: La Gran Idea */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Rocket className="text-purple-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">3. LA GRAN IDEA</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop" 
                alt="Sport Blocks vision"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-purple-400 mb-4">"Sport Blocks: Building Athletes' Legacy"</h3>
              <p className="text-xl text-white mb-6">No es solo una dApp. Es un movimiento.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-400/30 mb-6">
              <p className="text-gray-200 leading-relaxed mb-4">
                Cada SportBlock es un fragmento vivo del legado de un atleta: coleccionable, compartible, y funcional. 
                Cada bloque cuenta una historia, financia su carrera y su causa, y permite que tú formes parte de ella.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Un puente entre fans y atletas. Una nueva economía deportiva y social. Una entrada suave y educativa al universo Web3.
              </p>
              <p className="text-2xl font-bold text-purple-400 text-center">
                Tu héroe. Tu impacto. Tu legado también.
              </p>
            </div>

            {/* English Translation */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-bold text-amber-400 mb-4">🇺🇸 English Translation</h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong>It's not just a dApp. It's a movement.</strong>
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Each SportBlock is a living fragment of an athlete's legacy: collectible, shareable, and functional. 
                A bridge between fans and athletes. A new sports and social economy. Your hero. Your impact. Your legacy too.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: La Ejecución */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-green-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">4. LA EJECUCIÓN</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop" 
                alt="Technology and innovation"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-green-400 font-semibold mb-6 text-center">
              Tecnología Invisible. Experiencia Humana. Legado Medible.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "● La Plataforma",
                  content: "Desarrollada en Flutter con soporte Starknet (starknet.dart) para una UX fluida y accesible. Sin necesidad inicial de wallet. Aprendé a medida que participás. Transacciones casi invisibles, gracias a costo bajo y velocidad de Starknet."
                },
                {
                  title: "● Las Tarjetas de Legado",
                  content: "NFT de bajo costo con contenido evolutivo, rareza dinámica, arte co-creado. Acceso a experiencias exclusivas: detrás de cámaras, hitos geolocalizados, 'Mi Dream Team'. Categorías organizadas en álbumes temáticos: Héroes, Orígenes, Impacto, por Deporte."
                },
                {
                  title: "● El Impacto Social",
                  content: "Cada tarjeta financia directamente al atleta y a su causa social. 100% trazabilidad vía blockchain. Gobernanza compartida: el fan puede votar en la DAO del atleta."
                },
                {
                  title: "● El Modo Fan",
                  content: "Podés intercambiar tarjetas, ganar insignias, seguir historias, proponer proyectos. Activá el 'Modo Aprendizaje' y entendé Web3 sin esfuerzo. Proyectos impulsados por fans: desde murales, eventos, hasta obras deportivas."
                },
                {
                  title: "● El Lanzamiento",
                  content: "Atletas olímpicos y continentales como primeros embajadores. Alianzas con federaciones, medios y marcas con causa. Campaña con el mensaje: 'Sport Blocks: Sé parte del legado. Apoyá el presente, construí el futuro.'"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

            {/* English Translation */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-bold text-amber-400 mb-4">🇺🇸 English Translation</h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Invisible Technology. Human Experience. Measurable Legacy.</strong>
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Platform developed in Flutter with Starknet support. Legacy Cards (low-cost NFTs with evolving content). 
                Social Impact (direct funding with 100% traceability). Fan Mode (trade cards, earn badges). 
                Launch with Olympic athletes as ambassadors.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Resultados Potenciales */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Trophy className="text-amber-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">5. RESULTADOS POTENCIALES</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=400&fit=crop" 
                alt="Success and achievement"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-amber-400 font-semibold mb-6 text-center">
              Corazones Ganados. Causas Apoyadas. Héroes Empoderados.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Para los Atletas",
                  content: "Ingresos directos sostenibles. Voz propia. Comunidad activa. Visibilidad global."
                },
                {
                  title: "Para los Fans", 
                  content: "Conexión real. Experiencias únicas. Participación en decisiones. Educación Web3 sencilla."
                },
                {
                  title: "Para las Causas Sociales",
                  content: "Nuevas fuentes de financiamiento transparente. Comunidades movilizadas por el deporte."
                },
                {
                  title: "Para Sport Blocks",
                  content: "Posicionamiento como referente en innovación deportiva, impacto social y tecnología Web3 amigable."
                }
              ].map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-400/30">
                  <h3 className="text-lg font-bold text-white mb-3">{result.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{result.content}</p>
                </div>
              ))}
            </div>

            {/* Cannes Recognition */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">🏆 Y sí… múltiples Leones en Cannes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="text-gray-200 text-sm space-y-2">
                    <li>• Uso creativo de blockchain</li>
                    <li>• Impacto social medible</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-gray-200 text-sm space-y-2">
                    <li>• Diseño de experiencia centrado en valores</li>
                    <li>• Estrategia de contenido y gamificación</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-xl font-bold text-purple-400 mt-4">
                Y quizás… el Grand Prix for Good.
              </p>
            </div>

            {/* English Translation */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-bold text-amber-400 mb-4">🇺🇸 English Translation</h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Hearts Won. Causes Supported. Heroes Empowered.</strong>
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                For Athletes: Sustainable direct income. For Fans: Real connection and unique experiences. 
                For Social Causes: New transparent funding sources. For Sport Blocks: Leadership in sports innovation. 
                And yes... multiple Lions in Cannes for creative blockchain use, measurable social impact, and perhaps the Grand Prix for Good.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join the Movement
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampaignBoard;
