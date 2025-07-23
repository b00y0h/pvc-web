"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What age groups does Patriot Volleyball Club serve?",
          answer:
            "We serve players from 12U through 18U across multiple skill levels. We have both Elite (competitive) and Club (developmental) teams for most age groups.",
        },
        {
          question: "When does the volleyball season run?",
          answer:
            "Our club season typically runs from November through July, with tryouts in October. We also offer summer camps and training programs during the off-season.",
        },
        {
          question: "What is the difference between Elite and Club teams?",
          answer:
            "Elite teams are our most competitive level, participating in regional and national tournaments. Club teams focus on skill development and compete primarily in local and some regional tournaments.",
        },
        {
          question: "How many practices per week do teams have?",
          answer:
            "Most teams practice 2-3 times per week, typically for 2 hours per session. Elite teams may have additional training sessions during tournament season.",
        },
      ],
    },
    {
      category: "Tryouts & Registration",
      questions: [
        {
          question: "When are tryouts held?",
          answer:
            "Tryouts are typically held in early April for the following season. Specific dates are announced in March and posted on our website and social media.",
        },
        {
          question: "What should my daughter bring to tryouts?",
          answer:
            "Players should bring knee pads, athletic shoes (court shoes preferred), water bottle, and wear comfortable athletic clothing. We provide volleyballs and other equipment.",
        },
        {
          question: "Is there a tryout fee?",
          answer:
            "Yes, there is a $50 tryout fee that covers facility costs, evaluation materials, and administrative expenses. This fee is non-refundable but is credited toward club fees if your daughter makes a team.",
        },
        {
          question: "What if my daughter doesn't make a team?",
          answer:
            "We offer developmental programs and skills clinics for players who don't make teams initially. We also provide feedback and recommendations for improvement.",
        },
      ],
    },
    {
      category: "Costs & Fees",
      questions: [
        {
          question: "What are the club fees?",
          answer:
            "Club fees vary by team level and age group, ranging from $2,500-$4,500 per season. This includes coaching, practice facility, tournaments, uniforms, and equipment.",
        },
        {
          question: "Are there additional costs beyond club fees?",
          answer:
            "Additional costs may include travel expenses for tournaments, team meals, and optional training camps. We provide detailed cost breakdowns for each team.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, we offer flexible payment plans to help families manage costs. Payment plans can be arranged through our online store or by contacting our office.",
        },
        {
          question: "Are there scholarship opportunities available?",
          answer:
            "We offer need-based scholarships and work-study programs for qualifying families. Contact our office for more information about financial assistance.",
        },
      ],
    },
    {
      category: "Equipment & Uniforms",
      questions: [
        {
          question: "What equipment does my daughter need?",
          answer:
            "Players need knee pads, court shoes, practice clothes, and a water bottle. The club provides volleyballs, training equipment, and game uniforms.",
        },
        {
          question: "Are uniforms included in club fees?",
          answer:
            "Yes, game uniforms (jersey, shorts, warm-ups) are included. Players are responsible for practice clothes and personal protective equipment.",
        },
        {
          question: "Can we purchase additional team gear?",
          answer:
            "Yes, additional team merchandise is available through our online store, including t-shirts, hoodies, bags, and accessories.",
        },
        {
          question: "What type of shoes are recommended?",
          answer:
            "We recommend volleyball-specific court shoes for optimal performance and injury prevention. Our coaches can provide specific brand and model recommendations.",
        },
      ],
    },
    {
      category: "Travel & Tournaments",
      questions: [
        {
          question: "How much travel is involved?",
          answer:
            "Travel varies by team level. Club teams primarily compete locally, while Elite teams travel regionally and may qualify for national tournaments.",
        },
        {
          question: "Who is responsible for travel arrangements?",
          answer:
            "Families are responsible for their own travel and accommodation arrangements. We provide detailed tournament information and recommended hotels.",
        },
        {
          question: "How many tournaments do teams play in?",
          answer:
            "Club teams typically play in 4-6 tournaments per season, while Elite teams may participate in 8-12 tournaments including regional and national events.",
        },
        {
          question: "Are parents required to help with tournaments?",
          answer:
            "We encourage parent involvement and have volunteer opportunities at tournaments. Some roles are required for each family, such as line judging or scorekeeping.",
        },
      ],
    },
    {
      category: "Training & Development",
      questions: [
        {
          question: "What is the coaching philosophy at Patriot VBC?",
          answer:
            "We focus on developing the whole person - teaching volleyball skills while building character, leadership, and life skills that extend beyond the court.",
        },
        {
          question: "Do you offer individual training?",
          answer:
            "Yes, we offer private lessons and small group training sessions with our coaching staff. These can be arranged through our office.",
        },
        {
          question: "How do you handle playing time decisions?",
          answer:
            "Playing time is earned through practice performance, attitude, and game situations. We communicate regularly with players about their development and opportunities.",
        },
        {
          question: "What happens if my daughter gets injured?",
          answer:
            "We have partnerships with local sports medicine providers and require all players to have medical clearance before returning to play after injury.",
        },
      ],
    },
  ];

  let questionIndex = 0;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Find answers to common questions about Patriot Volleyball Club. If
            you don&apos;t see your question here, please don&apos;t hesitate to
            contact us directly.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="mb-6 text-2xl font-bold text-red-600">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  return (
                    <Card key={faqIndex}>
                      <CardHeader
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleItem(currentIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            {faq.question}
                          </CardTitle>
                          {openItems.includes(currentIndex) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </CardHeader>
                      {openItems.includes(currentIndex) && (
                        <CardContent>
                          <p className="text-gray-600">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-red-900">
                Still Have Questions?
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-red-700">
                We&apos;re here to help! If you couldn&apos;t find the answer to
                your question above, please reach out to us directly. Our staff
                is always happy to provide more information about our programs
                and answer any specific questions you may have.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 bg-transparent text-red-600 hover:bg-red-50"
                >
                  Call (804) 555-0123
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>New Families</CardTitle>
              <CardDescription>
                Getting started with Patriot VBC
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  •{" "}
                  <Link href="/teams" className="text-red-600 hover:underline">
                    View our teams
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/schedule"
                    className="text-red-600 hover:underline"
                  >
                    Practice schedules
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/contact"
                    className="text-red-600 hover:underline"
                  >
                    Contact information
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/store" className="text-red-600 hover:underline">
                    Payment information
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Families</CardTitle>
              <CardDescription>Resources for existing members</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  •{" "}
                  <Link
                    href="/schedule"
                    className="text-red-600 hover:underline"
                  >
                    Tournament schedule
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/store" className="text-red-600 hover:underline">
                    Make payments
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/news" className="text-red-600 hover:underline">
                    Latest news
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/contact"
                    className="text-red-600 hover:underline"
                  >
                    Emergency contacts
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prospective Players</CardTitle>
              <CardDescription>Interested in joining?</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  •{" "}
                  <Link href="/about" className="text-red-600 hover:underline">
                    About our club
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/teams" className="text-red-600 hover:underline">
                    Team information
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/testimonials"
                    className="text-red-600 hover:underline"
                  >
                    What families say
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/contact"
                    className="text-red-600 hover:underline"
                  >
                    Schedule a visit
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
