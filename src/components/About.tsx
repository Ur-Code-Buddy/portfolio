"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1598792598750-1f0dc619e6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl"> <Paragraph className="mt-4"> Hey there, I&apos;m Baivab Dutta – a tech enthusiast, developer, and engineering explorer. My passion for computers and engineering started early, driving me to complete studies in computer science, mathematics, and electronics. Welcome to my digital space! </Paragraph> <Paragraph className="mt-4"> Since day one, I&apos;ve been fascinated by creating and building things. My journey has included experimenting with robotics, setting up servers, and designing electronics components. I&apos;ve worked across tech domains, from Web2 and Web3 to exploring AI, pushing myself to keep learning and growing. </Paragraph> <Paragraph className="mt-4"> One of my memorable projects was building a drone in my freshman year, which was a pretty cool milestone in my journey. Outside of tech, I have a love for simple, effective design. I believe in the beauty of minimalism, where function meets elegance. </Paragraph> <Paragraph className="mt-4"> When I&apos;m not coding or exploring new tech, you might find me strumming a guitar, diving into ideas, or simplifying designs. This space is a window into my projects and thoughts. Whether you&apos;re a developer, a tech enthusiast, or just curious about what I&apos;m working on, there&apos;s something here for you. </Paragraph> <Paragraph className="mt-4"> Thanks for stopping by, and I&apos;m excited to share this journey with you. </Paragraph> </div>
    </div>
  );
}
