import { BookOpen, Theater, Search, GraduationCap, Brain, Briefcase, Sparkles } from 'lucide-react';

const categories = [
  { icon: BookOpen, label: 'Fantasy' },
  { icon: Theater, label: 'Drama' },
  { icon: Search, label: 'Detective' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Brain, label: 'Psychology' },
  { icon: Briefcase, label: 'Business' },
  { icon: Sparkles, label: 'Astrology' }
];

export default function Categories() {
  return (
    <div className="flex flex-wrap max-sm:justify-center gap-2 overflow-x-auto py-4 px-2 -mx-2 max-sm:pt-0 max-sm:pb-5">
      <button className="px-4 py-2 bg-amber-500 text-white rounded-full whitespace-nowrap">
        All
      </button>
      {categories.map((category, index) => (
        <button key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full whitespace-nowrap hover:bg-gray-50">
          <category.icon className="h-4 w-4" />
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
}