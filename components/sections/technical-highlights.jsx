"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { technicalHighlightsData } from "@/constant/data";
import { fadeIn } from "@/lib/animations";

export default function TechnicalHighlights() {
	return (
		<section
			id="technical-highlights"
			className="min-h-screen relative py-10 bg-slate-900 text-white overflow-hidden  flex items-end"
		>
			<div className="absolute inset-0 z-0 opacity-40">
				<div className="w-full h-full bg-[url('/images/highlightbg.png')] bg-cover bg-center" />
			</div>

			<div className="px-4 lg:px-20 relative z-10">
				<motion.div {...fadeIn} className="space-y-12">
					<h2 className="text-3xl md:text-5xl font-bold">
						Technical Highlights
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{technicalHighlightsData.map((text, i) => (
							<div
								key={i}
								className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
							>
								<p className="font-medium">{text}</p>
							</div>
						))}
					</div>

					<div className="flex justify-end">
						<Button
							className="rounded-full bg-white text-black hover:bg-gray-200 gap-2"
							size="lg"
						>
							See Our Material & QA Specification Sheet{" "}
							<ArrowUpRight className="w-4 h-4" />
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
