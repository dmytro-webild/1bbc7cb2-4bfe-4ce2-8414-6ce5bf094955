"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Experience",
          id: "experience",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Events",
          id: "events",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Visit",
          id: "visit",
        },
      ]}
      brandName="SNEAKERS"
      button={{
        text: "Reserve a Table",
        href: "#visit",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Where every big game, bold pour, and late-night chorus feels worth dressing up for."
      description="Abbotsford’s elevated sports lounge. Experience wall-to-wall sports, curated pub classics, and an electric atmosphere."
      buttons={[
        {
          text: "Book Your Night",
          href: "#visit",
        },
        {
          text: "Explore Events",
          href: "#events",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/gradient-night-club-twitter-header_23-2149909671.jpg"
      showDimOverlay={true}
      showBlur={true}
    />
  </div>

  <div id="experience" data-section="experience">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Game Day Atmosphere",
          description: "Wall-to-wall screens and high-energy crowds.",
          tag: "Sports",
        },
        {
          id: "f2",
          title: "Live Nights",
          description: "Karaoke and entertainment after dark.",
          tag: "Social",
        },
        {
          id: "f3",
          title: "Casual Hangs",
          description: "Pool, patio, and good company.",
          tag: "Vibe",
        },
      ]}
      title="The Sneakers Experience"
      description="What makes us a neighbourhood favourite."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Menu",
          name: "Signature Wings",
          price: "18.00",
          rating: 5,
          reviewCount: "100+",
          imageSrc: "http://img.b2bpic.net/free-photo/top-close-view-cooked-bell-peppers-with-fried-sausages-inside-plate-dark-green-surface_140725-61753.jpg",
        },
        {
          id: "p2",
          brand: "Menu",
          name: "Loaded Nachos",
          price: "22.00",
          rating: 5,
          reviewCount: "85+",
          imageSrc: "http://img.b2bpic.net/free-photo/mexican-food_23-2148024791.jpg",
        },
        {
          id: "p3",
          brand: "Menu",
          name: "Steak Bites",
          price: "16.00",
          rating: 4,
          reviewCount: "60+",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sliced-cooked-meat-with-greens-cherry-tomatoes-oil-seasonings-blue-background_140725-58330.jpg",
        },
      ]}
      title="Signature Favourites"
      description="Pub comfort, polished for craving."
    />
  </div>

  <div id="events" data-section="events">
      <MetricCardTen
      animationType="slide-up"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Karaoke",
          subtitle: "Singing nights",
          category: "Event",
          value: "Wed-Sat",
        },
        {
          id: "m2",
          title: "Game Day",
          subtitle: "Live sports",
          category: "Event",
          value: "Daily",
        },
        {
          id: "m3",
          title: "Happy Hour",
          subtitle: "Drink specials",
          category: "Event",
          value: "3-6PM",
        },
      ]}
      title="Weekly Rituals"
      description="Programming that pulls people in."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Perfect Spot",
          quote: "Energetic but comfortable. A perfect spot to relax, watch games, and enjoy the atmosphere.",
          name: "Local Guest",
          role: "Patron",
          imageSrc: "http://img.b2bpic.net/free-photo/people-ethnicity-spare-time-positive-emotions-concept-pleased-young-african-american-female-with-bushy-hairdo_273609-3182.jpg",
        },
        {
          id: "t2",
          title: "Buzzing!",
          quote: "Great karaoke setup. Quiet on weekdays, buzzing on weekends.",
          name: "Weekend Regular",
          role: "Patron",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-happy-cheerful-middle-aged-woman-surfing-internet-portable-computer-attractive-mature-businesswoman-elegant-shirt-working-remotely-laptop-people-age-technology_343059-2250.jpg",
        },
        {
          id: "t3",
          title: "Hidden Gem",
          quote: "A hidden gem with a warm local vibe, delicious food, and live entertainment.",
          name: "Visitor",
          role: "New Patron",
          imageSrc: "http://img.b2bpic.net/free-photo/people-technology-leisure-concept_273609-6599.jpg",
        },
        {
          id: "t4",
          title: "Great Staff",
          quote: "Service is always top-notch and the vibe is unmatched.",
          name: "Happy Customer",
          role: "Patron",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-two-raised-fingers_1187-1103.jpg",
        },
      ]}
      title="Guest Memories"
      description="Why they come back."
    />
  </div>

  <div id="visit" data-section="visit">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What kind of experience is Sneakers?",
          content: "A lively sports lounge with neighbourhood warmth, strong pub classics, and live entertainment.",
        },
        {
          id: "q2",
          title: "Is it good for groups?",
          content: "Yes, we handle large groups, birthdays, and work socials perfectly.",
        },
        {
          id: "q3",
          title: "What should I order?",
          content: "Start with wings, nachos, or steak bites.",
        },
      ]}
      title="Visit Us"
      description="Everything you need to know."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="SNEAKERS"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Contact Us",
        href: "tel:5550199",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
