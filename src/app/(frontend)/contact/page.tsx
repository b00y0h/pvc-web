"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    playerAge: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Ready to join Patriot Volleyball Club? Have questions about our
            programs? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="playerAge">Player Age Group</Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange("playerAge", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12u">12U</SelectItem>
                          <SelectItem value="13u">13U</SelectItem>
                          <SelectItem value="14u">14U</SelectItem>
                          <SelectItem value="15u">15U</SelectItem>
                          <SelectItem value="16u">16U</SelectItem>
                          <SelectItem value="17u">17U</SelectItem>
                          <SelectItem value="18u">18U</SelectItem>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      onValueChange={(value) => handleChange("subject", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tryouts">
                          Tryout Information
                        </SelectItem>
                        <SelectItem value="registration">
                          Registration Questions
                        </SelectItem>
                        <SelectItem value="schedule">
                          Schedule Inquiry
                        </SelectItem>
                        <SelectItem value="costs">Costs & Fees</SelectItem>
                        <SelectItem value="coaching">
                          Coaching Questions
                        </SelectItem>
                        <SelectItem value="sponsorship">
                          Sponsorship Opportunities
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Reach out to us directly using any of the methods below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-red-100 p-3">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(804) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-green-100 p-3">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@patriotvolleyball.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-purple-100 p-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      2900 River Road West
                      <br />
                      Goochland, VA 23063
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">12:00 PM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Key Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Club Director</p>
                  <p className="text-sm">sarah@patriotvolleyball.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Lisa Chen</h4>
                  <p className="text-sm text-gray-600">Operations Manager</p>
                  <p className="text-sm">lisa@patriotvolleyball.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Mike Rodriguez</h4>
                  <p className="text-sm text-gray-600">Assistant Director</p>
                  <p className="text-sm">mike@patriotvolleyball.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-red-700">
                  For urgent matters during tournaments or events:
                </p>
                <p className="font-semibold text-red-800">(555) 999-HELP</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
