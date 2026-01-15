"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";

export default function Solutions() {
	return (
		<section id="solutions" className="py-10 bg-background">
			<div className="px-4 lg:px-20">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div {...fadeIn} className="space-y-8">
						<h2 className="text-3xl md:text-5xl font-bold">
							Our Ground-Mount Solutions
						</h2>

						<div className="space-y-8">
							<div className="space-y-3">
								<h3 className="text-2xl font-semibold">1 Fixed Tilt Systems</h3>
								<p className="text-muted-foreground">
									Ideal when you want low-maintenance, stable performance. Set
									and forget: no moving parts, simpler logistics, more
									predictable O&M costs.
								</p>
							</div>

							<div className="space-y-3">
								<h3 className="text-2xl font-semibold">
									2 Seasonal Tilt Structures
								</h3>
								<p className="text-muted-foreground">
									For sites where extra yield matters — adjust the panel tilt a
									couple of times per year, boosting energy capture while
									maintaining cost-effectiveness.
								</p>
							</div>
						</div>

						<Button className="rounded-full gap-2" size="lg">
							Download Technical Specifications{" "}
							<ArrowUpRight className="w-4 h-4" />
						</Button>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative aspect-square lg:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl"
					>
						<Image
							src="/images/solutionimg.png"
							alt="Solutions Image"
							layout="fill"
							objectFit="cover"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
