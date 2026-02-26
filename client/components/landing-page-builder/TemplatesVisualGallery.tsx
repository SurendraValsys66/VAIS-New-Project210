import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { landingPageTemplates, getTemplateColor } from "./templates";
import { Eye, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplatesVisualGalleryProps {
  onSelectTemplate: (templateIndex: number) => void;
  onPreview: (templateIndex: number) => void;
}

// Visual template preview components
const TemplatePreview: React.FC<{
  templateIndex: number;
  templateName: string;
  onPreview: () => void;
  onUse: () => void;
}> = ({ templateIndex, templateName, onPreview, onUse }) => {
  const colors = [
    // Turquoise Mountains
    { bg: "#FFD700", accent: "#87CEEB", text: "white" },
    // Orange Fire
    { bg: "#FF4500", accent: "#FF6347", text: "white" },
    // Easy Blue
    { bg: "#3498db", accent: "#2980b9", text: "white" },
    // Emerald Gem
    { bg: "#27ae60", accent: "#2ecc71", text: "white" },
    // Yellow Jacket
    { bg: "#F39C12", accent: "#F1C40F", text: "white" },
    // Business Consultant
    { bg: "#1e88e5", accent: "#1565c0", text: "white" },
    // Incorporate
    { bg: "#0277BD", accent: "#01579b", text: "white" },
    // Personal Consultant
    { bg: "#26c6da", accent: "#00838f", text: "white" },
    // Nutritionist
    { bg: "#E91E63", accent: "#C2185B", text: "white" },
  ];

  const color = colors[templateIndex];

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
      {/* Preview Image */}
      <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b" style={{
        backgroundImage: `linear-gradient(135deg, ${color.bg} 0%, ${color.accent} 100%)`
      }}>
        {/* Simplified preview representation */}
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div style={{ color: color.text }} className="space-y-3">
            <h3 className="text-2xl font-bold">{templateName}</h3>
            <p className="text-sm opacity-90">
              Professional Design
            </p>
            <div className="flex gap-2 justify-center mt-4">
              <div className="w-20 h-3 rounded" style={{ backgroundColor: color.accent, opacity: 0.7 }}></div>
              <div className="w-20 h-3 rounded" style={{ backgroundColor: color.accent, opacity: 0.5 }}></div>
            </div>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              onPreview();
            }}
            className="gap-2"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Button>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onUse();
            }}
            className="bg-white text-black hover:bg-gray-100 gap-2"
          >
            <Play className="w-4 h-4" />
            Use
          </Button>
        </div>
      </div>

      {/* Template Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{templateName}</h3>
        <Button
          onClick={onUse}
          className="w-full mt-3 bg-valasys-orange hover:bg-orange-600"
        >
          Use This Template
        </Button>
      </div>
    </div>
  );
};

export const TemplatesVisualGallery: React.FC<TemplatesVisualGalleryProps> = ({
  onSelectTemplate,
  onPreview,
}) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Blank Templates
          </h2>
          <p className="text-gray-600 mt-2">
            Choose a professionally designed template to get started
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center flex-wrap">
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400">
          <option>All Categories</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400">
          <option>All Types</option>
        </select>
        <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
          <input type="checkbox" className="rounded" />
          Mobile only
        </label>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {landingPageTemplates.map((template, index) => (
          <TemplatePreview
            key={index}
            templateIndex={index}
            templateName={template.name}
            onPreview={() => onPreview(index)}
            onUse={() => onSelectTemplate(index)}
          />
        ))}
      </div>
    </div>
  );
};
