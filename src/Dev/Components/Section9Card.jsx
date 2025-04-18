import { forwardRef } from "react";
import { Star } from "lucide-react";

const Section9Card = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="md:max-w-[70%] max-sm:w-full mx-auto max-sm:m-0 bg-gradient-to-br from-[#2c006b]/30 to-[#10003a]/30 text-white p-8 rounded-xl shadow-lg border-l-2 border-purple-600 relative"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold uppercase bg-white text-black inline-block px-4 py-1">
          {data.name}
        </h2>
        <p className="mt-2 text-lg text-white/80">{data.title}</p>
      </div>

      <div className="text-base max-sm:text-sm leading-relaxed space-y-4 italic">
        {data.text.map((paragraph, idx) => (
          <p key={idx}>&ldquo;{paragraph}&rdquo;</p>
        ))}
      </div>

      <div className="flex items-center mt-6 gap-1">
        {[...Array(data.rating)].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </div>
  );
});

export default Section9Card;
