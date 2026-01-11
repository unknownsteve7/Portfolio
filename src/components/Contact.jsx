import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        service: '',
        email: '',
        description: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://portfolio-backend-orcin-seven.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    subject: formData.service || 'New Inquiry',
                    message: formData.description
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' });
                setFormData({
                    firstName: '',
                    lastName: '',
                    service: '',
                    email: '',
                    description: ''
                });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Could not connect to the server. Is it running?' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-[#0A0A0A] px-7 py-32 max-md:py-20 border-t border-white/[0.05]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-[1fr_2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
                    {/* Left Side - Contact Info */}
                    <div>
                        <h1 className="text-[clamp(48px,6vw,80px)] font-bold leading-[0.95] mb-12 text-white max-md:text-[clamp(36px,10vw,64px)] tracking-tighter">
                            GET_IN_TOUCH.
                        </h1>

                        <div className="space-y-8 mb-12">
                            <div>
                                <p className="text-[#D4AF37]/50 text-[10px] mb-2 uppercase tracking-[0.2em] font-mono">01 // LOCATION</p>
                                <p className="text-white font-bold text-xl">Tanuku, Andhra Pradesh, India</p>
                            </div>

                            <div>
                                <p className="text-[#D4AF37]/50 text-[10px] mb-2 uppercase tracking-[0.2em] font-mono">02 // WORKING_HOURS</p>
                                <p className="text-white font-bold text-lg">Monday — Friday</p>
                                <p className="text-white/40 font-mono text-xs uppercase tracking-widest mt-1">09:00 — 17:00</p>
                            </div>
                        </div>

                        {/* Contact Details at Bottom */}
                        <div className="space-y-4 pt-12 border-t border-white/10">
                            <div className="text-[10px] font-mono text-white/10 uppercase tracking-widest mb-4">DIRECT_CHANNELS</div>
                            <a
                                href="mailto:nagamohan765@gmail.com"
                                className="text-white text-xl font-bold hover:text-[#D4AF37] transition-all block"
                            >
                                nagamohan765@gmail.com
                            </a>
                            <a
                                href="tel:+917624864075"
                                className="text-white text-xl font-bold hover:text-[#D4AF37] transition-all block"
                            >
                                (+91) 7989100775
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-[#121212] p-12 rounded-[40px] border border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Row */}
                            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                                <div className="space-y-2">
                                    <label className="text-white/60 text-[10px] font-mono uppercase tracking-widest pl-1">
                                        FIRST_NAME
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter first name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-[#D4AF37] focus:bg-white/[0.07] transition-all duration-300 hover:border-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/60 text-[10px] font-mono uppercase tracking-widest pl-1">
                                        LAST_NAME
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-[#D4AF37] focus:bg-white/[0.07] transition-all duration-300 hover:border-white/20"
                                    />
                                </div>
                            </div>

                            {/* Service Dropdown */}
                            <div className="space-y-2">
                                <label className="text-white/60 text-[10px] font-mono uppercase tracking-widest pl-1">
                                    SERVICE_TYPE
                                </label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#D4AF37] focus:bg-white/[0.07] transition-all duration-300 hover:border-white/20 appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#121212] text-white/50">Select a service</option>
                                        <option value="business-analysis" className="bg-[#121212]">Business Analysis</option>
                                        <option value="frontend-development" className="bg-[#121212]">Frontend Development</option>
                                        <option value="data-analytics" className="bg-[#121212]">Data Analytics</option>
                                        <option value="consulting" className="bg-[#121212]">Consulting</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L1 4H11L6 9Z" fill="white" fillOpacity="0.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-white/60 text-[10px] font-mono uppercase tracking-widest pl-1">
                                    EMAIL_ADDRESS
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-[#D4AF37] focus:bg-white/[0.07] transition-all duration-300 hover:border-white/20"
                                />
                            </div>

                            {/* Project Description */}
                            <div className="space-y-2">
                                <label className="text-white/60 text-[10px] font-mono uppercase tracking-widest pl-1">
                                    PROJECT_BRIEF
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Tell me about your project..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-[#D4AF37] focus:bg-white/[0.07] transition-all duration-300 hover:border-white/20 resize-none"
                                />
                            </div>

                            <div className="space-y-6 pt-2">
                                {status.message && (
                                    <div className={`p-4 rounded-xl text-[10px] font-mono tracking-widest uppercase text-center ${status.type === 'success' ? 'bg-[#32cd32]/10 text-[#32cd32]' : 'bg-red-500/10 text-red-500'
                                        }`}>
                                        {status.message}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-5 rounded-full font-mono transition-all text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 ${isSubmitting
                                        ? "bg-white/10 text-white/40 cursor-not-allowed"
                                        : "bg-white text-black hover:bg-[#D4AF37] hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                            TRANSMITTING...
                                        </>
                                    ) : 'SEND_MESSAGE'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}
