import "server-only"
import { clerkClient } from "@clerk/nextjs/server"
import { google } from "googleapis"
import { addMinutes, endOfDay, startOfDay } from "date-fns"

export async function getCalendarEventTimes(
  clerkUserId: string,
  { start, end }: { start: Date; end: Date }
) {
  const oAuthClient = await getOAuthClient(clerkUserId)

  const events = await google.calendar("v3").events.list({
    calendarId: "primary",
    eventTypes: ["default"],
    singleEvents: true,
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    maxResults: 2500,
    auth: oAuthClient,
  })

  return (
    events.data.items
      ?.map(event => {
        if (event.start?.date != null && event.end?.date != null) {
          return {
            start: startOfDay(event.start.date),
            end: endOfDay(event.end.date),
          }
        }

        if (event.start?.dateTime != null && event.end?.dateTime != null) {
          return {
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
          }
        }
      })
      .filter(date => date != null) || []
  )
}



async function getOAuthClient(clerkUserId: string) {
  console.log("OUR CLERK USER ID IS --->",clerkClient.users)
  const token = await clerkClient().users.getUserOauthAccessToken(
    clerkUserId,
    "oauth_google"
  )

  if (token.data.length === 0 || token.data[0].token == null) {
    return
  }

  const client = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URL
  )

  client.setCredentials({ access_token: token.data[0].token })

  return client
}




export async function createCalendarEvent({
  clerkUserId,
  guestName,
  guestEmail,
  startTime,
  guestNotes,
  durationInMinutes,
  eventName,
}: {
  clerkUserId: string
  guestName: string
  guestEmail: string
  startTime: Date
  guestNotes?: string | null
  durationInMinutes: number
  eventName: string
}) {
  const oAuthClient = await getOAuthClient(clerkUserId)

  const calendarUser = await clerkClient().users.getUser(clerkUserId)
  if (calendarUser.primaryEmailAddress == null) {
    throw new Error("Clerk user has no email")
  }



  //const calendarEvent = await google.calendar("v3").events.insert({
  //  calendarId: "primary",
  //  auth: oAuthClient,
  //  sendUpdates: "all",
  //  requestBody: {
  //    attendees: [
  //      { email: guestEmail, displayName: guestName },
  //      {
  //        email: calendarUser.primaryEmailAddress.emailAddress,
  //        displayName: calendarUser.fullName,
  //        responseStatus: "accepted",
  //      },
  //    ],
  //    conferenceData: {
  //      createRequest: {
  //        requestId: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`, // unique ID for each request
  //        conferenceSolutionKey: {
  //          type: "hangoutsMeet", // required for Google Meet
  //        },
  //      }
  //    }
  //      ,
  //    description: guestNotes ? `Additional Details: ${guestNotes}` : undefined,
  //    start: {
  //      dateTime: startTime.toISOString(),
  //    },
  //    end: {
  //      dateTime: addMinutes(startTime, durationInMinutes).toISOString(),
  //    },
  //    summary: `${guestName} + ${calendarUser.fullName}: ${eventName}`,
  //  },
  //})



  const calendarEvent = await google.calendar("v3").events.insert({
    calendarId: "primary",
    auth: oAuthClient,
    sendUpdates: "all",
    conferenceDataVersion: 1, // required to enable Google Meet
    requestBody: {
      summary: `${guestName} + ${calendarUser.fullName}: ${eventName}`,
      description: guestNotes ? `Additional Details: ${guestNotes}` : undefined,
      start: {
        dateTime: startTime.toISOString(),
      },
      end: {
        dateTime: addMinutes(startTime, durationInMinutes).toISOString(),
      },
      attendees: [
        { email: guestEmail, displayName: guestName },
        {
          email: calendarUser.primaryEmailAddress.emailAddress,
          displayName: calendarUser.fullName,
          responseStatus: "accepted",
        },
      ],
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`, // unique ID for each request
          conferenceSolutionKey: {
            type: "hangoutsMeet", // required for Google Meet
          },
        },
      },
    },
  });

  return calendarEvent.data
}

