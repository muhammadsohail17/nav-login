export const MenuList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Icons",
    url: "/icons",
  },
  {
    title: "Docs",
    url: "/docs",
  },
  {
    title: "Support",
    url: "/support",
  },
  {
    title: "Register",
    url: "/register",
  },
  {
    title: "log In",
    url: "/login",
  },
  {
    title: "log out",
    url: "/logout",
  },
];

export const getMenuList = (isloggedin) => {
  let array = [];
  for (const item of MenuList) {
    if (isloggedin) {
      if (item.title !== "Register") {
        if (item.title !== "log In") {
          array.push(item);
        }
      }
    }
  }
  return array;
};
