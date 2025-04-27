"use client";
import React from "react";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";

import {
  Users,
  MapPin,
  BarChart2,
  LayoutTemplate,
  Zap,
  Globe2,
  BadgeCheck,
  ShoppingCart,
  PackageCheck,
  Handshake,
  Truck,
  Star,
  Search,
  Amazon,
  Store,
  List,
  Building2,
  ShoppingBag,
  Target,
  Share2,
  RefreshCw,
  Mic,
  Tv,
  Mail,
  Youtube,
  DollarSign,
  Facebook,
  Code2,
  Palette,
  Accessibility,
  PenSquare,
  Layers,
  DraftingCompass,
  FileText,
  Video,
  Smartphone,
  Contact2,
  Cpu,
  Cloud,
  FolderGit2,
  Phone,
  Headset,
  ClipboardList,
  Briefcase,
  PhoneIncoming,
  ShieldCheck,
  UserCog,
  UserPlus,
  Lightbulb,
  RefreshCcwDot,
  GraduationCap,
  Network,
  ChartNoAxesCombined,
  Cog,
  Package,
  Heart,
  Award,
  UserCircle2,
  HelpCircle,
} from "lucide-react";

import MobMenu from "./MobMenu";

const Header = () => {
  const Menus = [
    {
      id: 1,
      name: "SEO & Lead Generation",
      subMenuHeading: [
        "Organic Search",
        "E-commerce",
        "Third-Party Placements",
      ],
      subMenu: [
        {
          name: "Search Engine Optimization",
          desc: "Boost online visibility",
          icon: BarChart2,
          link: "/Search-Engine-Optimization",
        },
        {
          name: "Local Search Optimization",
          desc: "Dominate local searches",
          icon: MapPin,
          link: "/Local-Search-Optimization",
        },
        {
          name: "Landing Page Optimization",
          desc: "Maximize conversion rates",
          icon: LayoutTemplate,
          link: "/Landing-Page-Optimization",
        },
        {
          name: "SEO for Leads",
          desc: "Generate quality leads",
          icon: Zap,
          link: "/seo-for-leads",
        },
        {
          name: "Enterprise Level Reach",
          desc: "Scale business growth",
          icon: Globe2,
          link: "/enterprise-level-reach",
        },
        {
          name: "Brand Optimization",
          desc: "Strengthen brand presence",
          icon: BadgeCheck,
          link: "/brand-optimization",
        },
        {
          name: "Shop & Order Outreach",
          desc: "Expand customer base",
          icon: ShoppingCart,
          link: "/shop-order-outreach",
        },
        {
          name: "Local Order Management",
          desc: "Streamline local orders",
          icon: PackageCheck,
          link: "/local-order-management",
        },
        {
          name: "B2B E-commerce enabling",
          desc: "Enable B2B commerce",
          icon: Handshake,
          link: "/b2b-e-commerce-enabling",
        },
        {
          name: "E-commerce Drop-shipping",
          desc: "Simplify order fulfillment",
          icon: Truck,
          link: "/drop-shipping",
        },
        {
          name: "Yelp Optimization",
          desc: "Enhance Yelp presence",
          icon: Star,
          link: "/yelp-optimization",
        },
        {
          name: "Bing & Yahoo Optimization",
          desc: "Expand search reach",
          icon: Search,
          link: "/bing-yahoo-optimization",
        },
        {
          name: "SEO for Amazon",
          desc: "Dominate Amazon rankings",
          icon: Building2,
          link: "/seo-for-amazon",
        },
        {
          name: "SEO for Walmart",
          desc: "Boost Walmart visibility",
          icon: Store,
          link: "/seo-for-walmart",
        },
        {
          name: "Listings & Directories",
          desc: "Manage online listings",
          icon: List,
          link: "/listings-directories",
        },
      ],

      gridCols: 3,
    },
    {
      id: 2,
      name: "Paid Marketing Media & CRO",
      subMenuHeading: [
        "Digital Advertisement",
        "Marketing Outreach",
        "Commerce Platforms",
      ],
      subMenu: [
        { name: "PPC & Ads", desc: "Targeted ad campaigns", icon: ShoppingBag, link: "/paid-media-advertisement", },
        {
          name: "Facebook Lead Generation",
          desc: "Capture Facebook leads",
          icon: Target,
          link: "/facebook-lead-generation",
        },
        {
          name: "B2B Advertisement",
          desc: "Business-to-business ads",
          icon: Users,
          link: "/B2B-advertisement",
        },
        {
          name: "Social Media Campaigning",
          desc: "Boost social engagement",
          icon: Share2,
          link:'/paid-media-advertisement',
        },
        {
          name: "360 Lead Nurture",
          desc: "Nurture leads effectively",
          icon: RefreshCw,
          link:'/360-lead-nurture',
        },
        {
          name: "Influencer Marketing",
          desc: "Leverage influencer reach",
          icon: Mic,
          link:'/influencer-marketing',
        },
        { name: "TV Advertisement", desc: "Broadcast TV ads", icon: Tv,  link:'/tv-advertisement', },
        { name: "Email Marketing", desc: "Engage via email", icon: Mail ,  link:'/email-marketing',},
        {
          name: "Youtube Advertisement",
          desc: "Monetize YouTube ads",
          icon: Youtube,
          link:'/youtube-advertisement',
        },
        {
          name: "Media Buying & Advertisement",
          desc: "Optimize ad spend",
          icon: DollarSign,
          link:'/media-buying-advertisement',
        },
        { name: "Yelp Advertisement", desc: "Promote on Yelp", icon: Star,  link:'/yelp-advertisement', },
        { name: "Amazon Marketplace", desc: "Sell on Amazon", icon: Building2,  link:'/Amazon Marketplace', },
        { name: "Walmart Marketplace", desc: "Expand on Walmart", icon: Store,  link:'/walmart-marketplace', },
        {
          name: "Facebook Marketplace",
          desc: "Sell on Facebook",
          icon: Facebook,
          link:'/facebook-marketplace',
        },
        {
          name: "Commerce Credibility",
          desc: "Build trust fast",
          icon: BadgeCheck,
          link:'/commerce-credibility',
        },
      ],
      gridCols: 3,
    },
    {
      id: 3,
      name: " IT & Development Technology",
      subMenuHeading: [
        "Website Solution",
        "Design & Development",
        "IT Solutions",
      ],
      subMenu: [
        { 
          name: "Wordpress Website Development", 
          desc: "Custom WP sites", 
          icon: LayoutTemplate,  
          link: '/wordpress-website-development' 
        },
        {
          name: "E-Commerce Solution",
          desc: "Online store setup",
          icon: ShoppingCart,
          link: '/e-commerce-website-development',
        },
        {
          name: "PHP Programming Development",
          desc: "Backend solutions",
          icon: Code2,
          link: '/php-programming-development',
        },
        {
          name: "E-commerce Website Design",
          desc: "Storefront design",
          icon: Palette,
          link: '/e-commerce-website-design',
        },
        {
          name: "360 Lead Nurture",
          desc: "Lead management",
          icon: RefreshCw,
          link: '/360-lead-nurture',
        },
        {
          name: "ADA Compliance Services",
          desc: "Accessibility compliance",
          icon: Accessibility,
          link: '/ada-compliance-services',
        },
        { 
          name: "Logo Development", 
          desc: "Brand identity", 
          icon: PenSquare, 
          link: '/logo'
        },
        { 
          name: "Branding Theme Development", 
          desc: "Visual identity", 
          icon: Layers, 
          link: '/branding-theme-development' 
        },
        {
          name: "Video Branding Services",
          desc: "Promotional videos",
          icon: Youtube,
          link: '/video-branding-services',
        },
        {
          name: "Interactive UI/UX",
          desc: "User experience",
          icon: DraftingCompass,
          link: '/ui-ux',
        },
        { 
          name: "SEO Content Development", 
          desc: "Optimized content", 
          icon: FileText,
          link: '/seo-content-development' 
        },
        { 
          name: "Video Production", 
          desc: "Professional videos", 
          icon: Video,
          link: '/video-production' 
        },
        { 
          name: "App Development", 
          desc: "Mobile solutions", 
          icon: Smartphone, 
          link: '/app-development' 
        },
        {
          name: "CRM Generation",
          desc: "Customer management",
          icon: Contact2,
          link: '/crm',
        },
        {
          name: "AI-Monitoring & Integration",
          desc: "Smart systems",
          icon: Cpu,
          link: '/ai-monitoring-integration',
        },
        {
          name: "Cloud Hosting Solutions",
          desc: "Web hosting",
          icon: Cloud,
          link: '/cloud-hosting-solutions',
        },
        {
          name: "CMS Solution",
          desc: "Content management",
          icon: FolderGit2,
          link: '/software-development',
        },
      ],
      gridCols: 3,
    },
    {
      id: 4,
      name: "Business Servicing & Management",
      subMenuHeading: [
        "BPO Services",
        "Human Resources",
        "Consulations",
      ],
      subMenu: [
        { 
          name: "Call Center", 
          desc: "24/7 support", 
          icon: Phone,  
          link: '/call-centers' 
        },
        {
          name: "Customer Service",
          desc: "Client support",
          icon: Headset,
          link: '/customer-service',
        },
        {
          name: "Back Office",
          desc: "Operations support",
          icon: ClipboardList,
          link: '/back-office',
        },
        {
          name: "Consulting",
          desc: "Expert guidance",
          icon: Briefcase,
          link: '/consulting',
        },
        {
          name: "Inbound Development",
          desc: "Call management",
          icon: PhoneIncoming,
          link: '/inbound-development',
        },
        {
          name: "Staffing",
          desc: "Team building",
          icon: Users,
          link: '/staffing',
        },
        { 
          name: "Recruiting", 
          desc: "Talent acquisition", 
          icon: Search, 
          link: '/recruiting'
        },
        { 
          name: "Benefits Consulting", 
          desc: "Employee benefits", 
          icon: ShieldCheck, 
          link: '/benefits-consulting' 
        },
        {
          name: "HR Consulting",
          desc: "HR solutions",
          icon: UserCog,
          link: '/hr-consulting',
        },
        {
          name: "HR Outsourcing",
          desc: "HR management",
          icon: UserPlus,
          link: '/hr-outsourcing',
        },
        { 
          name: "Business Consultants", 
          desc: "Strategic advice", 
          icon: Lightbulb,
          link: '/business-consultants' 
        },
        { 
          name: "Change Management", 
          desc: "Transition support", 
          icon: RefreshCcwDot,
          link: '/change-management' 
        },
        { 
          name: "Strategy Development", 
          desc: "Growth planning", 
          icon: ChartNoAxesCombined, 
          link: '/strategy-development' 
        },
        {
          name: "Corporate Training",
          desc: "Skill development",
          icon: GraduationCap,
          link: '/corporate-training',
        },
        {
          name: "Association Management",
          desc: "Organization leadership",
          icon: Network,
          link: '/association-management',
        },
      ],
      gridCols: 3,
    },
    {
      id: 5,
      name: "Who We Are",
      subMenuHeading: [
        "About Us",
        "Careers",
      ],
      subMenu: [
        { 
          name: "Who we are", 
          desc: "Our story", 
          icon: Users,  
          link: '/Who-We-Are' 
        },
        { 
          name: "How-It-Works", 
          desc: "Our process", 
          icon: Cog,  
          link: '/How-It-Works' 
        },
        { 
          name: "Packages", 
          desc: "Our offerings", 
          icon: Package,  
          link: '/packages' 
        },
        { 
          name: "Accreditations", 
          desc: "Our credentials", 
          icon: ShieldCheck,  
          link: '/accreditations' 
        },
        { 
          name: "Company Values", 
          desc: "Our principles", 
          icon: Heart,  
          link: '/company-values' 
        },
        { 
          name: "Company Excellence", 
          desc: "Our achievements", 
          icon: Award,  
          link: '/company-excellence' 
        },
        { 
          name: "Our Team", 
          desc: "Meet us", 
          icon: UserCircle2,  
          link: '/our-team' 
        },
        { 
          name: "How to be a part of Forwords sols", 
          desc: "Join us", 
          icon: Handshake,  
          link: '/forwords-sols' 
        },
        { 
          name: "FAQs", 
          desc: "Get answers", 
          icon: HelpCircle,  
          link: '/FAQs' 
        },
        { 
          name: "We are hiring!", 
          desc: "Careers", 
          icon: Briefcase,  
          link: '/we-are-hiring' 
        },
        { 
          name: "Heirarchy & Positioning", 
          desc: "Our structure", 
          icon: Layers,  
          link: '/heirarchy-positioning' 
        },
       
      ],
      gridCols: 2,
    },
  ];

  return (
    <div>
      <div className="w-full top-0 left-0 absolute flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10  text-white z-50">
        <div className="flex items-center gap-4 max-sm:w-full max-sm:justify-between">
          <div className="flex items-center">
            <Link href={`/`} className=" w-40 max-sm:w-50 h-5">
              <img src="/dev/images/logo.svg" alt="Logo" className="w-full" />
            </Link>
          </div>
          <ul className="flex gap-2 max-sm:hidden">
            {Menus.map((menu) => (
              <DesktopMenu key={menu.id} menu={menu} />
            ))}
          </ul>

          <div className="flex-center gap-x-5">
            <div className="lg:hidden">
              <MobMenu  Menus={Menus} />
            </div>
          </div>
        </div>

        <div></div>

        <div>
          <Link href="/contact">
            <div className="relative inline-block group max-sm:hidden min-w-[174px]">
              <button className="relative z-20 text-white px-8 py-4 max-sm:px-6 max-sm:py-3 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                <span className="relative z-20 -10">Book a Demo</span>

                <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
              </button>
              <img
                src="/dev/images/left top.svg"
                alt=""
                className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-21 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
              <img
                src="/dev/images/right top.svg"
                alt=""
                className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-21 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
              />
              <img
                src="/dev/images/left bottom.svg"
                alt=""
                className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-21 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <img
                src="/dev/images/right bottom.svg"
                alt=""
                className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-21 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
