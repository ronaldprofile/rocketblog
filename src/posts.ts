import { post2, post3, post4 } from "./images";

export function getPosts() {
  return [
    {
      id: "1",
      customDelay: 0,
      date: "Janeiro 04, 2022",
      imageUrl: `${post2}`,
      title: "10 dicas para conseguir a vaga desejada",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
    },
    {
      id: "2",
      customDelay: 1,
      date: "Janeiro 04, 2022",
      imageUrl: `${post3}`,
      title: "Deixe seu código mais semântico com essas dicas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
    },
    {
      id: "3",
      customDelay: 2,
      date: "Janeiro 04, 2022",
      imageUrl: `${post4}`,
      title: "Use essas dicas nas suas aplicações mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
    },
    {
      id: "4",
      customDelay: 4,
      date: "Janeiro 04, 2022",
      imageUrl: `${post2}`,
      title: "10 dicas para conseguir a vaga desejada",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
    },
    {
      id: "5",
      customDelay: 5,
      date: "Janeiro 04, 2022",
      imageUrl: `${post3}`,
      title: "Deixe seu código mais semântico com essas dicas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
    },
    {
      id: "6",
      customDelay: 6,
      date: "Janeiro 04, 2022",
      imageUrl: `${post4}`,
      title: "Use essas dicas nas suas aplicações mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
    }
  ];
}
