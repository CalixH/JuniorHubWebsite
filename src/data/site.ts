// Single source of truth for contact details, links, hours and navigation.
// Edit here and every page updates.

export const site = {
  name: "Junior Hub",
  fullName: "Junior Hub Child Care & Learning Centre",
  email: "info@juniorhub.ca",
  phone: "905-709-5777",
  address: {
    street: "8100 Yonge St., Unit 8-9",
    area: "Near Hwy 7, 407 and Yonge Street",
    mapUrl: "https://goo.gl/maps/dk6YSeDGr4xfXEz46",
  },
  hours: [
    { days: "Monday to Friday", time: "7:30am to 6:00pm" },
    { days: "Saturday and Sunday", time: "Closed" },
  ],
  // Program hours, shown on each age-group page.
  programHours: [
    { label: "Full-time", times: ["7:30am to 6:00pm"] },
    { label: "Part-time", times: ["9:00am to 12:00pm", "1:30pm to 4:30pm"] },
  ],
  // Shown in the band under the home page hero. Update this when spaces change.
  availability: {
    title: "Spaces open now",
    text: "Toddler, preschool, JK and SK, plus PA days, March break and summer camp.",
  },
  cwelcc: {
    text: "Enrolled in CWELCC, so fee subsidy is available.",
    url: "https://www.york.ca/support/childrens-services/child-care-information-parents",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100080303237855" },
    { label: "Instagram", href: "https://www.instagram.com/infojuniorhub/" },
    { label: "X (Twitter)", href: "https://twitter.com/JuniorHubCC" },
  ],
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const nav: NavItem[] = [
  { label: "About us", href: "/about" },
  {
    label: "Programs",
    href: "/program",
    children: [
      { label: "Toddler", href: "/toddler" },
      { label: "Preschool", href: "/preschool" },
      { label: "Kindergarten", href: "/kindergarten" },
      { label: "Summer camp", href: "/summercamp" },
    ],
  },
  {
    label: "Parents",
    href: "/pi",
    children: [
      { label: "Parent information", href: "/pi" },
      { label: "Nutrition and menu", href: "/nutrition" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Register",
    href: "/register",
    children: [
      { label: "Join the waitlist", href: "/register" },
      { label: "Summer camp registration", href: "/summercampregister" },
    ],
  },
  {
    label: "Contact",
    href: "/contactus",
    children: [
      { label: "Contact us", href: "/contactus" },
      { label: "Book a tour", href: "/contact" },
      { label: "Careers", href: "/hiring" },
    ],
  },
];
