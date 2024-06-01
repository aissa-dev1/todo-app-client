import { TaskType } from "@/features/types";
import { Card } from "../ui/card";
import TaskCardHeader from "./taskCardHeader";
import TaskCardContent from "./taskCardContent";
import TaskCardFooter from "./taskCardFooter";

interface Props extends TaskType {}

export default function Task(props: Props) {
  return (
    <Card>
      <TaskCardHeader {...props} />
      <TaskCardContent {...props} />
      <TaskCardFooter {...props} />
    </Card>
  );
}
