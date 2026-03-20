import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronDown, ChevronRight, Menu, X,
  Home, Globe, Backpack, Search,
  Clock, Calendar, BookOpen, BarChart3,
  Play, Image, Lightbulb, Layers,
  Monitor, Download, Route, Scroll,
  Grid3X3, Beaker, Waves, Glasses,
  Tag, GitBranch, Brain, Share2,
  Trophy, Star, Info, HelpCircle,
  type LucideIcon
} from "lucide-react";

interface SidebarItem {
  label: string;
  icon: LucideIcon;
  action: string;
  color: string;
  badge?: string;
}

interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

interface SidebarProps {
  onAction: (action: string) => void;
  badges?: Record<string, string>;
}

export default function Sidebar({ onAction, badges = {} }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    explore: true,
    timeline: false,
    learning: false,
    engineering: false,
    games: false,
    info: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const groups: SidebarGroup[] = [
    {
      title: "explore",
      items: [
        { label: "World Map", icon: Home, action: "home", color: "var(--gold)" },
        { label: "Search", icon: Search, action: "search", color: "var(--cerulean)" },
        { label: "Civilizations", icon: Globe, action: "civilizations", color: "var(--terracotta)", badge: badges.civilizations },
        { label: "Inventions", icon: Backpack, action: "inventory", color: "var(--aqua)", badge: badges.inventions },
        { label: "Encyclopedia", icon: BookOpen, action: "library", color: "var(--aqua)" },
        { label: "Featured", icon: Image, action: "featured", color: "var(--terracotta)" },
        { label: "Invention Tags", icon: Tag, action: "tags", color: "var(--aqua)" },
      ]
    },
    {
      title: "timeline",
      items: [
        { label: "Timeline", icon: Clock, action: "timeline", color: "var(--cerulean)" },
        { label: "Timeline Slider", icon: Calendar, action: "timelineSlider", color: "var(--gold)" },
        { label: "Time Travel", icon: Play, action: "timeTravel", color: "var(--gold)" },
        { label: "Diffusion Map", icon: Share2, action: "diffusion", color: "var(--terracotta)" },
      ]
    },
    {
      title: "learning",
      items: [
        { label: "Compare", icon: BarChart3, action: "comparison", color: "var(--cerulean)" },
        { label: "Tech Trees", icon: GitBranch, action: "techTrees", color: "var(--cerulean)" },
        { label: "Thematic Pathways", icon: Route, action: "pathways", color: "var(--cerulean)" },
        { label: "Story Quests", icon: Scroll, action: "quests", color: "var(--gold)" },
        { label: "Did You Know?", icon: Lightbulb, action: "facts", color: "var(--gold)" },
        { label: "Statistics", icon: Layers, action: "statistics", color: "var(--aqua)" },
      ]
    },
    {
      title: "engineering",
      items: [
        { label: "Water Models", icon: Monitor, action: "waterModels", color: "var(--aqua)", badge: badges.waterModels },
        { label: "SWMM5 Models", icon: Download, action: "swmm5", color: "var(--aqua)", badge: badges.swmm5 },
        { label: "Simulators", icon: Beaker, action: "navigate:/simulators", color: "var(--gold)" },
        { label: "Manning's n", icon: Waves, action: "navigate:/mannings-n", color: "var(--aqua)" },
      ]
    },
    {
      title: "games",
      items: [
        { label: "Mini Games", icon: Grid3X3, action: "navigate:/minigames", color: "var(--terracotta)" },
        { label: "Quiz", icon: Brain, action: "quiz", color: "var(--gold)" },
        { label: "VR Experience", icon: Glasses, action: "navigate:/vr", color: "var(--cerulean)" },
      ]
    },
    {
      title: "info",
      items: [
        { label: "Progress", icon: Trophy, action: "progress", color: "var(--gold)" },
        { label: "Achievements", icon: Star, action: "achievements", color: "var(--gold)" },
        { label: "Tutorial", icon: HelpCircle, action: "tutorial", color: "var(--aqua)" },
        { label: "About", icon: Info, action: "about", color: "var(--cerulean)" },
      ]
    },
  ];

  const groupLabels: Record<string, string> = {
    explore: "Explore",
    timeline: "Timeline & History",
    learning: "Learning & Analysis",
    engineering: "Engineering Tools",
    games: "Games & Experiences",
    info: "Info & Progress",
  };

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const handleItemClick = (action: string) => {
    if (action.startsWith("navigate:")) {
      navigate(action.replace("navigate:", ""));
    } else if (action === "home") {
      if (location.pathname !== "/") navigate("/");
      else onAction("home");
    } else if (action === "civilizations") {
      if (location.pathname !== "/") navigate("/");
      onAction("civilizations");
    } else {
      onAction(action);
    }
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 left-3 z-[60] p-2 rounded-lg bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 text-[var(--parchment)] hover:bg-[var(--river-blue)]/30 transition-colors shadow-lg"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[49] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full z-[50] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "260px" }}
      >
        <div className="h-full bg-[var(--deep-ocean)]/95 backdrop-blur-md border-r border-[var(--aqua)]/20 flex flex-col overflow-hidden">
          <div className="p-4 pt-14 border-b border-[var(--aqua)]/20">
            <h2 className="font-heading text-lg text-[var(--gold)]">Historical Mystery</h2>
            <p className="text-[var(--parchment)]/60 text-xs mt-1">Water Engineering Explorer</p>
          </div>

          <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
            {groups.map((group) => (
              <div key={group.title} className="mb-1">
                <button
                  onClick={() => toggleGroup(group.title)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-[var(--parchment)]/80 hover:bg-[var(--river-blue)]/20 transition-colors"
                >
                  <span className="uppercase tracking-wider text-xs">
                    {groupLabels[group.title]}
                  </span>
                  {expandedGroups[group.title] ? (
                    <ChevronDown size={14} className="text-[var(--aqua)]/60" />
                  ) : (
                    <ChevronRight size={14} className="text-[var(--aqua)]/60" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    expandedGroups[group.title] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActivePage = item.action.startsWith("navigate:") && 
                      location.pathname === item.action.replace("navigate:", "");

                    return (
                      <button
                        key={item.action}
                        onClick={() => handleItemClick(item.action)}
                        className={`w-full flex items-center gap-3 px-6 py-2 text-sm transition-colors group ${
                          isActivePage
                            ? "bg-[var(--river-blue)]/30 text-[var(--gold)]"
                            : "text-[var(--parchment)]/80 hover:bg-[var(--river-blue)]/15 hover:text-[var(--parchment)]"
                        }`}
                      >
                        <Icon
                          size={15}
                          style={{ color: item.color }}
                          className="flex-shrink-0"
                        />
                        <span className="flex-1 text-left">{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] font-bold bg-[var(--terracotta)] text-white rounded-full min-w-[20px] h-[18px] flex items-center justify-center px-1">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="p-3 border-t border-[var(--aqua)]/20">
            <p className="text-[var(--parchment)]/40 text-[10px] text-center">
              217 Civilizations · 1,143+ Inventions
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
