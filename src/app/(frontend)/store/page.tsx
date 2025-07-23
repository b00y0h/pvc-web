"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { CreditCard, DollarSign, Calendar } from "lucide-react"

export default function StorePage() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [paymentType, setPaymentType] = useState("")

  const clubFees = [
    { team: "18U Elite", fullAmount: 4500, installments: "5 payments of $900" },
    { team: "17U Elite", fullAmount: 4200, installments: "5 payments of $840" },
    { team: "16U Elite", fullAmount: 4000, installments: "5 payments of $800" },
    { team: "16U Club", fullAmount: 3200, installments: "4 payments of $800" },
    { team: "15U Elite", fullAmount: 3800, installments: "5 payments of $760" },
    { team: "15U Club", fullAmount: 3000, installments: "4 payments of $750" },
    { team: "14U Elite", fullAmount: 3600, installments: "5 payments of $720" },
    { team: "14U Club", fullAmount: 2800, installments: "4 payments of $700" },
    { team: "13U", fullAmount: 2600, installments: "4 payments of $650" },
    { team: "12U", fullAmount: 2500, installments: "4 payments of $625" },
  ]

  const merchandise = [
    { item: "Team T-Shirt", price: 25, description: "Cotton blend with team logo" },
    { item: "Team Hoodie", price: 45, description: "Fleece hoodie with embroidered logo" },
    { item: "Team Shorts", price: 30, description: "Performance shorts for practice" },
    { item: "Team Bag", price: 35, description: "Duffel bag with team colors" },
    { item: "Water Bottle", price: 15, description: "Insulated team water bottle" },
    { item: "Car Decal", price: 10, description: "Patriot VBC car decal" },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Online Store</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pay your club dues, purchase team merchandise, and manage your account payments securely online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Club Dues Payment */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-red-600" />
                  Club Dues Payment
                </CardTitle>
                <CardDescription>
                  Pay your club fees securely online. Choose between full payment or installment plans.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="team-select">Select Your Team</Label>
                  <Select onValueChange={setSelectedTeam}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your team" />
                    </SelectTrigger>
                    <SelectContent>
                      {clubFees.map((fee) => (
                        <SelectItem key={fee.team} value={fee.team}>
                          {fee.team}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedTeam && (
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h3 className="font-semibold text-red-900 mb-2">{selectedTeam} Fee Structure</h3>
                      <div className="space-y-2">
                        <p className="text-red-700">
                          <strong>Full Payment:</strong> $
                          {clubFees.find((f) => f.team === selectedTeam)?.fullAmount.toLocaleString()}
                        </p>
                        <p className="text-red-700">
                          <strong>Payment Plan:</strong> {clubFees.find((f) => f.team === selectedTeam)?.installments}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="payment-type">Payment Type</Label>
                      <Select onValueChange={setPaymentType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full Payment (5% discount)</SelectItem>
                          <SelectItem value="installment">Installment Payment</SelectItem>
                          <SelectItem value="custom">Custom Amount</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {paymentType === "custom" && (
                      <div>
                        <Label htmlFor="custom-amount">Custom Amount</Label>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={paymentAmount}
                          onChange={(e) => setPaymentAmount(e.target.value)}
                        />
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="player-name">Player Name</Label>
                        <Input id="player-name" placeholder="Enter player's full name" />
                      </div>
                      <div>
                        <Label htmlFor="parent-email">Parent Email</Label>
                        <Input id="parent-email" type="email" placeholder="Enter parent email" />
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Proceed to Payment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Payment due dates are sent via email</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    <strong>Accepted Payment Methods:</strong> Credit/Debit Cards, ACH Bank Transfer
                  </p>
                  <p className="mb-2">
                    <strong>Processing Fee:</strong> 3% for credit cards, $5 for ACH transfers
                  </p>
                  <p>
                    <strong>Refund Policy:</strong> Club fees are non-refundable after the season begins
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Merchandise */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Team Merchandise</CardTitle>
                <CardDescription>Show your Patriot pride with official team gear!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {merchandise.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{item.item}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${item.price}</p>
                        <Button size="sm" variant="outline">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Sizing Information</h3>
                  <p className="text-sm text-gray-600">
                    Please refer to our sizing chart before ordering. All sales are final on merchandise items.
                  </p>
                  <Button variant="link" className="p-0 text-red-600">
                    View Sizing Chart
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Balance */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Account Balance</CardTitle>
                <CardDescription>Check your current balance and payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-semibold">Current Balance:</span>
                    <span className="text-green-700 font-bold">$0.00</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Recent Payments:</h4>
                    <div className="text-sm text-gray-600">
                      <p>No recent payments found. Please log in to view your payment history.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Payment History
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Questions */}
            <Card className="mt-6 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-900 mb-2">Questions About Payments?</h3>
                <p className="text-red-700 text-sm mb-4">
                  Contact our office for assistance with payments, billing questions, or technical support.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-red-800">
                    <strong>Email:</strong> billing@patriotvolleyball.com
                  </p>
                  <p className="text-red-800">
                    <strong>Phone:</strong> (804) 555-0123
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
