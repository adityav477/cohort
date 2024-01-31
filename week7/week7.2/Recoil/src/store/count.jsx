import { atom, selector } from "recoil";


const countAtom = atom({
  key: "countAtom",
  default: 0
})

const isEvenOrOdd = selector({
  key: "isEvenOrOdd",
  get: ({ get }) => {
    const count = get(countAtom);

    if (count % 2 == 0) {
      return <p>Is Even</p>
    } else {
      return <p>Is Odd</p>
    }
  }
})

export { countAtom, isEvenOrOdd };
