import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Mon-Sat 9:00 AM - 6:00 PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@desaibuilders.com", "projects@desaibuilders.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Construction Avenue", "Mumbai, Maharashtra 400001"],
      description: "Our main office location",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
      ],
      description: "Sunday: Closed",
    },
  ];

  const officeLocations = [
    {
      city: "Mumbai",
      address: "123 Construction Avenue, Bandra East",
      phone: "+91 98765 43210",
      email: "mumbai@desaibuilders.com",
    },
    {
      city: "Pune",
      address: "456 Business Park, Hinjewadi",
      phone: "+91 98765 43211",
      email: "pune@desaibuilders.com",
    },
    {
      city: "Bangalore",
      address: "789 Tech City, Electronic City",
      phone: "+91 98765 43212",
      email: "bangalore@desaibuilders.com",
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-lg"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg"
              >
                <Building2 className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primary">
                  Desai Builders
                </span>
                <span className="text-xs text-gray-600">
                  Building Excellence
                </span>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="/projects"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-primary font-medium border-b-2 border-primary pb-1"
              >
                Contact
              </a>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
              }}
              animate={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-white/20 backdrop-blur-sm text-white mb-8 px-6 py-3 text-lg shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-7xl font-bold mb-8"
            >
              Let's{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Connect
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl max-w-4xl mx-auto leading-relaxed"
            >
              Ready to start your construction project? Contact our expert team
              for consultation, quotes, and project planning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-500 h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <info.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-900 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-8 px-6 py-3 shadow-lg">
                Send Message
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Get Free{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                  Consultation
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Fill out the form below and our team will get back to you within
                24 hours with a detailed project consultation.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-10 text-center bg-gradient-to-br from-green-50 to-white border-green-200">
                    <CardContent className="p-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Thank you for contacting us. We'll get back to you
                        within 24 hours.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-gray-900 mb-3 text-lg"
                          >
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-3 h-12 text-lg border-gray-200 focus:border-primary"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-gray-900 mb-3 text-lg"
                          >
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-3 h-12 text-lg border-gray-200 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-gray-900 mb-3 text-lg"
                          >
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-3 h-12 text-lg border-gray-200 focus:border-primary"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="projectType"
                            className="text-gray-900 mb-3 text-lg"
                          >
                            Project Type
                          </Label>
                          <Input
                            id="projectType"
                            name="projectType"
                            type="text"
                            placeholder="e.g., Residential, Commercial"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="mt-3 h-12 text-lg border-gray-200 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="message"
                          className="text-gray-900 mb-3 text-lg"
                        >
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project requirements..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-3 text-lg border-gray-200 focus:border-primary resize-none"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl py-6 text-lg rounded-xl"
                        >
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                          <ChevronRight className="w-5 h-5 ml-3" />
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-accent to-orange-500 text-white mb-8 px-6 py-3 shadow-lg">
                Our Locations
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Visit Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Offices
                </span>
              </h2>

              {/* Google Map Placeholder */}
              <motion.div whileHover={{ scale: 1.02 }} className="mb-10">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-xl font-medium text-gray-700">
                      Interactive Map
                    </p>
                    <p className="text-gray-600">
                      Google Maps integration would be placed here
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Office Locations */}
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {office.city} Office
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-4">
                            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-lg">
                              {office.address}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-lg">
                              {office.phone}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-lg">
                              {office.email}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Connect With Us on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Social Media
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our latest projects and updates on social platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-300 group border shadow-lg"
              >
                <social.icon className="w-10 h-10 text-gray-600 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "24/7 Chat Support",
                desc: "Get instant answers to your queries",
                buttonText: "Start Chat",
                buttonColor: "primary",
              },
              {
                icon: Calendar,
                title: "Schedule Site Visit",
                desc: "Book an appointment to visit our office",
                buttonText: "Book Visit",
                buttonColor: "accent",
              },
              {
                icon: Users,
                title: "Meet Our Team",
                desc: "Connect with our construction experts",
                buttonText: "Our Team",
                buttonColor: "primary",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-500 h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">{item.desc}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={
                          item.buttonColor === "accent"
                            ? "bg-gradient-to-r from-accent to-orange-500 hover:shadow-lg"
                            : "bg-gradient-to-r from-primary to-accent hover:shadow-lg"
                        }
                      >
                        {item.buttonText}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t border-b border-red-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Emergency Construction Support
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Need urgent construction assistance? Our emergency team is
              available 24/7
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-3" />
                  Emergency: +91 98765 00000
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  emergency@desaibuilders.com
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
              >
                <Building2 className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">Desai Builders</span>
                <span className="text-gray-400">Building Excellence</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-10 max-w-3xl mx-auto text-lg"
            >
              © 2024 Desai Builders. All rights reserved. Building dreams since
              1998.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-8"
            >
              {["Privacy Policy", "Terms of Service", "Contact"].map(
                (link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ y: -2, color: "#ffffff" }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
