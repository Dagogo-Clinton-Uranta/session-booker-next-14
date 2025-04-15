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

export default function TermsOfServicePage() {
  return (
    <div className="max-w-[1350px] mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Terms of Service</CardTitle>
          <CardDescription>
            Please read these terms of service  carefully before using our calendar booking application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700">
          <p>
            By accessing or using our calendar booking application, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
          </p>

          <h2 className="font-semibold text-base">1. Description of Service</h2>
          <p>
            Our application allows users to schedule and manage calendar events through integration with Google Calendar. The app is designed to streamline event booking, reduce scheduling conflicts, and enhance productivity.
          </p>

          <h2 className="font-semibold text-base">2. Google Calendar API Usage</h2>
          <p>
            Our Service uses the Google Calendar API to access, display, and manage your calendar events with your permission. We only request access to scopes that are necessary for core functionality:
          </p>
          <ul className="list-disc pl-6">
            <li>View your calendars</li>
            <li>Create and edit events</li>
            <li>Delete events upon user request</li>
          </ul>
          <p>
            Your data is not shared with any third parties and is only used to provide functionality related to your calendar.
          </p>

          <h2 className="font-semibold text-base">3. User Data</h2>
          <p>
            We respect your privacy. Calendar data accessed via the Google Calendar API is used solely to display and manage your events within the application. We do not store or share this data unless explicitly permitted.
          </p>

          <h2 className="font-semibold text-base">4. Account and Authentication</h2>
          <p>
            You must sign in using Google OAuth to use the Service. This ensures secure authentication and accurate access control to your calendar data.
          </p>

          <h2 className="font-semibold text-base">5. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason.
          </p>

          <h2 className="font-semibold text-base">6. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the Service after changes indicates acceptance of the new Terms.
          </p>

          <h2 className="font-semibold text-base">7. Contact</h2>
          <p>
            For any questions about these Terms, please contact us at support@yourcalendarapp.com.
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