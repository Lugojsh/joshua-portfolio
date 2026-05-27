import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env['RESEND_API_KEY']

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Servicio de correo no configurado' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return new Response(
      JSON.stringify({ error: 'Petición inválida' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    )
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return new Response(
      JSON.stringify({ error: 'Datos inválidos', details: result.error.flatten() }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    )
  }

  const { name, email, message } = result.data
  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'joshualugogutierrez@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <p><strong>De:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee; margin: 1rem 0;" />
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
      replyTo: email,
    })

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  } catch (err) {
    console.error('Resend error:', err)
    return new Response(
      JSON.stringify({ error: 'Error al enviar el correo' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
