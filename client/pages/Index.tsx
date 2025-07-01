import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  Building2,
  Users,
  Trophy,
  Clock,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Zap,
  Sparkles,
} from "lucide-react";

// Floating particles component
const FloatingParticles = () => {
  const [dimensions, setDimensions] = React.useState({
    width: 1200,
    height: 800,
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
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
  );
};

// Animated counter component
const AnimatedCounter = ({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "Modern Corporate Tower",
      location: "Mumbai, Maharashtra",
      type: "Commercial",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    },
    {
      id: 2,
      title: "Luxury Residential Complex",
      location: "Pune, Maharashtra",
      type: "Residential",
      status: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    },
    {
      id: 3,
      title: "Shopping Mall Renovation",
      location: "Bangalore, Karnataka",
      type: "Renovation",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Sharma Industries",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      text: "Desai Builders delivered our corporate headquarters on time and within budget. Their attention to detail and professionalism is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      company: "Residential Client",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
      text: "Our dream home became reality thanks to Desai Builders. The quality of construction and customer service exceeded our expectations.",
      rating: 5,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      rotateY: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Loading animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
        style={{ pointerEvents: isLoaded ? "none" : "auto" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
        />
      </motion.div>

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
              {["Home", "About Us", "Projects", "Services", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About Us"
                          ? "/about"
                          : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className={`relative ${
                      item === "Home"
                        ? "text-primary font-medium"
                        : "text-gray-700 hover:text-primary"
                    } transition-colors`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    {item === "Home" && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </motion.a>
                ),
              )}
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
      <section className="relative h-screen overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
            alt="Construction site with modern building"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.h1
                variants={itemVariants}
                className="text-7xl font-bold text-white mb-8 leading-tight"
              >
                Building Your Vision,
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Creating Legacies
                </motion.span>
              </motion.h1>

              <div className="flex flex-col items-start" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-10"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-accent text-white px-10 py-6 text-lg rounded-xl shadow-2xl"
                >
                  <Zap className="mr-3 w-5 h-5" />
                  Explore Our Projects
                  <ChevronRight className="ml-3 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl"
              >
                From residential complexes to commercial towers, we bring
                architectural dreams to life with unmatched quality, innovative
                design, and reliable execution.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-6 right-6 z-20"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: 500, label: "Projects Completed", suffix: "+" },
                { number: 25, label: "Years Experience", suffix: "+" },
                { number: 1000, label: "Happy Clients", suffix: "+" },
                { number: 50, label: "Expert Team", suffix: "+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Company Introduction */}
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
                About Desai Builders
              </Badge>
              <h2 className="text-6xl font-bold text-gray-900 mb-10 leading-tight">
                Building Tomorrow's
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {" "}
                  Infrastructure Today
                </motion.span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Established in 1998, Desai Builders has been at the forefront of
                India's construction revolution. We specialize in residential,
                commercial, and industrial projects, combining traditional
                craftsmanship with cutting-edge technology.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  {
                    icon: Building2,
                    title: "Premium Quality",
                    desc: "ISO certified processes",
                  },
                  {
                    icon: Clock,
                    title: "On-Time Delivery",
                    desc: "98% projects on schedule",
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
                  Learn More About Us
                  <ArrowRight className="ml-3 w-5 h-5" />
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                  alt="Construction team at work"
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

      {/* Featured Projects */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-accent to-orange-500 text-white mb-8 px-6 py-3 shadow-lg">
              Our Portfolio
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover our latest completed and ongoing projects that showcase
              our commitment to excellence and innovation in construction.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
              >
                <Card className="group overflow-hidden cursor-pointer h-full bg-white shadow-xl border-0 rounded-2xl">
                  <CardContent className="p-0 h-full">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="absolute top-6 left-6"
                      >
                        <Badge
                          className={`${
                            project.status === "Completed"
                              ? "bg-green-500"
                              : "bg-blue-500"
                          } shadow-lg`}
                        >
                          {project.status}
                        </Badge>
                      </motion.div>
                      <div className="absolute top-6 right-6">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 backdrop-blur-sm shadow-lg"
                        >
                          {project.type}
                        </Badge>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center"
                      >
                        <Button
                          variant="outline"
                          className="mb-6 border-white text-white hover:bg-white hover:text-gray-900"
                        >
                          View Details
                        </Button>
                      </motion.div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.location}</p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-primary font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-xl px-10 py-4 text-lg rounded-xl">
              View All Projects
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
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
              Our Services
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                Construction
              </span>{" "}
              Solutions
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Building2,
                title: "Residential",
                desc: "Luxury homes and residential complexes",
              },
              {
                icon: Building2,
                title: "Commercial",
                desc: "Office buildings and commercial spaces",
              },
              {
                icon: Building2,
                title: "Renovation",
                desc: "Modern upgrades and restorations",
              },
              {
                icon: Building2,
                title: "Interior Design",
                desc: "Complete interior solutions",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all"
                >
                  <service.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <FloatingParticles />
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
                Dream Project?
              </motion.span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's discuss your construction needs and turn your vision into
              reality with our expert team and proven track record.
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
