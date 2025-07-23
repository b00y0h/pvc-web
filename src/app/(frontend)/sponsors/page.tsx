/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Heart, Star, Award, Handshake } from "lucide-react";
import Link from "next/link";

export default function SponsorsPage() {
  const currentSponsors = [
    {
      name: "Richmond Sports Medicine",
      level: "Title Sponsor",
      contribution: "Medical support, injury prevention programs",
      logo: "/placeholder.svg?height=80&width=200",
      website: "https://richmondsportsmedicine.com",
      description:
        "Providing comprehensive sports medicine services to keep our athletes healthy and performing at their best.",
    },
    {
      name: "Goochland Family Dentistry",
      level: "Gold Sponsor",
      contribution: "Dental care for players, tournament support",
      logo: "/placeholder.svg?height=80&width=200",
      website: "https://goochlanddentistry.com",
      description:
        "Supporting our athletes' overall health with quality dental care and community involvement.",
    },
    {
      name: "Central Virginia Credit Union",
      level: "Gold Sponsor",
      contribution: "Financial literacy programs, equipment funding",
      logo: "/placeholder.svg?height=80&width=200",
      website: "https://cvcu.org",
      description:
        "Investing in our community's youth through financial education and sports support.",
    },
    {
      name: "River City Volleyball Equipment",
      level: "Silver Sponsor",
      contribution: "Equipment discounts, gear donations",
      logo: "/placeholder.svg?height=80&width=200",
      website: "https://rivercityvb.com",
      description:
        "Providing quality volleyball equipment and gear to help our teams compete at the highest level.",
    },
    {
      name: "Patriot Physical Therapy",
      level: "Silver Sponsor",
      contribution: "Injury rehabilitation, strength training",
      logo: "/placeholder.svg?height=80&width=200",
      website: "https://patriotpt.com",
      description:
        "Helping our athletes recover from injuries and prevent future ones through expert physical therapy.",
    },
    {
      name: "Goochland Pizza Company",
      level: "Bronze Sponsor",
      contribution: "Team meals, fundraising events",
      logo: "/placeholder.svg?height=80&width=200",
      website: "https://goochlandpizza.com",
      description:
        "Fueling our teams with delicious meals and supporting our fundraising efforts.",
    },
  ];

  const sponsorshipLevels = [
    {
      level: "Title Sponsor",
      amount: "$10,000+",
      benefits: [
        "Logo on all team uniforms",
        "Banner at all home events",
        "Website homepage feature",
        "Social media recognition",
        "VIP tournament seating",
        "Annual appreciation dinner",
      ],
      icon: <Award className="h-8 w-8 text-yellow-500" />,
    },
    {
      level: "Gold Sponsor",
      amount: "$5,000 - $9,999",
      benefits: [
        "Logo on team warm-ups",
        "Banner at select events",
        "Website sponsor page listing",
        "Social media mentions",
        "Tournament program ad",
      ],
      icon: <Star className="h-8 w-8 text-yellow-400" />,
    },
    {
      level: "Silver Sponsor",
      amount: "$2,500 - $4,999",
      benefits: [
        "Logo on team bags",
        "Website listing",
        "Social media recognition",
        "Tournament program listing",
      ],
      icon: <Handshake className="h-8 w-8 text-gray-400" />,
    },
    {
      level: "Bronze Sponsor",
      amount: "$1,000 - $2,499",
      benefits: [
        "Website listing",
        "Social media mention",
        "Tournament program listing",
      ],
      icon: <Heart className="h-8 w-8 text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold">Our Sponsors</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We&apos;re grateful for the support of our community partners who
            help make Patriot Volleyball Club possible. Their contributions
            enable us to provide exceptional training and competitive
            opportunities for our athletes.
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Thank You to Our Current Sponsors
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentSponsors.map((sponsor, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="mb-4 flex h-20 w-full items-center justify-center rounded-lg bg-gray-100">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                  <Badge
                    variant={
                      sponsor.level === "Title Sponsor"
                        ? "default"
                        : sponsor.level === "Gold Sponsor"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {sponsor.level}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm text-gray-600">
                    {sponsor.description}
                  </p>
                  <div className="text-sm">
                    <strong>Contribution:</strong> {sponsor.contribution}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsorship Opportunities */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Sponsorship Opportunities
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
            Join our family of sponsors and help support youth volleyball in
            Central Virginia. Your investment helps provide equipment, training,
            travel opportunities, and scholarships for our athletes.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sponsorshipLevels.map((level, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{level.icon}</div>
                  <CardTitle className="text-xl">{level.level}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-red-600">
                    {level.amount}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 text-red-500">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Sponsor Us */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Why Sponsor Patriot Volleyball Club?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 w-fit rounded-full bg-red-100 p-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Community Impact</h3>
                <p className="text-gray-600">
                  Support local youth development and help build character,
                  teamwork, and leadership skills that last a lifetime.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 w-fit rounded-full bg-blue-100 p-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Brand Visibility</h3>
                <p className="text-gray-600">
                  Gain exposure to hundreds of families throughout Central
                  Virginia and beyond through tournaments and events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 w-fit rounded-full bg-green-100 p-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Excellence Association
                </h3>
                <p className="text-gray-600">
                  Align your brand with a program known for excellence,
                  integrity, and positive community impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How Sponsorship Helps */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            How Your Sponsorship Helps
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-red-600">
                    Direct Impact
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      Equipment and facility improvements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      Travel assistance for tournaments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      Scholarships for families in need
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      Professional coaching and training
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-red-600">
                    Long-term Benefits
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      College scholarship opportunities for players
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      Character development and life skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      Stronger community connections
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-red-500">•</span>
                      Youth leadership development
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="mx-auto max-w-2xl border-red-200 bg-red-50">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-red-900">
                Become a Sponsor Today
              </h3>
              <p className="mb-6 text-red-700">
                Ready to make a difference in the lives of young athletes?
                Contact us to learn more about sponsorship opportunities and how
                we can create a partnership that benefits your business and our
                community.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 bg-transparent text-red-600 hover:bg-red-50"
                >
                  Download Sponsorship Packet
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
