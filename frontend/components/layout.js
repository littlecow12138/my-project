import Nav from "./nav"
import Link from "next/link"
import titleIcon from "../assets/player.png"

const Layout = ({ children, categories, seo, homepage }) => (
  <>
    {/* <Nav categories={categories} /> */}
    <div className="js-title">
      <div>
        <img
          src={titleIcon.src}
          style={{ width: "2rem", marginRight: "1rem" }}
        />
        {/* {homepage.attributes.hero.title} */}
        一起运动
      </div>
      <div>
        <div className="js-sign-in">
          <Link href={`/field`}>录入信息</Link>
        </div>
      </div>
      {/* <div className="js-sign-in">
          <Link href={`/category/`}>登入</Link>
        </div> */}
    </div>
    <div style={{ padding: "1rem" }}>{children}</div>
  </>
)

export default Layout
