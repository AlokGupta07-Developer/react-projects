import Section1 from "./components/section1/Section1.jsx";
import Section2 from "./components/section2/Section2.jsx";

const App = () => {
const users = [
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underserved",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underbanked",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "New User",
  },
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underserved",
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underbanked",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "New User",
  },
  {
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underserved",
  },
];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
