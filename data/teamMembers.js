/**
 * Team members for /our-teams page.
 */

function emailFromName(name) {
  const local = name
    .toLowerCase()
    .replace(/[^a-z\s-]/g, "")
    .trim()
    .replace(/\s+/g, ".")
    .replace(/-+/g, "");
  return `${local}@gpg.global`;
}

export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Beyan Siar",
    email: emailFromName("Beyan Siar"),
    title: "Associate Partner",
    languages: "Arabic, English",
    image: "https://i.pravatar.cc/600?img=11",
  },
  {
    id: "2",
    name: "James Okonkwo",
    email: emailFromName("James Okonkwo"),
    title: "Property Consultant",
    languages: "English, French",
    image: "https://i.pravatar.cc/600?img=12",
  },
  {
    id: "3",
    name: "Sarah Al-Mansoori",
    email: emailFromName("Sarah Al-Mansoori"),
    title: "Senior Property Consultant",
    languages: "Arabic, English",
    image: "https://i.pravatar.cc/600?img=47",
  },
  {
    id: "4",
    name: "Elena Vasquez",
    email: emailFromName("Elena Vasquez"),
    title: "Property Consultant",
    languages: "English, Spanish",
    image: "https://i.pravatar.cc/600?img=45",
  },
  {
    id: "5",
    name: "Omar Hassan",
    email: emailFromName("Omar Hassan"),
    title: "Associate Partner",
    languages: "Arabic, English, Urdu",
    image: "https://i.pravatar.cc/600?img=15",
  },
  {
    id: "6",
    name: "Priya Sharma",
    email: emailFromName("Priya Sharma"),
    title: "Property Consultant",
    languages: "English, Hindi",
    image: "https://i.pravatar.cc/600?img=48",
  },
  {
    id: "7",
    name: "Michael Chen",
    email: emailFromName("Michael Chen"),
    title: "Senior Property Consultant",
    languages: "English, Mandarin",
    image: "https://i.pravatar.cc/600?img=33",
  },
  {
    id: "8",
    name: "Fatima Al-Zaabi",
    email: emailFromName("Fatima Al-Zaabi"),
    title: "Property Consultant",
    languages: "Arabic, English",
    image: "https://i.pravatar.cc/600?img=31",
  },
  {
    id: "9",
    name: "David Thompson",
    email: emailFromName("David Thompson"),
    title: "Associate Partner",
    languages: "English",
    image: "https://i.pravatar.cc/600?img=52",
  },
  {
    id: "10",
    name: "Aisha Rahman",
    email: emailFromName("Aisha Rahman"),
    title: "Property Consultant",
    languages: "Arabic, English, Bengali",
    image: "https://i.pravatar.cc/600?img=25",
  },
  {
    id: "11",
    name: "Luca Romano",
    email: emailFromName("Luca Romano"),
    title: "Property Consultant",
    languages: "English, Italian",
    image: "https://i.pravatar.cc/600?img=68",
  },
  {
    id: "12",
    name: "Nadia Petrova",
    email: emailFromName("Nadia Petrova"),
    title: "Senior Property Consultant",
    languages: "English, Russian",
    image: "https://i.pravatar.cc/600?img=38",
  },
  {
    id: "13",
    name: "Khalid Al-Maktoum",
    email: emailFromName("Khalid Al-Maktoum"),
    title: "Associate Partner",
    languages: "Arabic, English",
    image: "https://i.pravatar.cc/600?img=13",
  },
  {
    id: "14",
    name: "Emily Watson",
    email: emailFromName("Emily Watson"),
    title: "Property Consultant",
    languages: "English",
    image: "https://i.pravatar.cc/600?img=44",
  },
  {
    id: "15",
    name: "Raj Patel",
    email: emailFromName("Raj Patel"),
    title: "Property Consultant",
    languages: "English, Hindi, Gujarati",
    image: "https://i.pravatar.cc/600?img=60",
  },
  {
    id: "16",
    name: "Sofia Martinez",
    email: emailFromName("Sofia Martinez"),
    title: "Property Consultant",
    languages: "English, Spanish, Portuguese",
    image: "https://i.pravatar.cc/600?img=32",
  },
];
