import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { BuilderCanvas } from "@/components/builder/Canvas";
import { Button } from "@/components/ui/button";
import { Plus, Layout, Search, Zap, Sparkles, Calendar, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type View = "list" | "editor";

interface PageData {
  id: string;
  name: string;
  updatedAt: string;
  thumbnail?: string;
}

export default function LandingPages() {
  const [view, setView] = useState<View>("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [pages, setPages] = useState<PageData[]>([
    { id: "1", name: "Modern Hero Page", updatedAt: "2024-03-20T10:00:00Z" },
    { id: "2", name: "SaaS Product Landing", updatedAt: "2024-03-19T15:30:00Z" },
  ]);

  const handleCreateNew = () => {
    setView("editor");
  };

  const handleViewTemplates = () => {
    console.log("View templates clicked");
  };

  const handleAIBuilder = () => {
    console.log("AI builder clicked");
  };

  const handleBack = () => {
    setView("list");
  };

  // Editor View
  if (view === "editor") {
    return (
      <DndProvider backend={HTML5Backend}>
        <BuilderCanvas onBack={handleBack} />
      </DndProvider>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex h-full gap-0">
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                  <div className="w-10 h-10 bg-valasys-orange rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Layout className="w-6 h-6" />
                  </div>
                  Landing Pages
                </h1>
                <p className="text-gray-500 mt-1">Design, build and publish high-converting pages in minutes.</p>
              </div>
              <div className="flex gap-3 justify-end">
                <Button onClick={handleAIBuilder} className="px-6 py-6 rounded-2xl shadow-md hover:shadow-lg transition-all font-bold text-base group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  AI Builder
                </Button>
                <Button onClick={handleViewTemplates} variant="outline" className="px-6 py-6 rounded-2xl shadow-md hover:shadow-lg transition-all font-bold text-base group border-2 border-valasys-orange text-valasys-orange hover:bg-valasys-orange/5">
                  <Zap className="w-5 h-5 mr-2" />
                  View Templates
                </Button>
                <Button onClick={handleCreateNew} className="bg-valasys-orange hover:bg-valasys-orange/90 text-white px-6 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all font-bold text-base group">
                  <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Create New Page
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div className="lg:col-span-3">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-valasys-orange transition-colors" />
                  <Input
                    placeholder="Search your pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-7 rounded-2xl border-gray-100 shadow-sm focus:ring-valasys-orange focus:border-valasys-orange text-base"
                  />
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-around">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{pages.length}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Total Pages</div>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="text-center">
                  <div className="text-xl font-bold text-valasys-orange">12.4k</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Total Views</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border-b-4 border-b-transparent hover:border-b-valasys-orange"
                >
                  <div className="h-48 bg-gray-50 relative overflow-hidden flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 text-gray-300 group-hover:scale-105 group-hover:border-valasys-orange/30 group-hover:text-valasys-orange/30 transition-all">
                      <Layout className="w-10 h-10" />
                      <span className="text-xs font-bold uppercase tracking-widest">No Preview Available</span>
                    </div>
                    <div className="absolute inset-0 bg-valasys-orange/0 group-hover:bg-valasys-orange/5 transition-colors pointer-events-none" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-valasys-orange transition-colors">{page.name}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Updated {new Date(page.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-valasys-orange/10 text-valasys-orange border-none font-bold px-3">Live</Badge>
                    </div>

                    <div className="flex items-center gap-2 mt-auto">
                      <Button onClick={handleCreateNew} className="flex-1 bg-valasys-orange hover:bg-valasys-orange/90 text-white rounded-xl py-5 font-bold shadow-lg shadow-valasys-orange/10">
                        Edit Page
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-12 h-12 rounded-xl border border-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all p-0 flex items-center justify-center"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <button onClick={handleCreateNew} className="group rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-12 hover:border-valasys-orange hover:bg-valasys-orange/5 transition-all gap-4 text-gray-400 hover:text-valasys-orange">
                <div className="w-16 h-16 rounded-full bg-gray-50 group-hover:bg-valasys-orange/10 flex items-center justify-center transition-colors shadow-inner">
                  <Plus className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <div className="text-base font-bold">Create New Page</div>
                  <div className="text-xs font-medium opacity-60">Start with a blank canvas</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
