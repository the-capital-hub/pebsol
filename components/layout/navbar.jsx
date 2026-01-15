"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constant/data";
import {
	motion,
	useScroll,
	useMotionValueEvent,
	AnimatePresence,
} from "framer-motion";
import { Menu, X, Hexagon, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/providers/lenis-provider";

const Navbar = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("#hero");
	const lenisRef = useLenis();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();

		// Scrolled state for background
		if (latest > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}

		// Hidden state for scroll direction
		if (latest > previous && latest > 150) {
			setHidden(true);
			setIsMobileMenuOpen(false); // Close mobile menu on scroll down
		} else {
			setHidden(false);
		}
	});

	useEffect(() => {
		const handleScroll = () => {
			const sections = NAV_LINKS.map((link) => link.href.substring(1));
			const scrollPosition = window.scrollY + 100; // Offset for navbar

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveLink(`#${section}`);
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (e, href) => {
		e.preventDefault();
		const targetId = href.substring(1);
		const element = document.getElementById(targetId);
		if (element) {
			lenisRef?.current?.scrollTo(element, { offset: -80 });
			setActiveLink(href);
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<motion.header
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
				scrolled
					? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-2"
					: "bg-transparent py-4"
			)}
		>
			<div className="flex items-center justify-between px-6 md:px-12 mx-auto">
				{/* Logo */}
				<div
					className="flex items-center gap-2 cursor-pointer"
					onClick={(e) => scrollToSection(e, "#hero")}
				>
					<span
						className={cn(
							"font-bold text-xl tracking-wider uppercase transition-colors",
							scrolled ? "text-slate-900" : "text-white"
						)}
					>
						Pebsol
					</span>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{NAV_LINKS.filter((link) => link.label !== "Contact").map(
						(link, index) => (
							<Link
								key={index}
								href={link.href}
								onClick={(e) => scrollToSection(e, link.href)}
								className={cn(
									"text-sm font-medium transition-colors hover:text-opacity-80 uppercase tracking-wide",
									scrolled
										? activeLink === link.href
											? "text-slate-900 font-bold"
											: "text-slate-600"
										: activeLink === link.href
										? "text-white font-bold"
										: "text-white/80"
								)}
							>
								{link.label}
							</Link>
						)
					)}
				</nav>

				{/* Contact Button */}
				<Button
					className={cn(
						"rounded-full gap-2 transition-all hidden md:flex items-center justify-center cursor-pointer",
						scrolled
							? "bg-slate-900 text-white hover:bg-slate-800"
							: "bg-white text-slate-900 hover:bg-white/90"
					)}
					onClick={(e) => scrollToSection(e, "#contact")}
				>
					Contact Us <ArrowUpRight className="w-4 h-4" />
				</Button>

				{/* Mobile Menu Toggle */}
				<button
					className={cn(
						"md:hidden p-2 rounded-full transition-colors",
						scrolled
							? "text-slate-900 hover:bg-gray-100"
							: "text-white hover:bg-white/10"
					)}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
					>
						<div className="flex flex-col px-6 py-4 space-y-4">
							{NAV_LINKS.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									className={cn(
										"font-medium py-2 transition-colors uppercase tracking-wide",
										activeLink === link.href
											? "text-slate-900"
											: "text-gray-600 hover:text-black"
									)}
									onClick={(e) => scrollToSection(e, link.href)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Navbar;
