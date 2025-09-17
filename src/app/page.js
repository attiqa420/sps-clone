"use client";
import Customers from "@/components/Customers";
import Hero from "@/components/Hero";
import MiddleBanner from "@/components/MiddleBanner";
import MiddleSection from "@/components/MiddleSection";
import OtherProducts from "@/components/OtherProducts";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import ServiceCard from "@/components/ServiceCard";
import Verticals from "@/components/Verticals";

import services from "@/data/services";
import { useState } from "react";

export default function Home() {
  const [service, setService] = useState(services[1]);

  return (
    <>
      <div className="bg-gray-100">
        <Hero />
        <MiddleSection
          services={services}
          setService={setService}
          activeService={service}
        />
        <ServiceCard service={service} />
        <MiddleBanner
          heading="Our Startups"
          subHeading="Digital solutions we have built for ourselves and our customers"
          desc="We develop AI based solutions for corporate & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT."
        />
        <Products />
        <OtherProducts />
        <Partners />
        <Verticals />
        <MiddleBanner
          heading="We have an award-winning team that includes IBM-certified inventors and champions who have won multiple worldwide competitions."
          desc="As an enterprise-class innovator and solution creator with expertise across all phases of product design, development, deployment, security, operations, monitoring, and support, we have been helping our clients build, deploy and secure applications. Our development, quality, cybersecurity, training, operations, monitoring, and support teams work in tandem to create high-performance, secure, reliable, scalable, and manageable systems."
        />
        <Customers />
      </div>
    </>
  );
}
