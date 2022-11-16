import { DataType } from "./Interface";

interface RowInput {
  data: DataType;
}

export default function Row(props: RowInput) {
  function dateToYMD(date: Date) {
    const strArray = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = date.getDate();
    const m = date.getMonth();
    const m_t = strArray[m];
    const y = date.getFullYear();
    return m_t + " " + (d <= 9 ? "0" + d : d) + ", " + y;
  }

  return (
    <div
      className={
        "w-full border-1 dark:border-slate-700 border-slate-400 md:grid md:grid-cols-4 sm:flex sm:flex-col w-full h-full"
      }
    >
      <div className={"col-span-1 h-full"}>
        <img
          className={"h-full w-full object-cover"}
          src={props.data.imgPath}
          alt={props.data.title}
        />
      </div>
      <div
        className={
          "col-span-3 dark:bg-pcr_1_100 bg-pcr_3_200 h-full flex flex-col justify-between p-3 dark:text-white "
        }
      >
        <div className={""}>
          <div className={"flex flex-col md:flex-row mt-2 items-center"}>
            <div className={"text-xl font-semibold"}>Title</div>
            <div className={"ml-4 text-2xl font-bold"}>{props.data.title}</div>
          </div>
          <div className={"mt-2 items-center"}>
            <div className={"text-xl font-semibold"}>Description</div>
            <div className={"ml-4text-xl text-justify"}>
              {props.data.description}
            </div>
          </div>
        </div>
        <div className={"flex justify-between flex-col md:flex-row mt-5"}>
          <div className={"flex"}>
            <div className={"text-xl font-semibold"}>Last Updated:</div>
            <div className={"text-xl pl-2"}>
              {dateToYMD(new Date(props.data.lastUpdate))}
            </div>
          </div>
          <div className={"text-xl font-semibold"}>
            {props.data.bookmark} Bookmarks
          </div>
        </div>
      </div>
    </div>
  );
}
