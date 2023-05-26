import { takeLatest, put, select } from "redux-saga/effects";
import { setPosts, getPostSuccess, getPostFetch } from "./postSlice";

function* fetchPostsSaga(): Generator<any, void, any> {
  console.log("masuk 123");
  const posts = yield select((state) => state.post.posts);

  const newPosts = [
    {
      title: "Komodo Island",
      description:
        "Komodo Island, East Nusa Tenggara: Famous for the rare Komodo dragons and its beautiful underwater scenery. Komodo Island also features stunning beaches.",
      imageUrl:
        "https://asset.kompas.com/crops/eIP2s99xXyYl2dhwW9hDQ6QxisY=/0x0:780x520/750x500/data/photo/2019/09/26/5d8c64544d656.jpg",
    },
    {
      title: "Bromo Tengger Semeru National Park",
      description:
        "Bromo Tengger Semeru National Park, East Java: Known for its active volcano, Mount Bromo, and the breathtaking sunrise views. The national park also offers picturesque lakes and vast grasslands.",
      imageUrl:
        "https://radarsolo.jawapos.com/wp-content/uploads/2021/09/bromo-tengger.jpg",
    },
    {
      title: "Lake Toba",
      description:
        "Lake Toba, North Sumatra: It is the largest volcanic lake in the world and a popular tourist destination. In the middle of Lake Toba, there is Samosir Island, offering natural beauty and Batak culture.",
      imageUrl:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/30/tipang_169.jpeg?w=650&q=90",
    },
    {
      title: "Raja Ampat Islands",
      description:
        "Raja Ampat Islands, West Papua: Renowned for its extraordinary marine biodiversity. Raja Ampat is a paradise for divers and nature lovers.",
      imageUrl:
        "https://indonesiakaya.com/wp-content/uploads/2020/10/raja-ampat-surga1200.jpg",
    },
    {
      title: "Ujung Kulon National Park",
      description:
        "Ujung Kulon National Park, Banten: This park is the habitat of the endangered Javan rhinoceros. It also boasts beautiful beaches and exotic small islands.",
      imageUrl: "https://wisato.id/wp-content/uploads/2020/01/Honje-1.jpg",
    },
    {
      title: "Bunaken National Park",
      description:
        "Bunaken National Park, North Sulawesi: Famous for its magnificent coral reefs and a popular destination for diving enthusiasts. Bunaken is home to incredible marine biodiversity.",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/cb/26/7d/bunaken-national-marine.jpg?w=1200&h=-1&s=1",
    },
    {
      title: "Lorentz National Park",
      description:
        "Lorentz National Park, Papua: It is one of the few places in the world that encompasses alpine ecosystems to tropical seas. The national park also includes one of the highest mountains in Indonesia, Puncak Jaya or Carstensz Pyramid.",
      imageUrl:
        "https://media.bareksa.com/cms/media/assets/image/2019/12/15376_79ec31d6a39782de8fb281d1d52b3f38.jpg",
    },
    {
      title: "Baliem Valley",
      description:
        "Baliem Valley, Papua: Located in the central highlands of Papua, Baliem Valley is known for its stunning landscapes and unique cultural experiences. The valley is surrounded by lush green mountains, deep valleys, and traditional tribal villages. It offers opportunities for trekking, interacting with local tribes like the Dani people, and witnessing traditional festivals and rituals.",
      imageUrl:
        "https://akcdn.detik.net.id/visual/2019/07/24/9cc71ce0-caf1-4937-9a27-bf09aaef6d2b_169.jpeg?w=650",
    },
    {
      title: "Mount Ijen",
      description:
        "Mount Ijen, East Java: Mount Ijen is famous for its mesmerizing blue fire phenomenon, which can be seen at night in the crater. It is an active volcano with a turquoise-colored acidic crater lake. Hiking to the summit of Mount Ijen offers breathtaking views and a chance to witness sulfur mining activities.",
      imageUrl:
        "https://anakgunung.com/wp-content/uploads/2020/01/kawah_ijen.jpeg",
    },
    {
      title: "Derawan Islands",
      description:
        "Derawan Islands, East Kalimantan: The Derawan Islands are a group of islands known for their pristine beaches, crystal-clear turquoise waters, and vibrant marine life. It is a perfect destination for snorkeling, diving, and exploring the rich underwater biodiversity, including coral reefs and sea turtles.",
      imageUrl:
        "https://img.herstory.co.id/articles/archive_20210414/pulau-derawan-20210414-130341.jpg",
    },
    {
      title: "Togean Islands",
      description:
        "Togean Islands, Central Sulawesi: The Togean Islands offer a secluded and untouched paradise with white sandy beaches, crystal-clear waters, and diverse marine ecosystems. It is a great destination for snorkeling, diving, and relaxing amidst the tranquility of nature.",
      imageUrl:
        "https://cdn.antaranews.com/cache/800x533/2019/12/13/TOGEAN-ISLAND.jpg",
    },
    {
      title: "Mentawai Islands",
      description:
        "Mentawai Islands, West Sumatra: The Mentawai Islands are renowned for their world-class surf breaks, pristine beaches, and lush rainforests. It is a paradise for surfers and nature enthusiasts, offering opportunities for surfing, trekking, and experiencing the unique indigenous culture of the Mentawai people.",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Mount Kelimutu",
      description:
        "Mount Kelimutu, Flores: Mount Kelimutu is famous for its three-colored crater lakes, each displaying different colors that change over time. The scenic hike to the summit provides panoramic views of the surrounding valleys and mountains.",
      imageUrl:
        "https://asset.kompas.com/crops/7BAA_ly7b-MmcoKLamKOPBypZx8=/53x0:676x415/750x500/data/photo/2020/05/18/5ec278e912802.jpg",
    },
    {
      title: "Thousand Islands",
      description:
        "Thousand Islands, Jakarta: Just off the coast of Jakarta, the Thousand Islands is a collection of tropical islands known for their white sandy beaches, clear waters, and vibrant coral reefs. It is a popular destination for island-hopping, snorkeling, and enjoying water sports.",
      imageUrl:
        "https://www.jakarta.go.id/uploads/contents/content--20210324094944.jpg",
    },
    {
      title: "Tangkoko Nature Reserve",
      description:
        "Tangkoko Nature Reserve, North Sulawesi: Tangkoko Nature Reserve is a haven for wildlife enthusiasts, home to various unique species, including tarsiers, black macaques, hornbills, and endemic birds. Visitors can explore the lush rainforest and spot these fascinating creatures.",
      imageUrl: "https://direktoripariwisata.id/imgunit/8124.jpg",
    },
    {
      title: "Mount Merapi",
      description:
        "Mount Merapi, Yogyakarta: Mount Merapi is an active volcano and the most iconic peak in Yogyakarta. It offers thrilling hiking experiences, stunning panoramic views, and a chance to witness the volcano's volcanic activities and volcanic landscapes.",
      imageUrl:
        "https://asset.kompas.com/crops/f3gVhTjfdLZ0uD5hgjAvcoXVccs=/15x34:713x500/750x500/data/photo/2023/03/09/6409d4b6b6eab.jpg",
    },
    {
      title: "Mount Rinjani",
      description:
        "Mount Rinjani, Lombok: Mount Rinjani is the second highest volcano in Indonesia, located on the island of Lombok. It is a challenging yet rewarding trekking destination, offering breathtaking views from the summit, stunning crater lake (Segara Anak), and hot springs.",
      imageUrl:
        "https://images.genpi.co/resize/1280x860-100/uploads/ntb/arsip/watermark/2021/11/30/pendakian-di-gunung-rinjani-tetap-dibuka-penutupan-hanya-di-yila.webp",
    },
    {
      title: "Karimunjawa Islands",
      description:
        "Karimunjawa Islands, Central Java: The Karimunjawa Islands are a group of stunning islands located north of Semarang. Known for their pristine beaches, crystal-clear waters, and vibrant coral reefs, the islands offer a paradise for snorkeling, diving, and beach relaxation. Visitors can explore the marine biodiversity, indulge in water sports, and enjoy the untouched natural beauty of the islands.",
      imageUrl:
        "https://mytrip123.com/wp-content/uploads/2022/04/karimun-jawa.jpg",
    },
    {
      title: "Borobudur Temple",
      description:
        "Borobudur Temple, Central Java: Borobudur Temple is one of the most famous Buddhist temples in the world and a UNESCO World Heritage Site. Located near Yogyakarta, it is a magnificent architectural marvel adorned with intricate stone carvings and stupas. Visitors can explore the temple's nine platforms, each representing a different stage of Buddhist enlightenment, while enjoying panoramic views of the surrounding countryside.",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ef/47/1c/borobudur-temple.jpg?w=1200&h=1200&s=1",
    },
    {
      title: "Lake Maninjau",
      description:
        "Lake Maninjau, West Sumatra: Lake Maninjau is a serene crater lake located in the highlands of West Sumatra. Surrounded by rolling hills and picturesque landscapes, it offers a tranquil setting for relaxation and enjoying nature. Visitors can swim in the lake's clear waters, explore traditional villages, and savor the local cuisine.",
      imageUrl:
        "https://picture.triptrus.com/image/2014/06/danau-maninjau-4.jpeg",
    },
  ];

  const updatedPosts = [...posts, ...newPosts];

  console.log("masuk sini", updatedPosts);

  yield put(setPosts(updatedPosts));
  yield put(getPostSuccess(updatedPosts)); // Dispatch getPostSuccess action to update the posts state
}

export default function* postSaga(): Generator {
  console.log("masuk generator");
  yield takeLatest(getPostFetch.type, fetchPostsSaga);
}
