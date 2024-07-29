import React from "react";
import ChatHeader from "./NavHeader";
import DateDivider from "./DateDivider";
import ChatItem from "./ChatItem";
import UserActions from "./UserActions";

const chatItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1057e75144ef4c3e1801b408433f7b22c5e01d5a470ceb9015661137bfd4c59d?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812",
    text: "Al Capabilities",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/53ab12a65a4ab5f89658f349945cd79c0ed0fdcff031514d542c8bf88af6c099?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812",
    text: "Brooklyn Sunrise Time",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c2c659d8b533c1fdd2af309ae04bb717fc3e12f08426e2c5b6190e073b6788d?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812",
    text: "Manhattan Bus Comparisons",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/99f7986690361798b631acd113d4ec7955ae9e1cbeebb315506c47bc2de50a37?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812",
    text: "Typo Assistance Request",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fe687c7c487b12d24b203c9ca689c51a0f1b5db13beb4a256cae2f2f65a810f?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812",
    text: "SLR Film Cameras",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86db6c9c75b6c1f2a0dac9aef278fb6791a6bda0b3ddc8e6b0ee80cb59642ae2?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812",
    text: "Quadratic Function Plot",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/933572997b98bb87c48c53ecf4710cce6b0ba4565368de5e407ce62e668c74a7?apiKey=f7c445a693754f41b608316d680ac812&&apiKey=f7c445a693754f41b608316d680ac812",
    text: "Toyota Names Poetry",
  },
];

const Navigation = () => {
  return (
    <main className="flex flex-col p-4  min-w-[230px] max-w-[500px] w-60">
      <ChatHeader />

      <DateDivider date="联系人" />
      {chatItems.slice(0, 4).map((item, index) => (
        <ChatItem
          key={index}
          icon={item.icon}
          text={item.text}
        />
      ))}

      <DateDivider date="群聊" />
      {chatItems.slice(4).map((item, index) => (
        <ChatItem
          key={index + 4}
          icon={item.icon}
          text={item.text}
        />
      ))}
      <UserActions />
    </main>
  );
};

export default Navigation;
