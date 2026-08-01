/**
 * Team members for /our-teams page.
 */

const TEAM_BG_TRANSFORM = "e_background_removal,b_rgb:f5f5f4,f_auto,q_auto";

export function getTeamImageUrl(member) {
  if (member.skipTeamBgTransform) {
    return member.teamImage ?? member.image;
  }

  const src = member.teamImage ?? member.image;
  if (!src?.includes("res.cloudinary.com/dsldkspov/image/upload/")) {
    return src;
  }

  if (src.includes("e_background_removal,b_rgb:f5f5f4")) {
    return src;
  }

  return src.replace("/image/upload/", `/image/upload/${TEAM_BG_TRANSFORM}/`);
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
      "https://res.cloudinary.com/dsldkspov/image/upload/v1784882837/chirag_dp_jekput.png",
    teamImage:
      "https://res.cloudinary.com/dsldkspov/image/upload/e_background_removal,b_rgb:f5f5f4,f_auto,q_auto/v1784882837/chirag_dp_jekput.png",
    aboutImage:
      "https://res.cloudinary.com/dsldkspov/image/upload/e_background_removal,b_rgb:e7e5e4,f_auto,q_auto/v1784882837/chirag_dp_jekput.png",
    imageClassName: "object-contain object-bottom scale-[0.96] translate-y-6",
    listingImageClassName: "object-contain object-bottom scale-[0.92] translate-y-2",
    listingImageContainerClassName: "bg-white",
  },
  {
    id: "1",
    name: "Hamas Khan",
    email: "hamaskhan@globalpropertygroup.co",
    phone: "+971551427690",
    title: "Property Advisor",
    languages: "English, Hindi",
    brn: "62915",
    image: "https://res.cloudinary.com/dsldkspov/image/upload/v1785514450/broker_images_hamas.jpg_mr67f6.jpg",
  },
  {
    id: "2",
    name: "Maryam Muhammad Anwar",
    email: "maryam@globalpropertygroup.co",
    phone: "+971529599286",
    title: "Property Advisor",
    languages: "English, Hindi",
    brn: "79489",
    image: "https://res.cloudinary.com/dsldkspov/image/upload/v1785514298/broker_images_maryam.jpg_fjinf9.jpg",
  },
  {
    id: "3",
    name: "Saif Ur Rehman",
    email: "saif@globalpropertygroup.co",
    phone: "+971568860313",
    title: "Property Advisor",
    languages: "English, Hindi",
    brn: "87876",
    image: "https://res.cloudinary.com/dsldkspov/image/upload/v1785513511/broker_images_saif.jpg_mjmnxw.jpg",
  },
  {
    id: "4",
    name: "Srinivas Dandatikar",
    email: "srinivas@globalpropertygroup.co",
    phone: "+971565605990",
    title: "Property Advisor",
    languages: "English, Hindi",
    brn: "29630",
    image: "https://res.cloudinary.com/dsldkspov/image/upload/v1785514571/broker_images_srinivas.jpg_wv5e4c.jpg",
  },
  {
    id: "6",
    name: "Supria Satish",
    email: "supria@globalpropertygroup.co",
    phone: "+971566807762",
    title: "Property Advisor",
    languages: "English, Hindi",
    brn: "73662",
    image: "https://res.cloudinary.com/dsldkspov/image/upload/v1785514854/supria-2_w_qt3mc9.png",
  },
  {
    id: "5",
    name: "Ankush Kumar",
    email: "ankush@globalpropertygroup.co",
    phone: "+971508842411",
    title: "Property Advisor",
    languages: "English, Hindi",
    brn: "93719",
    image: "https://res.cloudinary.com/dsldkspov/image/upload/v1785515339/b01af31fe45f4575b59f7d87f62e26db_mrm2eq.jpg",
    imageClassName: "object-cover object-[50%_32%]",
  },
];
