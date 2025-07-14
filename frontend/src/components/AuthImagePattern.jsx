// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-12 min-h-screen animate-fade-in">
//       <div className="max-w-md text-center space-y-6 z-10">
//         {/* Decorative animated grid */}
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-gradient-to-br 
//                 from-cyan-400/20 via-purple-500/20 to-pink-400/20 
//                 ${
//                   i % 2 === 0
//                     ? "animate-pulse"
//                     : "animate-[pulse_2s_ease-in-out_infinite_delay-150]"
//                 } 
//                 shadow-inner`}
//             />
//           ))}
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-sm">
//           {title}
//         </h2>

//         {/* Subtitle */}
//         <p className="text-zinc-200 text-lg">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;

import { Sparkles, MessageSquareHeart } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center relative bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen overflow-hidden p-10">
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Icon Centerpiece */}
      <div className="absolute top-16 left-16 animate-float-slow z-0 opacity-30 text-cyan-400">
        <MessageSquareHeart className="w-20 h-20 blur-sm drop-shadow-lg" />
      </div>

      {/* Glassy Panel with Glow */}
      <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/30 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-10 max-w-lg text-center animate-fade-in space-y-4">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-spin-slow">
            <Sparkles className="text-white w-8 h-8" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 drop-shadow">
          {title}
        </h2>
        <p className="text-white/80 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
