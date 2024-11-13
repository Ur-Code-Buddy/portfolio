import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Baivab</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer who enjoys{" "}
        <Highlight>building products</Highlight> and web apps that have the potential to make a meaningful impact.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        My background is in computer science, mathematics, and electronics, with experience in{" "}
        <Highlight>robotics, servers, and electronics</Highlight>. I work with Web2, Web3, and am actively learning more about AI.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        When I have free time, I work with{" "}
        <Highlight>microcontrollers and Raspberry Pis</Highlight>, exploring new ways to build and automate.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}

