"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        interesse: "",
        mensagem: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (!res.ok) throw new Error("Failed")

            setSubmitStatus("success")
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                interesse: "",
                mensagem: "",
            })
        } catch (error) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const formatTelefone = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})\d+?$/, "$1")
    }

    return (
        <div className="text-white px-4 py-16 sm:px-6 lg:px-8" id="contato">
            <div className="mx-auto max-w-2xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        Entre em <span className="text-gray-400">contato</span>
                    </h1>
                    <p className="text-lg text-gray-400">Preencha o formulário abaixo e retornaremos em breve</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="nome" className="block text-sm font-medium text-white">
                            Nome completo
                        </label>
                        <input
                            id="nome"
                            type="text"
                            required
                            value={formData.nome}
                            onChange={(e) => handleChange("nome", e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            placeholder="Seu nome"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="telefone" className="block text-sm font-medium text-white">
                            Telefone
                        </label>
                        <input
                            id="telefone"
                            type="tel"
                            required
                            value={formData.telefone}
                            onChange={(e) =>
                                handleChange("telefone", formatTelefone(e.target.value))
                            }
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            placeholder="(00) 00000-0000"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="mensagem" className="block text-sm font-medium text-white">
                            Mensagem
                        </label>
                        <textarea
                            id="mensagem"
                            required
                            value={formData.mensagem}
                            onChange={(e) => handleChange("mensagem", e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors min-h-37.5 resize-none"
                            placeholder="Conte-nos mais sobre seu projeto ou interesse..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black cursor-pointer hover:bg-gray-200 font-medium py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    </button>

                    {submitStatus === "success" && (
                        <div className="text-center text-green-400 font-medium">Mensagem enviada com sucesso!</div>
                    )}
                </form>
            </div>
        </div>
    )
}
