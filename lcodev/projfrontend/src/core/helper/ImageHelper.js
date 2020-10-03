import React from "react"

const Imagehelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `https://cdn.hipwallpaper.com/i/38/43/aWc1dR.jpg`
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  )
}

export default Imagehelper
