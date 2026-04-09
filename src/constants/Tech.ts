import reactIcon from "../assets/icons/react.svg";
import nextIcon from "../assets/icons/nextdotjs.svg";
import nestIcon from "../assets/icons/nestjs.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import dotnetIcon from "../assets/icons/dotnet.svg";
import pythonIcon from "../assets/icons/python.svg";
import flutterIcon from "../assets/icons/flutter.svg";
import gsapIcon from "../assets/icons/gsap.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import figmaIcon from "../assets/icons/figma.svg";

type StackItem = {
  id: number;
  label?: string;
  icon?: string; // URL imported from assets
};

const Stacks: StackItem[] = [
    {
        id: 1,
        label: "REACT",
        icon: reactIcon
    },
  { id: 2, label: "NEXT", icon: nextIcon },
  { id: 3, label: "NEST", icon: nestIcon },
  { id: 4, label: "TAILWIND", icon: tailwindIcon },
  { id: 5, label: ".NET", icon: dotnetIcon },
  { id: 6, label: "PYTHON", icon: pythonIcon },
  { id: 7, label: "FLUTTER", icon: flutterIcon },
  { id: 8, label: "G-SAP", icon: gsapIcon },
  { id: 10, label: "TYPESCRIPT", icon: typescriptIcon },
  { id: 13, label: "FIGMA", icon: figmaIcon },
];

export default Stacks;
