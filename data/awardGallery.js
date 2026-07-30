export const AWARD_RECOGNITION_VIDEO = {
  id: "awards-celebration-video",
  src: "https://res.cloudinary.com/dsldkspov/video/upload/v1785312433/WhatsApp_Video_2026-07-25_at_3.09.36_PM_kzjb38.mp4",
  alt: "GPG awards celebration video",
  poster:
    "https://res.cloudinary.com/dsldkspov/image/upload/v1785328845/WhatsApp_Image_2026-07-25_at_3.06.03_PM_nvmdvf.jpg",
};

export const AWARD_GALLERY_FEATURED_COUNT = 3;
export const AWARD_GALLERY_PAGE_SIZE = 9;
export const AWARD_GALLERY_ROW_SIZE = 3;

export const AWARD_HIGHLIGHT = {
  id: "binghatti-best-broker-2025",
  src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785307390/3.jpg_ya3yuu.jpg",
  alt: "GPG on stage at Binghatti Broker Recognition Awards 2026",
};

export const AWARD_GALLERY_FEATURED = [
  {
    id: "binghatti-annual-2025",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785312324/award_1.jpg_jokfiv.jpg",
    alt: "GPG at Binghatti Annual Broker Awards 2025",
  },
  {
    id: "franck-muller-awards",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785312276/franckmuller.jpg_wmurp9.jpg",
    alt: "GPG team at Franck Muller and London Gate awards",
  },
  {
    id: "binghatti-annual-trophy",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785326970/WhatsApp_Image_2026-07-25_at_3.09.32_PM_1_gejy44.jpg",
    alt: "GPG team with trophy at Binghatti Annual Broker Awards",
  },
];

const AWARD_GALLERY_REST_RAW = [
  {
    id: "binghatti-award-portrait",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/c_fill,g_face,ar_4:3,q_auto,f_auto/v1785307419/2.jpg_kc2sly.jpg",
    alt: "GPG representative holding Binghatti Broker Recognition Award 2026",
    objectPosition: "50% 50%",
    imageScale: 1.32,
    imageOffsetY: "-10%",
  },
  {
    id: "binghatti-team-trophy",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785319380/9.jpg_v0kctx.jpg",
    alt: "GPG team member with Billionaires Estate award trophy",
  },
  {
    id: "broker-awards-aerial",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785312212/DJI_20250910215902_0608_D.JPG_dmwdck.jpg",
    alt: "Aerial view of broker recognition awards event",
  },
  {
    id: "awards-ceremony-stage",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785312054/DSC02403.JPG_uo4yqv.jpg",
    alt: "Broker recognition awards ceremony stage",
  },
  {
    id: "awards-event-group",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785312158/DSC02428.JPG_wcafe0.jpg",
    alt: "GPG team at awards event",
  },
];

function getAwardImageKey(src) {
  if (!src) return "";

  const match = src.match(/\/upload\/(?:(?:c_[^/]+(?:,[^/]+)*|v\d+)\/)*(.+)$/i);
  return match ? match[1].toLowerCase() : src.toLowerCase();
}

function dedupeAwardGalleryItems(items, reservedKeys = new Set()) {
  const seen = new Set(reservedKeys);

  return items.filter((item) => {
    const key = getAwardImageKey(item.src);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const RESERVED_AWARD_IMAGE_KEYS = new Set([
  getAwardImageKey(AWARD_HIGHLIGHT.src),
  getAwardImageKey(AWARD_RECOGNITION_VIDEO.poster),
  ...AWARD_GALLERY_FEATURED.map((item) => getAwardImageKey(item.src)),
]);

export const AWARD_GALLERY_REST = dedupeAwardGalleryItems(
  AWARD_GALLERY_REST_RAW,
  RESERVED_AWARD_IMAGE_KEYS
);

export const AWARD_GALLERY = dedupeAwardGalleryItems([
  ...AWARD_GALLERY_FEATURED,
  ...AWARD_GALLERY_REST,
]);
