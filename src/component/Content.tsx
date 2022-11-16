import { DataType } from "./Interface";
import Row from "./Row";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/app.store";
import {setTheme} from "../store/slice/theme-slice";

export default function Content() {
  const dispatch = useDispatch();
  const themeClass = useSelector(
      (state: RootState) => state.themeReducer.class
  );

  function toggleTheme(){
    dispatch(setTheme(themeClass === "light" ? "dark" : "light"));
    localStorage.setItem("theme", themeClass === "light" ? "dark" : "light");
  }

  const data: DataType[] = [
    {
      id: 1,
      imgPath:
        "https://img.yts.mx/assets/images/movies/black_adam_2022/medium-cover.jpg",
      title: "Black Adam",
      description:
        "Reawakening after 5000 years, Black Adam becomes the\n" +
        "world's ruthless protector: an anti-villain to take on the\n" +
        "likes of Superman and Wonder Woman. Now in the\n" +
        "21st-Century, Black Adam must face off against the Justice\n" +
        "Society of America and it's heroes: Doctor Fate, Hawkman,\n" +
        "Atom Smasher and Cyclone. The fate of the world hangs in\n" +
        "the balance.",
      lastUpdate: new Date("11/15/2022").toString(),
      bookmark: 24,
    },
    {
      id: 2,
      imgPath:
        "https://img.yts.mx/assets/images/movies/amsterdam_2022/medium-cover.jpg",
      title: "Amsterdam",
      description:
        "In the 1930s, three friends witness a murder, are framed for it, and uncover one of the most outrageous plots in American history.",
      lastUpdate: new Date('11/12/2022').toString(),
      bookmark: 12,
    },
    {
      id: 3,
      imgPath:
        "https://img.yts.mx/assets/images/movies/the_friendship_game_2022/medium-cover.jpg",
      title: "The Friendship Game",
      description:
        "A group of teenagers in a small town discover a strange object that tests the strength of their friendship.",
      lastUpdate: new Date("11/11/2022").toString(),
      bookmark: 13,
    },
    {
      id: 4,
      imgPath:
        "https://img.yts.mx/assets/images/movies/poker_face_2022/medium-cover.jpg",
      title: "Poker Face",
      description:
        "Tech billionaire and gambler Jake Foley (Crowe) hosts a high-stakes poker game between childhood friends, offering them the chance to win more money than they've ever dreamed of. The evening takes a turn when he unveils his elaborate plan seeking revenge for their betrayals and to play, they'll have to give up the one thing they've spent their lives trying to keep...their secrets. As the game unfolds, thieves break in and they must band together to survive a night of terror.",
      lastUpdate: new Date("11/14/2022").toString(),
      bookmark: 8,
    },
  ];

  return (
    <div>
      <div
        className={
          "h-24 top-0 left-0 right-0 border-b-2 border-dark" +
          " bg-pcr_3_400 dark:bg-pcr_1_400 text-white fixed flex items-center"
        }
      >
        <div className={"flex gap-4 justify-between sm:w-4/6 mx-auto"}>
          {themeClass === "light" ? (
              <i className="bx bxs-moon bx-md cursor-pointer text-black" style={{ paddingTop: 2 }} onClick={toggleTheme}></i>
          ) : (
              <i className="bx bxs-sun bx-md cursor-pointer" style={{ paddingTop: 2 }} onClick={toggleTheme}></i>
          )}
          <div className={"flex gap-2 items-center flex-col sm:flex-row"}>
            <input className={"w-80 h-7 rounded-md bg-slate-200 outline-pcr_2_100"} type={"text"} />
            <div
                className="rounded-md border cursor-pointer
                    border-transparent bg-pcr_2_200 py-2 px-4 text-sm font-semibold
                    text-white shadow-sm hover:bg-pcr_2_300 gap-1
                    flex flex-row justify-center content-center"
            >
              <i className="bx bx-plus bx-xs" style={{ paddingTop: 2 }}></i>
              <div className={""}>add bookmark</div>
            </div>
          </div>
          <a href={"https://t.me/b_bahru"} target={"_blank"} className={"hidden md:block"}>
            <div className={"w-10 h-10"}>
            <img className={"rounded-full object-cover w-full h-full"} src={"https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"}
                 alt={"Profile Image"} />
            </div>
          </a>
        </div>
      </div>
      <div className="container w-5/6 lg:w-4/6 mx-auto px-4 mt-24 pt-5">
        <div className={"flex justify-between flex-col md:flex-row"}>
          <div className="text-2xl font-semibold pt-1 dark:text-white">Collection</div>
          <div
            className="rounded-md border cursor-pointer
                    border-transparent bg-pcr_2_200 py-2 px-4 text-sm font-semibold
                    text-white shadow-sm hover:bg-pcr_2_300 gap-1
                    flex flex-row justify-center content-center"
          >
            <i className="bx bx-plus bx-xs" style={{ paddingTop: 2 }}></i>
            <div className={""}>Create Collection</div>
          </div>
        </div>

        <div
          className={"flex flex-col gap-2 mt-5 overflow-auto p-2 pb-5"}
          style={{ maxHeight: 520 }}
        >
          {data.length === 0 && (
            <div
              className={"border-t-2 pt-2 font-semibold text-xl text-center"}
            >
              No Data
            </div>
          )}
          {data.map((item: DataType) => (
            <Row data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="fixed h-14 bottom-0 left-0 right-0 border-t-2 bg-pcr_3_400 dark:bg-pcr_1_300">
        <div
          className={
            "w-4/6 flex justify-between items-center m-auto pt-2 dark:text-white"
          }
        >
          <i className='bx bx-square bx-md bx-spin bx-rotate-270'></i>
          <a
            href={"https://yts.am/"}
            target={"_blank"}
            className={" font-semibold cursor-pointer"}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
