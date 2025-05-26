
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import Marketplace from "./pages/Marketplace";
import Athletes from "./pages/Athletes";
import CreateNFT from "./pages/CreateNFT";
import Profile from "./pages/Profile";
import About from "./pages/About";
import MyCollections from "./pages/MyCollections";
import SocialProjects from "./pages/SocialProjects";
import FansGallery from "./pages/FansGallery";
import CampaignBoard from "./pages/CampaignBoard";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import ProjectEvolution from "./pages/ProjectEvolution";
import BusinessPitch from "./pages/BusinessPitch";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/executive-summary" element={<ExecutiveSummary />} />
          <Route path="/project-evolution" element={<ProjectEvolution />} />
          <Route path="/business-pitch" element={<BusinessPitch />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/create-nft" element={<CreateNFT />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-collections" element={<MyCollections />} />
          <Route path="/social-projects" element={<SocialProjects />} />
          <Route path="/fans-gallery" element={<FansGallery />} />
          <Route path="/campaign-board" element={<CampaignBoard />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
