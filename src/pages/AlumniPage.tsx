// Automatically import all .png images from alumni folder
const images = import.meta.glob("../assets/*.jpg", { eager: true });

// Create a filename-to-URL map
const imageMap: Record<string, string> = {};
for (const path in images) {
  const fileName = path.split("/").pop()!;
  imageMap[fileName] = (images[path] as { default: string }).default;
}

// Sample 27 distinct names
const randomNames = [
  "Laveena Wels (Captain)", "Malavika N R", "Abhijith Jithesh", "Abhinand Rajesh", "Ananthakrishnan", "Ananthkrishnan", "Febin",
  "Kevin Paul", "Midhul Manoj", "Nandhu", "Navaneeth Menon", "Nirrosh", "Prithviraj K", "Sudhev P", "Vaibhav",
  "Arjun M Nair (Captain)", "Shuhaib Sadiq", "Albin Shibhu", "Adnan Razi", "Ajzal V A", "Athul T Sajeevan", "Basil Benny", "Harinarayanan K S",
  "Hebin Kurian", "Muhammed Sahal", "Pranoy Prince", "Sreeraj Sreevalsalan"
];

// Generate alumni data (1–15 for 2024, 16–27 for 2025)
const alumni2024 = Array.from({ length: 15 }, (_, i) => ({
  name: randomNames[i],
  img: imageMap[`q${i + 1}.jpg`],
}));

const alumni2025 = Array.from({ length: 12 }, (_, i) => ({
  name: randomNames[i + 15],
  img: imageMap[`q${i + 16}.jpg`],
}));

function AlumniSection({
  title,
  members,
}: {
  title: string;
  members: { name: string; img: string }[];
}) {
  return (
    <>
      <style>{`
        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #121212;
          border-radius: 8px;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background-color: #7f1d1d;
          border-radius: 8px;
        }
        .scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #7f1d1d #121212;
        }

        .section-heading {
          color: #7f1d1d; 
          font-weight: 700;
          font-size: 3.5rem;
          text-align: center;
          position: relative;
          padding-bottom: 0.5rem;
          user-select: none;
          text-shadow: 
            -1.5px -1.5px 0 #000,  
             1.5px -1.5px 0 #000,
            -1.5px  1.5px 0 #000,
             1.5px  1.5px 0 #000,
             0 0 15px #7f1d1d;
        }
        
        /* MODIFIED: The ::after pseudo-element creating the underline has been removed. */

        .alumni-card {
          background-color:rgb(0, 0, 0);
          border: 1.5px solid #7f1d1d;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.6);
          padding: 1rem;
          width: 220px; 
          flex-shrink: 0;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .alumni-card:hover {
          border-color: #b91c1c; /* Brighter red on hover */
          box-shadow: 0 0 14px #b91c1c;
          transform: translateY(-6px);
        }

        .alumni-image {
          width: 190px;
          height: 190px;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 4px 8px rgba(0,0,0,0.8);
          margin-bottom: 0.75rem;
          border: 2px solid #2a2a2a;
          transition: border-color 0.3s ease;
        }
        .alumni-card:hover .alumni-image {
          border-color: #b91c1c;
          box-shadow: 0 0 15px #b91c1c;
        }

        .alumni-name {
          color: #eee;
          font-weight: 600;
          font-size: 1.15rem;
          text-align: center;
          position: relative;
        }
        .alumni-name::after {
          content: "";
          display: block;
          width: 40px;
          height: 3px;
          margin: 6px auto 0;
          background: #b91c1c;
          border-radius: 2px;
          opacity: 0.7;
          box-shadow: 0 0 6px #b91c1c;
        }
      `}</style>
      
      <div
        className="w-full flex flex-col items-center px-4 py-8"
      >
        <h1 className="section-heading z-10 mb-12">{title}</h1>
        
        <div
          className="scroll-container flex overflow-x-auto space-x-6 px-2 z-10 w-full max-w-7xl pb-8 pt-4"
          style={{ scrollbarGutter: "stable" }}
        >
          {members.map((member, index) => (
            <div key={index} className="alumni-card" title={member.name}>
              <img
                src={member.img}
                alt={member.name}
                className="alumni-image"
                loading="lazy"
              />
              <span className="alumni-name">{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function AlumniPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* GLOBAL Geometric Background Pattern - Visible Throughout Entire Website with #7f1d1d */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Large geometric shapes with #7f1d1d color */}
        <div className="absolute top-10 left-10 w-80 h-80 border-2 border-[#7f1d1d]/50 rotate-45 rounded-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 border-2 border-[#7f1d1d]/55 -rotate-12 rounded-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-88 h-88 border-2 border-[#7f1d1d]/50 rotate-45 rounded-2xl"></div>
        
        {/* Medium geometric shapes */}
        <div className="absolute top-1/3 left-1/2 w-64 h-64 border-2 border-[#7f1d1d]/45 rotate-30 rounded-lg"></div>
        <div className="absolute top-60 right-1/4 w-56 h-56 border-2 border-[#7f1d1d]/50 -rotate-45 rounded-xl"></div>
        <div className="absolute bottom-1/3 left-20 w-68 h-68 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute top-40 left-1/3 w-52 h-52 border-2 border-[#7f1d1d]/50 -rotate-30 rounded-lg"></div>
        
        {/* Small geometric accents */}
        <div className="absolute top-80 left-1/3 w-32 h-32 border-2 border-[#7f1d1d]/60 rotate-45 rounded-lg"></div>
        <div className="absolute top-1/4 right-40 w-40 h-40 border-2 border-[#7f1d1d]/55 -rotate-30 rounded-xl"></div>
        <div className="absolute bottom-60 right-10 w-36 h-36 border-2 border-[#7f1d1d]/50 rotate-60 rounded-lg"></div>
        <div className="absolute top-96 left-20 w-28 h-28 border-2 border-[#7f1d1d]/55 rotate-15 rounded-md"></div>
        
        {/* Additional scattered shapes */}
        <div className="absolute top-32 right-1/2 w-44 h-44 border-2 border-[#7f1d1d]/45 rotate-75 rounded-xl"></div>
        <div className="absolute bottom-80 left-1/2 w-48 h-48 border-2 border-[#7f1d1d]/50 -rotate-20 rounded-lg"></div>
        <div className="absolute top-1/2 right-20 w-60 h-60 border-2 border-[#7f1d1d]/45 rotate-50 rounded-2xl"></div>
        
        {/* Diagonal lines with #7f1d1d */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/40 to-transparent -rotate-12"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/30 to-transparent rotate-6"></div>
        <div className="absolute top-0 right-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent -rotate-8"></div>
        
        {/* Floating dots with #7f1d1d */}
        <div className="absolute top-32 left-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
        <div className="absolute top-96 right-1/4 w-5 h-5 bg-[#7f1d1d]/60 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#7f1d1d]/65 rounded-full"></div>
        <div className="absolute bottom-80 right-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
        <div className="absolute top-64 left-20 w-3 h-3 bg-[#7f1d1d]/60 rounded-full"></div>
        <div className="absolute bottom-96 right-40 w-5 h-5 bg-[#7f1d1d]/65 rounded-full"></div>
        
        {/* Additional geometric elements for racing aesthetic */}
        <div className="absolute top-20 left-1/2 w-24 h-2 bg-[#7f1d1d]/50 rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-32 h-2 bg-[#7f1d1d]/45 -rotate-30"></div>
        <div className="absolute top-1/2 left-10 w-28 h-2 bg-[#7f1d1d]/50 rotate-60"></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-2 bg-[#7f1d1d]/45 -rotate-45"></div>
        
        {/* Corner accent shapes */}
        <div className="absolute top-5 left-5 w-16 h-16 border-2 border-[#7f1d1d]/60 rotate-45"></div>
        <div className="absolute top-5 right-5 w-20 h-20 border-2 border-[#7f1d1d]/55 -rotate-30"></div>
        <div className="absolute bottom-5 left-5 w-18 h-18 border-2 border-[#7f1d1d]/60 rotate-60"></div>
        <div className="absolute bottom-5 right-5 w-22 h-22 border-2 border-[#7f1d1d]/55 -rotate-15"></div>
        
        {/* Extra geometric elements for more coverage */}
        <div className="absolute top-1/4 left-10 w-36 h-36 border-2 border-[#7f1d1d]/40 rotate-25 rounded-lg"></div>
        <div className="absolute bottom-1/4 right-10 w-42 h-42 border-2 border-[#7f1d1d]/45 -rotate-35 rounded-xl"></div>
        <div className="absolute top-3/4 left-1/3 w-38 h-38 border-2 border-[#7f1d1d]/40 rotate-55 rounded-md"></div>
        <div className="absolute bottom-1/2 right-1/3 w-34 h-34 border-2 border-[#7f1d1d]/45 -rotate-25 rounded-lg"></div>
        
        {/* More diagonal accents */}
        <div className="absolute top-1/3 left-0 w-1 h-2/3 bg-gradient-to-b from-transparent via-[#7f1d1d]/25 to-transparent rotate-15"></div>
        <div className="absolute bottom-1/3 right-0 w-1 h-2/3 bg-gradient-to-t from-transparent via-[#7f1d1d]/30 to-transparent -rotate-15"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-[#7f1d1d]/50 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#7f1d1d]/55 rounded-full"></div>
        <div className="absolute top-2/3 left-3/4 w-5 h-5 bg-[#7f1d1d]/50 rounded-full"></div>
      </div>

      <div className="relative z-10 py-12">
        <AlumniSection title="ALUMNI 2025" members={alumni2025} />
        <AlumniSection title="ALUMNI 2024" members={alumni2024} />
      </div>
    </div>
  );
}
