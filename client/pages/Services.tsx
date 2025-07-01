import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Home,
  Factory,
  Paintbrush,
  Hammer,
  Shield,
  Clock,
  Award,
  Phone,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Users,
  Star,
  Trophy,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      description:
        "Custom homes, apartments, and residential complexes built with premium materials and modern design principles.",
      icon: Home,
      features: [
        "Custom Home Design",
        "Apartment Complexes",
        "Villa Construction",
        "Interior Design",
        "Landscaping",
        "Smart Home Integration",
      ],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      pricing: "Starting from ₹2,500/sq ft",
    },
    {
      title: "Commercial Construction",
      description:
        "Office buildings, retail spaces, and commercial complexes designed for modern business requirements.",
      icon: Building2,
      features: [
        "Office Buildings",
        "Retail Complexes",
        "Hotels & Restaurants",
        "Educational Institutions",
        "Healthcare Facilities",
        "Mixed-Use Developments",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      pricing: "Starting from ₹3,000/sq ft",
    },
    {
      title: "Industrial Construction",
      description:
        "Manufacturing facilities, warehouses, and industrial complexes with specialized infrastructure requirements.",
      icon: Factory,
      features: [
        "Manufacturing Units",
        "Warehouses",
        "Cold Storage",
        "Logistics Centers",
        "Power Plants",
        "Industrial Parks",
      ],
      image:
        "https://images.unsplash.com/photo-1565515636369-4b71e38fef1a?w=600&q=80",
      pricing: "Starting from ₹1,800/sq ft",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Complete renovation services to transform existing spaces with modern design and improved functionality.",
      icon: Hammer,
      features: [
        "Complete Renovations",
        "Kitchen Remodeling",
        "Bathroom Upgrades",
        "Office Makeovers",
        "Heritage Restoration",
        "Space Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      pricing: "Starting from ₹1,200/sq ft",
    },
    {
      title: "Interior Design",
      description:
        "Comprehensive interior design solutions that blend aesthetics with functionality for all types of spaces.",
      icon: Paintbrush,
      features: [
        "Space Planning",
        "Furniture Design",
        "Lighting Design",
        "Color Consultation",
        "Custom Furnishing",
        "3D Visualization",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      pricing: "Starting from ₹800/sq ft",
    },
    {
      title: "Project Management",
      description:
        "End-to-end project management services ensuring timely delivery, quality control, and budget adherence.",
      icon: Shield,
      features: [
        "Project Planning",
        "Quality Control",
        "Timeline Management",
        "Budget Control",
        "Safety Management",
        "Client Communication",
      ],
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      pricing: "5-8% of project cost",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description:
        "Initial consultation to understand your requirements, site analysis, and project planning.",
    },
    {
      step: "02",
      title: "Design & Approval",
      description:
        "Architectural design, 3D visualization, and obtaining necessary approvals and permits.",
    },
    {
      step: "03",
      title: "Construction",
      description:
        "Quality construction with regular monitoring, safety compliance, and progress updates.",
    },
    {
      step: "04",
      title: "Handover & Support",
      description:
        "Final inspection, project handover, and ongoing maintenance support.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Proven track record in construction industry",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals and certified experts",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes and quality materials",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "98% projects completed on scheduled time",
    },
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
                className="text-primary font-medium border-b-2 border-primary pb-1"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors"
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
                Our Services
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-7xl font-bold mb-8"
            >
              Comprehensive{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Construction
              </motion.span>{" "}
              Solutions
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl max-w-4xl mx-auto leading-relaxed"
            >
              From residential homes to commercial complexes, we provide
              end-to-end construction services with unmatched quality and
              expertise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-accent to-orange-500 text-white mb-8 px-6 py-3 shadow-lg">
              What We Do
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We offer a comprehensive range of construction services tailored
              to meet your specific requirements and exceed your expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden service-card h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute top-6 left-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <service.icon className="w-8 h-8 text-primary" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-8">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-accent">
                          {service.pricing}
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center text-primary font-medium cursor-pointer"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-8 px-6 py-3 shadow-lg">
              Our Process
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our systematic approach ensures quality delivery and client
              satisfaction at every stage of the project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-500 h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                    >
                      <span className="text-2xl font-bold text-white">
                        {step.step}
                      </span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-accent to-orange-500 text-white mb-8 px-6 py-3 shadow-lg">
              Why Choose Us
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              What Makes Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Different
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-xl transition-all shadow-lg"
                >
                  <item.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-8 px-6 py-3 shadow-lg">
                Our Commitment
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Quality Guarantee &
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {" "}
                  After-Sales Support
                </motion.span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We stand behind our work with comprehensive warranties and
                ongoing support to ensure your complete satisfaction long after
                project completion.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {[
                  {
                    icon: Shield,
                    title: "5-Year Warranty",
                    desc: "Comprehensive warranty on structure and materials",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Support",
                    desc: "Round-the-clock customer service and maintenance",
                  },
                  {
                    icon: Star,
                    title: "Quality Materials",
                    desc: "Premium grade materials from certified suppliers",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    desc: "Certified professionals and skilled craftsmen",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-lg"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-xl px-8 py-4 text-lg rounded-xl">
                  <Zap className="mr-3 w-5 h-5" />
                  Request Service Quote
                  <ChevronRight className="ml-3 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80"
                  alt="Quality construction work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Trophy className="w-12 h-12 text-accent" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl">
                      ISO 9001:2015
                    </div>
                    <div className="text-gray-600">
                      Quality Management Certified
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-white mb-8">
              Ready to Start Your
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {" "}
                Construction Project?
              </motion.span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get a free consultation and quote for your construction needs.
              Let's build something amazing together.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-10 py-6 text-lg rounded-xl shadow-2xl"
                >
                  <Sparkles className="mr-3 w-5 h-5" />
                  Get Free Consultation
                  <ChevronRight className="ml-3 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-6 text-lg rounded-xl"
                >
                  <Phone className="mr-3 w-5 h-5" />
                  Call Now
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
          </div>
        </div>
      </footer>
    </div>
  );
}
