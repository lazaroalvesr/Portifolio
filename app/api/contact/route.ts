import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { nome, email, telefone, mensagem } = await req.json()

        await resend.emails.send({
            from: "Contato do Site Lázaro Alves R <contato@lazaroalvesr.com>",
            to: ["lazaroalves12355@gmail.com"],
            replyTo: email,
            subject: "📩 Nova mensagem de contato",
            html: `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color:#0b0b0b; padding:24px;">
      <div style="max-width:600px; margin:0 auto; background:#111; border-radius:12px; padding:24px; color:#ffffff;">
        
        <h2 style="margin-bottom:16px; border-bottom:1px solid #222; padding-bottom:12px;">
          Nova mensagem recebida
        </h2>

        <p style="margin:8px 0;"><strong>Nome:</strong> ${nome}</p>
        <p style="margin:8px 0;"><strong>E-mail:</strong> ${email}</p>
        <p style="margin:8px 0;"><strong>Telefone:</strong> ${telefone}</p>

        <div style="margin-top:20px;">
          <p style="margin-bottom:8px;"><strong>Mensagem:</strong></p>
          <div style="background:#1a1a1a; padding:16px; border-radius:8px; line-height:1.6;">
            ${mensagem.replace(/\n/g, "<br />")}
          </div>
        </div>

        <p style="margin-top:24px; font-size:12px; color:#888;">
          Esta mensagem foi enviada através do formulário de contato do site.
        </p>
      </div>
    </div>
  `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
