"use client";
import { useEffect, createContext, useContext, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({ children }) {
	const lenisRef = useRef(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: "vertical",
			gestureDirection: "vertical",
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
		});

		lenisRef.current = lenis;

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenisRef.current = null;
			lenis.destroy();
		};
	}, []);

	return (
		<LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
	);
}
