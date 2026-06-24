export type Location = {
  name: string;
  city: string;
  url: string;
};

export const locations: Location[] = [
  { name: "Velachery", city: "Chennai", url: "https://maps.app.goo.gl/NrM3D25mbi6dx75J6" },
  { name: "Besant Nagar", city: "Chennai", url: "https://maps.app.goo.gl/PimjYfdq1pN5JrxH6" },
  { name: "Nungambakkam", city: "Chennai", url: "https://maps.app.goo.gl/zx1T4YmwZNveycEfA" },
  { name: "Singapore", city: "Singapore", url: "https://maps.app.goo.gl/jCidnj7hnfQNUv9J9" },
  { name: "Pondicherry", city: "Pondicherry", url: "https://maps.app.goo.gl/ZWtn9FuoDWBKx67H8" },
  { name: "Tirupati Branch 1", city: "Tirupati", url: "https://maps.app.goo.gl/haqw6jdWrhsCqudF6" },
  { name: "Tirupati Branch 2", city: "Tirupati", url: "https://maps.app.goo.gl/4EdNPsZ8Fq9DA7au5" },
  { name: "Madurai - Kalavasal Branch", city: "Madurai", url: "https://maps.app.goo.gl/Kp8h6S2tdmVY9TMn7" },
  { name: "Madurai - Chinna Chokkikulam Branch", city: "Madurai", url: "https://maps.app.goo.gl/rQPmxGbHvWaMABH28" },
  { name: "Thanjavur", city: "Thanjavur", url: "https://maps.app.goo.gl/fZ1SsP8UjCPfjqwQ9" },
  { name: "Bengaluru", city: "Bengaluru", url: "https://maps.app.goo.gl/pmBMHPpqHBTqijm99" },
];

export const cities = Array.from(new Set(locations.map((l) => l.city)));
