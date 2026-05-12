import type { Metadata } from "next";
import ProductsContent from "./content";

export const metadata: Metadata = {
  title: "Products — Theridion & Zornik",
  description:
    "Open-source tools built by QAWave. Theridion: modern API testing platform (REST, GraphQL, gRPC, SOAP). Zornik: SDLC monitoring dashboard.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
