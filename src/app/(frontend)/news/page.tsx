/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Award } from "lucide-react";

export default function NewsPage() {
  const newsArticles = [
    {
      title: "16U Elite Team Wins Regional Championship",
      date: "March 15, 2024",
      category: "Tournament Results",
      excerpt:
        "Our 16U Elite team dominated the Regional Championship tournament, going undefeated throughout the weekend and securing their spot at nationals.",
      content:
        "In an outstanding display of teamwork and skill, the Patriot VBC 16U Elite team captured the Regional Championship title this past weekend. The team went 8-0 throughout the tournament, defeating top teams from across Virginia, North Carolina, and Maryland. Coach Amanda Wilson praised the team's preparation and mental toughness, noting that their months of hard work paid off when it mattered most. The victory secures the team's qualification for the National Championships in July.",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      title: "Spring Season Registration Now Open",
      date: "March 10, 2024",
      category: "Registration",
      excerpt:
        "Registration for the 2024 spring season is officially open! Early bird pricing available through March 31st.",
      content:
        "We're excited to announce that registration for our spring season is now open. This season will feature expanded programming including new developmental clinics for younger players and advanced training sessions for our elite teams. Early bird pricing is available for families who register before March 31st. Don't miss out on securing your spot for what promises to be our best season yet!",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Coach Sarah Johnson Named Regional Coach of the Year",
      date: "March 8, 2024",
      category: "Awards",
      excerpt:
        "Club Director Sarah Johnson receives prestigious coaching award for her outstanding leadership and player development.",
      content:
        "We're proud to announce that our Club Director and Head Coach Sarah Johnson has been named Regional Coach of the Year by the Virginia Volleyball Coaches Association. This honor recognizes her exceptional leadership, innovative training methods, and commitment to developing both skilled athletes and outstanding young women. Coach Johnson has led Patriot VBC to numerous championships and has helped over 100 players earn college scholarships during her tenure.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "New Training Facility Opens in Goochland",
      date: "February 28, 2024",
      category: "Facilities",
      excerpt:
        "Patriot VBC unveils state-of-the-art training facility with four courts and modern amenities.",
      content:
        "After months of planning and construction, we're thrilled to announce the opening of our new training facility in Goochland. The 15,000 square foot facility features four regulation volleyball courts, a strength training area, team meeting rooms, and a sports medicine clinic. This expansion allows us to better serve our growing membership and provide world-class training opportunities for all our teams.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Alumni Spotlight: Jessica Martinez Joins Coaching Staff",
      date: "February 20, 2024",
      category: "Alumni",
      excerpt:
        "Former Patriot VBC standout returns as assistant coach after successful college career at JMU.",
      content:
        "We're excited to welcome back Jessica Martinez as our newest assistant coach. Jessica was a standout player for Patriot VBC from 2016-2019 before earning a full scholarship to James Madison University. After a successful college career that included two conference championships, Jessica is bringing her experience and passion back to help develop the next generation of Patriot volleyball players.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Community Service Project: Volleyball for All",
      date: "February 15, 2024",
      category: "Community",
      excerpt:
        "Patriot VBC launches initiative to provide free volleyball instruction to underserved youth in Central Virginia.",
      content:
        "As part of our commitment to giving back to the community, Patriot VBC has launched 'Volleyball for All,' a program that provides free volleyball instruction and equipment to underserved youth throughout Central Virginia. Our players and coaches volunteer their time each Saturday to teach basic skills and promote the values of teamwork and sportsmanship. The program has already reached over 50 young athletes in its first month.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ];

  const upcomingEvents = [
    {
      title: "Parent Information Night",
      date: "March 25, 2024",
      time: "7:00 PM",
      location: "Main Training Facility",
    },
    {
      title: "Spring Tournament",
      date: "April 12-14, 2024",
      time: "All Day",
      location: "Richmond Convention Center",
    },
    {
      title: "Team Tryouts",
      date: "April 20-22, 2024",
      time: "6:00 PM",
      location: "Main Training Facility",
    },
    {
      title: "Awards Banquet",
      date: "May 18, 2024",
      time: "6:30 PM",
      location: "Goochland Country Club",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold">News & Updates</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Stay up to date with the latest news, achievements, and
            announcements from Patriot Volleyball Club.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main News Content */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            {newsArticles
              .filter((article) => article.featured)
              .map((article, index) => (
                <Card key={index} className="mb-8 border-red-200">
                  <div className="relative">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-64 w-full rounded-t-lg object-cover"
                    />
                    <Badge className="absolute left-4 top-4 bg-red-600">
                      Featured
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{article.title}</CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">{article.content}</p>
                    <Button
                      variant="outline"
                      className="border-red-600 bg-transparent text-red-600 hover:bg-red-50"
                    >
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}

            {/* Regular Articles */}
            <div className="space-y-6">
              {newsArticles
                .filter((article) => !article.featured)
                .map((article, index) => (
                  <Card key={index}>
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="h-48 w-full rounded-t-lg object-cover md:h-full md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="mb-2 flex items-center gap-2">
                            <Badge variant="outline">{article.category}</Badge>
                            <span className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              {article.date}
                            </span>
                          </div>
                          <CardTitle className="text-xl">
                            {article.title}
                          </CardTitle>
                          <CardDescription>{article.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="link" className="p-0 text-red-600">
                            Read More →
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.time}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900">
                  Season Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    <div>
                      <div className="font-semibold">5 Championships</div>
                      <div className="text-sm text-gray-600">
                        Won this season
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-blue-500" />
                    <div>
                      <div className="font-semibold">12 College Commits</div>
                      <div className="text-sm text-gray-600">Class of 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-purple-500" />
                    <div>
                      <div className="font-semibold">3 All-Americans</div>
                      <div className="text-sm text-gray-600">
                        Individual honors
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Connected</CardTitle>
                <CardDescription>
                  Get the latest news delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Subscribe to Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-600 hover:text-red-600"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">f</span>
                    </div>
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-600 hover:text-red-600"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                      <span className="text-sm font-bold text-pink-600">@</span>
                    </div>
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-gray-600 hover:text-red-600"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">T</span>
                    </div>
                    Twitter
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
