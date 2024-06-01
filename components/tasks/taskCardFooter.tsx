import { buildDate } from "@/utils/build-date";
import { CardDescription, CardFooter } from "../ui/card";
import { buildTime } from "@/utils/build-time";
import UpdateTaskDialog from "./updateTaskDialog";

interface Props {
  _id: string;
  completed: boolean;
  createdAt: number;
}

export default function TaskCardFooter({ _id, completed, createdAt }: Props) {
  return (
    <CardFooter>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-0.5">
          <CardDescription>{buildDate(createdAt)}</CardDescription>
          <CardDescription className="text-sm">
            {buildTime(createdAt)}
          </CardDescription>
        </div>
        {!completed && <UpdateTaskDialog id={_id} />}
      </div>
    </CardFooter>
  );
}
