import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent - 16U Elite",
      year: "2023",
      content:
        "Patriot Volleyball Club has been incredible for my daughter Emma. Not only has her volleyball skills improved dramatically, but she's also developed confidence, leadership abilities, and lifelong friendships. The coaches truly care about each player's development both on and off the court.",
      rating: 5,
    },
    {
      name: "Jessica Thompson",
      role: "Former Player - Class of 2022",
      year: "Alumni",
      content:
        "Playing for Patriot VBC was the best decision I made in high school. The training I received helped me earn a full scholarship to VCU. More importantly, the life lessons about teamwork, perseverance, and dedication have shaped who I am today. I'm forever grateful to Coach Johnson and the entire staff.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Parent - 14U Club",
      year: "2023",
      content:
        "As a parent, I appreciate how the club emphasizes character development alongside athletic excellence. My daughter has learned valuable lessons about commitment, respect, and hard work. The communication from the coaching staff is excellent, and they truly treat each family like part of their own.",
      rating: 5,
    },
    {
      name: "Amanda Chen",
      role: "Former Player - Class of 2021",
      year: "Alumni",
      content:
        "Patriot VBC prepared me not just for college volleyball, but for life. The discipline, time management, and leadership skills I learned have been invaluable in my college studies and beyond. I'm now playing Division I volleyball at James Madison University, and I credit much of my success to my time with Patriot.",
      rating: 5,
    },
    {
      name: "David and Lisa Parker",
      role: "Parents - 18U Elite",
      year: "2023",
      content:
        "Our daughter has been with Patriot VBC for four years, and we've watched her grow from a shy middle schooler into a confident young woman and team captain. The club's focus on developing the whole person, not just the athlete, sets them apart. We couldn't be happier with our experience.",
      rating: 5,
    },
    {
      name: "Rachel Davis",
      role: "Former Player - Class of 2020",
      year: "Alumni",
      content:
        "The relationships I built at Patriot VBC have lasted well beyond my playing days. My teammates became my sisters, and my coaches became mentors who I still turn to for advice. The club taught me that volleyball is just the vehicle - the real goal is building character and lifelong connections.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Parent - 15U Club",
      year: "2023",
      content:
        "I was initially concerned about the time commitment, but I quickly realized that Patriot VBC teaches excellent time management skills. My daughter's grades actually improved because she learned to be more organized and disciplined. The coaches emphasize that academics come first, which I really appreciate.",
      rating: 5,
    },
    {
      name: "Taylor Williams",
      role: "Former Player - Class of 2019",
      year: "Alumni",
      content:
        "Five years after graduating, I can confidently say that Patriot VBC shaped my entire approach to challenges and goals. The mental toughness I developed on the court has helped me succeed in my career. I'm now a physical therapist, and I often share the lessons I learned from Coach Johnson with my own patients.",
      rating: 5,
    },
    {
      name: "Robert and Karen Johnson",
      role: "Parents - 13U",
      year: "2023",
      content:
        "This is our first year with Patriot VBC, and we're amazed by the positive environment. Our daughter looks forward to every practice and has made wonderful friends. The coaches are patient, encouraging, and really know how to bring out the best in each player. We're excited to be part of this volleyball family.",
      rating: 5,
    },
  ];

  const stats = [
    {
      label: "College Scholarships Earned",
      value: "85%",
      description: "of graduating seniors",
    },
    {
      label: "Years of Operation",
      value: "13+",
      description: "serving Central Virginia",
    },
    { label: "Alumni Network", value: "200+", description: "former players" },
    {
      label: "Parent Satisfaction",
      value: "98%",
      description: "would recommend us",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold">What Our Families Say</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Don&apos;t just take our word for it. Hear from the players,
            parents, and alumni who have experienced the Patriot Volleyball Club
            difference firsthand.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mb-2 text-3xl font-bold text-red-600">
                  {stat.value}
                </div>
                <div className="mb-1 font-semibold">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                  <Badge variant="outline">{testimonial.year}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Number(testimonial.rating) }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -left-2 -top-2 h-8 w-8 text-red-200" />
                  <p className="pl-6 italic text-gray-600">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900">
                  College Commitments
                </CardTitle>
                <CardDescription>
                  Recent alumni college volleyball commitments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Emma Rodriguez</span>
                    <span className="text-sm text-gray-600">
                      University of Virginia - Full Scholarship
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Sarah Kim</span>
                    <span className="text-sm text-gray-600">
                      James Madison University - Full Scholarship
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Ashley Thompson</span>
                    <span className="text-sm text-gray-600">
                      VCU - Partial Scholarship
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Madison Davis</span>
                    <span className="text-sm text-gray-600">
                      Radford University - Full Scholarship
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Taylor Wilson</span>
                    <span className="text-sm text-gray-600">
                      Liberty University - Partial Scholarship
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Academic Excellence
                </CardTitle>
                <CardDescription>
                  Our student-athletes excel in the classroom too
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">
                      Academic Achievements:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 95% of players maintain 3.0+ GPA</li>
                      <li>• 15 National Honor Society members</li>
                      <li>• 8 Valedictorians/Salutatorians since 2020</li>
                      <li>• 100% high school graduation rate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Leadership Roles:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Student body presidents</li>
                      <li>• Team captains in other sports</li>
                      <li>• Community service leaders</li>
                      <li>• Youth mentors and coaches</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="mx-auto max-w-2xl">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Ready to Join Our Success Stories?
              </h3>
              <p className="mb-6 text-gray-600">
                Become part of the Patriot Volleyball Club family and start your
                own journey toward excellence. Contact us today to learn more
                about our programs and how we can help your daughter reach her
                potential.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-md bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700">
                  Contact Us Today
                </button>
                <button className="rounded-md border border-red-600 px-6 py-2 font-semibold text-red-600 hover:bg-red-50">
                  Schedule a Visit
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
