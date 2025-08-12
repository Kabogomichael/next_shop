type Links = {
  href: string;
  label: string;
};
export const links: Links[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorites", label: "favorites" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
  { href: "/admin/sales", label: "dashboard" },
];

export const adminLinks:Links[]=[
    { href: "/admin/sales", label: "sales" },
    { href: "/admin/products", label: "my products" },
    { href: "/admin/products/create", label: "create products" },
]