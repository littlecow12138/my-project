import Layout from "../../components/layout"
import React, { useState } from "react"
import { Button, Calendar, Input, Upload } from "antd"
import axios from "axios"
import { fetchAPI } from "../../lib/api"
import FieldList from "../../components/field"

const Field = ({ fields }) => {
  console.log(fields)
  const [currentDate, setCurrentDate] = useState()
  const [fieldItem, setFieldItem] = useState({
    index: "01",
    startTime: "10:00",
    endTime: "13:00",
    location: "五卅路市民健身中心",
  })
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
    if (fieldImg && fieldImg.originFileObj)
      formData.append(
        "files.QRCode",
        fieldImg.originFileObj,
        `${time.getTime()}`
      )
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
    <Layout>
      <div className="js-operation">
        <div className="js-calendar">
          <Calendar
            fullscreen={false}
            onChange={(e) => {
              setCurrentDate(e)
              console.log(currentDate)
            }}
          ></Calendar>
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
            placeholder="请输入地址"
            value={fieldItem?.location}
            onChange={(e) =>
              setFieldItem((data) => {
                console.log(data)
                data.location = e.target.value
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
                data.startTime = e.target.value + ":00.000"
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
                data.endTime = e.target.value + ":00.000"
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
        <div className="js-content">
          <FieldList fields={fields} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [fieldsRes] = await Promise.all([
    fetchAPI("/fields", { populate: "*" }),
  ])
  return {
    props: {
      fields: fieldsRes.data,
    },
    revalidate: 1,
  }
}

export default Field
