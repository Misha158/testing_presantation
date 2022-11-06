import React from "react";
import { useGetPermissions } from "./useGetPermissions";

export const MockUserClass = () => {
  const permissions = useGetPermissions();

  return (
    <div>
      {permissions.readPage && <div>can read page</div>}
      <div>test</div>
    </div>
  );
};
