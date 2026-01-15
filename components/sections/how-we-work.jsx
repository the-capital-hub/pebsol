"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { howWeWorkData } from "@/constant/data";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function HowWeWork() {
	return (
		<section
			id="how-we-work"
			className="py-10 bg-slate-50 dark:bg-slate-900/20"
		>
			<div className="px-4 lg:px-20">
				<motion.h2
					{...fadeIn}
					className="text-3xl md:text-5xl font-bold text-center mb-16"
				>
					How We Work
				</motion.h2>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid md:grid-cols-3 gap-6"
				>
					{howWeWorkData.map((item, i) => (
						<motion.div
							key={i}
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0 },
							}}
							className="group relative aspect-4/4 rounded-2xl overflow-hidden cursor-pointer"
						>
							<div
								className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
								style={{ backgroundImage: `url(${item.image})` }}
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
							<div className="absolute bottom-0 left-0 p-6 w-full">
								<div className="flex justify-between items-end">
									<h3 className="text-white font-bold text-xl uppercase max-w-[80%]">
										{item.title}
									</h3>
									<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
										<ArrowUpRight className="w-4 h-4 text-black" />
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<div className="mt-12 text-center">
					<Button className="rounded-full gap-2" size="lg">
						Request Our Installation Workflow Video{" "}
						<ArrowUpRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}
