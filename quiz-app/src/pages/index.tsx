import React from "react"
import Categories from "../components/categories";
import QLogo from "../components/logo/QLogo";
import QUIZLogo from "../components/logo/QUIZLogo";
import '../styles/themes/default/theme.scss';


export default function Home() {
  return <div className="home">
    <div className="home__header">
      <QLogo />
      <QUIZLogo />
    </div>
    <Categories />
  </div>
}
