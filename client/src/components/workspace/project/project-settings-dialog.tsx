import { Settings } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProjectSettingsForm from "./project-settings-form";
import { ProjectType } from "@/types/api.type";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ProjectSettingsDialog = ({ project }: { project: ProjectType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Project Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto border-0">
        <ProjectSettingsForm project={project} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectSettingsDialog;