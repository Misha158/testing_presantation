import {User} from "./User";

export const useGetPermissions = () => {
    const permissions = User.getPermissions()

    return permissions;
}