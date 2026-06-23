/**
 * Premium Contact Section
 * NOTE: This is a starter premium version.
 * Replace placeholder contact details later.
 */

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  User,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-[140px]" />

      <div className="container relative">
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Contact
          </span>

          <h2 className="mb-6">
            Let's build something
            <span className="gradient-text"> meaningful.</span>
          </h2>

          <p className="text-lg text-gray-400">
            Have a project, collaboration or question? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          <motion.div
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="glass rounded-[32px] border border-white/10 p-10"
          >
            <h3 className="mb-8 text-3xl font-bold">Get in Touch</h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <MapPin className="text-[var(--color-accent)]"/>
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock3 className="text-[var(--color-accent)]"/>
                <span>Available Mon–Sat • 9 AM – 7 PM</span>
              </div>

              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-between rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-5 font-semibold text-white transition hover:scale-[1.02]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle/>
                  WhatsApp
                </span>
                →
              </a>

              <a
                href="mailto:hello@example.com"
                className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-5 font-semibold text-white transition hover:scale-[1.02]"
              >
                <span className="flex items-center gap-3">
                  <Mail/>
                  Email Me
                </span>
                →
              </a>

            </div>
          </motion.div>

          <motion.form
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="glass rounded-[32px] border border-white/10 p-10"
          >

            <div className="space-y-6">

              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-400"/>
                <input
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 outline-none transition focus:border-[var(--color-accent)]"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400"/>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 outline-none transition focus:border-[var(--color-accent)]"
                />
              </div>

              <textarea
                rows={7}
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none transition focus:border-[var(--color-accent)]"
              />

              <button
                type="submit"
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                <Send size={18}/>
                Send Message
              </button>

            </div>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
