import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const form = useRef();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm("service_38z8cgk", "template_x1m97fo", form.current, {
        publicKey: "kDuLe3Ov3uwPDyYyn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast({
            title: "Message Sent",
            description:
              "Thank you for reaching out! I'll get back to you soon.",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Failed to Send Message",
            description: error.text,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="pt-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:fadilitas14@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fadilitas14@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:0895389649155"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 8953-8964-9155
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bandar Lampung, Indonesia
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/muhammad-a-38a684137/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/FXDL44026767" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/fadil991407/"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.youtube.com/@fadilarfat4974"
                  target="_blank"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form
              ref={form}
              action=""
              className="space-y-6"
              onSubmit={handleSumbit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Fadil Arfat..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="fadilitas14@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to discuss..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "cursor-not-allowed opacity-50"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
