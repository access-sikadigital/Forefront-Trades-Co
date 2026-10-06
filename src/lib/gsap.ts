"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

// Register once, client side only. All GSAP plugins are free since v3.13.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, DrawSVGPlugin, Draggable, useGSAP);

  // House easings — used everywhere so the motion feels like one system.
  CustomEase.create("ftc.out", "0.16, 1, 0.3, 1"); // expo-like reveal
  CustomEase.create("ftc.inOut", "0.76, 0, 0.24, 1"); // wipes, masks, transitions

  gsap.defaults({ ease: "ftc.out", duration: 1.1 });
  ScrollTrigger.config({ ignoreMobileResize: true });
}

/** Shared motion constants. */
export const MOTION = {
  stagger: 0.08,
  reveal: 1.1,
  wipe: 0.9,
  start: "top 92%",
} as const;

export { gsap, ScrollTrigger, SplitText, Draggable, useGSAP };
