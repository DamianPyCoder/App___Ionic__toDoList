import { useState, useEffect, createContext } from "react";
import { logo } from "../../assets";
import { ENV } from "../../utils";
import { UserContextTypes } from "./UserContext.type";

export const UserContext = createContext<UserContextTypes.Context>({
  username: "",
  avatar: "",
  onChangeUsername: () => {},
  onChangeAvatar: () => {},
});

export function UserProvider(props: UserContextTypes.Props) {
  const { children } = props;
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const responseUsername = localStorage.getItem(ENV.LOCAL_STORAGE.USERNAME);
    setUsername(responseUsername || "Anonimo");

    const responseAvatar = localStorage.getItem(ENV.LOCAL_STORAGE.AVATAR);
    setAvatar(responseAvatar || logo);
  }, []);

  const onChangeUsername = (username: string) => {
    localStorage.setItem(ENV.LOCAL_STORAGE.USERNAME, username);
    setUsername(username);
  };

  const onChangeAvatar = (avatar: string) => {
    localStorage.setItem(ENV.LOCAL_STORAGE.AVATAR, avatar);
    setAvatar(avatar);
  };

  const valueContext: UserContextTypes.Context = {
    username,
    avatar,
    onChangeUsername,
    onChangeAvatar,
  };

  return (
    <UserContext.Provider value={valueContext}>{children}</UserContext.Provider>
  );
}
