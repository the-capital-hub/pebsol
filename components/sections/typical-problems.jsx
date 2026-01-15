"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { typicalProblemsData } from "@/constant/data";
import { fadeIn } from "@/lib/animations";

export default function TypicalProblems() {
	return (
		<section id="typical-problems" className="py-10 bg-background">
			<div className="px-4 lg:px-20">
				<motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-16">
					Typical Problems We Solve
				</motion.h2>

				<div className="space-y-4">
					<Accordion
						type="single"
						collapsible
						className="w-full"
						defaultValue="item-1"
					>
						{typicalProblemsData.map((item) => (
							<AccordionItem
								key={item.id}
								value={item.id}
								className="border-b-2 px-6 py-4 rounded-2xl data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-900/50 mb-4 border border-transparent data-[state=open]:border-slate-100 dark:data-[state=open]:border-slate-800"
							>
								<AccordionTrigger className="hover:no-underline py-0">
									<div className="flex items-center gap-6 w-full text-left">
										<span className="text-3xl font-bold text-muted-foreground">
											{item.number}
										</span>
										<div className="flex-1">
											<h3 className="text-xl md:text-2xl font-bold">
												{item.title}
											</h3>
											<p className="text-muted-foreground mt-1 text-base font-normal">
												{item.desc}
											</p>
										</div>
										<div className="hidden sm:flex items-center justify-center shrink-0 cursor-pointer pr-2">
											Know More
										</div>
									</div>
								</AccordionTrigger>
								<AccordionContent className="pt-6">
									{item.image && (
										<div className="mt-4">
											<img
												src={item.image}
												alt={item.title}
												className="rounded-xl w-full h-64 object-cover"
											/>
											{/* <div className="rounded-xl w-full h-64 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
												<span className="text-muted-foreground">
													Additional Detail Image
												</span>
											</div> */}
										</div>
									)}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="mt-12 text-center">
					<Button
						className="rounded-full gap-2 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black"
						size="lg"
					>
						Let Us Assess Your Site Challenges{" "}
						<ArrowUpRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}
