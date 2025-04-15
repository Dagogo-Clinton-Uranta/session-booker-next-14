import { CopyEventButton } from "@/components/CopyEventButton"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { db } from "@/drizzle/db"
import { formatEventDescription } from "@/lib/formatters"
import { cn } from "@/lib/utils"
import { auth } from "@clerk/nextjs/server"
import { CalendarPlus, CalendarRange } from "lucide-react"
import Link from "next/link"

export const revalidate = 0

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[1350px] mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
          <CardDescription>
            Learn how we handle your data and protect your privacy when using our calendar booking application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700">
          <p>
            This Privacy Policy outlines how we collect, use, and safeguard your information when you use our calendar booking application.
          </p>

          <h2 className="font-semibold text-base">1. Information We Collect</h2>
          <p>
            When you use our Service, we may collect personal information such as your name, email address, and calendar data. This is primarily collected through Google OAuth and the Google Calendar API, with your explicit consent.
          </p>

          <h2 className="font-semibold text-base">2. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul className="list-disc pl-6">
            <li>Display and manage your calendar events</li>
            <li>Schedule events on your behalf</li>
            <li>Ensure secure authentication through Google OAuth</li>
          </ul>

          <h2 className="font-semibold text-base">3. Google Calendar API Use</h2>
          <p>
            Our use of Google user data adheres to Google's API Services User Data Policy, including the Limited Use requirements. Calendar data is used only within the app for its intended functionality and is never shared with third parties.
          </p>

          <h2 className="font-semibold text-base">4. Data Retention</h2>
          <p>
            We retain your data only as long as needed to provide you with our services. Calendar event data is not stored on our servers unless explicitly stated and required for functionality.
          </p>

          <h2 className="font-semibold text-base">5. Security</h2>
          <p>
            We implement industry-standard measures to protect your data. Access to your information is restricted and encrypted where appropriate.
          </p>

          <h2 className="font-semibold text-base">6. Your Choices</h2>
          <p>
            You can revoke our access to your Google account at any time via your Google account settings. You may also request data deletion by contacting us directly.
          </p>

          <h2 className="font-semibold text-base">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page and, where appropriate, notified to you.
          </p>

          <h2 className="font-semibold text-base">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at privacy@yourcalendarapp.com.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}