import React from "react";
import { InlineWidget } from "react-calendly";
import { useEffect } from "react";
import getCalendlyEvents from "@/API/calendly";

const clientId = "DGI6rHigANOz1heNV3iNfhNErf6-S7_8VOnoFmE2rxs";
const clientSecret = "fjK2v3jsmioE_Rd_x1qYd3PFYJRwYWNxWfikguzpUG0";
const token =
  "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjgzNjk1MDE0LCJqdGkiOiJkMTk4ODZmMS04NGMxLTRkNDAtOTlkNS00ZjYwMWJmY2Y0YWQiLCJ1c2VyX3V1aWQiOiI1ZmI1ZjVlYi05ODY3LTRkMDQtYjFjZC0zZmIzYmVjMDI5M2UifQ.Je_rx7k1U25_ovrNZgiXDxy8i8ov8y75MocytdnKCNmPoJHJn6xzxpmLuD4BcEFPUXE2rO8UtlB3VlJRNFlK3A";

const apiKey = "SRRZ5TCL5PSTCQNTNP6FLNBUE6IAH333";
const user = "webbyurvish@gmail.com";

export default function Schedules() {
  return (
    <div>
      <InlineWidget url="https://calendly.com/webbyurvish" />
      {/* <Link href="https://calendly.com/app/scheduled_events/user/me"></Link> */}
    </div>
  );
}
