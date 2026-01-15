"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whyPebsolData } from "@/constant/data";
import { fadeIn, staggerContainer, item } from "@/lib/animations";

export default function WhyPebsol() {
	return (
		<section id="why-pebsol" className="py-10 bg-background">
			<div className="px-4 lg:px-20">
				<motion.div {...fadeIn} className="text-center mb-16 space-y-4">
					<h2 className="text-3xl md:text-5xl font-bold">Why Pebsol?</h2>
					<p className="text-muted-foreground text-lg">
						Because the foundation of reliable solar power starts with the
						structure.
					</p>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{whyPebsolData.map((data, i) => (
						<motion.div key={i} variants={item}>
							<Card className="h-full border-none shadow-sm bg-gray-100 dark:bg-slate-900">
								<CardHeader>
									{/* Icon */}
									<Image
										src="/images/tradingicon.png"
										alt={data.title}
										width={24}
										height={24}
										className="mb-4 w-12 h-auto object-contain"
									/>
									<CardTitle className="text-xl mb-2">{data.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{data.desc}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="mt-12 text-center">
					<Button className="rounded-full gap-2" size="lg">
						Schedule a Technical Briefing <ArrowUpRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}
