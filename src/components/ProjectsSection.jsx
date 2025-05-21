import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Gaming & Chill",
    description:
      "This is a game library website that I created with React. It has a simple and clean design, making it easy to navigate and find games.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/pr1.png?alt=media&token=52420633-1fa1-43ac-a512-bf577104cfc5",
    tags: ["React", "JavaScript", "TailwindCSS"],
    demoUrl: "https://gaming-and-chill.netlify.app/",
    githubUrl:
      "https://github.com/FadilArfat/152235865100-80-dts-final-project",
  },
  {
    id: 2,
    name: "Gaming & Chill Mobile App",
    description:
      "This is a mobile app version of the Gaming & Chill website. It is built with React Native and has a similar design to the website.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/pr2.webp?alt=media&token=f8612820-e130-4eec-85b1-f63743f1a549",
    tags: ["React Native"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.projectpertama&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    githubUrl: "https://github.com/FadilArfat/Gaming-and-Chill-Mobile-App",
  },
  {
    id: 3,
    name: "Quran+",
    description:
      "This is a Quran web app that I created with React. Usercan read the Quran and listen to the recitation.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/pr3.png?alt=media&token=3b36cfc1-c94b-4470-81e1-2f1c92cdcb12",
    tags: ["Node.js", "Express"],
    demoUrl: "https://quran-plus.vercel.app/",
    githubUrl: "https://github.com/FadilArfat/Quran_ID",
  },
  {
    id: 4,
    name: "Hety Catering Website",
    description:
      "This is a catering website that I created with React and Tailwind. It has a simple and clean design, making it easy to navigate and find information.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/pr4.png?alt=media&token=232f77d0-5a48-43b8-8c61-da9c595ee417",
    tags: ["Vue.js", "TailwindCSS", "Vite"],
    demoUrl: "https://hety-catering-website-l7v8.vercel.app/",
    githubUrl: "https://github.com/FadilArfat/HetyCatering-Website",
  },
  {
    id: 5,
    name: "Catatan (Mobile App)",
    description:
      "This is a note-taking app that I created with Flutter. It has a simple and clean design, making it easy to navigate and find notes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/PR5.png?alt=media&token=3fc20dda-201a-446b-9fd7-cb2ebec2a43c",
    tags: ["Flutter"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.nfidmobile.catatan_app",
    githubUrl: "https://github.com/FadilArfat/catatan_app_Flutter",
  },
  {
    id: 6,
    name: "More on My Github",
    description:
      "I have more projects on my Github. You can check them out by clicking the button below.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/Kuis%20Pintar%20Komputer%20(4).png?alt=media&token=e3a41f06-ab10-4094-9ac2-1dabe63a95c3",
    tags: ["Github"],

    githubUrl: "https://github.com/FadilArfat",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-12xl mx-auto">
          Here are some of my recent projects. Click on the images to view them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border text-xs font-medium bg-secondary text-secondary-foreground rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/FadilArfat"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
