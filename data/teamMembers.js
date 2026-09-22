/**
 * Team members for /our-teams page.
 */

const TEAM_RUNTIME_IMAGES = {
  "6": "https://media.globalpropertygroup.co/images/supria-2_w_qt3mc9--runtime-team-5.webp",
  "1": "https://media.globalpropertygroup.co/images/broker_images_hamas.jpg_mr67f6--runtime-team-3.webp",
  "2": "https://media.globalpropertygroup.co/images/broker_images_maryam.jpg_icvtqh--runtime-team-10.webp",
  "3": "https://media.globalpropertygroup.co/images/broker_images_saif.jpg_mjmnxw--runtime-team-2.webp",
  "4": "https://media.globalpropertygroup.co/images/broker_images_srinivas.jpg_wv5e4c--runtime-team-4.webp",
  "5": "https://media.globalpropertygroup.co/images/b01af31fe45f4575b59f7d87f62e26db_mrm2eq--runtime-team-6.webp",
  "7": "https://media.globalpropertygroup.co/images/operation_ameen.jpg_dqmvz7--runtime-team-7.webp",
  "8": "https://media.globalpropertygroup.co/images/operation_israa.jpg_uwuhmw--runtime-team-8.webp",
  "9": "https://media.globalpropertygroup.co/images/operation_abdullah.jpg_dlllx0--runtime-team-9.webp",
};

export function getTeamImageUrl(member) {
  return TEAM_RUNTIME_IMAGES[member.id] ?? member.teamImage ?? member.image;
}

export const TEAM_MEMBERS = [
  {
    id: "0",
    name: "Chirag Goyal",
    email: "cg@globalpropertygroup.co",
    phone: "+971542068414",
    title: "CEO & Founder",
    languages: "English, Hindi",
    brn: "51672",
    image:
      "https://media.globalpropertygroup.co/images/chirag_dp_jekput--504.png",
    teamImage:
      "https://media.globalpropertygroup.co/images/chirag_dp_jekput--503.jpg",
    aboutImage:
      "https://media.globalpropertygroup.co/images/chirag_dp_jekput.jpg",
    imageClassName: "object-contain object-bottom scale-[0.96] translate-y-6",
    listingImageClassName: "object-contain object-bottom scale-[0.92] translate-y-2",
    listingImageContainerClassName: "bg-white",
  },
  {
    id: "6",
    name: "Supria Satish",
    email: "supria@globalpropertygroup.co",
    phone: "+971566807762",
    title: "Senior Director",
    languages: "English, Hindi",
    brn: "73662",
    image: "https://media.globalpropertygroup.co/images/supria-2_w_qt3mc9.png",
  },
  {
    id: "1",
    name: "Hamas Khan",
    email: "hamaskhan@globalpropertygroup.co",
    phone: "+971551427690",
    title: "Senior Investment Advisor",
    languages: "English, Hindi",
    brn: "62915",
    image: "https://media.globalpropertygroup.co/images/broker_images_hamas.jpg_mr67f6.jpg",
  },
  {
    id: "2",
    name: "Maryam Muhammad Anwar",
    email: "maryam@globalpropertygroup.co",
    phone: "+971529599286",
    title: "Associate Director",
    languages: "English, Hindi",
    brn: "79489",
    image: "https://media.globalpropertygroup.co/images/broker_images_maryam.jpg_icvtqh.jpg",
  },
  {
    id: "3",
    name: "Saif Ur Rehman",
    email: "saif@globalpropertygroup.co",
    phone: "+971568860313",
    title: "Investment Advisor",
    languages: "English, Hindi",
    brn: "87876",
    image: "https://media.globalpropertygroup.co/images/broker_images_saif.jpg_mjmnxw.jpg",
  },
  {
    id: "4",
    name: "Srinivas Dandatikar",
    email: "srinivas@globalpropertygroup.co",
    phone: "+971565605990",
    title: "Investment Advisor",
    languages: "English, Hindi",
    brn: "29630",
    image: "https://media.globalpropertygroup.co/images/broker_images_srinivas.jpg_wv5e4c.jpg",
  },
  {
    id: "5",
    name: "Ankush Kumar",
    email: "ankush@globalpropertygroup.co",
    phone: "+971508842411",
    title: "Investment Advisor",
    languages: "English, Hindi",
    brn: "93719",
    image: "https://media.globalpropertygroup.co/images/b01af31fe45f4575b59f7d87f62e26db_mrm2eq.jpg",
    imageClassName: "object-cover object-[50%_32%]",
  },
  {
    id: "7",
    name: "Muhammed Ameen",
    title: "Head of IT",
    languages: "English",
    image:
      "https://media.globalpropertygroup.co/images/operation_ameen.jpg_dqmvz7.jpg",
  },
  {
    id: "8",
    name: "Israa Mostafa",
    title: "Head of Operations",
    languages: "English, Arabic",
    image:
      "https://media.globalpropertygroup.co/images/operation_israa.jpg_uwuhmw.jpg",
  },
  {
    id: "9",
    name: "Abdullah Rahmathulla",
    title: "Conveyancing Manager",
    languages: "English, Tamil",
    image:
      "https://media.globalpropertygroup.co/images/operation_abdullah.jpg_dlllx0.jpg",
  },
];

export const TEAM_GROUPS = [
  {
    id: "senior-management",
    titleKey: "teamGroups.seniorTitle",
    accentKey: "teamGroups.seniorAccent",
    memberIds: ["0", "6", "2"],
  },
  {
    id: "advisors",
    titleKey: "teamGroups.advisorsTitle",
    accentKey: "teamGroups.advisorsAccent",
    memberIds: ["1", "3", "5", "4"],
  },
  {
    id: "operations",
    titleKey: "teamGroups.operationsTitle",
    accentKey: "teamGroups.operationsAccent",
    memberIds: ["8", "7", "9"],
  },
];

export function getTeamGroupMembers(group) {
  return group.memberIds
    .map((id) => TEAM_MEMBERS.find((member) => member.id === id))
    .filter(Boolean);
}
