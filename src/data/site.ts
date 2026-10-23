// Single source of truth for contact details, links and navigation.
// Edit here and every page updates.

export const site = {
  name: "Junior Hub",
  fullName: "Junior Hub Child Care & Learning Centre",
  email: "info@juniorhub.ca",
  phone: "905-709-5777",
  mapUrl: "https://goo.gl/maps/NdtTnV6nkaRtPiJXA",
  social: [
    { label: "Twitter", href: "https://twitter.com/JuniorHubCC", icon: "icon brands fa-twitter" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100080303237855", icon: "icon brands fa-facebook-f" },
    { label: "Instagram", href: "https://www.instagram.com/infojuniorhub/", icon: "icon brands fa-instagram" },
  ],
};

export interface NavItem {
  label: string;
  href: string;
  button?: boolean;
  children?: { label: string; href: string }[];
}

export const nav: NavItem[] = [
  { label: "About Us", href: "/about" },
  {
    label: "Programmes",
    href: "/program",
    children: [
      { label: "Summer Camp", href: "/summercamp" },
      { label: "Toddler", href: "/toddler" },
      { label: "Preschool", href: "/preschool" },
      { label: "Kindergarten", href: "/kindergarten" },
    ],
  },
  {
    label: "Parent Information",
    href: "/pi",
    children: [{ label: "Nutrition", href: "/nutrition" }],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Contact Us",
    href: "/contactus",
    children: [{ label: "Careers", href: "/hiring" }],
  },
  { label: "Register", href: "/register", button: true },
];
