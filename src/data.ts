export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  isNew?: boolean;
  description?: string;
}

export const categories = ["Todos", "Sapatênis"];

export const products: Product[] = [
  {
    id: "ferracini-sneaker-speed",
    name: "Sneaker Ferracini Speed",
    category: "Sapatênis",
    price: 459.90,
    image: "https://i.postimg.cc/GmbDs5TG/Ferracini-Sneaker-Speed.jpg",
    colors: ["#1c1c1c", "#ffffff", "#5a3a22"],
    isNew: true,
    description: "Design esportivo com pegada urbana de alta performance, super leve e confortável para o dia a dia."
  },
  {
    id: "ferracini-casual-classic",
    name: "Sapatênis Ferracini Casual",
    category: "Sapatênis",
    price: 369.90,
    image: "https://i.postimg.cc/Z5JNyMvH/Sapate-nis-Ferracini-casual.jpg",
    colors: ["#5a3a22", "#111111", "#a0a0a0"],
    description: "Conforto clássico aliado à sofisticação do couro legítimo. O par perfeito para looks casuais e esporte fino."
  },
  {
    id: "ferracini-flip",
    name: "Sapatênis Ferracini Flip",
    category: "Sapatênis",
    price: 399.90,
    image: "https://i.postimg.cc/P5dD8Rv4/Sapate-nis-Ferracini-Flip.jpg",
    colors: ["#111111", "#ffffff", "#002d62"],
    description: "Leveza incomparável e calce fácil com fechamento dinâmico. Ideal para acompanhar o seu ritmo diário."
  },
  {
    id: "ferracini-vox",
    name: "Sapatênis Ferracini Vox",
    category: "Sapatênis",
    price: 309.90,
    image: "https://i.postimg.cc/HkTM7h83/Sapate-nis-Ferracini-Vox.jpg",
    colors: ["#ffffff", "#5a3a22", "#111111"],
    description: "Design contemporâneo com solado moderno que garante absorção de impacto e extremo bem-estar."
  },
  {
    id: "ferracini-ibiza",
    name: "Tênis Ferracini Ibiza",
    category: "Sapatênis",
    price: 293.90,
    image: "https://i.postimg.cc/3x3GDc0n/Te-nis-Ferracini-Ibiza.jpg",
    colors: ["#ffffff", "#cccccc", "#111111"],
    description: "Inspirado no estilo balneário europeu, combina minimalismo moderno e acabamento impecável de alta qualidade."
  },
  {
    id: "ferracini-logan",
    name: "Tênis Ferracini Logan",
    category: "Sapatênis",
    price: 399.90,
    image: "https://i.postimg.cc/VkztbV02/Te-nis-Ferracini-Logan.jpg",
    colors: ["#111111", "#5a3a22", "#002d62"],
    description: "Com linhas robustas e design marcante, o modelo Logan oferece atitude, durabilidade e elegância."
  },
  {
    id: "ferracini-still",
    name: "Tênis Ferracini Still",
    category: "Sapatênis",
    price: 309.90,
    image: "https://i.postimg.cc/K8QM7Dtf/Te-nis-Ferracini-Still.jpg",
    colors: ["#ffffff", "#a0a0a0", "#111111"],
    description: "Equilíbrio perfeito entre elegância urbana e conforto premium. Destaque-se em qualquer ocasião."
  },
  {
    id: "ferracini-vyper",
    name: "Tênis Ferracini Vyper",
    category: "Sapatênis",
    price: 459.90,
    image: "https://i.postimg.cc/rwgrGN5J/Te-nis-Ferracini-Vyper.jpg",
    colors: ["#111111", "#222222", "#5a3a22"],
    description: "Design futurista com acabamento texturizado exclusivo. Confeccionado para quem busca estilo ousado e conforto sem limites."
  }
];
