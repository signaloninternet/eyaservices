"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  features?: string[];
  whatsappNumber?: string;
  productCode?: string;
}

export function ProductCard({
  title,
  description,
  category,
  image,
  features = [],
  whatsappNumber = "+917021247474",
  productCode,
}: ProductCardProps) {
  const router = useRouter();

  const handleContactClick = () => {
    const productInfo = `${title}${productCode ? ` (${productCode})` : ""}`;
    const encodedProduct = encodeURIComponent(productInfo);
    router.push(`/contact?product=${encodedProduct}`);
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100/80 border-teal-200/50  rounded-3xl">
      <CardHeader className="pb-6 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-teal-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-teal-600 font-semibold text-sm">
              EYA SUPPLY
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="pb-6">
        <div className="relative aspect-square bg-gradient-to-br from-teal-100 to-blue-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <div className="relative w-32 h-32">
              {/* Main bubble */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-full opacity-90 blur-sm"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 rounded-full opacity-80"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-teal-200 via-teal-300 to-teal-400 rounded-full opacity-70"></div>

              {/* Organic shapes and highlights */}
              <div className="absolute top-4 left-6 w-8 h-8 bg-gradient-to-br from-white/40 to-teal-200/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-6 right-4 w-6 h-6 bg-gradient-to-br from-teal-200/50 to-teal-400/30 rounded-full blur-sm"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-white/60 rounded-full blur-sm"></div>

              {/* Additional organic elements */}
              <div className="absolute top-12 left-4 w-12 h-6 bg-gradient-to-r from-teal-300/30 to-teal-400/20 rounded-full blur-md transform rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-8 h-12 bg-gradient-to-b from-teal-300/25 to-teal-500/15 rounded-full blur-md transform -rotate-30"></div>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge
                key={index}
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  index === 0
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : index === 1
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {feature}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleContactClick}
          className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white border-0 rounded-xl py-3 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Quote
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CallToActionCard() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700 text-white border-teal-500/20 rounded-3xl">
      <CardHeader className="pb-6 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-white/90 font-semibold text-sm">
              EYA SUPPLY
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white leading-tight mb-4">
          Need Custom Solutions?
        </h3>
      </CardHeader>

      <CardContent className="pb-6">
        <div className="relative aspect-square bg-gradient-to-br from-teal-100 to-blue-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1664297701028-3e9919a2574f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            width={100}
            height={100}
            className="w-full h-full object-cover p-4"
          />
        </div>

        <p className="text-white/90 text-sm leading-relaxed mb-4">
          Our expert team is ready to help you find the perfect medical supplies
          for your specific needs.
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge className="bg-white/20 text-white hover:bg-white/30 text-xs px-3 py-1 rounded-full">
            Expert consultation
          </Badge>
          <Badge className="bg-white/20 text-white hover:bg-white/30 text-xs px-3 py-1 rounded-full">
            Bulk pricing
          </Badge>
          <Badge className="bg-white/20 text-white hover:bg-white/30 text-xs px-3 py-1 rounded-full">
            Fast delivery
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleContactClick}
          className="w-full bg-white/20 z-40 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-xl py-3 font-medium transition-all duration-300 backdrop-blur-sm"
        >
          <Phone className="mr-2 h-4 w-4" />
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
}
