exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  if (!process.env.SENDGRID_API_KEY) {
    return { statusCode: 500, body: 'SendGrid API key not configured (SENDGRID_API_KEY)' }
  }
  if (!process.env.SENDGRID_TO) {
    return { statusCode: 500, body: 'Destination email not configured (SENDGRID_TO)' }
  }

  try {
    const data = JSON.parse(event.body)
    // Basic validation
    if(!data.email || !data.message) {
      return { statusCode: 400, body: 'Missing required fields' }
    }

    const from = process.env.SENDGRID_FROM || process.env.SENDGRID_TO
    const to = process.env.SENDGRID_TO

    const payload = {
      personalizations: [{ to: [{ email: to }], subject: `Website contact from ${data.first || ''} ${data.last || ''}`.trim() }],
      from: { email: from },
      content: [
        { type: 'text/plain', value: `Name: ${data.first || ''} ${data.last || ''}\nEmail: ${data.email}\nPhone: ${data.phone || ''}\n\nMessage:\n${data.message}` },
        { type: 'text/html', value: `<p><strong>Name:</strong> ${data.first || ''} ${data.last || ''}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone || ''}</p><h4>Message</h4><p>${(data.message || '').replace(/\n/g, '<br/>')}</p>` }
      ]
    }

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
      },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('SendGrid error', res.status, text)
      return { statusCode: 502, body: 'Email service error' }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('Contact function error:', err)
    return { statusCode: 500, body: 'Server error' }
  }
}
