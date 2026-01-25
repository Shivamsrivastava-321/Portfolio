import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:shivamsrivastava54321@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-gray-800 hover:border-blue-500/30 transition-colors"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Let's work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">together</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                I'm currently available for freelance projects and full-time opportunities.
                                If you have a project that needs a robust backend or full-stack solution, let's chat.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400 mb-1">Email</p>
                                        <a href="mailto:shivamsrivastava54321@gmail.com" className="text-lg text-white hover:text-blue-400 transition-colors">shivamsrivastava54321@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400 mb-1">Phone</p>
                                        <a href="tel:+917054557595" className="text-lg text-white hover:text-green-400 transition-colors">+91 7054557595</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400 mb-1">Location</p>
                                        <p className="text-lg text-white">Ghaziabad, Uttar Pradesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800/50">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 group">
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
