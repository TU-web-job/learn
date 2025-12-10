"use client"
import { useEffect } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Options = {
    selector?: string;
    root?: string | Element | null;
    once ?: boolean;
    resetOnExit?: boolean;
    stagger?: number;
    rootMargin?: string;
    threshold?: number;
    distance?: number;
    durationMs?: number;
    easing?: string;
};

export function useFadeIn(opts?: Options) {
    useEffect(() => {
        const {
            selector = "[data-fade]",
            root = null,
            once = true,
            resetOnExit = false,
            stagger = 80,
            rootMargin = "0px 0px -8% 0px",
            threshold = 0.15,
            distance = 14,
            durationMs = 600, 
            easing = "ease", 
        } = opts ?? {};

        const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

        const rootEl = typeof root === "string" ? document.querySelector(root) : (root ?? null);

        const nodes = Array.from((rootEl ?? document).querySelectorAll<HTMLElement>(selector));

        if(!nodes.length) return;

        const init = (el: HTMLElement) => {
            if ((el as any).__fadeInInit) return;
            (el as any).__fadeInInit = true;

            const dir: Direction = (el.dataset.fade as Direction) || "up";

            el.dataset.fadeOrigOpacity = el.style.opacity || "";
            el.dataset.fadeOrigTransform = el.style.transform || "";
            el.dataset.fadeOrigTransition = el.style.transition || "";
            el.dataset.fadeDir = dir;

            if(prefersReduced) {
                el.style.opacity = el.dataset.fadeOrigopacity || "1";
                el.dataset.fadeOrigTransform = el.style.transform || "";
                el.dataset.fadeOrigTransition = el.style.transition || "";
                return;
            }

            el.style.willChange = "opacity, transform";
            el.style.opacity = "0";

            let translate = "";
            switch (dir) {
                case "up":
                    translate = `translateY(${distance}px)`;
                    break;
                case "down":
                    translate = `translateY(-${distance}px)`;
                    break;
                case "left":
                    translate = `translateY(${distance}px)`;
                    break;
                case "right":
                    translate = `translateY(-${distance}px)`;
                    break;
                case "none":
                    translate = "";
                    break;
            }

            const base = el.dataset.fadeOrigTransform || "";
            el.style.transform = [translate, base].filter(Boolean).join(" ").trim();
            el.style.transition = `opacity ${durationMs}ms ${easing}, transform${durationMs}ms ${easing}`;
        };
        nodes.forEach(init);
        
        if(prefersReduced || typeof IntersectionObserver === "undefined"){
            nodes.forEach((el) => {
                el.style.opacity = el.dataset.fadeOrigOpacity || "1";
                el.style.transform = el.dataset.fadeOrigTransform || "";
                el.style.transition = el.dataset.fadeOrigTransition || "";
                el.style.willChange = "";
            });
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target as HTMLElement;
                    if(entry.isIntersecting) {
                        const idx = nodes.indexOf(el);
                        el.style.transitionDelay = `${Math.max(0, idx) * stagger}ms`;

                        el.style.opacity = "1";
                        el.style.transform = el.dataset.fadeOrigTransform || "";
                        if(once) io.unobserve(el);
                    } else if(!once && resetOnExit) {
                        el.style.transitionDelay = "0ms";
                        const dir: Direction = (el.dataset.fadeDir as Direction) || "up";
                        let translate = "";
                        switch (dir) {
                            case "up":
                                translate = `translateY(${distance}px)`;
                                break;
                            case "down":
                                translate = `translateY(-${distance}px)`;
                                break;
                            case "left":
                                translate = `translateX(${distance}px)`;
                                break;
                            case "right":
                                translate = `translateX(-${distance}px)`;
                                break;
                            case "none":
                                translate = "";
                                break;
                        }
                        const base = el.dataset.fadeOrigTransform || "";
                        el.style.opacity = "0";
                        el.style.transform = [translate, base].filter(Boolean).join(" ").trim();                    }
                });
            },
            {
                root: rootEl instanceof Element ? rootEl : null,
                rootMargin,
                threshold,
            }
        );
        nodes.forEach((el) => io.observe(el));
        return () => io.disconnect();
    },[opts]);
}