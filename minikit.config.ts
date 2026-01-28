const ROOT_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://lunar-lander4.vercel.app';

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjI1MTY0OTQsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhDQzA3REE0OEI2NDdhNTVkNGNERDVjYkI3MDQxOTI1MzNCYWVBNkQyIn0",
    payload: "eyJkb21haW4iOiJsdW5hci1sYW5kZXI0LnZlcmNlbC5hcHAifQ",
    signature: "lFEk99d+d78DITs1sTMQ3e5VnKyrm62HI6dZydw/78YDM8oapED8nbNTwkDMrja4BtAysyAvIzs/x8BSOr3Ckhs="
  },
  miniapp: {
    version: "1",
    name: "Lunar Lander",
    subtitle: "Retro lunar landing challenge",
    description: "Master physics and fuel management to safely land your spacecraft on the moon. Classic arcade gameplay with modern touch controls.",
    screenshotUrls: [
      `${ROOT_URL}/screenshot-portrait-1.png`,
      `${ROOT_URL}/screenshot-portrait-2.png`,
      `${ROOT_URL}/screenshot-portrait-3.png`
    ],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/hero-image.png`,
    splashBackgroundColor: "#0a0a0a",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["arcade", "retro", "physics", "space", "gaming"],
    heroImageUrl: `${ROOT_URL}/hero-image.png`,
    tagline: "Land safely or crash spectacularly",
    ogTitle: "Lunar Lander - Retro Space Game",
    ogDescription: "Physics-based lunar landing challenge. Navigate gravity, manage fuel, and stick the landing!",
    ogImageUrl: `${ROOT_URL}/hero-image.png`,
  },
} as const;
