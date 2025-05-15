import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon, Clock, Calendar, ArrowRight } from "lucide-react";

interface FeatureOption {
  id: string;
  name: string;
  description: string;
  timeEstimate: number; // in weeks
  complexity: "low" | "medium" | "high";
}

const MVPCalculator = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [totalEstimate, setTotalEstimate] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });

  const featureOptions: FeatureOption[] = [
    {
      id: "auth",
      name: "Authentication",
      description:
        "User registration, login, password reset, and profile management",
      timeEstimate: 1.5,
      complexity: "medium",
    },
    {
      id: "api",
      name: "API Integration",
      description: "Connect to third-party services and data sources",
      timeEstimate: 2,
      complexity: "medium",
    },
    {
      id: "dashboard",
      name: "Admin Dashboard",
      description: "Data visualization, user management, and analytics",
      timeEstimate: 3,
      complexity: "high",
    },
    {
      id: "payment",
      name: "Payment Processing",
      description:
        "Secure payment gateway integration with subscription options",
      timeEstimate: 2,
      complexity: "high",
    },
    {
      id: "notifications",
      name: "Notifications",
      description: "Email, push, and in-app notification system",
      timeEstimate: 1,
      complexity: "low",
    },
    {
      id: "search",
      name: "Search Functionality",
      description: "Advanced search with filters and sorting options",
      timeEstimate: 1.5,
      complexity: "medium",
    },
    {
      id: "mobile",
      name: "Mobile Responsiveness",
      description: "Optimized experience across all device sizes",
      timeEstimate: 1.5,
      complexity: "medium",
    },
    {
      id: "file",
      name: "File Management",
      description: "Upload, storage, and sharing of documents and media",
      timeEstimate: 2,
      complexity: "medium",
    },
  ];

  useEffect(() => {
    // Calculate the total estimate based on selected features
    if (selectedFeatures.length === 0) {
      setTotalEstimate({ min: 0, max: 0 });
      return;
    }

    const selectedFeatureObjects = featureOptions.filter((feature) =>
      selectedFeatures.includes(feature.id),
    );

    const baseEstimate = selectedFeatureObjects.reduce(
      (total, feature) => total + feature.timeEstimate,
      0,
    );

    // Add some variability to the estimate
    const minEstimate = Math.max(2, Math.floor(baseEstimate * 0.9));
    const maxEstimate = Math.ceil(baseEstimate * 1.2);

    setTotalEstimate({ min: minEstimate, max: maxEstimate });
  }, [selectedFeatures]);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId],
    );
  };

  const getComplexityColor = (complexity: "low" | "medium" | "high") => {
    switch (complexity) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-amber-100 text-amber-800";
      case "high":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How Fast Could We Build Your MVP?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Select the features you need for your startup's MVP and get an instant
          timeframe estimate.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Select Your MVP Features</CardTitle>
              <CardDescription>
                Toggle the features you need for your product
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featureOptions.map((feature) => (
                  <div
                    key={feature.id}
                    className={`p-4 rounded-lg border transition-all ${selectedFeatures.includes(feature.id) ? "border-primary bg-primary/5" : "border-gray-200"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Label
                          htmlFor={`feature-${feature.id}`}
                          className="text-base font-medium"
                        >
                          {feature.name}
                        </Label>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${getComplexityColor(feature.complexity)}`}
                        >
                          {feature.complexity}
                        </span>
                      </div>
                      <Switch
                        id={`feature-${feature.id}`}
                        checked={selectedFeatures.includes(feature.id)}
                        onCheckedChange={() => toggleFeature(feature.id)}
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>
                        ~{feature.timeEstimate}{" "}
                        {feature.timeEstimate === 1 ? "week" : "weeks"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg sticky top-8">
            <CardHeader>
              <CardTitle>Your MVP Estimate</CardTitle>
              <CardDescription>Based on your selected features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Selected Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFeatures.length > 0 ? (
                      featureOptions
                        .filter((feature) =>
                          selectedFeatures.includes(feature.id),
                        )
                        .map((feature) => (
                          <Badge key={feature.id} variant="outline">
                            {feature.name}
                          </Badge>
                        ))
                    ) : (
                      <p className="text-sm text-gray-400 italic">
                        No features selected
                      </p>
                    )}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Estimated Timeline
                  </h3>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    {totalEstimate.min === 0 ? (
                      <p className="text-lg font-bold">
                        Select features to see estimate
                      </p>
                    ) : (
                      <p className="text-lg font-bold">
                        {totalEstimate.min === totalEstimate.max
                          ? `${totalEstimate.min} weeks`
                          : `${totalEstimate.min}-${totalEstimate.max} weeks`}
                      </p>
                    )}
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center mt-2 text-xs text-gray-500 cursor-help">
                          <InfoIcon className="h-3 w-3 mr-1" />
                          <span>How we calculate estimates</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          Estimates are based on our past project experience and
                          include design, development, testing, and deployment
                          phases. Actual timelines may vary based on specific
                          requirements and complexity.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                disabled={selectedFeatures.length === 0}
              >
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default MVPCalculator;
