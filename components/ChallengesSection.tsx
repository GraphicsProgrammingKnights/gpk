import WinnersSection, { Winner } from "./WinnersSection"
import ChallengeCard, { ChallengeCardProps } from "./ChallengeCard";

// Each project title here must have a unique key
const WINNERS: Winner[] = [
  {
    name: "test",
    challengeTitle: "test",
    projectTitle: "test1",
    deadline: new Date(2026, 8, 20),
    placement: 1,
  },
  {
    name: "test",
    challengeTitle: "test",
    projectTitle: "test2",
    deadline: new Date(2026, 8, 20),
    placement: 2,
  },
  {
    name: "test",
    challengeTitle: "test",
    projectTitle: "test3",
    deadline: new Date(2026, 8, 20),
    placement: 2,
  },
  {
    name: "test",
    challengeTitle: "test",
    projectTitle: "test4",
    deadline: new Date(2025, 7, 20),
    placement: 2,
  },
  {
    name: "test",
    challengeTitle: "test",
    projectTitle: "test5",
    deadline: new Date(2025, 6, 20),
    placement: 2,
  },
];

const CHALLENGE: ChallengeCardProps = {
  name: "Creative Loading Screen",
  desc: "An animated progress bar, spinning 3D model, particle effects, ASCII loading sequence, or mini-game with a fall theme.",
  tags: ["fall", "gamedev", "loadingscreen"],
  deadline: new Date(2026, 8, 30),
  link: "somelink",
}

export default function Challenges() {
  return (
    <section className="w-full flex flex-col gap-16">
      <ChallengeCard {...CHALLENGE} />
      <WinnersSection winners={WINNERS} />
    </section>
  )
}
