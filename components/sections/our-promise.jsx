"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ourPromiseData } from "@/constant/data";
import { fadeIn } from "@/lib/animations";

export default function OurPromise() {
	return (
		<section
			id="our-promise"
			className="h-screen py-10 bg-white relative overflow-hidden"
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="w-dvw h-screen rounded-2xl overflow-hidden absolute inset-0 z-0 resize-none"
			>
				<div className="absolute inset-0 bg-[url('/images/promiseimg.png')] bg-cover bg-center" />
			</motion.div>

			<div className="px-4 lg:px-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<motion.div {...fadeIn}>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">Our Promise</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Pebsol isn't just a supplier — we're your structural partner for
							solar ground-mount success. Expect:
						</p>

						<div className="grid sm:grid-cols-2 gap-4">
							{ourPromiseData.map((promise, i) => (
								<div
									key={i}
									className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
								>
									<div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm">
										<Home className="w-4 h-4" />
									</div>
									<span className="font-medium text-sm">{promise}</span>
								</div>
							))}
						</div>

						<div className="mt-8">
							<Button
								className="rounded-full gap-2 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black"
								size="lg"
							>
								Launch Your Project Planning{" "}
								<ArrowUpRight className="w-4 h-4" />
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
