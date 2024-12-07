'use client'

import { Card, CardBody, CardHeader, Avatar, Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    avatar: "AJ",
    bio: "Full-stack developer with 5+ years of experience in React and Node.js",
    github: "https://github.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "SC",
    bio: "Passionate about creating beautiful and intuitive user interfaces",
    github: "https://github.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Mike Wilson",
    role: "Backend Engineer",
    avatar: "MW",
    bio: "Specialized in building scalable backend systems and APIs",
    github: "https://github.com",
    twitter: "https://twitter.com"
  }
];

export default function About() {
  return (
    <div className="flex flex-col gap-8 py-8 md:py-10">
      <section className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-bold text-4xl">About Us</h1>
        <p className="text-large text-default-600 max-w-md">
          Meet our team of developers and designers working to make web development better
        </p>
      </section>

      <section className="flex flex-col gap-8 px-4">
        <Card className="max-w-[800px] mx-auto">
          <CardBody className="py-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-default-500">
                We&apos;re on a mission to make web development more accessible and enjoyable.
                By combining the power of Next.js with the beauty of NextUI, we&apos;re creating
                tools that help developers build better websites faster.
              </p>
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="justify-center pt-8">
                  <Avatar
                    name={member.avatar}
                    size="lg"
                    className="w-20 h-20 text-large"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="text-default-500 mt-2">{member.bio}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <Button
                      as={Link}
                      href={member.github}
                      target="_blank"
                      variant="flat"
                      size="sm"
                    >
                      GitHub
                    </Button>
                    <Button
                      as={Link}
                      href={member.twitter}
                      target="_blank"
                      variant="flat"
                      size="sm"
                    >
                      Twitter
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
