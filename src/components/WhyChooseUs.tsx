"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
         {
                  title: "World-Class Faculty with Proven Track Record",
                  description: "Our faculty consists of world-class musicians with a proven track record of excellence in both performance and education. They bring years of professional experience and dedication to the table, ensuring that you receive top-notch instruction tailored to your unique goals and aspirations."
                },
                {
                  title: "Comprehensive Curriculum Tailored to Your Needs",
                  description: "Our comprehensive curriculum is meticulously designed to cater to students of all levels and musical interests. Whether you're a beginner or an advanced musician, we offer personalized lesson plans that address your specific needs and learning objectives."
                },
                {
                  title: "State-of-the-Art Facilities for Unmatched Learning",
                  description: "Step into our state-of-the-art facilities, equipped with the latest technology and instruments, and experience unparalleled learning opportunities. From spacious practice rooms to cutting-edge recording studios, we provide the perfect environment for you to unleash your creativity and achieve your musical aspirations."
                },
                {
                  title: "Community-Focused Learning Environment",
                  description: "Join our vibrant community of musicians and enthusiasts who share your passion for music. Our academy fosters a supportive and inclusive learning environment where students collaborate, inspire, and learn from one another under the guidance of our experienced faculty."
                },
                {
                  title: "Performance Opportunities to Shine",
                  description: "At our academy, we believe that performance is an integral part of musical growth. That's why we offer regular opportunities for our students to showcase their talents in recitals, concerts, and competitions. Whether you're a solo performer or part of an ensemble, we provide a platform for you to shine and gain valuable stage experience."
                }
       ];
       
    
       
export default function WhyChooseUs (){
         return(
         <div className="">
           <StickyScroll content={content} />
    </div>
         )
}