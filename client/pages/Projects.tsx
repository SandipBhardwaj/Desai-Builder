import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  Phone,
  ArrowRight,
  ExternalLink,
  Download,
  Filter,
  Sparkles,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Skyline Corporate Tower",
      location: "Bandra Kurla Complex, Mumbai",
      type: "Commercial",
      status: "Completed",
      year: "2023",
      area: "2.5 Lakh sq ft",
      client: "Tech Solutions Inc.",
      budget: "₹85 Crores",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      description:
        "A 25-story modern office complex featuring sustainable design and state-of-the-art facilities for corporate clients.",
      features: [
        "LEED Gold Certified",
        "25 Floors",
        "3 Level Parking",
        "Modern Amenities",
      ],
    },
    {
      id: 2,
      title: "Green Valley Residency",
      location: "Wakad, Pune",
      type: "Residential",
      status: "Completed",
      year: "2023",
      area: "5 Lakh sq ft",
      client: "Private Development",
      budget: "₹120 Crores",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      description:
        "Luxury residential complex with 200 apartments featuring modern amenities and eco-friendly design principles.",
      features: [
        "200 Apartments",
        "Swimming Pool",
        "Clubhouse",
        "Landscaped Gardens",
      ],
    },
    {
      id: 3,
      title: "Metro Mall Renovation",
      location: "Phoenix Mall, Bangalore",
      type: "Renovation",
      status: "Completed",
      year: "2022",
      area: "3 Lakh sq ft",
      client: "Phoenix Group",
      budget: "₹45 Crores",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
      description:
        "Complete renovation of existing shopping mall with modern interiors, upgraded infrastructure, and enhanced customer experience.",
      features: [
        "Complete Renovation",
        "Modern Interiors",
        "Food Court Upgrade",
        "Energy Efficient",
      ],
    },
    {
      id: 4,
      title: "Smart City Hospital",
      location: "Gurgaon, Haryana",
      type: "Commercial",
      status: "Ongoing",
      year: "2024",
      area: "4 Lakh sq ft",
      client: "Healthcare Ventures Ltd.",
      budget: "₹200 Crores",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
      description:
        "State-of-the-art medical facility with advanced healthcare technology and patient-centric design features.",
      features: [
        "500 Bed Capacity",
        "Advanced ICU",
        "Modern OT Complex",
        "Digital Infrastructure",
      ],
    },
    {
      id: 5,
      title: "Heritage Villa Restoration",
      location: "Bhopal, Madhya Pradesh",
      type: "Renovation",
      status: "Ongoing",
      year: "2024",
      area: "15,000 sq ft",
      client: "Heritage Foundation",
      budget: "₹8 Crores",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      description:
        "Restoration of 100-year-old heritage villa while preserving historical architecture and adding modern amenities.",
      features: [
        "Heritage Preservation",
        "Modern Amenities",
        "Architectural Restoration",
        "Landscape Design",
      ],
    },
    {
      id: 6,
      title: "Tech Park Phase 2",
      location: "Electronic City, Bangalore",
      type: "Commercial",
      status: "Upcoming",
      year: "2025",
      area: "8 Lakh sq ft",
      client: "InfoTech Solutions",
      budget: "₹350 Crores",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      description:
        "Expansion of existing tech park with modern office spaces, recreational facilities, and sustainable infrastructure.",
      features: [
        "Smart Building Technology",
        "Green Building Design",
        "Recreation Center",
        "Metro Connectivity",
      ],
    },
    {
      id: 7,
      title: "Riverside Apartments",
      location: "Kochi, Kerala",
      type: "Residential",
      status: "Upcoming",
      year: "2025",
      area: "6 Lakh sq ft",
      client: "Residential Developers",
      budget: "₹180 Crores",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      description:
        "Luxury waterfront residential project with panoramic river views and premium amenities for modern living.",
      features: [
        "Waterfront Location",
        "300 Luxury Units",
        "Marina Access",
        "Resort-style Amenities",
      ],
    },
    {
      id: 8,
      title: "Industrial Hub Expansion",
      location: "Aurangabad, Maharashtra",
      type: "Industrial",
      status: "Ongoing",
      year: "2024",
      area: "10 Lakh sq ft",
      client: "Manufacturing Corp",
      budget: "₹150 Crores",
      image:
        "https://images.unsplash.com/photo-1565515636369-4b71e38fef1a?w=600&q=80",
      description:
        "Large-scale industrial facility expansion with modern manufacturing units and logistics infrastructure.",
      features: [
        "Manufacturing Units",
        "Logistics Hub",
        "Administrative Block",
        "Quality Control Labs",
      ],
    },
  ];

  const filterOptions = [
    "All",
    "Completed",
    "Ongoing",
    "Upcoming",
    "Residential",
    "Commercial",
    "Renovation",
    "Industrial",
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.status === selectedFilter || project.type === selectedFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Ongoing":
        return "bg-blue-500";
      case "Upcoming":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

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
                className="text-primary font-medium border-b-2 border-primary pb-1"
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
                Our Portfolio
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-7xl font-bold mb-8"
            >
              Our{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Projects
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl max-w-4xl mx-auto leading-relaxed"
            >
              Explore our diverse portfolio of successful construction projects
              across residential, commercial, and industrial sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 500, label: "Total Projects", color: "text-primary" },
              { number: 450, label: "Completed", color: "text-green-500" },
              { number: 35, label: "Ongoing", color: "text-blue-500" },
              { number: 15, label: "Upcoming", color: "text-orange-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`text-5xl font-bold ${stat.color} mb-3`}>
                  {stat.number}+
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Filter className="w-6 h-6 text-primary" />
              <span className="font-semibold text-gray-900 text-lg">
                Filter Projects:
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => (
                <motion.div key={option} whileHover={{ scale: 1.05 }}>
                  <Button
                    variant={selectedFilter === option ? "default" : "outline"}
                    size="sm"
                    className={
                      selectedFilter === option
                        ? "bg-gradient-to-r from-primary to-accent hover:shadow-lg"
                        : "hover:border-primary hover:text-primary"
                    }
                    onClick={() => setSelectedFilter(option)}
                  >
                    {option}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group overflow-hidden cursor-pointer project-card h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="absolute top-6 left-6"
                      >
                        <Badge
                          className={`${getStatusColor(
                            project.status,
                          )} shadow-lg`}
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
                      <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 mb-4">
                        <Calendar className="w-5 h-5 text-accent" />
                        <span>{project.year}</span>
                        <span className="text-gray-400">•</span>
                        <span>{project.area}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center text-primary font-medium cursor-pointer"
                        >
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.div>
                        <span className="text-lg font-bold text-accent">
                          {project.budget}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-6">
                <Building2 className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                No projects found
              </h3>
              <p className="text-gray-600 text-lg">
                Try adjusting your filter to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Project Detail */}
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
              Featured Project
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                Spotlight
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-green-500 text-white mb-8 px-6 py-3 shadow-lg">
                Recently Completed
              </Badge>
              <h3 className="text-5xl font-bold text-gray-900 mb-8">
                Skyline Corporate Tower
              </h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our flagship commercial project in Mumbai's business district
                features cutting-edge design, sustainable technology, and
                world-class amenities. This 25-story tower sets new standards
                for corporate architecture in India.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    Project Details
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Location: Bandra Kurla Complex
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Total Area: 2.5 Lakh sq ft
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Floors: 25 + 3 Basement
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Completion: March 2023
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    Key Features
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      LEED Gold Certified
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Smart Building Technology
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Premium Office Spaces
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Modern Amenities
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-xl px-8 py-4 text-lg rounded-xl">
                    <ExternalLink className="w-5 h-5 mr-3" />
                    View Gallery
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-xl"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Brochure
                  </Button>
                </motion.div>
              </div>
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                  alt="Skyline Corporate Tower"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ₹85 Cr
                  </div>
                  <div className="text-gray-600">Project Value</div>
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
              Have a Project in{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Mind?
              </motion.span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's discuss your construction requirements and create something
              exceptional together.
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
                  <Zap className="mr-3 w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="ml-3 w-5 h-5" />
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
                  Get Quote
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
