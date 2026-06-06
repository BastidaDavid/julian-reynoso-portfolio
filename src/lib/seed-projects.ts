import type { Project } from "./types";

const now = new Date().toISOString();
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function project(
  index: number,
  title: string,
  image: string,
  category: Project["category"],
  description: string,
  palette: string[],
  featured = false
): Project {
  return {
    id: `seed-${String(index).padStart(2, "0")}`,
    title,
    description,
    category,
    image_url: `${basePath}/assets/portfolio/${image}`,
    project_url: null,
    github_url: null,
    technologies: [category],
    featured,
    palette,
    aspect_ratio: 1.33,
    created_at: now,
    updated_at: now,
  };
}

export const seedProjects: Project[] = [
  project(1, "Front Energy", "img_1538.jpg", "editorial", "Retrato editorial con energía frontal, presencia extrovertida y tensión visual.", ["#111111", "#c1121f", "#d7c7ad", "#f4efe8"], true),
  project(2, "Direct Portrait", "img_1539.jpg", "portrait", "Actitud directa para casting: mirada segura, gesto abierto y carácter.", ["#0b0b0c", "#e63946", "#b5a38c", "#f1ece4"], true),
  project(3, "Street Frame", "img_1540.jpg", "lifestyle", "Lifestyle urbano con movimiento natural y presencia sin pose rígida.", ["#151515", "#8f1d2c", "#a89174", "#eee8df"], true),
  project(4, "Loud Studio", "img_1541.jpg", "studio", "Imagen de estudio con fuerza visual, encuadre limpio y personalidad extrovertida.", ["#0f0f10", "#d00024", "#c7b299", "#f7f1e8"], true),
  project(5, "Raw Charisma", "img_1542.jpg", "portrait", "Retrato enfocado en carisma, seguridad y una lectura clara para book.", ["#111113", "#a41623", "#c4aa8d", "#ece6dc"]),
  project(6, "Editorial Edge", "img_1543.jpg", "editorial", "Gesto editorial con contraste fuerte y presencia expresiva.", ["#0b0b0c", "#ba181b", "#a9927a", "#f1eadf"]),
  project(7, "Open Energy", "img_1544.jpg", "lifestyle", "Captura con energía abierta, actitud social y naturalidad frente a cámara.", ["#171717", "#d62828", "#b19a7f", "#f4eee6"]),
  project(8, "Sharp Mood", "img_1545.jpg", "portrait", "Retrato con foco en mirada, postura segura y estética contenida.", ["#0f0f10", "#6a040f", "#c2aa8f", "#eee9df"]),
  project(9, "Urban Still", "img_1546.jpg", "series", "Fotograma de serie con ritmo visual, actitud urbana y continuidad de campaña.", ["#121212", "#9d0208", "#a98f72", "#efe7dc"]),
  project(10, "Texture Hit", "img_1547.jpg", "details", "Detalle visual con textura, gesto cercano y acento de personalidad.", ["#101011", "#dc2f02", "#cab79f", "#f4efe7"]),
  project(11, "Stage Frame", "img_1548.jpg", "studio", "Encuadre de estudio con presencia escénica, fuerza y control de cámara.", ["#0d0d0e", "#b00020", "#bda488", "#eee6da"]),
  project(12, "Open Moment", "img_1549.jpg", "lifestyle", "Momento lifestyle con soltura, naturalidad y dirección visual cálida.", ["#161616", "#d00024", "#a88f75", "#f1ebe2"]),
  project(13, "Magnetic Face", "img_1550.jpg", "portrait", "Retrato magnético con equilibrio, intensidad y lectura clara para campañas.", ["#0c0c0d", "#a4161a", "#bca68d", "#f3ede4"]),
  project(14, "Sharp Line", "img_1551.jpg", "editorial", "Composición editorial con silueta definida, actitud filosa y ritmo visual.", ["#111111", "#e5383b", "#a48d76", "#eee8de"]),
  project(15, "Close Signal", "img_1552.jpg", "details", "Detalle de portfolio con lectura íntima, textura y presencia.", ["#101010", "#9d0208", "#c6b49d", "#f5efe8"]),
  project(16, "Volume Series 01", "img_1555.jpg", "series", "Imagen de serie para marcas o música: continuidad, volumen y personalidad.", ["#151515", "#ba181b", "#b59a80", "#efe8dd"]),
  project(17, "Modern Presence", "img_1556.jpg", "portrait", "Retrato moderno con composición clara y seguridad frente a cámara.", ["#0e0e0f", "#d90429", "#ad967e", "#f2ece2"]),
  project(18, "Editorial Texture", "img_1558.jpg", "editorial", "Mood editorial con textura, gesto intenso y una lectura visual fuerte.", ["#101010", "#800f2f", "#aa9278", "#eee6dc"]),
  project(19, "Social Static", "img_1559.jpg", "lifestyle", "Momento lifestyle con naturalidad, personalidad social y energía de campaña urbana.", ["#171717", "#c1121f", "#b49d83", "#f3ede4"]),
  project(20, "Studio Feedback", "img_1560.jpg", "studio", "Serie de estudio con encuadre firme, luz controlada y presencia potente.", ["#0d0d0e", "#d00024", "#b8a086", "#eee7dc"]),
  project(21, "Quiet Detail", "img_1561.jpg", "details", "Detalle sobrio con textura visual, gesto y tensión contenida.", ["#111111", "#a41623", "#c7b299", "#f2ece3"]),
  project(22, "Casting Frame", "img_1562.jpg", "portrait", "Fotograma de casting con expresión directa, postura natural y carácter.", ["#101011", "#e63946", "#b59d85", "#f5eee5"]),
  project(23, "Red Editorial", "img_1563.jpg", "editorial", "Estudio editorial con equilibrio, actitud y una energía visual intensa.", ["#111111", "#bf0603", "#a89178", "#f1e9df"]),
  project(24, "Urban Campaign", "img_1564.jpg", "series", "Secuencia lifestyle con coherencia visual para campañas urbanas.", ["#151515", "#d00024", "#ad947b", "#f3ece2"]),
  project(25, "Studio Impact", "img_1565.jpg", "studio", "Retrato de estudio con lectura premium, postura definida y presencia fuerte.", ["#0e0e0f", "#9d0208", "#bea68e", "#f2ebe1"]),
  project(26, "Grain Detail", "img_1566.jpg", "details", "Detalle con énfasis en textura, contraste y tono visual de book.", ["#101010", "#b00020", "#b9a088", "#eee8df"]),
  project(27, "Natural Energy", "img_1567.jpg", "portrait", "Retrato natural con expresión abierta, energía y claridad visual.", ["#121212", "#d62828", "#b69f87", "#f3eee6"]),
  project(28, "Volume Series 02", "img_1568.jpg", "series", "Cierre de serie con dirección consistente, actitud extrovertida y carácter visual.", ["#151515", "#ba181b", "#a99178", "#f0e8dd"]),
];
