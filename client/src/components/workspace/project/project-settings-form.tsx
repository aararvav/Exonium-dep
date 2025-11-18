import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmojiPickerComponent from "@/components/emoji-picker";
import { ProjectType } from "@/types/api.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { editProjectMutationFn } from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import { Camera, Loader, Upload } from "lucide-react";
import { useAuthContext } from "@/context/auth-provider";
import { Permissions } from "@/constant";

const ProjectSettingsForm = ({ project, onClose }: { 
  project: ProjectType; 
  onClose: () => void; 
}) => {
  const { hasPermission } = useAuthContext();
  const canEditProject = hasPermission(Permissions.EDIT_PROJECT);
  const workspaceId = useWorkspaceId();
  const queryClient = useQueryClient();

  const [emoji, setEmoji] = useState("📊");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const formSchema = z.object({
    name: z.string().trim().min(1, {
      message: "Project name is required",
    }),
    description: z.string().trim(),
    profilePicture: z.string().url().optional().or(z.literal("")),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: editProjectMutationFn,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      profilePicture: "",
    },
  });

  useEffect(() => {
    if (project) {
      setEmoji(project.emoji);
      setProfilePicture(project.profilePicture || null);
      form.setValue("name", project.name);
      form.setValue("description", project.description);
      form.setValue("profilePicture", project.profilePicture || "");
    }
  }, [project, form]);

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfilePicture(result);
        form.setValue("profilePicture", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
    form.setValue("profilePicture", "");
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload = {
      workspaceId,
      projectId: project._id,
      data: {
        emoji,
        name: values.name,
        description: values.description,
        profilePicture: values.profilePicture || null,
      },
    };

    mutate(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["allprojects", workspaceId] });
        queryClient.invalidateQueries({ queryKey: ["singleProject", project._id] });
        toast({
          title: "Success",
          description: "Project settings updated successfully",
          variant: "success",
        });
        onClose();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  if (!canEditProject) {
    return (
      <div className="w-full h-auto max-w-full">
        <div className="h-full">
          <div className="mb-5 pb-2 border-b">
            <h1 className="text-xl font-semibold text-center sm:text-left">Project Settings</h1>
            <p className="text-muted-foreground text-sm leading-tight">
              Manage your project information and settings
            </p>
          </div>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              You don't have permission to edit project settings.
            </p>
            <Button className="mt-4" onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto max-w-full">
      <div className="h-full">
        <div className="mb-5 pb-2 border-b">
          <h1 className="text-xl font-semibold text-center sm:text-left">
            Project Settings
          </h1>
          <p className="text-muted-foreground text-sm leading-tight">
            Manage your project information and settings
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Profile Picture Section */}
            <div className="space-y-4">
              <FormLabel>Project Profile Picture</FormLabel>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={profilePicture || ""} alt="Project" />
                  <AvatarFallback className="text-2xl bg-primary/10">
                    {project.emoji}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="relative"
                      disabled={isPending}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Picture
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        disabled={isPending}
                      />
                    </Button>
                    
                    {profilePicture && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={removeProfilePicture}
                        disabled={isPending}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG up to 2MB. Recommended size: 200x200px
                  </p>
                </div>
              </div>
            </div>

            {/* Emoji Section */}
            <div className="space-y-2">
              <FormLabel>Project Emoji</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-fit h-12 px-4"
                    disabled={isPending}
                  >
                    <span className="text-2xl mr-2">{emoji}</span>
                    <Camera className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0">
                  <EmojiPickerComponent onEmojiSelect={(selectedEmoji) => setEmoji(selectedEmoji)} />
                </PopoverContent>
              </Popover>
            </div>

            {/* Project Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter project name"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Project Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      disabled={isPending}
                      placeholder="Enter project description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isPending}
                className="flex-1"
              >
                {isPending && <Loader className="animate-spin mr-2 h-4 w-4" />}
                Save Settings
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isPending}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProjectSettingsForm;