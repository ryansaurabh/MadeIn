import React, { useState } from "react";
import Landing from "./subpages/landing";
import Plans from "./subpages/plans";
import Crop from "./subpages/crop";

export default function TaskFour() {
  const [reverse, setReverse] = useState();
  var posts = [
    {
      header: "Hey there1",
      subtitle: "dkjsfjklsd",
      image: "https://picsum.photos/200",
      row: true,
    },
    {
      header: "Hey there2",
      subtitle: "dkjsfjklsd",
      image: "https://picsum.photos/200",
      row: true,
    },
    {
      header: "Hey there3",
      subtitle: "dkjsfjklsd",
      image: "https://picsum.photos/200",
      row: false,
    },
  ];

  return (
    <>
      <Landing />
      <Plans />
      {posts.map((d) => (
        <Crop
          row={d.row}
          header={d.header}
          subtitle={d.subtitle}
          image={d.image}
        />
      ))}
    </>
  );
}
