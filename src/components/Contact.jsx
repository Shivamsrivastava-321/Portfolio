import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowRight } from 'lucide-react';

const CONTACT_INFO = [
    {
        icon: Mail,
        label: 'Email',
        value: 'shivamsrivastava54321@gmail.com',
        href: 'mailto:shivamsrivastava54321@gmail.com',
        color: '#60a5fa',
        bg: 'rgba(59,130,246,0.08)',
        border: 'rgba(59,130,246,0.18)',
        hoverBg: 'rgba(59,130,246,0.15)',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 7054557595',
        href: 'tel:+917054557595',
        color: '#34d399',
        bg: 'rgba(52,211,153,0.08)',
        border: 'rgba(52,211,153,0.18)',
        hoverBg: 'rgba(52,211,153,0.15)',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Ghaziabad, Uttar Pradesh',
        href: null,
        color: '#a78bfa',
        bg: 'rgba(139,92,246,0.08)',
        border: 'rgba(139,92,246,0.18)',
        hoverBg: 'rgba(139,92,246,0.15)',
    },
];

const SOCIAL = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Shivamsrivastava-321', color: '#fff' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-srivastavaa123/', color: '#60a5fa' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);

    const handleChange = (e) => setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:shivamsrivastava54321@gmail.com?subject=${subject}&body=${body}`;
        setTimeout(() => setSending(false), 2000);
    };

    return (
        <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#000' }}>
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <div className="section-tag mb-5">Get In Touch</div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                        Let's work{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            together
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
                        Available for freelance projects and full-time opportunities. Open to remote collaboration worldwide.
                    </p>
                </motion.div>

                {/* Main card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl p-6 md:p-12"
                    style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                        {/* Left — contact info */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                I'm currently available for freelance projects and full-time roles. If you have a project that needs a robust backend or full-stack solution, let's chat.
                            </p>

                            {/* Info items */}
                            <div className="space-y-4 mb-8">
                                {CONTACT_INFO.map((item) => {
                                    const Icon = item.icon;
                                    const content = (
                                        <div
                                            className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300 cursor-pointer"
                                            style={{ background: item.bg, border: `1px solid ${item.border}` }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = item.hoverBg;
                                                e.currentTarget.style.borderColor = item.color + '40';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = item.bg;
                                                e.currentTarget.style.borderColor = item.border;
                                            }}
                                        >
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                                                <Icon className="w-4.5 h-4.5" style={{ color: item.color, width: 18, height: 18 }} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs text-gray-600 mb-0.5">{item.label}</p>
                                                <p className="text-sm text-gray-200 font-medium truncate">{item.value}</p>
                                            </div>
                                            {item.href && (
                                                <ArrowRight className="w-4 h-4 ml-auto shrink-0 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1 transition-all" />
                                            )}
                                        </div>
                                    );
                                    return item.href ? (
                                        <a key={item.label} href={item.href} className="block">{content}</a>
                                    ) : (
                                        <div key={item.label}>{content}</div>
                                    );
                                })}
                            </div>

                            {/* Social links */}
                            <div>
                                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3 font-semibold">Connect</p>
                                <div className="flex gap-3">
                                    {SOCIAL.map((s) => {
                                        const Icon = s.icon;
                                        return (
                                            <a
                                                key={s.label}
                                                href={s.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={s.label}
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                                                style={{
                                                    background: 'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    color: '#94a3b8',
                                                }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = `${s.color}30`; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                                            >
                                                <Icon size={16} />
                                                {s.label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Right — form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all placeholder-gray-700"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all placeholder-gray-700"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all resize-none placeholder-gray-700"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    disabled={sending}
                                    whileHover={{ scale: sending ? 1 : 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 transition-all"
                                    style={{
                                        background: sending
                                            ? 'rgba(59,130,246,0.4)'
                                            : 'linear-gradient(135deg, #3b82f6, #6d28d9)',
                                        boxShadow: sending ? 'none' : '0 0 24px rgba(59,130,246,0.2)',
                                        cursor: sending ? 'not-allowed' : 'pointer',
                                    }}
                                >
                                    {sending ? 'Opening mail client…' : 'Send Message'}
                                    {!sending && (
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
