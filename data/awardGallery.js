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
  id: "binghatti-best-broker-2026",
  src: "https://res.cloudinary.com/dsldkspov/image/upload/v1787809467/WhatsApp_Image_2026-08-21_at_11.44.52_AM_t9xq69.jpg",
  alt: "GPG on stage at Binghatti Broker Recognition Awards 2026",
};

export const AWARD_GALLERY_FEATURED = [
  {
    id: "broker-awards-stage-2026",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1787302629/WhatsApp_Image_2026-08-21_at_11.38.28_AM_ux1ean.jpg",
    alt: "GPG team on stage at Brokers Awards ceremony",
    caption: "Binghatti Broker Recognition Awards 2024",
    objectPosition: "28% 50%",
  },
  {
    id: "broker-awards-handshake-2026",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1787302661/WhatsApp_Image_2026-08-21_at_11.38.54_AM_mm42wx.jpg",
    alt: "GPG leadership at broker recognition awards event",
    caption: "Binghatti Broker Recognition Awards 2024",
    objectPosition: "50% 30%",
  },
  {
    id: "ultimate-realty-awards-2025",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1787305699/WhatsApp_Image_2026-08-21_at_11.42.07_AM_njg5ba.jpg",
    alt: "GPG team at The Ultimate Realty Awards",
    caption: "The Ultimate Realty Awards from India Today Group and NKN Media 2025",
  },
];

const AWARD_GALLERY_REST_RAW = [
  {
    id: "binghatti-h1-2025-top-broker",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1787809688/WhatsApp_Image_2026-08-21_at_11.43.23_AM_vx65dz.jpg",
    alt: "GPG representative with Top Broker Award from Binghatti for H1 2025",
    caption: "Top Broker Award from Binghatti for H1 2025",
    objectPosition: "50% 28%",
  },
  {
    id: "binghatti-h1-2025-team",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1787810321/WhatsApp_Image_2026-08-21_at_11.43.22_AM_wl136r.jpg",
    alt: "GPG team celebrating Top Broker Award at Binghatti Annual Broker Awards 2025",
    caption: "GPG team at Binghatti Annual Broker Awards 2025",
  },
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
    id: "binghatti-annual-2025-carousel",
    type: "image",
    src: "https://res.cloudinary.com/dsldkspov/image/upload/v1785312324/award_1.jpg_jokfiv.jpg",
    alt: "GPG team at Binghatti Broker Recognition Awards 2026",
    caption: "Binghatti Broker Recognition Awards 2026",
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
    alt: "GPG team recognised by London Gate Developers for Yachting project sales performance",
    caption:
      "Recognised by London Gate Developers for achieving the 2nd highest sales performance in their exclusive Yachting project in Maritime City.",
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
