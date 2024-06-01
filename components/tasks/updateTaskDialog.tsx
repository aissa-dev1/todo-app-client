import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import EditIcon from "../icons/edit";
import Loader from "../loader";
import useUpdateTask from "@/hooks/tasks/use-update-task";

interface Props {
  id: string;
}

export default function UpdateTaskDialog({ id }: Props) {
  const { updateTaskData, setUpdateTaskData, updateTask } = useUpdateTask();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <EditIcon className="size-3.5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update task</DialogTitle>
          <DialogDescription>
            From here you can edit/update any task info.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="new_title" className="w-fit">
              Title
            </Label>
            <Input
              id="new_title"
              type="text"
              placeholder="Do new thing"
              value={updateTaskData.title}
              onChange={(e) => {
                setUpdateTaskData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="new_description" className="w-fit">
              Description
            </Label>
            <Input
              id="new_description"
              type="text"
              placeholder="Why you should do a new thing?"
              value={updateTaskData.description}
              onChange={(e) => {
                setUpdateTaskData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
            />
          </div>
          <Button
            onClick={async () => {
              await updateTask(id);
            }}
          >
            {updateTaskData.loading ? (
              <Loader childClassName="border-black" />
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
