import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                        Let's <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Ready to start your next project? Get in touch and let's create something amazing together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <ContactCard
                            icon={<Phone size={24} />}
                            title="Phone"
                            value="+91 7339031074"
                            href="tel:+917339031074"
                            color="from-green-500 to-emerald-500"
                        />
                        <ContactCard
                            icon={<Mail size={24} />}
                            title="Email"
                            value="amdevanand206@gmail.com"
                            href="mailto:amdevanand206@gmail.com"
                            color="from-red-500 to-orange-500"
                        />
                        <ContactCard
                            icon={<Linkedin size={24} />}
                            title="LinkedIn"
                            value="dev-anand-ba846a359"
                            href="https://linkedin.com/in/dev-anand-ba846a359"
                            color="from-blue-500 to-cyan-500"
                        />
                        <ContactCard
                            icon={<Github size={24} />}
                            title="GitHub"
                            value="am-devanand"
                            href="https://github.com/am-devanand"
                            color="from-purple-500 to-pink-500"
                        />
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-accent/10 to-purple-600/10 backdrop-blur-sm rounded-2xl border border-border p-8 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold text-text mb-4">Start a Project</h3>
                        <p className="text-muted mb-6 leading-relaxed">
                            Looking for a professional website that stands out? Let's discuss how I can help bring your vision to life with clean code and stunning design.
                        </p>
                        <a
                            href="mailto:amdevanand206@gmail.com?subject=Project Inquiry"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-accent/30 transition-all transform hover:-translate-y-1"
                        >
                            <Send size={18} />
                            Send a Message
                        </a>
                    </motion.div>
                </div>

                <footer className="mt-20 text-center text-muted text-sm border-t border-border pt-8">
                    <p>© {new Date().getFullYear()} DEV ANAND S. Crafted with passion using React & TailwindCSS.</p>
                </footer>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, value, href, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-4 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border hover:border-accent/50 transition-all"
    >
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color}`}>
            {React.cloneElement(icon, { className: 'text-white' })}
        </div>
        <div>
            <p className="text-sm text-muted">{title}</p>
            <p className="text-text font-medium group-hover:text-accent transition-colors">{value}</p>
        </div>
    </a>
);

export default Contact;
