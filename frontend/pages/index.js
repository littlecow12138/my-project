import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import FileList from "../components/field"

const Home = ({ fields, articles, categories, homepage }) => {
  console.log(fields, homepage)
  return (
    <Layout categories={categories} homepage={homepage}>
      <Seo seo={homepage.attributes.seo} />
      <div className="js-container">
        {/* <Articles articles={articles} /> */}
        <div className="js-content">
          <FileList fields={fields} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [fieldsRes, articlesRes, categoriesRes, homepageRes] =
    await Promise.all([
      fetchAPI("/fields", { populate: "*" }),
      fetchAPI("/articles", { populate: "*" }),
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/homepage", {
        populate: {
          hero: "*",
          seo: { populate: "*" },
        },
      }),
    ])
  return {
    props: {
      fields: fieldsRes.data,
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
