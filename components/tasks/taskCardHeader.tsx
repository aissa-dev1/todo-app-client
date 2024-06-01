import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Loader from "../loader";
import XmarkIcon from "../icons/xmark";
import { cn } from "@/lib/utils";
import useDeleteTask from "@/hooks/tasks/use-delete-task";

interface Props {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

export default function TaskCardHeader({
  _id,
  title,
  description,
  completed,
}: Props) {
  const { deleteTaskData, deleteTask } = useDeleteTask();

  return (
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-2">
          <CardTitle className={cn({ "line-through": completed })}>
            {title}
          </CardTitle>
          <CardDescription className={cn({ "line-through": completed })}>
            {description}
          </CardDescription>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={async () => {
            await deleteTask(_id);
          }}
        >
          {deleteTaskData.loading ? (
            <Loader childClassName="border-white size-4" />
          ) : (
            <XmarkIcon />
          )}
        </Button>
      </div>
    </CardHeader>
  );
}
