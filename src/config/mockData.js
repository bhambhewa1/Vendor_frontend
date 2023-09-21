export const drawerData = [
  {
    val: "Profile",
    isActive: false,
    src: require("../assets/profile.png"),
    Routes: "/profile",
  },
  {
    val: "Greeting cards",
    isActive: false,
    src: require("../assets/greeting.png"),
    Routes: "/greeting/categories",
  },
  {
    val: "E-Gift cards",
    isActive: false,
    src: require("../assets/egift.png"),
    Routes: "/e-giftcards",
  },
  {
    val: "Gift cards",
    isActive: false,
    src: require("../assets/gift.png"),
    Routes: "/giftcards",
  },
  {
    val: "Users",
    isActive: false,
    src: require("../assets/users.png"),
    Routes: "/Users",
  },
  {
    val: "Orders",
    isActive: false,
    src: require("../assets/orders.png"),
    Routes: "/orders/list",
  },
  {
    val: "Configurations",
    isActive: false,

    src: require("../assets/setting.png"),
    Routes: "/configurations",
  },
  { val: "Logout", src: require("../assets/logout.png"), Routes: "" },
];

export const FILE_TYPE = {
  IMAGE: 1,
  GIF: 2,
  VIDEO: 3,
  AUDIO: 4,
};
