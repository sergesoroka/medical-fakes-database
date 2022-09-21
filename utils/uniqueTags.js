import { fakesData } from "../data/fakes/fakesData";

export const uniqueTags = [];


fakesData.map((fake) => {
  const tags = fake.tags.split(", ")

  tags.map((tag) => {
    if (!uniqueTags.includes(tag)) {
      uniqueTags.push(tag);
    }
  });
});
