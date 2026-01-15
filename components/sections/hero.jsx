"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center pt-16"
		>
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30 z-10" />
				<div className="w-full h-full bg-slate-900 bg-[url('/images/herobg.png')] bg-cover bg-center" />
			</div>

			<div className="px-4 lg:px-20 relative z-20 text-white">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-3xl space-y-6"
				>
					<h1 className="text-4xl md:text-6xl font-bold leading-tight">
						YOUR GROUND-MOUNT MMS, ENGINEERED & DELIVERED WITH PRECISION.
					</h1>
					<p className="text-lg md:text-xl text-gray-200 max-w-2xl">
						At Pebsol, we specialise in roll-forming mounting structures for
						solar power plants — engineered for speed, strength and alignment at
						every metre.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<Button
							size="lg"
							className="rounded-full bg-white text-black hover:bg-gray-200 gap-2"
						>
							Get Your Free Site Estimate <ArrowUpRight className="w-4 h-4" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="rounded-full bg-transparent text-white border-white hover:bg-white/10 gap-2"
						>
							View Typical Structure Drawings{" "}
							<ArrowUpRight className="w-4 h-4" />
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
