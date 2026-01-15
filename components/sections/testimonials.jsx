"use client";
import { motion } from "framer-motion";
import { Star, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonialsData } from "@/constant/data";

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="py-10 bg-slate-50 dark:bg-slate-900/20"
		>
			<div className="px-4 lg:px-20">
				<div className="text-center mb-12">
					<span className="text-sm font-semibold text-primary uppercase tracking-wider">
						TESTIMONIAL
					</span>
					<h2 className="text-3xl md:text-5xl font-bold mt-2 flex items-center justify-center gap-2">
						Wall of Love <span className="text-purple-500">💜</span>
					</h2>
				</div>

				<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
					{testimonialsData.map((testimonial, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="break-inside-avoid"
						>
							<Card className="border-none shadow-sm hover:shadow-md transition-shadow">
								<CardContent className="p-6">
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center gap-3">
											<img
												src={testimonial.avatar}
												alt={testimonial.name}
												className="w-10 h-10 rounded-full"
											/>
											<div>
												<p className="font-semibold text-sm">
													{testimonial.name}
												</p>
												<p className="text-xs text-muted-foreground">
													{testimonial.handle}
												</p>
											</div>
										</div>
										<Twitter className="w-4 h-4 text-muted-foreground" />
									</div>

									<div className="flex gap-0.5 mb-3">
										{[1, 2, 3, 4, 5].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>

									<p className="text-sm leading-relaxed">
										{testimonial.text
											.split(testimonial.highlight)
											.map((part, i, arr) => (
												<span key={i}>
													{part}
													{i < arr.length - 1 && (
														<span className="bg-[#CCFBF1CC] text-primary px-1 rounded">
															{testimonial.highlight}
														</span>
													)}
												</span>
											))}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
