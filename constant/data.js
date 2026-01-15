import {
	Check,
	Star,
	Twitter,
	Instagram,
	Facebook,
	Linkedin,
} from "lucide-react";

export const NAV_LINKS = [
	{ label: "Home", href: "#hero" },
	{ label: "Solutions", href: "#solutions" },
	{ label: "Our Promise", href: "#our-promise" },
	{ label: "Contact", href: "#contact" },
];

// Backwards compatibility for existing components if any
export const navLinks = NAV_LINKS;

export const FOOTER_LINKS = [
	{
		title: "Company",
		links: [
			{ label: "Why Pebsol", href: "#why-pebsol" },
			{ label: "How We Work", href: "#how-we-work" },
			{ label: "Our Promise", href: "#our-promise" },
		],
	},
	{
		title: "Technical",
		links: [
			{ label: "Solutions", href: "#solutions" },
			{ label: "Highlights", href: "#technical-highlights" },
			{ label: "Typical Problems", href: "#typical-problems" },
		],
	},
	{
		title: "Support",
		links: [
			{ label: "Contact", href: "#contact" },
			{ label: "Testimonials", href: "#testimonials" },
		],
	},
];

export const footerLinks = FOOTER_LINKS;

export const whyPebsolData = [
	{
		title: "Roll-forming mastery",
		desc: "We manufacture high-precision profiles in-house, ensuring consistency, tolerances and repeatability across large-scale projects.",
	},
	{
		title: "Ground-mount expertise",
		desc: "All our systems designed for utility & commercial solar plants, handling varied soils, terrain and installation environments.",
	},
	{
		title: "Speed + simplicity",
		desc: "With roll-formed sections, high-efficiency fabrication and modular design, we reduce on-site complexity and shorten install timelines.",
	},
	{
		title: "Durability first",
		desc: "Engineered to meet industry standards for wind, tilt, soil, corrosion and longevity — your structure should outlast the panels.",
	},
];

export const howWeWorkData = [
	{
		title: "DESIGN → ROLL-FORM → SUPPLY CHAIN",
		image: "/images/hwwimg1.png",
	},
	{
		title: "MANUFACTURING & QUALITY CONTROL",
		image: "/images/hwwimg2.png",
	},
	{
		title: "END-TO-END ACCOUNTABILITY",
		image: "/images/hwwimg3.png",
	},
];

export const technicalHighlightsData = [
	"Wind design capacity up to X km/h (customised to site)",
	"Material options: HDG / ZAM / Galvalume (or as per client)",
	"Design life: 25 years (or more in special cases)",
	"Profile types: C-channel, U-channel, Hat-section — fully roll-formed for consistency",
	"Sorting and logistics: site-labelled packs, erection drawings, QC checklists",
];

export const typicalProblemsData = [
	{
		id: "item-1",
		number: "01",
		title: "Soils & terrain complexity",
		desc: "roll-formed profiles enable custom adaptation to variable soil types, ramming, pile or ballast foundations.",
		image: "/images/problemimg1.png",
	},
	{
		id: "item-2",
		number: "02",
		title: "Supply chain tight timelines",
		desc: "by manufacturing profiles in-house we reduce lead times and minimise sub-supplier dependencies.",
		image: "/images/problemimg1.png",
	},
	{
		id: "item-3",
		number: "03",
		title: "Quality & tolerance drift",
		desc: "our roll-form process ensures uniformity; less variation = smoother installation, less re-work.",
		image: "/images/problemimg1.png",
	},
	{
		id: "item-4",
		number: "04",
		title: "Project accountability gaps",
		desc: "you deal with one partner for structure design, manufacture and delivery — fewer interfaces, clearer outcomes.",
		image: "/images/problemimg1.png",
	},
];

export const ourPromiseData = [
	"Premium precision in fabrication",
	"Accountability across the chain",
	"Transparent planning & communication",
	"On-time delivery without compromise",
];

export const testimonialsData = [
	{
		name: "David Amunga",
		handle: "@davidamunga_",
		avatar: "/images/avatars/avatar1.png",
		text: "This is a neat Pebsol alternative",
		highlight: "neat Pebsol alternative",
	},
	{
		name: "Anant Dubey",
		handle: "@_aanant",
		avatar: "/images/avatars/avatar2.png",
		text: "This can be useful for small projects and businesses as well, to get proof of happy consumers.",
		highlight: "useful for small projects",
	},
	{
		name: "Clive Walkden",
		handle: "@clivewalkden",
		avatar: "/images/avatars/avatar3.png",
		text: "Love this, current tools seem bloated and you pay for features you don't want.",
		highlight: "current tools seem bloated",
	},
	{
		name: "Emanuel Perez",
		handle: "@emanuelperez",
		avatar: "/images/avatars/avatar4.png",
		text: "I dig this concept - Pebsol helped us out a ton with prioritizing customer feedback!",
		highlight: "prioritizing customer feedback",
	},
	{
		name: "Gereltuya Ba",
		handle: "@gereltuyaba",
		avatar: "/images/avatars/avatar5.png",
		text: "Sharing a lovely little tool for PMs I found today: Pebsol! Better user retention when your users know what to expect.",
		highlight: "Better user retention",
	},
	{
		name: "Jaesung Park",
		handle: "@jace_park98",
		avatar: "/images/avatars/avatar6.png",
		text: "Pricing plan seems to be promising. Competitors were too expensive for collecting feedbacks.",
		highlight: "promising",
	},
	{
		name: "Anastasiya Sidorovich",
		handle: "@sidorere",
		avatar: "/images/avatars/avatar7.png",
		text: "Oh please do it! It's been pain in the a** to keep all feedback from different sources consolidated and updated.",
		highlight: "keep all feedback... consolidated",
	},
	{
		name: "Carmen López",
		handle: "@carmenlopez",
		avatar: "/images/avatars/avatar8.png",
		text: "When I worked as CSM, managing feedback was always challenging excited to see how Pebsol simplifies the task.",
		highlight: "Pebsol simplifies the task",
	},
	{
		name: "Jase",
		handle: "@fullstackalien",
		avatar: "/images/avatars/avatar1.png",
		text: "Nice work! Pebsol looks great!",
		highlight: "Pebsol looks great!",
	},
];

export const socialLinks = [
	{ icon: Facebook, href: "#" },
	{ icon: Instagram, href: "#" },
	{ icon: Twitter, href: "#" },
];
