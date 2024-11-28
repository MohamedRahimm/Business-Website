"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the fullName, email and message to your server
        console.log('Submitted:', { fullName, email, message })
        // Reset form fields
        setFullName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-[url('/hero-img.png')]">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        {`Have questions? We're happy to help!`}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <Input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="mt-1"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="mt-1"
                                placeholder="How can we help you?"
                                rows={4}
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">Or call us at:</p>
                        <p className="text-lg font-semibold text-gray-800">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-600 mt-2">Hours of Operation:</p>
                        <p className="text-sm text-gray-800">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-gray-800">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-sm text-gray-800">Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
