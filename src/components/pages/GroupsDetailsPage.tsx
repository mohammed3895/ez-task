import { useParams } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const GroupsDetailsPage = () => {
  const [editGroup, setEditGroup] = useState(false);

  const { id } = useParams();

  const groups = localStorage.getItem("groups");
  const parsedGroups = groups ? JSON.parse(groups) : [];
  const group = parsedGroups.find((el: { id: number }) => el.id === Number(id));

  const handleNameChange = (values: z.infer<typeof schema>) => {
    const updatedName = values.name;
    // Assuming you want to update the group's name in the parsedGroups array
    const updatedGroups = parsedGroups.map(
      (g: { id: number; name: string }) => {
        if (g.id === Number(id)) {
          return { ...g, name: updatedName };
        }
        return g;
      }
    );
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
    setEditGroup(false);
  };

  const schema = z.object({
    name: z.string().min(1),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: group?.name,
    },
  });

  return (
    <div className="flex flex-col items-center w-full h-full p-4 md:p-8">
      <div className="w-full h-full p-4 rounded-lg flex max-w-[500px] border">
        <div className="w-full h-full flex gap-2">
          <div className="w-20 h-20 rounded-md">
            <img
              src={group?.image}
              alt={group?.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            {editGroup ? (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleNameChange)}
                  className="flex gap-1"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-2.5 w-full md:mb-4">
                        <FormControl>
                          <div className="relative w-full">
                            <Input
                              type="text"
                              placeholder="Ex: john@example.com"
                              {...field}
                              className="relative"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Save</Button>
                </form>
              </Form>
            ) : (
              <h1
                className="text-xl font-semibold"
                onClick={() => setEditGroup(true)}
              >
                {group?.name}
              </h1>
            )}
            <p className="text-sm text-gray-500">{group?.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <div className="flex gap-2 text-nowrap items-center">
            <h1 className="text-sm font-bold ">Members - </h1>
            <p className="text-sm font-bold text-primary">
              {group?.members.length === 0
                ? "No members"
                : group?.members.length}
            </p>
          </div>
          <div className="flex gap-2 text-nowrap items-center">
            <h1 className="text-sm font-bold ">Created at </h1>
            <p className="text-sm font-bold text-primary">
              {moment(group?.createdAt).format("DD MMM YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GroupsDetailsPage;
