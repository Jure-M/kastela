export interface ISingleApartment {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  backgroundColor: string;
  photoGallery?: string[];
}

export const apartmentsData: ISingleApartment[] = [
  {
    id: 0,
    imgUrl: "/photos/modern/modern_1.jpg",
    title: "Modern Apartment",
    description:
      "Modern apartment located between Split and Trogir, only 2 minutes walking from train station, and 12 minutes from the beach. Surrounded by peaceful, and green area, balcony overlooking sea and Split. Private parking is provided.",
    backgroundColor: "#d7d7d7",
    photoGallery: [
      "/photos/modern/modern_1.jpg",
      "/photos/modern/modern_2.jpg",
      "/photos/modern/modern_3.jpg",
      "/photos/modern/modern_4.jpg",
      "/photos/modern/modern_5.jpg",
      "/photos/modern/modern_6.jpg",
      "/photos/modern/modern_7.jpg",
      "/photos/modern/modern_8.jpg",
    ],
  },
  {
    id: 1,
    imgUrl: "/photos/stylish/stylish_1.jpg",
    title: "Stylish Studio",
    description:
      "Modern studio apartment located between Split and Trogir, only 2 minutes walking from train station, and 12 minutes from the beach. Surrounded by peaceful, and green area, balcony overlooking sea and Split. Private parking is provided. Apartment have balcony, but it is detached ( visible on photos )",
    backgroundColor: "#d5e2e6",
    photoGallery: [
      "/photos/stylish/stylish_1.jpg",
      "/photos/stylish/stylish_2.jpg",
      "/photos/stylish/stylish_3.jpg",
      "/photos/stylish/stylish_4.jpg",
      "/photos/stylish/stylish_5.jpg",
      "/photos/stylish/stylish_6.jpg",
      "/photos/stylish/stylish_7.jpg",
      "/photos/stylish/stylish_8.jpg",
      "/photos/stylish/stylish_9.jpg",
    ],
  },
  {
    id: 2,
    imgUrl: "/photos/vibes/vibes_1.jpg",
    title: "Green Vibes",
    description:
      "Modern studio apartment located between Split and Trogir, only 2 minutes walking from train station, and 12 minutes from the beach. Surrounded by peaceful, and green area, balcony overlooking sea and Split. Private parking is provided.",
    backgroundColor: "#E6EDE4",
    photoGallery: [
      "/photos/vibes/vibes_1.jpg",
      "/photos/vibes/vibes_2.jpg",
      "/photos/vibes/vibes_3.jpg",
      "/photos/vibes/vibes_4.jpg",
      "/photos/vibes/vibes_5.jpg",
      "/photos/vibes/vibes_6.jpg",
      "/photos/vibes/vibes_7.jpg",
      "/photos/vibes/vibes_8.jpg",
      "/photos/vibes/vibes_9.jpg",
      "/photos/vibes/vibes_10.jpg",
    ],
  },
];
