import { Button, Calendar, Input, Upload } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import titleIcon from "../assets/player.png"
import axios from "axios"

const getImgStr = (path) => {
  return "http://localhost:1337" + path
}

const Home = ({ fields, articles, categories, homepage }) => {
  console.log(fields)
  const [fieldItem, setFieldItem] = useState({})
  const [fieldImg, setFieldImg] = useState()
  const props = {
    name: "file",
    action: "",
    headers: {
      authorization: "authorization-text",
    },
  }
  const handleUpload = () => {}
  const handleChange = (e) => {
    console.log(e)
    setFieldImg(e.file)
  }
  const handleSubmit = () => {
    console.log(fieldItem)
    const formData = new FormData()
    const time = new Date()
    console.log(fieldImg)
    formData.append("files.QRCode", fieldImg.originFileObj, `${time.getTime()}`)
    formData.append("data", JSON.stringify(fieldItem))
    console.log(formData)
    axios
      .post("http://localhost:1337/api/fields", formData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="js-title">
        <img src={titleIcon.src} style={{ width: "2rem" }} />
        {homepage.attributes.hero.title}
      </div>
      <div className="js-container">
        {/* <Articles articles={articles} /> */}
        <div className="js-content">
          <div className="js-calendar">
            <Calendar fullscreen={false}></Calendar>
          </div>
          <div className="js-form">
            <Input
              className="js-form-item"
              placeholder="请输入场地号"
              value={fieldItem?.index}
              onChange={(e) =>
                setFieldItem((data) => {
                  console.log(data)
                  data.index = e.target.value
                  return { ...data }
                })
              }
            />
            <Input
              className="js-form-item"
              placeholder="请输入开始时间"
              value={fieldItem?.startTime}
              onChange={(e) =>
                setFieldItem((data) => {
                  data.startTime = e.target.value
                  return { ...data }
                })
              }
            />
            <Input
              className="js-form-item"
              placeholder="请输入结束时间"
              value={fieldItem?.endTime}
              onChange={(e) =>
                setFieldItem((data) => {
                  data.endTime = e.target.value
                  return { ...data }
                })
              }
            />
            <Upload {...props} onChange={handleChange}>
              <div className="js-upload" onClick={() => handleUpload()}>
                上传
              </div>
            </Upload>
            <Button type="primary" onClick={handleSubmit}>
              提交
            </Button>
          </div>
          <div className="js-field-list">
            {fields &&
              fields.map((item, index) => {
                return (
                  <div key={index} className="js-field-list-item">
                    <div className="js-field-list-item-desc">
                      场地：{item.attributes.index}
                    </div>
                    <div className="js-field-list-item-desc">
                      时间：{item.attributes.startTime.substring(0, 5)} ~{" "}
                      {item.attributes.endTime.substring(0, 5)}
                    </div>
                    <div className="js-field-list-item-desc">
                      地点：{item.attributes.location}
                    </div>
                    <div className="js-field-list-item-img">
                      <img
                        src={getImgStr(
                          item.attributes.QRCode.data.attributes.formats
                            .thumbnail.url
                        )}
                      ></img>
                    </div>
                  </div>
                )
              })}
          </div>
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
