import React, { useState } from "react";
import "./main.css";
import { myProject } from "./myproject";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");

  const [arr, setArr] = useState(myProject);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProject.filter((item) => {
      const newArr2 = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });

      return newArr2[0] === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProject);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>

        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{}}
                key={item.imgPath}
                className=" card"
              >
                <img width={300} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className=" box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit non quod magnam nulla, distinctio eaque officiis vitae
                    maiores ullam quisquam quibusdam. Minus quae sed nihil
                    inventore quia amet unde sint?
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="#">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
