import type { Metadata } from "next";
import BookContent from "./content";

export const metadata: Metadata = {
  title: "Book a 20-min discovery call",
  description:
    "No pitch deck, no demo of a toy app. 20 minutes about your QA pain, an honest perspective, and whether QAWave agents are a fit.",
};

export default function BookPage() {
  return <BookContent />;
}
