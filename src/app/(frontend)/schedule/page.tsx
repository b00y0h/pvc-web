import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function SchedulePage() {
  const practiceSchedule = [
    { team: "18U Elite", days: "Mon/Wed/Fri", time: "7:00-9:00 PM", location: "Main Gym" },
    { team: "17U Elite", days: "Tue/Thu/Sat", time: "6:00-8:00 PM", location: "Main Gym" },
    { team: "16U Elite", days: "Mon/Wed/Fri", time: "6:00-8:00 PM", location: "Gym 2" },
    { team: "16U Club", days: "Tue/Thu", time: "7:00-9:00 PM", location: "Gym 2" },
    { team: "15U Elite", days: "Mon/Wed/Sat", time: "5:00-7:00 PM", location: "Main Gym" },
    { team: "15U Club", days: "Tue/Thu", time: "6:00-8:00 PM", location: "Gym 3" },
    { team: "14U Elite", days: "Mon/Wed/Fri", time: "5:00-7:00 PM", location: "Gym 2" },
    { team: "14U Club", days: "Tue/Thu", time: "5:00-7:00 PM", location: "Gym 3" },
    { team: "13U", days: "Mon/Wed", time: "5:00-7:00 PM", location: "Gym 3" },
    { team: "12U", days: "Tue/Thu", time: "4:00-6:00 PM", location: "Gym 3" },
  ]

  const upcomingTournaments = [
    {
      name: "Spring Classic Tournament",
      date: "March 22-24, 2024",
      location: "Richmond Convention Center, Richmond VA",
      teams: ["18U Elite", "17U Elite", "16U Elite"],
      type: "Regional",
    },
    {
      name: "Easter Championship",
      date: "March 29-31, 2024",
      location: "Virginia Beach Sports Center",
      teams: ["15U Elite", "14U Elite"],
      type: "Regional",
    },
    {
      name: "National Qualifier",
      date: "April 12-14, 2024",
      location: "Raleigh Convention Center, NC",
      teams: ["18U Elite", "17U Elite"],
      type: "National",
    },
    {
      name: "Local Spring League",
      date: "April 19-21, 2024",
      location: "Goochland Community Center",
      teams: ["16U Club", "15U Club", "14U Club"],
      type: "Local",
    },
    {
      name: "Regional Championships",
      date: "May 3-5, 2024",
      location: "Virginia Commonwealth Sports Complex",
      teams: ["All Elite Teams"],
      type: "Regional",
    },
    {
      name: "National Championships",
      date: "July 15-20, 2024",
      location: "Phoenix Convention Center",
      teams: ["Qualifying Teams"],
      type: "National",
    },
  ]

  const importantDates = [
    { event: "Spring Season Registration Deadline", date: "March 31, 2024", type: "Registration" },
    { event: "Team Tryouts", date: "April 5-7, 2024", type: "Tryouts" },
    { event: "Parent Information Night", date: "April 10, 2024", type: "Meeting" },
    { event: "Fundraising Dinner", date: "April 25, 2024", type: "Fundraiser" },
    { event: "Awards Banquet", date: "May 15, 2024", type: "Event" },
    { event: "Summer Camp Registration Opens", date: "May 20, 2024", type: "Registration" },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Schedule & Calendar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with practice schedules, tournament dates, and important club events.
          </p>
        </div>

        {/* Google Calendar Integration Notice */}
        <div className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Sync with Google Calendar</h3>
                  <p className="text-red-700 mb-4">
                    Never miss a practice or tournament! Subscribe to our Google Calendar to get automatic updates on
                    your device.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700">Subscribe to Calendar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Practice Schedule */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Weekly Practice Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceSchedule.map((practice, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{practice.team}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{practice.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{practice.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{practice.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Tournaments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Tournaments</h2>
          <div className="space-y-6">
            {upcomingTournaments.map((tournament, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{tournament.name}</CardTitle>
                      <CardDescription className="text-lg">{tournament.date}</CardDescription>
                    </div>
                    <Badge
                      variant={
                        tournament.type === "National"
                          ? "default"
                          : tournament.type === "Regional"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {tournament.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>{tournament.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span>Teams: {tournament.teams.join(", ")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantDates.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.event}</h3>
                      <p className="text-gray-600 mb-2">{item.date}</p>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for Schedule Questions */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Questions About the Schedule?</h3>
              <p className="text-gray-600 mb-6">
                Need clarification on practice times, tournament details, or have scheduling conflicts? Our staff is
                here to help.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
