import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="tetx-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web & Mobile Developer
            </h3>
            <p className="text-muted-foreground">
              I am a passionate web and mobile developer with a strong
              foundation in front-end technologies. I love creating beautiful
              and functional user interfaces that provide an exceptional user
              experience. My goal is to build applications that not only look
              great but also perform seamlessly across all devices.
            </p>
            <p className="text-muted-foreground">
              With a keen eye for design and a deep understanding of user
              experience, I strive to create applications that are not only
              visually appealing but also intuitive and easy to use. I am always
              eager to learn new technologies and improve my skills to stay
              ahead in this ever-evolving field.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"></div>
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href=""
              className="ml-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
          <div className="grid grid-cols-1 gap=6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-4 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web/Mobile Development
                  </h4>
                  <p className="text-muted-foreground">
                    I specialize in building responsive and user-friendly web
                    and mobile applications using modern technologies like
                    React, React Native, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-4 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I focus on creating intuitive and engaging user experiences
                    through thoughtful design and usability principles.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-4 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                    Error 404 not found. That's right I have no professional in
                    industry experience, however I still bring over 4 years of
                    hands-on experience in coding and software development from
                    personal projects and self-driven learning. I’ve tackled a
                    wide range of challenges, from developing fullstack web
                    applications to creating mobile apps, and I’m always eager
                    to take on new challenges and expand my skill set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
