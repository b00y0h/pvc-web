// import { headers as getHeaders } from "next/headers.js";
// import { Button } from "~/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "~/components/ui/card";
// import { Badge } from "~/components/ui/badge";
// import { Calendar, Trophy, Users } from "lucide-react";
// import Link from "next/link";
// import { getPayload } from "payload";
// import React from "react";

// import config from "@payload-config";
// import "./styles.css";

// export default async function HomePage() {
//   const headers = await getHeaders();
//   const payloadConfig = await config;
//   const payload = await getPayload({ config: payloadConfig });
//   const { user } = await payload.auth({ headers });

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-red-600 to-red-800 py-20 text-white">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-4xl text-center">
//             <h1 className="mb-6 text-5xl font-bold">Patriot Volleyball Club</h1>
//             <p className="mb-8 text-xl">
//               Developing champions on and off the court since 2010
//             </p>
//             <div className="flex flex-col justify-center gap-4 sm:flex-row">
//               <Button size="lg" asChild>
//                 <Link href="/teams">View Our Teams</Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-white bg-transparent text-white hover:bg-white hover:text-red-600"
//                 asChild
//               >
//                 <Link href="/contact">Join Our Club {user && user.email}</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="bg-gray-50 py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
//             <div className="text-center">
//               <div className="mb-2 text-3xl font-bold text-red-600">150+</div>
//               <div className="text-gray-600">Active Players</div>
//             </div>
//             <div className="text-center">
//               <div className="mb-2 text-3xl font-bold text-red-600">12</div>
//               <div className="text-gray-600">Teams</div>
//             </div>
//             <div className="text-center">
//               <div className="mb-2 text-3xl font-bold text-red-600">25+</div>
//               <div className="text-gray-600">Tournaments Won</div>
//             </div>
//             <div className="text-center">
//               <div className="mb-2 text-3xl font-bold text-red-600">13</div>
//               <div className="text-gray-600">Years of Excellence</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Latest News */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold">Latest News & Updates</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Stay up to date with the latest happenings at Thunder Valley
//               Volleyball Club
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//             <Card>
//               <CardHeader>
//                 <Badge className="mb-2 w-fit">Tournament Win</Badge>
//                 <CardTitle>16U Team Wins Regional Championship</CardTitle>
//                 <CardDescription>March 15, 2024</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Our 16U team dominated the Regional Championship, going
//                   undefeated throughout the tournament. Congratulations to all
//                   players and coaches!
//                 </p>
//                 <Button variant="link" className="mt-2 p-0" asChild>
//                   <Link href="/news">Read More</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <Badge className="mb-2 w-fit">Registration</Badge>
//                 <CardTitle>Spring Season Registration Open</CardTitle>
//                 <CardDescription>March 10, 2024</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Registration for the spring season is now open! Early bird
//                   pricing available until March 31st. Don&apos;t miss out on
//                   securing your spot.
//                 </p>
//                 <Button variant="link" className="mt-2 p-0" asChild>
//                   <Link href="/contact">Register Now</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <Badge className="mb-2 w-fit">Event</Badge>
//                 <CardTitle>Parent Information Night</CardTitle>
//                 <CardDescription>March 8, 2024</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">
//                   Join us for our monthly parent information night where
//                   we&apos;ll discuss upcoming tournaments, fundraising
//                   opportunities, and team updates.
//                 </p>
//                 <Button variant="link" className="mt-2 p-0" asChild>
//                   <Link href="/schedule">View Schedule</Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold">Upcoming Events</h2>
//             <p className="text-gray-600">
//               Don&apos;t miss these important dates
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-lg bg-red-100 p-3">
//                     <Calendar className="h-6 w-6 text-red-600" />
//                   </div>
//                   <div>
//                     <h3 className="mb-1 font-semibold">Spring Tournament</h3>
//                     <p className="mb-2 text-sm text-gray-600">
//                       March 22-24, 2024
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Convention Center, Downtown
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-lg bg-red-100 p-3">
//                     <Users className="h-6 w-6 text-red-600" />
//                   </div>
//                   <div>
//                     <h3 className="mb-1 font-semibold">Team Tryouts</h3>
//                     <p className="mb-2 text-sm text-gray-600">
//                       April 5-7, 2024
//                     </p>
//                     <p className="text-sm text-gray-500">Main Gym, 6:00 PM</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-lg bg-red-100 p-3">
//                     <Trophy className="h-6 w-6 text-red-600" />
//                   </div>
//                   <div>
//                     <h3 className="mb-1 font-semibold">Awards Banquet</h3>
//                     <p className="mb-2 text-sm text-gray-600">May 15, 2024</p>
//                     <p className="text-sm text-gray-500">
//                       Grand Hotel Ballroom
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-red-600 py-16 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="mb-4 text-3xl font-bold">
//             Ready to Join Patriot Volleyball?
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl text-xl">
//             Experience the difference of training with dedicated coaches and
//             competing at the highest level
//           </p>
//           <div className="flex flex-col justify-center gap-4 sm:flex-row">
//             <Button size="lg" variant="secondary" asChild>
//               <Link href="/contact">Get Started Today</Link>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white bg-transparent text-white hover:bg-white hover:text-red-600"
//               asChild
//             >
//               <Link href="/about">Learn More</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold">Patriot Volleyball Club</h1>
            <p className="mb-8 text-xl">
              Developing champions on and off the court since 2010
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/teams">View Our Teams</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-red-600"
                asChild
              >
                <Link href="/contact">Join Our Club</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">150+</div>
              <div className="text-gray-600">Active Players</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">12</div>
              <div className="text-gray-600">Teams</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">25+</div>
              <div className="text-gray-600">Tournaments Won</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-red-600">13</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Latest News & Updates</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Stay up to date with the latest happenings at Thunder Valley
              Volleyball Club
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Tournament Win</Badge>
                <CardTitle>16U Team Wins Regional Championship</CardTitle>
                <CardDescription>March 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our 16U team dominated the Regional Championship, going
                  undefeated throughout the tournament. Congratulations to all
                  players and coaches!
                </p>
                <Button variant="link" className="mt-2 p-0" asChild>
                  <Link href="/news">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Registration</Badge>
                <CardTitle>Spring Season Registration Open</CardTitle>
                <CardDescription>March 10, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Registration for the spring season is now open! Early bird
                  pricing available until March 31st. Don&apos;t miss out on
                  securing your spot.
                </p>
                <Button variant="link" className="mt-2 p-0" asChild>
                  <Link href="/contact">Register Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Event</Badge>
                <CardTitle>Parent Information Night</CardTitle>
                <CardDescription>March 8, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join us for our monthly parent information night where
                  we&apos;ll discuss upcoming tournaments, fundraising
                  opportunities, and team updates.
                </p>
                <Button variant="link" className="mt-2 p-0" asChild>
                  <Link href="/schedule">View Schedule</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Upcoming Events</h2>
            <p className="text-gray-600">
              Don&apos;t miss these important dates
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <Calendar className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Spring Tournament</h3>
                    <p className="mb-2 text-sm text-gray-600">
                      March 22-24, 2024
                    </p>
                    <p className="text-sm text-gray-500">
                      Convention Center, Downtown
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Team Tryouts</h3>
                    <p className="mb-2 text-sm text-gray-600">
                      April 5-7, 2024
                    </p>
                    <p className="text-sm text-gray-500">Main Gym, 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <Trophy className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Awards Banquet</h3>
                    <p className="mb-2 text-sm text-gray-600">May 15, 2024</p>
                    <p className="text-sm text-gray-500">
                      Grand Hotel Ballroom
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Join Patriot Volleyball?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Experience the difference of training with dedicated coaches and
            competing at the highest level
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-red-600"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
