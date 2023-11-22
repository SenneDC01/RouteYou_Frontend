import React from "react";
import { Button } from "@nextui-org/react";

export default function NuiButton() {
  return (
    <div className="flex gap-4 items-center">
      <Button color="success">Take a photo</Button>
      <Button color="danger" variant="bordered">
        Delete user
      </Button>
    </div>
  );
}
