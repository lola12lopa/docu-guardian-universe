
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { GlassMorphism } from '@/components/ui/GlassMorphism';
import { FeaturedSection } from '@/components/ui/FeaturedSection';
import {
  BookOpen,
  FileText,
  Search,
  Shield,
  Upload,
  Users,
  ChevronRight,
  ArrowRight,
  Check,
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: 'Document Library',
      description:
        'Access thousands of course documents, study guides, and notes across various subjects and disciplines.',
      icon: FileText,
    },
    {
      title: 'Academic Integrity',
      description:
        'Our moderation system ensures all content adheres to academic integrity policies and ethical guidelines.',
      icon: Shield,
    },
    {
      title: 'Easy Uploads',
      description:
        'Share your study materials with others. Upload documents securely and contribute to our growing knowledge base.',
      icon: Upload,
    },
    {
      title: 'Advanced Search',
      description:
        'Find exactly what you need with our powerful search functionality. Filter by course, subject, document type, and more.',
      icon: Search,
    },
  ];

  const benefits = [
    'Access to thousands of academic resources',
    'Moderated content for academic integrity',
    'Personalized recommendations',
    'Collaborative study environment',
    'Seamless document sharing',
    'Enhanced learning experience',
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Your academic success starts here
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                variants={fadeIn}
              >
                Transform Your <br />
                <span className="text-gradient">Learning Experience</span>
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground mb-8 max-w-lg"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                Access and share academic resources with integrity. 
                Discover study materials, connect with peers, and excel in your courses.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <Link to="/auth/register">
                  <AnimatedButton
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    hoverScale
                    ripple
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </AnimatedButton>
                </Link>
                <Link to="/courses">
                  <AnimatedButton
                    size="lg"
                    variant="outline"
                    className="border-primary/20 text-foreground"
                    hoverScale
                  >
                    Explore Courses
                  </AnimatedButton>
                </Link>
              </motion.div>
              <motion.div
                className="mt-12 flex items-center gap-4"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-medium text-primary"
                    >
                      {['JD', 'ML', 'AK'][i]}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-primary font-medium">10,000+</span> students
                  already joined
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <GlassMorphism className="p-1 lg:p-2" intensity="light">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Students studying"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </GlassMorphism>
              <div className="absolute -bottom-5 -right-5 lg:-bottom-8 lg:-right-8 p-4 lg:p-6 rounded-lg shadow-lg bg-background">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">15,000+ Documents</p>
                    <p className="text-xs text-muted-foreground">Verified academic resources</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
            {[
              { number: '15K+', label: 'Documents' },
              { number: '500+', label: 'Universities' },
              { number: '25K+', label: 'Students' },
              { number: '98%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Elevate Your Academic Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover a comprehensive suite of features designed to enhance your learning
              experience and help you succeed in your academic pursuits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassMorphism 
                  className="h-full p-6 flex flex-col" 
                  intensity="light"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{feature.description}</p>
                  <Link
                    to={`/features/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center mt-4 text-sm text-primary hover:text-primary/80 transition-all"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </GlassMorphism>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <FeaturedSection />

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlassMorphism className="p-1 lg:p-2" intensity="light">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Students collaborating"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </GlassMorphism>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Why Choose CourseGuardian?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're committed to providing a platform that supports academic success while
                maintaining the highest standards of integrity. Our mission is to empower
                students with the resources they need to excel.
              </p>

              <motion.ul
                className="space-y-4"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/auth/register">
                  <AnimatedButton ripple hoverScale>
                    Join Now <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how CourseGuardian has helped students and educators enhance their
              academic experience and achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "CourseGuardian has been a game-changer for my studies. The quality of resources and the moderation system ensure I'm always accessing reliable material.",
                name: 'Alex Johnson',
                role: 'Computer Science Student',
                avatar: 'AJ',
              },
              {
                quote:
                  "As a professor, I appreciate how CourseGuardian maintains academic integrity. It's a platform I can confidently recommend to my students for supplementary resources.",
                name: 'Dr. Sarah Williams',
                role: 'Biology Professor',
                avatar: 'SW',
              },
              {
                quote:
                  "The document library is extensive and well-organized. I've found study materials for even my most obscure courses, which has been incredibly helpful.",
                name: 'Michael Chen',
                role: 'Engineering Student',
                avatar: 'MC',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassMorphism className="h-full p-6" intensity="light">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-500">★</span>
                      ))}
                    </div>
                    <p className="text-foreground italic mb-6 flex-1">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </GlassMorphism>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <GlassMorphism className="p-12 text-center" intensity="medium">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Ready to Transform Your Learning Experience?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of students who are already benefiting from our extensive document 
                library and collaborative learning environment.
              </p>
              <Link to="/auth/register">
                <AnimatedButton size="lg" ripple hoverScale>
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </AnimatedButton>
              </Link>
            </motion.div>
          </GlassMorphism>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
