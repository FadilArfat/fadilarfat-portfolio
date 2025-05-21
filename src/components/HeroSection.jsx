import { ArrowDown } from "lucide-react";
import pp from "../assets/profile/pp.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-start">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Fadil
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Arfat
              </span>
            </h1>
            <p className="text-start text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </p>
            <div className="flex items-center pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src={pp}
              alt="profile-pic"
              className="w-full h-auto rounded-full shadow-lg object-cover object-center hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in-delay-4"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
