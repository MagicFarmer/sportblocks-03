
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, Users, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PunchLines from "@/components/PunchLines";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would normally send the data to your backend
      console.log("Form data:", data);
      console.log("Email will be sent to: rlujanq@iriestudio.com");
      
      setIsSubmitted(true);
      reset();
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamMembers = [
    {
      name: "Roberto Lujan",
      role: "Original Idea & Team Leader",
      image: "/lovable-uploads/cb48ca98-3796-4b8b-a77f-463f20642d6a.png"
    },
    {
      name: "Eliot Rojas",
      role: "Main Developer",
      image: "/lovable-uploads/cb48ca98-3796-4b8b-a77f-463f20642d6a.png"
    },
    {
      name: "Carlos Vargas",
      role: "Product Support",
      image: "/lovable-uploads/cb48ca98-3796-4b8b-a77f-463f20642d6a.png"
    },
    {
      name: "Jason Espinoza",
      role: "Product Support",
      image: "/lovable-uploads/cb48ca98-3796-4b8b-a77f-463f20642d6a.png"
    },
    {
      name: "Keylor Angulo",
      role: "Marketing Advisor",
      image: "/lovable-uploads/cb48ca98-3796-4b8b-a77f-463f20642d6a.png"
    },
    {
      name: "David Alonso",
      role: "Marketing Advisor",
      image: "/lovable-uploads/cb48ca98-3796-4b8b-a77f-463f20642d6a.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Mail className="text-blue-400 w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch with the SportBlocks team. We're here to help you with any questions about our platform, NFTs, or partnership opportunities.
          </p>
          
          {/* Punch Lines */}
          <div className="mt-8">
            <PunchLines style="highlight" className="text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">rlujanq@iriestudio.com</p>
                    <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                    <p className="text-gray-300">24/7 Community Support</p>
                    <p className="text-sm text-gray-400 mt-1">Join our Discord for instant help</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Network</h3>
                    <p className="text-gray-300">StarkNet Ecosystem</p>
                    <p className="text-sm text-gray-400 mt-1">Building the future of sports NFTs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20">
                <h3 className="text-lg font-semibold text-white mb-3">Partnership Opportunities</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Interested in partnering with SportBlocks? We're always looking for athletes, sports organizations, and brands who share our vision of revolutionizing sports memorabilia through blockchain technology.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        {...register("name", { required: "Name is required" })}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      {...register("subject", { required: "Subject is required" })}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register("message", { required: "Message is required" })}
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Meet the Project Team Section */}
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Users className="text-amber-400 w-12 h-12 mr-4" />
                <h2 className="text-4xl font-bold text-white">Meet the Project Team</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                The passionate team behind SportBlocks, bringing Web3 innovation to the sports world
              </p>
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-400/30">
                <p className="text-2xl font-bold text-amber-300 mb-2">
                  From Costa Rica to the World !!! 
                </p>
                <p className="text-3xl font-bold text-green-400">
                  PURA VIDA DEVELOPMENT !!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-amber-400/50 shadow-lg object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-amber-300 font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest SportBlocks news, exclusive drops, and community events. 
              Follow us on social media and join our growing community of sports enthusiasts and collectors.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Join Discord
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Follow Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
