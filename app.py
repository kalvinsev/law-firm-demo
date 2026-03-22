import os
from flask import Flask, request
import anthropic
import requests

app = Flask(__name__)

ANTHROPIC_KEY = os.environ.get("ANTHROPIC_API_KEY")
SLACK_WEBHOOK = os.environ.get("SLACK_WEBHOOK_URL")

def read_soul():
    with open("soul.md", "r") as f:
        return f.read()

def classify_intake(message, sender):
    client = anthropic.Anthropic(api_key=ANTHROPIC_KEY)
    soul = read_soul()

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=800,
        messages=[{
            "role": "user",
            "content": f"""{soul}

---
New inquiry from: {sender}
Message: {message}

Respond with the exact output format specified above.
Nothing else — no preamble, no sign-off."""
        }]
    )
    return response.content[0].text.strip()

def post_to_slack(result, sender, original_msg):
    # Parse urgency for emoji
    urgency = "MEDIUM"
    if "URGENCY: HIGH" in result:
        urgency = "HIGH"
    elif "URGENCY: LOW" in result:
        urgency = "LOW"

    emoji = {"HIGH": ":red_circle:", "MEDIUM": ":yellow_circle:", "LOW": ":white_circle:"}[urgency]

    blocks = [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": f"{emoji} *New Intake — {urgency} Priority*\n*From:* {sender}"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": f"*Original message:*\n_{original_msg}_"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": f"```{result}```"
            }
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "button",
                    "text": {"type": "plain_text", "text": "Send Reply"},
                    "style": "primary",
                    "value": "send"
                },
                {
                    "type": "button",
                    "text": {"type": "plain_text", "text": "Call Client"},
                    "value": "call"
                }
            ]
        }
    ]

    requests.post(SLACK_WEBHOOK, json={"blocks": blocks})

@app.route("/sms", methods=["POST"])
def sms():
    sender = request.form.get("From", "Unknown")
    message = request.form.get("Body", "")

    if not message:
        return "ok", 200

    result = classify_intake(message, sender)
    post_to_slack(result, sender, message)

    # Optional: auto-reply to the sender via Twilio
    return (
        '<?xml version="1.0" encoding="UTF-8"?>'
        '<Response><Message>Thank you for reaching out to Mitchell &amp; Associates. '
        'An attorney will be in touch within 2 business hours.</Message></Response>'
    ), 200, {'Content-Type': 'text/xml'}

@app.route("/health")
def health():
    return {"status": "running"}, 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)