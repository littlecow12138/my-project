import React from "react"

const getImgStr = (path) => {
  return "http://localhost:1337" + path
}

const FieldList = ({ fields }) => {
  return (
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
                    item.attributes.QRCode.data.attributes.formats.thumbnail.url
                  )}
                ></img>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default FieldList
