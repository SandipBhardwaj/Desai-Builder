import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Building2,
  Users,
  Trophy,
  Target,
  Eye,
  Heart,
  Phone,
  Mail,
  Linkedin,
  Award,
  CheckCircle,
  Sparkles,
  Zap,
} from "lucide-react";

export default function About() {
  const leadership = [
    {
      name: "Rajesh Desai",
      position: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
      bio: "With 30+ years of experience in construction, Rajesh founded Desai Builders with a vision to transform India's construction landscape.",
    },
    {
      name: "Priya Desai",
      position: "Managing Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80",
      bio: "Priya brings expertise in project management and client relations, ensuring every project meets the highest standards.",
    },
    {
      name: "Amit Sharma",
      position: "Chief Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
      bio: "Amit leads our design team with innovative architectural solutions that blend functionality with aesthetic excellence.",
    },
    {
      name: "Meera Patel",
      position: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
      bio: "Meera oversees all construction operations, ensuring projects are delivered on time and within budget.",
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description:
        "Rajesh Desai established Desai Builders with a small team and big dreams.",
    },
    {
      year: "2002",
      title: "First Major Project",
      description:
        "Completed our first residential complex with 50 units in Mumbai.",
    },
    {
      year: "2008",
      title: "Commercial Expansion",
      description:
        "Entered commercial construction with our first office building project.",
    },
    {
      year: "2012",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001:2008 certification for quality management systems.",
    },
    {
      year: "2015",
      title: "Green Building Pioneer",
      description: "Launched our first LEED certified green building project.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Implemented BIM technology and digital project management systems.",
    },
    {
      year: "2023",
      title: "Industry Excellence",
      description:
        "Awarded 'Best Construction Company' by Maharashtra Building Council.",
    },
    {
      year: "2024",
      title: "500+ Projects",
      description:
        "Milestone achievement of completing over 500 successful projects.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001:2007 Safety Management",
    "IGBC Green Building Certified",
    "CREDAI Membership",
    "Maharashtra PWD License",
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
                className="text-primary font-medium border-b-2 border-primary pb-1"
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
                About Desai Builders
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-7xl font-bold mb-8"
            >
              Building Dreams Since{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                1998
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl max-w-4xl mx-auto leading-relaxed"
            >
              For over 25 years, we've been committed to creating exceptional
              spaces that enhance lives and transform communities across India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-8 px-6 py-3 shadow-lg">
                Our Story
              </Badge>
              <h2 className="text-6xl font-bold text-gray-900 mb-10 leading-tight">
                From Humble Beginnings to
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {" "}
                  Industry Leaders
                </motion.span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 1998 by Rajesh Desai, our company began with a simple
                yet powerful vision: to build structures that stand the test of
                time while creating lasting value for our clients and
                communities.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                What started as a small construction firm has grown into one of
                Maharashtra's most trusted building companies, completing over
                500 projects and earning the loyalty of more than 1000 satisfied
                clients.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  {
                    icon: Award,
                    title: "25+ Awards",
                    desc: "Industry Recognition",
                  },
                  {
                    icon: Users,
                    title: "50+ Team",
                    desc: "Expert Professionals",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
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
                  Learn More About Us
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
                  alt="Construction team meeting"
                  className="w-full h-[600px] object-cover"
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
                      Excellence Award
                    </div>
                    <div className="text-gray-600">
                      Best Construction Company 2023
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-accent to-orange-500 text-white mb-8 px-6 py-3 shadow-lg">
              Our Foundation
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Mission, Vision &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Values
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: "Mission",
                content:
                  "To deliver exceptional construction projects that exceed client expectations through innovation, quality craftsmanship, and sustainable building practices.",
              },
              {
                icon: Eye,
                title: "Vision",
                content:
                  "To be India's most trusted construction company, known for transforming architectural visions into reality while building sustainable communities.",
              },
              {
                icon: Heart,
                title: "Values",
                content:
                  "Integrity, Excellence, Innovation, Safety, and Customer satisfaction form the cornerstone of everything we do in our construction projects.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
                    >
                      <item.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
            <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-8 px-6 py-3 shadow-lg">
              Leadership Team
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                Expert Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our experienced leadership team brings decades of expertise in
              construction, architecture, and project management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center team-card h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative mb-6"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-600 mb-6">{member.bio}</p>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:bg-primary/5 rounded-full"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-accent to-orange-500 text-white mb-8 px-6 py-3 shadow-lg">
              Our Journey
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Company{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Milestones
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Key achievements and milestones that have shaped our journey over
              the past 25 years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <Card className="relative hover:shadow-xl transition-all duration-500 h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                      >
                        <span className="text-white font-bold text-lg">
                          {milestone.year.slice(-2)}
                        </span>
                      </motion.div>
                      <div className="text-3xl font-bold text-accent mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-8 px-6 py-3 shadow-lg">
              Certifications
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Licenses &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our commitment to quality and safety is validated by industry
              certifications and professional affiliations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0"
                >
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </motion.div>
                <span className="text-gray-900 font-medium text-lg">
                  {cert}
                </span>
              </motion.div>
            ))}
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
              Ready to Work With{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Industry Leaders?
              </motion.span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's discuss your construction project and see how our experience
              and expertise can bring your vision to life.
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
                  Start Your Project
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
                  Contact Us
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
