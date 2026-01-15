"use client";

import Image from "next/image";
import Link from "next/link";
import { Hexagon } from "lucide-react";
import { FOOTER_LINKS } from "@/constant/data";
import { useLenis } from "@/components/providers/lenis-provider";

const Footer = () => {
	const lenisRef = useLenis();
	const handleScroll = (e, href) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			const targetId = href.substring(1);
			const element = document.getElementById(targetId);
			if (element) {
				lenisRef?.current?.scrollTo(element, { offset: -80 });
			}
		}
	};

	return (
		<footer className="relative bg-slate-950 text-white pt-10 pb-10 px-6 md:px-0 overflow-hidden">
			{/* Background Image Overlay */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/footerbg.png"
					alt="Seafood Background"
					width={1974}
					height={1280}
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10 "></div>
			</div>

			<div className="px-4 lg:px-20 relative z-10">
				{/* Newsletter Section */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10 border-b border-white/10 pb-12">
					<div className="md:w-1/2">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
							Keep up with the latest
						</h2>
						<p className="text-white text-lg">
							Join our newsletter to stay up to date on features and releases.
						</p>
					</div>
					<div className="md:w-1/2 w-full max-w-md">
						<h3 className="text-white text-sm font-semibold mb-5 tracking-wide uppercase">
							Stay Up to Date with Our Newsletter
						</h3>
						<div className="flex flex-col sm:flex-row gap-3">
							<div className="relative grow">
								<input
									type="email"
									placeholder="Enter your email"
									className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 backdrop-blur-sm transition-all"
								/>
								<span className="absolute -bottom-6 left-6 text-xs text-white">
									By subscribing you agree to our Privacy Policy
								</span>
							</div>
							<button className="rounded-full px-8 py-3.5 bg-white text-slate-950 hover:bg-gray-100 font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Footer Links */}
				<div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 mb-12">
					{/* Brand Column */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center gap-2.5 mb-5">
							{/* LOGO */}
							<span className="text-white font-bold text-3xl tracking-tight">
								Pebsol
							</span>
						</div>
						<p className="text-white text-base max-w-md mb-6 leading-relaxed">
							Specialising in roll-forming mounting structures for solar power
							plants — engineered for speed, strength and alignment at every
							metre.
						</p>
					</div>

					{/* Link Columns */}
					{FOOTER_LINKS.map((column, index) => (
						<div key={index} className="col-span-1">
							<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
								{column.title}
							</h4>
							<ul className="flex flex-col space-y-4">
								{column.links.map((link, idx) => (
									<li key={idx}>
										<Link
											href={link.href}
											className="w-fit text-white text-base transition-colors cursor-pointer block relative group"
											onClick={(e) => handleScroll(e, link.href)}
										>
											<span className="relative">
												{link.label}
												<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>

				<div className="text-center text-white text-sm">
					<p>&copy; {new Date().getFullYear()} Pebsol. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
