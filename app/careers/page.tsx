import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
    const jobOpenings = [
        {
            id: 1,
            title: "Heavy Equipment Operator",
            location: "Multiple Locations",
            description: "We're seeking experienced heavy equipment operators to join our team. You'll be responsible for operating various types of machinery on construction sites.",
            tags: ["Full-time", "On-site"]
        },
        {
            id: 2,
            title: "Mechanical Engineer",
            location: "Houston, TX",
            description: "Design and develop innovative heavy machinery solutions. You'll work on cutting-edge projects and collaborate with cross-functional teams.",
            tags: ["Full-time", "Hybrid"]
        },
        {
            id: 3,
            title: "Sales Representative",
            location: "Chicago, IL",
            description: "Join our sales team to help customers find the right heavy machinery solutions for their needs. Strong communication skills and industry knowledge required.",
            tags: ["Full-time", "Remote"]
        },
        {
            id: 4,
            title: "Service Technician",
            location: "Multiple Locations",
            description: "Provide top-notch maintenance and repair services for our heavy machinery. You'll ensure our equipment operates at peak performance.",
            tags: ["Full-time", "On-site"]
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow bg-gray-100">
                <section id="openings" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
                        <div className="grid gap-6">
                            {jobOpenings.map((job, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{job.title}</CardTitle>
                                        <CardDescription>{job.location}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{job.description}</p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <div>
                                            {job.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="secondary" className="mr-2">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button asChild>
                                            <Link href={`/careers/apply/${job.id}`}>Apply Now</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">{`Don't See a Position That Fits?`}</h2>
                        <p className="text-xl mb-8">{`We're always looking for talented individuals to join our team. If you think you'd be a valuable addition, we want to hear from you!`}</p>
                        <Button asChild size="lg">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}
