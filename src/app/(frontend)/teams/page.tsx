import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Users, Trophy, Calendar } from "lucide-react"
import Link from "next/link"

export default function TeamsPage() {
  const teams = [
    {
      age: "18U Elite",
      level: "National",
      coach: "Sarah Johnson",
      assistantCoach: "Mike Rodriguez",
      achievements: ["2023 National Champions", "Regional Champions"],
      practiceSchedule: "Mon/Wed/Fri 7-9 PM",
      players: 12,
      openSpots: 0,
    },
    {
      age: "17U Elite",
      level: "Regional",
      coach: "Lisa Chen",
      assistantCoach: "David Park",
      achievements: ["2023 Regional Finalists", "State Champions"],
      practiceSchedule: "Tue/Thu/Sat 6-8 PM",
      players: 11,
      openSpots: 1,
    },
    {
      age: "16U Elite",
      level: "Regional",
      coach: "Amanda Wilson",
      assistantCoach: "Tom Bradley",
      achievements: ["2023 Regional Champions", "Top 8 Nationals"],
      practiceSchedule: "Mon/Wed/Fri 6-8 PM",
      players: 12,
      openSpots: 0,
    },
    {
      age: "16U Club",
      level: "Local/Regional",
      coach: "Jennifer Martinez",
      assistantCoach: "Steve Thompson",
      achievements: ["Local Tournament Winners"],
      practiceSchedule: "Tue/Thu 7-9 PM",
      players: 10,
      openSpots: 2,
    },
    {
      age: "15U Elite",
      level: "Regional",
      coach: "Rachel Davis",
      assistantCoach: "Mark Johnson",
      achievements: ["Regional Semi-Finalists"],
      practiceSchedule: "Mon/Wed/Sat 5-7 PM",
      players: 11,
      openSpots: 1,
    },
    {
      age: "15U Club",
      level: "Local",
      coach: "Kelly Brown",
      assistantCoach: "Chris Lee",
      achievements: ["Local Champions"],
      practiceSchedule: "Tue/Thu 6-8 PM",
      players: 9,
      openSpots: 3,
    },
    {
      age: "14U Elite",
      level: "Regional",
      coach: "Nicole Taylor",
      assistantCoach: "Ryan Garcia",
      achievements: ["Regional Quarter-Finalists"],
      practiceSchedule: "Mon/Wed/Fri 5-7 PM",
      players: 10,
      openSpots: 2,
    },
    {
      age: "14U Club",
      level: "Local",
      coach: "Megan White",
      assistantCoach: "Alex Rivera",
      achievements: ["Local Tournament Participants"],
      practiceSchedule: "Tue/Thu 5-7 PM",
      players: 8,
      openSpots: 4,
    },
    {
      age: "13U",
      level: "Local/Regional",
      coach: "Jessica Moore",
      assistantCoach: "Danny Kim",
      achievements: ["Development Focus"],
      practiceSchedule: "Mon/Wed 5-7 PM",
      players: 9,
      openSpots: 3,
    },
    {
      age: "12U",
      level: "Local",
      coach: "Ashley Clark",
      assistantCoach: "Brian Lopez",
      achievements: ["Skill Development Focus"],
      practiceSchedule: "Tue/Thu 4-6 PM",
      players: 8,
      openSpots: 4,
    },
  ]

  const coaches = [
    {
      name: "Sarah Johnson",
      title: "Club Director & 18U Elite Coach",
      experience: "15 years coaching, Former D1 Player",
      certifications: ["USA Volleyball CAP Level 4", "SafeSport Certified"],
      bio: "Sarah brings championship-level experience to Thunder Valley. As a former Division I player and coach with over 15 years of experience, she has led teams to multiple national championships.",
    },
    {
      name: "Mike Rodriguez",
      title: "Assistant Director & 18U Assistant Coach",
      experience: "12 years coaching, Olympic Team Assistant",
      certifications: ["USA Volleyball CAP Level 3", "Sports Psychology Certified"],
      bio: "Mike's expertise in player development and sports psychology has helped countless athletes reach their potential both on and off the court.",
    },
    {
      name: "Lisa Chen",
      title: "Operations Manager & 17U Coach",
      experience: "10 years coaching, Former Professional Player",
      certifications: ["USA Volleyball CAP Level 3", "First Aid/CPR"],
      bio: "Lisa combines her professional playing experience with excellent organizational skills to develop well-rounded athletes.",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Our Teams</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Patriot Volleyball Club fields competitive teams across all age groups, from developmental programs to elite
            national-level competition.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Team Rosters & Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{team.age}</CardTitle>
                    <Badge
                      variant={
                        team.level === "National" ? "default" : team.level === "Regional" ? "secondary" : "outline"
                      }
                    >
                      {team.level}
                    </Badge>
                  </div>
                  <CardDescription>Head Coach: {team.coach}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{team.players} players</span>
                      {team.openSpots > 0 && (
                        <Badge variant="outline" className="text-xs">
                          {team.openSpots} spots open
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{team.practiceSchedule}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Recent Achievements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {team.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Trophy className="h-3 w-3 text-yellow-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-gray-600">
                    <strong>Assistant Coach:</strong> {team.assistantCoach}
                  </div>

                  {team.openSpots > 0 && (
                    <Button className="w-full" asChild>
                      <Link href="/contact">Apply for Tryouts</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coach Bios */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Meet Our Coaching Staff</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>
                      <p className="text-red-600 mb-2">{coach.title}</p>
                      <p className="text-sm text-gray-600 mb-3">{coach.experience}</p>

                      <div className="mb-3">
                        <h4 className="font-semibold text-sm mb-1">Certifications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {coach.certifications.map((cert, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">{coach.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Want to learn more about our complete coaching staff?</p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
