import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import Modal from "./Modal";
import { postDataProps } from "./PostList";

type Props = {
  onClose: () => void;
  onAddPost: (postData: postDataProps) => void;
};

export function NewPost({ onClose, onAddPost }: Props) {
  const [name, setName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();

  const nameChangeHandler = ({ target }: { target: HTMLInputElement }) => {
    setName(target.value);
  };

  const descChangeHandler = ({ target }: { target: HTMLTextAreaElement }) => {
    setDescription(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postData = {
      name: name,
      description: description,
    };
    onAddPost(postData);
    onClose();
  };

  return (
    <Card className="w-[350px] m-2">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Textarea
                id="description"
                placeholder="Description"
                onChange={descChangeHandler}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={nameChangeHandler}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Deploy</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
