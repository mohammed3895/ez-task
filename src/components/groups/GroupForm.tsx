import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GROUPS } from "@/data/groups";
import { createFormSchema } from "@/lib/validation/create-group-schema";
import { useToast } from "../ui/use-toast";

const GroupForm = () => {
  const { toast } = useToast();
  // DEFINE GROUP CREATION FORM AND FEILDS
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createFormSchema>) => {
    // THE RETURNED OBJECT FROM THE FORM
    const groupObj = {
      id: GROUPS.length + 1,
      name: values.name,
      description: values.description,
      image: values.image,
      createdAt: Date.now(),
      members: [{}],
      posts: [],
    };

    // SAVE NEW GROUPS ARRAY TO LOCAL STORAGE
    const groups = localStorage.getItem("groups");
    const parsedGroups = groups ? JSON.parse(groups) : [];
    const newGroup = parsedGroups.concat(groupObj);

    localStorage.setItem("groups", JSON.stringify(newGroup));
    toast({
      title: `${groupObj.name} Created Succesfuly`,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-2.5 w-full md:mb-4">
              <FormLabel className="text-sm text-black-1">Group Name</FormLabel>
              <FormControl>
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Group name here"
                    {...field}
                    className="relative"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mb-2.5 w-full md:mb-4">
              <FormLabel className="text-sm text-black-1">
                Description
              </FormLabel>
              <FormControl>
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Enter Group Description"
                    {...field}
                    className="relative"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="mb-2.5 w-full md:mb-4">
              <FormLabel className="text-sm text-black-1">Photo</FormLabel>
              <FormControl>
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="You need to copy & paste image url"
                    {...field}
                    className="relative"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="w-full px-4 py-2.5 bg-primary text-white hover:opacity-80"
        >
          Create
        </button>
      </form>
    </Form>
  );
};

export default GroupForm;
