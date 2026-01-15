"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fadeIn } from "@/lib/animations";

export default function ProjectInquiry() {
	return (
		<section id="contact" className="py-10 bg-background">
			<div className="px-4 lg:px-20">
				<motion.div {...fadeIn}>
					<div className="mb-12">
						<span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
							Get Started
						</span>
						<h2 className="text-4xl md:text-5xl font-bold mt-2">
							Tell us about your project
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-8">
						<div className="space-y-2">
							<Label htmlFor="capacity">Capacity (MW)</Label>
							<Input
								id="capacity"
								placeholder="e.g. 50 MW"
								className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent shadow-none"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="location">Location & terrain</Label>
							<Input
								id="location"
								placeholder="e.g. Rajasthan, Rocky"
								className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent shadow-none"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="soil">
								Soil or foundation type (ramming, pile, ballast)
							</Label>
							<Input
								id="soil"
								placeholder="e.g. Pile foundation"
								className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent shadow-none"
							/>
						</div>
					</div>

					<div className="space-y-2 mb-8">
						<Label htmlFor="timeline">Desired timeline & milestones</Label>
						<Textarea
							id="timeline"
							placeholder="e.g. Q3 2024"
							className="min-h-20 border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent shadow-none resize-none"
						/>
					</div>

					<div className="space-y-2 mb-12">
						<Label htmlFor="requirements">
							Any special structural or alignment requirement
						</Label>
						<Textarea
							id="requirements"
							placeholder="Tell us more about your specific needs..."
							className="min-h-20 border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent shadow-none resize-none"
						/>
					</div>

					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							className="rounded-full gap-2 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black"
							size="lg"
						>
							Submit RFQ <ArrowUpRight className="w-4 h-4" />
						</Button>
						<Button variant="outline" className="rounded-full gap-2" size="lg">
							Speak with an Engineer <ArrowUpRight className="w-4 h-4" />
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
