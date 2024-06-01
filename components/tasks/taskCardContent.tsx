import useCompleteTask from "@/hooks/tasks/use-complete-task";
import { CardContent, CardDescription } from "../ui/card";
import { Switch } from "../ui/switch";
import useUnCompleteTask from "@/hooks/tasks/use-uncomplete-task";

interface Props {
  _id: string;
  completed: boolean;
}

export default function TaskCardContent({ _id, completed }: Props) {
  const { completeTask } = useCompleteTask();
  const { uncompleteTask } = useUnCompleteTask();

  return (
    <CardContent className="flex items-center justify-between">
      <CardDescription>{completed ? "Completed" : "Pending"}</CardDescription>
      <Switch
        checked={completed}
        onClick={() => {
          if (completed) uncompleteTask(_id);
          else completeTask(_id);
        }}
      />
    </CardContent>
  );
}
