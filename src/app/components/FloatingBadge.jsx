export default function FloatingBadge({ text, className }) {
  return (
    <div className={`absolute bg-blue-600 text-white text-xs px-3 py-1 rounded-md flex items-center ${className}`}>
      {text}
      <div className="ml-1 w-2 h-2 border-t border-r border-white transform rotate-45"></div>
    </div>
  );
}