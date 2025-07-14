// import { Users } from "lucide-react";

// const SidebarSkeleton = () => {
//   // Create 8 skeleton items
//   const skeletonContacts = Array(8).fill(null);

//   return (
//     <aside
//       className="h-full w-20 lg:w-72 border-r border-base-300 
//     flex flex-col transition-all duration-200"
//     >
//       {/* Header */}
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2">
//           <Users className="w-6 h-6" />
//           <span className="font-medium hidden lg:block">Contacts</span>
//         </div>
//       </div>

//       {/* Skeleton Contacts */}
//       <div className="overflow-y-auto w-full py-3">
//         {skeletonContacts.map((_, idx) => (
//           <div key={idx} className="w-full p-3 flex items-center gap-3">
//             {/* Avatar skeleton */}
//             <div className="relative mx-auto lg:mx-0">
//               <div className="skeleton size-12 rounded-full" />
//             </div>

//             {/* User info skeleton - only visible on larger screens */}
//             <div className="hidden lg:block text-left min-w-0 flex-1">
//               <div className="skeleton h-4 w-32 mb-2" />
//               <div className="skeleton h-3 w-16" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default SidebarSkeleton;




import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      {/* Header */}
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3 justify-center lg:justify-start">
            {/* Avatar skeleton with online dot */}
            <div className="avatar relative">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <div className="skeleton w-full h-full" />
              </div>
              {/* Online dot */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
            </div>

            {/* Remove username skeletons */}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
