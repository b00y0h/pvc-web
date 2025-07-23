import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Trophy, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold">
            About Patriot Volleyball Club
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            For over a decade, we&apos;ve been committed to developing not just
            exceptional volleyball players, but outstanding young people who
            excel both on and off the court in Central Virginia.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-fit rounded-full bg-red-100 p-3">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To develop skilled, confident, and character-driven athletes
                through exceptional coaching and competitive play.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-fit rounded-full bg-green-100 p-3">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Integrity, teamwork, dedication, and sportsmanship guide
                everything we do as a club family.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-fit rounded-full bg-purple-100 p-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A supportive family environment where players, parents, and
                coaches work together toward common goals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-fit rounded-full bg-orange-100 p-3">
                <Trophy className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle>Our Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Committed to the highest standards of coaching, training, and
                competitive performance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our History</h2>
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg">
                    Patriot Volleyball Club was founded in 2010 by a group of
                    passionate coaches and parents who saw the need for a
                    premier volleyball program in Central Virginia. What started
                    with just two teams has grown into one of the region&apos;s
                    most respected volleyball clubs.
                  </p>
                  <p className="mb-4">
                    Over the years, we&apos;ve built a reputation for excellence
                    both in competition and character development. Our teams
                    have won numerous regional and national tournaments, but
                    more importantly, we&apos;ve helped hundreds of young
                    athletes in the Goochland and Richmond area develop life
                    skills that serve them well beyond volleyball.
                  </p>
                  <p>
                    Today, Patriot VBC serves over 150 athletes across 12 teams,
                    ranging from 12U to 18U divisions. Our alumni have gone on
                    to play at top collegiate programs and have become leaders
                    in their communities throughout Virginia and beyond.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">2023</Badge>
                <CardTitle>National Championship</CardTitle>
                <CardDescription>18U Elite Division</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our 18U team captured the national title, going undefeated in
                  the championship tournament.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">2022</Badge>
                <CardTitle>Regional Champions</CardTitle>
                <CardDescription>Multiple Age Groups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Four of our teams won regional championships, the most in club
                  history.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">2021</Badge>
                <CardTitle>Club of the Year</CardTitle>
                <CardDescription>State Volleyball Association</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recognized for our commitment to player development and
                  community service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Ongoing</Badge>
                <CardTitle>College Scholarships</CardTitle>
                <CardDescription>Player Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Over 80% of our graduating seniors receive college volleyball
                  scholarships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">2020</Badge>
                <CardTitle>Community Service Award</CardTitle>
                <CardDescription>Local Chamber of Commerce</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Honored for our youth mentorship programs and community
                  outreach efforts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">2019</Badge>
                <CardTitle>Coaching Excellence</CardTitle>
                <CardDescription>National Recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Three of our coaches received national coaching excellence
                  awards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200"></div>
                <h3 className="mb-2 text-xl font-semibold">Sarah Johnson</h3>
                <p className="mb-3 text-red-600">Club Director & Head Coach</p>
                <p className="text-sm text-gray-600">
                  Former Division I player with 15 years of coaching experience.
                  Led multiple teams to national championships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200"></div>
                <h3 className="mb-2 text-xl font-semibold">Mike Rodriguez</h3>
                <p className="mb-3 text-red-600">Assistant Director & Coach</p>
                <p className="text-sm text-gray-600">
                  Olympic team assistant coach with expertise in player
                  development and sports psychology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200"></div>
                <h3 className="mb-2 text-xl font-semibold">Lisa Chen</h3>
                <p className="mb-3 text-red-600">Operations Manager</p>
                <p className="text-sm text-gray-600">
                  Handles all club operations, scheduling, and parent
                  communications. Former professional player.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
